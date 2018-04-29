import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  accounts: any;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

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

  view(id){
    this.router.navigate(['/account-details', id]);
  }
}
