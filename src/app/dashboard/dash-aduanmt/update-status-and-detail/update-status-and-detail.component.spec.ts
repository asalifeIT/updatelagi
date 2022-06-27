import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateStatusAndDetailComponent } from './update-status-and-detail.component';

describe('UpdateStatusAndDetailComponent', () => {
  let component: UpdateStatusAndDetailComponent;
  let fixture: ComponentFixture<UpdateStatusAndDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateStatusAndDetailComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateStatusAndDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
