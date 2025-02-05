import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BachComponent } from './bach/bach.component';
import { IclandComponent } from './icland/icland.component';
import { TestComponent } from './test/test.component';
const routes: Routes = [
  {path:'',component:BachComponent},
  {path:'icland',component:IclandComponent},
  {path:'test',component:TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
