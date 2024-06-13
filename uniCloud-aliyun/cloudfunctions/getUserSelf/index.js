'use strict';

const db = uniCloud.database();

exports.main = async (event, context) => {
  const collection = db.collection('userSelf');
  const result = await collection.get();

  if (result.data.length > 0) {
    const user = result.data[0];
    return {
      code: 0,
      data: {
        _id: user._id,
        userId: user.userId,
        name: user.name,
        avatar: user.avatar,
        createdAt: user.createdAt
      }
    };
  } else {
    return {
      code: 1,
      message: "User not found"
    };
  }
};