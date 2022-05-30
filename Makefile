SHELL := /bin/bash
PATH := bin:$(PATH)

.PHONY: test-ci-run
test-ci-run:
	npm run test:ci

.PHONY: test-ci-teardown
test-ci-teardown:
	docker compose -f docker/docker-compose.yaml stop

.PHONY: test-ci-container
test-ci-container:
	docker compose -f docker/docker-compose.yaml up -d

.PHONY: test-ci
test-ci: test-ci-container 	test-ci-run test-ci-teardown