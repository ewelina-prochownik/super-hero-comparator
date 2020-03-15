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
    }
  ];

  constructor() {}

  public ngOnInit(): void {}
}
