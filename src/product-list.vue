<template>
  <ul>
    <li v-for="product in productsList" :key="product.id">
      <div @click="selectProduct(product)">
        {{ product.name }}
      </div>
    </li>
  </ul>
  <div v-if="selectedProduct.id">
    <ProductDetail :product="selectedProduct" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { Product, products } from '@/products';
import ProductDetail from '@/product-detail.vue';

interface ComponentState {
  productsList: Product[];
  selectedProduct: Product;
}

export default defineComponent({
  name: 'ProductList',
  components: { ProductDetail },
  setup() {
    const state: ComponentState = reactive({
      productsList: products as Product[],
      selectedProduct: {} as Product,
    });

    function selectProduct(p: Product) {
      state.selectedProduct = p;
    }

    return {
      ...toRefs(state),
      selectProduct,
    };
  },
});
</script>

<style>
li {
  cursor: pointer;
}
</style>
