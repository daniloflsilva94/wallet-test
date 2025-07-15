# 💳 Wallet Test

Aplicação mobile para gerenciamento de cartões, desenvolvida com **React Native** e **Expo**, com foco em experiência animada, contexto global de dados e boas práticas de testes.

## 📱 Funcionalidades

- Visualização de uma pilha animada de cartões
- Seleção de cartão com animação e botão de ação
- Adição de novos cartões (mockado)
- Contexto global com `React Context API`
- Navegação entre telas com `React Navigation`
- Testes unitários de componentes e contexto
- Estilização com `styled-components`
- Animações com `react-native-reanimated`

---

## 🚀 Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/daniloflsilva94/wallet-test
cd wallet-test
```

### 2. Instale as dependências

```bash
yarn install
# ou
npm install
```

### 3. Inicie o projeto com Expo

```bash
yarn start
```

### 4. Inicie o servidor de API mockada (json-server)

A aplicação utiliza um servidor local para simular requisições de cartões.

```bash
yarn server
```

> Rode este comando em um terminal separado do que está rodando o Expo (`yarn start`).

Certifique-se de que o arquivo `db.json` esteja presente na raiz do projeto.

Após isso, você pode:

- 📱 **Escanear o QR Code com o app [Expo Go](https://expo.dev/client)** no seu dispositivo físico
- 🖥️ **Rodar em um emulador Android/iOS** com os comandos abaixo:

```bash
yarn android
# ou
yarn ios
```

---

## 🧪 Rodando os testes

A aplicação possui testes unitários para componentes, contexto e funcionalidades de UI.

```bash
yarn test
```

Testes cobrem:

- Componentes: `Input`, `Button`, `Card`, `Header`, `Container`
- Contexto `CardsProvider`: funções `save` e `get`
- Animações e interações da listagem dos `Cards`

---

## 🧱 Estrutura de pastas

```
src/
├── components/       # Componentes reutilizáveis
├── context/          # Contexto global
├── dto/              # Tipagem de dados
├── screens/          # Telas principais
├── services/         # API
├── styles/           # Estilos globais
├── theme/            # Temas e fontes
└── utils/            # Utilitários e test-utils
```

---

## 🧠 Tecnologias e libs principais

- **React Native** (via Expo)
- **TypeScript**
- **React Navigation**
- **Styled Components**
- **React Native Reanimated v2**
- **Jest** + **@testing-library/react-native**
- **Axios**
- **Expo Google Fonts**

---

## 👨‍💻 Sobre o autor

Desenvolvido por **Danilo Silva** — entre em contato pelo [LinkedIn](https://www.linkedin.com/in/danilo-flora-silva-4900b262/) ou veja mais projetos no [GitHub](https://github.com/daniloflsilva94).
