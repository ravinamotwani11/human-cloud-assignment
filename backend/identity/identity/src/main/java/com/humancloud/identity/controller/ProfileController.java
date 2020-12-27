package com.humancloud.identity.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.QueryParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.humancloud.identity.entity.User;
import com.humancloud.identity.repository.UserRepository;
import com.humancloud.identity.service.ProfileService;
import com.humancloud.identity.util.BaseResponse;
import com.humancloud.identity.util.CommonConstants;

@RestController
@RequestMapping("/api/profile")
public class ProfileController {

	@Autowired
	ProfileService profileService;

	@Autowired
	UserRepository userRepository;

	@CrossOrigin(origins = "*")
	@PostMapping("/addProfileDetails")
	public ResponseEntity<BaseResponse<User>> addProfileDetails(HttpServletRequest request, @RequestBody User user,
			HttpServletResponse response) {

		ResponseEntity<BaseResponse<User>> userResponse = null;
		BaseResponse<User> br = new BaseResponse<User>();

		try {
			if (user.getUserId() != null) {
				br = profileService.addProfileDetails(request, user);
			} else {
				br.setStatus(CommonConstants.FAIL);
				br.setReasonCode("401");
				br.setReasonText(CommonConstants.ID_NOT_NULL);
			}
		} catch (Exception e) {
			e.printStackTrace();
			br.setStatus(CommonConstants.FAIL);
			br.setReasonCode("401");
			br.setReasonText(CommonConstants.ERROR_IN_ADDING);
		}

		userResponse = new ResponseEntity<BaseResponse<User>>(br, null, HttpStatus.OK);
		return userResponse;
	}

	@CrossOrigin(origins = "*")
	@PutMapping("/updateProfileDetails")
	public ResponseEntity<BaseResponse<User>> updateProfileDetails(HttpServletRequest request, @RequestBody User user,
			HttpServletResponse response) {

		ResponseEntity<BaseResponse<User>> userResponse = null;
		BaseResponse<User> br = new BaseResponse<User>();

		try {
			if (user.getUserId() != null && (user.getPhoneNumber() == null || user.getPhoneNumber().isEmpty())) {

				br = profileService.updateProfileDetails(request, user);
			} else {
				br.setStatus(CommonConstants.FAIL);
				br.setReasonCode("401");
				br.setReasonText(CommonConstants.ID_AND_PHONE_NUMBER);
			}
		} catch (Exception e) {
			e.printStackTrace();
			br.setStatus(CommonConstants.FAIL);
			br.setReasonCode("401");
			br.setReasonText(CommonConstants.ERROR_IN_UPDATING);
		}

		userResponse = new ResponseEntity<BaseResponse<User>>(br, null, HttpStatus.OK);
		return userResponse;
	}

	@CrossOrigin(origins = "*")
	@GetMapping("/getProfileDetails")
	public ResponseEntity<BaseResponse<User>> getProfileDetails(HttpServletRequest request,
			@QueryParam("userId") Long userId, HttpServletResponse response) {

		ResponseEntity<BaseResponse<User>> userResponse = null;
		BaseResponse<User> br = new BaseResponse<User>();

		try {

			br = profileService.getProfileDetails(request, userId);
		}

		catch (Exception e) {
			e.printStackTrace();
			br.setStatus(CommonConstants.FAIL);
			br.setReasonCode("401");
			br.setReasonText(CommonConstants.ERROR_IN_FETCHING);
		}

		userResponse = new ResponseEntity<BaseResponse<User>>(br, null, HttpStatus.OK);
		return userResponse;
	}

	@CrossOrigin(origins = "*")
	@DeleteMapping("/deleteProfile")
	public ResponseEntity<BaseResponse<User>> deleteProfile(HttpServletRequest request,
			@QueryParam("userId") Long userId, HttpServletResponse response) {

		ResponseEntity<BaseResponse<User>> userResponse = null;
		BaseResponse<User> br = new BaseResponse<User>();

		try {

			br = profileService.deleteProfile(request, userId);
		}

		catch (Exception e) {
			e.printStackTrace();
			br.setStatus(CommonConstants.FAIL);
			br.setReasonCode("401");
			br.setReasonText(CommonConstants.ERROR_IN_DELETING);
		}

		userResponse = new ResponseEntity<BaseResponse<User>>(br, null, HttpStatus.OK);
		return userResponse;
	}

}
