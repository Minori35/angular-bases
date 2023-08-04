import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameComponent } from './pages/main-pages.component';
import { ListComponent } from './components/list/list.component';
import { CharacterComponent } from './components/character/character.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [NameComponent, ListComponent, CharacterComponent],
  imports: [
    CommonModule,
    FormsModule
  ],

  
  exports :[
    NameComponent
  ]
})
export class DbzModule { }
