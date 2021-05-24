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
  
  constructor(
    private fb: FormBuilder,
    private toast: ToastrService,
    private service:PostService,
  ) { }

ngOnInit(): void {
    this.PinForm = this.fb.group({
      pin: ['',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6),
        ]],
      email: ['',[
        Validators.required,
      ]],
      age: ['',[
        Validators.required,
        Validators.maxLength(3),
        // Validators.pattern('^([a-zA-Z]){1}([0-9]){2}?$'),
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
    pinmodel.age = this.pin.value;
    pinmodel.pin = this.age.value;
    pinmodel.email = this.email.value;
   
    
    console.log(pinmodel)
    this.toast.success("Tailoring Added Successfully");
    this.PinForm.reset();
      this.service.postOrder(pinmodel).subscribe(res=>{
        //save data
        console.log(res);
        this.toast.success("Pin Added Successfully")
 
      })
    }

  cancel() {
    
  }

  
}
