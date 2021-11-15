import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Capital } from '../../interfaces/capital.interface';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino = '';
  hayError = false;
  paises: Country[] = [];

  constructor( private paisService: PaisService) { }

    buscar( termino: string): void {
      this.hayError = false;
      this.termino = termino;

      this.paisService.buscarCapital(termino)
        .subscribe( (paises) => {
          console.log(paises);
          this.paises = paises;
        }, (err) => {
          this.hayError = true;
          this.paises = [];
        });
    }

    sugerencias( termino: string ){
      this.hayError = false;
      // this.termino = termino;
    }


}
