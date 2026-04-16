import requests
from bs4 import BeautifulSoup

urls = [
    'https://bisque-lark-249231.hostingersite.com/about-us/',
    'https://bisque-lark-249231.hostingersite.com/contact-us/',
    'https://bisque-lark-249231.hostingersite.com/ecommerce-services/',
    'https://bisque-lark-249231.hostingersite.com/digital-marketing/',
    'https://bisque-lark-249231.hostingersite.com/business-automation/',
    'https://bisque-lark-249231.hostingersite.com/e-commerce-catalog-management/',
    'https://bisque-lark-249231.hostingersite.com/recruitment/',
    'https://bisque-lark-249231.hostingersite.com/account-management-system/',
    'https://bisque-lark-249231.hostingersite.com/inventory-management-system/',
    'https://bisque-lark-249231.hostingersite.com/production-management-system/',
    'https://bisque-lark-249231.hostingersite.com/purchase-management-system/',
    'https://bisque-lark-249231.hostingersite.com/hr-management-system/',
    'https://bisque-lark-249231.hostingersite.com/employee-task-management-system/',
    'https://bisque-lark-249231.hostingersite.com/search-engine-optimization/',
    'https://bisque-lark-249231.hostingersite.com/pay-per-click-management/',
    'https://bisque-lark-249231.hostingersite.com/gmb-creation/',
    'https://bisque-lark-249231.hostingersite.com/web-development/',
    'https://bisque-lark-249231.hostingersite.com/web-designing/',
    'https://bisque-lark-249231.hostingersite.com/online-reputation-management/',
    'https://bisque-lark-249231.hostingersite.com/indiamart-account-management/',
    'https://bisque-lark-249231.hostingersite.com/e-commerce-account-creation/',
    'https://bisque-lark-249231.hostingersite.com/e-commerce-account-management/',
    'https://bisque-lark-249231.hostingersite.com/e-commerce-ad-campaigns-management/',
    'https://bisque-lark-249231.hostingersite.com/social-media-marketing/',
    'https://bisque-lark-249231.hostingersite.com/career/',
    'https://bisque-lark-249231.hostingersite.com/digital-marketing-service/',
    'https://bisque-lark-249231.hostingersite.com/content-marketing/'
]

for u in urls:
    try:
        r = requests.get(u, timeout=15)
        r.raise_for_status()
        s = BeautifulSoup(r.text, 'html.parser')
        title = s.title.string.strip() if s.title else ''
        desc_tag = s.find('meta', attrs={'name': 'description'}) or s.find('meta', attrs={'property': 'og:description'})
        desc = desc_tag['content'].strip() if desc_tag and desc_tag.get('content') else ''
        print('URL:', u)
        print('TITLE:', title)
        print('DESCRIPTION:', desc)
        print('---')
    except Exception as e:
        print('URL:', u, 'ERROR', e)
        print('---')
