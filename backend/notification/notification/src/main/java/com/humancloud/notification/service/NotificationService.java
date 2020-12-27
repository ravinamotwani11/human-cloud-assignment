package com.humancloud.notification.service;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;

@Service
public interface NotificationService {

	String sendEmail(String emailAddress);

}
