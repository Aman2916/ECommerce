import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css'],
})
export class PizzaListComponent implements OnInit {
  pizzas: any[] = [];

  constructor(
    private pizzaService: PizzaService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.pizzaService.getAllPizzas().subscribe((data) => (this.pizzas = data));
  }

  isItemInCart(pizzaId: string): boolean {
    return this.cartService.isItemInCart(pizzaId);
  }

  addPizza(pizza: any) {
    this.cartService.addPizza(pizza);
  }

  removePizzaFromCart(pizzaId: string) {
    this.cartService.removeByPizzaId(pizzaId);
  }

  getFormatedString(pizza: any[], key: string): string {
    return pizza.map((data) => data[key]).join(', ');
  }
}
