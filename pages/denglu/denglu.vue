<template>
	<view class="content">
		<view class="title">
			欢迎来到 珞樱

				

		</view>
		<view class="verifyBox">
			<image src="../../static/denglu/verify.png" mode="heightFix" class="icon"></image>
		</view>
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
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	
	.title{
		font-size: 60rpx;
		font-family: 'siyuanheiti';
		margin-top: 200rpx;
	}
	
	.verifyBox{
		margin-top: 200rpx;
		background-color:rgb(245, 245, 245);
		width: 500rpx;
		height: 80rpx;
		border-radius: 80rpx;
		display: flex;
		flex-direction: column;
		/* align-items: center; */
		justify-content: center;
	}
	
	.icon{
		height: 50rpx;
		margin-left: 20rpx;
	}
</style>