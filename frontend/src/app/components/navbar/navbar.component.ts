import { Component, DoCheck } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements DoCheck {
    cartCount=0
    constructor(private cartService:CartService){}

    ngDoCheck(){
      this.cartCount=this.cartService.getCartCount();
     }
}
