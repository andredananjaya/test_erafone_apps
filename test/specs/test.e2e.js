import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import { userLoginData, invalidLoginDataPhonenumber, invalidLoginDataPassword } from '../helper/datauser.js'


describe('My Login application', () => {    
    beforeEach(async () => {
        await driver.terminateApp('com.erafone.android') 
        await driver.activateApp('com.erafone.android')
    });

    it('should login with valid credentials (tag: @login @valid)',  async () => {
        await LoginPage.successLogin(userLoginData.phonenumber, userLoginData.password)
       
        
    })
    it('should login with invalid phonenumber (tag: @login @invalid_phonenumber)',  async () => {
        await LoginPage.failLogin(invalidLoginDataPhonenumber.phonenumber, invalidLoginDataPhonenumber.password)

        
    })
    it('should login with invalid password (tag: @login @invalid_password)',  async () => {
        await LoginPage.failLogin(invalidLoginDataPassword.phonenumber, invalidLoginDataPassword.password)  
    })

})


