import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { ROUTER_DIRECTIVES, RouteConfig, Location,ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, Route, AsyncRoute, Router, AuxRoute } from 'angular2/router';

@Component({
  selector: 'my-snippets',
  templateUrl: 'app/snippets.component.html',
  styleUrls: ['app/snippets.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class SnippetsComponent {

  
}
