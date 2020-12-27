package com.humancloud.identity.service;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.humancloud.identity.entity.User;
import com.humancloud.identity.repository.UserRepository;
import com.humancloud.identity.util.BaseResponse;
import com.humancloud.identity.util.CommonConstants;
import com.humancloud.identity.util.CommonUtils;



@Service("profileService")
public class ProfileServiceImpl implements ProfileService {

	@Autowired
	UserRepository userRepository;

	@Override
	public BaseResponse<User> addProfileDetails(HttpServletRequest request, User user) {

		BaseResponse<User> br = new BaseResponse<>();
		User userDetails = new User();

		try {
			if (user.getEmailAddress() != null || user.getEmailAddress() == "") {
				userDetails.setEmailAddress(user.getEmailAddress());
			} else {
				br.setStatus(CommonConstants.FAIL);
				br.setReasonCode("401");
				br.setReasonText(CommonConstants.EMAIL_NOT_NULL);
				return br;
			}
			userDetails.setUserId(user.getUserId());
			userDetails.setFirstName(user.getFirstName());
			userDetails.setLastName(user.getLastName());
			if (user.getPhoneNumber() != null || user.getPhoneNumber() == "") {
				userDetails.setPhoneNumber(user.getPhoneNumber());
			} else {
				br.setStatus(CommonConstants.FAIL);
				br.setReasonCode("401");
				br.setReasonText(CommonConstants.PHONE_NUMBER_NOT_NULL);
				return br;
			}
			userDetails.setPincode(user.getPincode());
			userDetails.setCity(user.getCity());
			userDetails.setState(user.getState());
			userDetails.setCountry(user.getCountry());
			userDetails.setIsActive(CommonConstants.ONE);

			userRepository.save(userDetails);

			br.setResponseObject(userDetails);
			br.setStatus(CommonConstants.SUCCESS);
			br.setReasonCode("200");
			br.setReasonText(CommonConstants.Added_SUCCESSFULLY);

		} catch (Exception e) {
			e.printStackTrace();
			br.setStatus(CommonConstants.FAIL);
			br.setReasonCode("401");
			br.setReasonText(CommonConstants.ERROR_IN_ADDING);
		}

		return br;
	}

	@Override
	public BaseResponse<User> updateProfileDetails(HttpServletRequest request, User user) {

		BaseResponse<User> br = new BaseResponse<>();
		User userDetails = new User();

		try {

			userDetails = userRepository.findByUserIdAndIsActive(user.getUserId(), CommonConstants.ONE);

			if (userDetails != null) {
				BeanUtils.copyProperties(user, userDetails, CommonUtils.getNullPropertyNames(user));

				userRepository.save(userDetails);

				br.setResponseObject(userDetails);
				br.setStatus(CommonConstants.SUCCESS);
				br.setReasonCode("200");
				br.setReasonText(CommonConstants.DETAILS_UPDATED_SUCCESSFULLY);
			} else {
				br.setStatus(CommonConstants.FAIL);
				br.setReasonCode("401");
				br.setReasonText(CommonConstants.PROVIDE_VALID_ID);
			}
		} catch (Exception e) {
			e.printStackTrace();
			br.setStatus(CommonConstants.FAIL);
			br.setReasonCode("401");
			br.setReasonText(CommonConstants.ERROR_IN_UPDATING);
		}
		return br;
	}

	@Override
	public BaseResponse<User> getProfileDetails(HttpServletRequest request, Long userId) {

		BaseResponse<User> br = new BaseResponse<>();
		User userDetails = new User();
		List<User> userList = new ArrayList<>();

		try {
			if (userId != null) {

				userDetails = userRepository.findByUserIdAndIsActive(userId, CommonConstants.ONE);

				if (userDetails != null) {

					br.setResponseObject(userDetails);
					br.setStatus(CommonConstants.SUCCESS);
					br.setReasonCode("200");

				} else {
					br.setStatus(CommonConstants.FAIL);
					br.setReasonCode("401");
					br.setReasonText(CommonConstants.PROVIDE_VALID_ID);
				}
			} else {
				userList = userRepository.findAll();
				if (userList != null) {
					br.setResponseListObject(userList);
					br.setStatus(CommonConstants.SUCCESS);
					br.setReasonCode("200");
				} else {
					br.setResponseListObject(userList);
					br.setStatus(CommonConstants.SUCCESS);
					br.setReasonCode("200");
					br.setReasonText(CommonConstants.NO_RECORD_FOUND);
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			br.setStatus(CommonConstants.FAIL);
			br.setReasonCode("401");
			br.setReasonText(CommonConstants.ERROR_IN_FETCHING);
		}
		return br;
	}

	@Override
	public BaseResponse<User> deleteProfile(HttpServletRequest request, Long userId) {

		BaseResponse<User> br = new BaseResponse<>();
		User userDetails = new User();

		try {
			if (userId != null) {

				userDetails = userRepository.findByUserIdAndIsActive(userId, CommonConstants.ONE);

				if (userDetails != null) {

					userDetails.setIsActive(CommonConstants.ZERO);
					userRepository.save(userDetails);

					br.setStatus(CommonConstants.SUCCESS);
					br.setReasonCode("200");
					br.setReasonText(CommonConstants.DELETED_SUCCESSFULLY);

				} else {
					br.setStatus(CommonConstants.FAIL);
					br.setReasonCode("401");
					br.setReasonText(CommonConstants.PROVIDE_VALID_ID);
				}
			} else {
				br.setStatus(CommonConstants.FAIL);
				br.setReasonCode("401");
				br.setReasonText(CommonConstants.ID_NOT_NULL);
			}
		} catch (Exception e) {
			e.printStackTrace();
			br.setStatus(CommonConstants.FAIL);
			br.setReasonCode("401");
			br.setReasonText(CommonConstants.ERROR_IN_DELETING);
		}
		return br;
	}
}
