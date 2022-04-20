<script lang="tsx">
import { ref } from 'vue';
import { defineComponent, h, compile } from 'vue';
import { useRouter, RouteRecordNormalized, RouteRecordRaw } from 'vue-router';
// import { useI18n } from 'vue-i18n';
// import { useAppStore } from '@/store';

import { computed } from '@vue/reactivity';
export default defineComponent({
  setup() {
    // // const store = useAppStore();

    const router = useRouter();
    // const { t } = useI18n();
    const t = (t: string) => t;
    const selectedKey = ref<string[]>([]);
    const setCollapse = (val: boolean) => {
      // if (store.device === 'desktop')
      // store.updateSettings({ menuCollapse: val });
    };

    const appRoute = computed(
      () =>
        router
          .getRoutes()
          .find((el) => el.name === 'root') as RouteRecordNormalized
    );
    const goto = (item: RouteRecordRaw) => {
      router.push({
        name: item.name,
      });
    };
    const collapsed = computed(() => true);
    const menuTree = computed(() => {
      const copyRouter = JSON.parse(JSON.stringify(appRoute.value.children));
      function travel(_routes: RouteRecordRaw[], layer: number) {
        if (!_routes) return null;
        const collector: any = _routes.map((element) => {
          // no access
          // if (!permission.accessRouter(element)) {
          //   return null
          // }

          // leaf node
          if (!element.children) {
            return element;
          }

          // Associated child node
          const subItem = travel(element.children, layer);
          if (subItem.length) {
            element.children = subItem;
            return element;
          }
          // the else logic
          if (layer > 1) {
            element.children = subItem;
            return element;
          }
          return null;
        });
        return collector.filter(Boolean);
      }
      return travel(copyRouter, 0);
    });

    const renderSubMenu = () => {
      function travel(_route: RouteRecordRaw[], nodes = []) {
        if (_route) {
          _route.forEach((element) => {
            // This is demo, modify nodes as needed
            const icon = element?.meta?.icon ? `<${element?.meta?.icon}/>` : ``;
            const subMenuItem = (
              <a-sub-menu
                key={element?.name}
                v-slots={{
                  icon: () => h(compile(icon)),
                  title: () =>
                    h(compile(t((element?.meta?.locale as string) || ''))),
                  // h(compile((element?.meta?.locale as string) || '')),
                }}
              >
                {element?.children?.map((elem) => {
                  // {(elem?.meta?.locale as string) || ''}
                  return (
                    <a-menu-item key={elem.name} onClick={() => goto(elem)}>
                      {t((elem?.meta?.locale as string) || '')}
                      {travel(elem.children ?? [])}
                    </a-menu-item>
                  );
                })}
              </a-sub-menu>
            );
            nodes.push(subMenuItem as never);
          });
        }
        return nodes;
      }
      return travel(menuTree.value); // 递归menuTree
    };

    return () => (
      <a-menu
        v-model:collapsed={collapsed.value}
        show-collapse-button
        auto-open={false}
        selected-keys={selectedKey.value}
        auto-open-selected={true}
        level-indent={34}
        style="height: 100%"
        onCollapse={setCollapse}
      >
        {renderSubMenu()}
      </a-menu>
    );
  },
});
</script>

<style lang="less" scoped></style>
