import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'shc-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FightComponent implements OnInit {
  constructor() {}

  public ngOnInit(): void {}
}
