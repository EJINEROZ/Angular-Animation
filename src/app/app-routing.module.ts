import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FadeComponent} from './fade/fade.component'
import {SizeComponent} from './size/size.component'

const routes: Routes = [
  {path: 'fade-component', component: FadeComponent },
  {path: 'size-component', component: SizeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
