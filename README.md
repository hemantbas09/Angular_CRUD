# Angular Introduction:

Angular is a popular web framework by Google for building dynamic SPAs and cross-platform mobile apps. It uses TypeScript for better code organization and error catching. It follows a component-based architecture for modular design and offers features like data binding, routing, and form validation. Angular provides built-in tools, CLI, and a developer ecosystem for seamless application development across platforms.

### setting up an Angular project:

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

### File Structure:

1. tslint.json: This file is looking for typescript functionality errors.

2. tsconfig.spec.json: It is responsible for typescript configuration for the application test.

3. tsconfig.app.json: It include typescript configuration for angular app and include typescript and angular templete compiler options.

4. tsconfig.json: It helps to editor and typescript language servers to improve the developemnt experience. It is not used in the Compilers.

5. README.md - It is used for the documentation.

6. package.json It store all the dependencies and also app details like name, version.

7. package-lock.json: It include full details of the dependencies.

8. angular.json: Angular CLI configuration file for this angular project.

9. gitignore: It is used for ignored file for github repo.

10. editorconfig: This file include code editior configuration for this angular project.

### Angular CLI and Important Commands:

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
11. **ng serve -port portNumber**: Change the port number of the angular Application:

# Components

Angular components are like building blocks for website. They have their own special functions and how they look. e.g header, form , button . They can use the same components in different places. Components can talk to each other and share information. They help keep your code organized, make it easy to reuse, and are simple to maintain.

The command `ng g c component_name` or `ng generate component component_name` in Angular creates a new component with four default files:

1. CSS: This file allows you to define the styles for the component.

2. HTML: This file is used to define the structure and layout of the component.

3. spec.ts: This file is used for testing the component and contains unit tests.

4. component.ts: This file contains the logical part of the component, including API connections and other functionality.

### Basic Component

Define the component using the `@Component` decorator:

```typescript
// Import of the Component Decorator:
import { Component } from "@angular/core";
@Component({
  selector: "app-navbar",
  templateUrl: "./ui.html",
  styleUrls: ["./yu.css"],
})
export class NavbarComponent {
  constructor() {}
  ngOnInit(): void {
    // Perform any initialization logic here
    console.log("Component initialized!");
  }
}
```

The Angular component metadata, which provides configuration information for the component.

- `selector`: This Property to identify and specify how to use the component in HTML templates.

- `templateUrl`: This property specifies the path to the HTML template file for the component.

- `styleUrls`: This property specifies an array of CSS file paths to be applied to the component.

`Note:` use Pascal Case for the component name. Once created, you can use the component in your Angular application by including its selector in an HTML template.

### Lifecycle Hooks:

In Angular, life cycle hooks provide a way to tap into different stages of a component's life cycle, from initialization to destruction. One of the commonly used life cycle hooks is `OnInit`.

##### OnInit

The `OnInit` interface in Angular represents a life cycle hook. It defines a single method called `ngOnInit()`, which is invoked after the component has been fully initialized inside the DOM.

Unlike the constructor, `ngOnInit()` is specifically designed as a callback method that is triggered once the component's properties have been initialized and the component is ready for use. The `ngOnInit()` method is called automatically by Angular once the component is fully initialized and ready to be used.

To use the OnInit interface, need to import it from the `@angular/core` module and have implements is Component.

```ts
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./ui.html",
  styleUrls: ["./yu.css"],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log("Component initialized!");
  }
}
```

