import { $ } from '@wdio/globals'
import Page from './page.js';

class LoginPage extends Page {

    get btnLanjutkan () {
        const element = $('//android.widget.Button[@text="Lanjutkan"]');
        element.waitForExist({ timeout: 10000 });
        element.waitForDisplayed({ timeout: 5000 });
        return element;
    }
    get btnNantiSaja () {
        return $('id=com.erafone.android:id/btnClose')
    }
    get btnMasuk () {
        const element = $('//android.widget.Button[@content-desc="qa-button-textmasuk"]');
        element.waitForExist({ timeout: 10000 });
        element.waitForDisplayed({ timeout: 5000 });
        return element;
    }
    get inputUsername () {  
        const element = $('//android.view.View[@content-desc="qa-useridentifier"]/ancestor::android.widget.EditText');
        element.waitForExist({ timeout: 10000 });
        element.waitForDisplayed({ timeout: 5000 });
        return element;
    }
    get inputPassword () {
        const element = $('//android.view.View[@content-desc="qa-password"]/ancestor::android.widget.EditText');
        element.waitForExist({ timeout: 10000 });
        element.waitForDisplayed({ timeout: 5000 });
        return element;
    }

    get btnSubmit() {
    return $('//*[@text="Masuk"]');
    }

    get flashAlertText () {
        const element = $('//android.widget.TextView[@text="Format email/nomor handphone yang kamu masukkan salah"]');
        element.waitForExist({ timeout: 10000 });
        element.waitForDisplayed({ timeout: 5000 });
        return element;
    }
    get flashAlertTextPassword () {
        return $('//android.widget.TextView[@text="Email/no. handphone/password salah atau belum terverifikasi, yuk di cek kembali!"]');
    }
    
    get validatefailLogin () {
        return $('//android.widget.TextView[@text="Email/no. handphone/password salah atau belum terverifikasi, yuk di cek kembali!"]');
    }
    get validateLogin () {
        const element = $('//android.view.View[@resource-id="com.erafone.android:id/layerPoint"]');
        element.waitForExist({ timeout: 10000 });
        element.waitForDisplayed({ timeout: 5000 });
        return element;
    }


    async successLogin (phonenumber, password) {
        await this.btnMasuk.click();
        await this.inputUsername.click();
        await this.inputUsername.setValue(phonenumber);
        await this.inputPassword.click();
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        await expect(this.validateLogin).toBeExisting()
        
    }

     async failLogin (phonenumber, password) {
        await this.btnMasuk.click();
        await this.inputUsername.click();
        await this.inputUsername.setValue(phonenumber);
        await this.inputPassword.click();
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        await expect(this.validatefailLogin).toBeExisting()
        
    }


}

export default new LoginPage();
