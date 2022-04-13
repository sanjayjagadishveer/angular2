import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {
  cities=['bangalore','chennai','mumbai','ahmedabad'];
  registrationForm:FormGroup;
  submitted:boolean=false;
    constructor(private fb:FormBuilder) { 
      this.registrationForm=this.fb.group({
        name:['',Validators.required],
        phno:[
          '',
          [Validators.required,
          Validators.min(1000000000),
          Validators.max(9999999999)
          ]
        ],
        email:[
          '',
          Validators.required
        ],
        dob:[
          '',
          Validators.required
        ],
        address:[
          '',Validators.required
        ],
        city:[
          '',Validators.required
        ],
        pincode:[
          '',Validators.required
        ],
        pwd:['',Validators.required],
        confirmpwd:['',Validators.required]
      },
     
      );
    }
  
    ngOnInit(): void {
    }
  
  }
  