<template>
    <div class="Historys">
        <!--Header-->
        <div class="Header">
            <div class="Title">Hoạt động</div>
            <div class="Info">Lich sử biến động gần đây</div>
        </div>

        <!--Content-->
        <div class="Content">
            <div class="History" v-for="(history, index) in list" :key="index" @click="watch(history)">
                <div class="History__Left">
                    <p>{{ history.person.name }}</p>
                    <span>{{ history.about }}</span>
                </div>

                <div class="History__Right">
                    <p>-{{ history.money.toLocaleString('vi-VN') }}</p>
                    <span>{{ `${history.time.f}` }}</span>
                </div>
            </div>
        </div>

        <!--Footer-->
		<div class="Footer">
			<button @click="reset">Xóa tất cả</button>
		</div>
    </div>
</template>

<script>
export default {
    name: 'History',

    computed: {
        list () {
            const history = this.$history.get()

            return history.reverse()
        }
    },

    created () {
        this.$meta.changeTitle('History')
		this.$meta.changeColor('#101010')
	},

    methods: {
        watch(history) {
            this.$store.commit('updateType', 'history')
            this.$store.commit('updateData', history)
			this.$router.push(`/done/${history.source}`)
        },

        reset () {
            this.$history.reset()
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="sass">
.Historys
    padding: 16px

    .Header
        .Title
            font-size: 1.6rem
            font-weight: 600
        .Info
            font-size: 0,8rem
            color: #999

    .Content
        display: flex
        flex-direction: column
        margin: 24px 0

        .History
            display: flex
            align-items: center
            justify-content: space-between
            background: #f5f5f5
            padding: 12px
            border-radius: 12px
            margin-bottom: 12px
            cursor: pointer

            &__Left
                width: 100%
            &__Left, &__Right
                p
                    text-transform: uppercase
                    font-weight: 700
                span
                    font-size: 0.8rem
                    font-weight: 400
                    color: gray
            &__Right
                text-align: right
                min-width: 120px
                p
                    color: red
                span
                    color: gray    

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