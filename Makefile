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
client:
	docker compose exec client sh
server:
	docker compose exec server bash
init-dev:
	@make build-nc
	docker compose run --rm client npm install
	docker compose --profile dev up -d --build
	docker compose exec server cp .env.example .env
	docker compose exec server cp ./app/local_settings.example.py ./app/local_settings.py
	@make restart-dev