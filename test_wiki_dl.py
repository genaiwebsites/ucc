import urllib.request

url = "https://commons.wikimedia.org/wiki/Special:FilePath/Godrej_Logo.svg"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'})

try:
    with urllib.request.urlopen(req) as response:
        content = response.read()
        print(f"Downloaded {len(content)} bytes")
        with open('public/logos/godrej_test.svg', 'wb') as f:
            f.write(content)
except Exception as e:
    print(f"Error: {e}")
