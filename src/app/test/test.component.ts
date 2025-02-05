import { Component } from '@angular/core';
import { FormsModule,FormControl, Validators} from '@angular/forms'
// import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  ratingvalue=4.5
  name:string='sa'
  onChange(value:any){
    this.name=value.target.value
  }
  email=new FormControl('dfjhv',[Validators.minLength(3),Validators.maxLength(7),Validators.required])
  formsubmit(){
console.log(this.email)
  }

}
