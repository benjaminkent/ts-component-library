<template>
  <div class="container">
    <header v-if="factType === 'math'">
      <h2>Get a math fact about</h2>
      <h2>your favorite number!</h2>
    </header>
    <header v-else>
      <h2>Get a piece of trivia about</h2>
      <h2>your favorite number!</h2>
    </header>
    <div class="input-container">
      <form @submit.prevent="handleSubmit">
        <input v-model="number" type="number" placeholder="Enter a number" />
        <transition name="error">
          <span v-if="error" class="error">Please enter a number</span>
        </transition>
        <div class="button-container">
          <button type="submit" v-if="factType === 'math'">Get Fact!</button>
          <button type="submit" v-else>Get Trivia!</button>
        </div>
      </form>
    </div>
    <div class="message">
      <p>{{ numberFact }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { fetchNumberFact } from './ajax'

@Component({})
export default class TsNumberFact extends Vue {
  @Prop(String) readonly factType!: string
  number: number | null = null
  numberFact: string = ''
  error: boolean = false

  async handleSubmit() {
    if (!this.number) {
      this.error = true
      this.numberFact = ''
      return
    }
    this.error = false
    const response = await fetchNumberFact(this.number, this.factType)
    this.numberFact = response.data
  }
}
</script>

<style lang="scss" scoped>
.container {
  font-family: Arial, Helvetica, sans-serif;
  max-width: 350px;
  box-shadow: 0 2px 6px 0 #22222260;
  border-radius: 5px;
  min-height: 350px;
  color: #222;
  header {
    padding: 1rem;
    h2 {
      text-align: center;
      margin: 0;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 30px;
    input {
      width: 100%;
      padding: 10px 0;
      text-indent: 8px;
      font-size: 1rem;
      border: 1px solid #f2f2f2;
      background-color: #f2f2f2;
      color: #555;
    }
    .error {
      margin-top: 5px;
      color: red;
    }
    .button-container {
      margin-top: 1.5rem;
    }
  }
  .message {
    margin: 0 30px;
    p {
      margin: 0;
    }
  }
}
.error-enter-active {
  animation: shake 0.82s ease-in-out;
}
@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }
  30%,
  50%,
  70% {
    transform: translate3d(-3px, 0, 0);
  }
  40%,
  60% {
    transform: translate3d(3px, 0, 0);
  }
}
.error-leave-active {
  transition: opacity 0.5s;
}
.error-enter,
.error-leave-to {
  opacity: 0;
}
</style>
