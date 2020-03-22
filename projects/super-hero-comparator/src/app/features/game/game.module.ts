import { NgModule } from '@angular/core';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { LibraryComponent } from './library/library.component';
import { FightComponent } from './fight/fight.component';
import { SharedModule } from '../../shared/shared.module';
import { GameService } from './game.service';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [GameComponent, LibraryComponent, FightComponent, HeroComponent],
  imports: [SharedModule, GameRoutingModule],
  providers: [GameService]
})
export class GameModule {}
