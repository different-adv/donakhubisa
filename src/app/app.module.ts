import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DummyComponent } from './dummy/dummy.component';
import { AnotherDummyComponent } from './another-dummy/another-dummy.component';
import { SuccesspostComponent } from './successpost/successpost.component';

@NgModule({
  declarations: [
    AppComponent,
    DummyComponent,
    AnotherDummyComponent,
    SuccesspostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
