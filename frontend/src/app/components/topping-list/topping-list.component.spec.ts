import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToppingListComponent } from './topping-list.component';
import { ToppingService } from 'src/app/services/topping.service';

describe('ToppingListComponent', () => {
  let component: ToppingListComponent;
  let fixture: ComponentFixture<ToppingListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ToppingListComponent],
      providers: [ToppingService],
    });
    fixture = TestBed.createComponent(ToppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
