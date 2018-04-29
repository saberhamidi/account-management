package com.infosys.accountmanagement.rest;

import com.infosys.accountmanagement.model.Account;
import com.infosys.accountmanagement.service.IService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/accounts", produces = {"application/json"} , consumes = {"application/json"})
public class AccountEndPoint {

    @Autowired
    private IService acccountService;

    @GetMapping
    @RequestMapping("/{id}")
    public Account getAccount(@PathVariable Long id){
        return acccountService.getAccount(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public Account createAccount(@RequestBody Account account){
        return acccountService.createAccount(account);
    }

    @PutMapping
    public Account updateAccount(@RequestBody Account account){
        return acccountService.updateAccount(account);
    }
}
