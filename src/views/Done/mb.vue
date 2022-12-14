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

      <div class="Info">
        <div class="Info__Title">Đến tài khoản</div>

        <div class="Info__Content">
          <div class="Info__Content__Left">
            <img :src="`/img/banks/${DataTransfer.person.bank.icon}.png`" width="30px">
          </div>

          <div class="Info__Content__Right">
            <div class="Info__Content__Right__Name">{{ DataTransfer.person.name }}</div>
            <div class="Info__Content__Right__STK">{{ DataTransfer.person.stk }}</div>
            <div class="Info__Content__Right__Bank">
              {{ DataTransfer.person.bank.vn_name }} ({{DataTransfer.person.bank.shortName}})
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Content-->
    <div class="Body">
      <div class="Content">

        <div class="Box">
          <span>Tài khoản nguồn</span>
          <div>
            <p>{{personTo.stk}}</p>
            <p style="font-weight: bold">{{personTo.name}}</p>
          </div>
        </div>

        <div class="Box">
          <span>Nội dung</span>
          <div>
            <p>{{personTo.name}}</p>
            <p>chuyen khoan</p>
          </div>
        </div>

        <div class="Box">
          <span>Thời gian</span>
          <p>{{ DataTransfer.time.t }}, {{ DataTransfer.time.d }}</p>
        </div>

        <div class="Box">
          <span>Hình thức chuyển</span>
          <p>Chuyển nhanh Napas 247</p>
        </div>

        <div class="Box">
          <span>Mã giao dịch</span>
          <p>{{ `FT2234${!!DataTransfer.code ? DataTransfer.code : '733359827'}` }}</p>
        </div>
      </div>

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
      return String(this.DataTransfer.money.toLocaleString('vi-VN')).replace('.', ',')
    },
    personTo () {
      return {
        name: 'PHAM TRUNG VU',
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