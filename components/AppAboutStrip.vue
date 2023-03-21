<template>
  <section class="section">
    <div class="inner">
      <div class="flex-container flex-container--gutter">
        <div class="section__col">
          <div class="feature">
            <h2 class="feature__title font-large">About Us</h2>
            <p class="feature__text font-regular">We are independent reviewers of cafes in Tyne and Wear. Our reviewers are people like you, the coffee lovers who explore new places and try different coffee blends. We love finding new places and write reviews about our experiences to help other people find the a place to enjoy a cup of coffee while reading a book, studying, working or catching up with friends and family. So far, we have listed 34 cafes in 12 locations across Tyne and Wear.</p>
            <div class="feature__action">
              <AppButton to="/about/" title="About Us" />
            </div>
          </div>
        </div>
        <div class="section__col">
          <div class="page-image">

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
  
  .page-image {
    padding-top: 60%;
    background-color: $clr-shade-lighten-10;
    border-radius: $border-radius;
  }
</style>