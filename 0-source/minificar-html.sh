#!/bin/bash

for file in html/*.html; do
    filename=$(basename -- "$file")
    echo $file
    html-minifier --collapse-whitespace --remove-comments --remove-optional-tags --minify-css true --minify-js true "$file" -o "../$filename"
done