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
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"
                >Plan & Book</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Travel information</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Experience</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Flysmiles</a>
            </li>
          </ul>
          <form class="d-flex">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container-fluid">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarTogglerDemo"
                  aria-controls="navbarTogglerDemo"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link" href="#"><i class="fas fa-search"></i></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">EN:SI</a>
                    </li>
                    <li class="nav-item">
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
export default {
  name: "NavBar",
};
</script>

<style scoped>
.logo {
  width: 280px;
}
.nav-link {
  color: #0088dd !important;
}
.nav-link:hover {
  color: #153d8a !important;
  transition: 0.3s;
  cursor: pointer;
}
</style>
