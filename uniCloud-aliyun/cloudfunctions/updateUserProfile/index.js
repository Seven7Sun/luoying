'use strict';

const db = uniCloud.database();

exports.main = async (event, context) => {
  const { userId, name, avatar } = event;

  // 假设userSelf集合中以userId作为条件更新用户信息
  try {
    const res = await db.collection('userSelf').doc(userId).update({
      name,
      avatar
    });

    if (res.updated === 1) {
      return {
        code: 0,
        message: 'Profile updated successfully'
      };
    } else {
      return {
        code: 1,
        message: 'Failed to update profile'
      };
    }
  } catch (err) {
    return {
      code: 1,
      message: `Error: ${err.message}`
    };
  }
};