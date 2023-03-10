import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagerPanelComponent } from './project-manager-panel.component';

describe('ProjectManagerPanelComponent', () => {
  let component: ProjectManagerPanelComponent;
  let fixture: ComponentFixture<ProjectManagerPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectManagerPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectManagerPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
