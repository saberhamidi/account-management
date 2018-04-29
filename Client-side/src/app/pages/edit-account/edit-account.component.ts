import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent implements OnInit {

	name:any;
	account:any;
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  	this.getAccount(this.route.snapshot.params['id']);
  }

  getAccount(id) {
    this.http.get('/api/accounts/'+id, {headers: {"Content-Type":"application/json"}}).subscribe(data => {
      this.account = data;
    });
  }

  updateAccount(){
    this.http.put('/api/accounts/', this.account, {headers: {"Content-Type":"application/json"}}).subscribe(data => {
      this.flashMessage.show('Account updated!', { cssClass: 'alert-success', timeout: 2000 });
  		this.router.navigate(['/account-details', this.account.id]);
    });
  }

}
