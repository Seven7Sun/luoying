<template>
	<view class="content">
		<image src="../../static/index/sakuraPicture.png" mode="heightFix"></image>
		<image src="../../static/index/schoolIcon.png" mode="heightFix" class="school"></image>
		<text>珞珈山上，樱花树下</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				search: '',
			}
		},
		onLoad() {

		},
		methods: {
			
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

	.school{
		margin-top: 50rpx;
		height: 200rpx;
	}

</style>
