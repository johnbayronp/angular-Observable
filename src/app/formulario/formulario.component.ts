import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  formulario: FormGroup;

  countUser: Number;

  constructor(private apiPersonas: ApiService) {
    this.countUser = 0;

    this.formulario = new FormGroup({
      nombre: new FormControl(),
      apellido: new FormControl(),
      empresa: new FormControl(),
      telefono: new FormControl(),
    });
  }

  ngOnInit() {
    this.apiPersonas.getPersonas$().subscribe((res) => {
      this.countUser = res.length;
    });
  }

  onSubmit() {
    this.apiPersonas.agregarPersona(this.formulario.value);
  }
}
