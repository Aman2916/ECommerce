import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PizzaService } from 'src/app/services/pizza.service';
import { PizzaListComponent } from './pizza-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('PizzaListComponent', () => {
  let component: PizzaListComponent;
  let fixture: ComponentFixture<PizzaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [PizzaListComponent],
      providers:[PizzaService]
    });
    fixture = TestBed.createComponent(PizzaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
