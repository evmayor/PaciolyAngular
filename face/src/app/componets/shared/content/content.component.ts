import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers:[ApiService]
})



export class ContentComponent implements OnInit {
  planes = [{cdsc:'pp',ccod_cue:'cc'},{cdsc:'ppp',ccod_cue:'cc'}];
  libroD = [{cdsc:'pp',ccod_cue:'cc'},{cdsc:'ppp',ccod_cue:'cc'}];
  selectedplan;

  libroDiarioDebe;
  libroDiariobHaber;
  cuentaDebe = "";
  desDeba = "";

  cuentaHaber ="";
  desHaber = "";

  constructor(private api:ApiService) {
    //this.getAllplanes();
    this.selectedplan = {id:-1,ccod_cue:'',cdsc:'',nnivel:'',neducat:''}
    this.libroDiarioDebe = {ccod_cue:'',ndebe: null ,nhaber: 0 ,cglosa:'',ccod_ori:'',nasiento:0}
    this.libroDiariobHaber = {ccod_cue:'',ndebe: 0 ,nhaber: 0 ,cglosa:'',ccod_ori:'',nasiento:0}
  }


  

  ngOnInit() {
  }

  planClick=(dato) => {
    
    this.api.getOneplan(dato).subscribe(
      data=>{
        console.log(data);
        this.selectedplan = data;
      },
      error=>{
        console.log(error);
      }
    );
  }

  hola=(dt)=>{
    var table = document.getElementById("serie") as HTMLTableElement;
    var titulo = document.getElementById("titulo");
    //table.rows[0].cells[2].innerHTML = dt;
    titulo.innerHTML = dt;
  }

  //glosa = "";

  createLibroDiario=()=>{
    

    this.libroDiarioDebe.ccod_cue = this.cuentaDebe;
    this.libroDiariobHaber.ccod_cue = this.cuentaHaber;
    this.libroDiariobHaber.ndebe = 0;
    this.libroDiariobHaber.nhaber = this.libroDiarioDebe.ndebe;
    
    this.libroDiariobHaber.cglosa = this.libroDiarioDebe.cglosa;

    this.api.createLibroDiario(this.libroDiarioDebe).subscribe(
      data=>{
        //this.glosa = data.cglosa;    
        this.libroDiarioDebe.push(data);
      },
      error=>{
        console.log(error);
      }
    );

    
    this.api.createLibroDiario(this.libroDiariobHaber).subscribe(
      data=>{
        
        this.libroDiariobHaber.push(data);
      },
      error=>{
        console.log(error);
      }
    );
  }


  clickeado=(pla)=>{
    let ind = pla.indexOf(" ");
    let tm = pla.length;
    let cuenta = pla.substring(0,ind);
    let plan = pla.substring(ind,tm).trim();
    //console.log(plan);

    var tableserie = document.getElementById("serie") as HTMLTableElement;
    //var table = (<HTMLInputElement>document.getElementById("serie"));
    var detalle = tableserie.rows[0].cells[2].innerHTML;
    var titulo = document.getElementById("titulo").innerHTML;

    var tableVerdatos = document.getElementById("verdatos") as HTMLTableElement;

    if (titulo ==="Debe"){
      //tableVerdatos.rows[2].cells[0].innerHTML = cuenta;
      this.cuentaDebe = cuenta;
      this.desDeba = plan;
    }
    else{
      this.cuentaHaber = cuenta;
      this.desHaber = plan;
    }
  }





}
