import requests
import json
import time
import os

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
    "Tata Motors",
    "Apollo Tyres",
    "Exide Industries",
    "Mahindra"
]

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'
}

mapping = {}

if not os.path.exists('public/logos'):
    os.makedirs('public/logos')

for brand in brands:
    print(f"Searching for {brand}...")
    # Search wikimedia commons for SVGs
    search_url = f"https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch={brand} logo filetype:svg&utf8=&format=json"
    
    try:
        res = requests.get(search_url, headers=headers)
        data = res.json()
        search_results = data.get('query', {}).get('search', [])
        
        if not search_results:
            # Try without filetype:svg, just png
            search_url = f"https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch={brand} logo filetype:png&utf8=&format=json"
            res = requests.get(search_url, headers=headers)
            search_results = res.json().get('query', {}).get('search', [])
            
        if search_results:
            title = search_results[0]['title']
            print(f"Found title: {title}")
            
            # Use Special:FilePath to download it
            dl_url = f"https://commons.wikimedia.org/wiki/Special:FilePath/{title.split('File:')[1]}"
            dl_res = requests.get(dl_url, headers=headers, allow_redirects=True)
            
            if dl_res.status_code == 200:
                ext = '.svg' if title.lower().endswith('.svg') else '.png'
                filename = brand.lower().replace(' ', '_') + ext
                filepath = os.path.join('public', 'logos', filename)
                
                with open(filepath, 'wb') as f:
                    f.write(dl_res.content)
                
                mapping[brand] = f"/logos/{filename}"
                print(f"Downloaded {filename}")
            else:
                print(f"Failed to download {title}")
        else:
            print(f"No results for {brand}")
            
    except Exception as e:
        print(f"Error processing {brand}: {e}")
        
    time.sleep(1)

with open('final_logo_mapping.json', 'w') as f:
    json.dump(mapping, f, indent=2)

print("Done.")
