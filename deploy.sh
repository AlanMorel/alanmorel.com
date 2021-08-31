set -x
git stash
git pull
git stash apply 0
git stash drop 0
echo $(($(date +%s))) > version.txt
docker compose build
docker compose up --detach