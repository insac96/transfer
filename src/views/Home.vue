<template>
	<div class="Create">
		<!--Header-->
		<div class="Header">
			<div class="Title">Giao dịch mới</div>
			<div class="Info">Trung tâm giao dịch liên ngân hàng</div>

			<div class="Source">
				<button :disabled="source == 'techcombank'" @click="source = 'techcombank'">Techcombank</button>
				<button :disabled="source == 'mb'" @click="source = 'mb'">MB Bank</button>
			</div>
		</div>

		<!--Content-->
		<form class="Content">
			<input v-model="person.name" placeholder="Tên người nhận" style="text-transform: uppercase" />

			<UiBanks v-model="person.bank" :key="keyword"></UiBanks>

			<input v-model="person.stk" placeholder="Số tài khoản" />
			
			<UiMoney v-model="money"></UiMoney>

			<input v-model="about" placeholder="Nội dung chuyển khoản" />
			
			<button @click="transfer">Xác Nhận</button>
		</form>

		<!--Footer-->
		<div class="Footer">
			<button @click="$router.push('/history')">Hoạt động gần đây</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Create',
	
	data() {
		return {
			source: 'techcombank',

			money: null,

			about: 'ANH chuyen khoan',

			person : {
				name: null,
				stk: null,
				bank: null,
			},

			code: null,
		}
	},

	computed: {
		DataTransfer () {
			return this.$store.getters.getData
		}
	},

	created () {
		this.$meta.changeTitle('Transfer')
		this.$meta.changeColor('#101010')
	},

	mounted () {
		this.checkClone()
	},

	methods: {
		checkClone () {
			if(this.DataTransfer.type !== 'clone') return
			
			this.source = this.DataTransfer.source
			this.person.name = this.DataTransfer.person.name
			this.person.stk = this.DataTransfer.person.stk
			this.person.bank = this.DataTransfer.person.bank
			this.about = this.DataTransfer.about

			this.$forceUpdate()
		},
		
		transfer () {
			if(!this.money) return
			if(!this.person.name) return
			if(!this.person.stk) return
			if(!this.person.bank) return

			const data = {
				source: this.source,
				money: this.$util.localeStringToNumber(this.money),
				person: this.person,
				about: this.about,
				time: this.$bank.getTime(),
				code: this.$bank.getCode()
			}

			this.$store.commit('updateType', 'transfer')
			this.$store.commit('updateData', data)

			this.$history.add(data)

			this.$router.push(`/done/${this.source}`)
		}
	}
}
</script>

<style lang="sass">
.Create
	display: flex
	flex-direction: column
	width: 100%
	height: 100vh
	padding: 16px

	.Header
		.Title
			font-size: 1.6rem
			font-weight: 600
		.Info
			font-size: 0,8rem
			color: #999
		.Source
			margin: 24px 0
			display: flex
			justify-content: center

			button
				padding: 12px
				margin: 0 3px
				border-radius: 12px
				border: 1px solid #64626d
				background: none
				color: #64626d
				&:disabled
					border: 1px solid #142ee8
					color: #142ee8
					pointer-events: none
					user-select: none
					
	.Content
		flex-grow: 1
		display: flex
		flex-direction: column

		input
			width: 100%
			background: #f5f5f5
			margin: 8px 0
			padding: 16px 14px
			border-radius: 12px
			font-size: 0.9rem
			color: #000000

		button
			margin: 8px 0
			padding: 12px
			border-radius: 12px
			font-size: 0.95rem
			background: #142ee8
			color: #ffffff

	.Footer
		display: flex
		justify-content: center

		button
			min-width: 200px
			padding: 12px
			border-radius: 12px
			background: #142ee8
			color: #ffffff
</style>