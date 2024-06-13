<!-- <template>
	<view class="content">
		<view class="module">
			<image src="../../static/shouye/schdule.png" mode="widthFix" class="ima"></image>
			<view class="briefInstruction">
				<view class="title">
					今日课程：
				</view>
				<view class="Instruct">
					9点-11点 操作系统 2点-4点 乒乓球
				</view>
			</view>
		</view>
		<view class="module">
			<image src="../../static/shouye/money.png" mode="widthFix" class="ima"></image>
			<view class="briefInstruction">
				<view class="title">
					校园卡余额： blabla钱
				</view>
				<view class="Instruct">
					消费记录：blabla
				</view>
			</view>
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

	.module {
		margin-top: 30rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		background-color: rgb(239, 239, 239);
		width: 100%;
		padding: 10rpx;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
		/* 添加阴影 */
		border-radius: 8px;
		/* 圆角 */
	}

	.ima {
		width: 50rpx;
		margin-right: 30rpx;
		margin-left: 40rpx;
	}

	.title {
		font-size: 50rpx;
		font-weight: bold;
	}
</style> -->
<template>
	<view class="container">
		<web-view src="https://hust.pages.dev/"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
		methods: {}
	};
</script>

<style>
	.container {
		height: 100%;
	}
</style>