import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    }
  `
  ]
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];
  hayError = false;

  constructor(private paisesServices: PaisService) { }

  ngOnInit(): void {
  }

  getClasesCSS( region: string): string {
    return (region === this.regionActiva)
              ? 'btn btn-primary animate__animated animate__fadeIn'
              : 'btn btn-outline-primary animate__animated animate__fadeIn';
  }

  activarRegion(region: string) {
    if ( region === this.regionActiva ) {return; }

    this.paises = [];
    this.hayError = false;
    this.regionActiva = region;

    this.paisesServices.buscarRegion(region)
      .subscribe( paises => {
        this.paises = paises;
      });

  }

}
