import { Component,OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { HttpserviceService } from '../httpservice.service';
@Component({
  selector: 'app-bach',
  templateUrl: './bach.component.html',
  styleUrls: ['./bach.component.css']
})
export class BachComponent {
  user={
    object:'',
    comname:'',
    image:''
  }
  response:any;
   endp:string="compaginreg"
  constructor(private httpservice:HttpserviceService){}
  ngsubmit(){
    this.httpservice.postFun(this.endp,this.user).subscribe(res=>{
      this.response=res
      console.log(this.response)
    },
    err=>{
      console.log('erro',err)
    }
  )
  }
  
  // private url='http://localhost:8080/compaginreg'
  // constructor(private http:HttpClient){}
  // ngsubmit(){
  //   this.http.post(this.url,this.user).subscribe(data=>{
  //     console.log(data)
  //   })


  }


