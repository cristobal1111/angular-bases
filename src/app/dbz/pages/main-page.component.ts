import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPAgeComponent {
  /*Esta inyección del servicio me va habilitar en todo
   mi componente del mainPage toda la información que esté
    siendo utilizada en este servicio*/

  /* Este servicio no debe ser publico porque despues
     se hace referencia a mainPageComponent a esa instancia,
     se hace un cambio y no deberia ser esa la forma de como
     probarlo o ejecutarlo */
  constructor( private dbzService: DbzService ){}

  //Podemos crear getter para resolver esto, todos los getter regresan un valor
  /*Si nosotros modificamos esta data que se encuentra en el servicio,
   pero es mejor hacer un spread operator para crear una copia de los personajes */
  get characters(): Character[]{
    //Creamos una copia de mis characters
    return [...this.dbzService.characters];
  }

  /*Creamos un metodo para traer el id directamente desde el service,
    de esta manera eliminaremos el personaje por el id*/
  onDeleteCharacter(id: string){
    this.dbzService.deleteCharacterById(id);
  }

  /* Vamos a añadir el personaje desde el servicio*/
  //Destacar que cambiamos el nombre en el servicio a addCharacter
  onNewCharacter(character: Character){
    this.dbzService.addCharacter(character);
  }

  /* Luego en nuestro main-page.component.html llamamos directamente
     los nuevos métodos*/
}
