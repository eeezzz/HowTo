<template>
  <div>
    <div class="container">
      <img src="/static/img_avatar.png" alt="Avatar" class="image">
      <div class="overlay">
        <div class="text">My name is John</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
* {
  border: 1px solid black;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* container needed to position the overlay. */
.container{
  position: relative;
  width: 50%;
}

/* make the image to responsive */
.image {
  width: 100%;
  height: auto;
}

/* the overlay effect(full heght and width) */
.overlay{
  position: absolute;
  /* left: 0;
  bottom: 0;
  right: 0; */
  top: 0;
  background-color: #008cba;
  overflow: hidden;
  width: 100%;
  height: 100%;
  transition: .3s ease;
  transform: scale(0);

}

.container:hover .overlay{
  transform: scale(1);
}


.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  




}

</style>