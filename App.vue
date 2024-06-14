 <script>
 	export default {
 		onLaunch: function() {
 			console.log('App Launch')
 			// Initialize globalData
 			this.globalData = {
 				userID: null
 			};
 		},
 		onShow: function() {
 			console.log('App Show')
 		},
 		onHide: function() {
 			console.log('App Hide')
 		},
 		globalData: {
 			userID: null
 		}
 	}
 </script>

 <style>
 	/*每个页面公共css */
 </style>