import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateDetailNonroomComponent } from './update-detail-nonroom.component';

describe('UpdateDetailNonroomComponent', () => {
  let component: UpdateDetailNonroomComponent;
  let fixture: ComponentFixture<UpdateDetailNonroomComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDetailNonroomComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateDetailNonroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
