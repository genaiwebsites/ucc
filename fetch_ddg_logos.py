import os
import requests
from duckduckgo_search import DDGS
from urllib.parse import urlparse

brands = [
    "Godrej Industries",
    "DuPont",
    "Dow Chemical",
    "Reliance Industries",
    "Lanxess",
    "BASF",
    "AkzoNobel",
    "Bayer",
    "Evonik",
    "Wacker Chemie",
    "3M",
    "Pidilite",
    "Tata Chemicals",
    "Solvay",
    "Bata",
    "MRF Tyres",
    "Apollo Tyres",
    "Exide Industries",
    "Mahindra"
]

# We know Tata works from wiki but let's download everything locally to be uniform
# Since Tata Motors was working via wiki, let's include it to be 100% local

def download_logo(brand):
    ddgs = DDGS()
    query = f"{brand} logo hd png transparent"
    try:
        results = ddgs.images(query, max_results=3)
        for res in results:
            url = res['image']
            ext = os.path.splitext(urlparse(url).path)[1]
            if ext.lower() not in ['.png', '.jpg', '.jpeg', '.svg']:
                ext = '.png'
            
            filename = brand.lower().replace(" ", "_") + ext
            filepath = os.path.join('public', 'logos', filename)
            
            headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
            
            print(f"Attempting to download {brand} from {url}")
            try:
                img_data = requests.get(url, headers=headers, timeout=10).content
                with open(filepath, 'wb') as f:
                    f.write(img_data)
                print(f"Success: {brand} -> {filename}")
                return filename
            except Exception as e:
                print(f"Failed to download {url}: {e}")
                continue
    except Exception as e:
        print(f"Failed search for {brand}: {e}")
    return None

import time

if not os.path.exists(os.path.join('public', 'logos')):
    os.makedirs(os.path.join('public', 'logos'))

mapping = {}

# Install requests if not present
# This script assumes requests is installed

for brand in brands:
    print(f"Processing {brand}...")
    filename = download_logo(brand)
    if filename:
        mapping[brand] = f"/logos/{filename}"
    time.sleep(1)

with open('logo_mapping.json', 'w') as f:
    import json
    json.dump(mapping, f, indent=2)

print("Done downloading logos.")
