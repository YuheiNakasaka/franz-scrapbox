/**
 * Scrapbox integration plugin for Franz
 *
 * @summary     Integrates Scrapbox into the Franz application
 * @since       1.0.0
 */


/**
 * Script constants
 */
const path = require('path');
const currentVer = '1.0.0';
const franzIcon = '<?xml version="1.0" encoding="utf-8"?><!-- Generator: Adobe Illustrator 21.0.2, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 375.5 225.5" style="enable-background:new 0 0 375.5 225.5;" xml:space="preserve"><style type="text/css">	.st0{fill:#AAAAB7;}	.st1{fill:#AAAAB8;}</style><g>	<path class="st0" d="M0.5,130.5c1.1-1.4,1.1-3.2,2.3-4.6c3.4-4.1,7.9-5.3,13.7-3.6c1,0.3,1.9,0.6,2.8,1.1		c5.4,3.4,11.3,3.4,17.3,2.5c11.2-1.6,21.8-4.8,31.9-9.9c5.4-2.7,10.2-6.3,14.5-10.5c7.6-7.2,14.6-15,21.9-22.6		c5.8-6.1,12-11.7,18.8-16.7c7.6-5.5,15.7-6.3,24.6-3.8c8.8,2.5,17.1,6.3,25.7,9.5c3.8,1.4,7.7,2.7,11.7,3.4c3.5,0.6,6.8-0.3,10-1.2		c8.3-2.4,16.1-6.2,24.3-9.1c4.8-1.8,9.8-3.3,14.9-3.9c6.8-0.9,12.6,1.5,18,5.3c8.1,5.8,15.1,12.8,21.9,20		c7.4,7.8,14.4,16,22.7,22.8c9.4,7.8,20.7,11.8,32.4,14.8c5.7,1.5,11.4,2,17.2,2.3c2.7,0.1,5.5-0.3,7.9-1.8c2.6-1.6,5.5-2.7,8.6-3		c5.7-0.5,9.4,2.2,12.3,9c0,1,0,2,0,3c-0.8,2.2-1.3,4.4-2.6,6.4c-2.4,3.8-5.7,6.7-9.3,9.3c-12.8,9-27.4,13.3-42.5,16.2		c-10.3,2-20.7,3.2-31.1,3.6c-11.8,0.5-23.6,1.2-35.3-1c-22.2-4.2-41.3-14.3-57.8-29.5c-5.1-4.7-13-5-18.1-0.1		c-9.6,9.1-20.6,16.2-32.7,21.7c-11,5-22.4,8.5-34.4,9.2c-15.8,0.8-31.6,0-47.2-2.3c-14-2-27.8-4.9-40.7-11.1		C14.1,151,4.1,145.6,0.5,133.5C0.5,132.5,0.5,131.5,0.5,130.5z"/>	<path class="st1" d="M277,226c-1.5-0.9-3.2-0.6-4.8-1c-2.3-0.6-4.6-1.4-6.7-2.6c-4.1-2.3-5.9-5.9-5.9-10.5c0-7.7,0-15.5,0-23.2		c0-1.8,0.5-2.2,2.4-1.9c3,0.4,6.1,0.3,9.2,0.3c8.2,0,16.5,0.1,24.7-0.6c15.3-1.3,30.6-3.3,45.4-7.7c0.8-0.2,1.9-1,2.5-0.3		c0.7,0.7,0,1.7-0.2,2.6c-2.4,9.6-6,18.8-10.9,27.5c-4.3,7.6-11.1,11.9-19.2,14.5c-4.6,1.5-9.3,2.3-14.2,2.5c-0.5,0-1,0-1.3,0.5		C291,226,284,226,277,226z"/>	<path class="st0" d="M83.1,225.5c-10.4-0.4-20.2-2.7-28.5-9.5c-3.7-3-6.1-7-8.2-11.2c-3.7-7.4-6.5-15.1-8.8-23		c-0.7-2.3-0.1-2.4,2-1.9c10.8,2.8,21.7,4.5,32.7,5.7c13.5,1.5,27,1.5,40.6,1.4c2.1,0,4.3-0.3,6.4-0.7c1.2-0.2,1.8-0.1,1.7,1.2		c0,9.2,0.1,18.5-0.2,27.7c-0.1,3.5-2.7,5.8-5.7,7.4c-3.5,1.9-7.2,2.9-11.2,2.9c-0.8,0.1-1.8-0.3-2.5,0.5c-5.2,0-10.3,0-15.5,0		C85.1,225.1,84,225.7,83.1,225.5z"/>	<path class="st1" d="M83.1,225.5c1,0.2,2.1-0.4,2.9,0.5c-1,0-2,0-3,0C83,225.8,83,225.7,83.1,225.5z"/>	<path class="st1" d="M101.5,226c0.7-0.8,1.7-0.4,2.5-0.5c0,0.2,0,0.3,0,0.5C103.2,226,102.3,226,101.5,226z"/>	<path class="st1" d="M342.9,37.1c-0.4,8.2,0.4,18.5,0.7,28.7c0.2,8.3,0.5,16.6,1,24.9c0.3,5-0.1,10,0.8,14.9c0.4,2-0.1,3.1-2.5,2.9		c-8.9-0.9-17.2-3.6-25.2-7.2c-5.5-2.5-10-6.2-14.1-10.5c-0.9-0.9-1.2-1.6,0-2.4c8.7-6.5,11.8-16.2,14.5-26.1		c3.4-12.3,5.1-25,7.6-37.5c1.1-5.6,2.2-11.2,4.5-16.5c0.4-0.8,0.7-1.7,1.1-2.5c1.5-2.5,3.1-5.3,6.6-4.8c3.3,0.4,3.3,3.5,3.9,6		c1,4.2,1,8.6,1.2,12.9C343.1,24.9,342.9,30,342.9,37.1z"/>	<path class="st1" d="M37.5,108c-1.9,0.5-2-0.7-2-2.2c0.8-12.3,1-24.6,1.6-36.9C38,52.6,37.9,36.3,38.1,20c0-4.6,0.3-9.3,1.4-13.8		c0.2-0.7,0.3-1.5,0.6-2.2c1.3-3.4,4.2-4.1,6.9-1.7c3,2.7,4.3,6.3,5.4,10C55.5,22.7,57,33.4,59,44.1c2,10.8,4.2,21.5,8.6,31.6		c1.8,4,4.1,7.6,7.3,10.6c0.9,0.8,1.2,1.3,0.2,2.4c-9.8,11.4-22.8,16.5-37,19.3C38,108,37.8,108,37.5,108z"/></g></svg>';
const preUpdate = '<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>Checking for updates.';
const $ = jQuery;


