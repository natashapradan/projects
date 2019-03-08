<template>
  <div>
    <b-row class="m-4 d-flex flex-row justify-content-center">
      <b-col lg="6">
        <b-alert variant="success" show>Success! Thank you for leaving your data, we will contact you soon</b-alert>
      </b-col>
    </b-row>
    <b-container class="container-fluid">
      <h1 class="text-center mb-5 mt-4">We take pride in our cattery for a reason</h1>
      <b-row class="mt-2">
        <b-col sm="12" md="4">
          <img src="./assets/images/cats/cat.png">
          <h5>Our cats are well-mannered and nice, they will definitely be wonderful companions to people of all ages
            alike</h5>
        </b-col>
        <b-col sm="12" md="4">
          <img src="./assets/images/cats/pedigree.png">
          <h5 class=" mt-2">We have grown from a small urban cattery for a couple of animals only to a stable foundation
            able
            to help hundreds</h5>
        </b-col>
        <b-col sm="12" md="4">
          <img src="./assets/images/cats/charity.png">
          <h5>Through giving our cats for adoption and making quality products for pets we have spread our traditions of
            love and care</h5>
        </b-col>
      </b-row>
      <b-row class="d-flex flex-row justify-content-center mt-4">
        <!--<b-col>-->
        <div>
          <b-jumbotron bg-variant="primary" text-variant="white" border-variant="dark">
            <template slot="header">10% Discount</template>

            <template slot="lead">
              Do not miss our all-time bestsellers for a lower price! Treat your cat to a wonderful present
            </template>
            <div class="d-flex flex-row justify-content-center">
              <b-button variant="secondary" href="/categories/3/products"><strong>Go Grab Some</strong></b-button>
            </div>
          </b-jumbotron>
        </div>
        <!--</b-col>-->
      </b-row>
      <hr/>
      <b-row class="d-flex flex-row justify-content-center">
        <div class="m-2">
          <h1 class="text-center mb-4">Our happy-end stories</h1>
          <b-carousel
              id="carousel1"
              controls
              indicators
              background="#ababab"
              img-width="1024"
              img-max-height="480"
          >
            <b-carousel-slide
                img-src="./src/assets/images/adopted/1.jpg">
              <blockquote>
                <p><strong><i class="fas fa-paw"></i> FatCat</strong> gave us a great gift - our pet Nicky who is
                  actually a lor more than just a pet.</p>
                <footer class="blockquote-footer">Elsie, Greg and little Jamie</footer>
              </blockquote>
            </b-carousel-slide>
            <b-carousel-slide
                img-src="./src/assets/images/adopted/3.jpg">
              <blockquote>
                <p>Thanks to <strong><i class="fas fa-paw"></i> FatCat</strong>, Sunny is a member of our family, we
                  cannot imagine our life without him.</p>
                <footer class="blockquote-footer">Marc, Jessica, Jackie and Pete</footer>
              </blockquote>
            </b-carousel-slide>
            <b-carousel-slide
                img-src="./src/assets/images/adopted/2.jpg">
              <blockquote>
                <p>Sam was homeless before <strong><i class="fas fa-paw"></i> FatCat</strong> helped him find us. He is
                  like another child to me now.</p>
                <footer class="blockquote-footer">Nancy</footer>
              </blockquote>
            </b-carousel-slide>
          </b-carousel>
        </div>
      </b-row>
      <hr/>
      <b-row class="d-flex flex-row justify-content-center mt-4">
        <h1 class="mb-4">Our bestsellers</h1>
      </b-row>
      <b-row class="mt-4">
        <b-col md="4">
          <div>
            <b-card
                title="Mousy"
                img-src="./src/assets/images/products/mousy.jpg"
                img-alt="Mouse toy"
                img-top
                tag="article"
                style="max-width: 20rem; border: none"
                class="mb-2 d-flex flex-column"
            >
              <div class="card-footer">
                <p>Mousy is the perfect mouse toy for your pet. It is made of anti-allergenic material and is soft to
                  touch, which all the cats just love.</p>
                <b-button href="/categories/1/products/mousy" variant="primary">Go Grab One</b-button>
              </div>
            </b-card>
          </div>
        </b-col>
        <b-col md="4">
          <div>
            <b-card
                title="Chicken"
                img-src="./src/assets/images/products/chicken.jpg"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem; border: none"
                class="mb-2 d-flex flex-column"
            >
              <div class="card-footer">
                <p>Applaws with chicken is one of our all-time faves. It is balanced in vitamins and proteins,
                  and
                  cats adore its delicate flavour.</p>

                <b-button class="mt-auto" href="/categories/1/products/chicken" variant="primary">Go Grab One</b-button>
              </div>
            </b-card>
          </div>
        </b-col>
        <b-col md="4">
          <div>
            <b-card
                title="Birdie"
                img-src="./src/assets/images/products/birdie.jpg"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem; border: none;"
                class="mb-2 d-flex flex-column"
            >
              <div class="card-footer">
                <p>If your pet is active (or you want it to be), don't miss on this toy. It is
                  sure to bring your cat's instincts back to the surface.</p>

                <b-button class="mt-auto" href="/categories/1/products/birdie" variant="primary">Go Grab One</b-button>
              </div>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
  export default {
    name: "Success",
    created() {
      setTimeout(() => this.$router.push({name: 'home'}), 3000);
    }
  }

</script>
