import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VCardComponent } from './v-card.component';

describe('VCardComponent', () => {
  let component: VCardComponent;
  let fixture: ComponentFixture<VCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
