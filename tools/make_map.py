#!/usr/bin/env python3
"""
Observatory — map generator.
Собирает реальную карту из тайлов Carto/OSM и красит её в палитру места.

Быстрый старт:
    pip install pillow numpy
    python make_map.py

Меняешь блок CONFIG ниже (центр, зум, палитра, точки) и запускаешь заново.
Ключ/токен не нужен — используются публичные тайлы. Атрибуция обязательна:
подпиши на макете «© OpenStreetMap © CARTO».
"""
import math, io, sys, urllib.request, argparse
from PIL import Image, ImageDraw
import numpy as np

# ============================ CONFIG ============================
CONFIG = {
    "center":  (45.4653, 9.1888),   # центр маршрута (Дуомо — Ла Скала)
    "zoom":    16,
    "size":    (760, 520),
    "palette": "duomo",
    "out":     "map.png",

    # МАРШРУТ (объекты экскурсии). 1–2 — точные координаты от заказчика, 3–7 — примерные.
    "route": [
        (45.464167, 9.191389),  # 1  Duomo di Milano             [заказчик]
        (45.4659,   9.1900),    # 2  Galleria Vittorio Emanuele  [заказчик]
        (45.4675,   9.1895),    # 3  Teatro alla Scala           (~)
        (45.4669,   9.1892),    # 4  Palazzo Marino              (~)
        (45.4645,   9.1886),    # 5  Piazza dei Mercanti         (~)
        (45.4631,   9.1873),    # 6  San Satiro                  (~)
        (45.4632,   9.1862),    # 7  Pinacoteca Ambrosiana       (~)
    ],
    "draw_pins": True,
}

# ---- пресеты под токены. bg = фон, road = цвет улиц, route = акцент маршрута/пинов.
#      base: 'dark' (тёмные палитры) или 'light' (светлые) — какой баземап тянуть.
PALETTES = {
    "duomo":      {"base": "dark",  "bg": (20, 17, 12),  "road": (150, 126, 74), "route": (200, 162, 76)},
    "night":      {"base": "dark",  "bg": (26, 26, 28),  "road": (120, 118, 110),"route": (203, 182, 140)},
    "cosmos":     {"base": "light", "bg": (255, 255, 255),"road": (198, 196, 192),"route": (19, 18, 17)},
    "santorini":  {"base": "light", "bg": (251, 252, 254),"road": (200, 214, 228),"route": (46, 111, 176)},
    "terracotta": {"base": "light", "bg": (244, 240, 232),"road": (215, 205, 186),"route": (192, 97, 59)},
    "krem":       {"base": "light", "bg": (241, 233, 210),"road": (205, 191, 165),"route": (110, 96, 71)},
}
BASEMAP = {"dark": "dark_nolabels", "light": "light_nolabels"}
# ================================================================

HOSTS = ["https://a.basemaps.cartocdn.com", "https://b.basemaps.cartocdn.com", "https://c.basemaps.cartocdn.com"]
UA = {"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36"}

def world_px(lat, lon, z):
    n = 256 * 2 ** z
    x = (lon + 180) / 360 * n
    latr = math.radians(lat)
    y = (1 - math.log(math.tan(latr) + 1 / math.cos(latr)) / math.pi) / 2 * n
    return x, y

def fetch_tile(style, z, tx, ty):
    for h in HOSTS:
        try:
            u = f"{h}/{style}/{z}/{tx}/{ty}.png"
            b = urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=10).read()
            return Image.open(io.BytesIO(b)).convert("RGB")
        except Exception:
            continue
    return None

def build(cfg):
    lat, lon = cfg["center"]; z = cfg["zoom"]; W, H = cfg["size"]
    pal = PALETTES[cfg["palette"]]; style = BASEMAP[pal["base"]]
    cx, cy = world_px(lat, lon, z)
    left, top = cx - W / 2, cy - H / 2               # окно вывода в мировых px
    tx0, ty0 = int(left // 256), int(top // 256)
    tx1, ty1 = int((left + W) // 256), int((top + H) // 256)

    canvas = Image.new("RGB", ((tx1 - tx0 + 1) * 256, (ty1 - ty0 + 1) * 256), (26, 26, 26))
    ok = 0
    for tx in range(tx0, tx1 + 1):
        for ty in range(ty0, ty1 + 1):
            t = fetch_tile(style, z, tx, ty)
            if t: canvas.paste(t, ((tx - tx0) * 256, (ty - ty0) * 256)); ok += 1
    print(f"tiles: {ok}/{(tx1-tx0+1)*(ty1-ty0+1)}")
    ox, oy = tx0 * 256, ty0 * 256
    crop = canvas.crop((int(left - ox), int(top - oy), int(left - ox) + W, int(top - oy) + H))

    # --- duotone под палитру: фон -> bg, улицы -> road (авто-нормализация по перцентилям)
    g = np.asarray(crop.convert("L")).astype(np.float32)
    lo, hi = np.percentile(g, 20), np.percentile(g, 99)
    if pal["base"] == "light":
        lo, hi = np.percentile(g, 2), np.percentile(g, 60)   # у светлых улицы — светлые, фон тоже
    t = np.clip((g - lo) / max(hi - lo, 1), 0, 1) ** 0.85
    bg = np.array(pal["bg"]); road = np.array(pal["road"])
    rgb = (bg[None, None, :] + (road - bg)[None, None, :] * t[:, :, None]).astype(np.uint8)
    im = Image.fromarray(rgb, "RGB")

    # --- маршрут + пины
    d = ImageDraw.Draw(im)
    def px(la, lo_):
        x, y = world_px(la, lo_, z); return (x - left, y - top)
    route = cfg.get("route", [])
    if len(route) >= 2:
        pts = [px(*p) for p in route]
        d.line(pts, fill=tuple(pal["bg"]), width=9, joint="curve")     # тёмная обводка
        d.line(pts, fill=tuple(pal["route"]), width=5, joint="curve")  # акцент
    if cfg.get("draw_pins") and route:
        surf = tuple(int(c * 0.35 + b * 0.65) for c, b in zip(pal["route"], pal["bg"]))
        for i, p in enumerate(route):
            x, y = px(*p); r = 13 if i in (0, len(route) - 1) else 10
            d.ellipse([x-r, y-r, x+r, y+r], fill=surf, outline=tuple(pal["route"]), width=3)
            d.ellipse([x-3.5, y-3.5, x+3.5, y+3.5], fill=tuple(pal["route"]))

    im.save(cfg["out"]); print("saved", cfg["out"], im.size)

def main():
    ap = argparse.ArgumentParser(description="Observatory map generator")
    ap.add_argument("--palette", choices=list(PALETTES))
    ap.add_argument("--zoom", type=int)
    ap.add_argument("--lat", type=float); ap.add_argument("--lon", type=float)
    ap.add_argument("--out")
    a = ap.parse_args()
    cfg = dict(CONFIG)
    if a.palette: cfg["palette"] = a.palette
    if a.zoom: cfg["zoom"] = a.zoom
    if a.lat and a.lon: cfg["center"] = (a.lat, a.lon)
    if a.out: cfg["out"] = a.out
    build(cfg)

if __name__ == "__main__":
    main()
