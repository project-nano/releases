#!/bin/bash

TARGET=./nano_installer.tar.gz
SOURCE=./nano_installer/
if [ -f "$TARGET" ]; then
	rm -f $TARGET	
	echo $TARGET removed
fi
HASH=./nano_installer.sha1sum
if [ -f "$HASH" ]; then
        rm -f $HASH
        echo $HASH removed
fi

tar zcfv $TARGET $SOURCE
echo new package $TARGET created
sha1sum $TARGET > $HASH
echo hash $HASH genereated
echo build package success
