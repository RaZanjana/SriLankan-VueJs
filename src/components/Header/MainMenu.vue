<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="../../assets/icons/logo.png" class="logo" alt="" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item text-center">
              <a class="nav-link" href="#">Plan & Book</a>
            </li>
            <li class="nav-item text-center">
              <a class="nav-link" href="#">Travel information</a>
            </li>
            <li class="nav-item text-center">
              <a class="nav-link" href="#">Experience</a>
            </li>
            <li class="nav-item text-center">
              <a class="nav-link" href="#">Flysmiles</a>
            </li>
          </ul>
          <form class="d-flex justify-content-center">
            <nav class="navbar navbar-expand-lg navbar-light bg-white w-100">
              <div class="container d-flex justify-content-center">
                <button
                  class="navbar-toggler mb-1"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#rightMenu"
                  aria-controls="rightMenu"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
                  <i class="fas fa-angle-down"></i>
                </button>
                <div class="collapse navbar-collapse" id="rightMenu">
                  <ul class="navbar-nav me-auto mb-lg-0 d-flex justify-content-evenly">
                    <li class="nav-item text-center">
                      <a class="nav-link" href="#"><i class="fas fa-search"></i></a>
                    </li>
                    <li class="nav-item text-center">
                      <a class="nav-link" href="#">
                        <LangIco />
                      </a>
                    </li>
                    <li class="nav-item text-center">
                      <a class="nav-link"><i class="fas fa-sign-in-alt"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import LangIco from '../Header/LangIco.vue'
export default {
  name: "NavBar",
  components: {
    LangIco
  }
};
</script>

<style scoped>
.logo {
  width: 280px;
}
.nav-link {
  color: #0088dd !important;
  position: relative;
}
.nav-link:hover {
  color: #153d8a !important;
  transition: 0.3s;
  cursor: pointer;
}
.navbar-toggler:focus {
    box-shadow: 0 0 0 0.05rem #0088dd;
}
#rightMenu .navbar-nav{
  flex-direction: row !important;
}

.nav-link:after {
        color: #0088dd !important;
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #0088dd;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }
    .nav-link:hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
      .btn-icon{
          background-color: rgba(#0088dd, .2);
      }
      .navbar-toggler:hover{
        border-color: #0088dd;
      }
</style>
