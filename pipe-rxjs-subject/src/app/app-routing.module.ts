import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipeComponent } from './pipe/pipe.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [
  {
    path:'pipe', component: PipeComponent
  },
  {
    path: 'rxjs', component: RxjsComponent
  },
  {
    path: 'subject', component: SubjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
