<script lang="tsx">
import { withModifiers, defineComponent, ref } from 'vue';

const App = defineComponent({
  setup() {
    const count = ref(6);

    const inc = () => {
      count.value++;
    };

    return () => (
      <div onClick={withModifiers(inc, ['self'])}>{count.value}</div>
    );
  },
});

export default App;
</script>

<style lang="less" scoped>
:deep(.arco-menu-inner) {
  .arco-menu-inline-header {
    display: flex;
    align-items: center;
  }
  .arco-icon {
    &:not(.arco-icon-down) {
      font-size: 18px;
    }
  }
}
</style>
