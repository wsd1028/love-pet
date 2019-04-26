<template>
  <el-dialog title="修改" :visible.sync="product.visible">
    <el-form>
      <el-form-item label="商品名称:" :label-width="formLabelWidth">
        <el-input v-model="name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="商品类型:" :label-width="formLabelWidth">
        <el-input v-model="type" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="采购数量:" :label-width="formLabelWidth">
        <el-input v-model="totalNum" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="材质:" :label-width="formLabelWidth">
        <el-input v-model="material" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="适用规格:" :label-width="formLabelWidth">
        <el-input v-model="petSize" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="专属规格:" :label-width="formLabelWidth">
        <el-input v-model="petType" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="包装规格:" :label-width="formLabelWidth">
        <el-input v-model="weight" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="口味:" :label-width="formLabelWidth">
        <el-input v-model="taste" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="功效:" :label-width="formLabelWidth">
        <el-input v-model="effect" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="产地:" :label-width="formLabelWidth">
        <el-input v-model="country" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="出厂日期:" :label-width="formLabelWidth">
        <el-date-picker
          type="date"
          placeholder="选择日期"
          v-model="date"
          value-format="yyyy-MM-dd"
          style="width: 100%;"
          prop="date1"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="保质期:" :label-width="formLabelWidth">
        <el-input v-model="freshDate" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="供应商:" :label-width="formLabelWidth">
        <el-input v-model="company" autocomplete="off"></el-input>
          <!-- <el-select v-model="company" placeholder="请选择供应商" autocomplete="off" class="select">          
              <el-option v-for="item in supplier" v-bind:key="item._id" :label="item.name" :value="item.name"/>
          </el-select> -->
      </el-form-item>
      <el-form-item label="特色说明:" :label-width="formLabelWidth">
        <el-input v-model="explain" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="价格:" :label-width="formLabelWidth">
        <el-input v-model="price" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="图片:" :label-width="formLabelWidth">
        <el-upload
          action="/product/upload"
          list-type="picture-card"
          :on-success="handleAvatarSuccess"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <img v-if="pictureImg" :src="pictureImg+product.image"  style="width: 150px;height: 150px;" alt>
          <i v-else class="el-icon-plus"></i>
        </el-upload>
      </el-form-item>

      <el-form-item class="btn">
        <el-button @click="setUpdateProVis(false)">取 消</el-button>
        <el-button type="primary" @click="update(product._id)">确 定</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState, mapMutations } = createNamespacedHelpers(
  "ProModule"
);
export default {
  data() {
    return {
      formLabelWidth: "90px",
      rules: {
        name: [
          {
            required: true,
            message: "请输入内容",
            trigger: "blur"
          }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ]
      },
      dialogImageUrl: "",
      pictureImg:"/upload/"
    };
  },
  computed: {
    ...mapState(["product","shopId"]),
    name: {
      set(name) {
        this.setProduct({
          ...this.product,
          name
        });
      },
      get() {
        return this.product.name;
      }
    },
    type: {
      set(type) {
        this.setProduct({
          ...this.product,
          type
        });
      },
      get() {
        return this.product.type;
      }
    },
    totalNum: {
      set(totalNum) {
        this.setProduct({
          ...this.product,
          totalNum
        });
      },
      get() {
        return this.product.totalNum;
      }
    },
    material: {
      set(material) {
        this.setProduct({
          ...this.product,
          material
        });
      },
      get() {
        return this.product.material;
      }
    },
    petSize: {
      set(petSize) {
        this.setProduct({
          ...this.product,
          petSize
        });
      },
      get() {
        return this.product.petSize;
      }
    },
    petType: {
      set(petType) {
        this.setProduct({
          ...this.product,
          petType
        });
      },
      get() {
        return this.product.petType;
      }
    },
    weight: {
      set(weight) {
        this.setProduct({
          ...this.product,
          weight
        });
      },
      get() {
        return this.product.weight;
      }
    },
    taste: {
      set(taste) {
        this.setProduct({
          ...this.product,
          taste
        });
      },
      get() {
        return this.product.taste;
      }
    },
    effect: {
      set(effect) {
        this.setProduct({
          ...this.product,
          effect
        });
      },
      get() {
        return this.product.effect;
      }
    },
    country: {
      set(country) {
        this.setProduct({
          ...this.product,
          country
        });
      },
      get() {
        return this.product.country;
      }
    },
    date: {
      set(date) {
        this.setProduct({
          ...this.product,
          date
        });
      },
      get() {
        return this.product.date;
      }
    },
    freshDate: {
      set(freshDate) {
        this.setProduct({
          ...this.product,
          freshDate
        });
      },
      get() {
        return this.product.freshDate;
      }
    },
    company: {
      set(company) {
        this.setProduct({
          ...this.product,
          company
        });
      },
      get() {
        return this.product.company;
      }
    },
    explain: {
      set(explain) {
        this.setProduct({
          ...this.product,
          explain
        });
      },
      get() {
        return this.product.explain;
      }
    },
    price: {
      set(price) {
        this.setProduct({
          ...this.product,
          price
        });
      },
      get() {
        return this.product.price;
      }
    },
    image: {
      set(image) {
        this.setProduct({
          ...this.product,
          image
        });
      },
      get() {
        return this.product.image;
      }
    }
  },
  methods: {
    ...mapMutations(["setProduct", "setUpdateProVis"]),
    ...mapActions(["updateProduct", "getProducts"]),
    update(id) {
      let shopId=this.shopId;
      this.updateProduct(this.product);
      this.setUpdateProVis(false);
      this.getProducts({shopId});
    },
    handleAvatarSuccess(response, file, fileList) {
      this.dialogImageUrl = "/upload/" + response;
      this.image = response;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
};
</script>
<style>
.btn {
  text-align: center;
}
</style>