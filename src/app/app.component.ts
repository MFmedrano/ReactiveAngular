import { Component, OnInit, NgModule } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  titulo = 'Experiencia Laboral';
  formulario: FormGroup;
  changes: any;

  get experienciaLaboral(): FormArray {
    return this.formulario.get('experienciaLaboral') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.crearFormulario();
    this.anadirExperienciaLaboral();
    this.crearListeners();
  }

  crearFormulario() {
    this.formulario = this.fb.group({
      experienciaLaboral: this.fb.array([])
    });
  }

  anadirExperienciaLaboral() {
    debugger;
    const trabajo = this.fb.group({
      empresa: new FormControl(''),
      puesto: new FormControl(''),
      descripcion: new FormControl('')
    });

    this.experienciaLaboral.push(trabajo);
  }

  borrarTrabajo(indice: number) {
    this.experienciaLaboral.removeAt(indice);
  }
  crearListeners() {
    // this.forma.statusChanges.subscribe( status => console.log({ status }));
    // this.formulario.get('experienciaLaboral').valueChanges.subscribe( console.log );        
    this.formulario.get('experienciaLaboral').valueChanges.subscribe(values => {
      this.changes = values;
    });

  }

  PosteoFormulario() {
    debugger;
    (this.formulario.get('experienciaLaboral') as FormArray).valueChanges.subscribe(values => {
      console.log(values);
    });
  }

}

