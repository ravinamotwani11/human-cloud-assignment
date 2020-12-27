package com.humancloud.identity.service;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;

import com.humancloud.identity.entity.User;
import com.humancloud.identity.util.BaseResponse;

@Service
public interface ProfileService {

	BaseResponse<User> addProfileDetails(HttpServletRequest request, User user);

	BaseResponse<User> updateProfileDetails(HttpServletRequest request, User user);

	BaseResponse<User> getProfileDetails(HttpServletRequest request, Long userId);

	BaseResponse<User> deleteProfile(HttpServletRequest request, Long userId);

}