[Other Life Cycle Method ](https://angular.io/guide/lifecycle-hooks)

### View Encapsulation:

In Angular, encapsulation refers to isolating the styles and behavior of a component. There are three encapsulation types:

1. Emulated: Styles are scoped to the component, affecting only its template.
2. None: Styles are global and can affect any matching elements.
3. ShadowDom: Uses browser's native shadow DOM to encapsulate styles within the component's view.

Encapsulation mode is set using the encapsulation property in the component's decorator metadata.

### Component Interaction:

The communication and coordination between different components in a software system
and Sharing data between Component:

1. **Parent to child:**
   To pass data from a parent component to a child component, you can use the @Input decorator. The @Input decorator allows you to bind a property of the child component to a property of the parent component.
   import { Component, Input } from '@angular/core';

   ```html
   <!-- Parent html -->
   <app-navbar [fromParent]="parentElement"></app-navbar>
   ```

   ```ts
   // parent Component:
   import { Component, ViewChild, AfterViewInit } from "@angular/core";

   @Component({
     selector: "app-root",
     templateUrl: "./app.component.html",
     styleUrls: ["./app.component.css"],
   })
   export class AppComponent {
     parentElement: string = "I am Parent Element";
     constructor() {
       console.log(this.childComp);
     }
   }
   ```

   ```ts
   // child Component
   import { Component, OnInit, Input } from "@angular/core";

   @Component({
     selector: "app-navbar",
     templateUrl: "./navbar.component.html",
     styleUrls: ["./navbar.component.css"],
   })
   export class NavbarComponent implements OnInit {
     @Input() fromParent: string;
     constructor() {
       this.fromParent = "";
     }
     ngOnInit(): void {}
   }
   ```

2. **child to parent:**
   There are two way of binding data from child to parent @output with Event Emitter and @viewChild.

   --@output with Event Emitter:

   **Child Part**

   ```html
   <!-- HTML -->
   <button (click)="sendMessage()">Click</button>
   ```

   ```ts
   import { Component, OnInit, Output, EventEmitter } from "@angular/core";

   @Component({
     //Component
     selector: "app-navbar",
     templateUrl: "./navbar.component.html",
     styleUrls: ["./navbar.component.css"],
   })
   export class NavbarComponent implements OnInit {
     outputChildMessage: string = "WHy why why";
     @Output() messageEvent = new EventEmitter<String>();
     constructor() {}
     ngOnInit(): void {}

     sendMessage() {
       this.messageEvent.emit(this.outputChildMessage);
     }
   }
   ```

   **Parent Part**

   ```html
   <!-- HTML -->
   <app-navbar (messageEvent)="receiveMessage($event)"></app-navbar>
   ```

   ```ts
   //Component
   import { Component } from "@angular/core";
   @Component({
     selector: "app-root",
     templateUrl: "./app.component.html",
     styleUrls: ["./app.component.css"],
   })
   export class AppComponent {
     childMessage: string = "";

     constructor() {}

     ngAfterViewInit(): void {}

     receiveMessage($event: any) {
       this.childMessage = $event;
     }
   }
   ```

   --@ViewChild:

   **Child**

   ```ts
   //child component
   import { Component, OnInit } from "@angular/core";

   @Component({
     selector: "app-navbar",
     templateUrl: "./navbar.component.html",
     styleUrls: ["./navbar.component.css"],
   })
   export class NavbarComponent implements OnInit {
     messagePost: string = "I am child I want go to parent";

     constructor() {}
     ngOnInit(): void {}
   }
   ```

   **parent**

   ```ts
   import { Component, ViewChild, AfterViewInit } from "@angular/core";
   import { NavbarComponent } from "./navbar/navbar.component";

   @Component({
     selector: "app-root",
     templateUrl: "./app.component.html",
     styleUrls: ["./app.component.css"],
   })
   export class AppComponent implements AfterViewInit {
     message: string = "";
     @ViewChild(NavbarComponent)
     childComp!: NavbarComponent;

     constructor() {}

     ngAfterViewInit(): void {
       this.message = this.childComp.messagePost;
     }
   }
   ```

### Component Styles:

1. Inline styles:

```typescript
@Component({
  selector: "app-account",
  template: ` <h1 class="heading">My Country Name is Nepal:</h1>`,

  // This is Inline Style:
  styles: ["h1{color:red}"],
})
export class AccountComponent {}
```

2. External style files:

```typescript
@Component({
  selector: "app-account",
  template: ` <h1 class="heading">My Country Name is Nepal:</h1>`,
  // This is External Style:
  styleUrls: ["./account.component.css"],
})
export class AccountComponent {}
```

3. Template inline styles:

```typescript
@Component({
  selector: "app-account",
  template: ` <style>
      .heading {
        color: orange;
      }
    </style>
    <h1 class="heading">My Country Name is Nepal:</h1>`,
})
export class AccountComponent {}
```

4. Template link tags:

```typescript
@Component({
  selector: "app-account",
  template: ` <link rel="stylesheet" href="../account/account.component.css" />
    <h1 class="heading">My Country Name is Nepal:</h1>`,
})
export class AccountComponent {}
```

5. External and global style files:
   Configure `angular.json` to include external style files and register global style files in the `styles` section.

6. Non-CSS style files:
   Use SASS or LESS files as style files and specify them in the `styleUrls` metadata property of `@Component`.

### Content Projection:

Content projection allows to insert content into a component from outside. It helps place text, HTML elements, or other components into specific areas within a component's template. This feature makes components flexible and customizable, enabling easy reuse in different situations.

##### Single-slot content projection:

Single-slot content projection is a simple concept in web development. It means creating a component that has a specific area where you can insert another component. However, in this case, you can only add one component into that particular area.

```html
<!-- This is the Component where we create specific area by using ng-conent -->
<div class="bank">
  <h2>Welcome to our Bank</h2>
  <div class="bank-content">
    <ng-content></ng-content>
  </div>
  <div class="bank-footer">
    <p>Contact us at 98**********</p>
  </div>
</div>
```

```html
<!-- This is the content insert in above specific area -->
<app-card>
  <h3>Accounts</h3>
  <ol>
    <li>Savings Account</li>
    <li>Checking Account</li>
    <li>Investment Account</li>
  </ol>
</app-card>
```

#### Multi-slot content projection

Multi-slot content projection enables a component to have multiple slots for inserting specific content. Each slot is identified by a CSS selector that determines where the content should go. This helps in organizing and placing projected content within the component by using the `select` attribute of the `<ng-content>` element.

```html
<!-- This is the Component where we create multiple specific area by using ng-conent -->

<div class="bank">
  <div>
    <p>This is Bank Information:</p>
  </div>

  <div class="bank-name">
    <ng-content select="[name]"></ng-content>
  </div>

  <div class="account-balance">
    <ng-content select="[balance]"></ng-content>
  </div>

  <div class="transaction-history">
    <ng-content select="[history]"></ng-content>
  </div>

  <div class="contact-info">
    <ng-content select="[contact]"></ng-content>
  </div>
</div>
```

```html
<!-- This is the content insert in above specific area with help of select name-->
<app-card>
  <h1 name>My Bank</h1>

  <p balance>Account Balance: $10,000</p>

  <ul history>
    <li>Deposit: $2,000</li>
    <li>Withdrawal: $500</li>
    <li>Deposit: $5,000</li>
  </ul>

  <p contact>Contact us at 123-456-7890</p>
</app-card>
```

#### Conditional content projection:

Use `<ng-template>` instead of `<ng-content>` when you need to conditionally show or repeat content in your component. `<ng-content>` always initializes its content, while `<ng-template>` gives you control over when and how content is rendered.

### Dynamic Components :

dynamic components are created or rendered at runtime instead of being statically defined in the component template

#### Important Point in Dynamic Components:

1. **ViewContainerRef**:
   `ViewContainerRef` in Angular is like a container that can hold and show different views. It allows you to add, remove, or change components dynamically using methods like `createComponent()`, `insert()`, `remove()`, and `clear()`. With `ViewContainerRef`, we can build dynamic user interfaces by adding or removing components as needed while our Angular application is running.

2. **ComponentFactoryResolver**:
   ComponentFactoryResolver is an Angular service for dynamic resolution of component factories. It enables the creation of component instances based on their types. You can inject this service into your component or service to utilize its functionality.

3. **ComponentFactory**:
   ComponentFactory is an object that creates instances of a specific component type. Obtain it by using the resolveComponentFactory method of the ComponentFactoryResolver with the component type as an argument.

4. **ComponentRef:**
   ComponentRef is a reference to a dynamically created component instance in Angular. It provides interaction, modification, and cleanup capabilities during runtime.

### Angular Elements :

Angular Elements are special components in Angular that can be transformed into custom HTML tags. They enable the use of Angular features like change detection and data binding in popular browsers. With the help of the `createCustomElement()` method from the `@angular/elements` package. These elements can be utilized in non-Angular applications or frameworks, allowing Angular components to be used independently in any HTML page.

###### Advantage of Angular Element:

- Reusability: Components can be used across projects.

- Framework Agnosticism: Use Angular components in non-Angular applications.

- Seamless Integration: Angular features work smoothly within custom HTML tags.

- Independent Deployment: Components can be deployed individually.

- Angular Ecosystem: Access to Angular CLI, Angular Material, and libraries.

- Performance: Benefit from Angular's optimized performance.

###### Disadvantage of Angular Element:

- Increased Bundle Size: Including the Angular framework can result in a larger bundle size.

- Limited Cross-Framework Compatibility: Integration may have limitations in certain frameworks.

- Complexity and Learning Curve: Working with Angular Elements requires understanding Angular's component architecture.

- Performance Considerations: Additional framework overhead can impact load times and resource usage.

- Maintenance Overhead: Separate maintenance and versioning may be needed for standalone elements.

- All Angular-specific features may not work seamlessly in standalone custom elements like dependency injection and Angular routing.

- Sharing complex state between Angular Elements and other components may require additional effort.

- Angular Elements may have a larger footprint compared to native web components due to the inclusion of the Angular framework.

###### Scenarios of Using Angular Element:

- Use Angular Elements for integrating Angular components into non-Angular apps, reusing components across projects, or deploying components independently,Custom Widgets or Plugins.

- Angular Elements may not be necessary for purely Angular apps or lightweight/single-purpose components.

###### Ivy Renderer:

1. **Ivy Renderer**:
   Angular Elements relies on the Ivy Renderer, the default renderer introduced in Angular version 9. Ivy provides improved performance, smaller bundle sizes, and better tree shaking capabilities.

2. **Bootstrap Process**:
   Angular Elements use a bootstrap process to initialize the Angular framework when the custom element is loaded. This process ensures that all dependencies, configurations, and services are set up correctly for the component to work seamlessly within the Angular environment.

3. **Version Compatibility**:
   Angular Elements are supported in Angular 6 and above.

4. **Polyfills**:
   Angular Elements require polyfills to support custom elements in older browsers that lack native support. These polyfills ensure cross-browser compatibility.

###### Angular Elements Workflow:

- Create an Angular component using the `@Component` decorator.
- Configure the component's selector, template, styles, and other properties.
- Use the Angular CLI to build the component into a standalone Angular Element.
- Include the Angular Element in your web application by importing the JavaScript bundle and using the custom element's tag.

# Templates

### Data Binding:

1. **Text interpolation:** It is used to show dynamic data inside the HTML Component.
   we use `{{}}` code for data binding.
   for example

```html
<h1>{{100+20}}</h1>
```

2. **Property Binding:**
   Property binding is used to bind a property of an HTML element to a value component . It is denoted by square brackets ([]).
   Example:

```html
<img [src]="imgUrl" alt="" />
<!-- We shoule give imgUrl  in Component -->
```

3. **Class Binding:**
   Class binding is used to conditionally add or remove CSS classes to an HTML element based on a condition.
   It is denoted by square brackets ([]).
   Example:

```html
<h1 [class.myClass]="condition">Nepal</h1>
<!-- We shoule give condition in Component -->
```

4. **Style Binding:**
   Style binding is used to bind inline CSS styles to an HTML element. It is denoted by square brackets ([]).
   Example:

```html
<h1 [style.backgroundColor]="condition?'red':'blue'"></h1>
<!-- We shoule give condition in Component -->
```

### Templete Statement:

Template statements in Angular handle user events. They use parentheses `( )` syntax to bind methods or expressions to events. When an event happens, the associated method or expression runs. They help define app behavior based on user actions.

```html
<button (click)="buttonClick()">Click Me</button>
<!-- Here (click) is the Templete statement which bind buttonClick() method -->
```

### Pipes:

Pipes are used to transforming data into a particular formate when we only need that data transformed in a templete or the HTML View.

1. Uppercase pipe:

```html
<h1>{{"f1soft" | uppercase}}</h1>
<!-- It change all charcter into Uppercase -->
```

2. Lowercase pipe:

```html
<h1>{{"F1SOFT"| lowercase}}</h1>
<!-- It change all Character into lowercase -->
```

3. Decimal/ Number pipe:

```html
<h1>{{ 10000000 | number }}</h1>
<!-- output-10,000,000 :It change the number easily readable formate -->

<h1>{{ 10.45565655 | number : "3.2-4" }}</h1>
<!-- The number is formatted with 3 digits before the decimal point 2 minimum and 4 maximum degits after decimal -->
```

4. Currency Pipe:

```html
<h1>{{ price | currency : "NPR" }}</h1>
```

Link:[Currency Code](https://www.iban.com/currency-codes)

5. Date Pipe:

```html
<h1>{{ today | date : "medium" }}</h1>
```

Link:[For More Date Attribute](https://angular.io/api/common/DatePipe)

6. JSON Pipe:

```html
<h1>{{ profile |json }}</h1>
```

7. Percent Pipe:

```html
<h3>{{ 0.05 | percent }}</h3>
```

8. Slice Pipe:

```html
<h3>{{ postArray | slice : 1 : 2 }}</h3>
```

#### Custome Pipe

```ts
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "statusPipe",
})
export class StatusPipe implements PipeTransform {
  transform(value: string): string {
    let color = "";
    switch (value) {
      case "approved":
        color = "green";
        break;
      case "rejected":
        color = "red";
        break;
      default:
        color = "black";
        break;
    }

    return color;
  }
}
```

Register Custome Pipe in Angular Module:

````ts
declarations: [AppComponent, NavbarComponent, StatusPipe],```
````

Custome Pipe use in the html template:

<p [style.color]="status | statusPipe">{{ status }}</p>

- The Pipe decorator defines custom pipes in Angular, imported from '@angular/core'. It has optional configuration parameters and a required 'name' property for the pipe's unique identifier.

- The PipeTransform interface sets rules for custom pipes and uses the transform() method for data transformation. This method takes input arguments, returns transformed results, and can be customized as needed.

###### Create Pipe by Using CLI:

`ng g pipe pipe-name`

### Event Binding:

Event binding in Angular binds events in the HTML template. It associates user actions with component methods and triggering specific behavior when the events occur.

```html
<button (click)="buttonClick()">Click Me</button>
```

##### Event filtering

Event filtering in Angular allows you to add conditions to event handlers. It enables you to specify criteria that must be met for the event handler to execute.

```html
<input type="text" (keyup.enter)="onKeyup(username.value)" #username />
<!-- Here keyup.enter is the condition after onKeyup method execute after keyup enter execute  -->
```

### Two way data binding:

Angular's two-way data binding ensures that changes made to the data in a component are automatically reflected in the view, and vice versa. This bidirectional synchronization is made possible with the help of the ngModel directive in Angular.

```html
<!-- HTML Templete -->
<input type="text" [(ngModel)]="title" />
<p>{{ title }}</p>
```

```ts
// Component
import { Component } from "@angular/core";
@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent {
  title: string = "Environment Day";
  constructor() {}
}
```

# Directive

### Built-in directives:

### Attribute directives:

### Structural directives:

# Dependency Injection:

Dependency injection is a way to give a component or service what it needs to work without making it responsible for creating or managing those things.

1. Define Dependencies:
   Define the Service as an injectable service using the @Injectable() decorator.
   the @Injectable() decorator in Angular is used to indicate that a class is injectable and can be used as a dependency within other classes/components.

```ts
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ProductServicService {
  private apiUrl = "https://fakestoreapi.com";

  constructor(private http: HttpClient) {}

  getProduct(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/products`);
  }
}
```

2. Registering Providers:
   We can register in app module `providers[]` for globally and also you can register in the directly in component.
3. Injecting Dependencies:
   You can Inject this Dependencies in the Component Constructor:
   ```ts
   import { UserService } from './user.service';
   constructor(private userService: UserService) { }
   ```

# Routing and Navigation:

# Form

### Reactive forms:

Reactive forms are a way to handle form input in a reactive and declarative manner in web development.
The Key COncept of Reactive Forms:

- FormControl: It represents a single input field, like a text box or checkbox, and keeps track of its value and whether it's valid or not.

```ts
const name = new FormControl("");
```

- FormGroup: It groups related form controls together, making it easier to manage and organize them.

```ts
const userForm = new FormGroup({
  name: new FormControl(""),
  email: new FormControl(""),
});
```

- FormBuilder: It's a helper service that makes creating form controls and groups less complicated.

```ts
const userForm = formBuilder.group({
  name: [""],
  email: [""],
});
```

- Validators: These are pre-defined rules that you can apply to form controls to ensure the input meets specific requirements (e.g., required field, minimum length, specific pattern).

```ts
const userForm = formBuilder.group({
  name: ["", Validators.required],
  email: ["", [Validators.required, Validators.email]],
});
```

- Form Validation: It allows to check if the user input meets certain criteria and display error messages if it doesn't.

```html
<input type="text" [formControl]="nameControl" />
<div *ngIf="nameControl.invalid && nameControl.touched">
  <span *ngIf="nameControl.errors.required">Name is required.</span>
</div>
```

- Form Submission: It handles the process of sending the form data to a server or performing actions based on the user's input.

```html
<form [formGroup]="userForm" (ngSubmit)="onSubmit()">
  <input type="text" formControlName="name" />
  <input type="email" formControlName="email" />
  <button type="submit">Submit</button>
</form>
```

- formArray: A form array allows you to dynamically manage a collection of form controls.

###### Complete Form Without Form Builder:

```html
<!-- HTML Templete -->
<form [formGroup]="myForm" (submit)="submitForm()">
  <div>
    <label for="name">Name:</label>
    <input type="text" id="name" formControlName="name" required />
  </div>

  <div>
    <label for="city">City:</label>
    <select id="city" formControlName="city" required>
      <option value="kathmandu">Kathmandu</option>
      <option value="lalitpur">Lalitpur</option>
    </select>
  </div>

  <div>
    <label>Gender:</label><br />
    <input type="radio" id="male" formControlName="gender" value="male" required />
    <label for="male">Male</label><br />
    <input type="radio" id="female" formControlName="gender" value="female" required />
    <label for="female">Female</label><br />
  </div>

  <fieldset formGroupName="address">
    <legend>Address</legend>
    <label for="street">Street:</label>
    <input type="text" id="street" name="street" formControlName="street" />

    <label for="city">City:</label>
    <input type="text" id="city" name="city" formControlName="city" />

    <label for="state">State:</label>
    <input type="text" id="state" name="state" formControlName="state" />

    <label for="zip">ZIP Code:</label>
    <input type="text" id="zip" name="zip" formControlName="zip" />
  </fieldset>

  <div formArrayName="skills">
    <div *ngFor="let skill of skills.controls; let i = index">
      <input type="text" [formControlName]="i" required />
    </div>
    <button type="button" (click)="addSkill()">Add Skill</button>
  </div>

  <button type="submit">Submit</button>
</form>
```

```ts
// Component:
import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent {
  myForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      name: new FormControl("", Validators.required),
      city: new FormControl("", Validators.required),
      gender: new FormControl("", Validators.required),
      address: new FormGroup({
        street: new FormControl("", Validators.required),
        city: new FormControl("", Validators.required),
        state: new FormControl("", Validators.required),
        zip: new FormControl("", Validators.required),
      }),
      skills: new FormArray([]),
    });
  }

  get skills(): FormArray {
    return this.myForm.get("skills") as FormArray;
  }

  addSkill() {
    const skill = new FormControl("", Validators.required);
    this.skills.push(skill);
    console.log(this.myForm);
  }

  submitForm() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    } else {
      console.log("Invalid form");
    }
  }
}
```

###### Using FormBuilder:

HTML Code is Same as Above:

```ts
import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ["", Validators.required],
      city: ["", Validators.required],
      gender: ["", Validators.required],
      address: this.fb.group({
        street: ["", Validators.required],
        city: ["", Validators.required],
        state: ["", Validators.required],
        zip: ["", Validators.required],
      }),
      skills: this.fb.array([]),
    });
  }

  get skills(): FormArray {
    return this.myForm.get("skills") as FormArray;
  }

  addSkill() {
    const skill = this.fb.control("", Validators.required);
    this.skills.push(skill);
  }

  submitForm() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    } else {
      console.log("Invalid form");
    }
  }
}
```

### Templete Driven Form:

Template-driven forms are a way of implementing forms in Angular where the form structure and validation rules are defined directly in the component's HTML template.

```html
<form (ngSubmit)="submitForm()">
  <div>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" [(ngModel)]="myForm.name" required />
  </div>

  <div>
    <label for="city">City:</label>
    <select id="city" name="city" [(ngModel)]="myForm.city" required>
      <option value="kathmandu">Kathmandu</option>
      <option value="lalitpur">Lalitpur</option>
    </select>
  </div>

  <div>
    <label>Gender:</label><br />
    <input type="radio" id="male" name="gender" [(ngModel)]="myForm.gender" value="male" required />
    <label for="male">Male</label><br />
    <input type="radio" id="female" name="gender" [(ngModel)]="myForm.gender" value="female" required />
    <label for="female">Female</label><br />
  </div>

  <fieldset>
    <legend>Address</legend>
    <label for="street">Street:</label>
    <input type="text" id="street" name="street" [(ngModel)]="myForm.address.street" required />

    <label for="city">City:</label>
    <input type="text" id="city" name="city" [(ngModel)]="myForm.address.city" required />

    <label for="state">State:</label>
    <input type="text" id="state" name="state" [(ngModel)]="myForm.address.state" required />

    <label for="zip">ZIP Code:</label>
    <input type="text" id="zip" name="zip" [(ngModel)]="myForm.address.zip" required />
  </fieldset>

  <div ngModelGroup="skills">
    <div *ngFor="let skill of myForm.skills; let i = index">
      <input type="text" [(ngModel)]="myForm.skills[i]" name="skill{{ i }}" required />
    </div>
    <button type="button" (click)="addSkill()">Add Skill</button>
  </div>

  <button type="submit">Submit</button>
</form>
```

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent {
  myForm: any = {
    name: "",
    city: "",
    gender: "",
    address: {
      street: "",
      city: "",
      state: "",
      zip: "",
    },
    skills: [],
  };

  addSkill() {
    this.myForm.skills.push("");
  }

  submitForm() {
    if (this.myForm) {
      console.log(this.myForm);
    } else {
      console.log("Invalid form");
    }
  }
}
```

### Form Validation:

At First Import Validators and use them:

<!-- Built In Validation -->

```ts
import { Validators } from "@angular/forms";

// required Validation
name: ["", Validators.required];

// email validation:
email: ["", Validators.email];

// min max Validaiton:
password: ["", Validators.minLength(6), Validators.maxLength(20)];

// pattern:
confirmPassword: ["", Validators.pattern("[a-zA-Z0-9]*")];
```

<!-- Custome Validation -->

```ts
import { AbstractControl, ValidationErrors } from "@angular/forms";
export class PasswordValidator {
  static passwordConfirmation(control: AbstractControl): ValidationErrors | null {
    const password = control.value.password;
    const confirmPassword = control.value.confirmPassword;
    if (password !== confirmPassword) {
      return { passwordMatch: false };
    }

    return null;
  }
}
```

<!-- Now Call Custome Validation -->

```ts
// first Import Custom validator:
import { PasswordValidator } from "../validators/password.validators";
this.form = this.fb.group(
  {
    email: ["", [Validators.required, Validators.email]],
  },
  { validator: PasswordValidator.passwordConfirmation }
  // Call Custome Validation:
);
```

### Custom Form Control:

# Services:

In Angular, services are helpers for tasks like data sharing, calculations, API connections, state management, and form handling. They come pre-built and offer functionalities such as HTTP requests, URL information, navigation, form management, reactive programming, custom events, and dependency management. Services simplify tasks and promote scalable applications.

### HTTP Client:

###### Introduction:

HTTP is a set of rules that enables web browsers to communicate with web servers. It's like a language they use to communicate.
Here are some basic things to know about HTTP:

1. Client-Server Model: Browsers ask for things from servers using HTTP requests, and servers respond with the requested information through HTTP responses. It's like a question and answer interaction.

2. Stateless: HTTP handles requests separately, treating each one as its own task without remembering what happened before.

3. Status Codes: After receiving a request, the server sends a status code to the browser to communicate what happened. For example, 200 means success, 404 means not found, and 500 indicates a server-side issue.

4. Security: HTTPS adds encryption to protect sensitive information like passwords or credit card details. It ensures that what you send or receive is secure and hidden from unauthorized viewers.

###### REST (Representational State Transfer):

REST is a way of designing web services that focuses on being simple and consistent. Some of the Key Points of REST are:

- Client-Server: It separates clients (users) and servers (providers) so they can change independently.

- Stateless: Each request is self-contained and doesn't rely on previous requests.

- Caching: It encourages storing responses to improve performance.

- Layered System: Intermediaries like proxies can be added without affecting clients or servers.

- HTTP methods:
  1. GET: Retrieve data from a server.
  2. POST: Submit data to a server to create a new resource.
  3. PUT: Update or replace an existing resource on a server.
  4. DELETE: Remove a specified resource from a server.
  5. PATCH: Partially update a resource on a server.
  6. HEAD: Retrieve only the headers of a resource.
  7. OPTIONS: Retrieve the communication options available for a resource or server.
- Setting up the HTTP Client:

  - Import the **`HttpClientModule`** in the **app.module.ts file** to enable the HTTP Client.

    ```ts
    import { NgModule } from "@angular/core";
    import { BrowserModule } from "@angular/platform-browser";
    import { AppRoutingModule } from "./app-routing.module";
    import { HttpClientModule } from "@angular/common/http";

    @NgModule({
      declarations: [AppComponent],
      imports: [BrowserModule, AppRoutingModule, HttpClientModule],
      providers: [],
      bootstrap: [AppComponent],
    })
    export class AppModule {}
    ```

###### To make HTTP requests in Angular, inject the `HttpClient` service in the constructor of the component or service.

```ts
import { HttpClient } from "@angular/common/http";

export class LoginService {
  constructor(private http: HttpClient) {}
}
```

**Creating a Service**

```ts
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private apiUrl = "https://fakestoreapi.com";

  constructor(private http: HttpClient) {}

  getProduct(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/products`);
  }

  postData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, data);
  }

  putData(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/authentication/${id}`, data);
  }

  patchData(id: number, data: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/authentication/${id}`, data);
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/authentication/${id}`);
  }
}
```

###### Now, to use it in another component, first import the data service and inject it using providers. If you want this service globally import in the App Module Provider.

```ts
import { Component, OnInit } from "@angular/core";
import { ProductService } from "../services/product.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
  providers: [ProductService],
})
export class ProductComponent implements OnInit {
  data: any;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProduct().subscribe({
      next: (response) => {
        this.data = response;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log("Subscription completed");
      },
    });
  }
}
```

Here's the provided information in Markdown format:

###### Set Header

1. Import `HttpHeaders` from `@angular/common/http`.
2. Create an instance of `HttpHeaders` with the desired header values, like 'Content-Type: application/json' and 'Authorization: token'.
3. Include the headers in the HTTP request.

```ts
import { HttpClient, HttpHeaders } from "@angular/common/http";

