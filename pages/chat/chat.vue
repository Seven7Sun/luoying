<template>
  <view class="chat-container">
    <!-- 消息显示区域 -->
    <scroll-view class="messages" scroll-y>
      <view v-for="(msg, index) in chatMessages" :key="msg._id" :class="['message', msg.senderId === currentUserId ? 'self' : 'other']">
        <view v-if="shouldShowTime(index)" class="timestamp">{{ formatTime(msg.timestamp) }}</view>
        <view class="message-content" :class="msg.senderId === currentUserId ? 'self-content' : 'other-content'">
          <image :src="msg.senderId === currentUserId ? selfAvatar : receiverAvatar" class="avatar"></image>
          <view :class="['bubble', msg.senderId === currentUserId ? 'self-bubble' : 'other-bubble']">
            <text>{{ msg.content }}</text>
          </view>
        </view>
      </view>
    </scroll-view>

    <!-- 输入框区域 -->
    <view class="input-bar">
      <input v-model="newMessage" class="input-field" placeholder="请输入消息..." @keydown.enter="sendMessage"></input>
      <button @tap="sendMessage" class="send-button">发送</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      newMessage: '',
      chatMessages: [],
      currentUserId: null,
      currentUserName: '未登录',
      selfAvatar: '',
      receiverAvatar: '', // 将通过 getOtherInfo 方法获取
      receiverId: null,
      receiverName: ''
    };
  },
  async onLoad(options) {
    console.log('Received parameters:', options);

    this.receiverId = options.userId; // 将传入的用户ID设置为对方用户ID
    this.receiverName = options.name;
    this.receiverAvatar = options.avatar; // 接收传入的头像参数

    await this.getUserSelf();
    this.getChatMessages();
  },
  methods: {
    async getChatMessages() {
      try {
        const res = await uniCloud.callFunction({
          name: 'getChatMessages',
          data: { userId1: this.currentUserId, userId2: this.receiverId }
        });
        if (res.result.code === 0) {
          this.chatMessages = res.result.data;
        } else {
          uni.showToast({
            title: res.result.msg || '加载消息失败',
            icon: 'none'
          });
        }
      } catch (error) {
        uni.showToast({
          title: '加载消息失败',
          icon: 'none'
        });
      }
    },
    async getUserSelf() {
      try {
        const res = await uniCloud.callFunction({
          name: 'getUserSelf'
        });
        if (res.result.code === 0) {
          const userInfo = res.result.data;
          this.currentUserId = userInfo.userId;
          this.currentUserName = userInfo.name;
          this.selfAvatar = userInfo.avatar;
        } else {
          uni.showToast({
            title: '加载用户信息失败',
            icon: 'none'
          });
        }
      } catch (error) {
        uni.showToast({
          title: '加载用户信息失败',
          icon: 'none'
        });
      }
    },
    async sendMessage() {
      if (this.newMessage.trim() !== '') {
        const message = {
          chatId: 'chat1', // 替换为实际的 chatId
          senderId: this.currentUserId,
          receiverId: this.receiverId,
          content: this.newMessage,
          timestamp: Date.now()
        };
        try {
          const res = await uniCloud.callFunction({
            name: 'sendMessage',
            data: message
          });
          if (res.result.code === 0) {
            this.chatMessages.push(message);
            this.newMessage = '';
            this.updateUserMessages(message);
          } else {
            uni.showToast({
              title: '发送消息失败',
              icon: 'none'
            });
          }
        } catch (error) {
          uni.showToast({
            title: '发送消息失败',
            icon: 'none'
          });
        }
      }
    },
    async updateUserMessages(message) {
      try {
        const updateRes = await uniCloud.callFunction({
          name: 'updateUserMessages',
          data: {
            userId: this.currentUserId,
            receiverId: this.receiverId,
            content: message.content,
            timestamp: message.timestamp
          }
        });
        if (updateRes.result.code !== 0) {
          uni.showToast({
            title: '更新用户消息失败',
            icon: 'none'
          });
        }
      } catch (error) {
        uni.showToast({
          title: '更新用户消息失败',
          icon: 'none'
        });
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
      if (data.chatId === 'chat1') { // 替换为实际的 chatId
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
  margin-bottom: 10px;
}

.self {
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* 本机用户消息靠右 */
}

.other {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 对方用户消息靠左 */
}

.message-content {
  display: flex;
  align-items: flex-end;
  width:300px;
}

.self-content {
  flex-direction: row-reverse; /* 本机用户消息和头像反向排列 */
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
  margin-bottom: 5px; /* 调整时间和消息之间的间距 */
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
  background: linear-gradient(to right, #4CAF50, #81C784); /* 渐变背景 */
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 25px; /* 圆角按钮 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 阴影效果 */
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s, transform 0.3s; /* 过渡效果 */
}

.send-button:active {
  background: linear-gradient(to right, #388E3C, #66BB6A); /* 点击时的背景变化 */
  transform: scale(0.95); /* 点击时的缩放效果 */
}
</style>