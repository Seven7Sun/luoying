<template>
	<view class="container">
		<!-- 搜索栏 -->
		<view class="search-bar">
			<input class="search-input" v-model="searchContent" type="text" placeholder="搜索帖子" />
			<button class="search-button" @click="searchPosts">搜索</button>
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
			<view class="post-item" v-for="post in filteredPosts" :key="post.id" @tap="toDetail(post.id)">
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
					<text>{{ post.title }}</text>
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
				searchContent: '',
				posts: [{
						id: 12345,
						tags: ['借阅'],
						views: 111,
						comments: 12,
						title: '有偿求《Operation System》第10版',
						image: ['/static/faxian/img1.png']
					},
					{
						id: 54321,
						tags: ['问题', '数学', '逆天', '不行', '都可以'],
						views: 678,
						comments: 25,
						title: '有人知道这道题怎么解决吗？',
						image: ['/static/faxian/img1.png', '/static/images/building2.jpg']
					}
				],
				filteredPosts: []
			}
		},
		mounted() {
			// 初始化时显示所有帖子
			this.fetchPosts();
		},
		methods: {
			toDetail(id) {
				uni.navigateTo({
					url: `/pages/tieziDetail/tieziDetail?id=${id}`
				})
			},
			searchPosts() {
				const searchContentLower = this.searchContent.trim().toLowerCase();
				if (searchContentLower === '') {
					this.filteredPosts = this.posts;
				} else {
					this.filteredPosts = this.posts.filter(post => {
						const titleMatch = post.title.toLowerCase().includes(searchContentLower);
						const tagsMatch = post.tags.some(tag => tag.toLowerCase().includes(searchContentLower));
						return titleMatch || tagsMatch;
					});
				}
			},
			fetchPosts() {
				uni.request({
					url: 'http://112.124.70.202:5555/api/post', // 替换为你的后端API地址
					method: 'GET',
					success: (res) => {
						if (res.statusCode === 200) {
							this.posts = res.data.map(item => ({
								id: item.postId,
								tags: item.tags ? item.tags.split(',') : [],
								views: item.likeCount,
								comments: item.commentCount,
								title: item.title,
								image: item.images ? item.images.split(',') : []
							}));
							this.filteredPosts = this.posts;
						} else {
							console.error('获取帖子数据失败:', res.data);
						}
					},
					fail: (err) => {
						console.error('请求失败:', err);
					}
				});
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
		width: 700rpx;
	}

	.search-bar {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 16px;
	}

	.search-input {
		width: calc(100% - 70px);
		height: 40px;
		padding: 0 10px;
		border: 1px solid #ccc;
		border-radius: 20px;
	}

	.search-button {
		width: 70px;
		height: 40px;
		margin-left: 10px;
		border: none;
		border-radius: 20px;
		background-color: #007bff;
		color: white;
		font-size: 16px;
		cursor: pointer;
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
		margin-top: 2rpx;
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