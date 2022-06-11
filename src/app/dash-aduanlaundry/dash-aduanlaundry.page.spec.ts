import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashAduanlaundryPage } from './dash-aduanlaundry.page';

describe('DashAduanlaundryPage', () => {
  let component: DashAduanlaundryPage;
  let fixture: ComponentFixture<DashAduanlaundryPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashAduanlaundryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashAduanlaundryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
