import {Component, OnInit} from '@angular/core';
import { ImagesApiService, ImageType } from '../../shared/api/images-api.service';
import { AuthService } from '../../shared/auth/auth.service';
import { ProfilesApiService } from '../../shared/api/profiles-api.service';
import { NavigationService } from '../../shared/layout/components/navigation/navigation.service';
import { Router } from '@angular/router';
import { UsersApiService } from '../../shared/api/users-api.service';
import { DialogService } from '../../shared/dialog/dialog.service';
import { ChangeNameDialogComponent } from '../../shared/dialog/change-name-dialog/change-name-dialog.component';
import { ChangePasswordDialogComponent } from '../../shared/dialog';

@Component({
  selector: 'e2-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  selectedStatus = 0;
  selectedTab = -1;
  profile: any = {};
  photo;
  photoUrl;
  page = 1;
  email = '';
  message;

  constructor(private imagesApiService: ImagesApiService,
              private authService: AuthService,
              private profilesApiService: ProfilesApiService,
              private navigationService: NavigationService,
              private router: Router,
              private userService: UsersApiService,
              private dialogService: DialogService) {
  }

  ngOnInit() {
    this.email = this.authService.getUser().email;
    this.profile = this.authService.getUser().profile || {};
    if (this.profile) {
      this.selectedStatus = this.profile.status;
      if (this.profile.image) {
        this.photoUrl = this.profile.image.url;
      }
      if (this.selectedStatus === 1 || this.selectedStatus === 2) {
        this.selectedTab = 0;
      } else if (this.selectedStatus === 3 || this.selectedStatus === 4) {
        this.selectedTab = 1;
      } else {
        this.selectedTab = -1;
      }
    }
  }

  selectStatus(index) {
    this.selectedStatus = index;
  }

  selectTab(tab) {
    this.selectedTab = tab;
  }

  async photoChanged(event) {
    this.photo = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.photo);
    reader.onload = (_event) => {
      this.photoUrl = reader.result;
    }
    event.target.value = '';
    if (this.profile.image) {
      await this.imagesApiService.delete(this.profile.image.id).toPromise();
    }
    await this.imagesApiService.upload(this.profile.id, this.photo, ImageType.User).toPromise();
    const user = await this.userService.getCurrentUser().toPromise();
    this.authService.setUser(user);
  }

  async removePhoto() {
    this.photoUrl = '';
    if (this.profile.image) {
      await this.imagesApiService.delete(this.profile.image.id).toPromise();
    }
  }

  async goRelationship() {
    this.profile.status = this.selectedStatus;
    this.profile.current = this.authService.getUser().current;
    this.profile.userId = this.authService.getUser().id;
    this.navigationService.loading.next(true);
    if (!this.profile.id) {
      this.profile = await this.profilesApiService.post(this.profile).toPromise();
    } else {
      this.profile = await this.profilesApiService.put(this.profile).toPromise();
    }
    const user = await this.userService.getCurrentUser().toPromise();
    this.authService.setUser(user);

    this.navigationService.loading.next(false);
    this.router.navigate(['/relationships']);
  }

  changeName() {
    this.dialogService.open(ChangeNameDialogComponent).afterClosed()
      .subscribe(result => {
        if (result === 'success') {
          this.profilesApiService.get(this.authService.getUser().id).toPromise();
        }
      });
  }

  changePassword() {
    this.dialogService.open(ChangePasswordDialogComponent).afterClosed()
      .subscribe(result => {
        if (result === 'success') {
          this.message = 'Password has been changed successfully!';
        }
      });
  }
}
