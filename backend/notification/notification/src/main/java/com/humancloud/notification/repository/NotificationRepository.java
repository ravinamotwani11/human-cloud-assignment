package com.humancloud.notification.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.humancloud.notification.entity.Notification;

@Repository("notificationRepository")
public interface NotificationRepository extends JpaRepository<Notification, Long> {

}