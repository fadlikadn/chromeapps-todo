// Reference : https://developer.chrome.com/apps/app_codelab_alarms#launch
(function () {
	'use strict';
	var alarmName = 'remindme';
	function checkAlarm (callback) {
		chrome.alarms.getAll(function (alarms) {
			var hasAlarm = alarms.some(function (a) {
				return a.name == alarmName;
			})
		})
	}
})