package com.infosys.accountmanagement.service;

import com.infosys.accountmanagement.model.Account;
import com.infosys.accountmanagement.repository.Repository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.transaction.Transactional;
import java.util.List;

@Component
@Transactional(Transactional.TxType.SUPPORTS)
public class AccountService implements IService {

    @Autowired
    private Repository accountRepository;

    @Override
    public Account getAccount(Long id) {
        return  accountRepository.getOne(id);

    }

    @Override
    @Transactional(Transactional.TxType.REQUIRED)
    public Account createAccount(Account account) {
        return accountRepository.save(account);
    }

    @Override
    @Transactional(Transactional.TxType.REQUIRED)
    public Account updateAccount(Account account) {
        Account existingAccount = accountRepository.getOne(account.getId());
        BeanUtils.copyProperties(account, existingAccount);
        return accountRepository.save(existingAccount);
    }

    @Override
    @Transactional(Transactional.TxType.REQUIRED)
    public Account deleteAccount(Long id) {
        Account accountToBeDeleted = accountRepository.getOne(id);
        accountRepository.delete(accountToBeDeleted);
        return accountToBeDeleted;
    }

    @Override
    public List<Account> getAccounts() {
        return accountRepository.findAll();
    }
}
