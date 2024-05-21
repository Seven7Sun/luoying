<template>
	<view class="container">
		<web-view :src="url" @message="onMessage"></web-view>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				url: 'https://cas.whu.edu.cn/authserver/login?service=http%3A%2F%2Fehall.whu.edu.cn%2Flogin%3Fservice%3Dhttp%3A%2F%2Fehall.whu.edu.cn%2Fnew%2Findex.html',
				oldurl:'',
				count:0,
			};
		},
		onLoad() {
			// 判断登录成功的逻辑，可以根据 URL 或者页面内容来判断
			var pages = getCurrentPages();
			console.log(pages);
			var page = pages[pages.length - 1];
			var currentWebview = page.$getAppWebview();
			console.log(currentWebview);
			var curRoute=currentWebview.src;
			console.log(curRoute);
			this.count=this.count+1;
			// uni.navigateBack(); // 返回上一个页面
			if (this.count == 2) { // 假设成功登录后的 URL 包含 'success'
				uni.showToast({
					title: '登录成功',
					icon: 'success',
				});
				uni.navigateBack(); // 返回上一个页面
			}
			
		},
		methods: {
			onMessage(event) {
				// 处理从 Webview 发送的消息
				// console.log('Message from Webview:', event.detail.data);
			},

		}
	};
</script>

<style>
	.container {
		width: 100%;
		height: 100%;
	}
</style>