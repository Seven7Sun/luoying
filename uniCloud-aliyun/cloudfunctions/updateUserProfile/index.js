'use strict';
const db = uniCloud.database();
const dbCmd = db.command;

exports.main = async (event, context) => {
  const { userId, name} = event; // 根据传递的数据格式进行调整

  try {
    const collection = db.collection('userSelf'); // 确认你的数据库集合名称
    const updateResult = await collection.doc(userId).update({
      name
    
    });

    if (updateResult.updated === 1) {
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
      code: 500,
      message: `Error: ${err.message}`
    };
  }
};