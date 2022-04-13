import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit {
  countries=["india","canada","us","uk","germany"];

  registrationModel={
    firstname:'san',
    lastname:'jay',
    gender:'male',
    country:'india'
  }
  constructor() { }
  
  ngOnInit(): void {
  }

}
