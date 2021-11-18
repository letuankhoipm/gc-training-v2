import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeComponent } from './pipe.component';
import { FormatAddressPipe } from './pipe/format-address.pipe';
import { AdultPipe } from './pipe/adult.pipe';
import { FlyingHeroesPipe } from './pipe/flying-heroes.pipe';


@NgModule({
  declarations: [
    PipeComponent,
    FormatAddressPipe,
    AdultPipe,
    FlyingHeroesPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipeModule { }
