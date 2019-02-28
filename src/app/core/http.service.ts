import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class HttpService {

  readonly apiUrl = 'https://api.unsplash.com/photos/random?client_id=c60fbe677a161ee3f79f85dc8fcc49d6ce407e7b6caefce10ed43239dfd00827&count=30&orientation=squarish';

  constructor(private http: HttpClient) {
  }

  public getLivePhotos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  public getBackupPhotos(): Observable<any> {
    return this.http.get('./assets/images.json');
  }

}
