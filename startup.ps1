#!/usr/bin/env pwsh
Start-Process -FilePath npm -ArgumentList 'start' -WorkingDirectory 'single-spa-poc' -PassThru
Start-Process -FilePath npm -ArgumentList 'start' -WorkingDirectory 'single-spa-poc-app/SingleSpaPoc' -PassThru
Start-Process -FilePath npm -ArgumentList 'start' -WorkingDirectory 'single-spa-poc-angular-2/SingleSpaPocAngular2' -PassThru

