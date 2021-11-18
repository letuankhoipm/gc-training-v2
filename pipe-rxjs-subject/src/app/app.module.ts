import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeComponent } from './pipe/pipe.component';
import { FormatAddressPipe } from './pipe/pipe/format-address.pipe';
import { AdultPipe } from './pipe/pipe/adult.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PipeComponent,
    FormatAddressPipe,
    AdultPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
