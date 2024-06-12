// 云函数：sendMessage
const db = uniCloud.database();
exports.main = async (event, context) => {
  const { chatId, senderId, receiverId, content, timestamp } = event;
  const collection = db.collection('chatMessages');
  const res = await collection.add({
    chatId,
    senderId,
    receiverId,
    content,
    timestamp,
    read: false,
    type: 'text',
    attachments: []
  });
  
  if (res.id) {
    return {
      code: 0,
      msg: 'Message sent successfully'
    };
  } else {
    return {
      code: 1,
      msg: 'Failed to send message'
    };
  }
};
