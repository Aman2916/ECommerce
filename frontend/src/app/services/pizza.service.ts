import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PizzaService {
 private apiUrl="http://localhost:3000/api/pizzas";

  constructor(private http:HttpClient) { }
  
  getAllPizzas(){
    return this.http.get<any[]>(this.apiUrl);
  }

}
