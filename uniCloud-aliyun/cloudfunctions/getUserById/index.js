'use strict';

const db = uniCloud.database();

exports.main  = async (event, context) => {

  const userId = `user${event.A}`; // 确保 userId 是正确的

  try {
    const res = await db.collection('users').where({ userId }).get();
    if (res.data.length > 0) {
      return {
        success: true,
        data: res.data[0]
      };
    } else {
      return {
        success: false,
        message: 'User not found'
      };
    }
  } catch (error) {
    return {
      success: false,
      message: error.message
    };
  }
};