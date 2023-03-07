<template>
  <div class="cart" :style="{ borderColor: ally ? '#5cb87a' : '#f56c6c' }">
    <div class="cart-header">
      <span>{{ name }}</span>
    </div>
    <div class="cart-img">
      <img src="https://picsum.photos/160" :alt="name"/>
    </div>
    <div class="cart-body">
      <span><i class="el-icon-ice-cream-round"></i> {{ damage }}</span>
    </div>
    <div class="cart-footer">
      <el-progress :text-inside="true" :stroke-width="20" :percentage="currentHealth / maxHealth * 100" :format="getHpText" :color="colors" status="exception"></el-progress>
    </div>
  </div>
</template>

<script>
export default {
  name: "UnitCart",
  props: {
    name: String,
    damage: Number,
    currentHealth: Number,
    maxHealth: Number,
    ally: Boolean
  },
  data() {
    return {
      colors: [
        {color: '#f56c6c', percentage: 33},
        {color: '#e6a23c', percentage: 66},
        {color: '#5cb87a', percentage: 100}
      ]
    }
  },
  methods: {
    getHpText() {
        return this.currentHealth + '/' + this.maxHealth
    }
  }
}
</script>

<style scoped>
.cart {
  min-width: 160px;
  width: 160px;
  border: 1px solid #666666;
  display: flex;
  flex-direction: column;
}

.cart-img img {
  width: 160px;
  height: 160px;
}
</style>
