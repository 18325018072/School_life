<template>
    <div>
        123132132
        <Space wrap>
            <Button type="primary" @click="open(false)">Open notice</Button>
            <Button @click="open(true)">Open notice(only title)</Button>
        </Space>
    </div>

</template>
<script>
    export default {
        methods: {
            open(nodesc) {
                this.$Notice.open({
                    title: 'Notification title',
                    desc: nodesc ? '' :
                        'Here is the notification description. Here is the notification description. '
                });
            }
        }
    }
</script>
