import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

    /*Exportamos la interface de Character
    Entonces podemos decir que tenemos un
    arreglo de tipo Character que es nuestra interface*/


  /*Cuando se hace el build de nuestro proyecto,
    la interface tiene 0 lineas de codigos, es decir,
    no se importan las interfaces*/


  /*Originalmente este no es el lugar para tener esta data,
    pero por el momento está bien así */
    public characters: Character[] = [{
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }];

    /*Creamos un método preferiblemente con el mismo nombre,
      vamos a recibir un character de tipo Character(nuestra interface)*/
    addCharacter(character: Character ):void{
      /*Creamos una variable de tipo Character, le agregamos el id,
       y utilizamos el spread operator */
      const newCharacter: Character = { id: uuid(), ...character };

      this.characters.push(newCharacter);
    }

    /*onDeleteCharacter(index:number){
      this.characters.splice(index, 1);
    }*/

    deleteCharacterById (id: string) {
      this.characters = this.characters.filter( character => character.id !== id);
    }

}
