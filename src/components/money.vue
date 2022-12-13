<template>
    <input 
        placeholder="Nhập số tiền" 
        @input="input" 
        @blur="blur" 
        @focus="focus" 
        :type="type" 
        :value="money" 
    />
</template>

<script>
export default {
    model: {
        prop: 'money',
        event: 'change'
    },

    props: {
        money: { default: null },
    },

    data() {
        return {
            type: 'number'
        }
    },

    methods: {
        input (event) {
            this.$emit('change', event.target.value)
        },

        blur (event) {
            this.type = 'text'
            this.$emit('change', this.$util.numberToLocaleString(event.target.value))
        },

        focus (event) {
            this.type = 'number'
            this.$emit('change', this.$util.localeStringToNumber(event.target.value))
        }
    }
}
</script>