# vue-grid-canvas-vue3

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

Vue3 中废弃组件事件的$on，$off 和 $once 实例方法
[使用外部库 mitt 来代替 $on $emit $off](https://github.com/developit/mitt)

```js
this.$on("listenName", callback);

import mitt from "mitt";
const emitter = mitt();

// listen to an event
emitter.on("foo", (e) => console.log("foo", e));

// listen to all events
emitter.on("*", (type, e) => console.log(type, e));

// fire an event
emitter.emit("foo", { a: "b" });

// clearing all events
emitter.all.clear();
```
