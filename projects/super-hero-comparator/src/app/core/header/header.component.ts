import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MenuLink } from './header.data';

@Component({
  selector: 'shc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  public title = 'Super Hero Comparator';
  public menuLinks: MenuLink[] = [
    {
      link: '',
      name: 'Home'
    },
    {
      link: 'game/library',
      name: 'Library'
    },
    {
      link: 'game/fight',
      name: 'Game'
    }
  ];

  constructor() {}

  public ngOnInit(): void {}
}
