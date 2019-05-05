import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { RountingModule } from './app.router';
import { DesenhoListComponent } from './desenho/desenho-list/desenho-list.component';


@NgModule({
  declarations: [
    AppComponent,
    DesenhoListComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RountingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



/*  
    @Component({   
      construtor (private service: AlertaService){ }
      selector: 'app-root', 
      templateUrl: './app.component.html',  
       enviarMsg(); void { 
      styleUrls: [ './app.component.css' ] 
      this.service.msgAlerta();
      }) */