<template>
  <div class="my-page">
    <div class="user-info">
      <img class="avatar" :src="userSelf.avatar" alt="Avatar">
      <div class="user-details">
        <h2>{{ userSelf.name }}</h2>
        <p>用户ID： {{ userSelf.userId }}</p>
      </div>
    </div>

    <div class="menu">
      <div class="menu-item" @click="showEditProfileModal">
        <i class="fas fa-edit"></i>
        编辑资料
      </div>
      <div class="menu-item" @click="showChangePasswordModal">
        <i class="fas fa-key"></i>
        修改密码
      </div>
      <div class="menu-item" @click="manageCollections">
        <i class="fas fa-bookmark"></i>
        我的收藏
      </div>
      <div class="menu-item" @click="showContactUsModal">
        <i class="fas fa-language"></i>
        联系我们
      </div>
      <div class="menu-item" @click="logout">
        <i class="fas fa-sign-out-alt"></i>
        退出登录
      </div>
    </div>

    <!-- 悬浮编辑个人资料页 -->
    <div v-if="showEditProfileModalFlag" class="modal-overlay">
      <div class="modal">
        <h3>修改个人资料</h3>
        <div class="form-group">
          <label for="userId">用户ID:</label>
          <input type="text" id="userId" v-model="editUser.userId" disabled>
        </div>
        <div class="form-group">
          <label for="name">用户名:</label>
          <input type="text" id="name" v-model="editUser.name">
        </div>
        <div class="form-group">
          <label for="avatar">头像:</label>
          <button @tap="chooseImage" class="updatePhoto">+</button>
        <!--  <image v-if="imageSrc" :src="imageSrc" class="uploaded-image"></image> -->
        </div>
        <div class="actions">
          <button @click="updateUserProfile">保存</button>
          <button @click="hideEditProfileModal">取消</button>
        </div>
      </div>
    </div>

    <!-- 悬浮修改密码页 -->
    <div v-if="showChangePasswordModalFlag" class="modal-overlay">
      <div class="modal">
        <h3>修改密码</h3>
        <div class="form-group">
          <label for="currentPassword">当前密码:</label>
          <div class="password-input">
            <input :type="currentPasswordType" id="currentPassword" v-model="currentPassword">
            <i :class="{'fas fa-eye': !showCurrentPassword, 'fas fa-eye-slash': showCurrentPassword}" @click="toggleCurrentPassword"></i>
          </div>
        </div>
        <div class="form-group">
          <label for="newPassword">新密码:</label>
          <div class="password-input">
            <input :type="newPasswordType" id="newPassword" v-model="newPassword">
            <i :class="{'fas fa-eye': !showNewPassword, 'fas fa-eye-slash': showNewPassword}" @click="toggleNewPassword"></i>
          </div>
        </div>
        <div class="form-group">
          <label for="confirmNewPassword">确认新密码:</label>
          <div class="password-input">
            <input :type="confirmNewPasswordType" id="confirmNewPassword" v-model="confirmNewPassword">
            <i :class="{'fas fa-eye': !showConfirmNewPassword, 'fas fa-eye-slash': showConfirmNewPassword}" @click="toggleConfirmNewPassword"></i>
          </div>
        </div>
        <div class="actions">
          <button @click="changePassword">保存</button>
          <button @click="hideChangePasswordModal">取消</button>
        </div>
      </div>
    </div>

    <!-- 联系我们悬浮页 -->
    <div v-if="showContactUsModalFlag" class="modal-overlay">
      <div class="modal">
        <h3>联系我们</h3>
        <p>如果您有任何问题，请联系我们：</p>
        <p>电子邮件: support@example.com</p>
        <p>电话: 123-456-7890</p>
        <p>地址: 武汉市洪山区珞喻路123号武汉大学</p>
        
          <button @click="hideContactUsModal">关闭</button>
        
      </div>
    </div>
	
	<!-- 退出登录确认弹出框 -->
	    <div v-if="showLogoutConfirmation" class="modal-overlay">
	      <div class="modal">
	        <h3>确定退出登录？</h3>
	        <div class="actions">
	          <button @click="logoutConfirmed">确定</button>
	          <button @click="cancelLogout">取消</button>
	        </div>
	      </div>
	    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userSelf: {},
      showEditProfileModalFlag: false,
      showChangePasswordModalFlag: false,
      showContactUsModalFlag: false,
	  showLogoutConfirmation: false,
      editUser: {
        userId: '',
        name: '',
        avatar: ''
      },
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
      showCurrentPassword: false,
      showNewPassword: false,
      showConfirmNewPassword: false,
      imageSrc: ''
    };
  },
  computed: {
    currentPasswordType() {
      return this.showCurrentPassword ? 'text' : 'password';
    },
    newPasswordType() {
      return this.showNewPassword ? 'text' : 'password';
    },
    confirmNewPasswordType() {
      return this.showConfirmNewPassword ? 'text' : 'password';
    }
  },
  mounted() {
    this.getUserSelf();
  },
  methods: {
	  // 打开退出登录确认弹出框
	      logout() {
	        this.showLogoutConfirmation = true;
	      },
	      // 用户确认退出登录
	      async logoutConfirmed() {
	        try {
	          // 执行退出登录操作（示例中假设有一个名为 logout 的方法）
	          const result = await this.logout();
	          // 如果退出成功，你可以在此处理一些额外的逻辑，例如重定向到登录页面
	          // 成功退出登录后，隐藏弹出框
	          this.showLogoutConfirmation = false;
	          // 返回退出成功的信息
	          return result;
	        } catch (error) {
	          console.error('退出登录失败：', error);
	          // 处理退出登录失败的情况
	          // 例如显示错误信息，或者重新尝试退出登录
	          return { success: false, message: '退出登录失败' };
	        }
	      },
	      // 取消退出登录
	      cancelLogout() {
	        // 用户取消退出登录操作，隐藏弹出框
	        this.showLogoutConfirmation = false;
	      },
    async getUserSelf() {
      try {
        const res = await uniCloud.callFunction({
          name: 'getUserSelf'
        });

        if (res.result.code === 0 && res.result.data.length > 0) {
          this.userSelf = res.result.data[0];
        } else {
          uni.showToast({
            title: 'Failed to load user information',
            icon: 'none'
          });
        }
      } catch (err) {
        uni.showToast({
          title: `Error: ${err.message}`,
          icon: 'none'
        });
      }
    },
    chooseImage() {
      uni.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album'],
        success: (res) => {
          this.imageSrc = res.tempFilePaths[0];
          this.uploadImage(res.tempFilePaths[0]);
        },
        fail: (err) => {
          console.error("选择图片失败：", err);
        }
      });
    },
    showEditProfileModal() {
      this.editUser = { ...this.userSelf };
      this.showEditProfileModalFlag = true;
      this.imageSrc = this.editUser.avatar;
    },
    hideEditProfileModal() {
      this.showEditProfileModalFlag = false;
      this.imageSrc = '';
    },
    async updateUserProfile() {
      this.editUser.avatar = this.imageSrc;
      try {
        const res = await uniCloud.callFunction({
          name: 'updateUserProfile',
          data: { ...this.editUser }
        });
        if (res.result.code === 0) {
          uni.showToast({
            title: 'Profile updated successfully',
            icon: 'success'
          });
          await this.getUserSelf();
          this.hideEditProfileModal();
        } else {
          uni.showToast({
            title: 'Failed to update profile',
            icon: 'none'
          });
        }
      } catch (err) {
        uni.showToast({
          title: `Error: ${err.message}`,
          icon: 'none'
        });
      }
    },
    showChangePasswordModal() {
      this.showChangePasswordModalFlag = true;
    },
    hideChangePasswordModal() {
      this.showChangePasswordModalFlag = false;
      this.currentPassword = '';
      this.newPassword = '';
      this.confirmNewPassword = '';
    },
    toggleCurrentPassword() {
      this.showCurrentPassword = !this.showCurrentPassword;
    },
    toggleNewPassword() {
      this.showNewPassword = !this.showNewPassword;
    },
    toggleConfirmNewPassword() {
      this.showConfirmNewPassword = !this.showConfirmNewPassword;
    },
    async changePassword() {
      if (this.newPassword !== this.confirmNewPassword) {
        uni.showToast({
          title: 'Passwords do not match',
          icon: 'none'
        });
        return;
      }

      try {
        const res = await uniCloud.callFunction({
          name: 'changePassword',
          data: {
            currentPassword: this.currentPassword,
            newPassword: this.newPassword
          }
        });

        if (res.result.code === 0) {
          uni.showToast({
            title: 'Password changed successfully',
            icon: 'success'
          });
          this.userSelf.password = this.newPassword;
          this.hideChangePasswordModal();
        } else {
          uni.showToast({
            title: 'Failed to change password',
            icon: 'none'
          });
        }
      } catch (err) {
        uni.showToast({
          title: `Error: ${err.message}`,
          icon: 'none'
        });
      }
    },
    manageCollections() {
      // 导航到我的收藏页面
    },
    showContactUsModal() {
      this.showContactUsModalFlag = true;
    },
    hideContactUsModal() {
      this.showContactUsModalFlag = false;
    },
    languageSettings() {
      // 导航到语言设置页面
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

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 400px;
  text-align: center;
}
.modal p{
	margin: 5px;
}
.modal button{
	width:200px;
	
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  font-size: 18px;
  height: 10%;
  border: 1px solid #ccc;
  border-radius: 5px; /* 添加边框 */
}

.actions {
  display: flex;
  width: 300px;
  justify-content: space-between;
}
.actions button {
  width: 140px; /* 调整按钮的宽度 */
  padding: 5px; /* 可选：增加按钮的内边距 */
  
}
.updatePhoto{
	height:150px;
	width:220px;
	display: flex;
	 justify-content: center; /* 水平居中 */
	 align-items: center; /* 垂直居中 */
}
/* 修改按钮中的 "+" 符号样式 */
.updatePhoto::after {
  content: "+"; /* 设置伪元素内容为 "+" */
 
  font-size: 120px; /* 设置字体大小 */
}

</style>