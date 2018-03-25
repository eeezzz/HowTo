<template>
  <div>
    <button class="forNewItem" @click="ToggleNewItemSection">Click Me</button>
    
    <transition name="fade">
      <div class="newItemSection" v-show="isShowNewItemSection">
        <p>Hello world</p> 
        <button @click="ToggleNewItemSection">新增</button>
      </div>
    </transition>
    
    <div class="loremString">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet eligendi repudiandae explicabo similique labore ullam nesciunt, dolores tenetur beatae suscipit totam vero excepturi, nulla blanditiis? Dignissimos iusto eius libero accusamus illo molestias ex, eos laborum odit fugiat hic omnis accusantium optio dicta exercitationem deserunt amet repellat minus, illum vero. Doloremque neque consectetur dignissimos rem commodi magnam deleniti laboriosam, unde, cum tempore accusamus doloribus. Possimus exercitationem dolorem rerum molestiae? Libero, beatae reiciendis voluptate praesentium asperiores non! Adipisci, commodi ab, recusandae praesentium unde in incidunt possimus assumenda accusamus dignissimos cupiditate aliquam voluptatum laborum harum pariatur maiores magni. Aut dicta atque ad deserunt!

    </div>

  </div>
</template>

<script>
  export default {
    data(){
      return{
        isShowNewItemSection: false,
      }
    },
    methods:{
      ToggleNewItemSection(){
        this.isShowNewItemSection = !this.isShowNewItemSection 
      }

    }
  }
</script>

<style scoped>
  @import url("style.css");
</style>

