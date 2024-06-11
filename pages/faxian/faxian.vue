<template>
	<view class="container">
		<!-- 搜索栏 -->
		<view class="search-bar">
			<input class="search-input" type="text" placeholder="搜索帖子" />
		</view>

		<!-- 图片轮播图 -->
		<swiper class="swiper-container" indicator-dots="true" autoplay="true" interval="3000" duration="500">
			<swiper-item>
				<image src="/static/faxian/img1.png" class="swiper-image"></image>
			</swiper-item>
			<swiper-item>
				<image src="/static/faxian/img2.jpg" class="swiper-image"></image>
			</swiper-item>
		</swiper>

		<!-- 分隔线 -->
		<view class="divider"></view>

		<!-- 帖子列表 -->
		<view class="post-list">
			<view class="post-item" v-for="post in posts" :key="post.id">
				<view class="post-header">
					<text class="post-id">@{{ post.id }}</text>
					<view class="post-tags">
						<text class="tag" v-for="tag in post.tags" :key="tag">#{{ tag }}</text>
					</view>
					<view class="post-stats">
						<image src="/static/faxian/view.png" style="height: 40rpx;width: 40rpx;"></image>
						<text class="views">{{ post.views }}</text>
						<image src="/static/faxian/comment.png" style="height: 40rpx;width: 40rpx;"></image>
						<text class="comments">{{ post.comments }}</text>
					</view>
				</view>
				<view class="post-content">
					<text>{{ post.content }}</text>
					<image v-if="post.image && Array.isArray(post.image)" :src="post.image[0]" class="post-image">
					</image>
					<image v-else-if="post.image" :src="post.image" class="post-image"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				posts: [{
						id: 12345,
						tags: ['借阅'],
						views: 111,
						comments: 12,
						content: '有偿求《Operation System》第10版',
						image: ['/static/faxian/img1.png']
					},
					{
						id: 54321,
						tags: ['问题', '数学', '逆天', '不行', '都可以'],
						views: 678,
						comments: 25,
						content: '有人知道这道题怎么解决吗？',
						image: ['/static/faxian/img1.png', '/static/images/building2.jpg']
					}
				]
			}
		}
	}
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		padding: 16px;
		background-color: #fff;
	}

	.search-bar {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 16px;
	}

	.search-input {
		width: 100%;
		height: 40px;
		padding: 0 10px;
		border: 1px solid #ccc;
		border-radius: 20px;
	}

	.swiper-container {
		height: 200px;
		margin-bottom: 16px;
	}

	.swiper-image {
		width: 100%;
		height: 100%;
		border-radius: 8px;
	}

	.divider {
		height: 1px;
		background-color: #e0e0e0;
		margin: 16px 0;
	}

	.post-list {
		display: flex;
		flex-direction: column;
	}

	.post-item {
		background-color: #f8f8f8;
		border: 1px solid #ccc;
		border-radius: 4px;
		padding: 16px;
		margin-bottom: 16px;
	}

	.post-header {
		display: flex;
		align-items: center;
		margin-bottom: 8px;
	}

	.post-id {
		font-weight: bold;
		margin-right: 8px;
	}

	.post-tags {
		flex: 1;
		display: flex;
		flex-wrap: wrap;
	}

	.tag {
		background-color: #dcdcdc;
		border-radius: 12px;
		padding: 2px 8px;
		margin-right: 4px;
		font-size: 12px;
	}

	.post-stats {
		display: flex;
		align-items: center;
	}

	.views {
		display: flex;
		align-items: center;
		margin-right: 4rpx;
		margin-left: 4rpx;
	}

	.comments {
		display: flex;
		align-items: center;
		margin-left: 4rpx;
	}

	.post-content {
		display: flex;
		flex-direction: column;
	}

	.post-image {
		width: 100px;
		height: 100px;
		border-radius: 8px;
		margin-top: 8px;
	}
</style>