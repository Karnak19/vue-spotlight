<template>
  <h1>HOME PAGE</h1>
  <hr />
  <p>Type <code>CTRL + K</code> to open the Spotlight navigation search !</p>
  <main class="container">
    <article class="article">
      <img src="https://i.imgur.com/TBo1FSO.png" alt="" />
      <div>
        <h1>
          Lorem ipsum dolor sit.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error recusandae quos, in maiores ullam delectus cum asperiores
          architecto sapiente vitae.
        </p>
      </div>
    </article>
    <article class="article">
      <img src="https://i.imgur.com/TBo1FSO.png" alt="" />
      <div>
        <h1>
          Lorem ipsum dolor sit.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error recusandae quos, in maiores ullam delectus cum asperiores
          architecto sapiente vitae.
        </p>
      </div>
    </article>
    <article class="article">
      <img src="https://i.imgur.com/TBo1FSO.png" alt="" />
      <div>
        <h1>
          Lorem ipsum dolor sit.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error recusandae quos, in maiores ullam delectus cum asperiores
          architecto sapiente vitae.
        </p>
      </div>
    </article>
  </main>
</template>

<script>
// import { useRoute } from 'vue-router';

export default {
  components: {},
  setup() {},
};
</script>

<style scoped>
p {
  font-size: 36px;
}
code {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px;
  border-radius: 2px;
  color: rgb(255, 255, 255);
  border: solid 1px rgba(0, 0, 0, 0.2);
}

.container {
  display: flex;
}

.article {
  max-width: 33%;
}

.article img {
  width: 60%;
}

.article p {
  font-size: inherit;
  padding: 0 15px;
}
</style>
