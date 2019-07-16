import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { from } from 'rxjs';
import { error } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ApiService]
})
export class AppComponent {
  planes = [{cdsc:'pp'},{cdsc:'ppp'}];
  title = 'pacioly';

  selectedplan;

  constructor(private api:ApiService){
    this.getAllplanes();
    //this.selectedplan  = {id:-1, nombre:'', apellido:''}
    this.selectedplan = {id:-1,ccod_cue:'',cdsc:'',nnivel:'',neducat:''}
  }

  getAllplanes=()=>{
    this.api.getAllplan().subscribe(
      data=>{
        this.planes = data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    );
  }


}
