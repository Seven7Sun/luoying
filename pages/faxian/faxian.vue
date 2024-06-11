<template>
	<view class="container">
		<!-- 轮播图 -->
		<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000">
			<swiper-item>
				<image src="../../static/img1.jpg" class="slide-image" />
			</swiper-item>
			<swiper-item>
				<image src="../../static/img2.png" class="slide-image" />
			</swiper-item>
			<swiper-item>
				<image src="../../static/img3.jpg" class="slide-image" />
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.container {
		display: flex;
		flex-direction: column;
		height: 100%;
	}
	
	.swiper{
		height: 100%;
	}
</style>
