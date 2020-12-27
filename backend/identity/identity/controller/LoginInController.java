package com.humancloud.identity.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.humancloud.identity.entity.User;
import com.humancloud.identity.repository.UserRepository;
import com.humancloud.identity.service.LoginService;
import com.humancloud.identity.util.BaseResponse;
import com.humancloud.identity.util.CommonConstants;

@RestController
@RequestMapping("/api/authentication")
public class LoginInController {

	@Autowired
	LoginService loginService;

	@Autowired
	UserRepository userRepository;

	@CrossOrigin(origins = "*")
	@PostMapping("/login")
	public ResponseEntity<BaseResponse<User>> signIn(HttpServletRequest request, @RequestBody User user,
			HttpServletResponse response) {

		ResponseEntity<BaseResponse<User>> userResponse = null;
		BaseResponse<User> br = new BaseResponse<User>();

		if (user.getUserId() == null) {
			try {
				br = loginService.signIn(request, user);
			} catch (Exception e) {
				e.printStackTrace();
				br.setReasonCode("202");
				br.setReasonText(CommonConstants.ERROR_IN_SIGN_IN);
			}

		}
		userResponse = new ResponseEntity<BaseResponse<User>>(br, null, HttpStatus.OK);
		return userResponse;
	}

	@CrossOrigin(origins = "*")
	@PostMapping("/signup")
	public ResponseEntity<BaseResponse<User>> signUp(HttpServletRequest request, @RequestBody User user,
			HttpServletResponse response) {
		ResponseEntity<BaseResponse<User>> userResponse = null;
		BaseResponse<User> br = new BaseResponse<User>();

		if (user.getUserId() == null) {
			try {
				br = loginService.signUp(request, user);
			} catch (Exception e) {
				e.printStackTrace();
				br.setReasonCode("202");
				br.setReasonText(CommonConstants.ERROR_IN_ADDING_USER);
			}

		}
		userResponse = new ResponseEntity<BaseResponse<User>>(br, null, HttpStatus.OK);
		return userResponse;
	}
}
