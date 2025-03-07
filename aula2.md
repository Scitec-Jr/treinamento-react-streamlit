# Aula 2: Integração do React.js com Streamlit

## ⏳ Duração: 1h  
## 🎯 Objetivo: Ensinar como integrar um front-end React.js com um back-end em Streamlit para criar aplicações interativas.  

---

## 📌 1. Introdução ao Streamlit  
### 🔹 O que é Streamlit?  
Streamlit é um framework Python que permite criar aplicações web interativas de forma rápida e simples, sem precisar de conhecimentos avançados em desenvolvimento web.  

### 🔹 Por que integrar com React?  
- O Streamlit oferece componentes padrão, mas com React podemos criar **componentes personalizados** para ampliar suas funcionalidades.  
- Melhor interação do front-end com dados processados no back-end Python.  

---

## 📌 2. Criando um Projeto Streamlit  
### 🔹 **Instalação do Streamlit**  
```sh  
pip install streamlit  
```
### 🔹 **Executando o Streamlit**  
Crie um arquivo `app.py` e adicione o seguinte código básico:  
```python  
import streamlit as st

st.title("Meu Primeiro App com Streamlit 🚀")
st.write("Olá, bem-vindo ao meu aplicativo!")
```
Para rodar o app, execute:  
```sh  
streamlit run app.py  
```

---

## 📌 3. Criando um Componente React Personalizado  
### 🔹 Estrutura do Projeto  
Organizaremos os arquivos assim:  
```
/meu_projeto
 ├── /frontend    # Código React
 ├── /backend     # Código Streamlit
 ├── app.py       # Arquivo principal do Streamlit
 ├── requirements.txt  # Dependências do Python
```

### 🔹 Configurando um Componente React  
1. No diretório `frontend`, inicialize um projeto React com Vite:  
```sh  
npm create vite@latest frontend --template react
cd frontend
npm install
npm run dev
```
2. Crie um componente simples no `frontend/src/App.jsx`:  
```jsx  
function MeuComponente() {
  return <h1>Olá do React dentro do Streamlit! 🚀</h1>;
}

export default MeuComponente;
```
3. Agora, vamos transformar esse componente em um **componente do Streamlit**!  

---

## 📌 4. Integração com Streamlit usando streamlit-components  
### 🔹 Instalando a Biblioteca para Componentes Personalizados  
```sh  
pip install streamlit-components  
```

### 🔹 Criando um Componente Personalizado em React  
No React (`frontend/src/App.jsx`), modifique para permitir comunicação com Streamlit:  
```jsx  
import React from "react";
import { Streamlit, withStreamlitConnection } from "streamlit-component-lib";

function MeuComponente() {
  return (
    <div>
      <h1>Olá do React dentro do Streamlit! 🚀</h1>
      <button onClick={() => Streamlit.setComponentValue("Botão clicado!")}>  
        Clique Aqui  
      </button>
    </div>
  );
}

export default withStreamlitConnection(MeuComponente);
```
Isso permite que o React envie informações de volta para o Streamlit.

---

## 📌 5. Integrando com o Backend Streamlit  
### 🔹 Criando o Wrapper do Componente  
Crie um arquivo `meu_componente.py` no diretório `backend`:  
```python  
import streamlit.components.v1 as components

_meu_componente = components.declare_component(
    "meu_componente", path="./frontend/build"
)

def meu_componente():
    return _meu_componente()
```
Isso registra o React como um componente do Streamlit.

### 🔹 Usando o Componente no Streamlit  
No `app.py`, importe e use o componente:  
```python  
import streamlit as st
from meu_componente import meu_componente

st.title("Integração do Streamlit com React")
valor = meu_componente()

if valor:
    st.write(f"Usuário clicou e enviou: {valor}")
```

---

## 📌 6. Rodando a Aplicação  
### 🔹 **Build do React**  
No terminal, vá até `frontend/` e rode:  
```sh  
npm run build  
```
Isso gera os arquivos no diretório `frontend/build/`.  

### 🔹 **Executando o Streamlit**  
Volte para a raiz do projeto e execute:  
```sh  
streamlit run app.py  
```
Agora o React estará rodando dentro do Streamlit! 🎉  

---

## 🎯 **Conclusão**  
- O Streamlit permite criar aplicações rápidas com Python.  
- Podemos integrar React para componentes interativos e personalizados.  
- O `streamlit-components` facilita a comunicação entre o front-end React e o back-end Streamlit.  

📈 **Próxima etapa:** Criar componentes mais avançados, como gráficos interativos e dashboards! 🚀

