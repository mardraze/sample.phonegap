IF "%1" NEQ "" (
	goto start
	
)
echo "PLEASE ENTER PROJECT NAME PARAM"
pause
exit

:start

WHERE npm
IF %ERRORLEVEL% NEQ 0 (
	echo "PLEASE DOWNLOAD NODEJS http://nodejs.org/download/" 
	pause
	exit
)
WHERE cordova
IF %ERRORLEVEL% NEQ 0 npm install cordova

call cordova create %*
cd %1/www

WHERE bower
IF %ERRORLEVEL% NEQ 0 npm install bower
call bower install mardraze/sample.phonegap

rd /S /Q index.old.html
move index.html index.old.html

copy bower_components\sample.phonegap\index.html .


mkdir bin
mkdir src
xcopy bower_components\sample.phonegap\app .

pause
