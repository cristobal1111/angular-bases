import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  //Emisor de eventos
  @Output()
  /* Creamos el nombre de la propiedad de tipo EventEmitter
     EventEmitter es flexible, puede emitir string,number,objects etc.
     En este caso vamos a emitir un Character que es un génerico, el cual
     podemos especificar el tipo de dato que fluye a traves de este objeto.

     Lo igualamos en un nuevo EventEmitter
     y asi creamos nuestra instancia de este emisor de eventos
     Luego lo decoramos con el Output()*/

  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter(): void{

    /*Cuando javaScript llegue a este punto se va a detener la ejecución,
     en el archivo.ts del debugger */
    //debugger;

    //Realizar una validación para que el nombre no este vacío.
    if (this.character.name.length === 0) return;

    //si tiene nombre entonces emitimos algo de tipo character
    this.onNewCharacter.emit(this.character);

    this.character = {name: '', power: 0}
  }
}
