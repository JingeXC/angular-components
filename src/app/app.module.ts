import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlaceholderDirective } from './placeholder.directive';
import { SearchresponseComponent } from './searchresponse/searchresponse.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaceholderDirective,
    SearchresponseComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
