package com.humancloud.wallet.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.humancloud.wallet.entity.Wallet;

@Repository("walletRepository")
public interface WalletRepository extends JpaRepository<Wallet, Long> {
		
//	Wallet findByUserIdAndTotalAmount(Long userId, Double totalAmount);
	List<Wallet> findByUserId(Long userId);
	
	

	}