/**
 * Scripts specific to the about dialog
 *
 * @since       1.1.0
 */
let aboutScripts = {
	init : function() {
		this.runtime();
		this.addIcon();
	},
	runtime : function() {
		$('.header-btn').click( function() {
			toggleAboutDialog('close');
		});
	},
	/**
	 * Adds the about icon to the header
	 *
	 * @since       1.1.0
	 */
	addIcon : function() {
		$('.header-notifications').before('<a class="header-btn header-franz-icon" href="#" aria-label="Franz Integration"><span class="header-btn-icon icon-lg light">' + franzIcon + '</span></a>');

		$('.header-franz-icon').click( function(e) {
			e.preventDefault();

			toggleAboutDialog();
		});
	},
	/**
	 * Renders the about dialog
	 *
	 * @since       1.1.0
	 */
	renderDialog : function() {
		// Setup the dialog in chunks for easier tweaking later
		let aboutWrapperBefore = '<div class="franz-about-box pop-over"><div>';

		// Header
		let aboutHeaderBox = '<div class="pop-over-header"><span class="pop-over-header-title">Scrapbox Franz Integration</span></div>';

		// Inner wrapper
		let aboutInnerWrapperBefore = '<div class="franz-about-inner">';

		// Icon box
		let aboutIconBox = '<div class="franz-about-icon-wrap"><div class="franz-about-icon">' + franzIcon + '</div></div>';

		// Info box
		let aboutInfoWrapperBefore = '<div class="franz-about-info">';
		let aboutInfoVersion = '<div class="franz-about-version"><span>Version ' + currentVer + '</span><a href="https://github.com/YuheiNakasaka/franz-scrapbox/blob/' + currentVer + '/CHANGELOG.md" target="_blank">What\'s New</a></div>';
		let aboutInfoUpdate = '<div class="franz-about-update">' + preUpdate + '</div>';
		let aboutInfoWrapperAfter = '</div><div class="clearfix"></div>';

		// Details box
		let aboutDetailsBox = '<hr /><div class="franz-about-details"><p>The Scrapbox integration for Franz is designed by YuheiNakasaka and is released under the MIT license.</p><p>Questions? Comments? <a href="https://github.com/extendfranz/trello/issues" target="_blank">Let us know</a>!</p><p>Want to help? <a href="https://github.com/YuheiNakasaka/franz-scrapbox/issues" target="_blank">get involved</a>!</p></div>';

		// Footer box
		let aboutFooterBox = '<hr /><div class="franz-about-footer">Franz and the Franz logo are copyright Yuhei Nakasaka.<br />This plugin is not affiliated with or endorced by Franz in any way.</div>';

		let aboutInnerWrapperAfter = '</div>';
		let aboutWrapperAfter = '</div>';

		$('.tooltip-container').before(aboutWrapperBefore + aboutHeaderBox + aboutInnerWrapperBefore + aboutIconBox + aboutInfoWrapperBefore + aboutInfoVersion + aboutInfoUpdate + aboutInfoWrapperAfter + aboutDetailsBox + aboutFooterBox + aboutInnerWrapperAfter + aboutWrapperAfter);
	},
};
aboutScripts.init();


