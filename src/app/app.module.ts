import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BachComponent } from './bach/bach.component';
import { IclandComponent } from './icland/icland.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http'
import { HttpserviceService } from './httpservice.service';
import { MenuComponent } from './shared/menu/menu.component';
import { AuthComponent } from './shared/auth/auth.component';
import { SocialiconComponent } from './shared/socialicon/socialicon.component';
import { PhoneComponent } from './shared/phone/phone.component';
import { EmailComponent } from './shared/email/email.component';
import { ButtonComponent } from './shared/button/button.component';
import { TestComponent } from './test/test.component';
import { RatingComponent } from './shared/rating/rating.component';
@NgModule({
  declarations: [
    AppComponent,
    BachComponent,
    IclandComponent,
    MenuComponent,
    AuthComponent,
    SocialiconComponent,
    PhoneComponent,
    EmailComponent,
    ButtonComponent,
    TestComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
