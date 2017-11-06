import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class PostListService {
  constructor(private http: HttpClient) {
  }

  fetchPosts(bytime: boolean, bytype: string) {
    let params = new HttpParams().set('time', bytime.toString());
    params = params.append('type', bytype);
    this.http.get('', {params: params});
  }
}
