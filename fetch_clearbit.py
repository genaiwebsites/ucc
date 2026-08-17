import socket
import requests
import dns.resolver

brands = {
    "godrej": "godrej.com",
    "dupont": "dupont.com",
    "dow": "dow.com",
    "reliance": "ril.com",
    "lanxess": "lanxess.com",
    "basf": "basf.com",
    "akzonobel": "akzonobel.com",
    "bayer": "bayer.com",
    "evonik": "evonik.com",
    "wacker": "wacker.com",
    "3m": "3m.com",
    "pidilite": "pidilite.com",
    "tatachemicals": "tatachemicals.com",
    "solvay": "solvay.com",
    "bata": "bata.in",
    "mrf": "mrftyres.com",
    "tata": "tatamotors.com",
    "apollo": "apollotyres.com",
    "exide": "exideindustries.com",
    "mahindra": "mahindra.com"
}

import os
if not os.path.exists('public/logos'):
    os.makedirs('public/logos')

resolver = dns.resolver.Resolver(configure=False)
resolver.nameservers = ['8.8.8.8', '1.1.1.1']

try:
    answer = resolver.resolve('logo.clearbit.com', 'A')
    ip = answer[0].to_text()
    print(f"Resolved logo.clearbit.com to {ip}")
    
    mapping = {}
    for name, domain in brands.items():
        try:
            url = f"https://logo.clearbit.com/{domain}"
            headers = {'Host': 'logo.clearbit.com'}
            # we use the ip directly
            req_url = f"https://{ip}/{domain}"
            print(f"Fetching {name} from {url}")
            res = requests.get(req_url, headers=headers, verify=False, timeout=10)
            if res.status_code == 200:
                with open(f"public/logos/{name}.png", "wb") as f:
                    f.write(res.content)
                mapping[name] = f"/logos/{name}.png"
                print(f"Success: {name}")
            else:
                print(f"Failed {name}: {res.status_code}")
        except Exception as e:
            print(f"Error {name}: {e}")

    import json
    with open('clearbit_mapping.json', 'w') as f:
        json.dump(mapping, f, indent=2)

except Exception as e:
    print(f"DNS Resolution failed: {e}")
