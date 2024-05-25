#! /bin/bash

# Copy the scaffolding component as a new component with the provided component name
cp -R ./scripts/scaffold/__component ./src/$2/$1; 

# Move to the component directory 
cd ./src/$2/$1; 

# Rename the component files 
mv __Component.tsx $1.tsx; 

## Find and replace all instance of __Component with the provided component name; 
sed -i '' -e "s/__Component/$1/g" ${1}.tsx; 
sed -i '' -e "s/__Component/$1/g" index.ts; 
