import { async, TestBed } from '@angular/core/testing';
import { MatModule } from './mat.module';

describe('MatModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MatModule).toBeDefined();
  });
});
