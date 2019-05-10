# Code-Reference-MEAN

Client-Side: Angular and Typescript

Server-Side: NodeJS

Testing: Mocha, Chai

# Objective

To provide reference materials for a variety of topics encountered when using the MEAN stack.

## Section Quick Link Access:

### Angular

##### - Overview

###### &nbsp;&nbsp;&nbsp;&nbsp; [Notes](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/angular.txt)

##### - Components & Databindings

###### &nbsp;&nbsp;&nbsp;&nbsp; [ngModule](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/app.module.ts)

###### &nbsp;&nbsp;&nbsp;&nbsp; [Component File](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/app.component.ts)

###### &nbsp;&nbsp;&nbsp;&nbsp; [Component Template](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/app.component.html)

###### &nbsp;&nbsp;&nbsp;&nbsp; [Component Stylesheet](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/app.component.css)

###### &nbsp;&nbsp;&nbsp;&nbsp; [Passing Props - Parent - Template](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/components/recipe-list/recipe-list.component.html)

###### &nbsp;&nbsp;&nbsp;&nbsp; [Receiving Props - Child - Template](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/components/recipe-item/recipe-item.component.html)

###### &nbsp;&nbsp;&nbsp;&nbsp; [Reciving Props - Child - Component](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/components/recipe-item/recipe-item.component.ts)

##### - Directives

###### &nbsp;&nbsp;&nbsp;&nbsp; [\*ngFor](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/components/recipe-list/recipe-list.component.html)

###### &nbsp;&nbsp;&nbsp;&nbsp; [\*ngIf](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/components/shopping-list-edit/shopping-list-edit.component.html)

###### &nbsp;&nbsp;&nbsp;&nbsp; [Create Your Own - Basic Attribute](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/directives/basic-highlight.directive.ts)

###### &nbsp;&nbsp;&nbsp;&nbsp; [Create Your Own - Better Attribute](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/directives/better-highlight.directive.ts)

###### &nbsp;&nbsp;&nbsp;&nbsp; [Create Your Own - Structural](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/directives/unless.directive.ts)

##### - Models

###### &nbsp;&nbsp;&nbsp;&nbsp; [Multiple Models](https://github.com/Swhite215/Code-Reference-MEAN/tree/master/angular-app/src/app/models)

##### - Services

###### &nbsp;&nbsp;&nbsp;&nbsp; [Multiple Services](https://github.com/Swhite215/Code-Reference-MEAN/tree/master/angular-app/src/app/services)

###### &nbsp;&nbsp;&nbsp;&nbsp; [Services - CRUD](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/services/shopping.service.ts)

###### &nbsp;&nbsp;&nbsp;&nbsp; [Cross Component Communication - Service Declaration](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/services/recipe.service.ts)

###### &nbsp;&nbsp;&nbsp;&nbsp; [Cross Component Communication - Emitter](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/services/shopping.service.ts)

###### &nbsp;&nbsp;&nbsp;&nbsp; [Cross Component Communication - Subscriber](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/components/shopping-list/shopping-list.component.ts)

##### - Routing

###### &nbsp;&nbsp;&nbsp;&nbsp; [App Router Module](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/app-routing.module.ts)

###### &nbsp;&nbsp;&nbsp;&nbsp; [Router Outlet](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/app.component.html)

###### &nbsp;&nbsp;&nbsp;&nbsp; [Child Router Outlet](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/components/recipes/recipes.component.html)

###### &nbsp;&nbsp;&nbsp;&nbsp; [Router Link](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/layout/header.component.html)

###### &nbsp;&nbsp;&nbsp;&nbsp; [Router Link Active](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/layout/header.component.html)

###### &nbsp;&nbsp;&nbsp;&nbsp; [Router Link Relative Path](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/components/recipe-item/recipe-item.component.html)

###### &nbsp;&nbsp;&nbsp;&nbsp; [Router Params Subscribe](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/components/recipe-detail/recipe-detail.component.ts)

###### &nbsp;&nbsp;&nbsp;&nbsp; [Router Navigation Absolute Path](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/components/recipe-detail/recipe-detail.component.ts)

###### &nbsp;&nbsp;&nbsp;&nbsp; [Router Navigation Relative Path](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/components/recipe-list/recipe-list.component.ts)

##### - Observables

###### &nbsp;&nbsp;&nbsp;&nbsp; [Subject Declaration](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/services/shopping.service.ts)

###### &nbsp;&nbsp;&nbsp;&nbsp; [Subject Next Emitter](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/components/shopping-list/shopping-list.component.ts)

###### &nbsp;&nbsp;&nbsp;&nbsp; [Subject Subscription](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/components/shopping-list-edit/shopping-list-edit.component.ts)

###### &nbsp;&nbsp;&nbsp;&nbsp; [Subject Unsubscribe](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/components/shopping-list-edit/shopping-list-edit.component.ts)

