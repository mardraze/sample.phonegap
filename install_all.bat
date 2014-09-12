WHERE npm
IF %ERRORLEVEL% NEQ 0 echo "PLEASE DOWNLOAD NODEJS http://nodejs.org/download/"
WHERE bower
IF %ERRORLEVEL% NEQ 0 npm install bower
bower install mardraze/sample.phonegap

