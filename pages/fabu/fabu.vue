<template>
	<view class="container">
		<view class="top-nav">
			<view class="nav-item" @click="selectTab('post')">发帖</view>
			<view class="nav-item" @click="selectTab('comment')">跟帖</view>
		</view>
		<view class="content">
			<view class="txtouter">
				<textarea class="textarea" v-model="content" placeholder="说些什么吧..."></textarea>
			</view>
			<view class="add-section" @click="addTag">
				<image src="../../static/add.png" class="add-icon"></image>
				<text># 添加标签：</text>
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
				tags: []
			}
		},
		methods: {

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
		display: flex;
		justify-content: space-around;
		background-color: #fff;
		padding: 10px 0;
		border-bottom: 1px solid #e5e5e5;
	}

	.nav-item {
		flex: 1;
		text-align: center;
		font-weight: bold;
		color: #333;
	}

	.content {
		flex: 1;
		padding: 20px;
	}

	.txtouter{
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
		display: flex;
		align-items: center;
		margin-bottom: 20px;
	}

	.add-icon {
		width: 40px;
		height: 40px;
		margin-right: 10px;
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
</style>