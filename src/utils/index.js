import React, { Component } from 'react';
import moment from 'moment';
import { message, notification } from 'antd';

// 根据传入字段获取对应url地址栏参数
export const GetQueryString = name => {
	let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
	let r = window.location.search.substr(1).match(reg);
	if (r != null) {
		return r[2];
	} else {
		return null;
	}
};

export const getPathnameByIndex = index => {
	const pathname = window.location.pathname.split('/');
	if (pathname[index]) {
		return pathname[index];
	} else {
		return null;
	}
};

/**
 * momentjs 格式成 2017-09-12
 * */

export const formatMomentToString = (mDate, format = 'YYYY-MM-DD') =>
	mDate ? moment(mDate).format(format) : null;

/**
 * 把2017-12-12 字符串的格式实例化成 moment
 * */
export const convertStringToMoment = dateStr => {
	if (!dateStr || dateStr < 1) {
		return undefined;
	}
	const m = moment(dateStr);
	if (m.isValid()) {
		return m;
	} else {
		return undefined;
	}
};

/**
 * 格式化时间戳 成字符串
 * 兼容秒、毫秒
 *
 * */
export const formatTimeStampToString = (date, format = 'YYYY-MM-DD') => {
	if (!date > 0) {
		return null;
	}

	if (String(date).indexOf('-') > -1) {
		return date;
	}
	const mDate = Number.parseInt(date, 10);
	const stampLength = String(mDate).length;
	let nDate = mDate;
	if (stampLength === 10) {
		nDate = nDate * 1000;
	}
	return formatMomentToString(nDate, format);
};

const messageConfig = {
	maxCount: 1
};
export const showSuccessMsg = (msg, duration = 4) => {
	message.config(messageConfig);
	message.success(msg, duration);
};

/**
 * 弹出操作结果通知
 * @no-tests
 * */
export const openNotification = (type, title, content, duration = 5) => {
	notification[type]({
		key: title, // 相同内容不会增加显示框
		message: title,
		description: (
			<div style={{ padding: 3, wordBreak: 'break-all' }}>{content}</div>
		),
		duration: duration // 自动计算持续时间
		/*	style: {
					width: 350,
					paddingRight: '12px',

				}*/
	});
};

export const getMinute = duration => {
	let minute = Math.floor(duration / 60),
		second = Math.floor(duration % 60);
	minute = minute < 10 ? '0' + minute : minute;
	second = second < 10 ? '0' + second : second;
	return minute + ':' + second;
};

export const splitStr = str => {
	str = str.trim();
	let a = str.split('['),
		b = [],
		result = [],
		start = 0;
	a.splice(0, 1);
	a.map(item => {
		b = item.split(']');
		start = b[0].split(':');
		start =
			Number(start[0].replace(/^0*/, '')) * 60 +
			Number(start[1].replace(/^0*/, ''));
		result.push({ start, lyrics: b[1] });
	});
	return result;
};

export const replaceUrlPrefix = str => {
	let result = {
		prefix: '',
		afterClearPrefix: ''
	};
	let reg = /^(https?:\/\/)?(\s|\S)*?\//;
	let resultArr = str.match(reg);
	if (!resultArr) {
		return result;
	}
	result.prefix = resultArr[0];
	result.afterClearPrefix = str.replace(reg, '');
	return result;
};
