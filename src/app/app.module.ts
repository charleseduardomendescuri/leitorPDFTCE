import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { BuscarPDFComponent } from './buscar-pdf/buscar-pdf.component';
import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
//import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {NgxPrintModule} from 'ngx-print';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscarPDFComponent,
    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PdfViewerModule,
    MatListModule,
    MatSliderModule,
    NgxPrintModule,
    FormsModule,
    OAuthModule.forRoot(),
   
    
  ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }