import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PizzaListComponent } from './components/pizza-list/pizza-list.component';
import { ToppingListComponent } from './components/topping-list/topping-list.component';
import { CheckOutComponent } from './components/check-out/check-out.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },{
    path:'pizzas',component:PizzaListComponent
  },{
    path:'toppings',component:ToppingListComponent
  },{
    path:'checkout',component:CheckOutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
