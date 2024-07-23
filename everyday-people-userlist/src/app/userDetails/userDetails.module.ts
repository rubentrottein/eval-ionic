import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { UserDetailsRoutingModule } from './userDetails-routing.module';
import { UserDetails } from './userDetails.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    UserDetailsRoutingModule,
  ],
  declarations: [UserDetails] 
})
export class UserDetailsModule {}
