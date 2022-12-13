<template>
	<div class="MB">
		<!--Header-->
    <div class="Header" :style="{
      'background': `url(${require('@/assets/mb/bg.png')})`,
      'background-position': 'bottom',
      'background-size': 'cover',
      'background-repeat': 'no-repeat'
    }">
      <div class="Title">Giao dịch chuyển khoản</div>

      <div class="Info">
        <div class="Info__Icon" @click="clone">
          <i class='bx bx-check'></i>
        </div>
        <div class="Info__Text">Giao dịch thành công</div>
      </div>
    </div>

		<!--Content-->
    <div class="Content">
      <!--Saw-->
      <div class="Content__Saw">
        <svg
          width="100%"
          height="10"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          class="sawEdge"  
        >
          <defs>
            <pattern id="sawPattern" x="50%" width="20" height="10" patternUnits="userSpaceOnUse">
              <path d="M 0 0 L 10 10 L 20 0 Z"/>
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="10" fill="url(#sawPattern)"/>
        </svg>
      </div>
        
      <!--Time-->
      <div class="Content__Box">
        <p>Ngày giao dịch</p>
        <span>{{ DataTransfer.time.d }}, {{ DataTransfer.time.t }}</span>
      </div>

      <!--Name-->
      <div class="Content__Box">
        <p>Chuyển khoản đến</p>
        <span style="text-transform: uppercase">{{ DataTransfer.person.name }}</span>
      </div>

      <!--STK-->
      <div class="Content__Box">
        <p>Số tài khoản</p>
        <span>{{ DataTransfer.person.stk }}</span>
      </div>

      <!--Bank-->
      <div class="Content__Box">
        <p>Ngân hàng</p>
        <span>{{ DataTransfer.person.bank.vn_name }} ({{DataTransfer.person.bank.shortName}})</span>
      </div>

      <!--Money-->
      <div class="Content__Box">
        <p>Tổng số tiền</p>
        <span>{{ DataTransfer.money.toLocaleString('vi-VN') }}</span>
      </div>

      <!--Money Text-->
      <div class="Content__Box">
        <p>Bằng chữ</p>
        <span>{{ new $util.numberToText(DataTransfer.money, 'Việt Nam đồng').text }}</span>
      </div>

      <!--About-->
      <div class="Content__Box">
        <p>Nội dung chuyển khoản</p>
        <span>{{ DataTransfer.about }}</span>
      </div>
    </div>

    <!--Footer-->
    <div class="Footer">
      <button @click="close()">Hoàn thành</button>
    </div>
	</div>
</template>

<script>
export default {
  name: 'MB',

  computed: {
    DataTransfer () {
      return this.$store.getters.getData
    },
  },

  created () {
    this.$meta.changeTitle('MB Bank')
		this.$meta.changeColor('#142ee8')
	},

  methods: {
    close () {
      this.$store.commit('resetType')
      this.$store.commit('resetData')
      this.$router.go(-1)
    },
    clone () {
      this.$store.commit('updateType', 'clone')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="sass">
@import '@/assets/mb/style.sass'
</style>