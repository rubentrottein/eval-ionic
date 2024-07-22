import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'userSummary',
        loadChildren: () => import('../userSummary/userSummary.module').then(m => m.UserSummaryModule)
      },
      {
        path: 'userDetails',
        loadChildren: () => import('../userDetails/userDetails.module').then(m => m.UserDetailsModule)
      },
      {
        path: 'userPersist',
        loadChildren: () => import('../userPersist/userPersist.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/userSummary',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/userSummary',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
