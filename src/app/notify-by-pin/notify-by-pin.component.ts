import { PostService } from './../services/post.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PinModel} from './Pin-model'

@Component({
  selector: 'app-notify-by-pin',
  templateUrl: './notify-by-pin.component.html',
  styleUrls: ['./notify-by-pin.component.css']
})
export class NotifyByPinComponent implements OnInit {

  PinForm: FormGroup;
  turn: Boolean;

  constructor(
    private fb: FormBuilder,
    private toast: ToastrService,
    private service:PostService,
  ) { }

  ngOnInit(): void {
    this.turn = true;
    this.PinForm = this.fb.group({
      pin: ['',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6),
        Validators.pattern('^[0-9]*$'),
        ]],
      email: ['',[
        Validators.required,
        Validators.email,
      ]],
      age: ['',[
        Validators.required,
        Validators.maxLength(2),
        Validators.minLength(1),
        Validators.pattern('^[0-9]*$'),
      ]],
    })
}
  get pin(){
    return this.PinForm.get('pin');
  }

  get age(){
    return this.PinForm.get('age');
  }
  get email(){
    return this.PinForm.get('email');
  }

  submit(){
    let pinmodel = new PinModel();
    pinmodel.pin = this.pin.value;
    pinmodel.age = this.age.value;
    pinmodel.email = this.email.value;
   
    
    console.log(pinmodel)
    // console.log(JSON.stringify(pinmodel));
    this.PinForm.reset();
      this.service.postOrder(pinmodel).subscribe(res=>{
        // console.log(res);
        // this.toast.success("Pin Added Successfully")
        console.log("Pin Added successfully");
        this.turn = false;
 
      })
    }

  cancel() {
    
  }

  
}
