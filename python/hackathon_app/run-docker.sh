set -e
cd "$(dirname "$0")"
ENV_LIST=./env.list
if [ ! -f $ENV_LIST ]; then
	echo "Please create env.list from env.list.sample"
	exit 1
fi
source $ENV_LIST
docker run \
	-d \
	--name hackathon_app_container \
	-p 8080:80 \
	-e FLASK_WTF_CSRF_SECRET_KEY=$FLASK_WTF_CSRF_SECRET_KEY \
	-e FLASK_SECRET_KEY=$FLASK_SECRET_KEY \
	-e LOOKERSDK_CLIENT_ID=$LOOKERSDK_CLIENT_ID \
	-e LOOKERSDK_SECRET_KEY=$LOOKERSDK_SECRET_KEY \
	-e GOOGLE_APPLICATION_CREDENTIAL_ENCODED=$GOOGLE_APPLICATION_CREDENTIAL_ENCODED \
	-e LOOKERSDK_API_VERSION=$LOOKERSDK_API_VERSION \
	-e LOOKERSDK_BASE_URL=$LOOKERSDK_BASE_URL \
	-e LOOKERSDK_VERIFY_SSL=$LOOKERSDK_VERIFY_SSL \
	-e GOOGLE_APPLICATION_CREDENTIALS=$GOOGLE_APPLICATION_CREDENTIALS \
	-e GOOGLE_SHEET_ID=$GOOGLE_SHEET_ID \
	hackathon_app
docker logs -f hackathon_app_container