<template>
  <AppSection class="padding">
    <div class="intro">
      <div class="intro__container">
        <div class="intro__col">
          <div class="intro__picture">
            <picture>
              <img class="intro__picture__image" src="/images/coffee-and-cookies.png" alt="" />
            </picture>
          </div>
        </div>
        <div class="intro__col">
          <h2 class="intro__title font-large">Tyne & Wear Coffee Detectives</h2>
          <p class="intro__text font-regular">We are independent reviewers of cafes in Tyne & Wear, who love to explore and find new places for a perfect coffee break.</p>
          <p class="intro__text font-regular">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias delectus, hic consequatur pariatur ipsum maxime!</p>
          <div class="intro__action">
            <AppButton to="/cafes/" title="Find a Cafe" />
          </div>
        </div>
      </div>
    </div>
  </AppSection>
</template>

<style scoped lang="scss">
  .intro {
    border: solid 1px $clr-shade;
    border-radius: $border-radius;
    margin-top: 5rem;
    padding: 2rem;
  }
  .intro__container {
    @include flex-row;
    align-items: center;
    gap: $gutter;
  }
  .intro__col {
    flex: 1 0;

    &:first-child {
      border-radius: $border-radius;
      padding: $gutter;
    }
  }
  .intro__text {
    margin-top: 1rem;

    &:first-child {
      font-weight: $bold-weight;
    }
  }
  .intro__picture {
    background-color: $clr-secondary;
    border-radius: 35% 100%;
    margin: 0 auto;
    padding-top: 60%;
    position: relative;
    width: 60%;
  }
  .intro__picture__image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 85%;
  }
  .intro__action {
    margin-top: 1.5rem;
  }
</style>