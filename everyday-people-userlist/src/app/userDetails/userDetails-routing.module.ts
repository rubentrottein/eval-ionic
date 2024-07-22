import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetails } from './userDetails.page';

const routes: Routes = [
  {
    path: '',
    component: UserDetails,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDetailsRoutingModule {}