/**
 * Toggles the about dialog
 *
 * @since       1.0.0
 * @return      {void}
 */
function toggleAboutDialog(trigger) {
	if (! $('.franz-about-box').length) {
		aboutScripts.renderDialog();
	}

	if ($('.franz-about-box').css('display') != 'none' || trigger === 'close') {
		$('.franz-about-box').css('display', 'none');
		$('.franz-about-box').css('left', false);
		$('.franz-about-box').css('top', false);
	} else {
		$('.franz-about-box').css('display', 'block');
		$('.franz-about-box').css('left', '973px');
		$('.franz-about-box').css('top', '41px');

		updateCheck();
	}
}


/**
 * Check for updates
 *
 * @since       1.1.0
 * @return      {void}
 */
function updateCheck() {
	let latestVer = readCookie('franz_scrapbox_latest_version');

	if(latestVer === null) {
		$.get('https://raw.githubusercontent.com/YuheiNakasaka/franz-scrapbox/master/package.json', function(data) {
			let packagedata = $.parseJSON(data);

			if (packagedata) {
				latestVer = packagedata.version;

				createCookie('franz_scrapbox_latest_version', latestVer, 24);

				updateDisplay(latestVer);
			} else {
				eraseCookie('franz_scrapbox_latest_version');

				updateDisplay('error');
			}
		}).fail(function (data) {
			eraseCookie('franz_scrapbox_latest_version');

			updateDisplay('error');
		});
	} else {
		updateDisplay(latestVer);
	}
}


/**
 * Display update notices
 *
 * @since       1.3.1
 * @param       {string} latestVer The latest available version
 * @return      {void}
 */
function updateDisplay(latestVer) {
	if(latestVer === 'error') {
		$('.franz-about-update').addClass('franz-update-error');
		$('.franz-about-update').html('Update check failed! Please try again later.');
		$('.header-franz-icon').removeClass('new-notifications');
	} else if (currentVer < latestVer) {
		$('.franz-about-update').addClass('franz-outdated');
		$('.franz-about-update').html('<a href="https://github.com/YuheiNakasaka/franz-scrapbox/releases/latest" target="_blank">Version ' + latestVer + ' is available!</a>');
		$('.header-franz-icon').addClass('new-notifications');
	} else {
		$('.franz-about-update').addClass('franz-uptodate');
		$('.franz-about-update').html('The Scrapbox Franz integration is up to date!');
		$('.header-franz-icon').removeClass('new-notifications');
	}
}


/**
 * Create a cookie with the given data
 *
 * @since       1.1.0
 * @param       {string} name The name of the cookie to create
 * @param       {string} mixed The value to store to the cookie
 * @param       {int} hours The number of hours to save the cookie
 * @return      {void}
 */
function createCookie(name, value, hours) {
	let expires = '';

	if (hours) {
		let date = new Date();
		date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
		expires = '; expires=' + date.toGMTString();
	}

	document.cookie = name + '=' + value + expires + '; path=/';
}


/**
 * Read a value from a cookie
 *
 * @since       1.1.0
 * @param       {string} name The name of the cookie to read
 * @return      {mixed} The value of the cookie, or null if not found
 */
function readCookie(name) {
	var nameEQ = name + '=';
	var ca = document.cookie.split(';');

	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) === ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
	}

	return null;
}


/**
 * Erase a given cookie
 *
 * @since       1.1.0
 * @param       {string} name The name of the cookie to erase
 * @return      {void}
 */
function eraseCookie(name) {
	createCookie(name, '', -1);
}


/**
 * The core Franz message handler
 *
 * @since       1.0.0
 */
module.exports = (Franz, options) => {
	Franz.injectCSS(path.join(__dirname, 'css', 'franz.css'));

	/**
	 * Get messages for the Franz loop
	 *
	 * @since       1.0.0
	 * @return      {void}
	 */
	function getMessages() {
		let unread = '';

		if ($('.header-notifications').length) {
			if ($('.header-notifications').hasClass('new-notifications')) {
				unread = '&bull;';
			} else {
				unread = 0;
			}
		}

		// Run update checks on message timer
		updateCheck();

		Franz.setBadge(unread);
	}

	Franz.loop(getMessages);
};
