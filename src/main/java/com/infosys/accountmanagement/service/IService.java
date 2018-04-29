package com.infosys.accountmanagement.service;

import com.infosys.accountmanagement.model.Account;

public interface IService {

    Account getAccount(Long id);

    Account createAccount(Account account);
}
