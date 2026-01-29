Feature('login');

Scenario('Login realizado com sucesso',  ({ I }) => {
    I.amOnPage('http://automationpratice.com.br');
    I.click('Login')
    I.waitForText('Login', 30)
    I.fillField('#user', 'e@email.com')
    I.fillField('#password', '123456')
    I.click('#btnLogin')
    I.waitForText('Login realizado', 3)
}).tag('@success')

Scenario('Tentando fazer login digitando apenas o e-mail',  ({ I }) => {
    I.amOnPage('http://automationpratice.com.br');
    I.click('Login')
    I.waitForText('Login', 30)
    I.fillField('#user', 'e@email.com')
    I.click('#btnLogin')
    I.waitForText('Senha inválida', 5)
}).tag('@error')

Scenario('Tentando fazer login sem digitar e-mail e senha',  ({ I }) => {
    I.amOnPage('http://automationpratice.com.br');
    I.click('Login')
    I.waitForText('Login', 30)
    I.click('#btnLogin')
    I.waitForText('E-mail inválido', 5)
}).tag('@error')

Scenario('Tentando fazer login digitando apenas a senha',  ({ I }) => {
    I.amOnPage('http://automationpratice.com.br');
    I.click('Login')
    I.waitForText('Login', 30)
    I.fillField('#password', '123456')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido', 10)
}).tag('@error')