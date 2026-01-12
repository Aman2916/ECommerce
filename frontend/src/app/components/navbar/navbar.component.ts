import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    cartCount:number=0
    constructor(private cartService:CartService){}

    ngDoCheck(){
      this.cartCount=this.cartService.getCartCount();
     }
}
