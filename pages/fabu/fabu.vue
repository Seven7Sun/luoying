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
			<view class="add-section" v-if="selectedTab==='post'">
				<text># 添加标签：</text>
				<view class="tag" v-for="tag in tags" :key="tag.id">
					<text>{{ tag.name }}</text>
					<button @tap="removeTag(tag)">删除</button>
				</view>
				<image src="../../static/fabu/add.png" mode="heightFix" class="add-icon"  @tap="showTagModal"></image>
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

		<view v-if="isTagModalVisible" class="modal">
			<view class="modal-content">
				<view class="modal-header">
					<text style="margin-left: 20rpx;">#添加标签</text>
					<button @tap="hideTagModal" style="margin-right: 10rpx;">完成</button>
				</view>
				<view class="modal-body">
					<view class="search-bar">
						<input type="text" v-model="searchQuery" placeholder="搜索话题" />
					</view>
					<view class="recommended-tags">
						<text style="font-weight: bold;">推荐标签</text>
						<view class="tag" v-for="tag in recommendedTags" :key="tag.id" @tap="addTag(tag)">
							<text>#{{ tag.name }}</text>
							<view class="">
								+添加标签
							</view>
						</view>
					</view>
					<view class="create-tag">
						<text style="font-weight: bold;">创建标签</text>
						<view class="maketags">
							<input style="border: 1px solid #ccc;border-radius: 4px;margin-top:20rpx;" type="text" v-model="newTag" placeholder="一个新的标签在此诞生..." />
							<view @tap="createTag" style="white-space: nowrap;height: 50rpx;margin-top:20rpx;border: 1px solid #ccc;border-radius: 4px;background-color: #ccc;margin-left: 15rpx;padding-left: 10rpx;padding-right: 10rpx">创建</view>
						</view>
						
					</view>
					<view class="added-tags">
						<text>已添加标签</text>
						<view class="tag" v-for="tag in tags" :key="tag.id">
							<text>{{ tag.name }}</text>
							<button @tap="removeTag(tag)">删除</button>
						</view>
					</view>
				</view>
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
				imageSrc: '',
				isTagModalVisible: false,
				searchQuery: '',
				recommendedTags: [
					{ id: 1, name: '维护地球日！', icon: 'path/to/icon1.png' },
					{ id: 2, name: '1024程序员节！', icon: 'path/to/icon2.png' },
					{ id: 3, name: '乘风破浪！', icon: 'path/to/icon3.png' },
					{ id: 4, name: '数学', icon: 'path/to/icon4.png' }
				],
				newTag: ''
			}
		},
		methods: {
			selectTab(tab) {
				this.selectedTab = tab;
			},
			showTagModal() {
				this.isTagModalVisible = true;
			},
			hideTagModal() {
				this.isTagModalVisible = false;
			},
			addTag(tag) {
				this.tags.push(tag);
			},
			removeTag(tag) {
				this.tags = this.tags.filter(t => t.id !== tag.id);
			},
			createTag() {
				if (this.newTag.trim()) {
					this.tags.push({ id: Date.now(), name: this.newTag });
					this.newTag = '';
				}
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
		/* width:350rpx; */
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.uploaded-image {
		width: 100px;
		height: 100px;
		margin-top: 10px;
		border: 1px solid #ccc;
		border-radius: 4px;
	}

	.modal {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		/* height: 100%; */
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		/* align-items: center; */
	}

	.modal-content {
		margin-top: 100rpx;
		background: #fff;
		width: 80%;
		border-radius: 8px;
		/* flex-grow: 1; */
		overflow: hidden;
		margin-bottom: 200rpx;
	}

	.modal-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px;
		background: #f1f1f1;
		border-bottom: 1px solid #ddd;
	}

	.modal-body {
		padding: 10px;
	}

	.search-bar {
		margin-bottom: 10px;
		border: 1px solid #ccc;
		border-radius: 4px;
	}

	.recommended-tags,
	.create-tag,
	.added-tags {
		margin-bottom: 10px;
	}

	.tag {
		display: flex;
		align-items: center;
		margin-bottom: 5px;
	}

	.tag-icon {
		width: 30px;
		height: 30px;
		margin-right: 5px;
	}
	
	.maketags{
		display: flex;
		width: 100%;
	}
</style>
