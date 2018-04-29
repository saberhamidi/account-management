package com.infosys.accountmanagement.service;

import com.infosys.accountmanagement.model.Account;
import com.infosys.accountmanagement.repository.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class AccountService implements IService {

    @Autowired
    private Repository accountRepository;

    @Override
    public Account getAccount(Long id) {
        return  accountRepository.getOne(id);

    }
}
