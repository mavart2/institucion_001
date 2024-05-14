import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-y-directivas',
  templateUrl: './pipes-y-directivas.component.html',
  styles: ``
})
export class PipesYDirectivasComponent {
  nombre = 'John';

  hoy = new Date();
  horas = this.hoy.getHours();
  minutos = this.hoy.getMinutes();
  segundos = this.hoy.getSeconds();

}
