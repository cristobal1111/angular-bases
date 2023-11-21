import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {


  //ngFor
  public heroNames: string[] = ['Spiderman', 'Iron Man', 'Hulk', 'She hulk', 'Thor'];
  //Propiedad opcional
  public deletedHero?: string;

  //Remover ultimo elemento del array con .pop
  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }
}
