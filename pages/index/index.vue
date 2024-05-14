<template>
	<view class="content">
		<image src="../../static/index/sakuraPicture.png" mode="heightFix"></image>
		<image src="../../static/index/schoolIcon.png" mode="heightFix" class="school"></image>
		<text class="indexText">珞珈山上，樱花树下</text>
		<image src="../../static/index/navigateTo.png" mode="heightFix" class="navigateTo" @tap="tiaozhuan"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				search: '',
			}
		
		},
		onLoad() {
			uni.loadFontFace({
				global: true, // 是否全局生效
				family: 'siyuanheiti', // 定义的字体名称
				source: 'url("../../static/font/SourceHanSansSC-Normal.ttf")', // 字体资源的地址。建议格式为 TTF 和 WOFF，WOFF2 在低版本的iOS上会不兼容。
				// success() {
				// 	console.log('成功的回调函数')
				// },
				// fail() {
				// 	console.log('失败的回调函数')
				// },
				// complete() {
				// 	console.log('接口调用结束的回调函数（调用成功、失败都会执行）')
				// }
			})
		},
		methods: {
			tiaozhuan(){
				
			}
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

	.school{
		margin-top: 70rpx;
		height: 300rpx;
	}

	.indexText{
		margin-top: 30rpx;
		font-family: 'siyuanheiti';
	}
	
	.navigateTo{
		margin-top: 50rpx;
		height: 120rpx;
		margin-bottom: 200rpx;
	}
</style>
