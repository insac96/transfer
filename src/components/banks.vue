<template>
	<div class="Banks">
		<input 
			placeholder="Chọn ngân hàng"
			@keyup="filterBank" 
			@click="reset"
			v-model="keyword"
		/>

		<transition name="down">
			<div class="Banks__Select" v-if="!!filters">
				<div 
					class="Banks__Select__Item" 
					v-for="(bank, index) in filters" 
					:key="index" 
					@click="action(bank)"
				>
					{{ `${bank.vn_name} (${bank.shortName})` }} 
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	props: {
		bank: { type: String }
	},

	model: {
		prop: 'bank',
		event: 'model'
	},
	
	data() {
		return {
			keyword: '',
			filters: null,
			test: null
		}
	},

	mounted () {
		setTimeout(() => {
			if(!!this.bank) {
				this.keyword = `${this.bank.vn_name} (${this.bank.shortName})`
			}
		}, 100)
	},

	methods: {
		filterBank () {
			this.filters = this.$bank.getFilter(this.keyword)
		},

		action (bank) {
			this.keyword = `${bank.vn_name} (${bank.shortName})`
			this.filters = null
			this.$emit('model', bank)
		},

		reset () {
			this.keyword = null
			this.filters = null
			this.$emit('model', null)
		}
	},
}
</script>

<style lang="sass">
.Banks
	position: relative
	width: 100%

	&__Select
		position: absolute
		top: 100%
		left: 0
		width: 100%
		max-height: 300px
		overflow: auto
		z-index: 1
		background: #ffffff
		border-radius: 12px
		padding: 5px
		box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 0.8)
		&__Item
			font-size: 0.85rem
			padding: 10px
			border-bottom: 1px solid rgba(255,255,255, 0.05)
			cursor: pointer
			user-select: none
		&__Item:last-child
			border-bottom: none
</style>