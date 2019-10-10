import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatBadgeModule } from '@angular/material';
import { AvatarModule } from 'ngx-avatar';
import { HeaderModule } from '../header/header.module';
import { FooterComponent } from '../footer/footer.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [
        DashboardComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        MatBadgeModule,
        AvatarModule,
        HeaderModule,
        MatCardModule
    ],
    providers: [],
    bootstrap: [],
    exports: [DashboardComponent]
})
export class DashboardModule { }
