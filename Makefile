up:
	docker compose up -d
up-dev:
	docker compose --profile dev up -d
build:
	docker compose build
build-nc:
	docker compose build --no-cache --force-rm
down:
	docker compose down --remove-orphans
down-v:
	docker compose down --remove-orphans --volumes
restart:
	@make down
	@make up
restart-dev:
	@make down
	@make up-dev
.PHONY: client
client:
	docker compose run --rm client sh
.PHONY: server
server:
	docker compose exec server bash
