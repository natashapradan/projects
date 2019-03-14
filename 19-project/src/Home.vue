<template>
  <div>
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
                <p>What is sweeter to catch than a big fat mouse</p>
                <b-button href="/categories/1/products" variant="primary">Go Grab One</b-button>
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
                <p>Delicate poultry - for gourmet meals easy on stomach</p>

                <b-button class="mt-auto" href="/categories/2/products" variant="primary">Go Grab One</b-button>
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
                <p>Every cat loves watching birds… and catching them</p>

                <b-button class="mt-auto" href="/categories/1/products" variant="primary">Go Grab One</b-button>
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
    name: 'home',
    data() {
      return {}
    }
  }
</script>

<style>
  #home {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
