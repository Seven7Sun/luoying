<template>
  <view class="container">
    <view class="message-list">
      <view v-for="message in messages" :key="message.userId" class="message-item" @click="openChat(message)">
        <image :src="message.avatar" class="avatar"></image>
        <view class="content">
          <view class="header">
            <text class="name">{{ message.name }}</text>
            <text class="time">{{ formatTimeDifference(message.timestamp) }}</text>
          </view>
          <text class="text">{{ message.content }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      messages: []
    };
  },
  onLoad() {
    this.getMessages();
    this.startTimer();
  },
  beforeDestroy() {
    this.stopTimer();
  },
  methods: {
    async getMessages() {
      const res = await uniCloud.callFunction({
        name: 'getMessages'
      });
      if (res.result.code === 0) {
        this.messages = res.result.data;
      } else {
        uni.showToast({
          title: 'Failed to load messages',
          icon: 'none'
        });
      }
    },
    openChat(message) {
		console.log('Navigating to chat with parameters:', {
		    userId: message.userId,
		    name: message.name,
		    avatar: message.avatar
		  });
       uni.navigateTo({
      url: `/pages/chat/chat?userId=${message.userId}&name=${message.name}&avatar=${message.avatar}`
        });
    },
    formatTimeDifference(timestamp) {
      const now = Date.now();
      const difference = now - timestamp;

      if (difference < 60000) { // 小于1分钟
        return '刚刚';
      } else if (difference < 3600000) { // 小于1小时
        return `${Math.floor(difference / 60000)}分钟前`;
      } else if (difference < 86400000) { // 小于1天
        return `${Math.floor(difference / 3600000)}小时前`;
      } else {
        return `${Math.floor(difference / 86400000)}天前`;
      }
    },
    startTimer() {
      this.timer = setInterval(() => {
        this.getMessages(); // 刷新消息列表
      }, 60000); // 每分钟刷新一次
    },
    stopTimer() {
      if (this.timer) {
        clearInterval(this.timer);
      }
    }
  }
};
</script>

<style scoped>
.container {
  padding-top: 0px;
}
.message-list {
  margin-top: 10px;
}
.message-item {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  margin-top: 5px; /* 向下移动图片 */
}
.content {
  flex: 1;
}
.header {
  display: flex;
  justify-content: space-between;
}
.name {
  font-size: 16px;
  font-weight: bold;
}
.time {
  color: #999;
}
.text {
  color: #666;
}
</style>