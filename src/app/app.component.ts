import { Component } from '@angular/core';
import {Router} from "@angular/router";
import "rxjs/add/operator/pairwise";

@Component({
  selector: 'alerts-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AlertsAppComponent {
  constructor(public router: Router){}
}

