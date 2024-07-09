<template>
	<view class="content">
		<view class="title">
			欢迎来到 珞樱
		</view>
		<view class="verifyBox" @tap="toLuoJia">
			<image src="../../static/denglu/verify.png" mode="heightFix" class="icon"></image>
			<view class="verifyText" v-if="whetherLuoJia">
				验证成功
			</view>
			<view class="verifyText" v-else>
				点击前往智慧珞珈验证
			</view>
		</view>
		<view class="accountBox">
			<image src="../../static/denglu/phone.png" mode="heightFix" class="icon"></image>
			<view class="verifyText">
				<input type="text" id='account' v-model="account" placeholder="请输入纯英文用户名" class="inputText" />
			</view>
		</view>
		<view class="accountBox">
			<image src="../../static/denglu/password.png" mode="heightFix" class="icon"></image>
			<view class="verifyText">
				<input type="password" id='password' v-model="password" placeholder="请输入密码" class="inputText" />
			</view>
		</view>
		<view class="login">
			<button style="border-radius: 40rpx;background-color: rgb(40,168,124);color: white;"
				@tap="toshouye">登录</button>
		</view>
		<view class="register">
			<button style="border-radius: 40rpx;background-color: rgb(255, 85, 127);color: white;"
				@tap="register">注册</button>
		</view>
	</view>
</template>


<script>
	import axios from 'axios';

	export default {
		data() {
			return {
				account: '',
				password: '',
				whetherLuoJia: false,
			}
		},
		onLoad: function(options) {
			if (options.whetherLogin === 'true') {
				this.whetherLuoJia = true;
			}
		},
		methods: {
			toshouye() {
				if (!this.whetherLuoJia) {
					uni.showToast({
						title: '请先进行智慧珞珈验证',
						icon: 'none'
					});
					return;
				}
				if (!this.account || !this.password) {
					uni.showToast({
						title: '请填写完整信息',
						icon: 'none'
					});
					return;
				}

				const url = `http://112.124.70.202:5555/api/user/login?username=${this.account}&password=${this.password}`;

				uni.request({
					url: url,
					method: 'POST',
					success: (res) => {
						console.log(res.data);
						if (res.statusCode === 200) {
							console.log(res.data);
							const userID = res.data;
							console.log(getApp().globalData.userID);
							getApp().globalData.userID = userID;
							console.log(getApp().globalData.userID);
							uni.showToast({
								title: '登录成功',
								icon: 'success'
							});
							uni.switchTab({
								url: '/pages/shouye/shouye'
							});
							this.update(userID);

						} else {
							uni.showToast({
								title: '登录失败',
								icon: 'none'
							});
						}
					},
					fail: (error) => {
						uni.showToast({
							title: '请求失败，请稍后再试',
							icon: 'none'
						});
						console.error(error);
					}
				});
			},
			async update(A) {
				console.log("yjy");
				console.log(A);
				try {
					const getUserRes = await uniCloud.callFunction({
						name: 'getUserById',
						data: {
							A
						}
					});
					console.log('getUserById 返回值:', getUserRes);
					if (getUserRes.result.success) {
						const user = getUserRes.result.data;
						const updateRes = await uniCloud.callFunction({
							name: 'updateUserself',
							data: {
								user
							}
						});
						console.log('updateUserself 返回值:', updateRes);
						if (updateRes.result.success) {
							console.log('userself 表更新成功:', updateRes.result.data);
						} else {
							console.error('更新 userself 表失败:', updateRes.result.message);
						}
					} else {
						console.error('获取用户失败:', getUserRes.result.message);
					}
				} catch (error) {
					console.error('调用云函数出现错误:', error.message, error.stack);
				}
			},

			toLuoJia() {
				if (!this.whetherLuoJia) {
					uni.navigateTo({
						url: '/pages/webview/webview'
					});
					// this.whetherLuoJia=true;
				}
			},
			register() {
				if (!this.whetherLuoJia) {
					uni.showToast({
						title: '请先进行智慧珞珈验证',
						icon: 'none'
					});
					return;
				}
				if (!this.account || !this.password) {
					uni.showToast({
						title: '请填写完整信息',
						icon: 'none'
					});
					return;
				}

				const url =
					`http://112.124.70.202:5555/api/user/register?username=${this.account}&password=${this.password}`;

				uni.request({
					url: url,
					method: 'POST',
					success: (res) => {
						if (res.statusCode === 200) {
							uni.showToast({
								title: '注册成功',
								icon: 'success'
							});
							// 自动登录并跳转到首页
							this.toshouye();
						} else {
							uni.showToast({
								title: '注册失败',
								icon: 'none'
							});
						}
					},
					fail: (error) => {
						uni.showToast({
							title: '请求失败，请稍后再试',
							icon: 'none'
						});
						console.error(error);
					}
				});
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
		align-items: center;
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

	.register {
		margin-top: 20rpx;
		width: 500rpx;
	}
</style>