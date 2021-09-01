set -x
git stash
git pull
git stash apply 0
git stash drop 0
VERSION=$(cat version.txt)
echo -n $((VERSION+1)) > version.txt
docker compose build
docker compose up --detach