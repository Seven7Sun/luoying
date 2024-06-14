/// 云函数文件路径：cloudfunctions/updateUerSelf/index.js
exports.main = async (event, context) => {
  const db = uniCloud.database();
  const user = event.user;

  console.log('Received user data:', user);

  try {
    // 1. 查询所有数据
    const allUserRes = await db.collection('userSelf').get();
    console.log('All user data fetched:', allUserRes);

    // 2. 遍历所有数据，删除与传入的 userId 不匹配的记录
    const deletePromises = allUserRes.data
      .filter(item => item.userId !== user.userId)
      .map(item => db.collection('userSelf').doc(item._id).remove());

    const deleteRes = await Promise.all(deletePromises);
    console.log('Non-matching user data deleted:', deleteRes);

    // 3. 添加新数据
    const addUserRes = await db.collection('userSelf').add(user);
    console.log('New user data added:', addUserRes);

    return {
      success: true,
      data: addUserRes
    };
  } catch (error) {
    console.error('Error occurred:', error.message);
    return {
      success: false,
      message: error.message
    };
  }
};
// 'use strict';

// const db = uniCloud.database();

// exports.main = async (event, context) => {

//   const user = event.user;

//   try {
//     const res = await db.collection('userSelf').add(user);
//     return {
//       success: true,
//       data: res
//     };
//   } catch (error) {
//     return {
//       success: false,
//       message: error.message
//     };
//   }
// };