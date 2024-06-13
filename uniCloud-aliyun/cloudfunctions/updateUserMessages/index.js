'use strict';

const db = uniCloud.database();

exports.main = async (event, context) => {
  const { userId, receiverId, content, timestamp } = event;

  try {
    // 更新发送者的 messages
    await db.collection('messages').where({ userId }).update({
      content,
      timestamp
    });

    // 更新接收者的 messages
    await db.collection('messages').where({ userId: receiverId }).update({
      content,
      timestamp
    });

    return {
      code: 0,
      message: '用户消息更新成功'
    };
  } catch (error) {
    return {
      code: 1,
      message: '用户消息更新失败',
      error: error.message
    };
  }
};