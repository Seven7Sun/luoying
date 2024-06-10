// 云函数入口文件
const cloud = require('wx-server-sdk');
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV // 默认当前云环境
});

const db = cloud.database();
const chatMessages = db.collection('chatMessages');

// 云函数入口函数
exports.main = async (event, context) => {
  const { chatId, senderId, receiverId, content, timestamp, read, type, attachments } = event;

  try {
    const result = await chatMessages.add({
      data: {
        chatId,
        senderId,
        receiverId,
        content,
        timestamp,
        read,
        type,
        attachments
      }
    });
    return {
      code: 0,
      id: result._id,
      message: '消息发送成功'
    };
  } catch (err) {
    return {
      code: 1,
      message: '消息发送失败',
      error: err
    };
  }
};