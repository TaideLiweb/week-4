export default {
    template: `<nav aria-label="Page navigation example">
    <ul class="pagination">
        <li class="page-item" @click.prevent="updataPage(pages.current_page,'less')">
            <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
            </a>
        </li>
        <li class="page-item" :class="{active:pages.current_page===item}" v-for="item in pages.total_pages" @click.prevent="updataPage(item,'crrent')" :key="item"><a class="page-link" href="#">{{item}}</a></li>
        <li class="page-item" @click.prevent="updataPage(pages.current_page,'plus')">
            <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span>
            </a>
        </li>
    </ul>
</nav>`,
    props: ['pages'],
    methods: {
        updataPage(num, method) {
            // this.$emit('updata', num)
            switch (method) {
                case 'crrent':
                    this.$emit('updata', num)
                    break
                case 'plus':
                    this.$emit('updata', num + 1)
                    break
                case 'less':
                    this.$emit('updata', num - 1)
                    break
                default:
                    break
            }
        },
    },
}
