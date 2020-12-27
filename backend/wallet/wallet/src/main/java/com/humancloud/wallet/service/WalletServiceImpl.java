package com.humancloud.wallet.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.humancloud.wallet.entity.Wallet;
import com.humancloud.wallet.modal.User;
import com.humancloud.wallet.repository.WalletRepository;
import com.humancloud.wallet.util.BaseResponse;
import com.humancloud.wallet.util.CommonConstants;

@Service("walletService")
public class WalletServiceImpl implements WalletService {

	@Autowired
	WalletRepository walletRepository;

	@Override
	public BaseResponse<Wallet> addFund(HttpServletRequest request, Wallet wallet) {

		BaseResponse<Wallet> br = new BaseResponse<>();

		Wallet walletData = new Wallet();
		try {
			walletData.setDate(new Date());
			walletData.setWalletName(wallet.getWalletName());
			walletData.setTxnStatus(CommonConstants.ONE);
			walletData.setAddFund(wallet.getAddFund());
			walletData.setPhoneNumber(wallet.getPhoneNumber());
			walletData.setUserId(wallet.getUserId());


			walletRepository.save(walletData);

			br.setStatus(CommonConstants.SUCCESS);
			br.setReasonCode("200");
			br.setReasonText(CommonConstants.FUND_ADDED_SUCCESSFULLY);
			br.setResponseObject(walletData);
		} catch (Exception e) {
			e.printStackTrace();
			br.setStatus(CommonConstants.FAIL);
			br.setReasonCode("401");
			br.setReasonText(CommonConstants.ERROR_WHILE_ADDING_FUND);
			walletData.setTxnStatus(CommonConstants.ZERO);
			walletRepository.save(walletData);
		}
		return br;
	}

	@Override
	public BaseResponse<Wallet> sendFund(HttpServletRequest request, Wallet wallet) {

		BaseResponse<Wallet> br = new BaseResponse<>();

		Wallet walletData = new Wallet();

		try {
			walletData.setDate(new Date());
			walletData.setWalletName(wallet.getWalletName());
			walletData.setTxnStatus(CommonConstants.ONE);
			walletData.setSendFund(wallet.getSendFund());
			walletData.setPhoneNumber(wallet.getPhoneNumber());
			walletData.setUserId(wallet.getUserId());

			walletRepository.save(walletData);

			br.setStatus(CommonConstants.SUCCESS);
			br.setReasonCode("200");
			br.setReasonText(CommonConstants.FUND_SENT_SUCCESSFULLY);
			br.setResponseObject(walletData);
		} catch (Exception e) {
			e.printStackTrace();
			br.setStatus(CommonConstants.FAIL);
			br.setReasonCode("401");
			br.setReasonText(CommonConstants.ERROR_WHILE_SENDING_FUND);
		}
		return br;
	}

	@Override
	public BaseResponse<Wallet> addFundInReciever(HttpServletRequest request, Wallet wallet) {

		BaseResponse<Wallet> br = new BaseResponse<>();

		Wallet walletDetailsForReciever = new Wallet();

		List<User> userList = null;
		try {

			RestTemplate restTemplate = new RestTemplate();
			String url = "http://localhost:8005/humanCloud-identity/api/profile/getProfileDetails";

			ResponseEntity<BaseResponse> baseResponse = null;
			baseResponse = restTemplate.exchange(url, HttpMethod.GET, null, BaseResponse.class);
			String status = baseResponse.getBody().getStatus();

			if (status.equals("success")) {
				BaseResponse<User> response = baseResponse.getBody();

				userList = response.getResponseListObject();
				for (User user : userList) {
					if (user.getPhoneNumber() == wallet.getPhoneNumber() && user.getIsActive() == CommonConstants.ONE) {
						walletDetailsForReciever.setDate(new Date());
						walletDetailsForReciever.setWalletName(wallet.getWalletName());
						walletDetailsForReciever.setAddFund(wallet.getSendFund());
						walletDetailsForReciever.setPhoneNumber(wallet.getPhoneNumber());
						walletDetailsForReciever.setTxnStatus(CommonConstants.ONE);
						walletDetailsForReciever.setUserId(user.getUserId());
						walletRepository.save(walletDetailsForReciever);
						
						br.setStatus(CommonConstants.SUCCESS);
						br.setReasonCode("200");
						br.setReasonText(CommonConstants.FUND_ADDED_SUCCESSFULLY);
						br.setResponseObject(walletDetailsForReciever);
					}
					else {
						br.setStatus(CommonConstants.SUCCESS);
						br.setReasonCode("401");
						br.setReasonText(CommonConstants.PHONE_NUMBER_NOT_EXISTS);
						br.setResponseObject(walletDetailsForReciever);	
					}
				}

			}

		
		} catch (Exception e) {
			e.printStackTrace();
			br.setStatus(CommonConstants.FAIL);
			br.setReasonCode("401");
			br.setReasonText(CommonConstants.ERROR_WHILE_ADDING_FUND);
		}
		return br;
	}

	@Override
	public BaseResponse<Wallet> getFund(HttpServletRequest request, Long userId) {

		BaseResponse<Wallet> br = new BaseResponse<>();
		List<Wallet> walletList = new ArrayList<>();
		List<Wallet> wallet = new ArrayList<>();
		try {
			if (userId != null) {
				wallet = walletRepository.findByUserId(userId);
				if (wallet != null && wallet.size()>0) {
					br.setStatus(CommonConstants.SUCCESS);
					br.setReasonCode("200");
					br.setResponseListObject(wallet);
				} else {
					br.setStatus(CommonConstants.SUCCESS);
					br.setReasonCode("200");
					br.setReasonText(CommonConstants.NO_RECORD_FOUND);
				}
			} else {
				walletList = walletRepository.findAll();
				br.setStatus(CommonConstants.SUCCESS);
				br.setReasonCode("200");
				br.setResponseListObject(walletList);
			}

		} catch (Exception e) {
			e.printStackTrace();
			br.setStatus(CommonConstants.FAIL);
			br.setReasonCode("401");
			br.setReasonText(CommonConstants.ERROR_IN_FETCHING);
		}
		return br;
	}
}
