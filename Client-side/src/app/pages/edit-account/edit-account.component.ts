import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent implements OnInit {

	name:any;
	account:any;
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

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
  		console.log(data);
    });
  }

}