##### - Forms

###### &nbsp;&nbsp;&nbsp;&nbsp; [Template Driven - Reference and NgForm](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/components/shopping-list-edit/shopping-list-edit.component.html)

###### &nbsp;&nbsp;&nbsp;&nbsp; [Template Driven - Inputs, Names, and Validation](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/components/shopping-list-edit/shopping-list-edit.component.html)

###### &nbsp;&nbsp;&nbsp;&nbsp; [Template Driven - Accessing Form Values](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/components/shopping-list-edit/shopping-list-edit.component.ts)

###### &nbsp;&nbsp;&nbsp;&nbsp; [Template Driven - Form Reset](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/components/shopping-list-edit/shopping-list-edit.component.ts)

###### &nbsp;&nbsp;&nbsp;&nbsp; [Reactive - Import Module](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/app.module.ts)

###### &nbsp;&nbsp;&nbsp;&nbsp; [Reactive - Form Declaration](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/components/recipe-edit/recipe-edit.component.ts)

###### &nbsp;&nbsp;&nbsp;&nbsp; [Reactive - Syncing with HTML](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/components/recipe-edit/recipe-edit.component.html)

###### &nbsp;&nbsp;&nbsp;&nbsp; [Reactive - Form Array Creation](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/components/recipe-edit/recipe-edit.component.ts)

###### &nbsp;&nbsp;&nbsp;&nbsp; [Reactive - Form Array Rendering](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/components/recipe-edit/recipe-edit.component.html)

###### &nbsp;&nbsp;&nbsp;&nbsp; [Reactive - Adding Form Group to Form Array](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/components/recipe-edit/recipe-edit.component.ts)

###### &nbsp;&nbsp;&nbsp;&nbsp; [Reactive - Validators](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/components/recipe-edit/recipe-edit.component.ts)

###### &nbsp;&nbsp;&nbsp;&nbsp; [Disabling Submit Button](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/components/recipe-edit/recipe-edit.component.html)

###### &nbsp;&nbsp;&nbsp;&nbsp; [Error Styling](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/components/recipe-edit/recipe-edit.component.css)

##### - HTTP Client Module

###### &nbsp;&nbsp;&nbsp;&nbsp; [Module Import](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/app.module.ts)

###### &nbsp;&nbsp;&nbsp;&nbsp; [CRUD Methods Declaration](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/services/data-storage.service.ts)

###### &nbsp;&nbsp;&nbsp;&nbsp; [CRUD Methods Component Subscription](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/layout/header.component.ts)

###### &nbsp;&nbsp;&nbsp;&nbsp; [HTTP Interceptor](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/interceptors/auth.interceptor.ts)

##### - Modules

###### &nbsp;&nbsp;&nbsp;&nbsp; [Module Import](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/app.module.ts)

###### &nbsp;&nbsp;&nbsp;&nbsp; [Feature Module](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/modules/recipes.module.ts)

###### &nbsp;&nbsp;&nbsp;&nbsp; [Shared Module](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/modules/shared-directive.module.ts)

###### &nbsp;&nbsp;&nbsp;&nbsp; [Lazy Loading](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/src/app/app.module.ts)

##### - TypeScript

###### &nbsp;&nbsp;&nbsp;&nbsp; [Notes](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/typescript/notes.ts)

###### &nbsp;&nbsp;&nbsp;&nbsp; [Config File](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/angular-app/tsconfig.json)

### Nodejs

##### - Overview

###### &nbsp;&nbsp;&nbsp;&nbsp; [Notes](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/server/node.txt)

##### - API Services

###### &nbsp;&nbsp;&nbsp;&nbsp; [Dynamic URLs with CRUD](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/server/services/dynamic-api.js)

###### &nbsp;&nbsp;&nbsp;&nbsp; [Static URLs with CRUD](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/server/services/crud-api.js)

###### &nbsp;&nbsp;&nbsp;&nbsp; [Using Services](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/server/services/using-services.js)

##### - Testing

###### &nbsp;&nbsp;&nbsp;&nbsp; [Mocha with Chai Assertion TDD](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/test/chai-assert.test.js)

###### &nbsp;&nbsp;&nbsp;&nbsp; [Mocha with Chai Should BDD](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/test/chai-should.test.js)

###### &nbsp;&nbsp;&nbsp;&nbsp; [Mocha with Chai Expect BDD](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/test/chai-expect.test.js)

### Docker

##### - Overview

###### &nbsp;&nbsp;&nbsp;&nbsp; [Notes](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/docker/docker.txt)

##### - Files

###### &nbsp;&nbsp;&nbsp;&nbsp; [Dockerfile](https://github.com/Swhite215/Code-Reference-MEAN/blob/master/docker/Dockerfile)

###### &nbsp;&nbsp;&nbsp;&nbsp; [Docker Compose]()


