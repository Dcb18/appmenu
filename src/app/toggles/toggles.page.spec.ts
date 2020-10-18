import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TogglesPage } from './toggles.page';

describe('TogglesPage', () => {
  let component: TogglesPage;
  let fixture: ComponentFixture<TogglesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TogglesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TogglesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