const headers = new HttpHeaders().set("Content-Type", "application/json").set("Authorization", "Bearer token");

this.http.get<any>(`${this.apiUrl}/products`, {
  headers: headers,
});
```

###### Handling Common Headers

1. Accept Header:
   - The Accept header is used by the client to specify the preferred media types for the response.
2. Content-Type Header:
   - The Content-Type header is used by the client to indicate the media type of the request payload.

```ts
import { HttpHeaders } from "@angular/common/http";

const headers = new HttpHeaders().set("Accept", "application/json");
const headers = new HttpHeaders().set("Content-Type", "application/json");
```

# Change Detection:

Change detection in Angular updates the screen when data changes. It uses Zone.js to track and reflect updates.We can manually trigger updates with `ChangeDetectorRef`.

```html
<h1>{{ title }}</h1>
<button (click)="changeTitle()">Change Title</button>
```

```ts
import { Component, ChangeDetectionStrategy, Input, ChangeDetectorRef } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() title = "OnPush Change Detection";

  constructor(private cdr: ChangeDetectorRef) {}

  changeTitle() {
    this.title = "Updated Title";
    this.cdr.detectChanges();
  }
}
```

# Angular Architecture and best practices:

#### Angular Architecture:

1. Modules:
   In Angular, modules organize parts of an application. They act as containers, grouping related components, services, and other elements. The AppModule is the main module that launches the application.

2. Components:
   Components are the building blocks of the user interface. They represent specific parts of a webpage and have their own logic and data.

3. Templates:
   Templates define how components should look and behave. They combine Angular markup with HTML to create the webpage content. Templates handle user interactions and display dynamic data.

4. Metadata:
   Metadata provides additional information to Angular about how to process classes. It configures the expected behavior of classes, like specifying selectors and styling options.

5. Services:
   Services are helpers in Angular that handle tasks unrelated to the user interface. They perform operations like data fetching or calculations. Components use services to access shared functionality.

6. Dependency Injection:
   Dependency Injection allows components to receive the dependencies they need. Angular provides the necessary services and data instead of components creating them directly. This promotes modularity and keeps components focused on their responsibilities.

#### Best Practise:

1. Component-based architecture.
2. Organize code into modules.
3. Use services for logic and reusability.
4. Utilize Reactive Extensions (RxJS).
5. Implement Angular Router.
6. Consider state management libraries.
7. Write comprehensive unit tests.
8. Optimize performance with change detection.
9. Maintain code organization.
10. Document and follow style guides.

# Security:

Security in Angular is very important for building secure web applications.

1. Secure coding:
   Sanitize user input with Angular tools to prevent code injection attacks.eg of tool: Sanitization libraries, Input validation libraries. Avoid risky functions like innerHTML or outerHTML. Use data binding and directives. Validate and clean user input on both client and server sides.

2. XSS prevention:
   Implement Content Security Policy (CSP) to control script sources,Encode dynamic content properly,Utilize Angular's safeHtml feature for secure HTML display,Use bypassSecurityTrustHtml cautiously and only when needed.

3. CSRF protection:
   Use Angular's HttpClientXsrfModule and XSRF-TOKEN cookie/header combination for built-in CSRF protection,Ensure server-side API endpoints validate and enforce CSRF tokens to block unauthorized requests.

4. authentication and authorization:
   Implement secure authentication methods like JWT or OAuth 2.0, Utilize Angular's built-in guards such as CanActivate and CanActivateChild to protect routes and allow access only to authorized users.

5. secure communication:
   Use HTTPS protocol to encrypt,Implement secure cookies with Secure and HttpOnly flags to protect against cookie-based attacks.

# Server Side Rendering:

Server-Side Rendering means the server prepares the web page before sending it to browser, making it load faster. Client-Side Rendering means the browser fetch and build the page using JavaScript, offering more interactivity but slower initial loading.

Benefits of SSR in Angular:

1. Faster initial page loading.
2. Better visibility on search engines.
3. Accurate previews on social media.
4. Improved accessibility for low-end devices.

Challenges of SSR in Angular:

1. Increased server load.
2. Complex server-side setup.
3. Limited interactivity initially.
4. Development complexity.

Angular Universal is the official library for Server-Side Rendering in Angular.

# Service Worker / PWA:

Service workers are special JavaScript files that run in the background of websites. They can save website files for offline use, show notifications even when you're not on the website, and perform tasks without needing the website to be open. They make websites more powerful and convenient.

# Workers:

Web Workers in Angular run background JavaScript code separately for improved performance. They handle tasks that could slow down the user interface, while the main app stays responsive. Web Workers offer faster processing and efficient resource use, but have limitations like restricted access.

# RxJS - Reactive Development:

RxJS in Angular enables efficient handling of events and data streams. It provides observables to manage data sequences and operators to transform streams effectively. It is commonly used for tasks like API requests, user interactions, and real-time updates in Angular applications. By using RxJS, developers can write cleaner and more organized code, making applications more responsive and easier to maintain.

# NgRx - State management:

NgRx is a library for managing data and state in Angular apps. It uses a Redux pattern, with actions and reducers, to update and organize data in a central store. Components can access and update the data, and NgRx ensures all parts of the app stay in sync. It promotes organized and predictable data handling for easier maintenance.

# Unit Testing:

Unit testing in Angular involves checking small pieces of code, like components or services, to ensure they work correctly. It uses tools like Jasmine and Karma to write test cases and compare expected outcomes with actual results

# EoE Testing:

End-to-End testing in Angular is like testing your from the beginning to the end, just like a real user would. Angular has a built-in tool called Protractor for E2E testing.

# Animation:

Animation in Angular is about adding cool effects to elements in application. Angular Animations helps create effects like smooth transitions and fading. You can animate things like position, size, and color. Animations make your app more visually appealing and interactive, enhancing the user experience.
