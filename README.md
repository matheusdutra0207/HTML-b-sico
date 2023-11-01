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
