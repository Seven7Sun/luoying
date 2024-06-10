// 云函数入口文件
const cloud = require('wx-server-sdk');
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV // 默认当前云环境
});

const db = cloud.database();
const chatMessages = db.collection('chatMessages');

// 云函数入口函数
exports.main = async (event, context) => {
  // 初始化数据代码
  const sampleMessages = [
    {
      chatId: "chat1",
      senderId: "user1",
      receiverId: "user2",
      content: "你好，这是第一条消息",
      timestamp: Date.now(),
      read: false,
      type: "text",
      attachments: []
    },
    {
      chatId: "chat1",
      senderId: "user2",
      receiverId: "user1",
      content: "你好，这是第二条消息",
      timestamp: Date.now(),
      read: false,
      type: "text",
      attachments: []
    }
  ];

  for (const message of sampleMessages) {
    await chatMessages.add(message);
  }

  return {
    code: 0,
    message: "初始化聊天消息已完成"
  };
};