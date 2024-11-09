import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AnimalsService {

  private apiUrl = 'http://localhost:3000';  
  private animalsUrl = '/api/animals';
  private addAnimalsUrl = '/api/add-animals';
  constructor(private httpClient: HttpClient) { }


  getAnimals(): Observable<any> {
    return this.httpClient.get(this.apiUrl+this.animalsUrl); 
  }

  addAnimal(animal: { name: string; type: string }): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    return this.httpClient.post<any>(this.apiUrl+this.addAnimalsUrl, animal,{ headers }); 
  }
}
