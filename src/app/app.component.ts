import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Headers, RequestOptions } from '@angular/http'
import 'rxjs/add/observable/throw';
import { User } from './user';

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
    styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
    errorMessage: string;
    heroes: User[];
    constructor(private http: HttpService) {}
    private sortFn(a: User, b: User): number {
        return a.id - b.id
    }
    ngOnInit() {
        this.http.getHeroes('octocat').subscribe(
            heroes => this.heroes = heroes.sort(this.sortFn),
            error => this.errorMessage = < any > error
        );
    }
}
