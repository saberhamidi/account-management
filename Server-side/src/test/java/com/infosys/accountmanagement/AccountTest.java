package com.infosys.accountmanagement;

import com.infosys.accountmanagement.model.Account;
import com.infosys.accountmanagement.rest.AccountEndPoint;
import com.infosys.accountmanagement.service.IService;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

public class AccountTest {

    @InjectMocks
    private AccountEndPoint accountEndPoint;

    @Mock
    private IService accountService;

    @Before
    public void init(){
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void getAccountTest(){
        Account testAccount = new Account();
        testAccount.setId(1l);
        testAccount.setAccountNumber("33321");
        //when(accountRepository.getOne(1l)).thenReturn(testAccount);
        when(accountService.getAccount(1l)).thenReturn(testAccount);

        Account testResultAccount = accountEndPoint.getAccount(1l);

        //verify(accountRepository).getOne(1l);
        verify(accountService).getAccount(1l);

        assertThat(testResultAccount.getId(), is(1l));
        assertThat(testResultAccount.getAccountNumber(), is("33321"));
    }

    @Test
    public void createAccountTest(){
        Account testAccount = new Account();
        testAccount.setId(1l);
        testAccount.setAccountNumber("33321");
        when(accountService.createAccount(testAccount)).thenReturn(testAccount);

        Account testResultAccount = accountEndPoint.createAccount(testAccount);

        verify(accountService).createAccount(testAccount);

        assertThat(testResultAccount.getId(), is(1l));
        assertThat(testResultAccount.getAccountNumber(), is("33321"));
    }

    @Test
    public void updateAccountTest(){
        Account testAccount = new Account();
        testAccount.setId(1l);
        testAccount.setAccountNumber("33321");
        when(accountService.updateAccount(testAccount)).thenReturn(testAccount);

        Account testResultAccount = accountEndPoint.updateAccount(testAccount);

        verify(accountService).updateAccount(testAccount);

        assertThat(testResultAccount.getId(), is(1l));
        assertThat(testResultAccount.getAccountNumber(), is("33321"));
    }

    @Test
    public void deleteAccountTest(){
        Account testAccount = new Account();
        testAccount.setId(1l);
        testAccount.setAccountNumber("33321");

        when(accountService.deleteAccount(1l)).thenReturn(testAccount);

        Account testResultAccount = accountEndPoint.deleteAccount(1l);

        verify(accountService).deleteAccount(1l);

        assertThat(testResultAccount.getId(), is(1l));
        assertThat(testResultAccount.getAccountNumber(), is("33321"));
    }

    @Test
    public void getAccountsTest(){
        List<Account> accounts = new ArrayList<>();
        Account testAccount = new Account();
        testAccount.setId(1l);
        testAccount.setAccountNumber("33321");
        accounts.add(testAccount);
        when(accountService.getAccounts()).thenReturn(accounts);

        accounts = accountEndPoint.getAccounts();

        verify(accountService).getAccounts();

        assertThat(accounts.size(), is(1));
        assertThat(accounts.get(0).getAccountNumber(), is("33321"));
    }
}