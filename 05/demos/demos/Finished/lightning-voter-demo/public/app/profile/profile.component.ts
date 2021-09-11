import { Component, Inject } from "@angular/core";
import { Toastr, TOASTR_TOKEN } from "../toastr/toastr.service";

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  constructor(
    @Inject('$location') private $location,
    @Inject('currentIdentity') private currentIdentity,
    @Inject(TOASTR_TOKEN) private toastr: Toastr
    ) {
  }
      
  save(newProfile) {
    this.currentIdentity.updateUser(newProfile);
    toastr.success('Profile Saved!');
  }
  
  cancel() {
    this.$location.path('/home');
  }
}