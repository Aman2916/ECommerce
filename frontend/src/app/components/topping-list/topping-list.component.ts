import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ToppingService } from 'src/app/services/topping.service';

@Component({
  selector: 'app-topping-list',
  templateUrl: './topping-list.component.html',
  styleUrls: ['./topping-list.component.css'],
})
export class ToppingListComponent implements OnInit {
  toppings: any[] = [];
  totalCost = 0;

  private selectedPizza: null | any;
  private selectedTopping: any[] = [];

  constructor(
    private toppingService: ToppingService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.toppingService.getAllToppings().subscribe((data) => {
      this.toppings = data.map((t: any) => ({
        ...t,
        selected: false,
      }));
    });
  }

  calcCost() {
    this.totalCost = this.toppings
      .filter((t) => t.selected)
      .reduce((sum, t) => sum + t.price, 0);
  }

  addTopping() {
    this.selectedTopping = this.toppings.filter((t) => t.selected);

    this.cartService.addCustomPizza(this.selectedPizza, this.selectedTopping);

    this.router.navigate(['/checkout']);
  }
}
