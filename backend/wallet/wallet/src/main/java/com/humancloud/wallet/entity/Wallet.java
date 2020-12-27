package com.humancloud.wallet.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "txn_wallet")
public class Wallet {

	private Long walletId;
	private Long userId;
	private String walletName;
	private String phoneNumber;
	private Date date;
	private Double addFund;
	private Double sendFund;
	private Integer txnStatus;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public Long getWalletId() {
		return walletId;
	}

	public void setWalletId(Long walletId) {
		this.walletId = walletId;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public Double getAddFund() {
		return addFund;
	}

	public void setAddFund(Double addFund) {
		this.addFund = addFund;
	}

	public Double getSendFund() {
		return sendFund;
	}

	public void setSendFund(Double sendFund) {
		this.sendFund = sendFund;
	}

	public String getWalletName() {
		return walletName;
	}

	public void setWalletName(String walletName) {
		this.walletName = walletName;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Integer getTxnStatus() {
		return txnStatus;
	}

	public void setTxnStatus(Integer txnStatus) {
		this.txnStatus = txnStatus;
	}

	@Override
	public String toString() {
		return "Wallet [walletId=" + walletId + ", userId=" + userId + ", walletName=" + walletName + ", phoneNumber="
				+ phoneNumber + ", date=" + date + ", addFund=" + addFund + ", sendFund=" + sendFund + ", txnStatus="
				+ txnStatus + "]";
	}



}
