#!/bin/bash
./fetch.sh

if [ $? -ne 0 ]; then
	echo fetch source files fail
	exit 1
fi

./build.sh
if [ $? -ne 0 ]; then
	echo build pacakge fail
	exit 1
fi

echo latest package generated

exit 0
