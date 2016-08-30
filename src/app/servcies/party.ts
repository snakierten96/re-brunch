import { Injectable } from '@angular/core';
const localstorage = require('store');

@Injectable()
export class PartyService {
  
  getNextPartyId(): Promise<number> {
    return new Promise((resolve, reject) => {
      let partyId = localstorage.get('partyId') as number;
      partyId = typeof partyId === 'undefined' ? 1: ++partyId;
      localstorage.set('partyId', partyId);
      resolve(partyId);
    });
  }
}