'use strict';

const db = uniCloud.database();

exports.main = async (event, context) => {
  const { userId } = event;

  try {
    const userRes = await db.collection('users').doc(userId).get();
    if (userRes.data.length === 0) {
      return {
        code: 1,
        message: '用户不存在'
      };
    }

    const userInfo = userRes.data[0];
    return {
      code: 0,
      data: {
        userId: userInfo._id,
        name: userInfo.name,
        avatar: userInfo.avatar
      }
    };
  } catch (error) {
    return {
      code: 500,
      message: '服务器错误',
      error
    };
  }
};