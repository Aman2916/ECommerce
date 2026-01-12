import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToppingService {
  private apiUrl="http://localhost:3000/api/pizzas/toppings";

  constructor(private http:HttpClient) {

   }

  getAllToppings(){
    return this.http.get<any>(this.apiUrl);
  }

}
