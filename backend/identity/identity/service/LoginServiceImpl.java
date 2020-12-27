package com.humancloud.identity.service;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.humancloud.identity.entity.User;
import com.humancloud.identity.repository.UserRepository;
import com.humancloud.identity.util.BaseResponse;
import com.humancloud.identity.util.CommonConstants;

@Service("loginService")
public class LoginServiceImpl implements LoginService {

	@Autowired
	UserRepository userRepository;
	
	@Override
	public BaseResponse<User> signIn(HttpServletRequest request, User user){
		BaseResponse<User> br = new BaseResponse<>();
		
		User userDetails = new User();
		
		try {
			
			userDetails = userRepository.findByEmailAddressAndPasswordAndIsActive(user.getEmailAddress(), user.getPassword(), CommonConstants.ONE);
			if(userDetails!=null) {
				br.setStatus(CommonConstants.SUCCESS);
				br.setReasonCode("200");
				br.setResponseObject(userDetails);
				br.setReasonText(CommonConstants.SIGN_IN_SUCCESSFULLY);
			}
			else {
				br.setStatus(CommonConstants.FAIL);
				br.setReasonCode("202");
				br.setReasonText(CommonConstants.EMAIL_OR_PASSWORD_WRONG);
			}
	
		}
		catch(Exception e) {
			e.printStackTrace();
			br.setStatus(CommonConstants.FAIL);
			br.setReasonCode("202");
			br.setReasonText(CommonConstants.ERROR_IN_SIGN_IN);
		}
		return br;
	}
	
	@Override
	public BaseResponse<User> signUp (HttpServletRequest request, User user){
		BaseResponse<User> br = new BaseResponse<>();
		
		User userDetails = new User();
		
		try {
			userDetails.setEmailAddress(user.getEmailAddress());
			userDetails.setPassword(user.getPassword());
			userDetails.setIsActive(CommonConstants.ONE);
			userRepository.save(userDetails);
			
			br.setStatus(CommonConstants.SUCCESS);
			br.setReasonCode("200");
			br.setResponseObject(userDetails);
			br.setReasonText(CommonConstants.USER_ADDEDD_SUCCESSFULLY);
	
		}
		catch(Exception e) {
			e.printStackTrace();
			br.setReasonCode("202");
			br.setReasonText(CommonConstants.ERROR_IN_ADDING_USER);
		}
		return br;
	}
}
