@echo off

REM run npm install in all directories that need dependencies

npm install & cd client & npm install & cd ..\clientAdminPortal & npm install & cd ..

:installRoot
	REM run in the root dir
	echo 'running in root'
	npm install & GOTO installClient

:installClient
    REM run in the client directory
    cd client
    echo 'running in client'
    npm install & GOTO installAdminClient

:installAdminClient
    REM run in the admin portal client directory
    cd ..\clientAdminPortal
    echo 'running in clientAdminPortal'
    npm install

