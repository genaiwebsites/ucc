import urllib.request
import urllib.parse
import time
import os

files = {
    "godrej": "Godrej_Logo.svg",
    "dupont": "DuPont_logo.svg",
    "dow": "Dow_Chemical_Company_logo.svg",
    "reliance": "Reliance_Industries_Logo.svg",
    "lanxess": "LANXESS_logo.svg",
    "basf": "BASF_Logo.svg",
    "akzonobel": "AkzoNobel_Logo.svg",
    "bayer": "Bayer_Logo.svg",
    "evonik": "Evonik_Logo.svg",
    "wacker": "Wacker_Chemie_logo.svg",
    "3m": "3M_wordmark.svg",
    "pidilite": "Pidilite_Logo.svg",
    "tatachemicals": "Tata_Chemicals_Logo.svg",
    "solvay": "Logo_Solvay.svg",
    "bata": "Bata_logo.svg",
    "mrftyres": "MRF_logo.svg",
    "tatamotors": "Tata_logo.svg",
    "apollotyres": "Apollo_Tyres_Logo.svg",
    "exide": "Exide_Industries_Logo.svg",
    "mahindra": "Mahindra_and_Mahindra_Logo.svg"
}

if not os.path.exists('public/logos'):
    os.makedirs('public/logos')

def download_file(url, dest):
    req = urllib.request.Request(url, headers={
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9'
    })
    try:
        with urllib.request.urlopen(req) as res:
            with open(dest, 'wb') as f:
                f.write(res.read())
            return True
    except Exception as e:
        print(f"Failed {dest}: {e}")
        return False

for key, filename in files.items():
    dest = f"public/logos/{key}.svg"
    # Skip if file already exists and is not 0 bytes
    if os.path.exists(dest) and os.path.getsize(dest) > 1000:
        print(f"Skipping {key}, already downloaded")
        continue
        
    url = f"https://commons.wikimedia.org/wiki/Special:FilePath/{urllib.parse.quote(filename)}"
    print(f"Downloading {key}...")
    success = download_file(url, dest)
    if success:
        print(f"  OK {key}")
    time.sleep(2)
