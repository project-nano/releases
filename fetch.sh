#!/bin/bash
InstallerPath=nano_installer
BinPath=$InstallerPath/bin
Core=core
Cell=cell
FrontEnd=frontend
WebRoot=web_root
Installer=installer

InstallerSource=../$Installer/$Installer
InstallerTarget=$InstallerPath/$Installer
if [ ! -f "$InstallerSource" ]; then
        echo $InstallerSource not exists
        exit 1
fi

cp $InstallerSource $InstallerTarget

if [ $? -ne 0 ]; then
        echo fetch $InstallerSource fail
        exit 1
fi

echo $InstallerSource copied to $InstallerTarget

CoreSource=../$Core/$Core
CoreTarget=$BinPath/$Core
if [ ! -f "$CoreSource" ]; then
	echo $CoreSource not exists
	exit 1
fi

cp $CoreSource $CoreTarget

if [ $? -ne 0 ]; then
	echo fetch $CoreSource fail
	exit 1
fi

echo $CoreSource copied to $CoreTarget

CellSource=../$Cell/$Cell
CellTarget=$BinPath/$Cell
if [ ! -f "$CellSource" ]; then
        echo $CellSource not exists
        exit 1
fi

cp $CellSource $CellTarget

if [ $? -ne 0 ]; then
        echo fetch $CellSource fail
        exit 1
fi

echo $CellSource copied to $CellTarget

FrontSource=../$FrontEnd/$FrontEnd
FrontTarget=$BinPath/$FrontEnd
if [ ! -f "$FrontSource" ]; then
        echo $FrontSource not exists
        exit 1
fi

cp $FrontSource $FrontTarget

if [ $? -ne 0 ]; then
        echo fetch $FrontSource fail
        exit 1
fi

echo $FrontSource copied to $FrontTarget


WebSource=../$FrontEnd/$WebRoot
WebTarget=$BinPath/frontend_files
CurrentWeb=$WebTarget/$WebRoot

if [ ! -d "$WebSource" ]; then
        echo Web file path: $WebSource not exists
        exit 1
fi

if [ -d "$CurrentWeb" ]; then
        rm -Rf $CurrentWeb
	if [ $? -ne 0 ]; then
		echo delete path $CurrentWeb fail
		exit 1
        fi
	echo Previous web files in $CurrentWeb deleted
fi

\cp -r $WebSource $WebTarget

if [ $? -ne 0 ]; then
        echo fetch $WebSource fail
        exit 1
fi

echo all web files in $WebSource copied to $WebTarget

echo fetch success

exit 0










