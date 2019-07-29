import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CookieLawModule } from 'angular2-cookie-law'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CookieLawModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
