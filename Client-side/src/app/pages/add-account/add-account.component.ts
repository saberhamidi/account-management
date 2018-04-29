import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  account={firstName:"",lastName:"",accountNumber:""};
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  	
  }

  addAccount(){
    this.http.post('/api/accounts/', this.account, {headers: {"Content-Type":"application/json"}}).subscribe(data => {
  		this.flashMessage.show('Account created!', { cssClass: 'alert-success', timeout: 2000 });
  		this.router.navigate(['/account-details', data["id"]]);
    });
  }

}
