<template>
	<view class="container">
		<view class="top-nav">
			<view class="nav-item" :class="{ 'selected': selectedTab === 'post' }" @tap="selectTab('post')">发帖</view>
			<view class="nav-item" :class="{ 'selected': selectedTab === 'comment' }" @tap="selectTab('comment')">跟帖
			</view>
		</view>
		<view class="content">
			<view class="txtouter">
				<textarea class="textarea" v-model="content" placeholder="说些什么吧..."></textarea>
			</view>
			<view class="uploadImage">
				<button @tap="chooseImage">选择图片</button>
				<image v-if="imageSrc" :src="imageSrc" class="uploaded-image"></image>
			</view>
			<view class="add-section" v-if="selectedTab==='post'" @click="addTag">
				<text># 添加标签：</text>
				<image src="../../static/fabu/add.png" mode="heightFix" class="add-icon"></image>
			</view>
			<view class="tiezinumber" v-if="selectedTab==='comment'">
				<text>@：</text>
				<image src="../../static/fabu/add.png" mode="heightFix" class="add-icon"></image>
			</view>

			<view class="markdown-toggle">
				<text>markdown模式</text>
				<switch :checked="isMarkdown" @change="toggleMarkdown"></switch>
			</view>
			<view class="button-section">
				<button class="save-draft-button" @click="saveDraft">保存草稿</button>
				<button class="publish-button" @click="publish">发布</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				selectedTab: 'post',
				content: '',
				isMarkdown: false,
				tags: [],
				imageSrc: ''
			}
		},
		methods: {
			selectTab(tab) {
				this.selectedTab = tab;
			},
			addTag() {
				// 添加标签的逻辑
			},
			toggleMarkdown(event) {
				this.isMarkdown = event.detail.value;
			},
			saveDraft() {
				// 保存草稿的逻辑
			},
			publish() {
				// 发布的逻辑
			},
			chooseImage() {
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'],
					sourceType: ['album'],
					success: (res) => {
						this.imageSrc = res.tempFilePaths[0];
						this.uploadImage(res.tempFilePaths[0]);
					},
					fail: (err) => {
						console.error("选择图片失败：", err);
					}
				});
			},
			uploadImage(filePath) {
				uni.uploadFile({
					url: 'https://your-upload-server.com/upload', // 替换为实际的上传服务器地址
					filePath: filePath,
					name: 'file',
					success: (uploadFileRes) => {
						console.log("上传成功：", uploadFileRes);
						// 可以在这里处理上传成功后的逻辑
					},
					fail: (err) => {
						console.error("上传失败：", err);
					}
				});
			}
		}
	}
</script>

<style>
	.container {
		display: flex;
		flex-direction: column;
		height: 100%;
		background-color: #f5f5f5;
	}

	.top-nav {
		font-size: 40rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color: #fff;
		/* padding: 10px 0; */
		height: 80rpx;
		border-bottom: 1px solid #e5e5e5;
	}

	.nav-item {
		flex: 1;
		text-align: center;
		font-weight: bold;
		color: #333;
	}

	.nav-item.selected {
		background-color: #dcdcdc;
		/* height: 80rpx; */

	}

	.content {
		flex: 1;
		padding: 20px;
	}

	.txtouter {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.textarea {
		width: 100%;
		height: 400rpx;
		border: 1px solid #ccc;
		border-radius: 4px;
		padding: 10px;
		margin-bottom: 20px;
	}

	.add-section {
		margin-top: 20rpx;
		display: flex;
		align-items: center;
		margin-bottom: 20rpx;
	}

	.add-icon {
		width: 40rpx;
		height: 40rpx;
		margin-right: 10px;
	}

	.tiezinumber {
		margin-top: 20rpx;
		display: flex;
		align-items: center;
		margin-bottom: 20rpx;
	}

	.markdown-toggle {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 20px;
	}

	.button-section {
		display: flex;
		justify-content: space-between;
	}

	.save-draft-button,
	.publish-button {
		width: 48%;
		padding: 10px;
		border-radius: 4px;
		text-align: center;
	}

	.save-draft-button {
		background-color: #f0ad4e;
		color: #fff;
	}

	.publish-button {
		background-color: #5bc0de;
		color: #fff;
	}

	.uploadImage {
		margin-bottom: 20px;
	}

	.uploaded-image {
		width: 100px;
		height: 100px;
		margin-top: 10px;
		border: 1px solid #ccc;
		border-radius: 4px;
	}
</style>