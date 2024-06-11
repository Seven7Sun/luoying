
  ;(function(){
  let u=void 0,isReady=false,onReadyCallbacks=[],isServiceReady=false,onServiceReadyCallbacks=[];
  const __uniConfig = {"pages":[],"globalStyle":{"backgroundColor":"#ffffff","navigationBar":{"backgroundColor":"#F8F8F8","titleText":"uni-app","type":"default","titleColor":"#000000"},"isNVue":false},"nvue":{"compiler":"uni-app","styleCompiler":"uni-app","flex-direction":"column"},"renderer":"auto","appname":"luoying","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":true},"compilerVersion":"4.15","entryPagePath":"pages/index/index","entryPageQuery":"","realEntryPagePath":"","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000},"tabBar":{"position":"bottom","color":"#7A7E83","selectedColor":"#7A7E83","borderStyle":"white","blurEffect":"none","fontSize":"10px","iconWidth":"24px","spacing":"3px","height":"50px","backgroundColor":"#ffffff","list":[{"pagePath":"pages/shouye/shouye","text":"首页","iconPath":"/static/tabbar/shouye.png","selectedIconPath":"/static/tabbar/shouyeSelected.png"},{"pagePath":"pages/faxian/faxian","text":"论坛","iconPath":"/static/tabbar/faxian.png","selectedIconPath":"/static/tabbar/faxianSelected.png"},{"pagePath":"pages/fabu/fabu","text":"发布","iconPath":"/static/tabbar/plus.png"},{"pagePath":"pages/xiaoxi/xiaoxi","text":"消息","iconPath":"/static/tabbar/xiaoxi.png","selectedIconPath":"/static/tabbar/xiaoxiSelected.png"},{"pagePath":"pages/wode/wode","text":"我的","iconPath":"/static/tabbar/wode.png","selectedIconPath":"/static/tabbar/wodeSelected.png"}],"selectedIndex":0,"shown":true},"locales":{},"darkmode":false,"themeConfig":{}};
  const __uniRoutes = [{"path":"pages/index/index","meta":{"isQuit":true,"isEntry":true,"navigationBar":{"titleText":"登录","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/shouye/shouye","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":0,"navigationBar":{"titleText":"首页","type":"default"},"isNVue":false}},{"path":"pages/faxian/faxian","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":1,"navigationBar":{"titleText":"珞樱论坛","type":"default"},"isNVue":false}},{"path":"pages/denglu/denglu","meta":{"navigationBar":{"titleText":"","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/webview/webview","meta":{"navigationBar":{"titleText":"智慧珞珈验证","type":"default"},"isNVue":false}},{"path":"pages/xiaoxi/xiaoxi","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":3,"navigationBar":{"titleText":"消息","type":"default"},"isNVue":false}},{"path":"pages/wode/wode","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":4,"navigationBar":{"titleText":"个人中心","type":"default"},"isNVue":false}},{"path":"pages/fabu/fabu","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":2,"navigationBar":{"titleText":"发布你的内容吧！","type":"default"},"isNVue":false}},{"path":"pages/chat/chat","meta":{"navigationBar":{"titleText":"聊天页面","type":"default"},"isNVue":false}}].map(uniRoute=>(uniRoute.meta.route=uniRoute.path,__uniConfig.pages.push(uniRoute.path),uniRoute.path='/'+uniRoute.path,uniRoute));
  __uniConfig.styles=[];//styles
  __uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  __uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:16})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:u,window:u,document:u,frames:u,self:u,location:u,navigator:u,localStorage:u,history:u,Caches:u,screen:u,alert:u,confirm:u,prompt:u,fetch:u,XMLHttpRequest:u,WebSocket:u,webkit:u,print:u}}}}); 
  })();
  