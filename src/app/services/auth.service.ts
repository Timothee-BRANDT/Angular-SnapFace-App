import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthService { 
    private token = 'MyToken';

    getToken(): string {
        return this.token;
    }
}