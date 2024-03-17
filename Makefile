build-HelloWorldFunction:
	# npm install esbuild
	# npx esbuild hello-world/app.js --platform=node --target=esnext --format=esm --bundle --external:@aws-sdk --external:uuid --outdir=out
	# cp -r out/*js $(ARTIFACTS_DIR)
	cp -r hello-world/app.js ${ARTIFACTS_DIR}
	curl -s https://api.github.com/repos/awslabs/llrt/releases/latest | grep "llrt-lambda-x64.zip" | cut -d : -f 2,3 | tail -1 | xargs curl -o llrt.zip -L
	unzip llrt.zip
	mv bootstrap $(ARTIFACTS_DIR)
