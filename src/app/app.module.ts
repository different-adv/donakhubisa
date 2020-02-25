import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';



import { AppComponent } from './app.component';
import { DummyComponent } from './dummy/dummy.component';
import { AnotherDummyComponent } from './another-dummy/another-dummy.component';
import { HomeBannerComponent } from './Home/home-banner/home-banner.component';
import { NavBarComponent } from './Home/nav-bar/nav-bar.component';
import { PictureBannerComponent } from './Home/picture-banner/picture-banner.component';
import { StoriesPostedComponent } from './Home/stories-posted/stories-posted.component';
import { FooterComponent } from './Home/footer/footer.component';
import { SuccessStoriesComponent } from './Home/success-stories/success-stories.component';
// import { HomeComponent } from './home/home.component';
import { SideBarComponent } from './Profile/side-bar/side-bar.component';
import { ProfileBannerComponent } from './Profile/profile-banner/profile-banner.component';
import { ProfileAboutComponent } from './Profile/profile-about/profile-about.component';
import { ProfileServicesComponent } from './Profile/profile-services/profile-services.component';
import { ProfileSkillsComponent } from './Profile/profile-skills/profile-skills.component';
import { ProfileEducationComponent } from './Profile/profile-education/profile-education.component';
import { ProfileExperienceComponent } from './Profile/profile-experience/profile-experience.component';
import { ProfileWorkComponent } from './Profile/profile-work/profile-work.component';
import { ProfileBlogComponent } from './Profile/profile-blog/profile-blog.component';
import { ProfileContactComponent } from './Profile/profile-contact/profile-contact.component';
// import { ProfileComponent } from './profile/profile.component';
import { SuccesspostComponent } from './successpost/successpost.component';

@NgModule({
  declarations: [
    AppComponent,
    DummyComponent,
    AnotherDummyComponent,
    HomeBannerComponent,
    NavBarComponent,
    PictureBannerComponent,
    StoriesPostedComponent,
    FooterComponent,
    SuccessStoriesComponent,
    // HomeComponent,
    SideBarComponent,
    ProfileBannerComponent,
    ProfileAboutComponent,
    ProfileServicesComponent,
    ProfileSkillsComponent,
    ProfileEducationComponent,
    ProfileExperienceComponent,
    ProfileWorkComponent,
    ProfileBlogComponent,
    ProfileContactComponent,
    // ProfileComponent

    routingComponents,
    SuccesspostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
