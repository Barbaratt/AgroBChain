import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { IUser } from 'src/app/interfaces/user-login.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userAuthentificated = false;
  private currentUserSubject: BehaviorSubject<IUser>;
  private userId: string;

  constructor(private router: Router) {}

  public get currentUserValue(): IUser {
    return this.currentUserSubject.value;
  }

  public login(user: IUser): void {
    // Tenho que criar um serviço, um falso backend para essa bosta
    // ! if(user.email === this.user && user.password === this.password)
    if (user.email === 'pat@uol.com.br' && user.password === '12345678') {
      this.userAuthentificated = true;
      localStorage.setItem(
        'isUserLoggedIn',
        this.userAuthentificated ? 'true' : 'false'
      );

      user.userId = '001';

      this.currentUserSubject = new BehaviorSubject<IUser>(user); // Atualize o currentUserSubject

      // ! Ver como alterar para cada id
      this.router.navigate(['/dashboard']);
    } else {
      alert('Algo deu errado !');
      this.userAuthentificated = false;
    }
  }

  public logout(): void {
    this.userAuthentificated = false;
    localStorage.removeItem('isUserLoggedIn');
  }

  public userAuth(): boolean {
    return this.userAuthentificated;
  }

  public setUserId(userId: string): void {
    this.userId = userId;
  }

  public getUserId(): string {
    return this.userId;
  }
}
