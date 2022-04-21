<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="../../assets/icons/logo.png" class="logo" alt="" />
        </a>
        <button v-on:click="displayMainMenuIco"
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#leftMenu"
          aria-controls="leftMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i v-if="showMenuIco" class="fas fa-bars"></i>
          <i v-if="showCloseIco" class="fas fa-times"></i>
        </button>
        <div class="collapse navbar-collapse" id="leftMenu">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-scroll">
            <li class="nav-item text-center dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="planAndBookDrp" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Plan & Book</a>
              <div class="dropdown-menu" aria-labelledby="planAndBookDrp">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
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
                <button v-on:click="displaySubMenu"
                  class="navbar-toggler mb-1"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#rightMenu"
                  aria-controls="rightMenu"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
                  <i v-if="show" class="fas fa-angle-down"></i>
                  <i v-if="notshow" class="fas fa-angle-up"></i>
                </button>
                <div class="collapse navbar-collapse" id="rightMenu">
                  <ul class="navbar-nav me-auto mb-lg-0 d-flex justify-content-evenly">
                    <li class="nav-item text-center d-flex align-items-center search-nav">
                      <a class="nav-link d-flex align-items-center" href="#">
                        <div class="search-box">
                          <button class="btn-search">
                            <i class="fas fa-search"></i>
                          </button>
                          <input type="text" class="input-search" placeholder="Type to Search...">
                        </div>                        
                        </a>
                    </li>
                    <li class="nav-item text-center d-flex align-items-center">
                      <a class="nav-link" href="#">
                        <LangIco />
                      </a>
                    </li>
                    <li class="nav-item text-center d-flex align-items-center">
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
  },
  data(){
    return{
      show: true,
      notshow : false,
      showMenuIco: true,
      showCloseIco: false
    }
  },
  methods:{
    displaySubMenu(){
      this.show = !this.show
      this.notshow = !this.show
    },
    displayMainMenuIco(){
      this.showMenuIco = !this.showMenuIco
      this.showCloseIco = !this.showCloseIco
    }
  }
};
</script>

<style scoped>
.logo {
  width: 280px;
}
.nav-link {
  color: #0088dd !important;  
}
#leftMenu .nav-link{
  position: relative;
}
.nav-link:hover {
  color: #153d8a !important;
  transition: 0.3s;
  cursor: pointer;
}
.navbar-toggler:focus {
    box-shadow: none !important;
}
#rightMenu .navbar-nav{
  flex-direction: row !important;
}
.navbar-nav-scroll{
  --bs-scroll-height: 100px;
}
#leftMenu .nav-link:after {
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
    #leftMenu .nav-link:hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
      #leftMenu .btn-icon{
          background-color: rgba(#0088dd, .2);
      }
      #leftMenu .navbar-toggler:hover{
        border-color: #0088dd;
      }

      /* Scrollbar Styling */
::-webkit-scrollbar {
    width: 10px;
    overflow: scroll !important;
}
 
::-webkit-scrollbar-track {
    background-color: #f5f5f5;
    -webkit-border-radius: 10px;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: rgba(0, 136, 221, .3);
}

/* Search Bar Style */
.search-box{
  position: relative;
}
.input-search{
  height: 30px;
  width: 30px;
  border-style: none;
  outline: none;
  border-radius: 25px;
  transition: all .5s ease-in-out;
  padding-right: 30px;
  color:#212121;
  font-size: small;
}
.input-search::placeholder{
  color:rgba(0, 136, 221, .4);
}
.btn-search{
  width: 30px;
  height: 30px;
  border-style: none;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  right: 0px;
  color:#0088dd ;
  background-color:transparent;
  pointer-events: painted;  
}
.btn-search:focus ~ .input-search {
  width: 150px;
  background-color: rgba(0, 136, 221, .1);
  border-radius: 8px;
  transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
}
.input-search:focus{
  width: 150px;
  background-color: rgba(0, 136, 221, .1);
  border-radius: 8px;
  transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
  padding-left: 8px;
}
.navbar-toggler{
  outline: none !important;
  border: none !important;
  color: #0088dd !important
}

@media (max-width: 1199px) {
    .logo{
      width: 180px;
    }
    .nav-link{
      font-size: small !important;
    }
}
@media (max-width: 991px){
  .btn-search:hover ~ .input-search {
  width: 150px;
  background-color: rgba(0, 136, 221, .1);
  border-radius: 8px;
  transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
}
.input-search:hover{
  width: 150px;
  background-color: rgba(0, 136, 221, .1);
  border-radius: 8px;
  transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
  padding-left: 8px;
}
}
</style>
