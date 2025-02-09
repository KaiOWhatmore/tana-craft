images_pwd="public/images"
find "$images_pwd" -type f -not -name ".DS_Store" -print0 | while IFS= read -r -d '' full_path; do
    # Clean up any trailing dot
    full_path="${full_path%.}"
    file=$(basename "$full_path")
    
    # Only process jpg files that don't already have a small version
    if [[ "$file" != *-small* && "$file" != *_small* && "$file" == *.jpg ]]; then
        # Get the directory containing the file
        dir=$(dirname "$full_path")
        base="${file%.*}"   # everything before the last dot
        ext="${file##*.}"   # the extension
        new_file="${base}_small.${ext}"
        
        if [[ -f "$dir/$new_file" ]]; then
            echo "Skipping file: $file (small version already exists in $dir)"
        else
            echo "Processing file: $file in directory: $dir"
            ffmpeg -y -i "$full_path" -vf scale=20:-1 -frames:v 1 "$dir/$new_file"
        fi
    else
        echo "Skipping file: $file (already modified or not a jpg)"
    fi
done
