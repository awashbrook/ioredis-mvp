REDIS_PASSWORD=$1

node load-list $REDIS_PASSWORD
node load-list-pipeline $REDIS_PASSWORD
node load-list-parallel $REDIS_PASSWORD
node load-sorted-set $REDIS_PASSWORD
node load-sorted-set-pipeline $REDIS_PASSWORD