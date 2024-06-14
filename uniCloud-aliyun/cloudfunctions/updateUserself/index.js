'use strict';
const db = uniCloud.database();

// 云函数：updateUserself
exports.main = async (event, context) => {
  const db = uniCloud.database();
  const user = event.user; // 接受第一个函数返回的元组

  try {
    // 清空 userself 表
    await db.collection('userSelf').where({}).remove();

    // 插入新的元组到 userself 表
    const res = await db.collection('userSelf').add(user);
    return {
      success: true,
      data: res
    };
  } catch (error) {
    return {
      success: false,
      message: error.message
    };
  }
};

// exports.main = async (event, context) => {
//   const { userId} = event; // 根据传递的数据格式进行调整

//   try {
//     const collection = db.collection('userSelf'); // 确认你的数据库集合名称
//     const updateResult = await collection.doc(userId).update({
//       name
    
//     });

//     if (updateResult.updated === 1) {
//       return {
//         code: 0,
//         message: 'Profile updated successfully'
//       };
//     } else {
//       return {
//         code: 1,
//         message: 'Failed to update profile'
//       };
//     }
//   } catch (err) {
//     return {
//       code: 500,
//       message: `Error: ${err.message}`
//     };
//   }
// };