import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { HeroDetails } from '../game.data';

@Component({
  selector: 'shc-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent implements OnInit {
  @Input() public hero: HeroDetails;
  constructor() {}

  public ngOnInit(): void {}
}
