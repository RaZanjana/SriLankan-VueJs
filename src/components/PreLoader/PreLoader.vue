<template>
    <div class="loader d-flex align-items-center justify-content-center">
      <div>
          <div class="wait h2">Welcome to SriLankan AirLines </div>
      <div class="earth-wrapper">
        <div class="earth"></div>
      </div>  
      </div>
    </div>
</template>

<script>
export default {
    name: "PreLoader",
}
</script>

<style scoped>
.loader {
  text-align: center;
  width: 100%;
  position: relative;
  overflow: hidden;
  height: 100vh;
  margin: 0 auto;
  background-color: #0088dd;
}

.wait {
  color: #ffffff;
}
.iata_code {
    font-size: 6rem;
    opacity:0.3;
  top: 52%;
  position: absolute;
  color: #0099cc;
  }
.departure_city {
  left: 0;
}

.arrival_city {
  right: 1.5rem;
}

.plane {
  position: absolute;
  margin: 0 auto;
  width: 100%;
}

.plane-img {
  -webkit-animation: spin 2.5s linear infinite;
  -moz-animation: spin 2.5s linear infinite;
  animation: spin 2.5s linear infinite;
}

@-moz-keyframes spin {
  100% {
    -moz-transform: rotate(360deg);
  }
}

@-webkit-keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}


.earth-wrapper {
  margin: 0 auto;
  width: 100%;
  padding-top: 2.7rem;
}

.earth {
  width: 170px;
  height: 170px;
  background: url("https://cdn.dribbble.com/users/1401126/screenshots/3890828/media/408d22900b7f3a3d2bf2e841ab8ea9ee.gif");
  border-radius: 100%;
  background-size: 340px;
  animation: earthAnim 12s infinite linear;
  margin: 0 auto;
  border: 1px solid #ffffff;
}

@keyframes earthAnim {
  0% {background-position-x: 0;}
  100% {background-position-x: -340px;}
}

@media screen and (max-width: 420px) {
  .departure_city {
    left: 0;
    right: 0;
    top: 30%;
    position: absolute;
    margin: 0 auto;
  }
  
  .arrival_city {
    left: 0;
    right: 0;
    top: 93%;
    position: absolute;
    margin: 0 auto;
  }
  
  
}
</style>
