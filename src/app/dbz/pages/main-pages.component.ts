import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbService } from '../services/db.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main.component.html'
})

export class NameComponent {
 
    constructor (private dbzService: DbService){
         
     }

     get characters(): Character[]{
        return [...this.dbzService.characters];
     }

     onDeliteChatacterById(id:string) : void {
        this.dbzService.onDeliteChatacterById(id)
     }

     addCharacter(character : Character):void{
        this.dbzService.addCharacter
     }
}