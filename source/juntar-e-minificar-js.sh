#!/bin/bash

output_file="scripts.min.js"

rm -rf $output_file
for file in js/*.js; do
    echo $file
    cat "$file" >> $output_file
done

terser $output_file -o $output_file --compress --mangle
mv $output_file "../$output_file"

