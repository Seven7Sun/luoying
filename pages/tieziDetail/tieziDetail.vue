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
		</scroll-view>

		<!-- 底部操作栏 -->
		<view class="bottom-bar">
			<input class="comment-input" placeholder="说点什么..." />
			<view class="bottom-buttons">
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
				post: {
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
			},
			like(){
				
			},
			star(){
				
			},
			comment(){
				
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
	
	.back{
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

	.icon {
		width: 48rpx;
		height: 48rpx;
		margin-right: 8rpx;
	}
	

</style>
