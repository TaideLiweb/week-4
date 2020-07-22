export default {
    template: `
    <div class="modal fade" id="modal">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">編輯商品列表</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-4">
                        <label>圖片網址</label>
                        <input
                            type="text"
                            v-model="template.imageUrl[0]"
                            class="form-control"
                            placeholder="請輸入圖片網址"
                        />
                        <div class="form-row mt-4 text-center">
                            <img :src="template.imageUrl[0]" alt="" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col-8">
                        <div class="form-group">
                            <label>品名</label>
                            <input
                                type="text"
                                v-model="template.title"
                                class="form-control"
                                placeholder="請輸入品名"
                            />
                        </div>
                        <div class="form-row mb-3">
                            <div class="col-6">
                                <label>類別</label>
                                <input
                                    type="text"
                                    v-model="template.category"
                                    class="form-control"
                                    placeholder="請輸入類別"
                                />
                            </div>
                            <div class="col-6">
                                <label>商品單位</label>
                                <input
                                    type="text"
                                    v-model="template.unit"
                                    class="form-control"
                                    placeholder="請輸入商品單位"
                                />
                            </div>
                        </div>
                        <div class="form-row mb-4">
                            <div class="col-6">
                                <label>原價</label>
                                <input
                                    type="text"
                                    v-model="template.origin_price"
                                    class="form-control"
                                    placeholder="請輸入原價"
                                />
                            </div>
                            <div class="col-6">
                                <label>售價</label>
                                <input
                                    type="text"
                                    v-model="template.price"
                                    class="form-control"
                                    placeholder="請輸入售價"
                                />
                            </div>
                        </div>
                        <hr />
                        <div class="form-group">
                            <label>產品描述</label>
                            <textarea
                                type="text"
                                class="form-control"
                                placeholder="請輸入產品說明"
                                v-model="template.description"
                            ></textarea>
                        </div>
                        <div class="form-group">
                            <label>說明內容</label>
                            <textarea
                                type="text"
                                class="form-control"
                                placeholder="請輸入說明內容"
                                v-model="template.content"
                            ></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <div>
                    <button type="submit" @click="cancel" class="btn btn-outline-danger btn-sm">
                        取消
                    </button>
                    <button type="submit" @click="updateData" class="btn btn-outline-primary btn-sm">
                        送出
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
        updateData() {
            this.$emit('update-data')
        },
    },
}
