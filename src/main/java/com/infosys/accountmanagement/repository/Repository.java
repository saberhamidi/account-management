package com.infosys.accountmanagement.repository;

import com.infosys.accountmanagement.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Repository extends JpaRepository<Account, Long> {

}