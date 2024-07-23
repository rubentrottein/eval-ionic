import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { User } from '../models/User';

@Component({
  selector: 'app-tab1',
  templateUrl: 'userSummary.page.html',
  styleUrls: ['userSummary.page.scss'],
})

export class UserSummary {

  /*static users: User[] = [
    { id: 0, name: "Lydia", lastName: "Fazier", tel: "0618952851", email: "Lydia.Fazier@userbase.io", image: 1, online: true },
    { id: 1, name: "Aaron", lastName: "Doubie", tel: "0618952851", email: "Aaron.Doubie@userbase.io", image: 2, online: false },
    { id: 2, name: "Sylphie", lastName: "Zadeh", tel: "0618952851", email: "Sylphie.Zadeh@userbase.io", image: 5, online: true },
    { id: 3, name: "Pravesh", lastName: "Alalghameer", tel: "0618952851", email: "Pravesh.Alalghameer@userbase.io", image: 7, online: true }
  ];*/
  constructor(private storage: Storage) {}
  
  users: User[] = []

  public getUsers(){
    return this.users;
  }

  async ngOnInit(): Promise<void> {
    await this.storage.create();
    const storedUsers = await this.storage.get('users');
    if (storedUsers) {
      this.users = storedUsers;
    }
  }

  async saveUsers(): Promise<void> {
    await this.storage['set']('users', this.users);
  }
  
  
  date = Date.now();

  newUser(): void {
    console.log("New User Creation");

    const newName = prompt("Nom de l'utilisateur", 'pas de prénom');
    const newLastName = prompt("Nom de l'utilisateur", 'pas de nom');
    const newTel = prompt("Numéro de téléphone : ");
    const newImage = prompt("N° d'Avatar");

    if (newName && newLastName && newTel && newImage) {
      const newUser: User = {
        id: this.users.length,
        name: newName,
        lastName: newLastName,
        tel: newTel,
        email: `${newLastName}.${newName}@userbase.io`,
        image: Number(newImage),
        online: true
      };
      this.saveUser(newUser);
    } else {
      alert("Error: Missing user information.");
    }
  }

  saveUser(user: User): void {
    this.users.push(user);
    this.saveUsers();
  }
}