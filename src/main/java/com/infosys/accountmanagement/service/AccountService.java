package com.infosys.accountmanagement.service;

import com.infosys.accountmanagement.model.Account;
import com.infosys.accountmanagement.repository.Repository;
import org.springframework.beans.BeanUtils;
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

    @Override
    public Account createAccount(Account account) {
        return accountRepository.save(account);
    }

    @Override
    public Account updateAccount(Account account) {
        Account existingAccount = accountRepository.getOne(account.getId());
        BeanUtils.copyProperties(account, existingAccount);
        return accountRepository.save(existingAccount);
    }
}
