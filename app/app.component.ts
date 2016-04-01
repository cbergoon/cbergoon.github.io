import { bootstrap } from 'angular2/platform/browser';
import { Component, provide } from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig, Location,ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, Route, AsyncRoute, Router, AuxRoute } from 'angular2/router';

import { WorkComponent } from './work.component';
import { EducationComponent } from './education.component';
import { ProjectsComponent } from './projects.component';
import { ReadingsComponent } from './readings.component';
import { SnippetsComponent } from './snippets.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: []
})
@RouteConfig([
  {
    path: '/work',
    name: 'Work',
    component: WorkComponent,
    useAsDefault: true
  },
  {
    path: '/education',
    name: 'Education',
    component: EducationComponent
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsComponent
  },
  {
    path: '/readings',
    name: 'Readings',
    component: ReadingsComponent
  },
  {
    path: '/snippets',
    name: 'Snippets',
    component: SnippetsComponent
  }
])
export class AppComponent {
  title = 'Tour of Heroes';
}

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/