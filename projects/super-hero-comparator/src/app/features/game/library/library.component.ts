import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'shc-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LibraryComponent implements OnInit {
  constructor() {}

  public ngOnInit(): void {}
}
