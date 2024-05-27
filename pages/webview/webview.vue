<template>
	<view class="container">
		<web-view :src="url"></web-view>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				url: 'https://cas.whu.edu.cn/authserver/login?service=http%3A%2F%2Fehall.whu.edu.cn%2Flogin%3Fservice%3Dhttp%3A%2F%2Fehall.whu.edu.cn%2Fnew%2Findex.html',
				currentSrc: '',
				intervalId: null,
			};
		},
		onLoad() {
			var pages = getCurrentPages();
			// console.log(pages);
			var page = pages[pages.length - 1];
			var currentWebview = page.$getAppWebview();
			// console.log(currentWebview);
			let wv = currentWebview.children()[0];
			setTimeout(function() {
				let wv = currentWebview.children()[0];

				// 监听页面加载事件
				wv.addEventListener('loaded', function() {
					// 拦截所有页面跳转
					wv.overrideUrlLoading({
						mode: 'reject',
						match: 'https:\\/\\/ehall\\.whu\\.edu\\.cn\\/new\\/mobile\\/.*'
					}, function(e) {
						let url = e.url;
						uni.navigateTo({
							url: '/pages/denglu/denglu?whetherLogin=true'
						});
						console.log(e.url, 'overrideUrlLoading');
					});
				});
			}, 1000);

		},

		methods: {

		}
	};
</script>

<style>
	.container {
		width: 100%;
		height: 100%;
	}
</style>