import { Component, OnInit, Input } from '@angular/core';
import { from } from 'rxjs';
import { error } from 'protractor';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
  providers:[ApiService]
})
export class SettingComponent implements OnInit {
  planes = [{cdsc:'pp',ccod_cue:'cc'},{cdsc:'ppp',ccod_cue:'cc'}];

  selectedplan;

  public message ="";

  constructor(private api:ApiService) {
    this.getmyplan();
    this.selectedplan = {id:-1,ccod_cue:'',cdsc:'',nnivel:'',neducat:''}

   }


   getmyplan=()=>{
     console.log(this.message);
   }


/*
   getmyplan=()=>{
    this.api.getalleplan().subscribe(
      data=>{
        this.planes = data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    );
  }
*/


  ngOnInit() {
  }

}
