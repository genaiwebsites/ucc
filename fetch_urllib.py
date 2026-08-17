import urllib.request
import urllib.parse
import json
import time
import os

brands = [
    "Godrej",
    "DuPont",
    "Dow Chemical",
    "Reliance Industries",
    "Lanxess",
    "BASF",
    "AkzoNobel",
    "Bayer",
    "Evonik",
    "Wacker",
    "3M",
    "Pidilite",
    "Tata Chemicals",
    "Solvay",
    "Bata",
    "MRF Tyres",
    "Tata Motors",
    "Apollo Tyres",
    "Exide",
    "Mahindra"
]

if not os.path.exists('public/logos'):
    os.makedirs('public/logos')

mapping = {}

def fetch_json(url):
    req = urllib.request.Request(url, headers={
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9'
    })
    with urllib.request.urlopen(req) as res:
        return json.loads(res.read().decode('utf-8'))

def download_file(url, dest):
    req = urllib.request.Request(url, headers={
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9'
    })
    with urllib.request.urlopen(req) as res:
        with open(dest, 'wb') as f:
            f.write(res.read())

for brand in brands:
    try:
        print(f"Searching {brand}...")
        q = urllib.parse.quote(f"{brand} logo")
        url = f"https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch={q}&srnamespace=6&format=json"
        
        data = fetch_json(url)
        results = data.get('query', {}).get('search', [])
        
        # find SVG
        valid = next((r for r in results if r['title'].lower().endswith('.svg')), None)
        if not valid:
            valid = next((r for r in results if r['title'].lower().endswith('.png')), None)
            
        if valid:
            title = valid['title']
            print(f"  Found: {title}")
            dl_url = f"https://commons.wikimedia.org/wiki/Special:FilePath/{urllib.parse.quote(title.replace('File:', ''))}"
            
            ext = '.svg' if title.lower().endswith('.svg') else '.png'
            filename = f"{brand.lower().replace(' ', '_')}{ext}"
            dest = f"public/logos/{filename}"
            
            download_file(dl_url, dest)
            print(f"  Downloaded {filename}")
            mapping[brand] = f"/logos/{filename}"
        else:
            print(f"  No logo found for {brand}")
            
    except Exception as e:
        print(f"  Error for {brand}: {e}")
        
    time.sleep(1)

with open('final_mapping.json', 'w') as f:
    json.dump(mapping, f, indent=2)

print("Done")
