<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Gestión documental
    
    .row.justify-content-center.mb-4
      .col-md-7      
        p.mb-4 ¿Sabía que la planificación, operacionalización y administración de la documentación en las organizaciones, se constituye en el derrotero de la gestión documental? Por lo tanto, es preciso tener presente la importancia dentro de los sistemas de gestión que se manejen, así como también el proceso y la normatividad que la rigen.
        .cajon.color-acento-botones.color-fondo-secundario.p-4
          p.mb-0 La Ley 594 de 2000, “Por medio de la cual se dicta la Ley General de Archivos y se dictan otras disposiciones”, define la gestión documental, como el conjunto de actividades administrativas y técnicas tendientes a la planificación, manejo y organización de la documentación producida y recibida por las entidades, desde su origen hasta su destino final, con el objeto de facilitar su utilización y conservación.
      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img18.png', alt='imagen relacionada')
    
    p.mb-4 En otros conceptos, es el proceso de administrar documentos mediante normas, técnicas y prácticas usadas por una organización, para optimizar la documentación, facilitando la recuperación, extracción de información, conservación de los que son importantes durante el tiempo determinado y la destrucción documental, a través de métodos eficaces y eficientes.

    p.mb-4 El proceso de la gestión documental se constituye en una serie de parámetros a tener en cuenta que, de manera integral, el Archivo General de la Nación ha dispuesto en las siguientes directrices: 

    .mx-auto.col-md-11.mb-4
      .tarjeta
        .imgCont.m-auto
          .row.justify-content-center.mb-4
            ImagenInfografica.color-acento-botones.mb-4
              template(v-slot:imagen)
                figure
                  img(data-aos="fade-left" src='@/assets/curso/temas/texto_destacado/img19.svg', alt='diagrama')
              .tarjeta.color-puntoC.p-4(x="13.3%" y="42%" numero="+" style='border-radius: 10px')
                p Actividades encaminadas a la planeación, generación y valoración de los documentos de la entidad, en cumplimiento con el contexto administrativo, legal, funcional y técnico; en esta fase, se crea y se diseñan formatos, se realiza análisis de procesos y el registro en el sistema de gestión documental. 

              .tarjeta.color-puntoC.p-4(x="27%" y="49%" numero="+" style='border-radius: 10px')
                p Estudio de los documentos en la forma de producción o ingreso, formato y estructura, finalidad, área competente para el trámite, proceso en que actúa y los resultados esperados.

              .tarjeta.color-puntoC.p-4(x="41%" y="49%" numero="+" style='border-radius: 10px')
                p Actuaciones necesarias para el registro, la vinculación a un trámite, la distribución, incluidas las actuaciones o delegaciones, la descripción (metadatos), la disponibilidad, recuperación y acceso para consulta de los documentos, el control y seguimiento a los trámites que surte el documento hasta la resolución de los asuntos.
                
              .tarjeta.color-puntoC.p-4(x="53%" y="49%" numero="+" style='border-radius: 10px')
                p Operaciones técnicas para declarar el documento en el sistema de gestión documental, clasificarlo, ubicarlo en el nivel adecuado, ordenarlo y describirlo adecuadamente.
                  
              .tarjeta.color-puntoC.p-4(x="66%" y="49%" numero="+" style='border-radius: 10px')
                p Operaciones adoptadas por la entidad para transferir los documentos durante las fases de archivo, verificando la estructura, la validación del formato de generación, la migración, <i>refreshing</i>, emulación o conversión, los metadatos técnicos de formato, los metadatos de preservación y los metadatos descriptivos.
              
              .tarjeta.color-puntoC.p-4(x="78%" y="49%" numero="+" style='border-radius: 10px')
                p Selección de los documentos en cualquier etapa del archivo, con miras a su conservación temporal, permanente o a su eliminación, de acuerdo con lo establecido en las tablas de retención documental o en las tablas de valoración documental.

              .tarjeta.color-puntoC.p-4(x="47%" y="66%" numero="+" style='border-radius: 10px')
                p Inicia desde la planificación de los documentos, por medio de ella se determinan sus valores primarios y secundarios, con el fin de establecer su permanencia en las diferentes fases del archivo y determinar su destino final.
              
              .tarjeta.color-puntoC.p-4(x="42%" y="76%" numero="+" style='border-radius: 10px')
                p Conjunto de acciones y estándares aplicados a los documentos durante su gestión, para garantizar su preservación en el tiempo, independientemente de su medio y forma de registro o almacenamiento.
              
    .row.justify-content-center.mb-4
      .col-md-10.mb-4
        .cajon.color-primario.color-fondo.p-4
          p Y, a través de diferentes normas, la Presidencia y el Congreso de la República emiten parámetros con referencia a la gestión documental.

    p.mb-4 A continuación, mencionamos las normas más importantes en materia de regulación de esta actividad.       

    .row.justify-content-center.mb-4
      .col-md-4
        img(src='@/assets/curso/temas/texto_destacado/img20.png', alt='imagen relacionada')  
      .col-md-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta color-secundario")
          .row(titulo="Ley 527 de 1999")
            .col-md-12.mb-4.mb-md-0
              p Por medio de la cual se define y reglamenta el acceso y uso de los mensajes de datos, del comercio electrónico y de las firmas digitales, y se establecen las entidades de certificación y se dictan otras disposiciones.
        
          .row(titulo="Ley 594 de 2000")
            .col-md-12.mb-4.mb-md-0
              p Por medio de la cual se dicta la Ley General de Archivos y se dictan otras disposiciones. 

          .row(titulo="Ley 962 de 2005")
            .col-md-12.mb-4.mb-md-0
              p Por la cual se dictan disposiciones sobre racionalización de trámites y procedimientos administrativos de los organismos y entidades del Estado, y de los particulares que ejercen funciones públicas o prestan servicios públicos.

          .row(titulo="Ley 1712 de 2014")
            .col-md-12.mb-4.mb-md-0
              p Por medio de la cual se crea la Ley de Transparencia y del Derecho de Acceso a la Información Pública Nacional y se dictan otras disposiciones.
          
          .row(titulo="Decreto 1080 de 2015")
            .col-md-12.mb-4.mb-md-0
              p Por medio del cual se expide el Decreto Único Reglamentario del Sector Cultura.
          
          .row(titulo="Directiva 04 de 2012")
            .col-md-12.mb-4.mb-md-0
              p Eficiencia administrativa y lineamientos de la política, cero papel en la administración pública.

    h3.mb-4 
      i#t_4_1.fas.fa-square.me-3.cuadrado.mb-4
      | Normativa Seguridad y Salud en el Trabajo    
    
    .row.justify-content-center.mb-4
      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img21.png', alt='imagen relacionada')
      .col-md-7      
        p.mb-4 Y como parte final de la normativa, hablemos sobre la Seguridad y Salud en el Trabajo.  El trabajo y la salud están estrechamente relacionados, debido a que a través del trabajo, logramos conseguir metas o satisfacer nuestras necesidades. 
        p.mb-4 Ahora, la buena salud permite el desarrollo de las funciones laborales; esto es traducido en el logro de los objetivos organizacionales, según la planeación y las funciones de cada cargo. 
        .cajon.color-acento-botones.color-fondo-secundario.p-4
          p.mb-4 Sin embargo, si el trabajo se desarrolla en condiciones que puedan causar daño a la integridad física, existirá un deterioro de la salud del trabajador y, así mismo, se verán afectados los resultados de la empresa. 
          p.mb-0 En Colombia existe reglamentación que define y exige la aplicación y cumplimiento en temas de seguridad y salud en el trabajo; estas leyes, decretos y normas son de forzoso cumplimiento sin que importe la categorización de la organización.  

    h3.mb-4 
      i#t_4_2.fas.fa-square.me-3.cuadrado.mb-4
      | Posturas ergonómicas 
    
    p.mb-4 Las posturas de trabajo forman parte de los componentes asociados a los trastornos musculoesqueléticos, cuya aparición depende de varias causas: en primera instancia, de lo forzada que sea la postura, del tiempo que se mantenga la postura, de la frecuencia con que algo se realice, o de la duración de la exposición a posturas semejantes, durante la jornada.

    p.mb-4 Para evitar cualquier dolencia o perjuicio en la salud física, por posiciones incorrectas en el sitio de trabajo, se invita a considerar las siguientes recomendaciones.
    
    .tarjeta.tarjeta--secundario.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-7.mb-4.mb-md-0
            h3.mb-4(style="margin-top: -70px;") Adoptar una buena postura
            p Tener una buena postura inicia por conservar una postura recta, la espalda debe estar lo más derecha posible y bien pegada al respaldo de la silla para que no se den huecos al nivel del área lumbar.

          .col-md-5
            figure
              img(src='@/assets/curso/temas/tarjetas/placeholder1.svg', alt='imagen ilustrativa')
        
        .row.justify-content-center.align-items-center.my-lg-4            
          .col-md-7.mb-4.mb-md-0
            h3.mb-4(style="margin-top: -70px;") Elegir un asiento ergonómico
            p Deberá tener un asiento que le posibilite regular la elevación y conservar la distancia correcta entre el cuerpo y la pantalla. 

          .col-md-5
            figure
              img(src='@/assets/curso/temas/tarjetas/placeholder2.svg', alt='imagen ilustrativa')
        
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-7.mb-4.mb-md-0
            h3.mb-4 Optimizar el área de trabajo
            p Para eludir molestias musculares, es aconsejable conservar los objetos que más use, cerca del alcance de su mano. Si tiene que hacer un trabajo que necesite manejar documentos en papel, se deben situar entre la pantalla y el teclado; también se deben situar los objetos que utilice puntualmente, fuera del alcance, tal cual, le obligue a levantarse, cambiar de postura, e incentivar la circulación.

          .col-md-5
            figure
              img(src='@/assets/curso/temas/tarjetas/placeholder3.svg', alt='imagen ilustrativa')
        
        .row.justify-content-center.align-items-center.my-lg-4            
          .col-md-7.mb-4.mb-md-0
            h3.mb-4(style="margin-top: -70px;") Adaptar la postura de la pantalla
            p Es imprescindible posicionar bien la pantalla para reducir los inconvenientes de fatiga visual; se sebe colocar al nivel de los ojos y sutilmente dirigida hacia atrás.
            
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tarjetas/placeholder4.svg', alt='imagen ilustrativa')

        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-7.mb-4.mb-md-0
            h3.mb-4 Revisar su ergonomía en el trabajo
            p ¿La espalda está derecha y tiene los hombros echados hacia atrás?
            p ¿La elevación del teclado conserva el brazo y el antebrazo en ángulo recto?
            p ¿Las rodillas conforman un ángulo recto?
            p ¿Tiene al alcance de su mano todos los objetos que utiliza habitualmente?
            p ¿Realiza pausas para estirar y moverse regularmente?
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tarjetas/placeholder5.svg', alt='imagen ilustrativa')
    
    h3.mb-4 
      i#t_4_3.fas.fa-square.me-3.cuadrado.mb-4
      | Ejercicios compensatorios     
    
    .row.justify-content-center.mb-4
      .col-md-7      
        p.mb-4 Las exigencias físicas de una jornada, implican componentes de peligro ergonómico, como por ejemplo posturas fijas, obligadas y repetitivas, las mismas que están afectando, de forma rápida, el sistema musculoesquelético.
        p.mb-4 La actividad física compensatoria es la acción de movimientos eficientes que controlan, disminuyen y eliminan la tensión secundaria de trabajos obligados, malas posturas y jornadas de más de 3 horas, donde se trabaje en una postura pasiva.
        
        .cajon.color-primario.color-fondo.p-4.mb-4
          p.mb-0 Los ejercicios compensatorios también son conocidos como pausas activas para mejorar la movilidad, funcionamiento y confort de la salud física, mental y emocional. De manera complementaria, colaboran con la prevención de alteraciones musculares, dolores e indisposiciones laborales.
        
        p La orientación de una pausa activa debe ser hacia las extremidades menores e inferiores como son:  el cuello, espalda, cintura escapular y zona torácica, que son las que más reciben el efecto de cargas en el trabajo.
      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img22.png', alt='imagen relacionada')





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
