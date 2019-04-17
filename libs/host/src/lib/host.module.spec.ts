import { async, TestBed } from '@angular/core/testing';
import { HostModule } from './host.module';

describe('HostModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HostModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(HostModule).toBeDefined();
  });
});
