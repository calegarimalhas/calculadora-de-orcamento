/**
 * ============================================================================
 * TABELA DE PREÇOS E CONFIGURAÇÕES DA EMPRESA
 * ============================================================================
 * 
 * Para atualizar os preços quando a empresa aumentar os valores:
 * 1. Basta alterar o número correspondente (ex: trocar 17.00 por 18.00).
 * 2. Salve o arquivo e atualize a página no navegador!
 * 
 * Observação: use ponto (.) em vez de vírgula para centavos (ex: 19.50).
 */

const CONFIG_EMPRESA = {
  // Valor fixo da arte (sempre R$ 50,00)
  VALOR_ARTE_FIXO: 50.00,

  // Valores dos Opcionais / Extras (por peça)
  EXTRAS: {
    manga_unitaria: 5.00,  // R$ 5,00 por manga estampada
    gola_e_punho: 3.00,    // R$ 3,00 gola e punho colorida
    batida_extra: 4.00     // R$ 4,00 estampa extra / batida a mais
  },

  // --------------------------------------------------------------------------
  // TABELA 1: SUBLIMAÇÃO (Poliéster Claro)
  // --------------------------------------------------------------------------
  SUBLIMACAO: [
    {
      id: 'sub_pol_eucir',
      name: 'Pol Bco / Mescla Eucir (P ao GG)',
      detalhe: 'Camiseta Tradicional Eucir',
      categoria: 'tradicional',
      tag: 'Mais Popular',
      paleta: 'sublimacao',
      frente: 17.00,
      frente_costas: 18.00
    },
    {
      id: 'sub_pol_4k',
      name: 'Pol Mescla 4K (P ao GG)',
      detalhe: 'Camiseta Mescla Premium 4K',
      categoria: 'tradicional',
      tag: 'Premium 4K',
      paleta: 'sublimacao_mescla',
      frente: 25.00,
      frente_costas: 28.00
    },
    {
      id: 'sub_infantil_padrao',
      name: 'Infantil Pol Bco / Mescla',
      detalhe: 'Infantil Sublimação (-R$ 4)',
      categoria: 'infantil',
      tag: 'Infantil (-R$ 4)',
      paleta: 'sublimacao',
      frente: 13.00,
      frente_costas: 14.00
    },
    {
      id: 'sub_infantil_4k',
      name: 'Infantil Pol Mescla 4K',
      detalhe: 'Infantil Mescla 4K (-R$ 4)',
      categoria: 'infantil',
      tag: 'Infantil 4K',
      paleta: 'sublimacao_mescla',
      frente: 21.00,
      frente_costas: 24.00
    },
    {
      id: 'sub_manga_longa_eucir',
      name: 'Manga Longa Bco/Mescla Eucir',
      detalhe: 'Manga Longa P ao GG',
      categoria: 'manga_longa',
      tag: 'Manga Longa',
      paleta: 'sublimacao',
      frente: 28.00,
      frente_costas: 31.00
    },
    {
      id: 'sub_manga_longa_4k',
      name: 'Manga Longa Mescla 4K',
      detalhe: 'Manga Longa 4K P ao GG',
      categoria: 'manga_longa',
      tag: 'Manga Longa 4K',
      paleta: 'sublimacao_mescla',
      frente: 31.00,
      frente_costas: 35.00
    },
    {
      id: 'sub_xg_branca_4k',
      name: 'Pol XG Branca 4K',
      detalhe: 'Plus Size XG Branca',
      categoria: 'xg',
      tag: 'Plus Size XG',
      paleta: 'sublimacao_branca',
      frente: 34.00,
      frente_costas: 36.00
    },
    {
      id: 'sub_xg_mescla_4k',
      name: 'Pol XG Mescla 4K',
      detalhe: 'Plus Size XG Mescla',
      categoria: 'xg',
      tag: 'Plus Size XG',
      paleta: 'sublimacao_mescla',
      frente: 47.00,
      frente_costas: 49.00
    },
    {
      id: 'sub_manga_longa_xg_branca_4k',
      name: 'Manga Longa Branca XG 4K',
      detalhe: 'Manga Longa Plus Size Branca',
      categoria: 'xg',
      tag: 'Manga Longa XG',
      paleta: 'sublimacao_branca',
      frente: 47.00,
      frente_costas: 50.00
    },
    {
      id: 'sub_manga_longa_xg_mescla_4k',
      name: 'Manga Longa Mescla XG 4K',
      detalhe: 'Manga Longa Plus Size Mescla',
      categoria: 'xg',
      tag: 'Manga Longa XG',
      paleta: 'sublimacao_mescla',
      frente: 65.00,
      frente_costas: 67.00
    }
  ],

  // --------------------------------------------------------------------------
  // TABELA 2: DTF DIGITAL (Algodão, Cores Escuras e Diversos)
  // --------------------------------------------------------------------------
  DTF: [
    {
      id: 'dtf_pol_eucir',
      name: 'Colorida Eucir (P ao GG)',
      detalhe: 'Poliéster Cores Eucir Adulta',
      categoria: 'tradicional',
      tag: 'Camiseta Eucir',
      paleta: 'dtf_eucir',
      A4_frente: 25.00,
      A4_frente_costas: 33.00,
      A3_frente: 32.00,
      A3_frente_costas: 42.00
    },
    {
      id: 'dtf_viscolycra_baby',
      name: 'Baby Visco (Feminina)',
      detalhe: 'Baby Look Viscolycra P ao GG',
      categoria: 'baby_look',
      tag: 'Baby Look',
      paleta: 'dtf_baby_look',
      A4_frente: 30.00,
      A4_frente_costas: 40.00,
      A3_frente: 42.00,
      A3_frente_costas: 52.00
    },
    {
      id: 'dtf_pol_4k',
      name: 'Colorida 4K (P ao GG)',
      detalhe: 'Poliéster Cores 4K Adulto',
      categoria: 'tradicional',
      tag: 'Camiseta 4K',
      paleta: 'dtf_4k',
      A4_frente: 28.00,
      A4_frente_costas: 38.00,
      A3_frente: 40.00,
      A3_frente_costas: 50.00
    },
    {
      id: 'dtf_algodao_4k',
      name: 'Colorida Algodão (P ao GG)',
      detalhe: '100% Algodão Cores 4K Adulto',
      categoria: 'tradicional',
      tag: '100% Algodão',
      paleta: 'dtf_algodao',
      A4_frente: 32.00,
      A4_frente_costas: 42.00,
      A3_frente: 45.00,
      A3_frente_costas: 55.00
    },
    {
      id: 'dtf_infantil',
      name: 'Colorida Infantil 4K',
      detalhe: 'Infantil P ao GG • Base A4 4K (-R$ 5)',
      categoria: 'infantil',
      tag: 'Infantil 4K (Só A4)',
      paleta: 'dtf_infantil',
      apenasA4: true,
      A4_frente: 23.00,        // 28.00 (4K A4 Só Frente) - 5.00
      A4_frente_costas: 33.00, // 38.00 (4K A4 Frente e Costas) - 5.00
      A3_frente: 23.00,        // Não faz A3 no Infantil -> mantém base A4 (23.00)
      A3_frente_costas: 33.00  // Não faz A3 no Infantil -> mantém base A4 (33.00)
    },
    {
      id: 'dtf_pol_xg_4k',
      name: 'Colorida XG 4K',
      detalhe: 'Plus Size XG Poliéster 4K',
      categoria: 'xg',
      tag: 'Plus Size XG',
      paleta: 'dtf_4k',
      A4_frente: 44.00,
      A4_frente_costas: 54.00,
      A3_frente: 55.00,
      A3_frente_costas: 65.00
    },
    {
      id: 'dtf_algodao_xg_4k',
      name: 'Colorida XG Algodão',
      detalhe: 'Plus Size XG 100% Algodão 4K',
      categoria: 'xg',
      tag: 'Plus Size XG Algodão',
      paleta: 'dtf_algodao',
      A4_frente: 54.00,
      A4_frente_costas: 68.00,
      A3_frente: 65.00,
      A3_frente_costas: 75.00
    }
  ],

  // --------------------------------------------------------------------------
  // CATÁLOGO OFICIAL DE CORES (FIEL À TABELA DA EMPRESA)
  // --------------------------------------------------------------------------
  PALETAS_CORES: {
    // DTF CORES EUCIR ADULTA
    dtf_eucir: {
      titulo: 'DTF Cores Eucir Adulta',
      cores: [
        { name: 'Preto', bg: '#000000', text: '#ffffff' },
        { name: 'Vermelho', bg: '#e01e2b', text: '#ffffff' },
        { name: 'Royal', bg: '#1842b6', text: '#ffffff' },
        { name: 'Marinho', bg: '#060b61', text: '#ffffff' },
        { name: 'Mescla', bg: '#9fa2a6', text: '#ffffff' },
        { name: 'Branco', bg: '#ffffff', text: '#1e293b', border: true }
      ]
    },

    // DTF CORES BABY LOOK VISCOLYCRA
    dtf_baby_look: {
      titulo: 'DTF Cores Baby Look Viscolycra',
      cores: [
        { name: 'Preto', bg: '#000000', text: '#ffffff' },
        { name: 'Marinho', bg: '#060b61', text: '#ffffff' },
        { name: 'Vinho', bg: '#671b26', text: '#ffffff' },
        { name: 'Mescla', bg: '#9fa2a6', text: '#ffffff' },
        { name: 'Pink', bg: '#f5127e', text: '#ffffff' },
        { name: 'Branco', bg: '#ffffff', text: '#1e293b', border: true }
      ]
    },

    // DTF CORES INFANTIL
    dtf_infantil: {
      titulo: 'DTF Cores Infantil',
      cores: [
        { name: 'Preto', bg: '#000000', text: '#ffffff' },
        { name: 'Azul Turquesa', bg: '#26d6cc', text: '#042f2e' },
        { name: 'Rosa Chiclete', bg: '#fa9eb2', text: '#ffffff' },
        { name: 'Rosa Bebê', bg: '#f8bfca', text: '#701a28' },
        { name: 'Azul Bebê', bg: '#84c2f1', text: '#0c2e60' },
        { name: 'Mescla', bg: '#9fa2a6', text: '#ffffff' },
        { name: 'Amarelo', bg: '#f5c907', text: '#533f03' },
        { name: 'Lilás', bg: '#be93c7', text: '#3b0764' },
        { name: 'Laranja', bg: '#ef8508', text: '#ffffff' },
        { name: 'Vermelho', bg: '#e01e2b', text: '#ffffff' },
        { name: 'Azul Royal', bg: '#1842b6', text: '#ffffff' },
        { name: 'Azul Marinho', bg: '#060b61', text: '#ffffff' },
        { name: 'Verde Bandeira', bg: '#068636', text: '#ffffff' }
      ]
    },

    // DTF CORES 4K ADULTO
    dtf_4k: {
      titulo: 'DTF Cores 4K Adulto',
      cores: [
        { name: 'Preto', bg: '#000000', text: '#ffffff' },
        { name: 'Azul Turquesa', bg: '#26d6cc', text: '#042f2e' },
        { name: 'Rosa Chiclete', bg: '#fa9eb2', text: '#ffffff' },
        { name: 'Rosa Bebê', bg: '#f8bfca', text: '#701a28' },
        { name: 'Azul Bebê', bg: '#84c2f1', text: '#0c2e60' },
        { name: 'Mescla', bg: '#9fa2a6', text: '#ffffff' },
        { name: 'Amarelo', bg: '#f5c907', text: '#533f03' },
        { name: 'Lilás', bg: '#be93c7', text: '#3b0764' },
        { name: 'Laranja', bg: '#ef8508', text: '#ffffff' },
        { name: 'Vermelho', bg: '#e01e2b', text: '#ffffff' },
        { name: 'Azul Royal', bg: '#1842b6', text: '#ffffff' },
        { name: 'Azul Marinho', bg: '#060b61', text: '#ffffff' },
        { name: 'Verde Bandeira', bg: '#068636', text: '#ffffff' }
      ]
    },

    // DTF CORES ALGODÃO ADULTO
    dtf_algodao: {
      titulo: 'DTF Cores Algodão Adulto',
      cores: [
        { name: 'Preto', bg: '#000000', text: '#ffffff' },
        { name: 'Vermelho', bg: '#e01e2b', text: '#ffffff' },
        { name: 'Royal', bg: '#1842b6', text: '#ffffff' },
        { name: 'Marinho', bg: '#060b61', text: '#ffffff' },
        { name: 'Pink', bg: '#f5127e', text: '#ffffff' },
        { name: 'Branco', bg: '#ffffff', text: '#1e293b', border: true }
      ]
    },

    // SUBLIMAÇÃO (Branco e Mescla)
    sublimacao: {
      titulo: 'Cores Sublimação (Branco / Mescla)',
      cores: [
        { name: 'Branco', bg: '#ffffff', text: '#1e293b', border: true },
        { name: 'Mescla', bg: '#9fa2a6', text: '#ffffff' }
      ]
    },
    sublimacao_branca: {
      titulo: 'Cor Sublimação (Branca)',
      cores: [
        { name: 'Branco', bg: '#ffffff', text: '#1e293b', border: true }
      ]
    },
    sublimacao_mescla: {
      titulo: 'Cor Sublimação (Mescla)',
      cores: [
        { name: 'Mescla', bg: '#9fa2a6', text: '#ffffff' }
      ]
    }
  }
};

// Exporta globalmente para o navegador ou Node
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG_EMPRESA;
}
