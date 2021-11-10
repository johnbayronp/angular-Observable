import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface Persona {
  nombre: string;
  apellido: string;
  telefono: Number;
}

@Injectable()
export class ApiService {
  private personas: Persona[];

  // Creamos un subject - Subject<que es lo que va emitir>
  private personas$: Subject<Persona[]>;

  constructor() {
    this.personas = [];
    // Creamos el subject
    this.personas$ = new Subject();
  }

  agregarPersona(persona: Persona) {
    this.personas.push(persona);

    // Emitimos el (evento) para todos los que esten suscrito
    this.personas$.next(this.personas);
  }

  //Creamos el observable al cual nos podremos suscribir
  getPersonas$(): Observable<Persona[]> {
    return this.personas$.asObservable();
  }
}
