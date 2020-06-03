const makers = [
  {
    title: 'Antes de TUDO',
    icon: 'shield.png',
    text:
      'Use luvas e máscara para manusear as peças. Não ajude a espalhar mais a infecção. Caso tenha sintomas gripais, evite a fabricação.',
  },
  {
    title: 'Impressão 3D',
    icon: 'printer.png',
    text:
      'Utilize resina biocompatível para guia cirurgica com registro na ANVISA Classe I ou II, que comporte o processo de autoclave. Além da biocompatibilidade, essa processo permite estanquiedade',
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
      'Desembale o kit e limpe em processo de autoclave à 120 °C, també pode ser higienizado com Solução Hipoclorito/Cloxedina.',
  },
  {
    title: 'Reutilização',
    icon: 'plus.png',
    text:
      'O dispositivo deve ser obrigatóriamente higienizado. Pode-se utilizar autoclave ou Solução Hipoclorito/Cloxedina.',
  },
  {
    title: 'Atenção',
    icon: 'attention.png',
    text:
      'Este equipamento destina-se exclusivamente para uso emergencial, podendo sofrer alterações durante a pandemia de COVID-19.',
  },
]

module.exports = {
  title: 'Videolaringoscópio',
  slug: 'videolaringoscopio',
  category: 'Manutenção',
  categoryType: 'manutencao',
  images: [
    'projects/videolaringoscopio/videolaringo.jpg',
    'projects/videolaringoscopio/videolaringo-2.jpg',
  ],
  technology: 'Impressão 3D DLP ou SLA',
  materials: 'Resina para Guia Cirúrgica',
  downloads: ['http://abre.ai/brcv-videolaringo'],
  designers: 'Air Angel',
  details:
    '<p>Este modelo esta sendo estudado e otimizado por nossa equipe multidisciplinar, com base nisso apresentamos aqui procedimentos de produção e limpeza, para utilização com segurança.</p>',
  procedures: {
    makers,
    hospitals,
  },
}
