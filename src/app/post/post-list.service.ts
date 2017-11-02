import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class PostListService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private postsUrl = '';
    constructor(private http: Http) { }
}