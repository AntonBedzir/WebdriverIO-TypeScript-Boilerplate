import { expect } from 'chai';
import { Test } from './../models';
import { Element } from 'webdriverio';

class GmailPage {
    url = 'https://mail.google.com/mail/u/0/?tab=rm#inbox';

    constructor(){

    }

    open(){
        browser.url (this.url);
    }

    waitForLogo(){
        browser.waitUntil(() => this.isLogoVisible());
    }

    isLogoVisible(){
       return $('img.gb_ma').isDisplayed();
    }
}

export default GmailPage;