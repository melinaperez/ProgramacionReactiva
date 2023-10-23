import { Injectable } from '@angular/core';
import { User } from './data.models';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data: User[] = [
    { id: 1, nombre: 'Melina', apellido: 'Perez', edad: 31 },
    { id: 1, nombre: 'Gonzalo', apellido: 'Piskorz', edad: 34 },
    { id: 1, nombre: 'Noelia', apellido: 'Perez', edad: 27 },
    { id: 1, nombre: 'Silvia', apellido: 'Perez', edad: 57 },
  ];

  constructor() {}

  getUsersPromise(): Promise<User[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.data);
      }, 2000);
    });
  }

  getUsersObservable(): Observable<User[]> {
    //return of(this.data).pipe(delay(2000));
    return of(this.data);
  }
}
