# HTML Básico

1. O HTML é uma  linguagem de marcação de hipertexto, ou seja, é um código que você usa para estruturar uma página web e o seu conteúdo.

2. O HTML não é uma linguagem de programação; é uma linguagem de Marcação que é definida por tags.

## Anatomia de um elemento HTML

```HTML
<p> Eu gosto de HTMl </p>
```
1. ```<p>``` é a abertura da tag.

2. ```</p>``` Fechamento da tag.

3. O texto é o Elemento da tag.

### Aninhando elementos

```HTML
<p> Eu gosto <strong> muito </strong> de HTML. </p>
```

### Anatomia de um documento HTML

```HTML
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Minha página de teste</title>
  </head>
  <body>
    <img src="imagens/firefox-icon.png" alt="minha página de teste" />
  </body>
</html>
```

1. ```<!DOCTYPE html>```  É a parte inicial obrigatória do documento.
2. ```<html></html>```  Esse elemento envolve todo o conteúdo da página e às vezes é conhecido como o elemento raiz.
3. ```<head></head>```  Elemento que age como um recipiente de tudo o que você deseja incluir em uma página HTML que não é o conteúdo que você quer mostrar para quem vê sua página. Isso inclui coisas como palavras-chave e uma descrição que você quer que apareça nos resultados de busca, CSS para dar estilo ao conteúdo, declarações de conjuntos de caracteres e etc.
4. ```<meta charset="utf-8">```   Elemento que define o conjunto de caracteres que seu documento deve usar para o UTF-8, que inclui praticamente todos os caracteres da grande maioria dos idiomas escritos.
5. ```<title></title>```  Define o título da sua página, que é o título que aparece na guia do navegador onde sua página é carregada. Ele também é usado para descrever a página quando você a adiciona aos favoritos.
6. ```<body></body>```  Contém todo o conteúdo que você quer mostrar ao público que visita sua página, seja texto, imagens, vídeos, jogos, faixas de áudio reproduzíveis ou qualquer outra coisa.

## Marcadores

### Cabeçalhos

Os elementos de cabeçalhos permitem especificar que certas partes do seu conteúdo são títulos ou subtítulos.

``` HTML
<!-- 4 níveis de título -->
<h1>Meu título principal</h1>
<h2>Meu título de alto nível</h2>
<h3>Meu subtítulo</h3>
<h4>Meu segundo subtítulo</h4>
```

### Parágrafo

``` HTML
<p>Este é um parágrafo simples</p>
```

### Listas 

Muito do conteúdo da web é de listas e o HTML tem elementos especiais para elas. Listas de marcação sempre consistem em pelo menos 2 elementos. Os tipos mais comuns de lista são ordenadas e não ordenadas:

1. Listas não ordenadas são para listas onde a ordem dos itens não importa, como uma lista de compras, por exemplo. Essas são envolvidas em um elemento ```<ul>```.
2. Listas Ordenadas são para listas onde a ordem dos itens importa, como uma receita. Essas são envolvidas em um elemento ```<ol>```.
Cada item dentro das listas é posto dentro de um elemento ```<li>``` (item de lista).

Por exemplo, se nós quisermos tornar uma parte de um parágrafo numa lista:

```HTML
<p>Eu gosto de </p>

<ul>
  <li>Pizza</li>
  <li>Chocolate</li>
  <li>Comida japonesa</li>
</ul>

<p>Deu fome ...</p>

```

### Links
Links são muito importantes — eles são o que faz da web ser de fato uma REDE!
```HTML
<a href="https://www.google.com/search?q=um+cachorro&sca_esv=578502807&tbm=isch&sxsrf=AM9HkKk4o5BTREfHfUdickvEC0M5KzHgog:1698848952570&source=lnms&sa=X&ved=2ahUKEwil7eDCgaOCAxUbrpUCHUY6Dp4Q_AUoAXoECAMQAw&biw=1366&bih=619&dpr=1#imgrc=F-3KD-GXYHtdDM"
  >Um cachorro</a>
```

# O que é CSS?

CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em uma linguagem de marcação como HTML. O CSS separa o conteúdo da representação visual do site. Pense  na decoração da sua página. Utilizando o CSS é possível alterar a cor do texto e do fundo, fonte e espaçamento entre parágrafos. Também pode criar tabelas, usar variações de layouts, ajustar imagens para suas respectivas telas e assim por diante.

# CSS Básico

Ao adicionar a tag style comandos de CSS podem ser escritos em seu arquivo HTML.

```
<style>
p {
color: blue;
text-weight: bold;
}
<style>
```

Por exemplo, o comando abaixo alinha os conteúdos da tag p para o centro da tag body, atribui o tamanho da fonte para 16 px e muda a cor da fonte para rosa.

```
<style>
p {
 text-align: center;
 font-size: 16px;
 color: pink;
}
</style>

```

## A tag ```<div>``` 

O elemento de divisão ```<div>``` é um container genérico para conteúdo de fluxo, que de certa forma não representa nada.

```
<div>
  Eu estou dentro de uma div
</div>
```

## Classes no CSS

As classes são uma forma de identificar um grupo de elementos. Através delas, pode-se atribuir formatação a vários elementos de uma vez. O código a seguir cria uma classe que é atribuída a uma div.

```CSS
 .caixa_vermelha {
     width: 250px;
     height: 250px;
     background-color: red;
     border: 2px solid blueviolet; 
 }
```

```HTML
<div class="caixa_vermelha">
 Eu estou dentro da caixa vermelha
</div>
```

## Vamos praticar um pouco

```CSS
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        .container {
            font-family: arial;
            position: relative;
            font-size: 24px;
            width: 300px;
            height: 300px;
            outline: dashed 1px black;
            /* Center vertically and horizontally */
            /* justify-content: center;
            align-items: center; */
        }

        .caixa_vermelha1 {
            width: 50px;
            height: 50px;
            background-color: red;
            border: 2px solid blueviolet; 
            position: absolute;
            top: 0px;
            right: 0px;  
            display: flex; 
            justify-content: center;
            align-items: center;           
        }
        .caixa_vermelha2 {
            width: 48px;
            height: 48px;
            background-color: red;
            border: 1px solid blueviolet; 
            position: absolute;
            top:  26px;
            right: 220px; 
            display: flex;    
            justify-content: center;
            align-items: center;          
        }
        .caixa_vermelha3 {
            width: 50px;
            height: 50px;
            background-color: red;
            border: 2px solid blueviolet; 
            position: absolute;
            top:  125px;
            right: 125px;     
            display: flex;
            justify-content: center;
            align-items: center;   
                   
        }                
    </style>
    <title>Document</title>
</head>

<body>
    <div class="container">
        <div class="caixa_vermelha1"> Ok </div>
        <div class="caixa_vermelha2"> Ok </div>
        <div class="caixa_vermelha3"> Ok </div>
    </div>
</body>
</html>
```

# Atividades 

## Atividade 1

Faça uma página em HTML semelhante a da Figura abaixo. Para título, utilize a tag h1. 

<p align="center">
  <img src="https://github.com/matheusdutra0207/HTML-b-sico/blob/main/imagens/atv-1-html.PNG" width="200" title="prog 1 e 2">
</p>

## Atividade 2

Faça uma página semelhante a da Figura abaixo utilizando HTML e CSS.
<p align="center">
  <img src="https://github.com/matheusdutra0207/HTML-b-sico/blob/main/imagens/atv-1-CSS.PNG" width="500" title="prog 1 e 2">
</p>

