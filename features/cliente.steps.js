// Dados gerados a partir do terminal com cucumber
const assert = require('assert');
const { Given, When, Then } = require('cucumber');

const path = require('path');
const { ServiceBuilder } = require('selenium-webdriver/chrome');
const { Builder, By, Key, until } = require('selenium-webdriver');
const { parse } = require('path');

const pathDriver = "/home/deyvison/Programacao/Gama Academy/Testes/GamaExperience-Testes/driver/chromedriver";
const serviceBuilder = new ServiceBuilder(pathDriver);

const driver = new Builder().forBrowser('chrome').setChromeService(serviceBuilder).build();

Given('I\'m have {string} clientes in my database', function (string) {
   console.log('Inseri os dados na base'); 
 });

 When('I access the home page', async function () {
   await driver.get('http://localhost:3000')
   await driver.sleep(1000)
 });

 Then('see the list of {string} itens', async function (string) {
   let qtd = await driver.findElements(By.css('tbody tr'))
   assert.equal(qtd.length, parseInt(string))  
   await driver.quit();
});