'use strict';


 // 云函数：getUserById
 exports.main = async (event, context) => {
   const db = uniCloud.database();
   const userId = `user${event.A}`; // 拼接 userId
 
   try {
     // 在 users 表中查找对应的元组
     const res = await db.collection('users').where({ userId }).get();
     if (res.data.length > 0) {
       return {
         success: true,
         data: res.data[0] // 返回第一个匹配的元组
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

// exports.main = async (event, context) => {
//   const { userId } = event;

//   try {
//     const userRes = await db.collection('users').doc(userId).get();
//     if (userRes.data.length === 0) {
//       return {
//         code: 1,
//         message: '用户不存在'
//       };
//     }

//     const userInfo = userRes.data[0];
//     return {
//       code: 0,
//       data: {
//         userId: userInfo._id,
//         name: userInfo.name,
//         avatar: userInfo.avatar
//       }
//     };
//   } catch (error) {
//     return {
//       code: 500,
//       message: '服务器错误',
//       error
//     };
//   }
// };