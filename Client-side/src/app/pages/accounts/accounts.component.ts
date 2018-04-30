import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  accounts: any;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  	this.http.get('/api/accounts', {headers: {"Content-Type":"application/json"}}).subscribe(data => {
      this.accounts = data;
    });
  }

  deleteAccount(id:Number){
  	this.http.delete('/api/accounts/'+id, {headers: {"Content-Type":"application/json"}}).subscribe(data => {
     	 this.flashMessage.show('Account deleted!', { cssClass: 'alert-success', timeout: 2000 });
       this.ngOnInit();
    });
  }

  view(id){
    this.router.navigate(['/account-details', id]);
  }
}
