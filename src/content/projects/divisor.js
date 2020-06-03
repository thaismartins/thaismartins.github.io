const details = `
  <p>Este modelo esta sendo estudado e otimizado por nossa equipe multidisciplinar, com base nisso apresentamos aqui procedimentos de produção e limpeza, para utilização com segurança.</p>

  <p>Os adaptadores permitem que dois, três ou quatro pacientes usem um ventilador.</p>

  <p>O Laboratório de Design e Inovação 3D da Northwell Health desenvolveu modelos que permitem a colocação de um filtro HEPA.</p>

  <p>Os divisores do ventilador devem ser considerados apenas como último recurso e com as devidas proteções. Várias associações médicas desencorajaram o uso de divisores de ventilação.</p>

  <p>DOI: <a href='https://onlinelibrary.wiley.com/doi/epdf/10.1197/j.aem.2006.05.009' target='blank'>10.1197/j.aem.2006.05.009</a></p>
`

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
  title: 'Divisor de Ventilador',
  slug: 'divisor',
  category: 'Dispositivos',
  categoryType: 'dispositivos',
  images: ['projects/divisor-ventilador/divisor.jpg'],
  details,
  technology: 'Impressão 3D DLP ou SLA',
  materials: 'Resina para Guia Cirúrgica',
  downloads: ['abre.ai/brcv-divisor'],
  designers: 'Northwell Health',
  procedures: {
    makers,
    hospitals,
  },
}
