'use strict';

const db = uniCloud.database();

exports.main = async (event, context) => {
  const collection = db.collection('messages');
  const messages = [
    {
      userId: "user1",
      name: "张漫",
      avatar: "https://mp-b57cf61e-6398-4ae7-93c0-4db8e765ec2d.cdn.bspapp.com/photo/头像1.jpg",
      content: "你好，这是最后一条消息",
      timestamp: 1717988594674
    },
    {

      userId: "user2",
      name: "张皓源",
      avatar: "https://mp-b57cf61e-6398-4ae7-93c0-4db8e765ec2d.cdn.bspapp.com/photo/zhy.jpg",
      content: "我们下周见",
      timestamp: 1717988593600
    },
    {

      userId: "user3",
      name: "周沫",
      avatar: "https://mp-b57cf61e-6398-4ae7-93c0-4db8e765ec2d.cdn.bspapp.com/photo/头像3.jpg",
      content: "请尽快回复",
      timestamp: 1717013400000
    },
	{
	  userId: "user4",
	  name: "孙东方",
	  avatar: "https://mp-b57cf61e-6398-4ae7-93c0-4db8e765ec2d.cdn.bspapp.com/photo/sdf.jpg",
	  content: "请尽快回复",
	  timestamp: 1625239763000
	},
	
  ];

 for (const message of messages) {
     const existingMessage = await collection.where({
       userId: message.userId
     }).get();
     if (existingMessage.data.length === 0) {
       await collection.add(message);
     } else {
       // 移除更新数据中的_id字段
       delete message._id;
       await collection.doc(existingMessage.data[0]._id).update(message);
     }
   }
 
   return {
     code: 0,
     message: 'Messages initialized successfully'
   };
};
