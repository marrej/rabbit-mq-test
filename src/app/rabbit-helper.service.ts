import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RabbitHelperService {

  constructor() { }

  public init(): void {
    console.log('Initialized');
  }
}
