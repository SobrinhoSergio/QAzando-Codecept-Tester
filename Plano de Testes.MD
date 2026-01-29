# Plano de Testes

## Feature: Login

---

### 🧪 Cenário 1: Login com sucesso

**Dado** que o usuário esteja na tela inicial do sistema  
**E** acesse a tela de login  
**Quando** informar os dados para logar  
**Então** deve ser apresentada a tela de usuário logado  

---

### 🧪 Cenário 2: Tentando logar digitando apenas o e-mail

**Dado** que o usuário esteja na tela inicial do sistema  
**E** acesse a tela de login  
**Quando** o usuário digitar apenas o e-mail para logar  
**Então** deve ser apresentada a mensagem **"Senha inválida."**  

---

### 🧪 Cenário 3: Tentando logar sem digitar e-mail e senha

**Dado** que o usuário esteja na tela inicial do sistema  
**E** acesse a tela de login  
**Quando** clicar em **"Login"** sem digitar usuário e senha  
**Então** deve ser apresentada a mensagem **"E-mail inválido."**  

---

### 🧪 Cenário 4: Tentando logar digitando apenas a senha

**Dado** que o usuário esteja na tela inicial do sistema  
**E** acesse a tela de login  
**Quando** o usuário digitar apenas a senha para logar  
**Então** deve ser apresentada a mensagem **"E-mail inválido."**  

---