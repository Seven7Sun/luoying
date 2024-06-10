'use strict';

const db = uniCloud.database();

exports.main = async (event, context) => {
  const collection = db.collection('users');
  const users = [
    {
      _id: "1",
      userId: "12345",
      name: "张漫",
      avatar: "https://mp-b57cf61e-6398-4ae7-93c0-4db8e765ec2d.cdn.bspapp.com/photo/头像1.jpg",
      createdAt: Date.now()
    },
    {
      _id: "2",
      userId: "67890",
      name: "张皓源",
      avatar: "https://mp-b57cf61e-6398-4ae7-93c0-4db8e765ec2d.cdn.bspapp.com/photo/zhy.jpg",
      createdAt: Date.now()
    },
    {
      _id: "3",
      userId: "54321",
      name: "周沫",
      avatar: "https://mp-b57cf61e-6398-4ae7-93c0-4db8e765ec2d.cdn.bspapp.com/photo/头像3.jpg",
      createdAt: Date.now()
    },
    {
      _id: "4",
      userId: "23464",
      name: "孙东方",
      avatar: "https://mp-b57cf61e-6398-4ae7-93c0-4db8e765ec2d.cdn.bspapp.com/photo/sdf.jpg",
      createdAt: Date.now()
    }
  ];

  for (const user of users) {
    const existingUser = await collection.where({
      userId: user.userId
    }).get();
    if (existingUser.data.length === 0) {
      await collection.add(user);
    } else {
      // 如果用户存在，不更新 _id
      delete user._id;
      await collection.doc(existingUser.data[0]._id).update(user);
    }
  }

  return {
    code: 0,
    message: 'Users initialized successfully'
  };
};
