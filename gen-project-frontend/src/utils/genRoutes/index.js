export default function genRoutes(routes) {
  return formatToTree(routes)
}

function formatToTree(ary, pid) {
    return ary
    .filter((item) =>
        // 如果没有父id（第一次递归的时候）将所有父级查询出来
        // 这里认为 item.parentId === 0 就是最顶层 需要根据业务调整
        pid === undefined ? item.parentId === 0 : item.parentId === pid
    )
    .map((item) => {
        // 通过父节点ID查询所有子节点
        /* item.children = formatToTree(ary, item.id)
        return item; */
        return {
            path: "/" + item.path,
            name: item.path,
            component: item.component !== "" ? () => import(`../../view/${item.component}/index.vue`) : undefined,
            meta: { title: item.routeName, icon: item.icon},
            children: formatToTree(ary, item.id)
        }
    });
}