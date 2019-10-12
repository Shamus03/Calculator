<template>
  <div id="app">
    <div
      ref="stack"
      class="stack"
    >
      <p
        v-for="(v,i) in displayedStack"
        :key="i"
      >
        {{ v }}
      </p>
    </div>
    <div
      ref="buffer"
      class="buffer"
      :style="{
        fontSize: (5 - (buffer.length > 7 ? (buffer.length - 5) / 3 : 0)) + 'rem'
      }"
    >
      {{ displayedBuffer }}
    </div>

    <table class="calc">
      <tbody>
        <tr>
          <td>
            <button
              v-if="bufferEmpty"
              class="btn-light"
              @touchend="clearAll()"
            >
              AC
            </button>
            <button
              v-else
              class="btn-light"
              @touchend="clear()"
            >
              C
            </button>
          </td>
          <td>
            <button
              class="btn-light"
              @touchend="toggleNegative()"
            >
              +/-
            </button>
          </td>
          <td>
            <button
              class="btn-light"
              :class="second && 'active'"
              @touchend="second = !second"
            >
              2<sup>nd</sup>
            </button>
          </td>
          <td>
            <button
              class="btn-orange"
              @touchend="divide()"
            >
              ÷
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button
              v-if="second"
              class="btn-orange"
              @touchend="square()"
            >
              x<sup>2</sup>
            </button>
            <button
              v-else
              class="btn-num"
              @touchend="type(7)"
            >
              7
            </button>
          </td>
          <td>
            <button
              v-if="second"
              class="btn-orange"
              @touchend="rootn()"
            >
              <sup>y</sup>√x
            </button>
            <button
              v-else
              class="btn-num"
              @touchend="type(8)"
            >
              8
            </button>
          </td>
          <td>
            <button
              class="btn-num"
              @touchend="type(9)"
            >
              9
            </button>
          </td>
          <td>
            <button
              class="btn-orange"
              @touchend="multiply()"
            >
              ×
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button
              v-if="second"
              class="btn-orange"
              @touchend="sqrt()"
            >
              √
            </button>
            <button
              v-else
              class="btn-num"
              @touchend="type(4)"
            >
              4
            </button>
          </td>
          <td>
            <button
              v-if="second"
              class="btn-orange"
              @touchend="power()"
            >
              x<sup>y</sup>
            </button>
            <button
              v-else
              class="btn-num"
              @touchend="type(5)"
            >
              5
            </button>
          </td>
          <td>
            <button
              class="btn-num"
              @touchend="type(6)"
            >
              6
            </button>
          </td>
          <td>
            <button
              class="btn-orange"
              @touchend="subtract()"
            >
              −
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button
              class="btn-num"
              @touchend="type(1)"
            >
              1
            </button>
          </td>
          <td>
            <button
              class="btn-num"
              @touchend="type(2)"
            >
              2
            </button>
          </td>
          <td>
            <button
              class="btn-num"
              @touchend="type(3)"
            >
              3
            </button>
          </td>
          <td>
            <button
              class="btn-orange"
              @touchend="add()"
            >
              +
            </button>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <button
              class="btn-num"
              @touchend="type(0)"
            >
              0
            </button>
          </td>
          <td>
            <button
              class="btn-num"
              @touchend="type('.')"
            >
              .
            </button>
          </td>
          <td>
            <button
              class="btn-orange"
              @touchend="push()"
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

const shortenNumber = (v: string | number): string => {
  const [first, ...rest] = v.toString().split('.')
  return [first.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'), ...rest.map(r => r.slice(0, 6))].join('.')
}

export default Vue.extend({
  data () {
    return {
      buffer: '0',
      nextTypeWillPush: false,
      nextTypeWillClear: false,
      stack: [] as number[],
      second: false,
    }
  },
  computed: {
    displayedBuffer (): string {
      return shortenNumber(this.buffer)
    },
    displayedStack (): string[] {
      return this.stack.map(shortenNumber)
    },
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
      this.second = false
      this.$nextTick(() => {
        const s = this.$refs.buffer as HTMLDivElement
        s.scrollLeft = s.scrollWidth
      })
    },
  },
  methods: {
    clear () {
      this.buffer = '0'
      this.second = false
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

      if (this.nextTypeWillClear) {
        this.nextTypeWillClear = false
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
      this.nextTypeWillClear = true
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
    sqrt () {
      this.unaryOperation(a => Math.sqrt(a))
    },
    square () {
      this.unaryOperation(a => a * a)
    },
    unaryOperation (f: (a: number) => number) {
      const a = +this.buffer
      this.buffer = f(a).toString()
      this.nextTypeWillPush = true
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

html {
  touch-action: none;
}

sup {
  font-size: 50%;
}

#app {
  bottom: 0;
  left: 0;
  position: absolute;
  margin-bottom: 3.9em;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
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
  border-spacing: .8rem .8rem;
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
        outline: none;
        user-select: none;
      }

      &[colspan="2"] {
        padding: 0;
        button {
          text-align: left;
          padding-left: 1.5rem;
          width: calc(100% - .4rem);
        }
      }
    }
  }
}

@mixin button($bg, $fg) {
  background-color: $bg;
  color: $fg;
  font-size: 1.8rem;
  transition: background-color .5s;
  &:active, &.active {
    background-color: lighten($bg, 20%);
    transition: background-color 0s;
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
