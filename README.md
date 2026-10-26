# Calculadora de Orçamento para Camisetas & Estamparia

Um webapp moderno, direto ao ponto e ultra intuitivo para cálculo de orçamentos de camisetas personalizadas (**Sublimação** e **DTF Digital**), com **Seleção de Múltiplos Modelos no Mesmo Pedido**, **Grade de Tamanhos**, **Paleta Oficial de Cores por Modelo**, **Geração de Relatório em PDF/Imagem** e **Instalação como Aplicativo no Android (PWA)**.

---

## 🚀 Como Abrir e Usar

1. **Abra o arquivo `index.html`**:
   - Dê um duplo clique no arquivo [`index.html`](file:///d:/downloads/calculadora%20de%20orçamento/index.html) para abrir em qualquer navegador (Chrome, Edge, celular, etc.).
   - Funciona 100% offline para os cálculos, sem precisar instalar servidor!

2. **Para atualizar os preços da empresa**:
   - Clique no botão **`Ajustar Preços`** no topo da tela e salve na hora; **ou**
   - Abra o arquivo [`tabela-precos.js`](file:///d:/downloads/calculadora%20de%20orçamento/tabela-precos.js) no Bloco de Notas e altere os valores numéricos.

---

## 📲 Instalação como Aplicativo no Android / Celular (PWA)

O sistema conta com suporte completo a **PWA (Progressive Web App)** ([`manifest.json`](file:///d:/downloads/calculadora%20de%20orçamento/manifest.json) + [`sw.js`](file:///d:/downloads/calculadora%20de%20orçamento/sw.js) + ícones [`icon-192.png`](file:///d:/downloads/calculadora%20de%20orçamento/icon-192.png) e [`icon-512.png`](file:///d:/downloads/calculadora%20de%20orçamento/icon-512.png)):

1. **Botão "Instalar App" no Topo da Tela:**
   - Ao abrir o sistema no Chrome do Android (hospedado gratuitamente em qualquer link como Netlify Drop, GitHub Pages ou Vercel), basta tocar no botão verde **`Instalar App`** no cabeçalho para instalar direto na tela inicial.
2. **Abre em Tela Cheia e Funciona Offline:**
   - Depois de instalado no Android, ele ganha ícone próprio na tela inicial e na gaveta de aplicativos, abre em tela cheia (sem barra de endereço do navegador) e funciona mesmo sem internet.

---

## 👕 Múltiplos Tipos de Camiseta no Mesmo Pedido

No **Passo 4 (Modelos de Camiseta no Pedido)**, você pode marcar **1 ou vários modelos ao mesmo tempo** (por exemplo: **Camiseta Adulto + Baby Visco + Plus Size XG + Infantil** juntos):

- **Passo 5 Inteligente:** Para cada modelo marcado, abre-se um card próprio onde você define:
  - A **quantidade rápida** daquele modelo (ou separada por tamanho **P, M, G, GG**);
  - As **cores oficiais exclusivas** daquela malha (ex: *Vinho* e *Pink* na Baby Look Viscolycra, *Azul Turquesa* na Infantil, etc.);
  - Observações opcionais de divisão (ex: `3 Pretas M, 2 Pink G`).
- **Diluição Automática da Arte Fixa (`R$ 50,00`):**
  - O valor fixo da arte de `R$ 50,00` é **dividido pela soma total de todas as peças** de todos os modelos combinados no pedido (`50 ÷ Total Geral de Peças`), calculando o preço unitário exato e o subtotal de cada tipo de camiseta!
- **Regra Automática da Infantil no DTF (Sempre Base A4 4K `- R$ 5,00`):**
  - Não existe Infantil Eucir. No DTF existe apenas a **Colorida Infantil 4K** (`R$ 23,00` Só Frente e `R$ 33,00` Frente e Costas).
  - Mesmo quando o cliente seleciona **Formato A3** para as peças adultas do pedido, o sistema mantém automaticamente o cálculo da **Infantil DTF na base A4** (`R$ 23,00` / `R$ 33,00` + arte diluída) e sinaliza isso de forma clara na tela, no WhatsApp e no relatório PDF/PNG.

---

## 🎨 Paletas Oficiais de Cores Integradas (DTF e Sublimação)

Cada modelo selecionado exibe apenas as cores reais disponíveis na sua respectiva tabela oficial:

1. **DTF Cores Eucir Adulta:**
   - Preto, Vermelho, Royal, Marinho, Mescla, Branco
2. **DTF Cores Baby Look Viscolycra:**
   - Preto, Marinho, Vinho, Mescla, Pink, Branco
3. **DTF Cores Infantil (4K):**
   - Preto, Azul Turquesa, Rosa Chiclete, Rosa Bebê, Azul Bebê, Mescla, Amarelo, Lilás, Laranja, Vermelho, Azul Royal, Azul Marinho, Verde Bandeira
4. **DTF Cores 4K Adulto (e XG 4K):**
   - Preto, Azul Turquesa, Rosa Chiclete, Rosa Bebê, Azul Bebê, Mescla, Amarelo, Lilás, Laranja, Vermelho, Azul Royal, Azul Marinho, Verde Bandeira
5. **DTF Cores Algodão Adulto (e XG Algodão):**
   - Preto, Vermelho, Royal, Marinho, Pink, Branco
6. **Sublimação:**
   - Branco e/ou Mescla (conforme o modelo)

---

## 📄 Geração de Relatório (PDF / Imagem) & WhatsApp

- **Copiar Texto para WhatsApp:** Gera a mensagem pronta listando cada modelo do pedido com suas respectivas quantidades, tamanhos, cores, valor unitário e subtotal.
- **Gerar Relatório (`PDF / Imagem PNG`):** Monta o orçamento comercial completo com tabela discriminada por modelo, bolinhas coloridas das cores escolhidas, dados do cliente e total geral, pronto para imprimir em PDF A4 ou baixar como imagem PNG de alta definição.
