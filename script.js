/* Estilos para dispositivos com largura máxima de 768px (tablets em modo retrato e smartphones) */
@media(max-width: 768px) {
    /* Seus estilos específicos para dispositivos móveis aqui */
    .container {
        flex-direction: column; /* Altera a direção do flex container para coluna */
    }
    .section1,
    .section2 {
        width: 100%; /* Define a largura das seções para 100% para ocupar toda a largura do dispositivo */
    }
    /* Adicione mais estilos conforme necessário */
}

/* Reset de estilos */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --gradient1: linear-gradient(45deg,#3460d8,#25d18f,#39b9af,#461673);
    --gradient2: linear-gradient(65deg, #833ab4, #fd1d1d, #fcb045, #3f5efb, #fc466b);
    --gradient3: linear-gradient(65deg, #FFFFFF, #d1d1d1, #9b9b9b, #414141, #141414);
}

/* Estilo básico do corpo */
body {
    font-family: sans-serif;
    line-height: 1.5;
    font-weight: 525;
    background-image: var(--gradientbody);
    background-size: 500% 100%;
    animation: gradientAnimation 10s linear infinite alternate;
    color: #333;
    margin: 0;
    padding: 0;
}

/* Estilo do cabeçalho */
header {
    background: #333;
    color: #fff;
    padding: 20px;
    text-align: center;
}

header h1 {
    margin-bottom: 10px;
}

/* Estilo da navegação */
nav ul {
    list-style: none;
}

nav ul li {
    display: inline;
    margin-right: 20px;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
}
/*CONTAINER 1*/
.container1 {
    display: flex;
    background-image: var(--gradient1);
    background-size: 500% 100%;
    /*border: 10px double #eeeeee; se fundionar eu reativo*/
    background-position: left;
    transition: background-position 1.5s;
    align-items: center;
    justify-content: center;
    padding-bottom: 20px;
    border-bottom: 10px solid #d8d8d8;
}

.container1:hover {
    background-position: right;
}

/*CONTAINER 2*/

.container2 {
    display: flex;
    background-image: var(--gradient3);
    background-size: 500% 100%;
    /*border: 10px double #eeeeee; se fundionar eu reativo*/
    background-position: right;
    transition: background-position 1.5s;
    align-items: center;
    justify-content: center;
    padding-bottom: 20px;
    border-bottom: 10px solid #d8d8d8;
}

.container2:hover {
    background-position: left;
}

.section1 {
    width: 50%;
    padding: 50px;
    position: relative;
    justify-content: center;
}

.section1::before {
    content: "";
    position: absolute;
    transition-duration: 2s;
    width: calc(100% - 40px); /* Largura igual à largura da seção - o dobro do espaçamento */
    height: calc(100% - 40px); /* Altura igual à altura da seção - o dobro do espaçamento */
    border: 5px solid #d8d8d8; /* Adicionando uma borda de 2px */
    box-sizing: border-box; /* Mantendo a largura e altura conforme definido */
    transform: translate(-30px,-20px); /* Movendo o retângulo para o centro */
}

.section1:hover:before {
    content: "";
    position: absolute;
    width: calc(100% - 40px); /* Largura igual à largura da seção - o dobro do espaçamento */
    height: calc(100% - 40px); /* Altura igual à altura da seção - o dobro do espaçamento */
    border: 5px solid #191335; /* Adicionando uma borda de 2px */
    box-sizing: border-box; /* Mantendo a largura e altura conforme definido */
    transform: translate(-30px,-20px); /* Movendo o retângulo para o centro */
}

/* Estilos adicionais para cada section, se necessário */


.section1:hover, 
.section1:focus {
    background-position: right;
}

.section1 h1 {
    text-align: justify;
    color:#191335;
    font-size: 400%;
  background-image:linear-gradient(to right, #191335, #191335, #e4e4e4, #d8d8d8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 300% 100%;
  background-position: top left;
  transition:all 1s ease-in-out;
}

.section1 p,h2 {
    text-align: justify;
    color:#191335;
  background-image:linear-gradient(to right, #191335, #191335, #e4e4e4, #d8d8d8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 300% 100%;
  background-position: top left;
  transition:all 1s ease-in-out;
}

.section1:hover p {
    background-position: top left 100%;
}

.section1:hover h1 {
    background-position: top left 100%;
}

.section1:hover h2 {
    background-position: top left 100%;
}

@keyframes gradientAnimation {
    0% {
        background-position: 0% 50%;
        /* Inicia o degradê a partir da esquerda */
    }
    100% {
        background-position: 100% 50%;
        /* Termina o degradê na direita */
    }
}

.section2 {
    width: 50%;
    padding: 50px;
    position: relative;
    justify-content: center;
}

.section2::before {
    content: "";
    position: absolute;
    transition-duration: 2s;
    width: calc(100% - 40px); /* Largura igual à largura da seção - o dobro do espaçamento */
    height: calc(100% - 40px); /* Altura igual à altura da seção - o dobro do espaçamento */
    border: 5px solid #d8d8d8; /* Adicionando uma borda de 2px */
    box-sizing: border-box; /* Mantendo a largura e altura conforme definido */
    transform: translate(-30px,-20px); /* Movendo o retângulo para o centro */
}

.section2:hover:before {
    content: "";
    position: absolute;
    width: calc(100% - 40px); /* Largura igual à largura da seção - o dobro do espaçamento */
    height: calc(100% - 40px); /* Altura igual à altura da seção - o dobro do espaçamento */
    border: 5px solid #191335; /* Adicionando uma borda de 2px */
    box-sizing: border-box; /* Mantendo a largura e altura conforme definido */
    transform: translate(-30px,-20px); /* Movendo o retângulo para o centro */
}

/* Estilos adicionais para cada section, se necessário */


.section2:hover, 
.section2:focus {
    background-position: right;
}

.section2 p,h2,a {
    text-align: justify;
    color:#191335;
  background-image:linear-gradient(to left, #191335, #191335, #e4e4e4, #d8d8d8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 300% 100%;
  background-position: top left;
  transition:all 1s ease-in-out;
}

.section2:hover p {
    background-position: top left 100%;
}

.section2:hover h2 {
    background-position: top left 100%;
}

.section2:hover a {
    background-position: top left 100%;
}

a {
    text-decoration: none; /* Removendo sublinhado padrão */    
    position: relative; /* Posição relativa para que o ícone possa ser posicionado */
}

a span:hover {
    cursor: pointer; /* Mudando o cursor para mão ao passar o mouse */
}

/* Adicionando o ícone de mão apenas para a palavra "clique" */
a span:hover::after {
    content: "\261B"; /* Código Unicode para o ícone de mão */
    position: absolute; /* Posição absoluta para que o ícone seja posicionado em relação ao link */
    margin-left: 5px; /* Espaçamento entre o texto e o ícone */
}

.section h2 {
    margin-bottom: 10px;
}

/* Estilo do rodapé */
footer {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 20px;
}
