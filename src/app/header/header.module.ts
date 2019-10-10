import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { HeaderComponent } from './header.component';
import { AvatarModule } from 'ngx-avatar';

@NgModule({
    declarations: [
        HeaderComponent
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
        AvatarModule
    ],
    providers: [],
    bootstrap: [],
    exports: [HeaderComponent]
})
export class HeaderModule { }
