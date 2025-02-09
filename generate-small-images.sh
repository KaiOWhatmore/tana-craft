images_pwd="public/images-copy"
find "$images_pwd" -type f -not -name ".DS_Store" -print0 | while IFS= read -r -d '' full_path; do
    # Remove any trailing dot from the full path
    full_path="${full_path%.}"
    file=$(basename "$full_path")
    
    # Only process jpg files that don't already have a small version in the name
    if [[ "$file" != *-small* && "$file" != *_small* && "$file" == *.jpg ]]; then
        base="${file%.*}"    # everything before the last dot
        ext="${file##*.}"    # the extension
        new_file="${base}_small.${ext}"
        if [[ -f "$images_pwd/$new_file" ]]; then
            echo "Skipping file: $file (small version already exists)"
        else
            echo "Processing file: $file"
            ffmpeg -y -i "$full_path" -vf scale=20:-1 -frames:v 1 "$images_pwd/$new_file"

        fi
    else
        echo "Skipping file: $file (already modified or not a jpg)"
    fi
done
