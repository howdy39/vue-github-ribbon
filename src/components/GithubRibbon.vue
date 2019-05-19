<template>
  <a
    :id="componentId"
    :title="title"
    :class="[position]"
    :href="href"
    class="github-fork-ribbon"
  >{{title}}</a>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  props: {
    href: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: "Fork me on GitHub"
    },
    position: {
      type: String,
      default: "right-top",
      validator: function(value) {
        return [
          "right-top",
          "right-bottom",
          "left-top",
          "left-bottom"
        ].includes(value);
      }
    },
    color: {
      type: String,
      default: "black"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    componentId() {
      return `vue-ribbon-${this._uid}`;
    }
  },
  methods: {
    isLightColor() {
      let rgb = parseInt(this.color.substring(1), 16);
      let r = (rgb >> 16) & 0xff;
      let g = (rgb >> 8) & 0xff;
      let b = (rgb >> 0) & 0xff;
      let luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      return luma > 128;
    },
    dynamicCSSClass() {
      let nodeId = "vue-ribbon-bkg-" + this._uid;
      let style = document.getElementById(nodeId);
      if (!style) {
        style = document.createElement("style");
        style.id = nodeId;
        style.type = "text/css";
        this.$el.appendChild(style);
      }
      let cssClass = `#${this.componentId}:before { background-color: ${
        this.color
      }} `;
      if (this.isLightColor()) {
        cssClass += `#${
          this.componentId
        }:after { color: #000; border-color: #000;}`;
      }
      style.innerHTML = cssClass;
    }
  },
  mounted: function() {
    this.dynamicCSSClass();
  },
  beforeUpdate: function() {
    this.dynamicCSSClass();
  }
});
</script>


<style lang="scss" scoped>
@import "~github-fork-ribbon-css/gh-fork-ribbon.css";
</style>
