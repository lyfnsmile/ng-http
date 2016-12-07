import { Component,OnInit } from '@angular/core';
import {HttpService} from './http.service';
import{Headers, RequestOptions} from '@angular/http'
import 'rxjs/add/observable/throw';
import {Hero} from './hero'

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  errorMessage: string;
  heroes:Hero[];
  constructor(private http:HttpService){}
  ngOnInit(){
    this.http.getHeroes().subscribe(
                       heroes => this.heroes = heroes,
                       error =>  this.errorMessage = <any>error);

  }
}
