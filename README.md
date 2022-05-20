# Projeto Capitulo 9 

Desafio para entregar do curso Bootcamp React 3.0 - Cap. 9

TAREFA: MovieFlix front inicial

Construa um pequeno app conforme design Figma e os requisitos abaixo. Assista o vídeo explicativo.

Design Figma
https://www.figma.com/file/Yul1TnqQXmBsLwm5h5nvJu/MovieFlix-front-inicial


# Requisitos

Ao acessar a rota raiz do app, deverá aparecer uma tela de login.

Ao fazer login com sucesso, o usuário deverá ser redirecionado para a rota /movies que corresponde à tela de listagem de filmes.

Durante todo o tempo em que o usuário estiver logado, deverá aparecer na barra de navegação um botão “Sair” que deverá realizar o logout do usuário e redirecioná-lo para a tela de login.

A tela de listagem de filmes deve exibir apenas um título, e dois links para os detalhes dos filmes de código 1 e 2 respectivamente.

Ao clicar em um dos links dos detalhes do filme, o usuário deve ser levado para a rota /movies/:movieId, que corresponde à tela de detalhes do filme.

Na tela de detalhes do filme, caso o usuário possua o perfil MEMBER, deve ser exibido um card com um formulário para que o usuário possa entrar com uma avaliação do filme. Se o usuário não possuir o perfil de MEMBER, este card não deve ser exibido.

Na tela de detalhes do filme, abaixo do card de formulário, deve aparecer um outro card com uma listagem de TODAS avaliações daquele filme (não esqueça o atributo “key” em cada item renderizado). Quando um usuário MEMBER informar com sucesso uma nova avaliação, esta listagem deve ser atualizada.

As telas listagem de filmes e detalhes do filme devem ser rotas protegidas. Se o usuário não autenticado tentar acessar diretamente essas rotas, ele deve ser redirecionado para a tela de login. 