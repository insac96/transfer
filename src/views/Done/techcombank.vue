<template>
  <div class="Techcombank" :style="{
		'background': `url(${require('@/assets/techcombank/bg.png')})`,
		'background-position': 'top',
		'background-size': '100%',
		'background-repeat': 'no-repeat'
  }">
    <!--Header-->
    <div class="Header">
      <img src="@/assets/techcombank/done.png" width="85px" @click="clone">
      <img src="@/assets/techcombank/logo.png" width="200px">
    </div>

    <!--Content-->
    <div class="Content">
      <!--Info-->
      <div class="Content__Info">
        <p>Chuyển thành công</p>
        <p>tới <span style="text-transform: uppercase">{{ DataTransfer.person.name }}</span></p>
        <p>VND {{ DataTransfer.money.toLocaleString('vi-VN') }}</p>
      </div>

      <!--Bank-->
      <div class="Content__Box">
        <p>Thông tin chi tiết</p>
        <span>{{ DataTransfer.person.bank.vn_name }}</span>
        <br>
        <span>{{ DataTransfer.person.stk }}</span>
      </div>

      <!--About-->
      <div class="Content__Box">
        <p>Lời nhắn</p>
        <span>{{ DataTransfer.about }}</span>
      </div>

      <!--Time-->
      <div class="Content__Box">
        <p>Ngày thực hiện</p>
        <span>{{ DataTransfer.time.f }}</span>
      </div>

      <!--Code-->
      <div class="Content__Box">
        <p>Mã giao dịch</p>
        <span>{{ `FT2234${!!DataTransfer.code ? DataTransfer.code : '733359827'}` }}</span>
      </div>
    </div>

    <!--Footer-->
    <div class="Footer">
      <button @click="close">Hoàn thành</button>
      <button @click="close">Chia sẻ</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Techcombank',

  computed: {
    DataTransfer () {
      return this.$store.getters.getData
    },
  },

  created () {
    this.$meta.changeTitle('Techcombank')
		this.$meta.changeColor('#fff8e5')
	},

  mounted() {
    if(!this.DataTransfer.source) return this.$router.push('/')
    if(!this.DataTransfer.money) return this.$router.push('/')
    if(!this.DataTransfer.person) return this.$router.push('/')
    if(!this.DataTransfer.about) return this.$router.push('/')
    if(!this.DataTransfer.code) return this.$router.push('/')
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

<style lang="sass" scoped>
@import '@/assets/techcombank/style.sass'
</style>
