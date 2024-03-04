// 兼容Vue3 $on $off $emit
import mitt from 'mitt';
const $bus = mitt();

const mixin = {
    mixins: [],
    emits: ['focus', 'updateValue', 'multiSelect'],
    data() {
        return {
            publicPath: './assets' // 图片资源路径
        };
    },
    computed: {},
    activated() {},
    deactivated() {},
    beforeUnmount() {},
    methods: {
        $busOn(eventName, callback) {
            return $bus.on(eventName, callback);
        },
        $busOff(eventName, callback) {
            return $bus.off(eventName, callback);
        },
        // 无法重写 $emit vue3实例会重载此方法 子组件回传方法状态通过vue3实例 $emit 并设置 emits: ['eventName',...]
        $busEmit(eventName, callback) {
            return $bus.emit(eventName, callback);
        }
    }
};

export default mixin;
