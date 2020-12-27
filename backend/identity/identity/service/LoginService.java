package com.humancloud.identity.service;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;

import com.humancloud.identity.entity.User;
import com.humancloud.identity.util.BaseResponse;

@Service
public interface LoginService {

	BaseResponse<User> signIn(HttpServletRequest request, User user);

	BaseResponse<User> signUp(HttpServletRequest request, User user);

}
