export default {
    template: `
        <div id="deleteModal" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header bg-danger">
                        <h4 class="modal-title text-white">確認刪除</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <p>確定要刪除"{{template.title}}"(刪除後將無法復原)</p>
                    </div>
                    <div class="modal-footer">
                        <div>
                            <button type="submit" @click="cancel" class="btn btn-outline-primary btn-sm">
                                取消
                            </button>
                            <button
                                type="submit"
                                @click="removeData(template)"
                                class="btn btn-outline-danger btn-sm"
                            >
                                確認
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
`,
    data() {
        return {}
    },
    props: ['template'],
    methods: {
        cancel() {
            this.$emit('cancel')
        },
        removeData(template) {
            this.$emit('remove-data', template)
        },
    },
}
