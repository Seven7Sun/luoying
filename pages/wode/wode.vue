<template>
  <div class="my-page">

    <div class="user-info">
      <img class="avatar" :src="userInfo.avatar" alt="Avatar">
      <div class="user-details">
        <h2>{{ userInfo.username }}</h2>
        <p>{{ userInfo.email }}</p>
        <button @click="editProfile">编辑个人资料</button>
      </div>
    </div>
    
    <div class="menu">
      <div class="menu-item" @click="changePassword">
        <i class="fas fa-key"></i>
        修改密码
      </div>
      <div class="menu-item" @click="privacySettings">
        <i class="fas fa-user-lock"></i>
        隐私设置
      </div>
      <div class="menu-item" @click="notificationSettings">
        <i class="fas fa-bell"></i>
        通知设置
      </div>
      <div class="menu-item" @click="manageCollections">
        <i class="fas fa-bookmark"></i>
        我的收藏
      </div>
      <div class="menu-item" @click="toggleEyeComfortMode">
        <i class="fas fa-eye"></i>
        护眼模式
      </div>
      <div class="menu-item" @click="languageSettings">
        <i class="fas fa-language"></i>
        显示语言
      </div>
      <div class="menu-item" @click="logout">
        <i class="fas fa-sign-out-alt"></i>
        退出登录
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        username: "John Doe",
        avatar: "https://example.com/avatar.jpg",
        email: "johndoe@example.com"
      }
    };
  },
  methods: {
    editProfile() {
      // 导航到编辑个人资料页面
    },
    changePassword() {
      // 导航到修改密码页面
    },
    privacySettings() {
      // 导航到隐私设置页面
    },
    notificationSettings() {
      // 导航到通知设置页面
    },
    manageCollections() {
      // 导航到我的收藏页面
    },
    toggleEyeComfortMode() {
      // 切换护眼模式
    },
    languageSettings() {
      // 导航到显示语言设置页面
    },
    logout() {
      // 执行退出登录操作
    }
  }
};
</script>

<style scoped>
.my-page {
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
}

.header h1 {
  margin: 0;
}

.user-info {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 20px;
}

.user-details h2 {
  margin: 0;
}

.menu {
  display: flex;
  flex-direction: column;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.menu-item i {
  margin-right: 10px;
}

.menu-item:hover {
  background-color: #e0e0e0;
}
</style>