import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

const matModules = [MatButtonModule, MatToolbarModule, MatCardModule, MatInputModule, MatFormFieldModule];

@NgModule({
  declarations: [],
  imports: [...matModules],
  exports: [...matModules]
})
export class SharedModule {}
