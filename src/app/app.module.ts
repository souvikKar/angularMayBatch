import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { Class1Component } from './class1/class1.component';
import { MakeItRedDirective } from './Directive/red.directive';
import { ClassNgforComponent } from './class-ngfor/class-ngfor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    Class1Component,
    MakeItRedDirective,
    ClassNgforComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
