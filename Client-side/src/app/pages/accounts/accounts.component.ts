import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  accounts: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  	this.http.get('/api/accounts', {headers: {"Content-Type":"application/json"}}).subscribe(data => {
      this.accounts = data;
    });
  }

  deleteAccount(id:Number){
  	this.http.delete('/api/accounts/'+id, {headers: {"Content-Type":"application/json"}}).subscribe(data => {
     	this.ngOnInit();
    });
  }
}
