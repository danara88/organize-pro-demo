import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './app.reducers';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
