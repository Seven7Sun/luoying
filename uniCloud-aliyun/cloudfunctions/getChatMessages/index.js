// 云函数入口文件
const cloud = require('wx-server-sdk');
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV // 默认当前云环境
});

const db = cloud.database();
const chatMessages = db.collection('chatMessages');

// 云函数入口函数
exports.main = async (event, context) => {
  const { chatId } = event;

  try {
    const response = await chatMessages.where({
      chatId: chatId
    }).orderBy('timestamp', 'asc').get();
    return {
      code: 0,
      data: response.data
    };
  } catch (err) {
    return {
      code: 1,
      message: '获取聊天记录失败',
      error: err
    };
  }
};