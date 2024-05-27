if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$7 = {
    data() {
      return {
        title: "Hello",
        search: ""
      };
    },
    onLoad() {
      uni.loadFontFace({
        global: true,
        // 是否全局生效
        family: "siyuanheiti",
        // 定义的字体名称
        source: 'url("../../static/font/SourceHanSansSC-Normal.ttf")'
        // 字体资源的地址。建议格式为 TTF 和 WOFF，WOFF2 在低版本的iOS上会不兼容。
        // success() {
        // 	__f__('log','at pages/index/index.vue:25','成功的回调函数')
        // },
        // fail() {
        // 	__f__('log','at pages/index/index.vue:28','失败的回调函数')
        // },
        // complete() {
        // 	__f__('log','at pages/index/index.vue:31','接口调用结束的回调函数（调用成功、失败都会执行）')
        // }
      });
    },
    methods: {
      tiaozhuan() {
        uni.redirectTo({
          url: "/pages/denglu/denglu"
        });
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("image", {
        src: "/static/index/sakuraPicture.png",
        mode: "heightFix"
      }),
      vue.createElementVNode("image", {
        src: "/static/index/schoolIcon.png",
        mode: "heightFix",
        class: "school"
      }),
      vue.createElementVNode("text", { class: "indexText" }, "珞珈山上，樱花树下"),
      vue.createElementVNode("image", {
        src: "/static/index/navigateTo.png",
        mode: "heightFix",
        class: "navigateTo",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.tiaozhuan && $options.tiaozhuan(...args))
      })
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__file", "D:/Uniapp/luoying/pages/index/index.vue"]]);
  const _sfc_main$6 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "title" }, " 首页 ")
    ]);
  }
  const PagesShouyeShouye = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__file", "D:/Uniapp/luoying/pages/shouye/shouye.vue"]]);
  const _sfc_main$5 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesFaxianFaxian = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "D:/Uniapp/luoying/pages/faxian/faxian.vue"]]);
  const _sfc_main$4 = {
    data() {
      return {
        account: "",
        password: "",
        whetherLuoJia: false
      };
    },
    onLoad: function(options) {
      if (options.whetherLogin === "true") {
        this.whetherLuoJia = true;
      }
    },
    methods: {
      toshouye() {
        uni.switchTab({
          url: "/pages/shouye/shouye"
        });
      },
      toLuoJia() {
        if (!this.whetherLuoJia) {
          uni.navigateTo({
            url: "/pages/webview/webview"
          });
        }
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("view", { class: "title" }, " 欢迎来到 珞樱 "),
      vue.createElementVNode("view", {
        class: "verifyBox",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.toLuoJia && $options.toLuoJia(...args))
      }, [
        vue.createElementVNode("image", {
          src: "/static/denglu/verify.png",
          mode: "heightFix",
          class: "icon"
        }),
        vue.createCommentVNode(' <image src="../../static/denglu/line.png" mode="aspectFit"></image> '),
        $data.whetherLuoJia ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "verifyText"
        }, " 验证成功 ")) : (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "verifyText"
        }, " 点击前往智慧珞珈验证 "))
      ]),
      vue.createElementVNode("view", { class: "accountBox" }, [
        vue.createElementVNode("image", {
          src: "/static/denglu/phone.png",
          mode: "heightFix",
          class: "icon"
        }),
        vue.createCommentVNode(' <image src="../../static/denglu/line.png" mode="aspectFit"></image> '),
        vue.createElementVNode("view", { class: "verifyText" }, [
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              type: "text",
              id: "account",
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.account = $event),
              placeholder: "请输入手机号",
              class: "inputText"
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vModelText, $data.account]
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "accountBox" }, [
        vue.createElementVNode("image", {
          src: "/static/denglu/password.png",
          mode: "heightFix",
          class: "icon"
        }),
        vue.createCommentVNode(' <image src="../../static/denglu/line.png" mode="aspectFit"></image> '),
        vue.createElementVNode("view", { class: "verifyText" }, [
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              type: "password",
              id: "password",
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.password = $event),
              placeholder: "请输入密码",
              class: "inputText"
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vModelText, $data.password]
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "notice" }, " 未注册的手机号验证后自动创建珞樱账号 "),
      vue.createElementVNode("view", { class: "login" }, [
        vue.createElementVNode("button", {
          style: { "border-radius": "40rpx", "background-color": "rgb(40,168,124)", "color": "white" },
          onClick: _cache[3] || (_cache[3] = (...args) => $options.toshouye && $options.toshouye(...args))
        }, "登录")
      ])
    ]);
  }
  const PagesDengluDenglu = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "D:/Uniapp/luoying/pages/denglu/denglu.vue"]]);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const _sfc_main$3 = {
    data() {
      return {
        url: "https://cas.whu.edu.cn/authserver/login?service=http%3A%2F%2Fehall.whu.edu.cn%2Flogin%3Fservice%3Dhttp%3A%2F%2Fehall.whu.edu.cn%2Fnew%2Findex.html",
        currentSrc: "",
        intervalId: null
      };
    },
    onLoad() {
      var pages = getCurrentPages();
      var page = pages[pages.length - 1];
      var currentWebview = page.$getAppWebview();
      currentWebview.children()[0];
      setTimeout(function() {
        let wv = currentWebview.children()[0];
        wv.addEventListener("loaded", function() {
          wv.overrideUrlLoading({
            mode: "reject",
            match: "https:\\/\\/ehall\\.whu\\.edu\\.cn\\/new\\/mobile\\/.*"
          }, function(e) {
            e.url;
            uni.navigateTo({
              url: "/pages/denglu/denglu?whetherLogin=true"
            });
            formatAppLog("log", "at pages/webview/webview.vue:38", e.url, "overrideUrlLoading");
          });
        });
      }, 1e3);
    },
    methods: {}
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("web-view", { src: $data.url }, null, 8, ["src"])
    ]);
  }
  const PagesWebviewWebview = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "D:/Uniapp/luoying/pages/webview/webview.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesXiaoxiXiaoxi = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "D:/Uniapp/luoying/pages/xiaoxi/xiaoxi.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesWodeWode = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "D:/Uniapp/luoying/pages/wode/wode.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/shouye/shouye", PagesShouyeShouye);
  __definePage("pages/faxian/faxian", PagesFaxianFaxian);
  __definePage("pages/denglu/denglu", PagesDengluDenglu);
  __definePage("pages/webview/webview", PagesWebviewWebview);
  __definePage("pages/xiaoxi/xiaoxi", PagesXiaoxiXiaoxi);
  __definePage("pages/wode/wode", PagesWodeWode);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/Uniapp/luoying/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
