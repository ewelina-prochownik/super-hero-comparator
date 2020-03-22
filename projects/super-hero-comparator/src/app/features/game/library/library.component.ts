import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'shc-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LibraryComponent implements OnInit {
  constructor(private _gameService: GameService) {}

  public result$ = this._gameService.getHeroByName('bat');

  public ngOnInit(): void {}
}
