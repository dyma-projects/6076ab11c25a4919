import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Exercice2Component } from './exercice2/exercice2.component';
import { Exercise1Component } from './exercise1/exercise1.component';
import { Exercise3Component } from './exercise3/exercise3.component';
import { Exercise4Component } from './exercise4/exercise4.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercice2Component,
    Exercise1Component,
    Exercise3Component,
    Exercise4Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
