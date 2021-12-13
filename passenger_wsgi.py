# -*- coding: utf-8 -*-
import os, sys
sys.path.insert(0, '/var/www/u1549894/data/www/children-for-children.ru/ChildrenForChildren')
sys.path.insert(1, '/var/www/u1549894/data/venv/lib/python3.8/site-packages')
os.environ['DJANGO_SETTINGS_MODULE'] = 'ChildrenForChildren.settings'
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()