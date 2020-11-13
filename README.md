# Angular 4

    Day1
    
    DOM
    Dom manipulation
    Jquery: Library of resuable function
    JQuery vs AngularJS(1.x): No need for you to write DOM manipulation code. Less Javascript and more markup
    Angular 1.x vs Angular 2/4.x

    Creating our first Angular component


    Day 2
    
    NodeJS introduction
    NPM 
    Angular 
        - Data Binding
            a. Property Binding [] : input into the component
            b. Event Binding () : output from the component
            c. String interpolation: {{}} : read value from current component into template


    Day 3
        Services
        Pipes
        Server side communication

        Services in Angular 4, contain logic other than template manipulation
        - DataService: 
        - Logging .....
        Service have to be Dependency Injected
        Hierarchical DI: Go up the component chain, to find provider for the service and the provider will then supply the instance.
        To use http in your application
        1. Import the HttpModule
        2. DI the Http service
        3. Http is built on Observables
        4. Promises vs Obserables
        5. Observables (RxJS API), heavy in terms of size
        6. Fallback availble to promise

    Day 4
        Improving the build process
        Gulp
        Angular CLI - Wrapper over Webpack
        Single Page application in Angular 4

        Build process
            - Minification of JS, CSS, HTML angular.js angular.min.js
            - Move files into the build folder
            - Vender files (angular.js, rx.js), 
              Application files (app.js, reverse.pipe.js)
              vender.js : 4 months
              app.js : 4 days
            - app.js into chunks
            - Image compression
            - Image from embedded JS

        
        SPA

