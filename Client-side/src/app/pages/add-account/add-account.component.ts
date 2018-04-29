import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

	account={firstName:"",lastName:"",accountNumber:""};
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  addAccount(){
    this.http.post('/api/accounts/', this.account, {headers: {"Content-Type":"application/json"}}).subscribe(data => {
  		
  		this.router.navigate(['/account-details', data["id"]]);
    });
  }

}
