# NgHttp

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.20-4.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Loading</title>
  <style>
  .sk-fading-circle {
    width: 40px;
    height: 40px;
    position: relative;
  }
  
  .sk-fading-circle .sk-circle {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
  
  .sk-fading-circle .sk-circle:before {
    content: '';
    display: block;
    margin: 0 auto;
    width: 15%;
    height: 15%;
    background-color: #333;
    border-radius: 100%;
    animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
  }
  
  .sk-fading-circle .sk-circle2 {
    transform: rotate(30deg);
  }
  
  .sk-fading-circle .sk-circle3 {
    transform: rotate(60deg);
  }
  
  .sk-fading-circle .sk-circle4 {
    transform: rotate(90deg);
  }
  
  .sk-fading-circle .sk-circle5 {
    transform: rotate(120deg);
  }
  
  .sk-fading-circle .sk-circle6 {
    transform: rotate(150deg);
  }
  
  .sk-fading-circle .sk-circle7 {
    transform: rotate(180deg);
  }
  
  .sk-fading-circle .sk-circle8 {
    transform: rotate(210deg);
  }
  
  .sk-fading-circle .sk-circle9 {
    transform: rotate(240deg);
  }
  
  .sk-fading-circle .sk-circle10 {
    transform: rotate(270deg);
  }
  
  .sk-fading-circle .sk-circle11 {
    transform: rotate(300deg);
  }
  
  .sk-fading-circle .sk-circle12 {
    transform: rotate(330deg);
  }
  
  @-webkit-keyframes sk-circleFadeDelay {
    0%,
    39%,
    100% {
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
  }
  
  @keyframes sk-circleFadeDelay {
    0%,
    39%,
    100% {
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
  }
  
  .sk-fading-circle .sk-circle2:before {
    animation-delay: -1.1s;
  }
  
  .sk-fading-circle .sk-circle3:before {
    animation-delay: -1s;
  }
  
  .sk-fading-circle .sk-circle4:before {
    animation-delay: -0.9s;
  }
  
  .sk-fading-circle .sk-circle5:before {
    animation-delay: -0.8s;
  }
  
  .sk-fading-circle .sk-circle6:before {
    animation-delay: -0.7s;
  }
  
  .sk-fading-circle .sk-circle7:before {
    animation-delay: -0.6s;
  }
  
  .sk-fading-circle .sk-circle8:before {
    animation-delay: -0.5s;
  }
  
  .sk-fading-circle .sk-circle9:before {
    animation-delay: -0.4s;
  }
  
  .sk-fading-circle .sk-circle10:before {
    animation-delay: -0.3s;
  }
  
  .sk-fading-circle .sk-circle11:before {
    animation-delay: -0.2s;
  }
  
  .sk-fading-circle .sk-circle12:before {
    animation-delay: -0.1s;
  }
  </style>
</head>

<body>
  <div class="sk-fading-circle">
    <div class="sk-circle sk-circle1"></div>
    <div class="sk-circle sk-circle2"></div>
    <div class="sk-circle sk-circle3"></div>
    <div class="sk-circle sk-circle4"></div>
    <div class="sk-circle sk-circle5"></div>
    <div class="sk-circle sk-circle6"></div>
    <div class="sk-circle sk-circle7"></div>
    <div class="sk-circle sk-circle8"></div>
    <div class="sk-circle sk-circle9"></div>
    <div class="sk-circle sk-circle10"></div>
    <div class="sk-circle sk-circle11"></div>
    <div class="sk-circle sk-circle12"></div>
  </div>
</body>

</html>
