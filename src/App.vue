<template>
  <div id="app">
    <div id="nav">
      <a href="#home">Home </a>
      <a href="#menu">Menu</a>
      <a href="#testi">Testimoni</a>
      <a href="#contact">Contact</a>
    </div>
    <router-view/>
    <div>
    </div>
  </div>

</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

html {
  scroll-behavior: smooth;
}
#app {
  font-family: 'poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #575757;
}

#nav {
  padding: 1rem;
  display: flex;
  justify-content: center;

  a {
    font-size: 16px;
    color: #575757;
    text-decoration: none;
    padding: .4rem 2rem;
    font-weight: 500;

    &.router-link-exact-active {
      font-weight: bold;
      color: #FB9300;
    }
  }
}
</style>
