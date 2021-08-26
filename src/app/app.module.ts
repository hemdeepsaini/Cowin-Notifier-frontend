import { PostService } from './services/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotifyByPinComponent } from './notify-by-pin/notify-by-pin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// import {MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    NotifyByPinComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(
       {  
        positionClass:'top-right',  
        closeButton: true,  
      }  
    ),
    HttpClientModule,
  ],
  providers: [PostService,],
  bootstrap: [AppComponent]
})
export class AppModule {}
