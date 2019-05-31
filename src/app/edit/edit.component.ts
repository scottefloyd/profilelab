import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  userProfile: any;

  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit() {
    this.userProfile = this.profileService.getUserProfile();
  }

   editProfile(form: any) {    

    console.log(form);
    
    this.userProfile = this.profileService.setUserProfile(form);
    

  }

}
