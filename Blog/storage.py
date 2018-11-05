from whitenoise.storage import CompressedManifestStaticFilesStorage
from django.contrib.staticfiles.storage import ManifestFilesMixin

class WhiteNoiseStaticFilesStorage(CompressedManifestStaticFilesStorage):
    ManifestFilesMixin.manifest_strict = False 