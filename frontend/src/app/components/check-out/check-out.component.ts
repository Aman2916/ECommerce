import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css'],
})
export class CheckOutComponent implements OnInit {
  cart: any[] = [];

  ingredientItems: any[] = [];
  pizzaItems: any[] = [];

  pizzaTotal = 0;
  ingredientTotal = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    //  ({pizzaCart:this.pizzas,toppingCart:this.toppings}=this.cartService.getCart());
    this.refreshCart();
  }

  refreshCart() {
    this.cart = this.cartService.getCart();

    this.pizzaItems = this.cartService.getCart().filter((i) => i.pizza);
    this.ingredientItems = this.cartService
      .getCart()
      .flatMap((i) => i.toppings);

    this.pizzaTotal = this.pizzaItems.reduce(
      (sum, item) => sum + item.pizza.price * item.quantity,
      0
    );
    this.ingredientTotal = this.ingredientItems.reduce(
      (sum, t) => sum + t.price,
      0
    );
    console.log('toppings', this.ingredientTotal);
    console.log('pizzas', this.pizzaTotal);
  }

  IncreaseQty(index: number) {
    this.cartService.increaseQty(index);
    this.refreshCart();
  }
  DecreaseQty(index: number) {
    this.cartService.decreaseQty(index);
    this.refreshCart();
  }
  removeCartItem(index: number) {
    this.cart.splice(index, 1);
    this.refreshCart();
  }

  showPaymentAlert = false;

  pay() {
    this.showPaymentAlert = true;
    this.cartService.clear();
    setTimeout(() => this.router.navigate(['/']), 3000);
  }

  clearCart() {
    this.cartService.clear();
    this.refreshCart();
  }
}
