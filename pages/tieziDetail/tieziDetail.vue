<template>
	<view class="container">
		<!-- 顶部导航栏 -->
		<view class="navbar">
			<view class="nav-left" @click="goBack">
				<image src="/static/icons/back.png" class="icon"></image>
			</view>
			<view class="nav-avatar">
				<image :src="post.avatar" class="avatar"></image>
			</view>
			<view class="nav-title">{{ post.author }}</view>
			<view class="nav-right">
				<button class="follow-button">关注</button>
			</view>
		</view>

		<!-- 帖子内容 -->
		<view class="post-container">
			<view class="post-header">
				<text class="post-title">{{ post.title }}</text>
				<view class="post-meta">
					<text class="post-date">{{ post.date }}</text>
					<text class="post-location">{{ post.location }}</text>
				</view>
			</view>
			<view class="post-content">
				<text class="post-text">{{ post.content }}</text>
				<image v-if="post.image" :src="post.image" class="post-image"></image>
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
							<text class="reply-button" @click="showReplies(comment.id)">展开 {{ comment.replies.length }} 条回复</text>
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
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 底部操作栏 -->
		<view class="bottom-bar">
			<input class="comment-input" placeholder="说点什么..." />
			<view class="bottom-buttons">
				<button class="bottom-button">
					<image src="/static/icons/like.png" class="icon"></image>
					<text>{{ post.likes }}</text>
				</button>
				<button class="bottom-button">
					<image src="/static/icons/star.png" class="icon"></image>
					<text>{{ post.stars }}</text>
				</button>
				<button class="bottom-button">
					<image src="/static/icons/comment.png" class="icon"></image>
					<text>{{ post.comments.length }}</text>
				</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				post: {
					author: 'Darian',
					avatar: '/static/faxian/img1.png', // 用户头像路径
					title: '港大校长爆雷🔥🔥🔥',
					date: '昨天 23:38',
					location: '日本',
					content: '原来香港学校已经这么颓了嘛...',
					image: '/static/faxian/img2.png',
					likes: 350,
					stars: 103,
					comments: [{
							id: 1,
							author: '用户A',
							avatar: '/static/faxian/img1.png',
							date: '2天前',
							text: '笑死了🐒...',
							likes: 23,
							replies: [{
								id: 101,
								author: '用户B',
								avatar: '/static/faxian/img1.png',
								date: '2天前',
								text: '刷分是有记录的...',
							}],
							showReplies: false
						},
						{
							id: 2,
							author: '用户C',
							avatar: '/static/faxian/img1.png',
							date: '2天前',
							text: '陆本没办法造假啊...',
							likes: 113,
							replies: [],
							showReplies: false
						}
					]
				}
			}
		},
		methods: {
			goBack() {
				// 返回上一页
				uni.navigateBack()
			},
			showReplies(commentId) {
				const comment = this.post.comments.find(c => c.id === commentId)
				if (comment) {
					comment.showReplies = !comment.showReplies
				}
			}
		}
	}
</script>

<style scoped>
	.container {
		margin-top: 50rpx;
		display: flex;
		flex-direction: column;
		padding: 16rpx;
		background-color: #fff;
	}

	/* 顶部导航栏 */
	.navbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 88rpx;
		padding: 0 16rpx;
		border-bottom: 1rpx solid #e0e0e0;
	}

	.nav-left {
		flex: 1;
	}

	.nav-title {
		flex: 2;
		text-align: center;
		font-size: 32rpx;
		font-weight: bold;
	}

	.nav-avatar {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.nav-right {
		flex: 1;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	.icon {
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
	}

	/* 帖子内容 */
	.post-container {
		padding: 16rpx;
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
	}

	.post-content {
		font-size: 32rpx;
		line-height: 1.5;
		margin-top: 16rpx;
	}

	.post-image {
		width: 100%;
		height: auto;
		margin-top: 16rpx;
		border-radius: 8rpx;
	}

	/* 评论列表 */
	.comments-container {
		margin-top: 32rpx;
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

	.replies {
		margin-top: 16rpx;
		padding-left: 76rpx;
	}

	.reply {
		display: flex;
		margin-bottom: 16rpx;
	}

	.reply-avatar {
		width: 60rpx;
		height: 60rpx;
		border-radius: 50%;
		margin-right: 16rpx;
	}

	.reply-content {
		flex: 1;
	}

	.reply-header {
		display: flex;
		justify-content: space-between;
		font-size: 28rpx;
		margin-bottom: 8rpx;
	}

	.reply-text {
		font-size: 32rpx;
		line-height: 1.5;
	}

	/* 底部操作栏 */
	.bottom-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 100rpx;
		padding: 0 16rpx;
		border-top: 1rpx solid #e0e0e0;
		background-color: #fff;
	}

	.comment-input {
		flex: 3;
		height: 70rpx;
		padding: 0 16rpx;
		border: 1rpx solid #e0e0e0;
		border-radius: 35rpx;
		font-size: 28rpx;
	}

	.bottom-buttons {
		flex: 2;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.bottom-button {
		display: flex;
		align-items: center;
		border: none;
		background: none;
	}

	.bottom-button text {
		margin-left: 8rpx;
		font-size: 28rpx;
	}
</style>
