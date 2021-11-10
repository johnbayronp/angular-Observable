import { Component, OnInit } from '@angular/core';
import { ApiService, Persona } from '../api.service';

@Component({
  selector: 'app-list-personas',
  templateUrl: './list-personas.component.html',
  styleUrls: ['./list-personas.component.css'],
})
export class ListPersonasComponent implements OnInit {
  personas: Persona[];

  constructor(private apiPersonas: ApiService) {
    this.personas = [];
  }

  ngOnInit() {
    this.apiPersonas.getPersonas$().subscribe((personas) => {
      this.personas = personas;
      console.log('res observable:', this.personas);
    });
  }
}
