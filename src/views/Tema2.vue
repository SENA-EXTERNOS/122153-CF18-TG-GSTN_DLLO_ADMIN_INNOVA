<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Desarrollo de documentos organizacionales
    
    .row.justify-content-center.mb-4
      .col-md-7      
        p.mb-4 Con el ánimo de orientar, a través de unas herramientas, el diseño de los diferentes documentos que se gestionan en una entidad, el Instituto Colombiano de Normas Técnicas y Certificación, ICONTEC, en el año 2009, diseñó la Guía Técnica Colombiana GTC 185, denominada “Documentación Organizacional”, la cual define los parámetros para el diseño de los diferentes documentos que se expiden en las organizaciones, iniciando con la formulación de algunos conceptos de las partes de cada documento, con el fin de identificar y afianzar la estructura, determinando el objeto y el alcance de cada uno.
        .cajon.color-acento-botones.color-fondo-secundario.p-4
          p.mb-0 El diseño de los documentos, de acuerdo con la guía, demarca una serie de recomendaciones técnicas, en relación a la impresión, diligenciamiento según las zonas o áreas del mismo, márgenes, estilos, fuente, elementos esenciales como datos y generalidades.
      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img8.png', alt='imagen relacionada')

    p.mb-4 La GTC 185 definió los documentos más relevantes que se utilizan en una organización; en la guía se establece el alcance, estilos, fuente y las características que se deben tener en cuenta para su elaboración. A continuación, se presentan cada uno de estos documentos.

    h3
      i#t_2_1.fas.fa-square.me-3.cuadrado.mb-4
      |  Comunicaciones 
    
    p.mb-4 Se refiere a un documento de tipo organizacional, mediante el cual se establece interacción con entes externos e internos, a través de información. Es utilizado para hacer énfasis sobre un tema concreto y específico. Se puede elaborar de forma física o por medio electrónico, según la herramienta dispuesta para tal fin.

    p.mb-4 Los siguientes son los aspectos generales del documento comunicaciones:

    .mx-auto.col-md-10.mb-4
      .tarjeta
        .imgCont.m-auto
          .row.justify-content-center.mb-4
            ImagenInfografica.color-acento-botones.mb-5
              template(v-slot:imagen)
                figure
                  img(data-aos="fade-left" src='@/assets/curso/temas/texto_destacado/img9.svg', alt='diagrama')

              .tarjeta.color-puntoC.p-4(x="49%" y="13%" numero="+" style='border-radius: 10px')
                p Debe ser clara, agradable a la vista del lector; homogénea, con el fin de no presentar inconvenientes para su lectura, impresión, digitalización y microfilmación. Los tamaños deben estar entre los 10 y 12 puntos, utilizados en los procesadores de texto.

              .tarjeta.color-puntoC.p-4(x="49%" y="18%" numero="+" style='border-radius: 10px')
                p Espacio para el membrete, el cual contiene: razón social, sigla o acrónimo, logotipo en caso de tenerlo, y el número de identificación tributaria (NIT).
                
              .tarjeta.color-puntoC.p-4(x="45%" y="24%" numero="+" style='border-radius: 10px')
                p Todas las líneas parten del margen izquierdo.
                  
              .tarjeta.color-puntoC.p-4(x="23%" y="23%" numero="+" style='border-radius: 10px')
                p Superior entre 3 cm y 4 cm, inferior entre 2 cm y 3 cm, lateral izquierdo entre 3 cm y 4 cm, lateral derecho entre 2 cm y 3 cm. Al imprimir por ambas caras de la hoja, se recomienda que los márgenes laterales sean simétricos a 3 cm.
              
              .tarjeta.color-puntoC.p-4(x="74%" y="18%" numero="+" style='border-radius: 10px')
                p Espacio superior derecho destinado al registro y radicación del documento.

              .tarjeta.color-puntoC.p-4(x="59%" y="33.5%" numero="+" style='border-radius: 10px')
                p Las líneas de código, lugar de origen, fecha de elaboración, firma y cargo, se escriben partiendo del centro del escrito hacia el margen derecho.
              
              .tarjeta.color-puntoC.p-4(x="25%" y="57%" numero="+" style='border-radius: 10px')
                p Conservando la distribución del estilo bloque, el primer renglón de cada párrafo tiene una sangría de 5 a 10 espacios.
              
              .tarjeta.color-puntoC.p-4(x="45%" y="93%" numero="+" style='border-radius: 10px')
                p Impresión de dirección, apartado, correo electrónico, sitio web, fax, teléfono, lugar de origen y país.

    p.mb-4 La documentación organizacional también contiene elementos esenciales que debemos conocer.

    p.mb-5 A continuación, se presentan cada uno de ellos:


    .row.justify-content-center.mb-4
      .col-md-5
        img(src='@/assets/curso/temas/tema2/img1.png', alt='imagen relacionada')  
      .col-md-7 
        AcordionA(tipo="a" clase-tarjeta="tarjeta color-secundario")
          .row.justify-content-end(titulo="Identificación de páginas subsiguientes")
            .col-md-11.mb-4.mb-md-0
              p El encabezado y el número de página correspondiente, permiten identificar el documento a partir de la segunda página; se deben ubicar en la parte superior izquierda, a cero o una interlínea libre de la zona 1, debidamente justificados y, para continuar con el texto, se dejan una o dos interlíneas libres.
          .row.justify-content-end(titulo="Código")
            .col-md-11.mb-4.mb-md-0
              p Ubicarlo a 3 o 4 cm del borde superior, dejando de cero a una interlínea libre cuando el papel tiene el logotipo o membrete, según el estilo.
          .row.justify-content-end(titulo="Lugar de origen y fecha de elaboración")
            .col-md-11.mb-4.mb-md-0
              p Datos a una o dos interlíneas libres del código y en forma completa en orden de: nombre del lugar de origen, día, mes (en minúscula) y año (sin separarlo con punto), según el estilo.
          .row.justify-content-end(titulo="Datos del destinatario")
            .col-md-11.mb-4.mb-md-0
              p A partir del lugar de origen y la fecha de elaboración, se recomienda dejar de dos a tres interlíneas libres, según la extensión de la comunicación; los datos pueden ocupar varias líneas, según el tipo de documento.
          .row.justify-content-end(titulo="Denominación o título académico")
            .col-md-11.mb-4.mb-md-0
              p Mayúscula sostenida; el nombre del destinatario en mayúscula y debe llevar los dos apellidos.
          .row.justify-content-end(titulo="Cargo")
            .col-md-11.mb-4.mb-md-0
              p Los nombres de cargos muy extensos se pueden distribuir en dos líneas, para guardar proporción visual con los otros datos; mayúscula sostenida.
          .row.justify-content-end(titulo="Asunto")
            .col-md-11.mb-4.mb-md-0
              p Con mayúscula sostenida seguida de dos puntos, sin negrilla y sin subrayar, a dos interlíneas libres, a partir del último dato del destinatario.

    .row.justify-content-center.mb-5
      .col-md-7 
        AcordionA(tipo="a" clase-tarjeta="tarjeta color-secundario")
          .row.justify-content-end(titulo="Cuerpo o texto")
            .col-md-11.mb-4.mb-md-0
              p La redacción del cuerpo del documento debe ser de forma clara, breve, directa, sencilla y cortés.
          .row.justify-content-end(titulo="Datos del remitente")
            .col-md-11.mb-4.mb-md-0
              p Todo en mayúscula, no utilizar negrilla.
          .row.justify-content-end(titulo="Líneas especiales")
            .col-md-11.mb-4.mb-md-0
              p A dos interlíneas libres de los datos del remitente, en la misma fuente y con un tamaño de letra menor al utilizado en el texto; el bloque de anexos y copias se ubica a interlineado sencillo, sin abreviar y alineado. 
              p El bloque correspondiente a redactor y transcriptor, se deja a una interlínea libre del anterior y también alineado.
          .row.justify-content-end(titulo="Anexos")
            .col-md-11.mb-4.mb-md-0
              p Se registra al final de la comunicación, a dos interlíneas libres del remitente.
              p La palabra anexo, o anexos, según el caso, se escribe con mayúscula inicial, seguida de dos puntos (:).
              p A un espacio se enuncia la cantidad; entre paréntesis se relaciona el número de hojas, folios y el tipo de anexo, escritos de forma continua horizontalmente y separados por coma (,).
          .row.justify-content-end(titulo="Copia")
            .col-md-11.mb-4.mb-md-0
              p Mayúscula sostenida, sin abreviar y seguida de dos puntos (:), dos interlíneas libres del cargo del firmante o a interlineado sencillo de anexos, si los hay, contra el margen izquierdo; a un espacio se relacionan los destinatarios alineados así: tratamiento de cortesía o título, cargo y organización; al dirigirla a un funcionario de la misma entidad, se omite el nombre de la organización; no se debe abreviar. 
          .row.justify-content-end(titulo="Identificación ")
            .col-md-11.mb-4.mb-md-0
              p Identificación del transcriptor, redactor y otros participantes en la elaboración de las comunicaciones: a dos interlíneas libres del remitente o a una interlínea libre de anexos y copias, nombres y apellidos y papel desempeñado por cada uno.
          .row.justify-content-end(titulo="Cantidad de copias")
            .col-md-11.mb-4.mb-md-0
              p De acuerdo a lineamientos y políticas establecidos en la organización.
      .col-md-5
        img(src='@/assets/curso/temas/tema2/img2.png', alt='imagen relacionada') 
    

    h3
      i.fas.fa-square.me-3.cuadrado.mb-4
      | Cartas
    
    p.mb-4 Se refiere al documento escrito u oficio -en algunas organizaciones-, que se aplica para las relaciones entre las entidades y personas naturales o con los empleados; su utilización debe ser coherente con el acuerdo 060 del Archivo General de la Nación de 2001 y los lineamientos de elaboración y partes de la misma, las describe la GTC 185 en el numeral 5.4. 

    p.mb-4 Conozcamos los aspectos generales de la carta:

    .row.justify-content-center.mb-5
      .col-md-5
        img(src='@/assets/curso/temas/texto_destacado/img10.5.png', alt='imagen relacionada')  
      .col-md-7 
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul tema2")
          .row(titulo="Características de redacción y presentación")
            .col-md-12.mb-4.mb-md-0
              ol.lista-ol
                li 
                  span.fas.fa-check(style='color: #f85316')
                  | El objetivo es informar y persuadir a su destinatario.
                li 
                  span.fas.fa-check(style='color: #f85316')
                  | Se debe tratar un solo tema por comunicación.
                li 
                  span.fas.fa-check(style='color: #f85316')
                  | Redactar de forma clara, precisa, concreta y concisa.
                li 
                  span.fas.fa-check(style='color: #f85316')
                  | Usar tratamiento respetuoso y cortés.
                li 
                  span.fas.fa-check(style='color: #f85316')
                  | Redactar en primera persona del plural y usar el tratamiento de usted en singular o plural.
                li 
                  span.fas.fa-check(style='color: #f85316')
                  | Emplear estilo gramatical natural, sencillo y continuo.
                li 
                  span.fas.fa-check(style='color: #f85316')
                  | Utilizar los formatos normalizados en los manuales de cada organización.
                li 
                  span.fas.fa-check(style='color: #f85316')
                  | Se debe distribuir el texto de acuerdo con su extensión.
               
          .row(titulo="Clases de cartas u oficios")
            .col-md-12.mb-4.mb-md-0
              ol.lista-ol
                li 
                  span.fas.fa-check(style='color: #f85316')
                  | Organizacionales: se producen en el desarrollo de las actividades de la organización.
                li 
                  span.fas.fa-check(style='color: #f85316')
                  | Oficiales: se producen en las oficinas públicas y organizaciones del Estado.
                li 
                  span.fas.fa-check(style='color: #f85316')
                  | Personales: se producen entre quienes se conocen; en ellas se permite utilizar un lenguaje informal.

          .row(titulo="Utilización de las clases de cartas u oficios")
            .col-md-12.mb-4.mb-md-0
              ol.lista-ol
                li 
                  span.fas.fa-check(style='color: #f85316')
                  | Informar sobre un hecho, reportar necesidades o hacer solicitudes.
                li 
                  span.fas.fa-check(style='color: #f85316')
                  | Regular o aclarar una situación.
                li 
                  span.fas.fa-check(style='color: #f85316')
                  | Tramitar, desarrollar o agilizar un asunto.
                li 
                  span.fas.fa-check(style='color: #f85316')
                  | Dar respuesta a una comunicación recibida.
                li 
                  span.fas.fa-check(style='color: #f85316')
                  | Reiterar una información, un requerimiento o solicitud urgente.
                li 
                  span.fas.fa-check(style='color: #f85316')
                  | Solicitar detalles sobre un asunto determinado.
                li 
                  span.fas.fa-check(style='color: #f85316')
                  | Impugnar o corregir una situación.
                li 
                  span.fas.fa-check(style='color: #f85316')
                  | Confirmar eventos ocurridos o pendientes.
                li 
                  span.fas.fa-check(style='color: #f85316')
                  | Solicitar o remitir información, documentos u objetos.
                li 
                  span.fas.fa-check(style='color: #f85316')
                  | Ofrecer agradecimientos, excusas o condolencias.
                li 
                  span.fas.fa-check(style='color: #f85316')
                  | Felicitar, invitar o convocar.
                li 
                  span.fas.fa-check(style='color: #f85316')
                  | Hacer llamados de atención, entre otros.

          
    h3
      i#t_2_1.fas.fa-square.me-3.cuadrado.mb-4
      |  Memorandos

    p.mb-4 Se refiere a un documento escrito, por el cual se trasmite información e imparten orientaciones y pautas entre las áreas, dependencias y niveles de coordinación jerárquica de la organización; su aplicación es de trámite inmediato. La siguiente imagen nos presenta un ejemplo.

    .mx-auto.col-md-11.mb-5
      .titulo-sexto.color-acento-contenido
        p.mb-0
          b Figura 2 #[br]
          em  Ejemplo de memorando

      figure.mb-5
          img(data-aos="flip-left" src='@/assets/curso/temas/figuras/figura2.svg', alt='diagrama')
          figcaption Nota. Tomado y adaptado de GTC 185 Documentación organizacional.  

    h3
      i#t_2_1.fas.fa-square.me-3.cuadrado.mb-4
      |  Circulares
    
    p.mb-4 Se refiere al documento dirigido a un grupo específico interno, con la finalidad de informar disposiciones, normas, lineamientos y políticas y, externamente, con el propósito dar a conocer reglas de negocios, nuevos productos o servicios, entre otros.
    
    p.mb-4 Las partes de una circular son:
    
    .row.justify-content-center.mb-4
      .col-md-3.col-lg-4(style="margin-top: 10px; ")
        img(src='@/assets/curso/temas/texto_destacado/img11.png', alt='imagen relacionada') 
      .col-md-8.col-lg-8
        TabsC.color-acento-contenido.mb-4
          .tarjeta.color-acento-contenido-borde.p-4(titulo="Encabezado")
            .row
              .col-md-12.p-4.color-fondo
                p De cero a una interlínea libre de la zona 1 se escribe la palabra circular, en mayúscula sostenida y centrada, acompañada por el consecutivo que la identifica, si se requiere.
              
          .tarjeta.color-acento-contenido-borde.p-4(titulo="Código")
            .row
              .col-md-12.p-4.color-fondo
                p Escribirlo a una o dos interlíneas libres del encabezado.
          
          .tarjeta.color-acento-contenido-borde.p-4(titulo="Lugar y fecha")
            .row
              .col-md-12.p-4.color-fondo
                p Lugar de origen y fecha de elaboración. Escribirlo a una o dos interlíneas libres del código.
              
          .tarjeta.color-acento-contenido-borde.p-4(titulo="Encabezamiento <br>y destinatarios")
            .row
              .col-md-12.p-4.color-fondo
                p De dos a tres interlíneas libres de la fecha, se escribe la palabra para, en mayúscula sostenida, seguida del grupo destinatario de la circular y su ubicación, de acuerdo con el estilo utilizado.
          
          .tarjeta.color-acento-contenido-borde.p-4(titulo="Asunto")
            .row
              .col-md-12.p-4.color-fondo
                p Se escribe a dos interlíneas libres de los datos del destinatario, contra el margen izquierdo.
              
          .tarjeta.color-acento-contenido-borde.p-4(titulo="Texto")
            .row
              .col-md-12.p-4.color-fondo
                p Se inicia a las dos o tres interlíneas libres del asunto. Se escribe a interlineación sencilla y cada párrafo se separa del anterior, con una interlínea libre. En circulares de uno o dos párrafos, se puede dejar interlineación de uno y medio entre renglones y doble entre párrafos. 

    h3
      i#t_2_1.fas.fa-square.me-3.cuadrado.mb-4
      |  Actas
    
    p.mb-4 Se refiere al acto administrativo que se constituye en la constancia o memoria de las reuniones, cumple la finalidad de relacionar las actividades realizadas de acuerdo con la agenda planificada, registro de los asistentes y ausentes, además de la descripción de los compromisos generados, según el objeto de la misma. 

    p.mb-4 Lo invitamos a ver el siguiente video, para conocer los componentes del acta.

    figure.mb-5
      .video
        <iframe width="560" height="315" src="https://www.youtube.com/embed/IIEdqAfuxu0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
    p.mb-4 La Guía Técnica Colombiana GTC 185, plantea las siguientes características de redacción y presentación, que se deben considerar en la elaboración de las actas:       

    .row.justify-content-center.mb-5
      .col-md-10.mb-4
        .cajon.color-acento-botones.color-fondo-secundario.p-4
          ol.lista-ol
            li 
              span.fas.fa-check(style='color: #f85316')
              | Registrar el nombre del grupo que se reúne y si la reunión es de tipo ordinario o extraordinario.
            li 
              span.fas.fa-check(style='color: #f85316')
              | Plasmar todo lo concerniente al desarrollo de la agenda de la reunión, evitando describir detalles intrascendentes.
            li 
              span.fas.fa-check(style='color: #f85316')
              | La redacción debe ser en tiempo pasado, excepto las de descargo, que deben redactarse en tiempo presente.
            li 
              span.fas.fa-check(style='color: #f85316')
              | No iniciar párrafos con gerundio, ni con lenguaje telegráfico; no debe tener errores técnicos, ortográficos, gramaticales, ni de puntuación. 
            li 
              span.fas.fa-check(style='color: #f85316')
              | Los párrafos deben ser concisos, claros y con énfasis en las decisiones tomadas.
            li 
              span.fas.fa-check(style='color: #f85316')
              | Si existen divergencias o enmiendas sobre decisiones tomadas de algún participante, se deben registrar a petición del mismo.
            li 
              span.fas.fa-check(style='color: #f85316')
              | La presentación de originales y copias debe ser impecable, sin borrones ni repisados.
            li 
              span.fas.fa-check(style='color: #f85316')
              | En caso de existir votaciones acerca de una decisión, se debe indicar la cantidad de votos emitidos a favor, en contra, y en blanco.
            li 
              span.fas.fa-check(style='color: #f85316')
              | Para el caso de nombramientos, se registrarán los resultados y los nombres completos. 
            li 
              span.fas.fa-check(style='color: #f85316')
              | Cuando sea necesario mencionar la intervención de uno de los asistentes, se hace con su nombre completo.
           
    h3
      i#t_2_1.fas.fa-square.me-3.cuadrado.mb-4
      |  Otros documentos 
    
    p.mb-4 Finalizamos explicando que existen otros tipos de documentos que complementan la gestión de las organizaciones, que, aplicados de manera adecuada, garantizarán la comunicación de las decisiones, con el fin que sean comprendidas y desarrolladas por cada una de las dependencias y áreas, fomentando las buenas prácticas en observancia a las políticas de la entidad y así asegurar el cumplimiento de los objetivos estratégicos.
    
    .row.justify-content-center.mb-4
      .col-md-10
        .tarjeta.p-3.mb-5(style="background-color: #CDE5C0")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/texto_destacado/icono1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4 Otros documentos
                  p Para conocerlas, lo invitamos a leer el PDF 
         
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/otros_Documentos.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download











</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
