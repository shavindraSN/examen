import { Component, ViewChild } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import { SemanticPopupComponent } from "ng-semantic";
import "rxjs/add/operator/map";
import { module } from "@angular/upgrade/src/angular_js";

@Component({
    selector: "app",
    templateUrl: 'client/app.component.html'
})
export class AppComponent {
    appName: string = "Examen";

    user: any = {
        password: "angualr2express",
        username: "john"
    };

    isLogged: boolean;
    response: Response & { hashed?: string, salt?: string };
    @ViewChild("myPopup") myPopup: SemanticPopupComponent;

    constructor(private http: Http) {
        this.isLogged = !!localStorage.getItem("id_token");
    }

    /**
     * Signup for the system. This function is for generate random username and password
     */
    signup() {
        this.http.post("/login/signup", JSON.stringify({ password: this.user.password, username: this.user.username }), new RequestOptions({
            headers: new Headers({"Content-Type": "application/json"})
        }))
            .map((res: any) => res.json())
            .subscribe(
                (res: Response) => {
                    this.response = res;
                },
                (error: Error) => { console.log(error); }
            );
    }

    /**
     * Used to login into the system for valid username and password.
     * This function call login route of the server and 
     */
    login() {
        this.http.post("/login", JSON.stringify({ password: this.user.password }), new RequestOptions({
            headers: new Headers({"Content-Type": "application/json"})
        }))
            .map((res: Response) => res.json())
            .subscribe(
                (res: Response & { jwt: string }) => {
                    localStorage.setItem("id_token", res.jwt);
                    this.isLogged = true;
                    this.myPopup.hide();
                },
                (error: Error) => { console.log(error); }
            );
    }

/**
 * Used to logout from the system. This will remove the token from the 
 * localStorage. 
 */
    logout(): void {
        localStorage.removeItem("id_token");
        this.isLogged = false;
    }
}