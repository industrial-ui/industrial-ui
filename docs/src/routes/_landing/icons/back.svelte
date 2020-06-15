<svg class="back mobile" width="480" height="325" viewBox="0 0 480 325" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M144.624 279.014C87.7344 274.79 25.1761 327.118 0 306.405V250.398V0H480V301.908C437.138 245.696 358.292 335.398 280.591 323.984C226.392 316.022 199.033 283.054 144.624 279.014Z" fill="#6C6EE5"/>
</svg>

<svg class="back tablet" width="1024" height="400" viewBox="0 0 1024 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M308.532 343.402C187.167 338.204 53.709 402.607 0 377.114V308.182V0H1024V371.579C932.561 302.395 764.356 412.798 598.595 398.749C482.97 388.95 424.603 348.374 308.532 343.402Z" fill="#6C6EE5"/>
</svg>

<svg class="back desktop" width="1440" height="700" viewBox="0 0 1440 700" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M433.873 602.848C263.203 593.925 75.5283 704.475 0 660.715V542.391V0H1440V651.214C1311.41 532.459 1074.88 721.969 841.774 697.853C679.176 681.032 597.098 611.383 433.873 602.848Z" fill="#6C6EE5"/>
</svg>

<svg class="back huge" width="1920" height="800" viewBox="0 0 1920 800" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M578.498 688.97C350.938 678.771 100.704 805.114 0 755.103V619.875V0H1920V744.245C1748.55 608.524 1433.17 825.107 1122.37 797.546C905.568 778.322 796.131 698.723 578.498 688.97Z" fill="#6C6EE5"/>
</svg>

<style>
  .back:not(.mobile) {
    display: none;
  }

  .mobile {
    height: 325px;
    width: auto;
  }

  @media screen and (min-width: 480px) {
    .mobile {
      display: none;
    }
  }

  @media screen and (min-width: 480px) and (max-width: 1023px) {
    .back.tablet {
      display: block;
      height: 400px;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1440px) {
    .back.desktop {
      display: block;
      height: 700px;
    }
  }

  @media screen and (min-width: 1441px) {
    .back.huge {
      display: block;
      height: 800px;
    }
  }
</style>
