start:
	docker compose up -d

build:
	docker compose build --no-cache

stop:
	docker compose stop

clean:
	docker compose down -v