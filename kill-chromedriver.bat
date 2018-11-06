@echo off

(for /f %%i in ('dir /B /S "*-x64-chromedriver"') do (
    echo Found chromedriver file: %%i

    for /f %%j in ('node get-chromedriver-name.js %%i') do (
        echo Installed chromedriver version: %%j

        taskkill /FI "IMAGENAME eq %%j" /F /T
    )
))

taskkill /FI "IMAGENAME eq chromedriver*" /F /T