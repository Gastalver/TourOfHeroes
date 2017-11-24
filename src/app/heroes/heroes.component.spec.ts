import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroesComponent } from './heroes.component';
import { FormsModule } from '@angular/forms';
import { HEROES} from '../mock-heroes';

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
    let fixture = TestBed.createComponent(HeroesComponent);
    let component = fixture.componentInstance;
    let element = fixture.nativeElement;
  });

  it('should create', () => {
    let fixture = TestBed.createComponent(HeroesComponent);
    let component = fixture.componentInstance;
    let element = fixture.nativeElement;
    expect(component).toBeTruthy();
  });

  it('should have a property called hero that is an object', () => {
    let fixture = TestBed.createComponent(HeroesComponent);
    let component = fixture.componentInstance;
    let element = fixture.nativeElement;
    expect(component.hero).toBeDefined();
  });

  it('hero should have id property', () => {
    let fixture = TestBed.createComponent(HeroesComponent);
    let component = fixture.componentInstance;
    let element = fixture.nativeElement;
    expect(component.hero.id).toBeDefined();
  });

  it('hero should have name property', () => {
    let fixture = TestBed.createComponent(HeroesComponent);
    let component = fixture.componentInstance;
    let element = fixture.nativeElement;
    expect(component.hero.name).toBeDefined();
  });

  it('should render hero.name in a h2 tag', async(() => {
    let fixture = TestBed.createComponent(HeroesComponent);
    let component = fixture.componentInstance;
    let element = fixture.nativeElement;
    component.hero = {
      id: 2,
      name: 'Cagarruto'
    };
    fixture.detectChanges();
    expect(element.querySelector('h2').textContent).toContain('Cagarruto'.toUpperCase());
  }));

it('should display an input field',async(() => {
  let fixture = TestBed.createComponent(HeroesComponent);
  let component = fixture.componentInstance;
  let element = fixture.nativeElement;
  expect(element.querySelector('input')).toBeDefined()
}));

it('should render hero.name in h2 tag', async(() => {
  let fixture = TestBed.createComponent(HeroesComponent);
  let component = fixture.componentInstance;
  let element = fixture.nativeElement;
  component.hero = {
    id: 2,
    name: 'Cagarruta'};
  fixture.detectChanges(); // Trigger change detection to update the DOM element.
  expect(element.querySelector('h2').innerHTML).toContain('Cagarruta'.toUpperCase())
  }))

});
