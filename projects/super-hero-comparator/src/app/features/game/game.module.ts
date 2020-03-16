import { NgModule } from '@angular/core';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { LibraryComponent } from './library/library.component';
import { FightComponent } from './fight/fight.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [GameComponent, LibraryComponent, FightComponent],
  imports: [SharedModule, GameRoutingModule]
})
export class GameModule {}
