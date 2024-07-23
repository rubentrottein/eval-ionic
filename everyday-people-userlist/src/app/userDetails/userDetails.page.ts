import { Component } from '@angular/core';
import { User } from '../models/User';
import { Storage } from '@ionic/storage-angular';
import { UserSummary } from '../userSummary/userSummary.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'userDetails.page.html',
  styleUrls: ['userDetails.page.scss']
})
export class UserDetails {
  constructor(private storage: Storage) {}
  users : User[] = [];
  
  async ngOnInit(): Promise<void> {
    await this.storage.create();
    const storedUsers = await this.storage.get('users');
    console.info(storedUsers);
    if (storedUsers) {
      this.users = storedUsers;
      console.info(this.users);
    } else {
    }
  }
  fetchUser(){
    console.info(this.users);
    let url = new URL(window.location.href);
    let id = Number(url.searchParams.get("id"));
    return this.users[id]
  }

  /*user : User = {
    id : 999,
    name : "erreur",
    lastName : "erreur",
    tel : "erreur",
    email : "erreur",
    image : 999,
    online : false
  };*/
  user = this.fetchUser();
  name = this.user.name;
  lastName = this.user.lastName;
  tel = this.user.tel;
  email = this.user.email;
  image = this.user.image;
  online = this.user.online;

  saveUser(user: User): void {
    this.users.push(user);
  }

  async saveUsers(): Promise<void> {
    await this.storage['set']('users', this.users);
  }

  async deleteUser(user: User) {
    const index = this.users.indexOf(user);
    if (index > -1) {
      this.users.splice(index, 1);
      await this.saveUsers();
    }
  }
}
