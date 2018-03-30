#!/usr/bin/env bash

echo "Generando build"
ng build --prod --no-aot
echo "Enviando a Firebase"
firebase deploy --only hosting
