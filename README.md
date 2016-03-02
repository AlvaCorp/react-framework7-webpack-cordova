This is a fork of https://github.com/QzhouZ/Cordova-Framework7-React-Webpack/

Changes:
 - React 0.13->0.14
 - + React DOM 
 
 
[Framework7](http://f7cn.com/)      
[React](http://reactjs.cn/)

##Project File

```

│  www static resource file for package cordova
         ├─data <----- test data related files
         ├─fonts <----- font files
         ├─img <----- Photos
         ├─build <js file ----- compiled
         ├─lib <----- not suitable third party libraries compiled
         ├─view <----- paging file
         ├─app.less <----- page style (less) file entry
         ├─index.html <start page
         └─src source file
            ├─less <----- less library
            ├─lib <----- third-party libraries can be compiled
            ├─view <----- react page components
            ├─app.less <----- entrance css file
            └─app.js <----- entry js file

```

## This project is built with
Node、Cordova、NPM、Babel5、Webpack

## initializing the project
``npm install``

## Building the project
``npm run build``

## start the server
``npm start`

Open this url in your browser ``http://127.0.0.1:3000/www/index.html``

## Commands

- ``npm run test``
- ``npm run android`` compiling android project using cordova 
- ``npm run ios``compiling android project using cordova 


