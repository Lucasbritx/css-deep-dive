# Presentation: CSS Deep Dive
### TODO change to english
## Tokenização e CSSOM
Parseamento do CSS começa: Navegador lê o css e divide em tokens: seletores, propriedades, valores, chaves, etc. 
Esses tokens são transformados numa estrutura de árvore chamada CSSOM (CSS Object Model),
onde cada regra é um nó.
O CSSOM é separado do DOM, mas depois eles se cruzam para determinar como os estilos se aplicam aos elementos.

## Selector Matching e Style Resolution
Depois do CSSOM pronto, o navegador realiza o selector matching, percorrendo a árvore DOM e vendo quais seletores CSS se aplicam a cada elemento.

---> Falar sobre ‘selector specificity buckets’
---> Falar sobre style resolution, que é onde eh utilizado o resultado do selector matching

-> StyleContext no Gecko(Firefox) ou ComputedStyle - Blink(Chrome)

⸻---
-> Invalidation(Quando tem mudanças no Dom ou CSS pode invalidar os estilos), Render Tree(Combina o DOM com os estilos computados) e Layout(Calcula posições e tamanhos de cada elemento - expensive process) 


-> Paint(desenha cada box, texto, borda, shadow, imagem, etc.), Compositing e GPU
