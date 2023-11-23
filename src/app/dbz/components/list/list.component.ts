import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  /*Decorador @Input para recibir datos del padre, que en este caso,
   es main, es como que se reciben los datos del padre y se insertan
    en este arreglo*/
  @Input()
  public characterList: Character[] = [];

  //Index value: number
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();


  onDeleteCharacter(id: string):void {
    //TODO: Emitir ID del personajes
    this.onDelete.emit(id);
  }

}
