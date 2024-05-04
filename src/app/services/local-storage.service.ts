import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() { }

  setItem(key: string, value: any) {
    let json = JSON.stringify(value);
    localStorage.setItem(key, json);
  }

  getItem(key: string) {
    let json: string = localStorage.getItem(key) || '';
    let value = '';
    if (json) {
      value = JSON.parse(json);
    }
    return value;
  }

  isSaved(key: string) {
    if (localStorage.getItem(key)) {
      return true;
    }
    return false;
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

  removeAll() {
    localStorage.clear();
  }
}
