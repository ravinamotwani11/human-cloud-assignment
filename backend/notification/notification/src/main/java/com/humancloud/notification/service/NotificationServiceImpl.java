package com.humancloud.notification.service;

import org.springframework.stereotype.Service;
import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import com.sendgrid.Method;
import com.sendgrid.Request;
import com.sendgrid.Response;
import com.sendgrid.SendGrid;
import com.sendgrid.helpers.mail.Mail;
import com.sendgrid.helpers.mail.objects.Email;
import com.sendgrid.helpers.mail.objects.Personalization;

@Service("notificationService")
public class NotificationServiceImpl implements NotificationService {

	@Value("${app.sendgrid.templateId}")
	private String templateId;

	@Autowired
	SendGrid sendGrid;

	@Override
	public String sendEmail(String emailAddress) {

		try {
			Mail mail = prepareMail(emailAddress);

			Request request = new Request();

			request.setMethod(Method.POST);
			request.setEndpoint("mail/send");

			request.setBody(mail.build());

			Response response = sendGrid.api(request);

			if (response != null) {

				System.out.println("response code from sendgrid" + response.getHeaders());

			}

		} catch (IOException e) {

			e.printStackTrace();
			return "error in sent mail!";
		}

		return "mail has been sent check your inbox!";

	}

	//prepare email
	public Mail prepareMail(String email) {

		Mail mail = new Mail();

		Email fromEmail = new Email();

		fromEmail.setEmail("ravinamotwani11@gmail.com");

		mail.setFrom(fromEmail);
		Email to = new Email();
		to.setEmail(email);

		Personalization personalization = new Personalization();

		personalization.addTo(to);
		mail.addPersonalization(personalization);

		mail.setTemplateId(templateId);

		return mail;
	}
}
