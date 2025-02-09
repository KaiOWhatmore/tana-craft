find public/images-copy -type f -exec basename {} \; | while IFS= read -r file; do
    if [[ "$file" != *-small* ]]; then
        echo "Processing file: $file"
        base="${file%.*}"    # gets everything before the last dot
        ext="${file##*.}"    # gets the extension (after the last dot)
        new_file="${base}-small.${ext}"
        touch public/images-copy/$new_file
    else
        echo "Skipping file: $file (already modified)"
    fi
    done
