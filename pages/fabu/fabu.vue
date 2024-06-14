<template>
	<view class="container">
		<view class="top-nav">
			<view class="nav-item" :class="{ 'selected': selectedTab === 'post' }" @tap="selectTab('post')">发帖</view>
			<view class="nav-item" :class="{ 'selected': selectedTab === 'comment' }" @tap="selectTab('comment')">跟帖
			</view>
		</view>
		<view class="content">
			<view class="txtouter">
				<textarea class="textarea" v-model="title" placeholder="此处填写标题" style="height: 50rpx;"></textarea>
			</view>
			<view class="txtouter">
				<textarea class="textarea" v-model="content" placeholder="说些什么吧..."></textarea>
			</view>
			<view class="uploadImage">
				<button @tap="chooseImage">选择图片</button>

				<view class="uploaded-images">
					<image v-for="(image, index) in imageSrcList" :key="index" :src="image" class="uploaded-image">
					</image>
				</view>
			</view>
			<view class="add-section" v-if="selectedTab==='post'">
				<text># 添加标签：</text>
				<view class="tag tagname" v-for="tag in tags" :key="tag.id">
					<text>{{ tag.name }}</text>
					<view class="deletett" @tap="removeTag(tag)">
						×
					</view>
				</view>
				<image src="../../static/fabu/add.png" mode="heightFix" class="add-icon" @tap="showTagModal"></image>
			</view>
			<view class="tiezinumber" v-if="selectedTab==='comment'">
				<text>@：</text>
				<input style="border: 1px solid #ccc;border-radius: 20rpx;margin-top:20rpx;" type="text" v-model="id"
					placeholder="填入帖子id" />
			</view>

			<view class="markdown-toggle">
				<text>markdown模式</text>
				<switch :checked="isMarkdown" @change="toggleMarkdown"></switch>
			</view>
			<view class="button-section">
				<!-- <button class="save-draft-button" @click="saveDraft">保存草稿</button> -->
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
							<text class="tagname">#{{ tag.name }}</text>
							<view class="addtt">
								+添加标签
							</view>
						</view>
					</view>
					<view class="create-tag">
						<text style="font-weight: bold;">创建标签</text>
						<view class="maketags">
							<input style="border: 1px solid #ccc;border-radius: 4px;margin-top:20rpx;" type="text"
								v-model="newTag" placeholder="一个新的标签在此诞生..." />
							<view @tap="createTag"
								style="white-space: nowrap;height: 50rpx;margin-top:20rpx;border: 1px solid #ccc;border-radius: 4px;background-color: #ccc;margin-left: 15rpx;padding-left: 10rpx;padding-right: 10rpx">
								创建</view>
						</view>

					</view>
					<view class="added-tags">
						<text>已添加标签</text>
						<view class="tag tagname" v-for="tag in tags" :key="tag.id">
							<text>{{ tag.name }}</text>

							<view class="deletett" @tap="removeTag(tag)">
								×
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import axios from 'axios';
	export default {
		data() {
			return {
				title: '',
				selectedTab: 'post',
				content: '',
				isMarkdown: false,
				tags: [],
				imageSrcList: [],
				isTagModalVisible: false,
				searchQuery: '',
				recommendedTags: [{
						id: 1,
						name: '维护地球日！',
						icon: 'path/to/icon1.png'
					},
					{
						id: 2,
						name: '1024程序员节！',
						icon: 'path/to/icon2.png'
					},
					{
						id: 3,
						name: '乘风破浪！',
						icon: 'path/to/icon3.png'
					},
					{
						id: 4,
						name: '数学',
						icon: 'path/to/icon4.png'
					}
				],
				newTag: '',
				id: ''
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
				if (!this.tags.some(t => t.id === tag.id)) {
					this.tags.push(tag);
				} else {
					console.log("标签已存在");
				}
			},
			removeTag(tag) {
				this.tags = this.tags.filter(t => t.id !== tag.id);
			},
			createTag() {
				if (this.newTag.trim()) {
					if (!this.tags.some(t => t.name === this.newTag.trim())) {
						this.tags.push({
							id: Date.now(),
							name: this.newTag.trim()
						});
						this.newTag = '';
					} else {
						console.log("标签已存在");
					}
				}
			},
			toggleMarkdown(event) {
				this.isMarkdown = event.detail.value;
			},
			saveDraft() {
				// 保存草稿的逻辑
			},
			async publish() {
				// 构建发布的 payload
				const payload = {
					content: this.content,
					isMarkdown: this.isMarkdown,
					tags: this.tags.map(tag => tag.name),
					images: await this.uploadAllImages(this.imageSrcList),
					// 上传图片后获取的 URL 列表
					title: this.title,
					userID: getApp().globalData.userID
				};

				// 发送发布请求
				uni.request({
					url: 'http://112.124.70.202:5555/api/post/create_post', // 替换为实际的发布接口
					method: 'POST',
					data: payload,
					success: (res) => {
						if (res.statusCode === 200) {
							console.log("发布成功：", res);
							uni.showToast({
								title: '发布成功',
								icon: 'success'
							});
						} else {
							uni.showToast({
								title: '发布失败',
								icon: 'none'
							});
						}
					},
					fail: (err) => {
						console.error("发布失败：", err);
						uni.showToast({
							title: '发布失败',
							icon: 'none'
						});
					}
				});
			},
			async uploadAllImages(filePaths) {
				const uploadPromises = filePaths.map(filePath => this.uploadImage(filePath));
				const imageUrls = await Promise.all(uploadPromises);
				return imageUrls.filter(url => url); // 过滤掉上传失败的图片
			},

			uploadImage(filePath) {
				return new Promise((resolve, reject) => {
					uni.uploadFile({
						url: 'http://112.124.70.202:5555/api/Product/UploadFile', // 替换为实际的上传服务器地址
						filePath: filePath,
						name: 'file', // 文件参数名为file
						fileType: 'image',
						header: {
							'Content-Type': 'multipart/form-data' // 设置内容类型为 form-data
						},
						success: (uploadFileRes) => {
							if (uploadFileRes.statusCode === 200) {
								const data = JSON.parse(uploadFileRes.data);
								if (data.Code === 2001) {
									const imageUrl = 'http://112.124.70.202:5555' + data.Data;
									console.log(imageUrl);
									resolve(imageUrl); // 使用服务器返回的相对路径拼接完整URL
								} else {
									console.error("上传失败：", data.Msg);
									resolve(null);
								}
							} else {
								console.error("上传失败，状态码：", uploadFileRes.statusCode);
								resolve(null);
							}
						},
						fail: (err) => {
							console.error("上传失败：", err);
							resolve(null);
						}
					});
				});
			},
			chooseImage() {
				uni.chooseImage({
					count: 9, // 可选最多9张图片
					sizeType: ['original', 'compressed'],
					sourceType: ['album', 'camera'],
					success: (res) => {
						// 将选择的图片添加到 imageSrcList 列表中
						this.imageSrcList = this.imageSrcList.concat(res.tempFilePaths);
					},
					fail: (err) => {
						console.error("选择图片失败：", err);
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
		height: 200%;
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
		flex-wrap: wrap;
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
		padding: 5rpx;
		border-radius: 4px;
		text-align: center;
		height: 100rpx;
		justify-content: center;
		align-items: center;
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
		flex-direction: column;
	}

	.uploaded-images {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.uploaded-image {
		width: 100px;
		height: 100px;
		margin: 10px;
		border: 1px solid #ccc;
		border-radius: 4px;
	}

	.modal {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 200%;
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
	.create-tag {
		margin-bottom: 10px;
	}

	.added-tags {
		margin-bottom: 10px;
		display: flex;
		flex-wrap: wrap;
	}

	.tag {
		margin-left: 10rpx;
		display: flex;
		align-items: center;
		padding-left: 5rpx;
		padding-right: 5rpx;
	}

	.tagname {
		margin-bottom: 5px;
		border: 1px solid #ccc;
		border-radius: 4px;
	}

	.tag-icon {
		width: 30px;
		height: 30px;
		margin-right: 5px;
	}

	.maketags {
		display: flex;
		width: 100%;
	}


	.addtt {
		border: 1px solid #ccc;
		border-radius: 20rpx;
		color: rgb(64, 149, 229);
		margin-left: 20rpx;
		padding-left: 10rpx;
		padding-right: 10rpx;
		background-color: rgb(239, 239, 239);
	}

	.deletett {
		border: 1px solid #ccc;
		border-radius: 100rpx;
		color: rgb(0, 0, 0);
		padding-left: 9rpx;
		padding-right: 9rpx;
		background-color: rgb(239, 239, 239);
	}
</style>