let token = ''
const apiPath = 'https://course-ec-api.hexschool.io/api/'
const uuid = '4e5317b1-b943-407e-81cc-73ea10b6482c'
var app = new Vue({
  el: '#app',
  data: {
    products: [],
  },
  template: { imageUrl: [] },
  created() {
    const api = `${apiPath}${uuid}/admin/ec/products`
    axios.get(api).then((res) => {
      console.log(res)
    })
  },
  methods: {
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
      this.products.splice(key, 1)
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
        this.products.splice(key, this.template)
        this.$set(this.products, key, this.template)
        $('#modal').modal('hide')
        this.template = { imageUrl: [] }
        /*以上為編輯方法 */
      } else {
        const time = new Date().getTime()
        this.template.enabled = false
        this.template.id = time
        const api = `${apiPath}${uuid}/admin/ec/product`
        token = document.cookie.replace(/(?:(?:^|.*;\s*)loginVerify\s*\=\s*([^;]*).*$)|^.*$/, '$1')
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        axios.post(api, this.template).then((res) => {
          console.log(res)
        })
        this.products.push(this.template)
        $('#modal').modal('hide')
        this.template = { imageUrl: [] }
      }
    },
    cancel() {
      $('#modal').modal('hide')
      $('#deleteModal').modal('hide')
    },
  },
})
