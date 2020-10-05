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
import { defineComponent, reactive, toRefs } from 'vue'; /* sRef, ref */
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
    // const selectedProduct: Ref<Product> = ref(new Product(0));
    // const productsList: Ref<Product[]> = ref(products);

    const state: ComponentState = reactive({
      productsList: products as Product[],
      selectedProduct: new Product(0),
    });

    function selectProduct(p: Product) {
      state.selectedProduct = p;
      // state.selectedProduct = new Product(
      //   p.id,
      //   p.name,
      //   p.description,
      //   p.quantity,
      // );
      // selectedProduct.value = p;
    }

    return {
      ...toRefs(state),
      // productsList,
      // selectedProduct,
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
