#!/bin/sh

npm run build &&
git add dist &&
git commit -m "Build the latest version" &&
git subtree push --prefix dist origin gh-pages
