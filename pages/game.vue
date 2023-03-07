<template>
  <div class="queue-box">
    <UnitCart v-for="(unit, index) in queue" :key="index" :name="unit.name" :damage="unit.damage" :current-health="unit._currentHealth" :max-health="unit._maxHealth" :ally="unit.ally"/>
  </div>
</template>

<script>
import UnitClass from "~/assets/js/UnitClass"
import UnitCart from "@/components/UnitCart.vue";
export default {
  name: "game",
  components: {UnitCart},
  layout: "game",
  mounted() {
    const randomResult = Math.floor(Math.random() * 2) + 1
    this.currentPlayer = randomResult === 1 ? 'Roman' : 'Artem'
  },
  computed: {
    queue() {
      const queue = [ ...this.units ].sort(function (a, b) {
        return b.initiative - a.initiative
      })

      const order = []

      for (let i = 0; i < this.config.maxQueueValue; i++) {
        order.push(queue[i % queue.length])
      }

      return order
    }
  },
  data() {
    return {
      config: {
        maxQueueValue: 20
      },
      currentPlayer: null,
      units: [
        new UnitClass('01', 'Roman', true, 1, 18,'war', 'human', 100, 15),
        new UnitClass('02', 'Artem', true, 1, 17,'assassin', 'human', 100, 16),
        new UnitClass('03', 'Ryllae', false,1, 12,'paladin', 'elf', 50, 5),
        new UnitClass('04', 'Shefel', false, 1, 10, 'cleric', 'elf', 50, 5),
        new UnitClass('05', 'Balon', false,3, 16, 'war', 'dragon', 300, 38)
      ]
    }
  },
  methods: {
    doAttack(toHero, fromHero) {
      // const damage = this.heroes[fromHero].damage
      // this.heroes[toHero].getDamage(damage)
    }
  }
}
</script>


<style scoped>
.queue-box {
  width: 100%;
  height: auto;
  border: 1px solid #00faff;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  gap: 5px;
  overflow-x: hidden;
  box-sizing: border-box;
}

</style>
