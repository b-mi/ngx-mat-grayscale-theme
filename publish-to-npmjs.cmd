@echo off
pushd projects\ngx-mat-grayscale-theme
call npm version patch
popd
call ng build ngx-mat-grayscale-theme
rem call npm login
pushd dist\ngx-mat-grayscale-theme
call npm publish --access public
popd
pause
