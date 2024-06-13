'use strict';

const db = uniCloud.database();

exports.main = async (event, context) => {
  const { chatId, senderId, receiverId, content, timestamp } = event;

  // 添加消息到 chatMessages 集合
  await db.collection('chatMessages').add({
    chatId,
    senderId,
    receiverId,
    content,
    timestamp,
    read: false,
    type: 'text',
    attachments: []
  });

  // 更新 senderId 的 messages 集合
  await db.collection('messages').where({ userId: senderId }).update({
    content,
    timestamp
  });

  // 更新 receiverId 的 messages 集合
  await db.collection('messages').where({ userId: receiverId }).update({
    content,
    timestamp
  });

  return {
    code: 0,
    message: '消息发送成功'
  };
};