import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { LibraryComponent } from './library/library.component';
import { FightComponent } from './fight/fight.component';

@NgModule({
  declarations: [GameComponent, LibraryComponent, FightComponent],
  imports: [CommonModule, GameRoutingModule]
})
export class GameModule {}
