import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatToolbarModule } from '@angular/material';

const MaterialComponents = [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatToolbarModule,
];

@NgModule({
  imports: [ MaterialComponents ],
  exports: [ MaterialComponents ],
})
export class MaterialModule {
}
