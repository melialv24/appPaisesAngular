import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
})
export class PorPaisComponent {
  termino: string = 'hola mundo';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  buscar() {
    this.hayError = false;
    this.paisService.buscarPais(this.termino).subscribe(
      (paises) => {
        this.paises = paises;
      },
      (err) => {
        this.hayError = true;
        this.paises = [];
      }
    );
  }
}
