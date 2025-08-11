#!/bin/bash

cd ..
git branch dev
git checkout dev
git pull origin dev --allow-unrelated-histories
cd ..