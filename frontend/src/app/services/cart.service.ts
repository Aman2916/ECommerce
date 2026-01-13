import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: any[] = [];

  addPizza(pizza: any) {
    this.cart.push({
      pizza: pizza,
      toppings: [],
      quantity: 1,
      totalPrice: pizza.price,
    });
  }

  addCustomPizza(pizza: any | null, toppings: any[]) {
    const toppingsTotal = toppings.reduce((s, t) => s + t.price, 0);
    const pizzaPrice = pizza ? pizza.price : 0;

    this.cart.push({
      pizza,
      toppings,
      quantity: 1,
      totalPrice: pizzaPrice + toppingsTotal,
    });
  }

  removeByPizzaId(pizzaId: string) {
    const index = this.cart.findIndex(
      (item) => item.pizza && item.pizza.id === pizzaId
    );
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }

  isItemInCart(pizzaId: string): boolean {
    return this.cart.some((item) => {
      return item.pizza && item.pizza.id === pizzaId;
    });
  }

  increaseQty(index: number) {
    this.cart[index].quantity++;
  }

  decreaseQty(index: number) {
    if (this.cart[index].quantity > 1) {
      this.cart[index].quantity--;
    }
  }

  getCartCount() {
    return this.cart.length;
  }

  remove(index: number) {
    this.cart.splice(index, 1);
  }

  getCart() {
    return this.cart;
  }

  clear() {
    this.cart = [];
  }
}
