import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroesComponent } from './heroes.component';
import { FormsModule } from '@angular/forms';

describe('HeroesComponent', () => {
  let component: HeroesComponent; // Angular component
  let fixture: ComponentFixture<HeroesComponent>; // API para testear componente
  let element: fixture.nativeElement; // DOM Element

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ HeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a property called hero that is an object', () => {
    expect(component.hero).toBeDefined();
  });

  it('hero should have id property', () => {
    expect(component.hero.id).toBeDefined();
  });

  it('hero should have name property', () => {
    expect(component.hero.name).toBeDefined();
  });

  it('should render hero.name in a h2 tag', async(() => {
    component.hero = {
      id: 2,
      name: 'Cagarruto'
    };
    fixture.detectChanges();
    expect(element.querySelector('h2').textContent).toContain('Cagarruto'.toUpperCase());
  }));

it('should display an input field',async(() => {
  expect(element.querySelector('input')).toBeDefined()
}));

it('should render hero.name in h2 tag', async(() => {

  component.hero = {
    id: 2,
    name: 'Cagarruta'};
  fixture.detectChanges(); // Trigger change detection to update the DOM element.
  expect(element.querySelector('h2').innerHTML).toContain('Cagarruta'.toUpperCase())
  }))

});
