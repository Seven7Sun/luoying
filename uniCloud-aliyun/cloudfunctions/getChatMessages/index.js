const db = uniCloud.database();

exports.main = async (event, context) => {
  const { userId1, userId2 } = event;
  const collection = db.collection('chatMessages');

  // 查询两个用户之间的所有聊天记录
  const res = await collection.where({
    $or: [
      { senderId: userId1, receiverId: userId2 },
      { senderId: userId2, receiverId: userId1 }
    ]
  }).orderBy('timestamp', 'asc').get();

  if (res.affectedDocs > 0) {
    return {
      code: 0,
      data: res.data
    };
  } else {
    return {
      code: 1,
      msg: 'No messages found'
    };
  }
};
