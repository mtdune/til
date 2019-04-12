# PHP

## レガシー環境構築

```docker-compose.yml
version: "2"
services:
  php:
    build:
      context: .
      dockerfile: dockerfile-php
    container_name: php
    volumes:
      - "./working:/var/www/html"
    ports:
      - "8000:80"
    restart: always
    networks:
      - default

networks:
  default:
    driver: bridge
```

```dockerfile-php
FROM php:5.5.30-apache
```