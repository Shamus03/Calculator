<template>
  <div id="app">
    <div
      ref="stack"
      class="stack"
    >
      <p
        v-for="(v,i) in stack"
        :key="i"
      >
        {{ v | commas }}
      </p>
    </div>
    <div
      ref="buffer"
      class="buffer"
      :style="{
        fontSize: (5 - (buffer.length > 7 ? (buffer.length - 5) / 3 : 0)) + 'rem'
      }"
    >
      {{ buffer | commas }}
    </div>

    <table class="calc">
      <tbody>
        <tr>
          <td>
            <button
              v-if="bufferEmpty"
              class="btn-light"
              @click="clearAll()"
            >
              AC
            </button>
            <button
              v-else
              class="btn-light"
              @click="clear()"
            >
              C
            </button>
          </td>
          <td>
            <button
              class="btn-light"
              @click="toggleNegative()"
            >
              +/-
            </button>
          </td>
          <td>
            <button
              class="btn-light"
              @click="divideBy100()"
            >
              %
            </button>
          </td>
          <td>
            <button
              class="btn-orange"
              @click="divide()"
            >
              ÷
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button
              class="btn-num"
              @click="type(7)"
            >
              7
            </button>
          </td>
          <td>
            <button
              class="btn-num"
              @click="type(8)"
            >
              8
            </button>
          </td>
          <td>
            <button
              class="btn-num"
              @click="type(9)"
            >
              9
            </button>
          </td>
          <td>
            <button
              class="btn-orange"
              @click="multiply()"
            >
              ×
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button
              class="btn-num"
              @click="type(4)"
            >
              4
            </button>
          </td>
          <td>
            <button
              class="btn-num"
              @click="type(5)"
            >
              5
            </button>
          </td>
          <td>
            <button
              class="btn-num"
              @click="type(6)"
            >
              6
            </button>
          </td>
          <td>
            <button
              class="btn-orange"
              @click="subtract()"
            >
              −
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button
              class="btn-num"
              @click="type(1)"
            >
              1
            </button>
          </td>
          <td>
            <button
              class="btn-num"
              @click="type(2)"
            >
              2
            </button>
          </td>
          <td>
            <button
              class="btn-num"
              @click="type(3)"
            >
              3
            </button>
          </td>
          <td>
            <button
              class="btn-orange"
              @click="add()"
            >
              +
            </button>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <button
              class="btn-num"
              @click="type(0)"
            >
              0
            </button>
          </td>
          <td>
            <button
              class="btn-num"
              @click="type('.')"
            >
              .
            </button>
          </td>
          <td>
            <button
              class="btn-orange"
              @click="push()"
            >
              ⌤
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface Button {
  text: string,
  action: (() => void) | string
  class?: string
}

export default Vue.extend({
  filters: {
    commas (v: number | string): string {
      const [first, ...rest] = v.toString().split('.')
      return [first.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'), ...rest].join('.')
    },
  },
  data () {
    return {
      buffer: '0',
      nextTypeWillPush: false,
      stack: [] as number[],
    }
  },
  computed: {
    bufferEmpty (): boolean {
      return this.buffer === '0'
    },
  },
  watch: {
    stack () {
      this.$nextTick(() => {
        const s = this.$refs.stack as HTMLDivElement
        s.scrollTop = s.scrollHeight
      })
    },
    buffer () {
      this.$nextTick(() => {
        const s = this.$refs.buffer as HTMLDivElement
        s.scrollLeft = s.scrollWidth
      })
    },
  },
  methods: {
    clear () {
      this.buffer = '0'
    },
    clearAll () {
      this.clear()
      this.stack = []
    },
    type (v: number | string) {
      if (this.nextTypeWillPush) {
        this.nextTypeWillPush = false
        this.stack.push(+this.buffer)
        this.clear()
      }

      if (typeof v === 'number') {
        this.buffer += v
      } else {
        if (v === '.' && !this.buffer.includes('.')) {
          this.buffer += '.'
        }
      }
      this.buffer = this.buffer.replace(/^0([^.])/, '$1')
    },
    push () {
      this.stack.push(parseFloat(this.buffer))
      this.buffer = '0'
      this.nextTypeWillPush = false
    },
    divideBy100 () {
      const b = +this.buffer
      this.buffer = (b / 100).toString()
      this.nextTypeWillPush = true
    },
    toggleNegative () {
      this.buffer = (-this.buffer).toString()
    },
    add () {
      this.operation((a, b) => a + b)
    },
    subtract () {
      this.operation((a, b) => a - b)
    },
    multiply () {
      this.operation((a, b) => a * b)
    },
    divide () {
      this.operation((a, b) => a / b)
    },
    operation (f: (a: number, b: number) => number) {
      const b = +this.buffer
      const a = this.stack.pop() || 0
      this.buffer = f(a, b).toString()
      this.nextTypeWillPush = true
    },
  },
})
</script>

<style lang="scss">
body {
  background: black !important;
}

#app {
  bottom: 0;
  left: 0;
  position: absolute;
  margin-bottom: 3.9em;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  width: 100%;
}

.buffer, .stack {
  text-align: right;
  color: white;
  padding-right: 1.5rem;
}

.buffer {
  font-size: 5em;
  overflow-x: scroll;
}

.stack {
  height: 9em;
  overflow-y: scroll;
  p {
    margin-bottom: 0;
    margin-top: 0;
  }
}

.calc {
  $radius: 2.3rem;

  width: 100%;
  border-spacing: 0 .8rem;
  border-collapse: separate;

  tr {
    td {
      text-align: center;
      button {
        padding: 0;
        border-radius: $radius;
        border: 1px solid transparent;
        width: $radius * 2;
        height: $radius * 2;
      }

      &[colspan="2"] {
        padding: 0;
        button {
          text-align: left;
          padding-left: 1.5rem;
          width: calc(100% - 1rem);
        }
      }
    }
  }
}

@mixin button($bg, $fg) {
  background-color: $bg;
  color: $fg;
  font-size: 1.8rem;
  outline: none;
  user-select: none;
  &:active {
    background-color: lighten($bg, 20%);
  }
}

.btn-light {
  @include button(#a6a6a6, black);
}

.btn-orange {
  @include button(#ff9511, white);
  font-size: 2.4rem;
}

.btn-num {
  @include button(#333333, white);
  font-size: 2.2rem;
}
</style>
