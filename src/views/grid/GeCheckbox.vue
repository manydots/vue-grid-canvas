<template>
    <label :class="wrapClasses">
        <span :class="checkboxClasses">
            <span :class="innerClasses"></span>
            <input :value="modelValue" type="checkbox" :class="inputClasses" :disabled="disabled" :checked="modelValue" @change="change" />
        </span>
        <slot></slot>
    </label>
</template>
<script>
const prefixCls = 'genergy-checkbox';

export default {
    name: 'GeCheckbox',
    props: {
        modelValue: {
            type: [String, Number, Boolean],
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        label: {
            type: [String, Number, Boolean]
        },
        indeterminate: {
            type: Boolean,
            default: false
        }
    },
    emits: ['update:modelValue'],
    data() {
        return {};
    },
    computed: {
        wrapClasses() {
            return [
                `${prefixCls}-wrapper`,
                {
                    [`${prefixCls}-wrapper-checked`]: this.modelValue,
                    [`${prefixCls}-wrapper-disabled`]: this.disabled
                }
            ];
        },
        checkboxClasses() {
            return [
                `${prefixCls}`,
                {
                    [`${prefixCls}-checked`]: this.modelValue,
                    [`${prefixCls}-disabled`]: this.disabled,
                    [`${prefixCls}-indeterminate`]: this.indeterminate
                }
            ];
        },
        innerClasses() {
            return `${prefixCls}-inner`;
        },
        inputClasses() {
            return `${prefixCls}-input`;
        }
    },
    mounted() {},
    methods: {
        change(event) {
            if (this.disabled) {
                return false;
            }
            const checked = event.target.checked;
            this.$emit('update:modelValue', checked);
            return null;
        }
    },
    watch: {}
};
</script>

<style lang="scss" scoped>
* {
    font-size: 12px;
    box-sizing: border-box;
}

input {
    margin: 0;
    padding: 0;
}

.genergy-checkbox {
    display: inline-block;
    vertical-align: middle;
    white-space: nowrap;
    cursor: pointer;
    outline: 0;
    line-height: 1;
    position: relative;
}

.genergy-checkbox-wrapper {
    cursor: pointer;
    font-size: 12px;
    display: inline-block;
    margin-right: 8px;
}

.genergy-checkbox-checked .genergy-checkbox-inner {
    border-color: #2d8cf0;
    background-color: #2d8cf0;
}

.genergy-checkbox-input {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    cursor: pointer;
    opacity: 0;
}

.genergy-checkbox-checked .genergy-checkbox-inner:after {
    content: '';
    display: table;
    width: 4px;
    height: 8px;
    position: absolute;
    top: 1px;
    left: 4px;
    border: 2px solid #fff;
    border-top: 0;
    border-left: 0;
    -ms-transform: rotate(45deg) scale(1);
    transform: rotate(45deg) scale(1);
    transition: all 0.2s ease-in-out;
    box-sizing: border-box;
}

.genergy-checkbox-inner:after {
    content: '';
    display: table;
    width: 4px;
    height: 8px;
    position: absolute;
    top: 1px;
    left: 4px;
    border: 2px solid #fff;
    border-top: 0;
    border-left: 0;
    -ms-transform: rotate(45deg) scale(0);
    transform: rotate(45deg) scale(0);
    transition: all 0.2s ease-in-out;
}

.genergy-checkbox-inner {
    display: inline-block;
    width: 14px;
    height: 14px;
    position: relative;
    top: 0;
    left: 0;
    border: 1px solid #dddee1;
    border-radius: 2px;
    background-color: #fff;
    transition: border-color 0.2s ease-in-out, background-color 0.2s ease-in-out;
    margin-right: 5px;
}
</style>
./CheckBox.vue
