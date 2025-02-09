find . -type f -print0 | while IFS= read -r -d '' file; do
    echo "Processing file: $file"
    touch "small-$file"
    # Do whatever the fuck you need with "$file"
done
