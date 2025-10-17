import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieItemComponentComponent } from './movie-item-component.component';

describe('MovieItemComponentComponent', () => {
  let component: MovieItemComponentComponent;
  let fixture: ComponentFixture<MovieItemComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieItemComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
