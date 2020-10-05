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
      selectedProduct: new Product(0),
    });

    function selectProduct(p: Product) {
      /**
       * Setting this to a Product binds a Proxy<Product> to the detail component
       *  which causes the browser to show a warning for
       * [Vue warn]: Invalid prop: type check failed for prop "product". Expected Product, got Object
       */
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
