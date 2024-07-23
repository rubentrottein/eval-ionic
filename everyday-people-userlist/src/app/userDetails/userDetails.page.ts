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
  //@Input() users: User[] = UserSummary.users;
  
  constructor(private storage: Storage) {}
  fetchUser(){
    let url = new URL(window.location.href);
    let id = Number(url.searchParams.get("id"));
    console.log(this.users);
    return this.users[id]
  }
  user = this.fetchUser();
  name = this.user.name;
  lastName = this.user.lastName;
  tel = this.user.tel;
  email = this.user.email;
  image = this.user.image;
  online = this.user.online;

  active = false;

  async deleteUser(user: User) {
    const index = this.users.indexOf(user);
    if (index > -1) {
      this.users.splice(index, 1);
      await UserSummary.saveUsersStatic(this.storage, this.users);
    }
  }
}
