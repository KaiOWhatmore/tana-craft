images_pwd="public/images-copy/"
find $images_pwd -type f -exec basename {} \; | while IFS= read -r file; do
    # select files which do not have a correpsonding small version
    if [[ "$file" != *-small* ]]; then
        echo "Processing file: $file"
        base="${file%.*}"    # gets everything before the last dot
        ext="${file##*.}"    # gets the extension (after the last dot)
        new_file="${base}-small.${ext}"
        # touch public/images-copy/$new_file
        ffmpeg -i $images_pwd$file -vf scale=20:-1 $images_pwd$new_file
    else
        echo "Skipping file: $file (already modified)"
    fi
    done
