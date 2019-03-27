import { expect } from 'chai';
import GmailPage from './../pages/gmail.page'

describe('Gmail tests', () => {
	it('User should see a logo', () => {
		let gmailPage = new GmailPage();
		gmailPage.open();
		gmailPage.waitForLogo();

		expect(gmailPage.isLogoVisible).to.be.equal(
			true);
	});
});
