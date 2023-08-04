import { Component, Input,Output,EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()//para recibir informacion el mundo exterior
  public characterList : Character[] = [{
    
    name : 'Trunk',
    power : 10,
  }]  

  @Output() 
  onDelite : EventEmitter<any> = new EventEmitter();


  onDeliteCharacter(id?: string){
    // TODO: Emitir el id del personaje
    if(!id) return
    console.log(id);
    
    this.onDelite.emit(id);
    
  }
}
