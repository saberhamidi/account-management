package com.infosys.accountmanagement.rest;

import com.infosys.accountmanagement.model.Account;
import com.infosys.accountmanagement.service.IService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
