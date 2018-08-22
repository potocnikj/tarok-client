/**
 * Internal
 */
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * Material components
 */
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTabsModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTabsModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule
  ],
  bootstrap: []
})
export class MaterialModule {
}
