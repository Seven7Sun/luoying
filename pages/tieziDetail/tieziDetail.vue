<template>
	<view class="container">
		<!-- 顶部导航栏 -->
		<view class="navbar">
			<view class="nav-left" @click="goBack">
				<image src="/static/detial/back .png" class="back"></image>
			</view>
			<view class="nav-avatar">
				<image :src="post.avatar" class="avatar"></image>
				<view class="nav-title">{{ post.author }}</view>
			</view>
			<view class="nav-right">
				<button class="follow-button">关注</button>
			</view>
		</view>

		<!-- 图片轮播 -->
		<swiper class="image-swiper" :autoplay="false" indicator-dots>
			<swiper-item v-for="(image, index) in post.images" :key="index">
				<image :src="image" class="swiper-image"></image>
			</swiper-item>
		</swiper>

		<!-- 帖子内容 -->
		<scroll-view class="post-container" scroll-y>
			<view class="post-header">
				<text class="post-title">{{ post.title }}</text>
				<view class="post-meta">
					<text class="post-date">{{ post.date }}</text>
					<text class="post-location">{{ post.location }}</text>
				</view>
			</view>
			<view class="post-content">
				<text class="post-text">{{ post.content }}</text>
			</view>

			<!-- 评论列表 -->
			<view class="comments-container">
				<view class="comment" v-for="comment in post.comments" :key="comment.id">
					<image :src="comment.avatar" class="comment-avatar"></image>
					<view class="comment-content">
						<view class="comment-header">
							<text class="comment-author">{{ comment.author }}</text>
							<text class="comment-date">{{ comment.date }}</text>
						</view>
						<text class="comment-text">{{ comment.text }}</text>
						<view class="comment-actions">
							<text class="like-button">{{ comment.likes }}</text>

							<text class="reply-button" @click="showReplies(comment.id)">展开 {{ comment.replies.length }}
								条回复</text>
						</view>

						<view class="replies" v-if="comment.showReplies">
							<view class="reply" v-for="reply in comment.replies" :key="reply.id">
								<image :src="reply.avatar" class="reply-avatar"></image>
								<view class="reply-content">
									<view class="reply-header">
										<text class="reply-author">{{ reply.author }}</text>
										<text class="reply-date">{{ reply.date }}</text>
									</view>
									<text class="reply-text">{{ reply.text }}</text>
								</view>
							</view>
							<text class="reply-button" @click="toggleReplyBox(comment.id)">回复</text>
							<view class="reply-box" v-if="comment.showReplyBox">
								<input v-model="newReply" class="reply-input" placeholder="回复..." />
								<view class="send-reply" @click="sendReply(comment.id)">发送</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>

		<!-- 底部操作栏 -->
		<view class="bottom-bar">
			<input v-model="newComment" class="comment-input" placeholder="说点什么..." />
			<view class="bottom-buttons">
				<view class="pinglun" @tap="comment">发送</view>
				<view class="bottom-button" @tap="like">
					<image src="/static/detial/like.png" class="icon"></image>
					<text>{{ post.likes }}</text>
				</view>
				<view class="bottom-button" @tap="star">
					<image src="/static/detial/star.png" class="icon"></image>
					<text>{{ post.stars }}</text>
				</view>
				<view class="bottom-button" @tap="comment">
					<image src="/static/detial/comment.png" class="icon"></image>
					<text>{{ post.comments.length }}</text>
				</view>
			</view>
		</view>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				temp: 1,
				post: {
					id: '12345',
					userID: '123',
					author: 'Darian',
					avatar: '/static/faxian/img1.png', // 用户头像路径
					title: '港大校长爆雷🔥🔥🔥',
					date: '昨天 23:38',
					location: '日本',
					content: '原来香港学校已经这么颓了嘛...个人理解就是，先让内容渲染出来，然后计算 剩余空间有多少。按照 有 flex-grow 属性 的比例，动态设置 当前DOM 的宽度公式就是：原始宽度 + （剩余空间 / 总共分成多少份 * 当前元素所占 分数）',
					images: [
						'/static/faxian/img2.jpg',
						'/static/faxian/img1.png',
						'/static/faxian/img2.jpg'
					],
					likes: 350,
					stars: 103,
					comments: [{
							id: 1,
							author: '用户A',
							avatar: '/static/faxian/img1.png',
							date: '2天前',
							text: '笑死了🐒...',

							replies: [{
								id: 1,
								author: '用户B',
								avatar: '/static/faxian/img1.png',
								date: '2天前',
								text: '刷分是有记录的...',
							}],
							showReplies: false,
							showReplyBox: false,
							replyText: ''
						},
						{
							id: 2,
							author: '用户C',
							avatar: '/static/faxian/img1.png',
							date: '2天前',
							text: '陆本没办法造假啊...',

							replies: [],
							showReplies: false,
							showReplyBox: false,
							replyText: ''
						}
					]
				},
				newComment: '', // 新评论内容
				newReply: ''
			}
		},
		onLoad(options) {
			this.fetchPostData(options.postID);
		},
		onShow(options) {
			this.fetchPostData(options.postID);
		},
		methods: {
			async getInfo(A) {
				const getUserRes = await uniCloud.callFunction({
					name: 'getUserById',
					data: {
						A
					},

				});
				// console.log(getUserRes.result.data);
				// console.log(getUserRes.result.data);
				this.post.author = getUserRes.result.data.name; // 根据userId获取作者名
				this.post.avatar = getUserRes.result.data.avatar; // 根据userId获取头像
				// console.log(this.post.author);
				// console.log(this.post.avatar);
			},
			async getCommentAuthorInfo() {
				for (const comment of this.post.comments) {
					console.log(comment);
					const A = comment.commentUserID;
					console.log(A);
					const getUserRes = await uniCloud.callFunction({
						name: 'getUserById',
						data: {
							A 
						}
					});
					console.log(getUserRes);
					comment.author = getUserRes.result.data.name;
					comment.avatar = getUserRes.result.data.avatar;
				}

			},
			async fetchPostData(postID) {
				const tem = 1;
				const apiUrl = `http://112.124.70.202:5555/api/post/get_post?PostId=${postID}`;
				uni.request({
					url: apiUrl,
					method: 'GET',
					success: (res) => {
						// console.log(res);
						if (res.statusCode === 200 && res.data) {
							const postData = res.data;
							this.post.id = postData.postId;
							this.post.userID = postData.userId;
							this.temp = postData.userId;
							// this.post.author = '作者名'; // 根据userId获取作者名
							// this.post.avatar = '/static/faxian/img1.png'; // 根据userId获取头像
							this.post.title = postData.title;
							this.post.date = new Date(postData.publishTime).toLocaleString();
							this.post.location = '武汉'; // 根据userId获取位置
							this.post.content = postData.content;
							this.post.images = postData.images.split(',');
							this.post.likes = postData.likeCount;
							this.post.stars = postData.favouriteCount;
							// this.post.comments = postData.commentList || [];
							const result = this.getInfo(this.post.userID);

							this.post.author = result.name; // 根据userId获取作者名
							this.post.avatar = result.avatar; // 根据userId获取头像
						}


					},
					fail: (err) => {
						console.error('API请求失败：', err);
					}

				});
				uni.request({
					url: `http://112.124.70.202:5555/api/post/get_comment?commentld=1&postId=${postID}`,
					method: 'GET',
					success: (res) => {
						// console.log(res);
						if (res.statusCode === 200 && res.data) {
							const postData = res.data;
							// this.post.comments=[];
							// for(const comment of postData){
							// 	const commentUserInfo=this.getCommentAuthorInfo(comment.commentUserId);
							// 	console.log(commentUserInfo);
							// }
							// 假设返回的数据是一个数组，映射到 post.comments 中
							this.post.comments = postData.map(comment => ({
								commentUserID: comment.commentUserId,
								id: comment.commentId,
								author: `user${comment.commentUserId}`, // 这里假设作者名称是 "用户" 加上 commentUserId
								avatar: '/static/faxian/img1.png', // 这里使用了一个默认的头像路径
								date: new Date(comment.commentTime)
							.toLocaleDateString(), // 格式化日期
								text: comment.commentContent,
								replies: comment.replyList ? comment.replyList.map(reply => ({
									id: reply.commentId,
									author: `用户${reply.commentUserId}`,
									avatar: '/static/faxian/img1.png', // 这里也使用了一个默认的头像路径
									date: new Date(reply.commentTime)
										.toLocaleDateString(), // 格式化日期
									text: reply.commentContent,
								})) : [],
								showReplies: false,
								showReplyBox: false,
								replyText: ''
							}));
							this.getCommentAuthorInfo();
						}

					},
					fail: (err) => {
						console.error('API请求失败：', err);
					}
				});
				// console.log(this.temp);
				// uni.request({
				// 	url: `http://112.124.70.202:5555/api/user/get_info?userId=${this.temp}`,
				// 	method: 'GET',
				// 	success: (res) => {
				// 		console.log(res);
				// 		if (res.statusCode === 200 && res.data) {
				// 			console.log(res);
				// 			const postData = res.data;
				// 			this.post.author = postData.username; // 根据userId获取作者名
				// 			this.post.avatar = postData.url; // 根据userId获取头像
				// 			console.log(this.post.author);
				// 			console.log(this.post.avatar);
				// 			// this.post.comments = postData.commentList || [];
				// 		}


				// 	},
				// 	fail: (err) => {
				// 		console.error('API请求失败：', err);
				// 	}

				// });
			},
			goBack() {
				// 返回上一页
				uni.navigateBack()
			},
			showReplies(commentId) {
				const comment = this.post.comments.find(c => c.id === commentId)
				if (comment) {
					comment.showReplies = !comment.showReplies
				}
			},
			toggleReplyBox(commentId) {
				const comment = this.post.comments.find(c => c.id === commentId)
				if (comment) {
					comment.showReplyBox = !comment.showReplyBox
				}
			},
			sendReply(commentId) {
				const comment = this.post.comments.find(c => c.id === commentId)
				const apiUrl =
					`http://112.124.70.202:5555/api/post/reply_comment?commentId=${commentId}&replyUserId=${getApp().globalData.userID}&postId=${this.post.id}&replyContent=${this.newReply}`;;
				uni.request({
					url: apiUrl,
					method: 'POST',
					success: (res) => {
						console.log(res);
						if (res.statusCode === 200) {

							uni.showToast({
								title: '回复成功',
								icon: 'success'
							});
						} else {
							uni.showToast({
								title: '回复失败',
								icon: 'none'
							});
						}
					},
					fail: (err) => {
						console.error('API请求失败：', err);
						uni.showToast({
							title: '回复失败',
							icon: 'none'
						});
					}
				});
				if (comment && comment.replyText.trim() !== '') {
					const newReply = {
						id: comment.replies.length + 1,
						userID: '12345',
						author: '当前用户',
						avatar: '/static/faxian/img1.png', // 替换为当前用户头像
						date: '刚刚',
						text: comment.replyText
					}
					comment.replies.push(newReply)
					comment.replyText = '' // 清空回复框
					uni.showToast({
						title: '回复成功',
						icon: 'success'
					})
				} else {
					uni.showToast({
						title: '回复不能为空',
						icon: 'none'
					})
				}

			},
			like() {
				// 点赞功能实现
				const apiUrl =
					`http://112.124.70.202:5555/api/post/like_post?userId=${getApp().globalData.userID}&postId=${this.post.id}`;
				uni.request({
					url: apiUrl,
					method: 'POST',
					success: (res) => {
						console.log(res);
						if (res.statusCode === 200) {

							this.post.likes += 1;
							uni.showToast({
								title: '点赞成功',
								icon: 'success'
							});
						} else {
							uni.showToast({
								title: '点赞失败',
								icon: 'none'
							});
						}
					},
					fail: (err) => {
						console.error('API请求失败：', err);
						uni.showToast({
							title: '点赞失败',
							icon: 'none'
						});
					}
				});

			},
			star() {
				const apiUrl =
					`http://112.124.70.202:5555/api/post/fav_post?userId=${getApp().globalData.userID}&postId=${this.post.id}`;
				uni.request({
					url: apiUrl,
					method: 'POST',
					success: (res) => {
						console.log(res);
						if (res.statusCode === 200) {

							this.post.stars += 1;
							uni.showToast({
								title: '收藏成功',
								icon: 'success'
							});
						} else {
							uni.showToast({
								title: '收藏失败',
								icon: 'none'
							});
						}
					},
					fail: (err) => {
						console.error('API请求失败：', err);
						uni.showToast({
							title: '收藏失败',
							icon: 'none'
						});
					}
				});

			},
			comment() {
				// 获取评论内容
				const commentContent = this.newComment.trim();

				// 检查评论内容是否为空
				if (commentContent === '') {
					uni.showToast({
						title: '评论不能为空',
						icon: 'none'
					});
					return;
				}

				// 发送评论请求
				const apiUrl =
					`http://112.124.70.202:5555/api/post/comment_post?commentUserId=${getApp().globalData.userID}&postId=${this.post.id}&commentContent=${this.newComment}`;
				// console.log(apiUrl);
				uni.request({
					url: apiUrl,
					method: 'POST',
					success: (res) => {
						console.log(res);
						if (res.statusCode === 200 && res.data === "已评论") {
							// 添加新评论到评论列表
							const newComment = {
								id: this.post.comments.length + 1, // 简单地用数组长度作为id
								author: '当前用户', // 替换为当前登录用户的信息
								avatar: '/static/faxian/img1.png', // 替换为当前用户头像
								date: '刚刚',
								text: commentContent,
								replies: [],
								showReplies: false,
								showReplyBox: false,
								replyText: ''
							};
							this.post.comments.push(newComment);
							this.newComment = ''; // 清空输入框
							uni.showToast({
								title: '评论成功',
								icon: 'success'
							});
						} else {
							uni.showToast({
								title: '评论失败',
								icon: 'none'
							});
						}
					},
					fail: (err) => {
						console.error('API请求失败：', err);
						uni.showToast({
							title: '评论失败',
							icon: 'none'
						});
					}
				});
				this.fetchPostData(options.postID);
			},
			sendComment() {
				// 发送评论逻辑
				if (this.newComment.trim() === '') {
					uni.showToast({
						title: '评论不能为空',
						icon: 'none'
					})
					return
				}
				const newComment = {
					id: this.post.comments.length + 1, // 简单地用数组长度作为id
					author: '当前用户', // 替换为当前登录用户的信息
					avatar: '/static/faxian/img1.png', // 替换为当前用户头像
					date: '刚刚',
					text: this.newComment,
					replies: [],
					showReplies: false,
					showReplyBox: false,
					replyText: ''
				}
				this.post.comments.push(newComment)
				this.newComment = '' // 清空输入框
				uni.showToast({
					title: '评论成功',
					icon: 'success'
				})
			}
		}
	}
