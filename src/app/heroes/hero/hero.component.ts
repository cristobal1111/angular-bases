import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'Ironman ';
  public age: number = 45;


  //getters es un metodo que se usa como propiedad
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  //Método para juntar nombre y edad
  getHeroDescription():string {
    return `${ this.name } - ${ this.age }`
  }

  changeHero():void {
    this.name = 'Hulk';
  }

  changeAge(){
    this.age = 24;
  }

  resetForm():void {
    this.name = 'ironman';
    this.age = 40;
  }
}
