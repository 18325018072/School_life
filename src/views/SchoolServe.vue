<template>
    <div class="tool">
        Name: {{ value }}
        <button type="primary" @click="handleRender">电费充值</button>
        <Button @click="handleRender">Custom content</Button>
    </div>
</template>

<script>
    import {
        Input
    } from 'view-ui-plus';
    export default {
        methods: {
            handleRender() {
                this.$Modal.confirm({
                    render: (h) => {
                        return h(Input, {
                            size: "large",
                            placeholder: 'Please enter your name...',
                            'onInput': (event) => {
                                this.value = event.target.value;
                            }
                        })
                    }
                })
            }
        },
        setup() {

        }
    }
</script>
