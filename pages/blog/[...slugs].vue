<template>
  <main id="main" class="main">
    <AppPlainMasthead title="" :showTitle="false" />

    <section class="section section--padding">
      <div class="inner inner--narrow article">
        <header class="article__header">
          <h1 class="article__title font-xl">Newcastle City Centre Transformation to Bring 4 New Cafes</h1>
          <div class="article__details">Posted on: 12/03/2023 by Anonymous</div>
        </header>

        <div class="article__image">
          <img class="article__image__source" src="/images/newcastle-gateshead.jpeg" alt="" />
        </div>

        <div class="article__content">
          <p class="font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit impedit ea ullam nobis voluptatum? Impedit eveniet minima maiores harum quae.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus fuga hic maiores, optio, qui sunt architecto odit quae quos similique doloremque pariatur cupiditate repudiandae delectus tempora. Ipsa doloremque, magnam nulla possimus earum repellat nisi eaque error esse, minima maxime quibusdam iste mollitia? Minima ratione cum corporis. Consequuntur alias sequi possimus facilis officia tempora natus maxime unde, quo hic voluptate labore facere totam quaerat sapiente ducimus eveniet cum! Consequuntur nisi, fugit in molestiae sint quo ad dolore, quam qui quae facere quos? Blanditiis, exercitationem, nihil beatae ipsa dignissimos non error ut vitae odit cupiditate dicta adipisci quis id eveniet expedita esse sunt delectus! Amet placeat alias quisquam magni suscipit cum doloribus. Pariatur nihil cupiditate accusantium recusandae voluptates tempora iusto aliquid sapiente, molestiae ex commodi praesentium alias, eos, reiciendis nesciunt vero ut possimus modi dicta obcaecati dolores magnam voluptatibus quos maiores. Architecto accusantium excepturi voluptatum ex sequi in obcaecati quibusdam eius laudantium.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis corporis consequuntur totam quod quae nisi praesentium perferendis iste earum animi dolorum similique necessitatibus asperiores adipisci itaque veritatis et voluptates quo, facere assumenda reiciendis! Doloremque necessitatibus quo dolorum unde sunt odio, voluptatem atque corporis. Similique, pariatur facere fugit nisi, iusto dignissimos ipsa repellendus, accusantium distinctio possimus consequatur assumenda non amet eum. Commodi, rem aperiam. Aspernatur non voluptate numquam maxime cum provident iusto in reiciendis, laudantium, delectus pariatur dolorem aliquid necessitatibus eos accusantium earum quam? Quis itaque architecto quam cumque incidunt qui quisquam a nostrum. Autem dolorem quod quos ea beatae molestiae.</p>
        </div>

      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
  .article__header {
    margin-bottom: 2.5rem;
    text-align: center;
  }
  .article__title {
    margin: 0 auto;
    max-width: 1024px;
  }
  .article__details {
    margin-top: 2rem;
  }
  .article__image {
    border-radius: $border-radius;
    overflow: hidden;
    padding-top: 50%;
    position: relative;
  }
  .article__image__source {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .article__content {
    p {
      margin-top: 1.5rem;
    }
  }
</style>