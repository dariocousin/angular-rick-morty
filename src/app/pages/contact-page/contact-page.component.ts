import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  infoContactPage: FormGroup = null;

  emailSended: boolean = false;

  constructor(private contactPageBuilder: FormBuilder) { 
    this.infoContactPage = this.contactPageBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      areYouHuman: [false, Validators.required],
      message: ['', [Validators.required, Validators.maxLength(255), Validators.minLength(15)]]
    })
  }

  ngOnInit(): void {
  }

  sendEmail(){
    this.emailSended = true;
    this.infoContactPage.value;
  }
}
