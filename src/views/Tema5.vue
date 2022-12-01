<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Mejoramiento continuo
    
    .row.justify-content-center.mb-4
      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img23.png', alt='imagen relacionada')
      .col-md-7      
        p.mb-4 Se debe determinar por parte de la alta dirección, de los dueños y responsables del proceso de gestión documental en las organizaciones, las oportunidades de mejora que surjan de las inconsistencias, hallazgos, autoevaluaciones y auditorías sobre la gestión documental; por eso, la mejora continua es una actividad gerencial que permite revisar, medir y retroalimentar el enfoque por procesos, con la finalidad de optimizar los productos y servicios, mediante estrategias para lograr un control de calidad efectivo, con la certeza de corregir, prevenir y reducir los efectos no deseados.  

    p.mb-4 Con respecto al mejoramiento continuo, encontramos tres ítems importantes a tratar:   

    .row.justify-content-center.mb-4
      .col-md-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta color-secundario")
          .row(titulo="Evaluación de documentos")
            .col-md-12.mb-4.mb-md-0
              p Se realiza con la intención de identificar aquellos que no estén acordes con los requisitos establecidos por la organización y que requieran de una actualización, modificación, eliminación o remplazo por otro documento. 
        
          .row(titulo="Control de documentos")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 De acuerdo a la norma NTC ISO 9001, es un requisito que permite asegurar que el documento se encuentre disponible cuando se solicite y que su aplicación sea efectiva; el cumplimiento de este requisito, permitirá realizar los cambios que se requieran
              p Este requisito, permite que la documentación cumpla las condiciones de calidad determinadas en las diferentes normas, garantizando las condiciones de cada una, con relación a la identificación; acceso al documento a través de los diferentes aplicativos o medios tecnológicos que maneje la entidad; distribución hacia otros funcionarios; la forma de organización de la información, conservación en físico y digital, control a las modificaciones del formato; identificación en las tablas de retención y disposición.


          .row(titulo="Producto no conforme")
            .col-md-12.mb-4.mb-md-0
              p El producto o servicio no conforme, es el resultado del no cumplimiento de los requisitos, expectativas, necesidades y/o disposiciones establecidas por la organización; lo anterior, se traduce en algún incumplimiento legal, errores en la elaboración de documentos, información incorrecta consignada, lo que hace que algunos procesos tengan retrocesos, ausencia o incorrecto control de calidad en el sistema de gestión documental y diligenciamiento incorrecto o el no diligenciamiento completo de algún documento.

      .col-md-4
        img(src='@/assets/curso/temas/texto_destacado/img24.png', alt='imagen relacionada')   

    p.mb-4 Cuando encontramos un producto no conforme, debemos realizar tres pasos fundamentales. Los cuales son:   

    TabsC.color-acento-contenido.mb-4
      .py-3.py-md-4(titulo="Análisis de causa")
        .row.justify-content-around.align-items-center
          .col-md-8.mb-4.mb-md-0
            p Es el estudio que se le realiza a un problema, con el fin de identificar la raíz del mismo; se puede realizar mediante técnicas metodológicas que permitan solucionar y prevenir problemas futuros y se pueden utilizar varias herramientas según la problemática. Ahora bien, para el tratamiento, se debe determinar su causa, debido a que, si no conocemos el origen del problema, no podremos erradicar las causas de las no conformidades. 
          .col-md-4
            figure
              img(data-aos="zoom-out-up" src='@/assets/curso/temas/texto_destacado/img25.svg', alt='imagen representativa')
      
          
      .py-3.py-md-4(titulo="Corrección")
        .row.justify-content-around.align-items-center
          .col-md-8.mb-4.mb-md-0
            p Alternativa de carácter inmediato ante una problemática detectada; se busca eliminar la no conformidad dando factibilidad al producto identificado; requiere de poco análisis al ocurrir una vez y se deben determinar acciones de ejecución, plazo y responsables; hay que realizar análisis de causa.
          .col-md-4
            figure
              img(data-aos="zoom-out-right" src='@/assets/curso/temas/texto_destacado/img26.svg', alt='imagen representativa')

      .py-3.py-md-4(titulo="Acción correctiva")
        .row.justify-content-around.align-items-center
          .col-md-8.mb-4.mb-md-0
            p Es el conjunto de actividades, que permiten eliminar la causa de una no conformidad y prevenir que suceda otra vez. La implementación de esta acción, las define la ISO 9001, con el siguiente proceso
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta(style="background-color: #F85316")
                  span 1
                | Identificar el problema.
              li 
                .lista-ol--cuadro__vineta(style="background-color: #F85316")
                  span 2
                | Definir las proporciones del problema y su alcance.
              li 
                .lista-ol--cuadro__vineta(style="background-color: #F85316")
                  span 3
                | Tomar medidas para contener el problema, mientras se diseña e implementa una acción.
              li 
                .lista-ol--cuadro__vineta(style="background-color: #F85316")
                  span 4
                | Investigar y descubrir la causa raíz que, al eliminarse, asegure la no ocurrencia o no recurrencia.
              li 
                .lista-ol--cuadro__vineta(style="background-color: #F85316")
                  span 5
                | Diseñar un plan para eliminar la causa raíz. Esto puede necesitar eliminar un proceso, o modificarlo sin que se generen nuevos riesgos o problemas.
              li 
                .lista-ol--cuadro__vineta(style="background-color: #F85316")
                  span 6
                | Ejecutar la acción.
              li 
                .lista-ol--cuadro__vineta(style="background-color: #F85316")
                  span 7
                | Verificar la eficacia de la acción propuesta.

          .col-md-4
            figure
              img(data-aos="zoom-out-right" src='@/assets/curso/temas/texto_destacado/img27.svg', alt='imagen representativa')

    p.mb-4 El análisis de causa puede lograrse mediante el uso de varios métodos para identificación de causas raíces. Para ampliar la información, lo invitamos a leer el artículo <strong>10 técnicas de análisis de causa raíz de los desperdicios de la calidad para eliminarlos</strong>, el cual se encuentra en el material complementario.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-11
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-4.mb-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/texto_destacado/img26.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Es importante aclarar que cualquiera de las técnicas que se utilicen, son favorables para la identificación de causas, pero las mismas requieren que las personas que las desarrollen, las apliquen con transparencia y objetividad, tanto del proceso, como de la entidad o empresa. Pero el trabajo no termina ahí; posterior a identificar las causas, es necesario determinar acciones concretas que se van a desarrollar; un ejemplo de esto es el método diseñado por Edward Deming, conocido como el ciclo PHVA (Planear, Hacer, Verificar, Actuar).

    .row.justify-content-center.mb-5
      .col-md-10.mb-4
        .cajon.color-acento-botones.color-fondo-secundario.p-4
          p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.
         







</template>

<script>
export default {
  name: 'Tema3',
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
