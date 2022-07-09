<template>
    <div class="news">
        <Tabs value="tag1">
            <TabPane label="海大新闻" name="tag1" padding="0">
                <List border size="small">
                    <ListItem>
                        <a href="https://ha.hainanu.edu.cn/vnew/info/1002/34671.htm"
                            target="_blank">省委第九巡视组巡视海南大学党委工作动员会召开</a>
                    </ListItem>
                    <ListItem>
                        <a href="https://ha.hainanu.edu.cn/vnew/info/1002/34753.htm"
                            target="_blank">中国教育国际交流协会会长刘利民一行调研海南大学</a>
                    </ListItem>
                    <ListItem>
                        <a href="https://ha.hainanu.edu.cn/vnew/info/1002/34723.htm"
                            target="_blank">欧美同学会党组书记王丕君一行调研海南大学</a>
                    </ListItem>
                    <ListItem>
                        <a href="https://ha.hainanu.edu.cn/vnew/info/1003/34673.htm"
                            target="_blank">关于国家重点研发计划农业农村领域部省联动···</a>
                    </ListItem>
                    <ListItem>
                        <a href="https://ha.hainanu.edu.cn/vnew/info/1003/34670.htm"
                            target="_blank">关于对参与申报2022年度陕西省科学技术奖提名项目的公示</a>
                    </ListItem>
                    <ListItem>
                        <a href="https://ha.hainanu.edu.cn/vnew/hdgg.htm" target="_blank">显示更多</a>
                    </ListItem>
                </List>
            </TabPane>
            <TabPane label="学术讲座" name="tag2">
                <List border size="small">
                    <ListItem><a href="javascript:void(0)">海大新闻1</a></ListItem>
                    <ListItem><a href="javascript:void(0)">海大新闻2</a></ListItem>
                    <ListItem><a href="javascript:void(0)">海大新闻1</a></ListItem>
                </List>
            </TabPane>
        </Tabs>
    </div>
</template>

<script>
    export default {
        name: 'NewsCard',
        props: {
            msg: String
        },
        setup() {

        }
    }
</script>

<style scoped>
    .news {
        /* border: 2px solid gray;
        border-radius: 10px; */
    }

    a {
        color: black;
    }
</style>

<style>
    .ivu-tabs-bar {
        margin-bottom: 1px !important;
    }
</style>
