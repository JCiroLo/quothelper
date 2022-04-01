<template lang="pug">
transition(name="fade-down" mode="out-in")
  .greeting(v-if="page === 0")
    h1.magilo Quothelper
    .actions  
      button(@click="page = 3") ¡Empezar!
      button(@click="page = 1") Información

  .work-summary(v-else-if="page === 1")
    .presentation
      h1 Cátedra Antioquia
      p.name Juan Pablo Ciro Londoño
      p.cc 1214747164
      p.work-title Conferencia sobre la correcta referenciación
      h2 Quothelper
      p.date 1 de Marzo del 2022
      p.grade 
        | Autoevaluación 
        u: b 5.0
    .references
      h2 Referencias (IEEE):
      p [1] N. Tovaruela, J. Ramos, R. Mahillo, F. Gago, V. Álvarez, G. Melero and A. Requeijo, "Normas para referenciar la bibliografía consultada en los trabajos de investigación", vol. 3, pp. 26-33, April 2018.
      p [2] M. Encinas, I. Balza, A. Langarica, M. Peña, A. Urrutia and T. Zamalloa, "Guía sobre cómo usar, citar y referenciar fuentes académicas", Iturri akademikoak erabiltzeko, aipatzeko eta erreferentziatzeko gida, February 2022
    .actions
      button(@click="page = 2") Cuestionario de autoevaluación
      button(@click="page = 0") Atrás

  .questionnaire(v-else-if="page === 2")
    .questions
      h3 Cuestionario de autoevaluación
      br
      p 1. Con el trabajo que presentaré a los monitores y al profesor ¿logré mejorar mi lecto/escritura?
      u Si, la lectura crítica en busca de conocimientos para aplicar en mi trabajo me ayudó a mejorar mis habilidades y siento que indirectamente también me ayudó a mejorar mi redacción.
      br
      p 2. Con el trabajo que presentaré a los monitores y al profesor ¿pude aplicar/expandir/potenciar/reafirmar mi creatividad?
      u Completamente, este trabajo para mi fue un reto, quise intentar expandir mis habilidades creativas, quise hacer algo innovador, algo diferente pero atractivo para las personas.
      br
      p 3. Con el trabajo que presentaré a los monitores y al profesor ¿pude superar mis temores de hablar ante otros?
      u A pesar de verme como alguien tímido siento que este tipo de actividades despiertan mi entusiasmo a comunicarme más, debido a la participación frente a cuestionamientos con mis compañeros de clase.
      br
      p 4. Con el trabajo que presentaré a los monitores y al profesor ¿pude exponer/defender mis ideas con respecto al tema tratado (por otros o por mí) en la conferencia anterior de la Cátedra?
      u Si, tengo total seguridad que he aprendido sobre el tema tratado y sobre como he aplicado mi creatividad para realizar la actividad propuesta. 
      br
      p 5. Con el trabajo que presentaré a los monitores y al profesor ¿mejoré/aumenté mi control emocional?
      u Si, realizar el tipo de trabajo que entregué me llena de pasión, me hace alguien más tranquilo y puedo pensar mejor.
      br
      p 6. Con el trabajo que presentaré a los monitores y al profesor ¿mejoré/aumenté la autorregulación/autoconocimiento/autocontrol de mi aprendizaje?
      u Si, cada vez que hago este tipo de actividades me siento inspirado a aprender sobre todo lo que quiero aplicar, por ende me siento muy bien investigando para mi aprendizaje.
      br
      p 7. La realización de este trabajo ¿me satisfizo?
      u Si, siento que he dejado parte de mi en el trabajo, la verdad me siento contento con lo que he hecho.
      br
      p 8. La realización de este trabajo ¿potenció mi espíritu crítico?
      u Demasiado, el cuestionamiento es parte de mi ser pero realizar este trabajo me direccionó a buscar respuestas sobre las dudas que me iba surgiendo a medida que avanzaba.
      br
      p 9. La realización de este trabajo ¿mejoró/aumentó mi autoestima?
      u No, sin embargo siento que el trabajo quedó tan bien que me haría feliz si alguien me hiciera un cumplido por ello.
      br
      p 10. ¿La realización de este trabajo despertó en mí nuevas preguntas o inquietudes?
      u Muchas, siento que quedé con demasiadas incógnitas que quiero resolver, incluso nuevos conocimientos que deseo adquirir.
      br
      p 11. ¿Voy a entregar este trabajo sólo después de sentirme completamente satisfecho de su realización?
      u Si, no me gusta entregar trabajos a medias, siempre quiero entregar lo mejor de mi.
      br
      p 12. ¿Cómo podría mejorar este trabajo que acabo de realizar?
      u Siento que influye mucho en mi vida laboral, ya que quiero desempeñarme como desarrollador de software por ende el aprendizaje adquirido es de  gran ayuda para ello.
      br
      p 13. ¿Cómo aplicarlo/emplearlo en otras asignaturas de mi programa curricular? ¿en un problema real de mi vida/ mi profesión?
      u La programación está inmersa en mi carrera y en mi vida laboral, literalmente este trabajo puede darme oportunidades en futuras entrevistas laborales, por eso sentí la necesidad de hacerlo bien.
      br
      p 14. ¿Cuáles fueron los principales obstáculos que tuve para desarrollar este trabajo? ¿cómo los solucionaría y anticiparía en situaciones futuras?
      u El tiempo fue uno de los peores obstáculos, a pesar de que empecé temprano siento que el trabajo me consumió demasiado tiempo, sin embargo un buen ordenamiento de éste me llevó a estar satisfecho con la entrega.
      br 
      P 
        | Nota de atoevaluación
        u 5.0
      
    .actions
      button(@click="page = 1") Atrás

  .container(v-else-if="page === 3")
    .section.section-reader
      h1 Seleccióna los artículos
      swiper.mySwiper(:navigation="true" @slideChange="handleSliderChange")
        swiper-slide(v-for="(book, index) in quotes" :key="index")
          .book-template
            .book-type-1(v-if="book.getType() === 1")
              .header
                .title {{book.getTitle()}}
              .body.col
                .subtitle(:style="{width: `${getRandom(25, 75)}%`}")   
                .line
                .line
                .subtitle(:style="{width: `${getRandom(25, 75)}%`}")   
                .line
                .line
                .line
            .book-type-2(v-else-if="book.getType() === 2")
              .header
                .title {{book.getTitle()}}
              .body
                .col-6
                  .image
                .col-6
                  .subtitle
                  .line
                  .line
                  .line
                  .line
                  .line
                  .line
                  .line
            .book-type-2(v-else-if="book.getType() === 3")
              .header.col
                .title {{book.getTitle()}}
                .line
                .line
              .body.col
                .space
                .image(:style="{height: '100px'}")
                .space
                .subtitle
                .body
                  .col-6
                    .line
                    .line
                    .line
                    .line
                  .col-6
                    .line
                    .line
                    .line
                    .line
            .book-type-2(v-else-if="book.getType() === 4")
              .header.col
                .title {{book.getTitle()}}
              .body.col
                .subtitle
                .line
                .line
                .line
                .line
              .space
              .body
                .col-6
                  .body
                    .col-6
                      .image
                    .col-6
                      .line
                      .line
                      .line
                .col-6
                  .body
                      .col-6
                        .image
                      .col-6
                        .line
                        .line
                        .line

            .book-type-2(v-else-if="book.getType() === 5")
              .header.col
                .title {{book.getTitle()}}
              .body
                .col-6
                  .subtitle
                  .line
                  .line
                  .line
                  .line
                  .line
                  .line
                  .line
                .col-6
                  .body
                    .col-6
                      .image
                    .col-6
                      .line
                      .line
                  .space
                  .body
                    .col-6
                      .image
                    .col-6
                      .line
                      .line
                  .space
                  .body
                    .col-6
                      .image
                    .col-6
                      .line
                      .line

      .actions
        button(@click="addReference") ¡Nueva referencia!
        button(@click="removeReference") Quitar última referencia

    .section.section-references
      h1 Tus referencias
      transition(name="fade" mode="out-in")
        .references(v-if="references.length === 0")
          .error
            img(:src="require('@/assets/image.png')", alt="alt")
            h2 Primero selecciona una referencia
        .references(v-else ref="refsBox")
          .reference(v-for="(book, index) in references" :key="index")
            span {{renderQuote(book, index + 1)}}
          
    .section.section-paper
      h1 Previsualización de tu informe
      .paper(ref="paperBox")
        .paper-item(v-for="(book, index) in references" :key="index")
          .line(v-for="(line, index2) in book.randomLines" :key="index2" :style="{width: `${getRandom(50, 200)}px`}")
          span [{{index}}]
    
</template>

<script src="./index.js"></script>

<style src="./styles.scss" lang="scss" scoped></style>
