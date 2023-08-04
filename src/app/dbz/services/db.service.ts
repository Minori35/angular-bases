import { Injectable } from '@angular/core';
import { v4 as uuid} from "uuid";

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor() { }
  public characters : Character[]= [
    {
    id: uuid(),
    name :"kriller",
    power : 100
    },
    {
    id: uuid(),
        name: "Goku",
        power: 9500
    }
,];

addCharacter(character:Character): void{
    const newCharacter : Character ={ id:uuid(), ...character } //agregar id en un nuevo objeto por servicio 
    this.characters.unshift(newCharacter);
    
    
}

onDeliteChatacterById(id :any){

  this.characters = this.characters.filter( character => character.id !== id);
  
}
}
