<template>
  <section class="choice">
    <v-card elevation="3">
      <h2>
        しーちゃん
        <span>Round: {{ round1 }}, HungerPoint: {{ hp1 }}</span>
      </h2>
      <ul class="choice__list1">
        <li class="choice__list1--check" @click="check_hungry1()">hungry?</li>
        <li v-if="!anger1" class="choice__list1--snack" @click="serve_snack1()">
          snack!
        </li>
        <li v-if="!anger1" class="choice__list1--tuna" @click="serve_tuna1()">
          tuna!
        </li>
        <li class="choice__list1--play" @click="cats_play1()">C play!</li>
      </ul>
      <div v-if="reply1" class="choice__answer">
        <span :class="{ 'anger--active': anger1 }">{{ answer1 }}</span>
      </div>
    </v-card>
    <v-card elevation="3">
      <h2>
        キャンちゃん
        <span>Round: {{ round2 }}, HungerPoint: {{ hp2 }}</span>
      </h2>
      <ul class="choice__list2">
        <li class="choice__list2--check" @click="check_hungry2()">hungry?</li>
        <li v-if="!anger2" class="choice__list2--snack" @click="serve_snack2()">
          snack!
        </li>
        <li v-if="!anger2" class="choice__list2--tuna" @click="serve_tuna2()">
          tuna!
        </li>
        <li class="choice__list2--play" @click="cats_play2()">K play!</li>
      </ul>
      <div v-if="reply2" class="choice__answer">
        <span :class="{ 'anger--active': anger2 }">{{ answer2 }}</span>
      </div>
    </v-card>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export type DataType = {
  round1: number
  round2: number
  hp1: number
  hp2: number
  reply1: boolean
  reply2: boolean
  answer1: string
  answer2: string
  coefficient1: number
  coefficient2: number
  anger1: boolean
  anger2: boolean
}

export default Vue.extend({
  data(): DataType {
    return {
      round1: 0,
      round2: 0,
      hp1: 0,
      hp2: 0,
      reply1: false,
      reply2: false,
      answer1: '',
      answer2: '',
      coefficient1: 1,
      coefficient2: 2,
      anger1: false,
      anger2: false,
    }
  },
  methods: {
    add_round1(): number {
      return this.round1++
    },
    add_round2(): number {
      return this.round2++
    },
    check_hungry1(): boolean {
      if (this.hp1 < 60) {
        this.answer1 = 'まだ大丈夫'
        return (this.reply1 = true)
      } else if (this.hp1 >= 60 && this.hp1 < 100) {
        this.answer1 = 'ハラヘリ'
        return (this.reply1 = true)
      } else {
        this.answer1 = '暴れる'
        this.anger1 = true
        return (this.reply1 = true)
      }
    },
    check_hungry2(): boolean {
      if (this.hp2 < 60) {
        this.answer2 = 'まだ大丈夫'
        return (this.reply2 = true)
      } else if (this.hp2 >= 60 && this.hp2 < 100) {
        this.answer2 = 'ハラヘリ'
        return (this.reply2 = true)
      } else {
        this.answer2 = '暴れる'
        this.anger2 = true
        return (this.reply2 = true)
      }
    },
    serve_snack1(): number {
      if (this.hp1 > 40) {
        return (this.hp1 -= 40)
      } else {
        return (this.hp1 = 0)
      }
    },
    serve_snack2(): number {
      if (this.hp2 > 40) {
        return (this.hp2 -= 40)
      } else {
        return (this.hp2 = 0)
      }
    },
    serve_tuna1(): number {
      return (this.hp1 = 0)
    },
    serve_tuna2(): number {
      return (this.hp2 = 0)
    },
    cats_play1(): number {
      this.add_round1()
      return (this.hp1 += 10 * this.coefficient1)
    },
    cats_play2(): number {
      this.add_round2()
      return (this.hp2 += 10 * this.coefficient2)
    },
  },
})
</script>

<style lang="scss">
.choice {
  max-width: 1200px;
  margin: 0px auto;
  padding: 30px 0 0;
  @include breakpoint-min(xxl) {
    width: calc(100% - 60px);
  }
  @include breakpoint-min(sm) {
    width: calc(100% - 30px);
  }
  .v-card {
    margin: 0px 0 30px;
    background: rgba(255, 255, 255, 0.9);
  }
  h2 {
    padding: 40px 60px 0;
    @include breakpoint-min(xxl) {
      padding: 30px 30px 0px;
    }
    @include breakpoint-min(sm) {
      padding: 20px 10px 0px;
    }
    span {
      font-size: 16px;
      color: #333333;
      padding: 0 0 0 15px;
      @include breakpoint-min(sm) {
        font-size: 14px;
        display: block;
        padding: 10px 0 0 0px;
      }
    }
  }
  &__list1,
  &__list2 {
    display: flex;
    justify-content: space-between;
    margin: 0px auto;
    padding: 40px 0;
    width: 100%;
    max-width: 700px;
    @include breakpoint-min(xxl) {
      padding: 30px 30px;
    }
    @include breakpoint-min(md) {
      flex-wrap: wrap;
      max-width: 350px;
      justify-content: space-around;
    }
    @include breakpoint-min(sm) {
      padding: 20px 10px;
    }
    li {
      width: 150px;
      height: 150px;
      border-radius: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 1.6rem;
      cursor: pointer;
      transition: 0.3s;
      @include breakpoint-min(md) {
        width: 120px;
        height: 120px;
        font-size: 1.4rem;
        &:nth-child(1),
        &:nth-child(2) {
          margin: 0 0 20px;
        }
      }
    }
    &--check {
      background: #d13b40;
      &:hover {
        transition: 0.3s;
        background: #fff;
        color: #d13b40;
        font-weight: bold;
        border: 2px solid #d13b40;
      }
    }
    &--snack {
      background: #ffaf12;
      &:hover {
        transition: 0.3s;
        background: #fff;
        color: #ffaf12;
        font-weight: bold;
        border: 2px solid #ffaf12;
      }
    }
    &--tuna {
      background: #34558b;
      &:hover {
        transition: 0.3s;
        background: #fff;
        color: #34558b;
        font-weight: bold;
        border: 2px solid #34558b;
      }
    }
    &--play {
      background: #4ec5a5;
      &:hover {
        transition: 0.3s;
        background: #fff;
        color: #4ec5a5;
        font-weight: bold;
        border: 2px solid #4ec5a5;
      }
      // background: #4ec5a5;
    }
  }
  &__answer {
    padding: 20px 60px 40px;
    font-size: 1.2rem;
    @include breakpoint-min(xxl) {
      padding: 15px 30px 25px;
    }
    @include breakpoint-min(sm) {
      padding: 10px 10px 20px;
    }
    .anger--active {
      display: inline-block;
      animation: shake 0.2s infinite;
      color: #d13b40;
      font-weight: bold;
      font-size: 1.4rem;
    }
  }
}
@keyframes shake {
  0%,
  100% {
    transform: translate(0, 0) rotateZ(0);
  }
  25% {
    transform: translate(4px, 4px) rotateZ(2deg);
  }
  50% {
    transform: translate(0, 4px) rotateZ(0);
  }
  75% {
    transform: translate(4px, 0) rotateZ(-2deg);
  }
}
</style>