</script>



<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}

	/* 顶部导航栏 */
	.navbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 88rpx;
		border-bottom: 1rpx solid #e0e0e0;
		margin-top: 50rpx;
	}

	.nav-left {
		flex: 1;
		/* display: flex;
		justify-content: center;
		align-items: center; */
	}

	.nav-avatar {
		flex: 2;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.nav-title {
		margin-left: 8rpx;
		font-size: 32rpx;
		font-weight: bold;
	}

	.nav-right {
		flex: 1;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	.back {
		width: 60rpx;
		height: 60rpx;
	}

	.avatar {
		width: 60rpx;
		height: 60rpx;
		border-radius: 50%;
	}

	.follow-button {
		color: #ff4d4f;
		font-size: 28rpx;
		margin-right: 16rpx;
		border-radius: 10rpx;
		font-weight: bold;
	}

	/* 图片轮播 */
	.image-swiper {
		width: 100%;
		height: 400rpx;
	}

	.swiper-image {
		width: 100%;
		height: 100%;
		border-radius: 8rpx;
	}

	/* 帖子内容 */
	.post-container {
		flex: 1;
		padding: 6rpx;
		overflow-y: auto;
	}

	.post-header {
		margin-bottom: 16rpx;
	}

	.post-title {
		font-size: 36rpx;
		font-weight: bold;
		margin-bottom: 8rpx;
	}

	.post-meta {
		font-size: 26rpx;
		color: #888;
		display: flex;
		flex-direction: column;
	}

	.post-content {
		font-size: 32rpx;
		line-height: 1.5;
		margin-top: 16rpx;
	}

	/* 评论列表 */
	.comments-container {
		margin-top: 32rpx;
		margin-right: 32rpx;
	}

	.comment {
		display: flex;
		margin-bottom: 16rpx;
	}

	.comment-avatar {
		width: 60rpx;
		height: 60rpx;
		border-radius: 50%;
		margin-right: 16rpx;
	}

	.comment-content {
		flex: 1;
	}

	.comment-header {
		display: flex;
		justify-content: space-between;
		font-size: 28rpx;
		margin-bottom: 8rpx;
	}

	.comment-text {
		font-size: 32rpx;
		line-height: 1.5;
	}

	.comment-actions {
		display: flex;
		justify-content: space-between;
		margin-top: 8rpx;
	}

	.like-button,
	.reply-button {
		font-size: 28rpx;
		color: #888;
	}

	.reply-box {
		display: flex;

	}

	.reply-input {
		border: 1rpx solid #e0e0e0;
		border-radius: 8rpx;
		margin-right: 16rpx;
		margin-top: 8rpx;
	}

	.send-reply {
		border: 1rpx solid #e0e0e0;
		border-radius: 8rpx;
		margin-right: 16rpx;
	}

	.replies {
		margin-left: 76rpx;
		margin-top: 8rpx;
	}

	.reply {
		display: flex;
		margin-bottom: 8rpx;
	}

	.reply-avatar {
		width: 48rpx;
		height: 48rpx;
		border-radius: 50%;
		margin-right: 8rpx;
	}

	.reply-content {
		flex: 1;
	}

	.reply-header {
		display: flex;
		justify-content: space-between;
		font-size: 26rpx;
		margin-bottom: 4rpx;
	}

	.reply-text {
		font-size: 28rpx;
		line-height: 1.5;
	}

	/* 底部操作栏 */
	.bottom-bar {
		display: flex;
		align-items: center;
		padding: 16rpx;
		border-top: 1rpx solid #e0e0e0;
	}

	.comment-input {
		flex: 1;
		padding: 8rpx;
		font-size: 32rpx;
		border: 1rpx solid #e0e0e0;
		border-radius: 8rpx;
		margin-right: 16rpx;
	}

	.bottom-buttons {
		display: flex;
	}

	.bottom-button {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 120rpx;
		height: 80rpx;
		margin-left: 16rpx;
		background-color: #ffffff;
		border-color: #ffffff;
	}

	.pinglun {
		width: 80rpx;
		height: 70rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid #ccc;
		border-radius: 4px;
	}

	.icon {
		width: 48rpx;
		height: 48rpx;
		margin-right: 8rpx;
	}
</style>