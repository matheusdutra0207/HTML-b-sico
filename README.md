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
    <img src="images/firefox-icon.png" alt="minha página de teste" />
  </body>
</html>
```

1. ```<!DOCTYPE html>``` É a parte inicial obrigatória do documento.
2. ```<html></html>```  Esse elemento envolve todo o conteúdo da página e às vezes é conhecido como o elemento raiz.
3. ```<head></head>``` Elemento que age como um recipiente de tudo o que você deseja incluir em uma página HTML que não é o conteúdo que você quer mostrar para quem vê sua página. Isso inclui coisas como palavras-chave e uma descrição que você quer que apareça nos resultados de busca, CSS para dar estilo ao conteúdo, declarações de conjuntos de caracteres e etc.
4. ```<meta charset="utf-8">``` —  Elemento que define o conjunto de caracteres que seu documento deve usar para o UTF-8, que inclui praticamente todos os caracteres da grande maioria dos idiomas escritos.
5. ```<title></title>```  Define o título da sua página, que é o título que aparece na guia do navegador onde sua página é carregada. Ele também é usado para descrever a página quando você a adiciona aos favoritos.
6. ```<body></body>``` Contém todo o conteúdo que você quer mostrar ao público que visita sua página, seja texto, imagens, vídeos, jogos, faixas de áudio reproduzíveis ou qualquer outra coisa.

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
