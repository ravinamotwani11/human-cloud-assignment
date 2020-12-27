package com.humancloud.wallet.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.QueryParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.humancloud.wallet.entity.Wallet;
import com.humancloud.wallet.repository.WalletRepository;
import com.humancloud.wallet.service.WalletService;
import com.humancloud.wallet.util.BaseResponse;
import com.humancloud.wallet.util.CommonConstants;

@RestController
@RequestMapping("/api/wallet")
public class WalletController {

	@Autowired
	WalletService walletService;
	
	@Autowired
	WalletRepository walletRepository;	
	
	@CrossOrigin(origins = "*")
	@PostMapping("/addFund")
	public ResponseEntity<BaseResponse<Wallet>> addFund(HttpServletRequest request, @RequestBody Wallet wallet, HttpServletResponse response){
		
		ResponseEntity<BaseResponse<Wallet>> userResponse= null;
		BaseResponse<Wallet> br = new BaseResponse<Wallet>();
		
		try {
			if(wallet.getWalletId()==null) {
				br= walletService.addFund(request, wallet);
			}
			else {
				br.setStatus(CommonConstants.FAIL);
				br.setReasonCode("401");
				br.setReasonText(CommonConstants.ID_NULL);
			}
		}
		catch(Exception e) {
			br.setStatus(CommonConstants.FAIL);
			br.setReasonCode("401");
			br.setReasonText(CommonConstants.ERROR_WHILE_ADDING_FUND);
		}
		
		userResponse = new ResponseEntity<BaseResponse<Wallet>>(br, null, HttpStatus.OK);
		return userResponse;
		
	}
	
	@CrossOrigin(origins = "*")
	@PostMapping("/sendFund")
	public ResponseEntity<BaseResponse<Wallet>> sendFund(HttpServletRequest request, @RequestBody Wallet wallet, HttpServletResponse response){
		
		ResponseEntity<BaseResponse<Wallet>> userResponse= null;
		BaseResponse<Wallet> br = new BaseResponse<Wallet>();
		
		try {
			if(wallet.getWalletId()==null) {
				br= walletService.sendFund(request, wallet);
			}
			else {
				br.setStatus(CommonConstants.FAIL);
				br.setReasonCode("401");
				br.setReasonText(CommonConstants.ID_NULL);
			}
		}
		catch(Exception e) {
			br.setStatus(CommonConstants.FAIL);
			br.setReasonCode("401");
			br.setReasonText(CommonConstants.ERROR_WHILE_SENDING_FUND);
		}
		
		userResponse = new ResponseEntity<BaseResponse<Wallet>>(br, null, HttpStatus.OK);
		return userResponse;
		
	}
	@CrossOrigin(origins = "*")
	@PostMapping("/addFundInReciever")
	public ResponseEntity<BaseResponse<Wallet>> addFundInReciever(HttpServletRequest request, @RequestBody Wallet wallet, HttpServletResponse response){
		
		ResponseEntity<BaseResponse<Wallet>> userResponse= null;
		BaseResponse<Wallet> br = new BaseResponse<Wallet>();
		
		try {
			if(wallet.getWalletId()==null) {
				br= walletService.addFundInReciever(request, wallet);
			}
			else {
				br.setStatus(CommonConstants.FAIL);
				br.setReasonCode("401");
				br.setReasonText(CommonConstants.ID_NULL);
			}
		}
		catch(Exception e) {
			br.setStatus(CommonConstants.FAIL);
			br.setReasonCode("401");
			br.setReasonText(CommonConstants.ERROR_WHILE_ADDING_FUND);
		}
		
		userResponse = new ResponseEntity<BaseResponse<Wallet>>(br, null, HttpStatus.OK);
		return userResponse;
		
	}
	
	@CrossOrigin(origins = "*")
	@GetMapping("/getFund")
	public ResponseEntity<BaseResponse<Wallet>> getFund(HttpServletRequest request, @QueryParam("userId") Long userId, HttpServletResponse response){
		
		ResponseEntity<BaseResponse<Wallet>> userResponse= null;
		BaseResponse<Wallet> br = new BaseResponse<Wallet>();
		
		try {
		
				br= walletService.getFund(request, userId);
			
			
		}
		catch(Exception e) {
			br.setStatus(CommonConstants.FAIL);
			br.setReasonCode("401");
			br.setReasonText(CommonConstants.ERROR_WHILE_ADDING_FUND);
		}
		
		userResponse = new ResponseEntity<BaseResponse<Wallet>>(br, null, HttpStatus.OK);
		return userResponse;
		
	}
}
