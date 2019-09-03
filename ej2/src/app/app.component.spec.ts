import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';


//todos los componentes los tengo q importar arriba y despues uno a uno los tengo q importar en los imports
//dentro del beforeEach y recien ahi empezar a testear en it

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        MatFormFieldModule,
        MatRadioModule,
        BrowserAnimationsModule,
        MatInputModule
            ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  it('me fijo en valor del H1 tiene q ser Test 1 Angular y Jasmine', () => {
    //antes de hacer cualquier cosa hacemos la cama 
    //instanciamos el app.component con el test bed
    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.debugElement.componentInstance;

    //ya q tenemos todo eso nos fijamos el valor de app.title
    expect(app.title).toEqual('Test 1 Angular y Jasmine');

  });

  it('deberia de traerme todo el texto del h1 ', () => {
    const fixture = TestBed.createComponent(AppComponent);
// detect changes es una funcion q aplica cambios a los elementos html
// en este caso aplicamos cambios a la propiedad text? (the interpolation to the DOM of the “text” component property)
    fixture.detectChanges();
    
    const app = fixture.debugElement.componentInstance;  
    //Then it gets the native element of the compiled HTML (the HTML rendered by the component)
    const compiled=fixture.debugElement.nativeElement;
    //Finally, we select the “h1” containing the “text” 
    //value and expect that the selected HTML contains the expected value.

    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Test 1 Angular y Jasmine');
  });

  it('deberia cambiar el valor de input ', () => {
    // const fixture = TestBed.createComponent(AppComponent);
    // fixture.detectChanges();
    (<HTMLInputElement>document.getElementById('texto1')).value='123';

    
  });
  //no funciona
  // it('deberia cambiar placeholder ', () => {
    
  //   (<HTMLInputElement>document.getElementById('texto1')).placeholder='lalala';   checked
  
  // });
 it('quiero dar click en un radiobutton ', () => {
    
  // document.getElementById('opcion1').click();
  // document.getElementById('opcion1').triggerEventHandler('click');
  //no puedo hacer esto
  (<HTMLInputElement>document.getElementById('opcion1')).value='1';
  
  });




});

