<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from 'vue';
import { Product } from '@/products';

interface Props {
  product: Product;
}

interface ComponentState {
  productClone: Product;
}

export default defineComponent({
  name: 'ProductDetail',
  props: {
    product: {
      type: Product,
      default() {
        return new Product(0);
      },
    },
  },
  setup(props: Props) {
    const { product } = toRefs(props);
    const state: ComponentState = reactive({
      productClone: { ...product.value },
    });

    watch(product, (/* newValue, oldValue */) => {
      if (product.value && product.value.id) {
        state.productClone = { ...product.value };
      }
    });

    return { ...toRefs(state) };
  },
});
</script>

<template>
  <div>
    <div>
      <label class="label" for="id">id</label>
      <input
        class="input"
        name="id"
        placeholder="99999"
        readonly
        type="text"
        v-model="productClone.id"
      />
    </div>
    <div class="field">
      <label class="label" for="name">name</label>
      <input
        class="input"
        name="name"
        placeholder="Oranges"
        type="text"
        v-model="productClone.name"
      />
    </div>
    <div class="field">
      <label class="label" for="description">description</label>
      <input
        class="input"
        name="description"
        placeholder="box"
        type="text"
        v-model="productClone.description"
      />
    </div>
    <div class="field">
      <label class="label" for="quantity">quantity</label>
      <input
        class="input"
        name="quantity"
        placeholder="1"
        type="number"
        min="1"
        max="100"
        v-model="productClone.quantity"
      />
    </div>
  </div>
</template>
