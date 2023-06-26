#!/bin/bash

# clean build

./gradlew clean build

# if server is still running, then stop it
ps -ef | grep "Pre-Project-0.0.1-SNAPSHOT.jar" | grep -v grep | awk '{print $2}' | xargs kill -9 2> /dev/null

if [ $? -eq 0 ];then
    echo "Application Stop Success!"
else
    echo "Application Not Running"
fi

# restart server deployment file
echo "Application Restart"
echo $1

# nohup executes server on background
nohup java -jar build/libs/Pre-Project-0.0.1-SNAPSHOT.jar --spring.profiles.active=dev > /dev/null 2>&1 &