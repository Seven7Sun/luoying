   <template>
     <div class="my-page">
       <div class="user-info">
         <img class="avatar" :src="userSelf.avatar" alt="Avatar">
         <div class="user-details">
           <h2>{{ userSelf.name }}</h2>
		
           <p>用户id： {{ userSelf.userId }}</p>
           
         </div>
       </div>
       
       <div class="menu">
		   <div class="menu-item" @tap="showEditProfileModal">
		     
		     编辑资料
		   </div>
         <div class="menu-item" @click="changePassword">
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
     </div>
	 
	 <!-- 悬浮编辑个人资料页 -->
	     <div v-if="showModal" class="modal-overlay">
	       <div class="modal">
	         <h3>修改个人资料</h3>
	         <div class="form-group">
	           <label for="userId">用户ID:</label>
	           <input type="text" id="userId" v-model="editUser.userId" disabled>
	         </div>
	         <div class="form-group">
	           <label for="name">姓名:</label>
	           <input type="text" id="name" v-model="editUser.name">
	         </div>
	         <div class="form-group">
	           <label for="avatar">头像URL:</label>
	           <input type="text" id="avatar" v-model="editUser.avatar">
	         </div>
	         <div class="actions">
	           <button @click="updateUser">保存</button>
	           <button @click="hideEditProfileModal">取消</button>
	         </div>
	       </div>
	     </div>
   </template>

<script>
export default {
  data() {
    return {
      userSelf:{}
    };
  },
  onLoad() {
	this.getUserSelf(); 
  },
  methods: {
	
	async getUserSelf() {
	     try {
	       const res = await uniCloud.callFunction({
	         name: 'getUserSelf'
	       });
	       if (res.result.code === 0) {
	         this.userSelf = res.result.data[0];
	     
			 console.log('User name:', this.userSelf.name); // 调试日志
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
	      this.editUser = { ...this.userSelf }; // 克隆当前用户信息
	      this.showModal = true;
	    },
	hideEditProfileModal() {
	      this.showModal = false;
	    },
	async updateUser() {
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
	          await this.getUserSelf(); // 重新获取用户信息
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
    editProfile() {
      // 导航到编辑个人资料页面
    },
    changePassword() {
      // 导航到修改密码页面
    },
    
    manageCollections() {
      // 导航到我的收藏页面
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