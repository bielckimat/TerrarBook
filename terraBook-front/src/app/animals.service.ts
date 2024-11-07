import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AnimalsService {

  private apiUrl = 'http://localhost:3000/api/animals';  

  constructor(private httpClient: HttpClient) { }


  getAnimals(): Observable<any> {
    return this.httpClient.get(this.apiUrl); 
  }
}
