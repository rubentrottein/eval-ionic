import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSummary } from './userSummary.page';

const routes: Routes = [
  {
    path: '',
    component: UserSummary,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
