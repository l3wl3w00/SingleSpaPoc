#!/usr/bin/env pwsh

# Starts all micro front-end development servers.
# Requires Node.js 20 and uses each project's npm start script.
$dirs = @("root", "home", "navbar", "comments", "dino-list", "dino-details")
$processes = @()
foreach ($dir in $dirs) {
    Write-Host "Starting $dir..."
    $processes += Start-Process -FilePath "npm.cmd" -ArgumentList "start" -WorkingDirectory $dir -NoNewWindow -PassThru
}
try {
    foreach ($proc in $processes) { $proc.WaitForExit() }
} finally {
    foreach ($proc in $processes) { if (!$proc.HasExited) { $proc.Kill() } }
}