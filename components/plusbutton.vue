<template>
	<view class="floating-button" @click="onPlusClick">
		<image src="../../static/tabbar/plus.png" class="plus-icon"></image>
	</view>
</template>

<script>
	export default {
		name: "plusbutton",
		data() {
			return {

			};
		},
		methods: {
			onPlusClick() {
				// 处理加号点击事件
				uni.navigateTo({
					url: '/pages/plus/plus' // 跳转到加号对应的页面
				});
			},
		},
	}
</script>

<style>
	.floating-button {
		position: fixed;
		bottom: 10rpx;
		right: 1rpx;
		transform: translateX(-50%);
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		background-color: #fff;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		z-index: 1000;
	}

	.plus-icon {
		width: 100%;
		height: 100%;
	}
</style>