// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Angular plugins
import { Angular2TokenService } from 'angular2-token';

// Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { TaskSearchComponent } from './navbar/task-search/task-search.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';

// Services
import { TaskService } from './tasks/shared/task.service';
import { AuthService } from './shared/auth.service';

// Guards
import { AuthGuard } from './guards/auth.guard';
import { NotAuthenticatedGuard } from './guards/not-authenticated.guard';

// Modules
import { AppRoutingModule } from './app-routing.module';

// RXJS operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

// RXJS extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// JQuery plugins
import * as $ from 'jquery';
import * as daterangepicker from 'daterangepicker';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    SignInFormComponent,
    SignUpFormComponent,
    TaskSearchComponent,
    TasksComponent,
    TaskDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [ 
    Angular2TokenService,
    AuthGuard,
    AuthService,
    NotAuthenticatedGuard,
    TaskService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }