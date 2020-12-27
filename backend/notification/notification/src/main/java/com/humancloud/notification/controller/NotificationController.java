package com.humancloud.notification.controller;

import javax.ws.rs.QueryParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.humancloud.notification.service.NotificationService;

@RestController
@RequestMapping("/api/notification")
public class NotificationController {


		@Autowired
		NotificationService notificationService;

		@CrossOrigin(origins = "*")
		@GetMapping("/sendMail")
		public String sendEmail(@QueryParam("emailAddres") String emailAddress)
		{

		return	notificationService.sendEmail(emailAddress);
		
		}
	}

