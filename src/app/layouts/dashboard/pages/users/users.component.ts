import { Component } from '@angular/core';
import { IUser } from './models/index'; // Reemplaza 'path-to-user-interface' con la ruta correcta
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'career', 'courses', 'email','createdAt'];
  
  

  users: IUser[] = [
    {
      id: 1,
      firstName: 'Mauricio',
      lastName: 'Vargas',
      career: 'Informática',
      courses: 'Bases de datos, Programación básica',
      email: 'mavart08@gmail.com',
      role: 'ADMIN',
      createdAt: new Date,
    },
    {
      id: 2,
      firstName: 'Juan',
      lastName: 'Fass',
      career: 'Administración',
      courses: 'Ciencias politicas, Matemáticas',
      email: 'ma@gmail.com',
      role: 'USER',
      createdAt: new Date,
    },
    {
      id: 3,
      firstName: 'Paco',
      lastName: 'Cruz',
      career: 'Informática',
      courses: 'Redes, Programación básica',
      email: 'facil@gmail.com',
      role: 'USER',
      createdAt: new Date,
    },
    {
      id: 4,
      firstName: 'Paz',
      lastName: 'Laferte',
      career: 'Diseño',
      courses: 'Composición, Programación Web',
      email: 'tegucipalpa@gmail.com',
      role: 'USER',   
      createdAt: new Date,
    },
  ];
  
  constructor (private matDialog: MatDialog){
    
  }
  openDialog(): void {
    this.matDialog.open(UserDialogComponent).afterClosed().subscribe({
      next: (result) => {
        console.log(result);
        this.users=[...this.users, result];
      },
    });
  }

}
