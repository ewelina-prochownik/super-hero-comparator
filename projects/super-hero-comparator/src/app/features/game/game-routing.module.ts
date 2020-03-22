import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameComponent } from './game.component';
import { LibraryComponent } from './library/library.component';
import { FightComponent } from './fight/fight.component';

const routes: Routes = [
  {
    path: '',
    component: GameComponent,
    children: [
      { path: 'library', component: LibraryComponent },
      { path: 'fight', component: FightComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule {}
