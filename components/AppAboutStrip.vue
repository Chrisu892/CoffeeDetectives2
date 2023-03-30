<template>
  <section class="section section--padding">
    <div class="inner">
      <div class="flex-container flex-container--gutter flex-container--align-center">
        <div class="section__col">
          <div class="feature">
            <h2 class="feature__title font-large">About Us</h2>
            <p class="feature__text font-regular">We are independent reviewers of cafes in Tyne and Wear. Our reviewers are people like you, the coffee lovers who explore new places and try different coffee blends. We love finding new places and write reviews about our experiences to help other people find the a place to enjoy a cup of coffee while reading a book, studying, working or catching up with friends and family. So far, we have listed 34 cafes in 12 locations across Tyne and Wear.</p>
            <div class="feature__action">
              <AppButton to="/about-us/" title="About Us" />
            </div>
          </div>
        </div>
        <div class="section__col">
          <div class="page-circles">
            <div class="page-circle">

            </div>
            <div class="page-circle">

            </div>
            <div class="page-circle">

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .section__col {
    flex: 1 0;
  }
  
  .page-circles {
    padding-top: 60%;
    position: relative;
  }
  .page-circle {
    background-color: $clr-shade;
    border-radius: 100%;
    position: absolute;

    &:nth-child(1) {
      padding-top: 45%;
      top: 0;
      left: 0;
      width: 45%;
    }
    &:nth-child(2) {
      padding-top: 30%;
      top: 15%;
      right: 0;
      width: 30%;
    }
    &:nth-child(3) {
      padding-top: 25%;
      bottom: 0;
      right: 30%;
      width: 25%;
    }
  }
</style>