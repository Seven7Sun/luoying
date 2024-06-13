const db = uniCloud.database();

exports.main = async (event, context) => {
  const { userId1, userId2 } = event;
  const collection = db.collection('chatMessages');

  console.log('Received parameters:', userId1, userId2);

  try {
    // 查询两个用户之间的所有聊天记录
    const res = await collection.where({
      $or: [
        { senderId: userId1, receiverId: userId2 },
        { senderId: userId2, receiverId: userId1 }
      ]
    }).orderBy('timestamp', 'asc').get();

    console.log('Database query result:', res);

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
  } catch (error) {
    console.error('Database query error:', error);
    return {
      code: 500,
      msg: 'Internal Server Error',
      error: error.message
    };
  }
};