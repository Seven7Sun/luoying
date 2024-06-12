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
        <i class="fas fa-key"></i>
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
      <div class="menu-item" @click="languageSettings">
        <i class="fas fa-language"></i>
        显示语言
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
       <!-- <div class="form-group">
          <label for="avatar">头像URL:</label>
          <input type="text" id="avatar" v-model="editUser.avatar">
        </div> -->
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      userSelf: {},
      showEditProfileModalFlag: false,
      showChangePasswordModalFlag: false,
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
      showConfirmNewPassword: false
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
    showEditProfileModal() {
      this.editUser = { ...this.userSelf };
      this.showEditProfileModalFlag = true;
    },
    hideEditProfileModal() {
      this.showEditProfileModalFlag = false;
    },
    async updateUserProfile() {
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
  justify-content: space-between;
}
</style>