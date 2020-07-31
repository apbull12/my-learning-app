import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ParentComponent} from './parent/parent.component';
import {ChildComponent} from './child/child.component';



const routes: Routes = [{ path: 'form', component: ParentComponent },
  { path: 'form/:id/results', component: ChildComponent },
  { path: 'results', component: ChildComponent },
  { path: '',   redirectTo: '/form', pathMatch: 'full' }, // redirect to `first-component`
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
