const app = {
    data(){
        return {
            big_alpha: true,
            small_alpha: true,
            numbers: true,
            symbols :true,
            length: 10
        }
    },
    computed: {
        password() {
            const big_alpha_string = 'ABCDEFGHJKLMNPQRSTUVWXZ'
            const small_alpha_string = 'abcdefghijkmnopqrstunwxyz'
            const numbers_string = '23456789'
            const symbols_string = '!@#$%^&*()'

            let source = ''
            source += (this.big_alpha ? big_alpha_string : '')
            source += (this.small_alpha ? small_alpha_string : '')
            source += (this.numbers ? numbers_string : '')
            source += (this.symbols ? symbols_string : '')
            if(source === '') return '-'


            let ret = ''
            for (let i=0; i<this.length; i++){
                let rand = Math.floor(Math.random() * source.length)
                ret += source.substr(rand, 1)
            }
            return ret
        }
    }
}

        Vue.createApp(app).mount('#app')
