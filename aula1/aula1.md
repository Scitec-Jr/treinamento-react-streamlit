# Aula 1: Fundamentos do React.js

## ⏳ Duração: 1h  
## 🌟 Objetivo: Ensinar os conceitos básicos do React.js para que os participantes compreendam sua estrutura e funcionamento.

---

## 1⃣ Introdução ao React.js
### 📌 O que é React?
React.js é uma biblioteca JavaScript para construção de interfaces de usuário. Criado pelo Facebook, permite desenvolver aplicações de página única (SPAs) de maneira eficiente e modular.

### 📌 Vantagens do React:
- ✅ **Componentização** – Código modular e reutilizável  
- ✅ **Virtual DOM** – Renderização otimizada  
- ✅ **Unidirecionalidade dos dados** – Melhor controle do fluxo de dados  

---

## 2⃣ Criando um Projeto React
### 📂 Instalação do Node.js
Baixe e instale o Node.js: [https://nodejs.org/](https://nodejs.org/)

### 📂 Criando um projeto com Vite (recomendado)
```sh
npm create vite@latest meu-projeto --template react
cd meu-projeto
npm install
npm run dev
```
### 📂 Estrutura de Arquivos
```
/meu-projeto
 ├── /src
 │   ├── /components
 │   ├── App.jsx
 │   ├── main.jsx
 ├── index.html
 ├── package.json
```

---

## 3⃣ Conceitos Fundamentais
### 📌 Componentes e JSX
O React usa **JSX (JavaScript XML)**, que permite escrever HTML dentro do JavaScript.

**Exemplo de um componente simples:**
```jsx
function OlaMundo() {
  return <h1>Olá, mundo!</h1>;
}

export default OlaMundo;
```

Para usá-lo no `App.jsx`:
```jsx
import OlaMundo from "./OlaMundo";

function App() {
  return (
    <div>
      <OlaMundo />
    </div>
  );
}

export default App;
```

### 📌 Propriedades (Props)
Os **props** permitem passar dados entre componentes.

**Componente que recebe uma prop `nome`:**
```jsx
function Saudacao(props) {
  return <h1>Olá, {props.nome}!</h1>;
}
```
**Chamando o componente e passando a prop:**
```jsx
<Saudacao nome="João" />
```

### 📌 Estado (useState)
O estado permite que componentes mantenham e atualizem informações dinamicamente.

**Exemplo de contador simples usando `useState`:**
```jsx
import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Contagem: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}

export default Contador;
```

### 📌 Efeitos colaterais (useEffect)
O `useEffect` permite executar código quando o componente é renderizado ou quando alguma variável muda.

**Exemplo: Logando no console quando o contador muda**
```jsx
import { useState, useEffect } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("O contador mudou:", contador);
  }, [contador]);

  return (
    <div>
      <p>Contagem: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}

export default Contador;
```

---

## 4⃣ Eventos e Manipulação de Estado
### 📌 Eventos no React
Os eventos permitem interagir com os componentes.

**Exemplo: Manipulação de input**
```jsx
import { useState } from "react";

function Formulario() {
  const [nome, setNome] = useState("");

  return (
    <div>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <p>Você digitou: {nome}</p>
    </div>
  );
}

export default Formulario;
```

---

## 5⃣ Consumindo uma API Simples
Podemos buscar dados de uma API externa usando `fetch` ou `axios`.

**Exemplo: Buscando e exibindo usuários**
```jsx
import { useState, useEffect } from "react";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsuarios(data));
  }, []);

  return (
    <div>
      <h2>Usuários</h2>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>{usuario.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Usuarios;
```

---

## 🛠️ Atividade Prática
📌 **Criar um pequeno componente React que exibe dados de uma API pública**  
🔊 **Objetivo:** Criar um componente que busca e exibe dados de usuários.

Dicas:
- Usar `fetch` para buscar os dados
- Armazenar os dados no `useState`
- Exibir uma lista com os nomes dos usuários  

---

## 🌟 Conclusão
- React usa **componentes** e **estado** para criar interfaces dinâmicas.  
- O `useState` permite gerenciar estados internos.  
- O `useEffect` é útil para efeitos colaterais como chamadas de API.  

📌 **Próxima aula:** Integração do React com o Streamlit! 🚀

