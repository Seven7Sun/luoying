'use strict';

const db = uniCloud.database();

exports.main = async (event, context) => {
  const collection = db.collection('messages');
  
  // 按 timestamp 字段排序，按降序排列（最新消息在前）
  const result = await collection.orderBy('timestamp', 'desc').get();
  
  // 返回原始数据
  return {
    code: 0,
    data: result.data.map(message => ({
      _id: message._id,
      userId: message.userId,
      name: message.name,  // 假设你有用户名称
      avatar: message.avatar,  // 假设你有用户头像URL
      content: message.content,
      timestamp: message.timestamp  // 保留原始时间戳
    }))
  };
};
