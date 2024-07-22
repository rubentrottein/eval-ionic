import { Component, Input } from '@angular/core';
import { User } from '../models/User';
import { UserSummary } from '../userSummary/userSummary.page';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'userDetails.page.html',
  styleUrls: ['userDetails.page.scss']
})
export class UserDetails {
  @Input() userId = 0;
  @Input() users: User[] = [];
  
  constructor(private storage: Storage) {
  }

  name = "test";
  image = 1;
  online = true;
  active = false;

  async deleteUser(user: User) {
    const index = this.users.indexOf(user);
    if (index > -1) {
      this.users.splice(index, 1);
      await UserSummary.saveUsersStatic(this.storage, this.users);
    }
  }
}
