import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

type NewType = Observable<HttpEvent<any>>;

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService : AuthService) {}

    // Intercept the requests, clone thems to add the new Headers with the token, and return it to next.handle();
    intercept(req: HttpRequest<any>, next: HttpHandler): NewType {

        const headers = new HttpHeaders()
        .append('Authorization', `Bearer ${this.authService.getToken()}`);

        const modifiedReq = req.clone({ headers });

        return next.handle(modifiedReq);
    }
}