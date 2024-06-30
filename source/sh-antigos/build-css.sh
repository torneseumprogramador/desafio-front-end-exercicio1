#!/bin/bash

SRC_DIR="css"
DST_DIR="../"

for file in "$SRC_DIR"/*.css; do
  filename=$(basename -- "$file")
  cleancss "$file" -o "$DST_DIR$filename"
done
