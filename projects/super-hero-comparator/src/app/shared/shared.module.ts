import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

const matModules = [MatButtonModule, MatToolbarModule];

@NgModule({
  declarations: [],
  imports: [...matModules],
  exports: [...matModules]
})
export class SharedModule {}
