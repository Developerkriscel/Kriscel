import re
import ssl
from urllib.request import Request, urlopen

urls = [
    '/', '/about-us/', '/contact-us/', '/ecommerce-services/', '/digital-marketing/',
    '/business-automation/', '/e-commerce-catalog-management/', '/recruitment/',
    '/account-management-system/', '/inventory-management-system/',
    '/production-management-system/', '/purchase-management-system/',
    '/hr-management-system/', '/search-engine-optimization/', '/pay-per-click-management/',
    '/gmb-creation/', '/web-development/', '/web-designing/',
    '/online-reputation-management/', '/indiamart-account-management/',
    '/social-media-marketing/', '/e-commerce-account-management/',
    '/career/', '/digital-marketing-service/', '/internet-marketing-agency/', '/e-commerce-ad-campaigns-management/', '/e-commerce-account-creation/'
]

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE
base = 'https://bisque-lark-249231.hostingersite.com'

for path in urls:
    url = base + path
    try:
        req = Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urlopen(req, context=ctx, timeout=20) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
        title = re.search(r'<title>(.*?)</title>', html, re.S | re.I)
        desc = re.search(r'<meta[^>]+name=["\']description["\'][^>]+content=["\']([^"\']*)["\']', html, re.S | re.I)
        print('PATH:', path)
        print('TITLE:', title.group(1).strip() if title else '')
        print('DESC:', desc.group(1).strip() if desc else '')
    except Exception as e:
        print('PATH:', path)
        print('ERROR:', e)
    print('---')
