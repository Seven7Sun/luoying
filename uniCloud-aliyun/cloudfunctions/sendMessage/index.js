'use strict';

const db = uniCloud.database();

exports.main = async (event, context) => {
  const { chatId, senderId, receiverId, content, timestamp } = event;

  try {
    // 添加消息到 chatMessages 集合
    await db.collection('chatMessages').add({
      chatId,
      senderId,
      receiverId,
      content,
      timestamp
    });

    return {
      code: 0,
      message: '消息发送成功'
    };
  } catch (error) {
    return {
      code: 1,
      message: '消息发送失败',
      error: error.message
    };
  }
};