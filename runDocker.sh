#!/bin/bash

# Baixa a imagem
docker pull mongo

# Remove o container, se existir
docker stop db-esk-crush-api
docker container rm db-esk-crush-api

# Gera o container
docker run --name db-esk-crush-api -p 27017:27017 -d mongo