import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import {appconfig} from '../shared/appconfig';

@Injectable()
export class PostService {
  constructor(private http: HttpClient) {
  }

  fetchConcordanceLink() {
    return this.http.get(appconfig.baseurl + appconfig.concordancelink);
  }

  fetchPosts(bytype?: string) {
    const params = new HttpParams().set('time', bytype);
    return this.http.get(appconfig.baseurl + appconfig.concordance, {params: params});
  }

  fetchPost(bytype: string, byid: string) {
    let params = new HttpParams().set('type', bytype);
    params = params.append('id', byid);
    return this.http.get(appconfig.baseurl + appconfig.postdetail, {params: params});
  }
}
