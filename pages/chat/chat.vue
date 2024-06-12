<template>
  <view class="chat-container">

    <!-- 消息显示区域 -->
    <scroll-view class="messages" scroll-y>
      <view v-for="(msg, index) in chatMessages" :key="msg._id" :class="['message', msg.senderId === currentUserId ? 'self' : 'other']">
        <image :src="msg.senderId === currentUserId ? selfAvatar : otherAvatar" class="avatar"></image>
        <view :class="['bubble', msg.senderId === currentUserId ? 'self-bubble' : 'other-bubble']">
          <text>{{ msg.content }}</text>
        </view>
        <view v-if="shouldShowTime(index)" class="timestamp">{{ formatTime(msg.timestamp) }}</view>
      </view>
    </scroll-view>

    <!-- 输入框区域 -->
    <view class="input-bar">
      <input v-model="newMessage" class="input-field" placeholder="请输入消息..."></input>
      <button @tap="sendMessage" class="send-button">发送</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      chatId: null,
      newMessage: '',
      chatMessages: [],
      currentUserId: uni.getStorageSync('userId') || null,
      currentUserName: uni.getStorageSync('userName') || '未登录',
      selfAvatar: uni.getStorageSync('avatar') || '',
      otherAvatar: 'https://example.com/other-avatar.jpg',
      receiverId: null,
      receiverName: '' // 你可以从 options 中传递接收者信息
    };
  },
  onLoad(options) {
    this.chatId = options.chatId;
    this.receiverId = options.receiverId;
    this.receiverName = options.receiverName;
    this.getChatMessages();
  },
  methods: {
    async getChatMessages() {
      const res = await uniCloud.callFunction({
        name: 'getChatMessages',
        data: { chatId: this.chatId, userId: this.currentUserId }
      });
      if (res.result.code === 0) {
        this.chatMessages = res.result.data;
      } else {
        uni.showToast({
          title: '加载消息失败',
          icon: 'none'
        });
      }
    },
    async sendMessage() {
      if (this.newMessage.trim() !== '') {
        const message = {
          chatId: this.chatId,
          senderId: this.currentUserId,
          receiverId: this.receiverId,
          content: this.newMessage,
          timestamp: Date.now()
        };
        const res = await uniCloud.callFunction({
          name: 'sendMessage',
          data: message
        });
        if (res.result.code === 0) {
          this.chatMessages.push(message);
          this.newMessage = '';
        } else {
          uni.showToast({
            title: '发送消息失败',
            icon: 'none'
          });
        }
      }
    },
    shouldShowTime(index) {
      if (index === 0) return true;
      const currentMsg = this.chatMessages[index];
      const previousMsg = this.chatMessages[index - 1];
      return currentMsg.timestamp - previousMsg.timestamp > 5 * 60 * 1000;
    },
    formatTime(timestamp) {
      const date = new Date(timestamp);
      return date.toLocaleString();
    },
    goBack() {
      uni.navigateBack();
    },
    onMessage(data) {
      if (data.chatId === this.chatId) {
        this.chatMessages.push(data);
      }
    }
  },
  created() {
    uni.onSocketMessage((res) => {
      const data = JSON.parse(res.data);
      this.onMessage(data);
    });
  }
};
</script>

<style>
.chat-container {
  display: flex;
  flex-direction: column;
  height: 93vh;
  background-color: #f0f0f5;
}

.messages {
  flex: 1;
  padding: 15px;
  overflow-y: auto;
}

.message {
  display: flex;
  margin-bottom: 10px;
  align-items: flex-end;
}

.self {
  justify-content: flex-end;
}

.other {
  justify-content: flex-start;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin: 10px;
}

.bubble {
  max-width: 60%;
  padding: 10px;
  border-radius: 10px;
}

.self-bubble {
  background-color: #4CAF50;
  color: #fff;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
}

.other-bubble {
  background-color: #e6e6e6;
  color: #333;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.timestamp {
  font-size: 12px;
  color: #999;
  margin-top: 5px;
  align-self: center;
}

.input-bar {
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 2px solid #eaeaea;
  background-color: #fff;
}

.input-field {
  flex: 1;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  margin-right: 10px;
}

.send-button {
  background-color: #007AFF;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}
</style>
