import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PartiesComponent } from './parties/parties.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, PartiesComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
