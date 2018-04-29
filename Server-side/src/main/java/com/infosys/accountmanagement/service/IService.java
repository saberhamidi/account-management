package com.infosys.accountmanagement.service;

import com.infosys.accountmanagement.model.Account;

import java.util.List;

public interface IService {

    Account getAccount(Long id);

    Account createAccount(Account account);

    Account updateAccount(Account account);

    Account deleteAccount(Long id);

    List<Account> getAccounts();
}
