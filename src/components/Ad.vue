<template>
    <div class="ad">
        <Carousel autoplay loop height="15rem">
            <CarouselItem>
                <div class="demo-carousel"><img alt="Head logo" src="../assets/headPic.jpg" /></div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel"><img alt="Head logo" src="../assets/logo.png" /></div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel"><img alt="Head logo" src="../assets/headPic.jpg" /></div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel"><img alt="Head logo" src="../assets/logo.png" /></div>
            </CarouselItem>
        </Carousel>
    </div>
</template>

<script>
    export default {
        name: 'Ad'
    }
</script>

<style scoped>
  .ad{
    /*height: 20%;*/
  }
</style>
