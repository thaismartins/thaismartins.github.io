const makers = [
  {
    title: 'Antes de TUDO',
    icon: 'shield.png',
    text:
      'Use Luvas e máscara para manusear as peças. Não ajude a espalhar mais a infecção.Caso tenha sintomas gripais, evite a fabricação.',
  },
  {
    title: 'Impressão 3D',
    icon: 'printer.png',
    text:
      'Resina de Modelo, Resina de Placa Miorelaxante ou Resina Biocompatível. As resinas biocompatíveis suportam melhor a desinfeção no Hospital.',
  },
  {
    title: 'Corte da Placa',
    icon: 'scissors.png',
    text:
      'O visor pode ser cortado no laser com PET/PETG, na plotter e na CNC com PVA/PET/PETG/PVC. O PET/PETG suporta melhor a desinfeção química no Hospital',
  },
  {
    title: 'Limpeza e Armazenamento',
    icon: 'bubble.png',
    text:
      'Lave as peças com água, sabão e cloro. Pode-se utilizar Álcool 70%. Guarde em um saco plástico transparente.',
  },
]

const hospitals = [
  {
    title: 'Antes de TUDO',
    icon: 'shield.png',
    text:
      'Desembale o kit e lave tudo com Solução Hipoclorito/Clorexidina. Limpar apenas com alcool 70% ou isopropilico não garante a desinfecção das microfissuras provenientes da impressão 3D.',
  },
  {
    title: 'Montagem',
    icon: 'puzzle.png',
    text:
      'Encaixe os clipes no oculos e a folha transparente nos clipes. Esse vídeo mostra como montar <a href="http://abre.ai/clip-trion" target="_blank">abre.ai/clip-trion</a>.',
  },
  {
    title: 'Reutilização',
    icon: 'plus.png',
    text:
      'O dispositivo deve ser obrigatóriamente higienizado a cada 12h. Após uso diário, limpe o conjunto com Solução Hipoclorito/Cloxedina. Evite utilizar só álcool.',
  },
  {
    title: 'Atenção',
    icon: 'attention.png',
    text:
      'Este equipamento destina-se exclusivamente para uso emergencial, podendo sofrer alterações durante a pandemia de COVID-19. É uma proteção de uso individual.',
  },
]

module.exports = {
  title: 'Trion Clip Shield',
  slug: 'trion',
  category: 'EPI',
  categoryType: 'epis',
  images: ['projects/trion/trion.jpg'],
  details:
    '<p>Este modelo esta sob estudo por nossa equipe multidisciplinar para reduzir o custo com material, com base nisso apresentamos aqui procedimentos de produção e limpeza, para utilização com segurança.</p>',
  procedures: {
    makers,
    hospitals,
  },
}
