#!/bin/bash

output_file="styles.min.css"

rm -rf $output_file
for file in css/*.css; do
    echo $file
    cat "$file" >> $output_file
done

cleancss $output_file -o $output_file
mv $output_file "../$output_file"

