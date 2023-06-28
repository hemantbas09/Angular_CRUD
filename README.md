# WebsiteDesign

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Angular

Angular is a popular web framework by Google for building dynamic SPAs and cross-platform mobile apps. It uses TypeScript for better code organization and error catching. It follows a component-based architecture for modular design and offers features like data binding, routing, and form validation. Angular provides built-in tools, CLI, and a developer ecosystem for seamless application development across platforms.

## setting up an Angular project:

To set up an Angular project:

1. Download the latest LTS version of Node.js and npm from the Node.js website.

2. Use a command prompt or terminal and install Angular CLI globally by running:

   ```
   npm install -g @angular/cli
   ```

3. create a new Angular project:

   ```
   ng new my-angular-project.
   ```

4. Change into the project directory:

   ```
   cd my-angular-project.
   ```

5. Start the Angular application with the following command:

   ```
   ng serve.
   ```

   by default application open in the `http://localhost:4200/`

# Angular CLI and Important Commands:

Angular CLI (Command Line Interface) is a powerful tool that helps in the development and management of Angular applications. Here are some important Angular CLI commands:

1. **ng new**: Creates a new Angular application.

   ```
   ng new my-app
   ```

2. **ng serve**: Starts a development server.

   ```
   ng serve
   ```

3. **ng generate** or **ng g**: Generates different parts of an Angular application like components, services, modules, etc.

   ```
   ng generate component my-component
   ng g service my-service
   ng g module my-module
   ```

4. **ng build**: Builds the Angular application for production.

   ```
   ng build
   ```

5. **ng test**: Runs unit tests using Karma.

   ```
   ng test
   ```

6. **ng e2e**: Runs end-to-end tests using Protractor.

   ```
   ng e2e
   ```

7. **ng lint**: Lints the code to identify potential issues or violations of coding standards.

   ```
   ng lint
   ```

8. **ng update**: Updates the application and its dependencies to the latest versions.

   ```
   ng update
   ```

9. **ng add**: Adds new capabilities or libraries to the Angular application.

   ```
   ng add @angular/material
   ```

10. **ng help**: Displays information about Angular CLI and its commands.
    ```
    ng help
    ```

# Component:

We can create component by:

The command `ng g c component_name` or `ng generate component component_name` in Angular creates a new component with four default files:

1. CSS: This file allows you to define the styles for the component.

2. HTML: This file is used to define the structure and layout of the component.

3. spec.ts: This file is used for testing the component and contains unit tests.

4. component.ts: This file contains the logical part of the component, including API connections and other functionality.

Note:
