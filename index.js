import pagination from './component/pagination.js'
import modal from './component/modal.js'
import deletemodal from './component/deletemodal.js'
let token = ''
const apiPath = 'https://course-ec-api.hexschool.io/api/'
const uuid = '4e5317b1-b943-407e-81cc-73ea10b6482c'
Vue.component('pagination', pagination)
Vue.component('modal', modal)
Vue.component('deletemodal', deletemodal)
var app = new Vue({
    el: '#app',
    data: {
        products: [],
        template: { imageUrl: [] },
        pagination: {},
    },
    created() {
        token = document.cookie.replace(/(?:(?:^|.*;\s*)loginVerify\s*\=\s*([^;]*).*$)|^.*$/, '$1')
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        this.getData()
    },
    methods: {
        getData(num = 1) {
            if (num > this.pagination.total_pages) {
                num = this.pagination.current_page
            }
            const api = `${apiPath}${uuid}/admin/ec/products?page=${num}`
            axios
                .get(api)
                .then((res) => {
                    this.products = res.data.data
                    this.pagination = res.data.meta.pagination
                    console.log(this.products)
                })
                .catch((err) => {
                    console.log('err', err)
                })
        },
        openModal() {
            this.template = { imageUrl: [] }
            $('#modal').modal('show')
        },
        openEditModal(item) {
            this.template = Object.assign({}, item)
            $('#modal').modal('show')
        },
        openRemoveModal(item) {
            $('#deleteModal').modal('show')
            this.template = Object.assign({}, item)
        },
        removeData(template) {
            let key
            this.products.forEach((item, index) => {
                if (item.id === template.id) {
                    key = index
                }
            })
            const api = ` ${apiPath}${uuid}/admin/ec/product/${this.products[key].id}`
            axios.defaults.headers.common.Authorization = `Bearer ${token}`
            axios.delete(api).then((res) => {
                this.getData()
                console.log(res)
            })
            $('#deleteModal').modal('hide')
        },

        updateData() {
            if (this.template.id) {
                let key
                this.products.forEach((item, index) => {
                    if (this.template.id === item.id) {
                        key = index
                    }
                })
                const api = `${apiPath}${uuid}/admin/ec/product/${this.products[key].id}`
                axios.patch(api, this.template)
                this.$set(this.products, key, this.template)
                $('#modal').modal('hide')
                this.template = { imageUrl: [] }
                /*以上為編輯方法 */
            } else {
                const time = new Date().getTime()
                this.template.enabled = false
                this.template.id = time
                const api = `${apiPath}${uuid}/admin/ec/product`
                axios.post(api, this.template).then((res) => {
                    console.log(res)
                    this.getData()
                })
                $('#modal').modal('hide')
                this.template = { imageUrl: [] }
            }
        },
        productswitch(itemId, item, itemEnabled) {
            this.template = Object.assign({}, item)
            this.template.enabled = !itemEnabled
            const api = `${apiPath}${uuid}/admin/ec/product/${itemId}`
            axios.patch(api, { ...this.template })
        },
        cancel() {
            $('#modal').modal('hide')
            $('#deleteModal').modal('hide')
        },
    },
})
