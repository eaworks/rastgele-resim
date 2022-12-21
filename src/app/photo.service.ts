import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }
  getPhotos() {
    return this.http.get('https://api.unsplash.com/photos/random', {
      headers: { Authorization: 'Client-ID ndYrcIfg1ZviINX7SbYFmyxMQUF8qCVGS2CEGKLXyeU' }
    });
  }
}
