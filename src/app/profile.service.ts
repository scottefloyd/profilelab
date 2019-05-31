import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class ProfileService {

  userProfile: any = {
    name: "Jerry",
    contact: "jerry@jerry.com",
    bio: "Jerry is an awesome guy!"
  };

  constructor(private router: Router) {}

  getUserProfile() {
    return this.userProfile;
  }

  setUserProfile(newinfo: any) {

    this.userProfile = newinfo;
    this.router.navigate(['profile']);


  }

}
