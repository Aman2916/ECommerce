import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToppingService } from './topping.service';

describe('ToppingService', () => {
  let service: ToppingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ToppingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
