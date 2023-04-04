<template>
  <main id="main">
    <AppMasthead title="About Us" tagline="About the Coffee Detectives and our mission" />

    <section class="section section--padding">
      <div class="inner">
        <div class="feature feature--margin">
          <h2 class="feature__title">We are independent reviewers of cafes</h2>
          <p class="feature__text">Our reviewers are people like you, the coffee lovers who explore new places and try different coffee roasts. We love finding new places and write reviews about our experiences to help other people find the a place to enjoy a cup of coffee while reading a book, studying, working or catching up with friends and family. So far, we have listed 34 cafes in 12 locations across Tyne and Wear.</p>
        </div>
        <div class="page-content">
          <h3>How it works?</h3>
          <p>Coffee brewers</p>
          <p>Our coffee detectives explore, visit and occassionally write a comprehensive review about their expriences at a cafe. We do this becuase we believe in authenticity, something that traditional review websites fail to provide. When one of our coffee detectives publish a review, the cafe will automatically get listed on our website for free (although we would appreciate your paid membership). If you're the owner of your own cafe and would like one of our coffee detectives to visit you and write a review, you can get listed from just a £3 per month (T&C apply). However, we won't let you know when someone will visit you. The whole premise of this platform is to make our work a secret, so that you will never know when one of us is at your cafe. Once the review is published, you will get notified by email.</p>
          <p><strong>Coffee detectives</strong></p>
          <p>Do you have what it takes to become a coffee detective? Do you like coffee and write about your experiences? We value diversity and inclusivity and would love to read about experiences from a wide range of coffee lovers. To become a coffee detective, you will need to create a membership account from just a £1 per month. This will give you access to tools and guidance on all you need to know to become a coffee detective. The fun part is that you can visit any cafe in Tyne and Wear, whenever you like, order a coffee, have some food, observe, talk to people, and take either written or mental notes so that you can later write a comprehensive review for other people to read. However, to get published, all reviews must meet our rules and guidelines. You can read more about them in your member area.</p>
        </div>
      </div>
    </section>

    <section class="section section--padding section--shade">
      <div class="inner">
        <div class="feature feature--margin">
          <h2 class="feature__title">What makes us different?</h2>
        </div>
        <div class="page-content">
          <h3>Our Mission</h3>
          <ul>
            <li>We want to help owners of cafes to connect with their customers and promote their business.</li>
            <li>We want to make it easier to find a cafe in Tyne and Wear. Whether for a studying session, working, or meeting with other people.</li>
            <li>We want to create a network of cafes and a community of coffee lovers in the area.</li>
            <li>We want to help cafe owners to promote their business easier.</li>
            <li>We predict that with the advancement of Artificial Intelligence (AI) and chatbots, distinguishing between human and AI generated reviews will be more difficult. We want to make sure that honest and authentic reviews are unbiased, written by people, not AI.</li>
            <li>Money from the subscriptions are keeping our platform running, and as we grow, we plan to provide a number of grants and support to independent cafes.</li>
            <li>In the future, our mission is to run an annual coffee awards in [number] of different categories.</li>
          </ul>
          <h3>Our Values</h3>
          <ul>
            <li>Our reviews are always anonymous and authentic, written by real coffee lovers.</li>
            <li>We only review places that have been visited by one of our coffee detectives.</li>
            <li>We strive for authenticity, genuity, and honesty so that people can trust our reviews.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section section--padding">
      <div class="inner">
        <div class="container">
          <div class="container__col">
          Ready to become a coffee detective?
          </div>
          <div class="container__col">
            Ready to get listed?
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
  const { page } = useContent()

  useContentHead(page)
</script>
