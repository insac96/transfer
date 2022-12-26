<template>
	<div class="MB">
		<!--Header-->
    <div class="Header" :style="{
      'background': `url(${require('@/assets/mb/bg.png')})`,
      'background-position': 'bottom',
      'background-size': 'cover',
      'background-repeat': 'no-repeat'
    }">
      <img :src="require('@/assets/mb/done.png')" width="45px">
      <div class="Title">Bạn đã chuyển khoản thành công</div>
      <div class="Money">{{ money }} VND</div>

      <button @click="clone">Chia sẻ</button>
    </div>

    <!--Body-->
    <div class="Body">
      <!--Person To-->
      <div class="To">
        <div class="To__Title">Đến tài khoản</div>

        <div class="To__Content">
          <div class="To__Content__Left">
            <img :src="`/img/banks/${DataTransfer.person.bank.icon}.png`" width="30px">
          </div>

          <div class="To__Content__Right">
            <div class="To__Content__Right__Name">{{ DataTransfer.person.name }}</div>
            <div class="To__Content__Right__STK">{{ DataTransfer.person.stk }}</div>
            <div class="To__Content__Right__Bank">
              {{ DataTransfer.person.bank.vn_name }} ({{DataTransfer.person.bank.shortName}})
            </div>
          </div>
        </div>
      </div>

      <!--Content-->
      <div class="Content">
        <!--Person To-->
        <div class="Box">
          <span>Tài khoản nguồn</span>
          <div>
            <p>{{ personFrom.stk }}</p>
            <p style="font-weight: bold">{{ personFrom.name }}</p>
          </div>
        </div>

        <!--About-->
        <div class="Box">
          <span>Nội dung</span>
          <div>
            <p>{{ personFrom.name }}</p>
            <p>chuyển khoản</p>
          </div>
        </div>

        <!--Time-->
        <div class="Box">
          <span>Thời gian</span>
          <p>{{ DataTransfer.time.t }}, {{ DataTransfer.time.d }}</p>
        </div>

        <!--Hinh Thuc-->
        <div class="Box">
          <span>Hình thức chuyển</span>
          <p>Chuyển nhanh Napas 247</p>
        </div>

        <!--COde-->
        <div class="Box">
          <span>Mã giao dịch</span>
          <p>{{ `FT2234${!!DataTransfer.code ? DataTransfer.code : '733359827'}` }}</p>
        </div>
      </div>

      <!--Control-->
      <div class="Control">
        <div>
          <img :src="require('@/assets/mb/acc.png')" width="18px">
          Lưu người hưởng thụ
        </div>

        <div @click="clone">
          <img :src="require('@/assets/mb/save.png')" width="18px">
          Lưu mẫu giao dịch
        </div>
      </div>

      <!--Footer-->
      <div class="Footer">
        <button @click="close">Về trang chủ</button>
        <button @click="$router.push('/')">Tạo giao dịch khác</button>
      </div>
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
    money () {
      return String(this.DataTransfer.money.toLocaleString('vi-VN')).replaceAll('.', ',')
    },
    personFrom () {
      return {
        name: 'TRAN TUAN ANH',
        stk: 9888109377777
      }
    }
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