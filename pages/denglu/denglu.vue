<template>
	<view class="content">
		<view class="title">
			欢迎来到 珞樱



		</view>
		<view class="verifyBox" @tap="toLuoJia">
			<image src="../../static/denglu/verify.png" mode="heightFix" class="icon"></image>
			<!-- <image src="../../static/denglu/line.png" mode="aspectFit"></image> -->
			<view class="verifyText" v-if="whetherLuoJia">
				验证成功
			</view>
			<view class="verifyText" v-else>
				点击前往智慧珞珈验证
			</view>
		</view>
		<view class="accountBox">
			<image src="../../static/denglu/phone.png" mode="heightFix" class="icon"></image>
			<!-- <image src="../../static/denglu/line.png" mode="aspectFit"></image> -->
			<view class="verifyText">
				<input type="text" id='account' v-model="account" placeholder="请输入手机号" class="inputText" />
			</view>
		</view>
		<view class="accountBox">
			<image src="../../static/denglu/password.png" mode="heightFix" class="icon"></image>
			<!-- <image src="../../static/denglu/line.png" mode="aspectFit"></image> -->
			<view class="verifyText">
				<input type="password" id='password' v-model="password" placeholder="请输入密码" class="inputText" />
			</view>
		</view>
		<view class="notice">
			未注册的手机号验证后自动创建珞樱账号
		</view>
		<view class="login">
			<button style="border-radius: 40rpx;background-color: rgb(40,168,124);color: white;"
				@tap="toshouye">登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				account: '',
				password: '',
				whetherLuoJia: false,
			}
		},
		onLoad: function(options) {
			// console.log(options.whetherLogin);
			if (options.whetherLogin === 'true') {
				this.whetherLuoJia = true;
			}
		},
		methods: {
			toshouye() {
				if (!this.account || !this.password) {
					uni.showToast({
						title: '请填写完整信息',
						icon: 'none'
					});
					return;
				}

				uni.request({
					url: 'http://localhost:5000/api/user/login',
					method: 'POST',
					data: {
						username: this.account,
						password: this.password
					},
					success: (res) => {
						if (res.statusCode === 200 && res.data.success) {
							uni.showToast({
								title: '登录成功',
								icon: 'success'
							});
							uni.switchTab({
								url: '/pages/shouye/shouye'
							});
						} else {
							uni.showToast({
								title: '登录失败',
								icon: 'none'
							});
						}
					},
					fail: () => {
						uni.showToast({
							title: '请求失败，请稍后再试',
							icon: 'none'
						});
					}
				});
			},
			toLuoJia() {
				if (!this.whetherLuoJia) {
					uni.navigateTo({
						url: '/pages/webview/webview'
					});
				}

			},
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

	.title {
		font-size: 60rpx;
		font-family: 'siyuanheiti';
		margin-top: 200rpx;
	}

	.verifyBox {
		margin-top: 200rpx;
		background-color: rgb(245, 245, 245);
		width: 500rpx;
		height: 100rpx;
		border-radius: 80rpx;
		display: flex;
		/* flex-direction: column; */
		align-items: center;
		/* justify-content: center; */
	}

	.icon {
		height: 50rpx;
		margin-left: 20rpx;
	}

	.verifyText {
		margin-left: 40rpx;
		color: rgb(128, 128, 128);
	}

	.accountBox {
		margin-top: 40rpx;
		background-color: rgb(245, 245, 245);
		width: 500rpx;
		height: 100rpx;
		border-radius: 80rpx;
		display: flex;
		/* flex-direction: column; */
		align-items: center;
	}

	.inputText {
		width: 350rpx;
	}

	.notice {
		color: rgb(128, 128, 128);
		font-size: 20rpx;
		margin-top: 20rpx;
	}

	.login {
		margin-top: 30rpx;
		width: 500rpx;

	}
</style>