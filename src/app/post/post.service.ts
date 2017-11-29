import { config } from './../shared/config';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

import { config } from '../shared/config';

@Injectable()
export class PostService {
  constructor(private http: HttpClient) {
  }

  fetchConcordanceLink() {
    return this.http.get(config.baseurl + config.concordancelink);
  }

  fetchPosts(bytime: boolean, bytype: string) {
    let fetchedPosts = [];
    let params = new HttpParams().set('time', bytime.toString());
    params = params.append('type', bytype);
    return this.http.get(config.baseurl + config.concordance, { params: params });
  }

  fetchPost(id: string) {
    let params = new HttpParams().set('id', id);
    params = params.append('type': type);
    return this.http.get(config.baseurl + config.postdetail, { params: params });
  }
}
