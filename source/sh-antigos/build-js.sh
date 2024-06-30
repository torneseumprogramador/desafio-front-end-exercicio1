#!/bin/bash

SRC_DIR="js"
DST_DIR="../"

for file in "$SRC_DIR"/*.js; do
  filename=$(basename -- "$file")
  terser "$file" -o "$DST_DIR$filename" --compress --mangle
done
