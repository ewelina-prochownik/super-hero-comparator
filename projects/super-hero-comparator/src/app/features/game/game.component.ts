import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'shc-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent implements OnInit {
  constructor() {}

  public ngOnInit(): void {}
}
