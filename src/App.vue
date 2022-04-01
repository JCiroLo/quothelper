<template lang="pug">
router-view
.particles
  .particle
  .particle
  .particle
  .particle
  .particle
  .particle
  .particle
  .particle
  .particle
  .particle
  .particle
  .particle
  .particle
  .particle
  .particle
  .particle
  .particle
  .particle
  .particle
  .particle
  .particle
  .particle
  .particle
  .particle
  .particle
  .particle
  .particle
  .particle
  .particle
.particle
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;500;600;700&display=swap');

@font-face {
  font-family: 'magilioregular';
  src: url('assets/magilioregular-8mxvg-webfont.woff2') format('woff2'),
    url('assets/magilioregular-8mxvg-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

.magilo {
  font-family: 'magilioregular';
}

.particles {
  position: absolute;
  top: 0;
  left: 0;
  .particle {
    position: absolute;
    border-radius: 50%;
  }
}

* {
  padding: 0;
  margin: 0;
  font-family: 'Josefin Sans', sans-serif;
}

body {
  background: $background;
  overflow: hidden;
}

::-webkit-scrollbar {
  width: 7px;
  border-radius: $border-radius;
}
::-webkit-scrollbar-track {
  background: transparent;
  border-radius: $border-radius;
}
::-webkit-scrollbar-thumb {
  background: $text;
  border-radius: $border-radius;
}

.swiper-button-prev,
.swiper-button-next {
  font-weight: 700;
  color: #93b5c6 !important;
}

@for $i from 1 through 30 {
  @keyframes particle-animation-#{$i} {
    100% {
      transform: translate3d(
        (random(90) * 1vw),
        (random(90) * 1vh),
        (random(100) * 1px)
      );
    }
  }

  .particle:nth-child(#{$i}) {
    animation: particle-animation-#{$i} 60s infinite;
    $size: random(5) + 5 + px;
    opacity:calc(random(100) / 100);
    height: $size;
    width: $size;
    animation-delay: -$i * 0.2s;
    transform: translate3d(
      (random(90) * 1vw),
      (random(90) * 1vh),
      (random(100) * 1px)
    );
    background: hsl(random(360), 70%, 50%);
  }
}
</style>
