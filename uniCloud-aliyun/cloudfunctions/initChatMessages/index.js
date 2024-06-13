'use strict';

const db = uniCloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
	const chatMessages = db.collection('chatMessages');
  // 初始化数据代码
  const sampleMessages = [
    {
      senderId: "user1",
      receiverId: "user2",
      content: "你好，这是第一条消息",
      timestamp: Date.now(),
      read: false,
      type: "text",
     
    },
    {
      senderId: "user2",
      receiverId: "user1",
      content: "我们下周见",
      timestamp: Date.now(),
      read: false,
      type: "text",
      attachments: []
    },
    {
      senderId: "user1",
      receiverId: "user3",
      content: "请尽快回复",
      timestamp: Date.now(),
      read: false,
      type: "text",
      attachments: []
    },
    {
      senderId: "user1",
      receiverId: "user4",
      content: "请尽快回复",
      timestamp: Date.now(),
      read: false,
      type: "text",
      attachments: []
    }
  ];

  try {
    for (const message of sampleMessages) {
      // 检查是否存在相同的记录
      const existingMessage = await chatMessages.where({
        senderId: message.senderId,
        receiverId: message.receiverId,
        content: message.content
      }).get();

      if (existingMessage.data.length === 0) {
        // 如果不存在，则插入新记录
        
		await chatMessages.add(message);
      } else {
        // 如果存在，则更新记录
        const messageId = existingMessage.data[0]._id;
        delete message._id; // 移除更新数据中的_id字段
		await chatMessages.doc(messageId).update(message);
      }
    }

    return {
      code: 0,
      message: "初始化聊天消息已完成"
    };
  } catch (error) {
    console.error('Error initializing chat messages:', error);
    return {
      code: 500,
      message: '初始化聊天消息失败',
      error: error.message
    };
  }
};