import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorBasicDemoComponent } from './editor-basic-demo.component';

describe('EditorBasicDemoComponent', () => {
  let component: EditorBasicDemoComponent;
  let fixture: ComponentFixture<EditorBasicDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditorBasicDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditorBasicDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
