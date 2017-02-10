import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

LOCAL_SECRET_KEY = ''
LOCAL_ALLOWED_HOSTS = []
LOCAL_DEBUG = True

LOCAL_DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}
