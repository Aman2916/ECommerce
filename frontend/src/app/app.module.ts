import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PizzaListComponent } from './components/pizza-list/pizza-list.component';
import {HttpClientModule} from "@angular/common/http"
import { PizzaService } from './services/pizza.service';
import { ToppingListComponent } from './components/topping-list/topping-list.component';

import { FormsModule } from '@angular/forms';
import { CheckOutComponent } from './components/check-out/check-out.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PizzaListComponent,
    ToppingListComponent,
    CheckOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
