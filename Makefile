
build:
	docker run --rm \
	-v $(PWD):/opt/app/ \
	-w /opt/app/ \
	node:6.10.2 make buildLocal
.PHONY: build

buildLocal:
	npm i -q;
	npm run build;
.PHONY: buildLocal

buildLocalProxy:
	npm config set proxy http://10.201.240.250:8080;
	npm config set https-proxy http://10.201.240.250:8080;
	npm i -q;
	npm run build;
.PHONY: buildLocalProxy