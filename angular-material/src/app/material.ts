import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule
} from "@angular/material";

const MaterialComponents = [
  MatBadgeModule,
  MatIconModule,
  MatButtonToggleModule,
  MatButtonModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatToolbarModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule {}
