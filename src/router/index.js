import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ToggleAnElement from '@/components/Toggle-an-element'
import SlideShow from '@/components/SlideShow/SlideShow'
import ImageHoverOverlay from "@/components/ImageHoverOverlay/ImageHoverOverlay";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/ToggleAnElement",
      name: "ToggleAnElement",
      component: ToggleAnElement
    },
    {
      path: "/SlideShow",
      name: "SlideShow",
      component: SlideShow
    },
    {
      path: "/ImageHoverOverlay",
      name: "ImageHoverOverlay",
      component: ImageHoverOverlay
    },
  ]
});
