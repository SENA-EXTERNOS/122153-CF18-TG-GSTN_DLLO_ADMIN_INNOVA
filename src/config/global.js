export default {
  global: {
    componenteFormativo: 'Etapas del desarrollo de documentos organizacionales',
    descripcionCurso:
      'La elaboración de documentos en una organización, comprende la utilización de una serie de elementos técnicos y normativos que, aunados a los protocolos, la imagen, estilo y logotipos de la entidad, promueven la gestión documental y de información, optimizando el desempeño de los funcionarios en cumplimiento de las funciones de los diferentes cargos y contribuyendo al logro de los objetivos organizacionales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Documentos organizacionales',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Desarrollo de documentos organizacionales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Redacción de documentos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Gestión documental',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Mejoramiento continuo',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Desarrollo de documentos organizacionales',
      referencia:
        'Danna V. (2017). <em>Acuerdo 060 de 2001</em> (video). YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=rRqdPbGdmyE',
    },
    {
      tema: 'Redacción de documentos',
      referencia:
        'Doctora Sonia Gómez. (2019).<em> Redacción de documentos en la empresa: Carta Comercial</em> (video). YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=JAXK6lzmRZ0 ',
    },
    {
      tema: 'Redacción de documentos',
      referencia:
        'Uribe, S. (2015).<em> Redacción, puntuación y ortografía </em>(video). YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=O3gTz0Ir3rI',
    },
    {
      tema: 'Mejoramiento continuo',
      referencia:
        'Escuela Europea de Excelencia. (2020). <em>10 técnicas de análisis de causa raíz de los desperdicios de la calidad para eliminarlos.</em>',
      tipo: 'Artículo',
      link:
        'https://www.nueva-iso-9001-2015.com/2020/05/10-tecnicas-de-analisis-de-causa-raiz-de-los-desperdicios-de-la-calidad-para-eliminarlos/ ',
    },
  ],
  glosario: [
    {
      termino: 'Actas',
      significado:
        'donde se registra lo tratado en una reunión o situación específica. Son documentos que adquieren valor administrativo, legal, jurídico e histórico, desde el momento de su creación. ',
    },
    {
      termino: 'Análisis de causa',
      significado:
        'técnica para identificación de la raíz de los problemas, los cuales pueden darse en las no conformidades detectadas.',
    },
    {
      termino: 'Circulares',
      significado:
        'comunicaciones escritas de interés común, se utiliza para informar disposiciones, normas, lineamientos y políticas.',
    },
    {
      termino: 'Constancia',
      significado:
        'documento de carácter probatorio, que no requiere solemnidad, puede ser personal. ',
    },
    {
      termino: 'Correspondencia',
      significado:
        'son todas las comunicaciones de carácter privado que llegan a las entidades, a título personal, citando o no el cargo del funcionario. No generan trámites para las instituciones. ',
    },
    {
      termino: 'Documento',
      significado:
        'objeto corporal producto de la actividad humana, que sirve de fuente de conocimiento y que demuestra o prueba algo, establecido en un soporte perdurable que contiene información.',
    },
    {
      termino: 'Documento organizacional',
      significado:
        'es el producto técnico, que permite evidenciar las diferentes actividades en razón a las funciones de la organización, soportado en diferentes tipos documentales, determinando diligencias administrativas enmarcadas en la planificación, ejecución y evaluación de la gestión de una entidad.',
    },
    {
      termino: 'Documento público',
      significado:
        'es el producido o tramitado por el funcionario público en ejercicio de su cargo, o con su intervención.',
    },
    {
      termino: 'Mensajes electrónicos',
      significado:
        'sistema que permite intercambiar información con uno o más usuarios de cualquier lugar del mundo, a través de la Internet.',
    },
    {
      termino: 'No conformidad',
      significado:
        'falla, error, incumplimiento en alguna de las actividades que se gestiona en un proceso que alimenta un sistema.',
    },
  ],
  referencias: [
    {
      referencia:
        'Archivo General de la Nación. (s.f).<em> Procesos de la gestión documental</em>',
      link: 'https://www.archivogeneral.gov.co/Politica/procesos',
    },
    {
      referencia:
        'ICONTEC. (1994).<em> Norma Técnica Colombiana NTC 1075 - Documentación guía para numeración de divisiones y subdivisiones en documentos escritos.</em> ',
      link: 'https://pdfslide.net/documents/ntc-1075.html ',
    },
    {
      referencia:
        'ICONTEC. (1998).<em> Norma Técnica Colombiana NTC 4436 - Información y documentación. Papel para documentos de archivo. Requisitos para la permanencia y la durabilidad.</em> ',
      link:
        'https://tecarchivos.files.wordpress.com/2012/02/ntc-4436-papeles1.pdf',
    },
    {
      referencia:
        'ICONTEC. (2008).<em> Norma Técnica Colombiana NTC 1486 – Documentación. Presentación de tesis, trabajos de grado y otros trabajos de investigación.</em> ',
      link:
        'https://academia.utp.edu.co/seminario-investigacion-II/files/2017/03/Norma_Tecnica_Colombiana_NTC_1486_completa_archivo.pdf ',
    },
    {
      referencia:
        'ICONTEC. (2008).<em> Norma Técnica Colombiana NTC 5613 - Referencias bibliográficas. Contenido, forma y estructura.</em> ',
      link:
        'https://www.politecnicojic.edu.co/images/downloads/biblioteca/guias/NTC5613.pdf  ',
    },
    {
      referencia:
        'ICONTEC. (2009).<em> Guía Técnica Colombiana GTC 18 -, Documentación Organizacional.</em> ',
      link:
        'https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxhbmdpZW1vcmFnYW1iYXxneDo1MTgyMzdmZWJkNWY3Nzll ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Innovative Education',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Innovative Education',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Innovative Education',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Innovative Education',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
