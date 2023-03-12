<template>
  <section class="search">
    <div class="inner">
      <form class="search__form" method="post">
        <h2 class="search__form__title font-regular">Find a perfect place for your coffee break, study session or meeting in Tyne and Wear</h2>
        
        <div class="flex-container flex-container--gutter flex-container--align-bottom">
          <div class="search__form__field">
            <label class="search__form__label" for="query">Place or Location</label>
            <input class="search__form__input" id="query" type="text" placeholder="Where are you going?" required />
          </div>

          <div class="search__form__field">
            <label class="search__form__label" for="coffee">Coffee Blend</label>
            <select class="search__form__select" id="coffee" required>
              <option value="">Please select...</option>
              <option value="smooth">Smooth</option>
              <option value="rich">Rich</option>
            </select>
          </div>

          <div class="search__form__field">
            <label class="search__form__label" for="amenities">Amenities</label>
            <select class="search__form__select" id="amenities" required>
              <option value="">Please select...</option>
              <option value="laptop_charger">Laptop Charger</option>
              <option value="accessible_toilet">Accessible Toilet</option>
              <option value="sitting_area">Sitting Area</option>
              <option value="sofas">Sofas</option>
              <option value="chairs">Chairs</option>
              <option value="round_table">Round Table</option>
              <option value="long_table">Long Table</option>
            </select>
          </div>

          <div class="search__form__field">
            <AppButton btnType="button" title="Search" />
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .search {
    color: $clr-white;
  }
  .search__form {
    background-color: $clr-secondary;
    border-radius: $border-radius;
    margin-top: -4rem;
    padding: 2rem;
  }
  .search__form__title {
    margin-bottom: 1.5rem;
    text-align: center;
  }
  .search__form__field {
    flex: 1 0;

    &:last-child {
      max-width: 150px;
    }
  }
  .search__form__label {
    display: block;
  }
  .search__form__button {
    margin-top: 2.4rem;
  }
</style>