## Aplicativo de Padaria

Este é um exemplo de um aplicativo React Native que simula um sistema de padaria, permitindo aos usuários visualizar uma lista de produtos disponíveis e adicionar itens ao carrinho de compras.

### Funcionalidades

O aplicativo possui as seguintes funcionalidades:

- Exibição de uma lista de produtos com seus nomes e preços.
- Adição de produtos ao carrinho de compras.
- Remoção de produtos do carrinho de compras.
- Cálculo do valor total dos itens no carrinho.

### Requisitos

Antes de executar o aplicativo, certifique-se de ter o ambiente de desenvolvimento React Native configurado e instalado em sua máquina. Além disso, será necessário ter o Node.js e o NPM (ou Yarn) instalados.

### Instalação

Siga as etapas abaixo para executar o aplicativo:

1. Clone o repositório para o seu ambiente local:

   ```
   git clone https://github.com/icaiow/trabalho_final.git
   ```

2. Acesse o diretório do projeto:

   ```
   cd nome-do-repositorio
   ```

3. Instale as dependências do projeto:

   ```
   npm install
   ```

   ou

   ```
   yarn install
   ```

4. Execute o aplicativo em um dispositivo ou emulador:

   ```
   npm start
   ```

   ou

   ```
   yarn start
   ```

   Este comando iniciará o servidor de desenvolvimento do React Native e abrirá o Metro Bundler no navegador.

5. Use um dispositivo ou emulador para rodar o aplicativo. Você pode escanear o código QR exibido no Metro Bundler usando o aplicativo Expo Go no seu dispositivo físico ou executar o aplicativo em um emulador.

### Estrutura do Projeto

O projeto está organizado da seguinte maneira:

- `src/Item.js`: Componente que representa um item de produto na lista.
- `src/ListaItem.js`: Componente que exibe a lista de produtos disponíveis e permite adicionar e remover itens do carrinho.
- `src/Cart.js`: Componente que exibe o carrinho de compras com os itens adicionados e o valor total.
- `App.js`: Componente principal do aplicativo que configura a navegação por abas usando o `react-navigation`.

### Tecnologias Utilizadas

- React Native
- React Navigation
- React Native Vector Icons

### Contribuindo

Contribuições são bem-vindas! Se você quiser contribuir com este projeto, sinta-se à vontade para enviar um pull request.

### Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
