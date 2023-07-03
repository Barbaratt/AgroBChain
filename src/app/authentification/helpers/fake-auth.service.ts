import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

 /**
 * todo = Apenas para simular durante o cadastro do fazendeiro
 */
@Injectable({
  providedIn: 'root'
})
export class FakeAuthService {
  private users: any[] = []; // Array para armazenar os usuários cadastrados

  constructor() { }

  register(user: any): Observable<any> {
    // Simula uma chamada HTTP para registrar um novo usuário
    // Você pode adicionar lógica de validação e verificação de duplicatas aqui
    this.users.push(user);
    return of({ success: true }).pipe(delay(1000));
  }

  login(credentials: any): Observable<any> {
    // Simula uma chamada HTTP para autenticar um usuário
    // Você pode adicionar lógica de verificação de credenciais aqui
    const user = this.users.find(u => u.email === credentials.email && u.password === credentials.password);
    if (user) {
      return of({ success: true }).pipe(delay(1000));
    } else {
      return of({ success: false }).pipe(delay(1000));
    }
  }
}
