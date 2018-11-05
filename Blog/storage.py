from whitenoise.storage import CompressedManifestStaticFilesStorage

class WhiteNoiseStaticFilesStorage(CompressedManifestStaticFilesStorage):
	super().manifest_strict = False 