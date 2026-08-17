import requests
import time

logos = [
    "Godrej_Logo.svg",
    "DuPont_logo.svg",
    "Dow_Chemical_Company_logo.svg",
    "Reliance_Industries_Logo.svg",
    "LANXESS_logo.svg",
    "BASF_Logo.svg",
    "AkzoNobel_Logo.svg",
    "Bayer_Logo.svg",
    "Evonik_Logo.svg",
    "Wacker_Chemie_logo.svg",
    "3M_wordmark.svg",
    "Pidilite_Logo.svg",
    "Tata_Chemicals_Logo.svg",
    "Logo_Solvay.svg",
    "Bata_logo.svg",
    "MRF_logo.svg",
    "Tata_logo.svg",
    "Apollo_Tyres_Logo.svg",
    "Exide_Industries_Logo.svg",
    "Mahindra_and_Mahindra_Logo.svg"
]

headers = {
    'User-Agent': 'BotUsha/1.0 (Contact: me@example.com)'
}

results = {}

for logo in logos:
    url = f"https://commons.wikimedia.org/wiki/Special:FilePath/{logo}"
    try:
        res = requests.head(url, headers=headers, allow_redirects=True, timeout=5)
        if res.status_code == 200:
            print(f"OK: {logo}")
            results[logo] = True
        else:
            print(f"Failed {logo}: {res.status_code}")
            results[logo] = False
    except Exception as e:
        print(f"Error {logo}: {e}")
        results[logo] = False
    time.sleep(1)

import json
with open('wiki_check.json', 'w') as f:
    json.dump(results, f, indent=2)
