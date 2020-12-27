package com.humancloud.wallet.service;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;

import com.humancloud.wallet.entity.Wallet;
import com.humancloud.wallet.util.BaseResponse;

@Service
public interface WalletService {

	BaseResponse<Wallet> addFund(HttpServletRequest request, Wallet wallet);

	BaseResponse<Wallet> sendFund(HttpServletRequest request, Wallet wallet);

	BaseResponse<Wallet> addFundInReciever(HttpServletRequest request, Wallet wallet);

	BaseResponse<Wallet> getFund(HttpServletRequest request, Long userId);

}
