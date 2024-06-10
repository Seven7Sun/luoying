'use strict';

const db = uniCloud.database();

exports.main = async (event, context) => {
  const collection = db.collection('userSelf');
  
 // 按 timestamp 字段排序，按降序排列（最新消息在前）
  const result = await collection.orderBy('timestamp', 'desc').get();
  
  // 返回原始数据
  return {
    code: 0,
    data: result.data.map(user => ({
    _id: user._id,
    userId: user.userId,
    name: user.name,  
    avatar: user.avatar,  
    createdAt: user.createdAt  // 保留原始时间戳
    }))
  };
};