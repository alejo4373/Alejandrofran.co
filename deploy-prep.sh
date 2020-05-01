#!/bin/sh

echo "=== BUILDING REACT APP ===="
npm run build

FILES=`ls | grep -v "CNAME\|build"` # Find everything that is not the CNAME or the build/ directory

for file in $FILES
do
  rm -rfv $file
done

mv build/* .
