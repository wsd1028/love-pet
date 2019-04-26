  <template>
  <el-table :data="products" style="width: 100%" max-height="380">
    <el-table-column fixed align="center" prop="name" label="商品名称" width="100">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.name }}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" prop="type" label="商品类型" width="100">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.type }}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" prop="totalNum" label="采购数量" width="100">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.totalNum }}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" prop="material" label="材质" width="100">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.material }}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" prop="petSize" label="适用规格" width="100">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.petSize }}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" prop="petType" label="专属规格" width="100">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.petType }}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" prop="weight" label="包装规格" width="100">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.weight }}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" prop="taste" label="口味" width="100">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.taste }}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" prop="effect" label="功效" width="100">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.effect }}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" prop="country" label="产地" width="100">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.country }}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" prop="date" label="出厂日期" width="100">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" prop="freshDate" label="保质期" width="100">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.freshDate }}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" prop="company" label="供应商" width="100">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.company }}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" prop="explain" label="特色说明" width="100">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.explain }}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" prop="price" label="价格" width="100">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.price }}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" prop="image" label="图片" width="100">
      <template slot-scope="scope">
        <img :src="url + scope.row.image" alt style="width: 120px;height: 120px;">
      </template>
    </el-table-column>
    <el-table-column fixed="right" align="center" label="操作" width="230">
      <template slot-scope="scope">
        <el-button type="primary" icon="el-icon-edit" plain @click="handleEdit(scope.row._id)">修改</el-button>
        <el-button type="danger" icon="el-icon-delete" plain @click="handleDelete(scope.row._id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import axios from 'axios'
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("ProModule");
export default {
  data() {
    return {
      loading2: true,
      url: "/upload/"
    };
  },
  computed: {
    ...mapState(["products", "pagenation", "shopId"])
  },
  created() {
    let shopId = this.shopId;
    this.getProducts({ shopId });
  },
  methods: {
    ...mapActions(["getProducts", "getUpdateProduct"]),
    handleDelete(id) {
      this.$confirm("此操作将永久删除该商品, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(action => {
          console.log(action)
          if (action == "confirm") {
            axios({
              method: "delete",
              url: "/product/delete/" + id
            }).then(res => {
              this.getProducts({shopId :this.shopId});
              this.$message({
                type: "success",
                message: "删除成功"
              });
            });
          }
        })
        .catch(err => {
          if(err== "cancel"){
            this.$message({
            type: "info",
            message: "已取消删除"
          });
          }
          
        });
    },
    handleEdit(id) {
      this.getUpdateProduct(id);
    }
  }
};
</script>
<style>
</style>

