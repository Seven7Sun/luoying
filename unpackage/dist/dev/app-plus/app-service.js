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
  const _sfc_main$9 = {
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
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
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
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__file", "D:/Uniapp/luoying/pages/index/index.vue"]]);
  const _sfc_main$8 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("view", { class: "module" }, [
        vue.createElementVNode("image", {
          src: "/static/shouye/schdule.png",
          mode: "widthFix",
          class: "ima"
        }),
        vue.createElementVNode("view", { class: "briefInstruction" }, [
          vue.createElementVNode("view", { class: "title" }, " 今日课程： "),
          vue.createElementVNode("view", { class: "Instruct" }, " 9点-11点 操作系统 2点-4点 乒乓球 ")
        ])
      ]),
      vue.createElementVNode("view", { class: "module" }, [
        vue.createElementVNode("image", {
          src: "/static/shouye/money.png",
          mode: "widthFix",
          class: "ima"
        }),
        vue.createElementVNode("view", { class: "briefInstruction" }, [
          vue.createElementVNode("view", { class: "title" }, " 校园卡余额： blabla钱 "),
          vue.createElementVNode("view", { class: "Instruct" }, " 消费记录：blabla ")
        ])
      ])
    ]);
  }
  const PagesShouyeShouye = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__file", "D:/Uniapp/luoying/pages/shouye/shouye.vue"]]);
  const _sfc_main$7 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesFaxianFaxian = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__file", "D:/Uniapp/luoying/pages/faxian/faxian.vue"]]);
  const _sfc_main$6 = {
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
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
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
  const PagesDengluDenglu = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__file", "D:/Uniapp/luoying/pages/denglu/denglu.vue"]]);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const _sfc_main$5 = {
    data() {
      return {
        url: "https://cas.whu.edu.cn/authserver/login?service=http%3A%2F%2Fehall.whu.edu.cn%2Flogin%3Fservice%3Dhttp%3A%2F%2Fehall.whu.edu.cn%2Fnew%2Findex.html",
        currentSrc: "",
        intervalId: null
      };
    },
    onLoad() {
      var pages2 = getCurrentPages();
      var page = pages2[pages2.length - 1];
      var currentWebview = page.$getAppWebview();
      currentWebview.children()[0];
      setTimeout(function() {
        let wv = currentWebview.children()[0];
        wv.addEventListener("loaded", function() {
          wv.overrideUrlLoading({
            mode: "reject",
            match: "https:\\/\\/ehall\\.whu\\.edu\\.cn\\/new\\/mobile\\/.*"
          }, function(e2) {
            e2.url;
            uni.navigateTo({
              url: "/pages/denglu/denglu?whetherLogin=true"
            });
            formatAppLog("log", "at pages/webview/webview.vue:38", e2.url, "overrideUrlLoading");
          });
        });
      }, 1e3);
    },
    methods: {}
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("web-view", { src: $data.url }, null, 8, ["src"])
    ]);
  }
  const PagesWebviewWebview = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "D:/Uniapp/luoying/pages/webview/webview.vue"]]);
  const pages = [
    {
      path: "pages/index/index",
      style: {
        navigationBarTitleText: "登录",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/shouye/shouye",
      style: {
        navigationBarTitleText: "首页"
      }
    },
    {
      path: "pages/faxian/faxian",
      style: {
        navigationBarTitleText: ""
      }
    },
    {
      path: "pages/denglu/denglu",
      style: {
        navigationBarTitleText: "",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/webview/webview",
      style: {
        navigationBarTitleText: "智慧珞珈验证"
      }
    },
    {
      path: "pages/xiaoxi/xiaoxi",
      style: {
        navigationBarTitleText: "消息"
      }
    },
    {
      path: "pages/wode/wode",
      style: {
        navigationBarTitleText: "个人中心"
      }
    },
    {
      path: "pages/fabu/fabu",
      style: {
        navigationBarTitleText: "发布你的内容吧！"
      }
    },
    {
      path: "pages/chat/chat",
      style: {
        navigationBarTitleText: "聊天页面"
      }
    }
  ];
  const globalStyle = {
    navigationBarTextStyle: "black",
    navigationBarTitleText: "uni-app",
    navigationBarBackgroundColor: "#F8F8F8",
    backgroundColor: "#ffffff"
  };
  const uniIdRouter = {};
  const tabBar = {
    color: "#7A7E83",
    selectedColor: "#7A7E83",
    backgroundColor: "#ffffff",
    borderStyle: "white",
    list: [
      {
        pagePath: "pages/shouye/shouye",
        text: "首页",
        iconPath: "static/tabbar/shouye.png",
        selectedIconPath: "static/tabbar/shouyeSelected.png"
      },
      {
        pagePath: "pages/faxian/faxian",
        text: "论坛",
        iconPath: "static/tabbar/faxian.png",
        selectedIconPath: "static/tabbar/faxianSelected.png"
      },
      {
        pagePath: "pages/fabu/fabu",
        text: "发布",
        iconPath: "static/tabbar/plus.png"
      },
      {
        pagePath: "pages/xiaoxi/xiaoxi",
        text: "消息",
        iconPath: "static/tabbar/xiaoxi.png",
        selectedIconPath: "static/tabbar/xiaoxiSelected.png"
      },
      {
        pagePath: "pages/wode/wode",
        text: "我的",
        iconPath: "static/tabbar/wode.png",
        selectedIconPath: "static/tabbar/wodeSelected.png"
      }
    ]
  };
  const e = {
    pages,
    globalStyle,
    uniIdRouter,
    tabBar
  };
  var define_process_env_UNI_SECURE_NETWORK_CONFIG_default = [];
  function t(e2) {
    return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
  }
  function n(e2, t2, n2) {
    return e2(n2 = { path: t2, exports: {}, require: function(e3, t3) {
      return function() {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }(null == t3 && n2.path);
    } }, n2.exports), n2.exports;
  }
  var s = n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = n2 || function(e3, t3) {
      var n3 = Object.create || /* @__PURE__ */ function() {
        function e4() {
        }
        return function(t4) {
          var n4;
          return e4.prototype = t4, n4 = new e4(), e4.prototype = null, n4;
        };
      }(), s2 = {}, r2 = s2.lib = {}, i2 = r2.Base = { extend: function(e4) {
        var t4 = n3(this);
        return e4 && t4.mixIn(e4), t4.hasOwnProperty("init") && this.init !== t4.init || (t4.init = function() {
          t4.$super.init.apply(this, arguments);
        }), t4.init.prototype = t4, t4.$super = this, t4;
      }, create: function() {
        var e4 = this.extend();
        return e4.init.apply(e4, arguments), e4;
      }, init: function() {
      }, mixIn: function(e4) {
        for (var t4 in e4)
          e4.hasOwnProperty(t4) && (this[t4] = e4[t4]);
        e4.hasOwnProperty("toString") && (this.toString = e4.toString);
      }, clone: function() {
        return this.init.prototype.extend(this);
      } }, o2 = r2.WordArray = i2.extend({ init: function(e4, n4) {
        e4 = this.words = e4 || [], this.sigBytes = n4 != t3 ? n4 : 4 * e4.length;
      }, toString: function(e4) {
        return (e4 || c2).stringify(this);
      }, concat: function(e4) {
        var t4 = this.words, n4 = e4.words, s3 = this.sigBytes, r3 = e4.sigBytes;
        if (this.clamp(), s3 % 4)
          for (var i3 = 0; i3 < r3; i3++) {
            var o3 = n4[i3 >>> 2] >>> 24 - i3 % 4 * 8 & 255;
            t4[s3 + i3 >>> 2] |= o3 << 24 - (s3 + i3) % 4 * 8;
          }
        else
          for (i3 = 0; i3 < r3; i3 += 4)
            t4[s3 + i3 >>> 2] = n4[i3 >>> 2];
        return this.sigBytes += r3, this;
      }, clamp: function() {
        var t4 = this.words, n4 = this.sigBytes;
        t4[n4 >>> 2] &= 4294967295 << 32 - n4 % 4 * 8, t4.length = e3.ceil(n4 / 4);
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4.words = this.words.slice(0), e4;
      }, random: function(t4) {
        for (var n4, s3 = [], r3 = function(t5) {
          t5 = t5;
          var n5 = 987654321, s4 = 4294967295;
          return function() {
            var r4 = ((n5 = 36969 * (65535 & n5) + (n5 >> 16) & s4) << 16) + (t5 = 18e3 * (65535 & t5) + (t5 >> 16) & s4) & s4;
            return r4 /= 4294967296, (r4 += 0.5) * (e3.random() > 0.5 ? 1 : -1);
          };
        }, i3 = 0; i3 < t4; i3 += 4) {
          var a3 = r3(4294967296 * (n4 || e3.random()));
          n4 = 987654071 * a3(), s3.push(4294967296 * a3() | 0);
        }
        return new o2.init(s3, t4);
      } }), a2 = s2.enc = {}, c2 = a2.Hex = { stringify: function(e4) {
        for (var t4 = e4.words, n4 = e4.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
          var i3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
          s3.push((i3 >>> 4).toString(16)), s3.push((15 & i3).toString(16));
        }
        return s3.join("");
      }, parse: function(e4) {
        for (var t4 = e4.length, n4 = [], s3 = 0; s3 < t4; s3 += 2)
          n4[s3 >>> 3] |= parseInt(e4.substr(s3, 2), 16) << 24 - s3 % 8 * 4;
        return new o2.init(n4, t4 / 2);
      } }, u2 = a2.Latin1 = { stringify: function(e4) {
        for (var t4 = e4.words, n4 = e4.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
          var i3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
          s3.push(String.fromCharCode(i3));
        }
        return s3.join("");
      }, parse: function(e4) {
        for (var t4 = e4.length, n4 = [], s3 = 0; s3 < t4; s3++)
          n4[s3 >>> 2] |= (255 & e4.charCodeAt(s3)) << 24 - s3 % 4 * 8;
        return new o2.init(n4, t4);
      } }, h2 = a2.Utf8 = { stringify: function(e4) {
        try {
          return decodeURIComponent(escape(u2.stringify(e4)));
        } catch (e5) {
          throw new Error("Malformed UTF-8 data");
        }
      }, parse: function(e4) {
        return u2.parse(unescape(encodeURIComponent(e4)));
      } }, l2 = r2.BufferedBlockAlgorithm = i2.extend({ reset: function() {
        this._data = new o2.init(), this._nDataBytes = 0;
      }, _append: function(e4) {
        "string" == typeof e4 && (e4 = h2.parse(e4)), this._data.concat(e4), this._nDataBytes += e4.sigBytes;
      }, _process: function(t4) {
        var n4 = this._data, s3 = n4.words, r3 = n4.sigBytes, i3 = this.blockSize, a3 = r3 / (4 * i3), c3 = (a3 = t4 ? e3.ceil(a3) : e3.max((0 | a3) - this._minBufferSize, 0)) * i3, u3 = e3.min(4 * c3, r3);
        if (c3) {
          for (var h3 = 0; h3 < c3; h3 += i3)
            this._doProcessBlock(s3, h3);
          var l3 = s3.splice(0, c3);
          n4.sigBytes -= u3;
        }
        return new o2.init(l3, u3);
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4._data = this._data.clone(), e4;
      }, _minBufferSize: 0 });
      r2.Hasher = l2.extend({ cfg: i2.extend(), init: function(e4) {
        this.cfg = this.cfg.extend(e4), this.reset();
      }, reset: function() {
        l2.reset.call(this), this._doReset();
      }, update: function(e4) {
        return this._append(e4), this._process(), this;
      }, finalize: function(e4) {
        return e4 && this._append(e4), this._doFinalize();
      }, blockSize: 16, _createHelper: function(e4) {
        return function(t4, n4) {
          return new e4.init(n4).finalize(t4);
        };
      }, _createHmacHelper: function(e4) {
        return function(t4, n4) {
          return new d2.HMAC.init(e4, n4).finalize(t4);
        };
      } });
      var d2 = s2.algo = {};
      return s2;
    }(Math), n2);
  }), r = s, i = (n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, function(e3) {
      var t3 = n2, s2 = t3.lib, r2 = s2.WordArray, i2 = s2.Hasher, o2 = t3.algo, a2 = [];
      !function() {
        for (var t4 = 0; t4 < 64; t4++)
          a2[t4] = 4294967296 * e3.abs(e3.sin(t4 + 1)) | 0;
      }();
      var c2 = o2.MD5 = i2.extend({ _doReset: function() {
        this._hash = new r2.init([1732584193, 4023233417, 2562383102, 271733878]);
      }, _doProcessBlock: function(e4, t4) {
        for (var n3 = 0; n3 < 16; n3++) {
          var s3 = t4 + n3, r3 = e4[s3];
          e4[s3] = 16711935 & (r3 << 8 | r3 >>> 24) | 4278255360 & (r3 << 24 | r3 >>> 8);
        }
        var i3 = this._hash.words, o3 = e4[t4 + 0], c3 = e4[t4 + 1], p2 = e4[t4 + 2], f2 = e4[t4 + 3], g2 = e4[t4 + 4], m2 = e4[t4 + 5], y2 = e4[t4 + 6], _2 = e4[t4 + 7], w2 = e4[t4 + 8], v2 = e4[t4 + 9], I2 = e4[t4 + 10], S2 = e4[t4 + 11], b2 = e4[t4 + 12], k2 = e4[t4 + 13], A2 = e4[t4 + 14], P2 = e4[t4 + 15], T2 = i3[0], C2 = i3[1], x2 = i3[2], O2 = i3[3];
        T2 = u2(T2, C2, x2, O2, o3, 7, a2[0]), O2 = u2(O2, T2, C2, x2, c3, 12, a2[1]), x2 = u2(x2, O2, T2, C2, p2, 17, a2[2]), C2 = u2(C2, x2, O2, T2, f2, 22, a2[3]), T2 = u2(T2, C2, x2, O2, g2, 7, a2[4]), O2 = u2(O2, T2, C2, x2, m2, 12, a2[5]), x2 = u2(x2, O2, T2, C2, y2, 17, a2[6]), C2 = u2(C2, x2, O2, T2, _2, 22, a2[7]), T2 = u2(T2, C2, x2, O2, w2, 7, a2[8]), O2 = u2(O2, T2, C2, x2, v2, 12, a2[9]), x2 = u2(x2, O2, T2, C2, I2, 17, a2[10]), C2 = u2(C2, x2, O2, T2, S2, 22, a2[11]), T2 = u2(T2, C2, x2, O2, b2, 7, a2[12]), O2 = u2(O2, T2, C2, x2, k2, 12, a2[13]), x2 = u2(x2, O2, T2, C2, A2, 17, a2[14]), T2 = h2(T2, C2 = u2(C2, x2, O2, T2, P2, 22, a2[15]), x2, O2, c3, 5, a2[16]), O2 = h2(O2, T2, C2, x2, y2, 9, a2[17]), x2 = h2(x2, O2, T2, C2, S2, 14, a2[18]), C2 = h2(C2, x2, O2, T2, o3, 20, a2[19]), T2 = h2(T2, C2, x2, O2, m2, 5, a2[20]), O2 = h2(O2, T2, C2, x2, I2, 9, a2[21]), x2 = h2(x2, O2, T2, C2, P2, 14, a2[22]), C2 = h2(C2, x2, O2, T2, g2, 20, a2[23]), T2 = h2(T2, C2, x2, O2, v2, 5, a2[24]), O2 = h2(O2, T2, C2, x2, A2, 9, a2[25]), x2 = h2(x2, O2, T2, C2, f2, 14, a2[26]), C2 = h2(C2, x2, O2, T2, w2, 20, a2[27]), T2 = h2(T2, C2, x2, O2, k2, 5, a2[28]), O2 = h2(O2, T2, C2, x2, p2, 9, a2[29]), x2 = h2(x2, O2, T2, C2, _2, 14, a2[30]), T2 = l2(T2, C2 = h2(C2, x2, O2, T2, b2, 20, a2[31]), x2, O2, m2, 4, a2[32]), O2 = l2(O2, T2, C2, x2, w2, 11, a2[33]), x2 = l2(x2, O2, T2, C2, S2, 16, a2[34]), C2 = l2(C2, x2, O2, T2, A2, 23, a2[35]), T2 = l2(T2, C2, x2, O2, c3, 4, a2[36]), O2 = l2(O2, T2, C2, x2, g2, 11, a2[37]), x2 = l2(x2, O2, T2, C2, _2, 16, a2[38]), C2 = l2(C2, x2, O2, T2, I2, 23, a2[39]), T2 = l2(T2, C2, x2, O2, k2, 4, a2[40]), O2 = l2(O2, T2, C2, x2, o3, 11, a2[41]), x2 = l2(x2, O2, T2, C2, f2, 16, a2[42]), C2 = l2(C2, x2, O2, T2, y2, 23, a2[43]), T2 = l2(T2, C2, x2, O2, v2, 4, a2[44]), O2 = l2(O2, T2, C2, x2, b2, 11, a2[45]), x2 = l2(x2, O2, T2, C2, P2, 16, a2[46]), T2 = d2(T2, C2 = l2(C2, x2, O2, T2, p2, 23, a2[47]), x2, O2, o3, 6, a2[48]), O2 = d2(O2, T2, C2, x2, _2, 10, a2[49]), x2 = d2(x2, O2, T2, C2, A2, 15, a2[50]), C2 = d2(C2, x2, O2, T2, m2, 21, a2[51]), T2 = d2(T2, C2, x2, O2, b2, 6, a2[52]), O2 = d2(O2, T2, C2, x2, f2, 10, a2[53]), x2 = d2(x2, O2, T2, C2, I2, 15, a2[54]), C2 = d2(C2, x2, O2, T2, c3, 21, a2[55]), T2 = d2(T2, C2, x2, O2, w2, 6, a2[56]), O2 = d2(O2, T2, C2, x2, P2, 10, a2[57]), x2 = d2(x2, O2, T2, C2, y2, 15, a2[58]), C2 = d2(C2, x2, O2, T2, k2, 21, a2[59]), T2 = d2(T2, C2, x2, O2, g2, 6, a2[60]), O2 = d2(O2, T2, C2, x2, S2, 10, a2[61]), x2 = d2(x2, O2, T2, C2, p2, 15, a2[62]), C2 = d2(C2, x2, O2, T2, v2, 21, a2[63]), i3[0] = i3[0] + T2 | 0, i3[1] = i3[1] + C2 | 0, i3[2] = i3[2] + x2 | 0, i3[3] = i3[3] + O2 | 0;
      }, _doFinalize: function() {
        var t4 = this._data, n3 = t4.words, s3 = 8 * this._nDataBytes, r3 = 8 * t4.sigBytes;
        n3[r3 >>> 5] |= 128 << 24 - r3 % 32;
        var i3 = e3.floor(s3 / 4294967296), o3 = s3;
        n3[15 + (r3 + 64 >>> 9 << 4)] = 16711935 & (i3 << 8 | i3 >>> 24) | 4278255360 & (i3 << 24 | i3 >>> 8), n3[14 + (r3 + 64 >>> 9 << 4)] = 16711935 & (o3 << 8 | o3 >>> 24) | 4278255360 & (o3 << 24 | o3 >>> 8), t4.sigBytes = 4 * (n3.length + 1), this._process();
        for (var a3 = this._hash, c3 = a3.words, u3 = 0; u3 < 4; u3++) {
          var h3 = c3[u3];
          c3[u3] = 16711935 & (h3 << 8 | h3 >>> 24) | 4278255360 & (h3 << 24 | h3 >>> 8);
        }
        return a3;
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4._hash = this._hash.clone(), e4;
      } });
      function u2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 & n3 | ~t4 & s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function h2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 & s3 | n3 & ~s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function l2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 ^ n3 ^ s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function d2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (n3 ^ (t4 | ~s3)) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      t3.MD5 = i2._createHelper(c2), t3.HmacMD5 = i2._createHmacHelper(c2);
    }(Math), n2.MD5);
  }), n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, void function() {
      var e3 = n2, t3 = e3.lib.Base, s2 = e3.enc.Utf8;
      e3.algo.HMAC = t3.extend({ init: function(e4, t4) {
        e4 = this._hasher = new e4.init(), "string" == typeof t4 && (t4 = s2.parse(t4));
        var n3 = e4.blockSize, r2 = 4 * n3;
        t4.sigBytes > r2 && (t4 = e4.finalize(t4)), t4.clamp();
        for (var i2 = this._oKey = t4.clone(), o2 = this._iKey = t4.clone(), a2 = i2.words, c2 = o2.words, u2 = 0; u2 < n3; u2++)
          a2[u2] ^= 1549556828, c2[u2] ^= 909522486;
        i2.sigBytes = o2.sigBytes = r2, this.reset();
      }, reset: function() {
        var e4 = this._hasher;
        e4.reset(), e4.update(this._iKey);
      }, update: function(e4) {
        return this._hasher.update(e4), this;
      }, finalize: function(e4) {
        var t4 = this._hasher, n3 = t4.finalize(e4);
        return t4.reset(), t4.finalize(this._oKey.clone().concat(n3));
      } });
    }());
  }), n(function(e2, t2) {
    e2.exports = r.HmacMD5;
  })), o = n(function(e2, t2) {
    e2.exports = r.enc.Utf8;
  }), a = n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, function() {
      var e3 = n2, t3 = e3.lib.WordArray;
      function s2(e4, n3, s3) {
        for (var r2 = [], i2 = 0, o2 = 0; o2 < n3; o2++)
          if (o2 % 4) {
            var a2 = s3[e4.charCodeAt(o2 - 1)] << o2 % 4 * 2, c2 = s3[e4.charCodeAt(o2)] >>> 6 - o2 % 4 * 2;
            r2[i2 >>> 2] |= (a2 | c2) << 24 - i2 % 4 * 8, i2++;
          }
        return t3.create(r2, i2);
      }
      e3.enc.Base64 = { stringify: function(e4) {
        var t4 = e4.words, n3 = e4.sigBytes, s3 = this._map;
        e4.clamp();
        for (var r2 = [], i2 = 0; i2 < n3; i2 += 3)
          for (var o2 = (t4[i2 >>> 2] >>> 24 - i2 % 4 * 8 & 255) << 16 | (t4[i2 + 1 >>> 2] >>> 24 - (i2 + 1) % 4 * 8 & 255) << 8 | t4[i2 + 2 >>> 2] >>> 24 - (i2 + 2) % 4 * 8 & 255, a2 = 0; a2 < 4 && i2 + 0.75 * a2 < n3; a2++)
            r2.push(s3.charAt(o2 >>> 6 * (3 - a2) & 63));
        var c2 = s3.charAt(64);
        if (c2)
          for (; r2.length % 4; )
            r2.push(c2);
        return r2.join("");
      }, parse: function(e4) {
        var t4 = e4.length, n3 = this._map, r2 = this._reverseMap;
        if (!r2) {
          r2 = this._reverseMap = [];
          for (var i2 = 0; i2 < n3.length; i2++)
            r2[n3.charCodeAt(i2)] = i2;
        }
        var o2 = n3.charAt(64);
        if (o2) {
          var a2 = e4.indexOf(o2);
          -1 !== a2 && (t4 = a2);
        }
        return s2(e4, t4, r2);
      }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" };
    }(), n2.enc.Base64);
  });
  const c = "FUNCTION", u = "OBJECT", h = "CLIENT_DB", l = "pending", d = "fulfilled", p = "rejected";
  function f(e2) {
    return Object.prototype.toString.call(e2).slice(8, -1).toLowerCase();
  }
  function g(e2) {
    return "object" === f(e2);
  }
  function m(e2) {
    return "function" == typeof e2;
  }
  function y(e2) {
    return function() {
      try {
        return e2.apply(e2, arguments);
      } catch (e3) {
        console.error(e3);
      }
    };
  }
  const _ = "REJECTED", w = "NOT_PENDING";
  class v {
    constructor({ createPromise: e2, retryRule: t2 = _ } = {}) {
      this.createPromise = e2, this.status = null, this.promise = null, this.retryRule = t2;
    }
    get needRetry() {
      if (!this.status)
        return true;
      switch (this.retryRule) {
        case _:
          return this.status === p;
        case w:
          return this.status !== l;
      }
    }
    exec() {
      return this.needRetry ? (this.status = l, this.promise = this.createPromise().then((e2) => (this.status = d, Promise.resolve(e2)), (e2) => (this.status = p, Promise.reject(e2))), this.promise) : this.promise;
    }
  }
  function I(e2) {
    return e2 && "string" == typeof e2 ? JSON.parse(e2) : e2;
  }
  const S = true, b = "app", A = I(define_process_env_UNI_SECURE_NETWORK_CONFIG_default), P = b, T = I('{\n    "address": [\n        "127.0.0.1",\n        "192.168.255.1",\n        "192.168.133.1",\n        "10.135.19.183"\n    ],\n    "debugPort": 9002,\n    "initialLaunchType": "local",\n    "servePort": 7002,\n    "skipFiles": [\n        "<node_internals>/**",\n        "D:/HBuilderX/plugins/unicloud/**/*.js"\n    ]\n}\n'), C = I('[{"provider":"aliyun","spaceName":"trial-wdarlbo7lkpoy8ebe86","spaceId":"mp-b57cf61e-6398-4ae7-93c0-4db8e765ec2d","clientSecret":"4dS89HqPS4Vi8zObyOOS3w==","endpoint":"https://api.next.bspapp.com"}]') || [];
  let O = "";
  try {
    O = "__UNI__40F4800";
  } catch (e2) {
  }
  let E = {};
  function L(e2, t2 = {}) {
    var n2, s2;
    return n2 = E, s2 = e2, Object.prototype.hasOwnProperty.call(n2, s2) || (E[e2] = t2), E[e2];
  }
  E = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {};
  const R = ["invoke", "success", "fail", "complete"], U = L("_globalUniCloudInterceptor");
  function N(e2, t2) {
    U[e2] || (U[e2] = {}), g(t2) && Object.keys(t2).forEach((n2) => {
      R.indexOf(n2) > -1 && function(e3, t3, n3) {
        let s2 = U[e3][t3];
        s2 || (s2 = U[e3][t3] = []), -1 === s2.indexOf(n3) && m(n3) && s2.push(n3);
      }(e2, n2, t2[n2]);
    });
  }
  function D(e2, t2) {
    U[e2] || (U[e2] = {}), g(t2) ? Object.keys(t2).forEach((n2) => {
      R.indexOf(n2) > -1 && function(e3, t3, n3) {
        const s2 = U[e3][t3];
        if (!s2)
          return;
        const r2 = s2.indexOf(n3);
        r2 > -1 && s2.splice(r2, 1);
      }(e2, n2, t2[n2]);
    }) : delete U[e2];
  }
  function M(e2, t2) {
    return e2 && 0 !== e2.length ? e2.reduce((e3, n2) => e3.then(() => n2(t2)), Promise.resolve()) : Promise.resolve();
  }
  function q(e2, t2) {
    return U[e2] && U[e2][t2] || [];
  }
  function F(e2) {
    N("callObject", e2);
  }
  const K = L("_globalUniCloudListener"), j = "response", $ = "needLogin", B = "refreshToken", W = "clientdb", H = "cloudfunction", z = "cloudobject";
  function J(e2) {
    return K[e2] || (K[e2] = []), K[e2];
  }
  function G(e2, t2) {
    const n2 = J(e2);
    n2.includes(t2) || n2.push(t2);
  }
  function V(e2, t2) {
    const n2 = J(e2), s2 = n2.indexOf(t2);
    -1 !== s2 && n2.splice(s2, 1);
  }
  function Y(e2, t2) {
    const n2 = J(e2);
    for (let e3 = 0; e3 < n2.length; e3++) {
      (0, n2[e3])(t2);
    }
  }
  let Q, X = false;
  function Z() {
    return Q || (Q = new Promise((e2) => {
      X && e2(), function t2() {
        if ("function" == typeof getCurrentPages) {
          const t3 = getCurrentPages();
          t3 && t3[0] && (X = true, e2());
        }
        X || setTimeout(() => {
          t2();
        }, 30);
      }();
    }), Q);
  }
  function ee(e2) {
    const t2 = {};
    for (const n2 in e2) {
      const s2 = e2[n2];
      m(s2) && (t2[n2] = y(s2));
    }
    return t2;
  }
  class te extends Error {
    constructor(e2) {
      super(e2.message), this.errMsg = e2.message || e2.errMsg || "unknown system error", this.code = this.errCode = e2.code || e2.errCode || "SYSTEM_ERROR", this.errSubject = this.subject = e2.subject || e2.errSubject, this.cause = e2.cause, this.requestId = e2.requestId;
    }
    toJson(e2 = 0) {
      if (!(e2 >= 10))
        return e2++, { errCode: this.errCode, errMsg: this.errMsg, errSubject: this.errSubject, cause: this.cause && this.cause.toJson ? this.cause.toJson(e2) : this.cause };
    }
  }
  var ne = { request: (e2) => uni.request(e2), uploadFile: (e2) => uni.uploadFile(e2), setStorageSync: (e2, t2) => uni.setStorageSync(e2, t2), getStorageSync: (e2) => uni.getStorageSync(e2), removeStorageSync: (e2) => uni.removeStorageSync(e2), clearStorageSync: () => uni.clearStorageSync() };
  function se(e2) {
    return e2 && se(e2.__v_raw) || e2;
  }
  function re() {
    return { token: ne.getStorageSync("uni_id_token") || ne.getStorageSync("uniIdToken"), tokenExpired: ne.getStorageSync("uni_id_token_expired") };
  }
  function ie({ token: e2, tokenExpired: t2 } = {}) {
    e2 && ne.setStorageSync("uni_id_token", e2), t2 && ne.setStorageSync("uni_id_token_expired", t2);
  }
  let oe, ae;
  function ce() {
    return oe || (oe = uni.getSystemInfoSync()), oe;
  }
  function ue() {
    let e2, t2;
    try {
      if (uni.getLaunchOptionsSync) {
        if (uni.getLaunchOptionsSync.toString().indexOf("not yet implemented") > -1)
          return;
        const { scene: n2, channel: s2 } = uni.getLaunchOptionsSync();
        e2 = s2, t2 = n2;
      }
    } catch (e3) {
    }
    return { channel: e2, scene: t2 };
  }
  function he() {
    const e2 = uni.getLocale && uni.getLocale() || "en";
    if (ae)
      return { ...ae, locale: e2, LOCALE: e2 };
    const t2 = ce(), { deviceId: n2, osName: s2, uniPlatform: r2, appId: i2 } = t2, o2 = ["pixelRatio", "brand", "model", "system", "language", "version", "platform", "host", "SDKVersion", "swanNativeVersion", "app", "AppPlatform", "fontSizeSetting"];
    for (let e3 = 0; e3 < o2.length; e3++) {
      delete t2[o2[e3]];
    }
    return ae = { PLATFORM: r2, OS: s2, APPID: i2, DEVICEID: n2, ...ue(), ...t2 }, { ...ae, locale: e2, LOCALE: e2 };
  }
  var le = { sign: function(e2, t2) {
    let n2 = "";
    return Object.keys(e2).sort().forEach(function(t3) {
      e2[t3] && (n2 = n2 + "&" + t3 + "=" + e2[t3]);
    }), n2 = n2.slice(1), i(n2, t2).toString();
  }, wrappedRequest: function(e2, t2) {
    return new Promise((n2, s2) => {
      t2(Object.assign(e2, { complete(e3) {
        e3 || (e3 = {});
        const t3 = e3.data && e3.data.header && e3.data.header["x-serverless-request-id"] || e3.header && e3.header["request-id"];
        if (!e3.statusCode || e3.statusCode >= 400) {
          const n3 = e3.data && e3.data.error && e3.data.error.code || "SYS_ERR", r3 = e3.data && e3.data.error && e3.data.error.message || e3.errMsg || "request:fail";
          return s2(new te({ code: n3, message: r3, requestId: t3 }));
        }
        const r2 = e3.data;
        if (r2.error)
          return s2(new te({ code: r2.error.code, message: r2.error.message, requestId: t3 }));
        r2.result = r2.data, r2.requestId = t3, delete r2.data, n2(r2);
      } }));
    });
  }, toBase64: function(e2) {
    return a.stringify(o.parse(e2));
  } };
  var de = class {
    constructor(e2) {
      ["spaceId", "clientSecret"].forEach((t2) => {
        if (!Object.prototype.hasOwnProperty.call(e2, t2))
          throw new Error(`${t2} required`);
      }), this.config = Object.assign({}, { endpoint: 0 === e2.spaceId.indexOf("mp-") ? "https://api.next.bspapp.com" : "https://api.bspapp.com" }, e2), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = ne, this._getAccessTokenPromiseHub = new v({ createPromise: () => this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then((e3) => {
        if (!e3.result || !e3.result.accessToken)
          throw new te({ code: "AUTH_FAILED", message: "获取accessToken失败" });
        this.setAccessToken(e3.result.accessToken);
      }), retryRule: w });
    }
    get hasAccessToken() {
      return !!this.accessToken;
    }
    setAccessToken(e2) {
      this.accessToken = e2;
    }
    requestWrapped(e2) {
      return le.wrappedRequest(e2, this.adapter.request);
    }
    requestAuth(e2) {
      return this.requestWrapped(e2);
    }
    request(e2, t2) {
      return Promise.resolve().then(() => this.hasAccessToken ? t2 ? this.requestWrapped(e2) : this.requestWrapped(e2).catch((t3) => new Promise((e3, n2) => {
        !t3 || "GATEWAY_INVALID_TOKEN" !== t3.code && "InvalidParameter.InvalidToken" !== t3.code ? n2(t3) : e3();
      }).then(() => this.getAccessToken()).then(() => {
        const t4 = this.rebuildRequest(e2);
        return this.request(t4, true);
      })) : this.getAccessToken().then(() => {
        const t3 = this.rebuildRequest(e2);
        return this.request(t3, true);
      }));
    }
    rebuildRequest(e2) {
      const t2 = Object.assign({}, e2);
      return t2.data.token = this.accessToken, t2.header["x-basement-token"] = this.accessToken, t2.header["x-serverless-sign"] = le.sign(t2.data, this.config.clientSecret), t2;
    }
    setupRequest(e2, t2) {
      const n2 = Object.assign({}, e2, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      return "auth" !== t2 && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = le.sign(n2, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: s2 };
    }
    getAccessToken() {
      return this._getAccessTokenPromiseHub.exec();
    }
    async authorize() {
      await this.getAccessToken();
    }
    callFunction(e2) {
      const t2 = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e2.name, functionArgs: e2.data || {} }) };
      return this.request(this.setupRequest(t2));
    }
    getOSSUploadOptionsFromPath(e2) {
      const t2 = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e2) };
      return this.request(this.setupRequest(t2));
    }
    uploadFileToOSS({ url: e2, formData: t2, name: n2, filePath: s2, fileType: r2, onUploadProgress: i2 }) {
      return new Promise((o2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e2, formData: t2, name: n2, filePath: s2, fileType: r2, header: { "X-OSS-server-side-encrpytion": "AES256" }, success(e3) {
          e3 && e3.statusCode < 400 ? o2(e3) : a2(new te({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
        }, fail(e3) {
          a2(new te({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "文件上传失败" }));
        } });
        "function" == typeof i2 && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((e3) => {
          i2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
        });
      });
    }
    reportOSSUpload(e2) {
      const t2 = { method: "serverless.file.resource.report", params: JSON.stringify(e2) };
      return this.request(this.setupRequest(t2));
    }
    async uploadFile({ filePath: e2, cloudPath: t2, fileType: n2 = "image", cloudPathAsRealPath: s2 = false, onUploadProgress: r2, config: i2 }) {
      if ("string" !== f(t2))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath必须为字符串类型" });
      if (!(t2 = t2.trim()))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath不可为空" });
      if (/:\/\//.test(t2))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath不合法" });
      const o2 = i2 && i2.envType || this.config.envType;
      if (s2 && ("/" !== t2[0] && (t2 = "/" + t2), t2.indexOf("\\") > -1))
        throw new te({ code: "INVALID_PARAM", message: "使用cloudPath作为路径时，cloudPath不可包含“\\”" });
      const a2 = (await this.getOSSUploadOptionsFromPath({ env: o2, filename: s2 ? t2.split("/").pop() : t2, fileId: s2 ? t2 : void 0 })).result, c2 = "https://" + a2.cdnDomain + "/" + a2.ossPath, { securityToken: u2, accessKeyId: h2, signature: l2, host: d2, ossPath: p2, id: g2, policy: m2, ossCallbackUrl: y2 } = a2, _2 = { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: h2, Signature: l2, host: d2, id: g2, key: p2, policy: m2, success_action_status: 200 };
      if (u2 && (_2["x-oss-security-token"] = u2), y2) {
        const e3 = JSON.stringify({ callbackUrl: y2, callbackBody: JSON.stringify({ fileId: g2, spaceId: this.config.spaceId }), callbackBodyType: "application/json" });
        _2.callback = le.toBase64(e3);
      }
      const w2 = { url: "https://" + a2.host, formData: _2, fileName: "file", name: "file", filePath: e2, fileType: n2 };
      if (await this.uploadFileToOSS(Object.assign({}, w2, { onUploadProgress: r2 })), y2)
        return { success: true, filePath: e2, fileID: c2 };
      if ((await this.reportOSSUpload({ id: g2 })).success)
        return { success: true, filePath: e2, fileID: c2 };
      throw new te({ code: "UPLOAD_FAILED", message: "文件上传失败" });
    }
    getTempFileURL({ fileList: e2 } = {}) {
      return new Promise((t2, n2) => {
        Array.isArray(e2) && 0 !== e2.length || n2(new te({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" })), t2({ fileList: e2.map((e3) => ({ fileID: e3, tempFileURL: e3 })) });
      });
    }
    async getFileInfo({ fileList: e2 } = {}) {
      if (!Array.isArray(e2) || 0 === e2.length)
        throw new te({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" });
      const t2 = { method: "serverless.file.resource.info", params: JSON.stringify({ id: e2.map((e3) => e3.split("?")[0]).join(",") }) };
      return { fileList: (await this.request(this.setupRequest(t2))).result };
    }
  };
  var pe = { init(e2) {
    const t2 = new de(e2), n2 = { signInAnonymously: function() {
      return t2.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } };
  const fe = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";
  var ge;
  !function(e2) {
    e2.local = "local", e2.none = "none", e2.session = "session";
  }(ge || (ge = {}));
  var me = function() {
  }, ye = n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, function(e3) {
      var t3 = n2, s2 = t3.lib, r2 = s2.WordArray, i2 = s2.Hasher, o2 = t3.algo, a2 = [], c2 = [];
      !function() {
        function t4(t5) {
          for (var n4 = e3.sqrt(t5), s4 = 2; s4 <= n4; s4++)
            if (!(t5 % s4))
              return false;
          return true;
        }
        function n3(e4) {
          return 4294967296 * (e4 - (0 | e4)) | 0;
        }
        for (var s3 = 2, r3 = 0; r3 < 64; )
          t4(s3) && (r3 < 8 && (a2[r3] = n3(e3.pow(s3, 0.5))), c2[r3] = n3(e3.pow(s3, 1 / 3)), r3++), s3++;
      }();
      var u2 = [], h2 = o2.SHA256 = i2.extend({ _doReset: function() {
        this._hash = new r2.init(a2.slice(0));
      }, _doProcessBlock: function(e4, t4) {
        for (var n3 = this._hash.words, s3 = n3[0], r3 = n3[1], i3 = n3[2], o3 = n3[3], a3 = n3[4], h3 = n3[5], l2 = n3[6], d2 = n3[7], p2 = 0; p2 < 64; p2++) {
          if (p2 < 16)
            u2[p2] = 0 | e4[t4 + p2];
          else {
            var f2 = u2[p2 - 15], g2 = (f2 << 25 | f2 >>> 7) ^ (f2 << 14 | f2 >>> 18) ^ f2 >>> 3, m2 = u2[p2 - 2], y2 = (m2 << 15 | m2 >>> 17) ^ (m2 << 13 | m2 >>> 19) ^ m2 >>> 10;
            u2[p2] = g2 + u2[p2 - 7] + y2 + u2[p2 - 16];
          }
          var _2 = s3 & r3 ^ s3 & i3 ^ r3 & i3, w2 = (s3 << 30 | s3 >>> 2) ^ (s3 << 19 | s3 >>> 13) ^ (s3 << 10 | s3 >>> 22), v2 = d2 + ((a3 << 26 | a3 >>> 6) ^ (a3 << 21 | a3 >>> 11) ^ (a3 << 7 | a3 >>> 25)) + (a3 & h3 ^ ~a3 & l2) + c2[p2] + u2[p2];
          d2 = l2, l2 = h3, h3 = a3, a3 = o3 + v2 | 0, o3 = i3, i3 = r3, r3 = s3, s3 = v2 + (w2 + _2) | 0;
        }
        n3[0] = n3[0] + s3 | 0, n3[1] = n3[1] + r3 | 0, n3[2] = n3[2] + i3 | 0, n3[3] = n3[3] + o3 | 0, n3[4] = n3[4] + a3 | 0, n3[5] = n3[5] + h3 | 0, n3[6] = n3[6] + l2 | 0, n3[7] = n3[7] + d2 | 0;
      }, _doFinalize: function() {
        var t4 = this._data, n3 = t4.words, s3 = 8 * this._nDataBytes, r3 = 8 * t4.sigBytes;
        return n3[r3 >>> 5] |= 128 << 24 - r3 % 32, n3[14 + (r3 + 64 >>> 9 << 4)] = e3.floor(s3 / 4294967296), n3[15 + (r3 + 64 >>> 9 << 4)] = s3, t4.sigBytes = 4 * n3.length, this._process(), this._hash;
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4._hash = this._hash.clone(), e4;
      } });
      t3.SHA256 = i2._createHelper(h2), t3.HmacSHA256 = i2._createHmacHelper(h2);
    }(Math), n2.SHA256);
  }), _e = ye, we = n(function(e2, t2) {
    e2.exports = r.HmacSHA256;
  });
  const ve = () => {
    let e2;
    if (!Promise) {
      e2 = () => {
      }, e2.promise = {};
      const t3 = () => {
        throw new te({ message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.' });
      };
      return Object.defineProperty(e2.promise, "then", { get: t3 }), Object.defineProperty(e2.promise, "catch", { get: t3 }), e2;
    }
    const t2 = new Promise((t3, n2) => {
      e2 = (e3, s2) => e3 ? n2(e3) : t3(s2);
    });
    return e2.promise = t2, e2;
  };
  function Ie(e2) {
    return void 0 === e2;
  }
  function Se(e2) {
    return "[object Null]" === Object.prototype.toString.call(e2);
  }
  var be;
  function ke(e2) {
    const t2 = (n2 = e2, "[object Array]" === Object.prototype.toString.call(n2) ? e2 : [e2]);
    var n2;
    for (const e3 of t2) {
      const { isMatch: t3, genAdapter: n3, runtime: s2 } = e3;
      if (t3())
        return { adapter: n3(), runtime: s2 };
    }
  }
  !function(e2) {
    e2.WEB = "web", e2.WX_MP = "wx_mp";
  }(be || (be = {}));
  const Ae = { adapter: null, runtime: void 0 }, Pe = ["anonymousUuidKey"];
  class Te extends me {
    constructor() {
      super(), Ae.adapter.root.tcbObject || (Ae.adapter.root.tcbObject = {});
    }
    setItem(e2, t2) {
      Ae.adapter.root.tcbObject[e2] = t2;
    }
    getItem(e2) {
      return Ae.adapter.root.tcbObject[e2];
    }
    removeItem(e2) {
      delete Ae.adapter.root.tcbObject[e2];
    }
    clear() {
      delete Ae.adapter.root.tcbObject;
    }
  }
  function Ce(e2, t2) {
    switch (e2) {
      case "local":
        return t2.localStorage || new Te();
      case "none":
        return new Te();
      default:
        return t2.sessionStorage || new Te();
    }
  }
  class xe {
    constructor(e2) {
      if (!this._storage) {
        this._persistence = Ae.adapter.primaryStorage || e2.persistence, this._storage = Ce(this._persistence, Ae.adapter);
        const t2 = `access_token_${e2.env}`, n2 = `access_token_expire_${e2.env}`, s2 = `refresh_token_${e2.env}`, r2 = `anonymous_uuid_${e2.env}`, i2 = `login_type_${e2.env}`, o2 = `user_info_${e2.env}`;
        this.keys = { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2, anonymousUuidKey: r2, loginTypeKey: i2, userInfoKey: o2 };
      }
    }
    updatePersistence(e2) {
      if (e2 === this._persistence)
        return;
      const t2 = "local" === this._persistence;
      this._persistence = e2;
      const n2 = Ce(e2, Ae.adapter);
      for (const e3 in this.keys) {
        const s2 = this.keys[e3];
        if (t2 && Pe.includes(e3))
          continue;
        const r2 = this._storage.getItem(s2);
        Ie(r2) || Se(r2) || (n2.setItem(s2, r2), this._storage.removeItem(s2));
      }
      this._storage = n2;
    }
    setStore(e2, t2, n2) {
      if (!this._storage)
        return;
      const s2 = { version: n2 || "localCachev1", content: t2 }, r2 = JSON.stringify(s2);
      try {
        this._storage.setItem(e2, r2);
      } catch (e3) {
        throw e3;
      }
    }
    getStore(e2, t2) {
      try {
        if (!this._storage)
          return;
      } catch (e3) {
        return "";
      }
      t2 = t2 || "localCachev1";
      const n2 = this._storage.getItem(e2);
      if (!n2)
        return "";
      if (n2.indexOf(t2) >= 0) {
        return JSON.parse(n2).content;
      }
      return "";
    }
    removeStore(e2) {
      this._storage.removeItem(e2);
    }
  }
  const Oe = {}, Ee = {};
  function Le(e2) {
    return Oe[e2];
  }
  class Re {
    constructor(e2, t2) {
      this.data = t2 || null, this.name = e2;
    }
  }
  class Ue extends Re {
    constructor(e2, t2) {
      super("error", { error: e2, data: t2 }), this.error = e2;
    }
  }
  const Ne = new class {
    constructor() {
      this._listeners = {};
    }
    on(e2, t2) {
      return function(e3, t3, n2) {
        n2[e3] = n2[e3] || [], n2[e3].push(t3);
      }(e2, t2, this._listeners), this;
    }
    off(e2, t2) {
      return function(e3, t3, n2) {
        if (n2 && n2[e3]) {
          const s2 = n2[e3].indexOf(t3);
          -1 !== s2 && n2[e3].splice(s2, 1);
        }
      }(e2, t2, this._listeners), this;
    }
    fire(e2, t2) {
      if (e2 instanceof Ue)
        return console.error(e2.error), this;
      const n2 = "string" == typeof e2 ? new Re(e2, t2 || {}) : e2;
      const s2 = n2.name;
      if (this._listens(s2)) {
        n2.target = this;
        const e3 = this._listeners[s2] ? [...this._listeners[s2]] : [];
        for (const t3 of e3)
          t3.call(this, n2);
      }
      return this;
    }
    _listens(e2) {
      return this._listeners[e2] && this._listeners[e2].length > 0;
    }
  }();
  function De(e2, t2) {
    Ne.on(e2, t2);
  }
  function Me(e2, t2 = {}) {
    Ne.fire(e2, t2);
  }
  function qe(e2, t2) {
    Ne.off(e2, t2);
  }
  const Fe = "loginStateChanged", Ke = "loginStateExpire", je = "loginTypeChanged", $e = "anonymousConverted", Be = "refreshAccessToken";
  var We;
  !function(e2) {
    e2.ANONYMOUS = "ANONYMOUS", e2.WECHAT = "WECHAT", e2.WECHAT_PUBLIC = "WECHAT-PUBLIC", e2.WECHAT_OPEN = "WECHAT-OPEN", e2.CUSTOM = "CUSTOM", e2.EMAIL = "EMAIL", e2.USERNAME = "USERNAME", e2.NULL = "NULL";
  }(We || (We = {}));
  const He = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"], ze = { "X-SDK-Version": "1.3.5" };
  function Je(e2, t2, n2) {
    const s2 = e2[t2];
    e2[t2] = function(t3) {
      const r2 = {}, i2 = {};
      n2.forEach((n3) => {
        const { data: s3, headers: o3 } = n3.call(e2, t3);
        Object.assign(r2, s3), Object.assign(i2, o3);
      });
      const o2 = t3.data;
      return o2 && (() => {
        var e3;
        if (e3 = o2, "[object FormData]" !== Object.prototype.toString.call(e3))
          t3.data = { ...o2, ...r2 };
        else
          for (const e4 in r2)
            o2.append(e4, r2[e4]);
      })(), t3.headers = { ...t3.headers || {}, ...i2 }, s2.call(e2, t3);
    };
  }
  function Ge() {
    const e2 = Math.random().toString(16).slice(2);
    return { data: { seqId: e2 }, headers: { ...ze, "x-seqid": e2 } };
  }
  class Ve {
    constructor(e2 = {}) {
      var t2;
      this.config = e2, this._reqClass = new Ae.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: `请求在${this.config.timeout / 1e3}s内未完成，已中断`, restrictedMethods: ["post"] }), this._cache = Le(this.config.env), this._localCache = (t2 = this.config.env, Ee[t2]), Je(this._reqClass, "post", [Ge]), Je(this._reqClass, "upload", [Ge]), Je(this._reqClass, "download", [Ge]);
    }
    async post(e2) {
      return await this._reqClass.post(e2);
    }
    async upload(e2) {
      return await this._reqClass.upload(e2);
    }
    async download(e2) {
      return await this._reqClass.download(e2);
    }
    async refreshAccessToken() {
      let e2, t2;
      this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());
      try {
        e2 = await this._refreshAccessTokenPromise;
      } catch (e3) {
        t2 = e3;
      }
      if (this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t2)
        throw t2;
      return e2;
    }
    async _refreshAccessToken() {
      const { accessTokenKey: e2, accessTokenExpireKey: t2, refreshTokenKey: n2, loginTypeKey: s2, anonymousUuidKey: r2 } = this._cache.keys;
      this._cache.removeStore(e2), this._cache.removeStore(t2);
      let i2 = this._cache.getStore(n2);
      if (!i2)
        throw new te({ message: "未登录CloudBase" });
      const o2 = { refresh_token: i2 }, a2 = await this.request("auth.fetchAccessTokenWithRefreshToken", o2);
      if (a2.data.code) {
        const { code: e3 } = a2.data;
        if ("SIGN_PARAM_INVALID" === e3 || "REFRESH_TOKEN_EXPIRED" === e3 || "INVALID_REFRESH_TOKEN" === e3) {
          if (this._cache.getStore(s2) === We.ANONYMOUS && "INVALID_REFRESH_TOKEN" === e3) {
            const e4 = this._cache.getStore(r2), t3 = this._cache.getStore(n2), s3 = await this.send("auth.signInAnonymously", { anonymous_uuid: e4, refresh_token: t3 });
            return this.setRefreshToken(s3.refresh_token), this._refreshAccessToken();
          }
          Me(Ke), this._cache.removeStore(n2);
        }
        throw new te({ code: a2.data.code, message: `刷新access token失败：${a2.data.code}` });
      }
      if (a2.data.access_token)
        return Me(Be), this._cache.setStore(e2, a2.data.access_token), this._cache.setStore(t2, a2.data.access_token_expire + Date.now()), { accessToken: a2.data.access_token, accessTokenExpire: a2.data.access_token_expire };
      a2.data.refresh_token && (this._cache.removeStore(n2), this._cache.setStore(n2, a2.data.refresh_token), this._refreshAccessToken());
    }
    async getAccessToken() {
      const { accessTokenKey: e2, accessTokenExpireKey: t2, refreshTokenKey: n2 } = this._cache.keys;
      if (!this._cache.getStore(n2))
        throw new te({ message: "refresh token不存在，登录状态异常" });
      let s2 = this._cache.getStore(e2), r2 = this._cache.getStore(t2), i2 = true;
      return this._shouldRefreshAccessTokenHook && !await this._shouldRefreshAccessTokenHook(s2, r2) && (i2 = false), (!s2 || !r2 || r2 < Date.now()) && i2 ? this.refreshAccessToken() : { accessToken: s2, accessTokenExpire: r2 };
    }
    async request(e2, t2, n2) {
      const s2 = `x-tcb-trace_${this.config.env}`;
      let r2 = "application/x-www-form-urlencoded";
      const i2 = { action: e2, env: this.config.env, dataVersion: "2019-08-16", ...t2 };
      if (-1 === He.indexOf(e2)) {
        const { refreshTokenKey: e3 } = this._cache.keys;
        this._cache.getStore(e3) && (i2.access_token = (await this.getAccessToken()).accessToken);
      }
      let o2;
      if ("storage.uploadFile" === e2) {
        o2 = new FormData();
        for (let e3 in o2)
          o2.hasOwnProperty(e3) && void 0 !== o2[e3] && o2.append(e3, i2[e3]);
        r2 = "multipart/form-data";
      } else {
        r2 = "application/json", o2 = {};
        for (let e3 in i2)
          void 0 !== i2[e3] && (o2[e3] = i2[e3]);
      }
      let a2 = { headers: { "content-type": r2 } };
      n2 && n2.onUploadProgress && (a2.onUploadProgress = n2.onUploadProgress);
      const c2 = this._localCache.getStore(s2);
      c2 && (a2.headers["X-TCB-Trace"] = c2);
      const { parse: u2, inQuery: h2, search: l2 } = t2;
      let d2 = { env: this.config.env };
      u2 && (d2.parse = true), h2 && (d2 = { ...h2, ...d2 });
      let p2 = function(e3, t3, n3 = {}) {
        const s3 = /\?/.test(t3);
        let r3 = "";
        for (let e4 in n3)
          "" === r3 ? !s3 && (t3 += "?") : r3 += "&", r3 += `${e4}=${encodeURIComponent(n3[e4])}`;
        return /^http(s)?\:\/\//.test(t3 += r3) ? t3 : `${e3}${t3}`;
      }(fe, "//tcb-api.tencentcloudapi.com/web", d2);
      l2 && (p2 += l2);
      const f2 = await this.post({ url: p2, data: o2, ...a2 }), g2 = f2.header && f2.header["x-tcb-trace"];
      if (g2 && this._localCache.setStore(s2, g2), 200 !== Number(f2.status) && 200 !== Number(f2.statusCode) || !f2.data)
        throw new te({ code: "NETWORK_ERROR", message: "network request error" });
      return f2;
    }
    async send(e2, t2 = {}) {
      const n2 = await this.request(e2, t2, { onUploadProgress: t2.onUploadProgress });
      if ("ACCESS_TOKEN_EXPIRED" === n2.data.code && -1 === He.indexOf(e2)) {
        await this.refreshAccessToken();
        const n3 = await this.request(e2, t2, { onUploadProgress: t2.onUploadProgress });
        if (n3.data.code)
          throw new te({ code: n3.data.code, message: n3.data.message });
        return n3.data;
      }
      if (n2.data.code)
        throw new te({ code: n2.data.code, message: n2.data.message });
      return n2.data;
    }
    setRefreshToken(e2) {
      const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e2);
    }
  }
  const Ye = {};
  function Qe(e2) {
    return Ye[e2];
  }
  class Xe {
    constructor(e2) {
      this.config = e2, this._cache = Le(e2.env), this._request = Qe(e2.env);
    }
    setRefreshToken(e2) {
      const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e2);
    }
    setAccessToken(e2, t2) {
      const { accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys;
      this._cache.setStore(n2, e2), this._cache.setStore(s2, t2);
    }
    async refreshUserInfo() {
      const { data: e2 } = await this._request.send("auth.getUserInfo", {});
      return this.setLocalUserInfo(e2), e2;
    }
    setLocalUserInfo(e2) {
      const { userInfoKey: t2 } = this._cache.keys;
      this._cache.setStore(t2, e2);
    }
  }
  class Ze {
    constructor(e2) {
      if (!e2)
        throw new te({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._envId = e2, this._cache = Le(this._envId), this._request = Qe(this._envId), this.setUserInfo();
    }
    linkWithTicket(e2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "ticket must be string" });
      return this._request.send("auth.linkWithTicket", { ticket: e2 });
    }
    linkWithRedirect(e2) {
      e2.signInWithRedirect();
    }
    updatePassword(e2, t2) {
      return this._request.send("auth.updatePassword", { oldPassword: t2, newPassword: e2 });
    }
    updateEmail(e2) {
      return this._request.send("auth.updateEmail", { newEmail: e2 });
    }
    updateUsername(e2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "username must be a string" });
      return this._request.send("auth.updateUsername", { username: e2 });
    }
    async getLinkedUidList() {
      const { data: e2 } = await this._request.send("auth.getLinkedUidList", {});
      let t2 = false;
      const { users: n2 } = e2;
      return n2.forEach((e3) => {
        e3.wxOpenId && e3.wxPublicId && (t2 = true);
      }), { users: n2, hasPrimaryUid: t2 };
    }
    setPrimaryUid(e2) {
      return this._request.send("auth.setPrimaryUid", { uid: e2 });
    }
    unlink(e2) {
      return this._request.send("auth.unlink", { platform: e2 });
    }
    async update(e2) {
      const { nickName: t2, gender: n2, avatarUrl: s2, province: r2, country: i2, city: o2 } = e2, { data: a2 } = await this._request.send("auth.updateUserInfo", { nickName: t2, gender: n2, avatarUrl: s2, province: r2, country: i2, city: o2 });
      this.setLocalUserInfo(a2);
    }
    async refresh() {
      const { data: e2 } = await this._request.send("auth.getUserInfo", {});
      return this.setLocalUserInfo(e2), e2;
    }
    setUserInfo() {
      const { userInfoKey: e2 } = this._cache.keys, t2 = this._cache.getStore(e2);
      ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach((e3) => {
        this[e3] = t2[e3];
      }), this.location = { country: t2.country, province: t2.province, city: t2.city };
    }
    setLocalUserInfo(e2) {
      const { userInfoKey: t2 } = this._cache.keys;
      this._cache.setStore(t2, e2), this.setUserInfo();
    }
  }
  class et {
    constructor(e2) {
      if (!e2)
        throw new te({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._cache = Le(e2);
      const { refreshTokenKey: t2, accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys, r2 = this._cache.getStore(t2), i2 = this._cache.getStore(n2), o2 = this._cache.getStore(s2);
      this.credential = { refreshToken: r2, accessToken: i2, accessTokenExpire: o2 }, this.user = new Ze(e2);
    }
    get isAnonymousAuth() {
      return this.loginType === We.ANONYMOUS;
    }
    get isCustomAuth() {
      return this.loginType === We.CUSTOM;
    }
    get isWeixinAuth() {
      return this.loginType === We.WECHAT || this.loginType === We.WECHAT_OPEN || this.loginType === We.WECHAT_PUBLIC;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }
  class tt extends Xe {
    async signIn() {
      this._cache.updatePersistence("local");
      const { anonymousUuidKey: e2, refreshTokenKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e2) || void 0, s2 = this._cache.getStore(t2) || void 0, r2 = await this._request.send("auth.signInAnonymously", { anonymous_uuid: n2, refresh_token: s2 });
      if (r2.uuid && r2.refresh_token) {
        this._setAnonymousUUID(r2.uuid), this.setRefreshToken(r2.refresh_token), await this._request.refreshAccessToken(), Me(Fe), Me(je, { env: this.config.env, loginType: We.ANONYMOUS, persistence: "local" });
        const e3 = new et(this.config.env);
        return await e3.user.refresh(), e3;
      }
      throw new te({ message: "匿名登录失败" });
    }
    async linkAndRetrieveDataWithTicket(e2) {
      const { anonymousUuidKey: t2, refreshTokenKey: n2 } = this._cache.keys, s2 = this._cache.getStore(t2), r2 = this._cache.getStore(n2), i2 = await this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: s2, refresh_token: r2, ticket: e2 });
      if (i2.refresh_token)
        return this._clearAnonymousUUID(), this.setRefreshToken(i2.refresh_token), await this._request.refreshAccessToken(), Me($e, { env: this.config.env }), Me(je, { loginType: We.CUSTOM, persistence: "local" }), { credential: { refreshToken: i2.refresh_token } };
      throw new te({ message: "匿名转化失败" });
    }
    _setAnonymousUUID(e2) {
      const { anonymousUuidKey: t2, loginTypeKey: n2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.setStore(t2, e2), this._cache.setStore(n2, We.ANONYMOUS);
    }
    _clearAnonymousUUID() {
      this._cache.removeStore(this._cache.keys.anonymousUuidKey);
    }
  }
  class nt extends Xe {
    async signIn(e2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "ticket must be a string" });
      const { refreshTokenKey: t2 } = this._cache.keys, n2 = await this._request.send("auth.signInWithTicket", { ticket: e2, refresh_token: this._cache.getStore(t2) || "" });
      if (n2.refresh_token)
        return this.setRefreshToken(n2.refresh_token), await this._request.refreshAccessToken(), Me(Fe), Me(je, { env: this.config.env, loginType: We.CUSTOM, persistence: this.config.persistence }), await this.refreshUserInfo(), new et(this.config.env);
      throw new te({ message: "自定义登录失败" });
    }
  }
  class st extends Xe {
    async signIn(e2, t2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "email must be a string" });
      const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: "EMAIL", email: e2, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token: i2, access_token_expire: o2 } = s2;
      if (r2)
        return this.setRefreshToken(r2), i2 && o2 ? this.setAccessToken(i2, o2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), Me(Fe), Me(je, { env: this.config.env, loginType: We.EMAIL, persistence: this.config.persistence }), new et(this.config.env);
      throw s2.code ? new te({ code: s2.code, message: `邮箱登录失败: ${s2.message}` }) : new te({ message: "邮箱登录失败" });
    }
    async activate(e2) {
      return this._request.send("auth.activateEndUserMail", { token: e2 });
    }
    async resetPasswordWithToken(e2, t2) {
      return this._request.send("auth.resetPasswordWithToken", { token: e2, newPassword: t2 });
    }
  }
  class rt extends Xe {
    async signIn(e2, t2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "username must be a string" });
      "string" != typeof t2 && (t2 = "", console.warn("password is empty"));
      const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: We.USERNAME, username: e2, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token_expire: i2, access_token: o2 } = s2;
      if (r2)
        return this.setRefreshToken(r2), o2 && i2 ? this.setAccessToken(o2, i2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), Me(Fe), Me(je, { env: this.config.env, loginType: We.USERNAME, persistence: this.config.persistence }), new et(this.config.env);
      throw s2.code ? new te({ code: s2.code, message: `用户名密码登录失败: ${s2.message}` }) : new te({ message: "用户名密码登录失败" });
    }
  }
  class it {
    constructor(e2) {
      this.config = e2, this._cache = Le(e2.env), this._request = Qe(e2.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), De(je, this._onLoginTypeChanged);
    }
    get currentUser() {
      const e2 = this.hasLoginState();
      return e2 && e2.user || null;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
    anonymousAuthProvider() {
      return new tt(this.config);
    }
    customAuthProvider() {
      return new nt(this.config);
    }
    emailAuthProvider() {
      return new st(this.config);
    }
    usernameAuthProvider() {
      return new rt(this.config);
    }
    async signInAnonymously() {
      return new tt(this.config).signIn();
    }
    async signInWithEmailAndPassword(e2, t2) {
      return new st(this.config).signIn(e2, t2);
    }
    signInWithUsernameAndPassword(e2, t2) {
      return new rt(this.config).signIn(e2, t2);
    }
    async linkAndRetrieveDataWithTicket(e2) {
      this._anonymousAuthProvider || (this._anonymousAuthProvider = new tt(this.config)), De($e, this._onAnonymousConverted);
      return await this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e2);
    }
    async signOut() {
      if (this.loginType === We.ANONYMOUS)
        throw new te({ message: "匿名用户不支持登出操作" });
      const { refreshTokenKey: e2, accessTokenKey: t2, accessTokenExpireKey: n2 } = this._cache.keys, s2 = this._cache.getStore(e2);
      if (!s2)
        return;
      const r2 = await this._request.send("auth.logout", { refresh_token: s2 });
      return this._cache.removeStore(e2), this._cache.removeStore(t2), this._cache.removeStore(n2), Me(Fe), Me(je, { env: this.config.env, loginType: We.NULL, persistence: this.config.persistence }), r2;
    }
    async signUpWithEmailAndPassword(e2, t2) {
      return this._request.send("auth.signUpWithEmailAndPassword", { email: e2, password: t2 });
    }
    async sendPasswordResetEmail(e2) {
      return this._request.send("auth.sendPasswordResetEmail", { email: e2 });
    }
    onLoginStateChanged(e2) {
      De(Fe, () => {
        const t3 = this.hasLoginState();
        e2.call(this, t3);
      });
      const t2 = this.hasLoginState();
      e2.call(this, t2);
    }
    onLoginStateExpired(e2) {
      De(Ke, e2.bind(this));
    }
    onAccessTokenRefreshed(e2) {
      De(Be, e2.bind(this));
    }
    onAnonymousConverted(e2) {
      De($e, e2.bind(this));
    }
    onLoginTypeChanged(e2) {
      De(je, () => {
        const t2 = this.hasLoginState();
        e2.call(this, t2);
      });
    }
    async getAccessToken() {
      return { accessToken: (await this._request.getAccessToken()).accessToken, env: this.config.env };
    }
    hasLoginState() {
      const { refreshTokenKey: e2 } = this._cache.keys;
      return this._cache.getStore(e2) ? new et(this.config.env) : null;
    }
    async isUsernameRegistered(e2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "username must be a string" });
      const { data: t2 } = await this._request.send("auth.isUsernameRegistered", { username: e2 });
      return t2 && t2.isRegistered;
    }
    getLoginState() {
      return Promise.resolve(this.hasLoginState());
    }
    async signInWithTicket(e2) {
      return new nt(this.config).signIn(e2);
    }
    shouldRefreshAccessToken(e2) {
      this._request._shouldRefreshAccessTokenHook = e2.bind(this);
    }
    getUserInfo() {
      return this._request.send("auth.getUserInfo", {}).then((e2) => e2.code ? e2 : { ...e2.data, requestId: e2.seqId });
    }
    getAuthHeader() {
      const { refreshTokenKey: e2, accessTokenKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e2);
      return { "x-cloudbase-credentials": this._cache.getStore(t2) + "/@@/" + n2 };
    }
    _onAnonymousConverted(e2) {
      const { env: t2 } = e2.data;
      t2 === this.config.env && this._cache.updatePersistence(this.config.persistence);
    }
    _onLoginTypeChanged(e2) {
      const { loginType: t2, persistence: n2, env: s2 } = e2.data;
      s2 === this.config.env && (this._cache.updatePersistence(n2), this._cache.setStore(this._cache.keys.loginTypeKey, t2));
    }
  }
  const ot = function(e2, t2) {
    t2 = t2 || ve();
    const n2 = Qe(this.config.env), { cloudPath: s2, filePath: r2, onUploadProgress: i2, fileType: o2 = "image" } = e2;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e3) => {
      const { data: { url: a2, authorization: c2, token: u2, fileId: h2, cosFileId: l2 }, requestId: d2 } = e3, p2 = { key: s2, signature: c2, "x-cos-meta-fileid": l2, success_action_status: "201", "x-cos-security-token": u2 };
      n2.upload({ url: a2, data: p2, file: r2, name: s2, fileType: o2, onUploadProgress: i2 }).then((e4) => {
        201 === e4.statusCode ? t2(null, { fileID: h2, requestId: d2 }) : t2(new te({ code: "STORAGE_REQUEST_FAIL", message: `STORAGE_REQUEST_FAIL: ${e4.data}` }));
      }).catch((e4) => {
        t2(e4);
      });
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, at = function(e2, t2) {
    t2 = t2 || ve();
    const n2 = Qe(this.config.env), { cloudPath: s2 } = e2;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e3) => {
      t2(null, e3);
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, ct = function({ fileList: e2 }, t2) {
    if (t2 = t2 || ve(), !e2 || !Array.isArray(e2))
      return { code: "INVALID_PARAM", message: "fileList必须是非空的数组" };
    for (let t3 of e2)
      if (!t3 || "string" != typeof t3)
        return { code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" };
    const n2 = { fileid_list: e2 };
    return Qe(this.config.env).send("storage.batchDeleteFile", n2).then((e3) => {
      e3.code ? t2(null, e3) : t2(null, { fileList: e3.data.delete_list, requestId: e3.requestId });
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, ut = function({ fileList: e2 }, t2) {
    t2 = t2 || ve(), e2 && Array.isArray(e2) || t2(null, { code: "INVALID_PARAM", message: "fileList必须是非空的数组" });
    let n2 = [];
    for (let s3 of e2)
      "object" == typeof s3 ? (s3.hasOwnProperty("fileID") && s3.hasOwnProperty("maxAge") || t2(null, { code: "INVALID_PARAM", message: "fileList的元素必须是包含fileID和maxAge的对象" }), n2.push({ fileid: s3.fileID, max_age: s3.maxAge })) : "string" == typeof s3 ? n2.push({ fileid: s3 }) : t2(null, { code: "INVALID_PARAM", message: "fileList的元素必须是字符串" });
    const s2 = { file_list: n2 };
    return Qe(this.config.env).send("storage.batchGetDownloadUrl", s2).then((e3) => {
      e3.code ? t2(null, e3) : t2(null, { fileList: e3.data.download_list, requestId: e3.requestId });
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, ht = async function({ fileID: e2 }, t2) {
    const n2 = (await ut.call(this, { fileList: [{ fileID: e2, maxAge: 600 }] })).fileList[0];
    if ("SUCCESS" !== n2.code)
      return t2 ? t2(n2) : new Promise((e3) => {
        e3(n2);
      });
    const s2 = Qe(this.config.env);
    let r2 = n2.download_url;
    if (r2 = encodeURI(r2), !t2)
      return s2.download({ url: r2 });
    t2(await s2.download({ url: r2 }));
  }, lt = function({ name: e2, data: t2, query: n2, parse: s2, search: r2 }, i2) {
    const o2 = i2 || ve();
    let a2;
    try {
      a2 = t2 ? JSON.stringify(t2) : "";
    } catch (e3) {
      return Promise.reject(e3);
    }
    if (!e2)
      return Promise.reject(new te({ code: "PARAM_ERROR", message: "函数名不能为空" }));
    const c2 = { inQuery: n2, parse: s2, search: r2, function_name: e2, request_data: a2 };
    return Qe(this.config.env).send("functions.invokeFunction", c2).then((e3) => {
      if (e3.code)
        o2(null, e3);
      else {
        let t3 = e3.data.response_data;
        if (s2)
          o2(null, { result: t3, requestId: e3.requestId });
        else
          try {
            t3 = JSON.parse(e3.data.response_data), o2(null, { result: t3, requestId: e3.requestId });
          } catch (e4) {
            o2(new te({ message: "response data must be json" }));
          }
      }
      return o2.promise;
    }).catch((e3) => {
      o2(e3);
    }), o2.promise;
  }, dt = { timeout: 15e3, persistence: "session" }, pt = {};
  class ft {
    constructor(e2) {
      this.config = e2 || this.config, this.authObj = void 0;
    }
    init(e2) {
      switch (Ae.adapter || (this.requestClient = new Ae.adapter.reqClass({ timeout: e2.timeout || 5e3, timeoutMsg: `请求在${(e2.timeout || 5e3) / 1e3}s内未完成，已中断` })), this.config = { ...dt, ...e2 }, true) {
        case this.config.timeout > 6e5:
          console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;
          break;
        case this.config.timeout < 100:
          console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100;
      }
      return new ft(this.config);
    }
    auth({ persistence: e2 } = {}) {
      if (this.authObj)
        return this.authObj;
      const t2 = e2 || Ae.adapter.primaryStorage || dt.persistence;
      var n2;
      return t2 !== this.config.persistence && (this.config.persistence = t2), function(e3) {
        const { env: t3 } = e3;
        Oe[t3] = new xe(e3), Ee[t3] = new xe({ ...e3, persistence: "local" });
      }(this.config), n2 = this.config, Ye[n2.env] = new Ve(n2), this.authObj = new it(this.config), this.authObj;
    }
    on(e2, t2) {
      return De.apply(this, [e2, t2]);
    }
    off(e2, t2) {
      return qe.apply(this, [e2, t2]);
    }
    callFunction(e2, t2) {
      return lt.apply(this, [e2, t2]);
    }
    deleteFile(e2, t2) {
      return ct.apply(this, [e2, t2]);
    }
    getTempFileURL(e2, t2) {
      return ut.apply(this, [e2, t2]);
    }
    downloadFile(e2, t2) {
      return ht.apply(this, [e2, t2]);
    }
    uploadFile(e2, t2) {
      return ot.apply(this, [e2, t2]);
    }
    getUploadMetadata(e2, t2) {
      return at.apply(this, [e2, t2]);
    }
    registerExtension(e2) {
      pt[e2.name] = e2;
    }
    async invokeExtension(e2, t2) {
      const n2 = pt[e2];
      if (!n2)
        throw new te({ message: `扩展${e2} 必须先注册` });
      return await n2.invoke(t2, this);
    }
    useAdapters(e2) {
      const { adapter: t2, runtime: n2 } = ke(e2) || {};
      t2 && (Ae.adapter = t2), n2 && (Ae.runtime = n2);
    }
  }
  var gt = new ft();
  function mt(e2, t2, n2) {
    void 0 === n2 && (n2 = {});
    var s2 = /\?/.test(t2), r2 = "";
    for (var i2 in n2)
      "" === r2 ? !s2 && (t2 += "?") : r2 += "&", r2 += i2 + "=" + encodeURIComponent(n2[i2]);
    return /^http(s)?:\/\//.test(t2 += r2) ? t2 : "" + e2 + t2;
  }
  class yt {
    post(e2) {
      const { url: t2, data: n2, headers: s2 } = e2;
      return new Promise((e3, r2) => {
        ne.request({ url: mt("https:", t2), data: n2, method: "POST", header: s2, success(t3) {
          e3(t3);
        }, fail(e4) {
          r2(e4);
        } });
      });
    }
    upload(e2) {
      return new Promise((t2, n2) => {
        const { url: s2, file: r2, data: i2, headers: o2, fileType: a2 } = e2, c2 = ne.uploadFile({ url: mt("https:", s2), name: "file", formData: Object.assign({}, i2), filePath: r2, fileType: a2, header: o2, success(e3) {
          const n3 = { statusCode: e3.statusCode, data: e3.data || {} };
          200 === e3.statusCode && i2.success_action_status && (n3.statusCode = parseInt(i2.success_action_status, 10)), t2(n3);
        }, fail(e3) {
          n2(new Error(e3.errMsg || "uploadFile:fail"));
        } });
        "function" == typeof e2.onUploadProgress && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((t3) => {
          e2.onUploadProgress({ loaded: t3.totalBytesSent, total: t3.totalBytesExpectedToSend });
        });
      });
    }
  }
  const _t = { setItem(e2, t2) {
    ne.setStorageSync(e2, t2);
  }, getItem: (e2) => ne.getStorageSync(e2), removeItem(e2) {
    ne.removeStorageSync(e2);
  }, clear() {
    ne.clearStorageSync();
  } };
  var wt = { genAdapter: function() {
    return { root: {}, reqClass: yt, localStorage: _t, primaryStorage: "local" };
  }, isMatch: function() {
    return true;
  }, runtime: "uni_app" };
  gt.useAdapters(wt);
  const vt = gt, It = vt.init;
  vt.init = function(e2) {
    e2.env = e2.spaceId;
    const t2 = It.call(this, e2);
    t2.config.provider = "tencent", t2.config.spaceId = e2.spaceId;
    const n2 = t2.auth;
    return t2.auth = function(e3) {
      const t3 = n2.call(this, e3);
      return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach((e4) => {
        var n3;
        t3[e4] = (n3 = t3[e4], function(e5) {
          e5 = e5 || {};
          const { success: t4, fail: s2, complete: r2 } = ee(e5);
          if (!(t4 || s2 || r2))
            return n3.call(this, e5);
          n3.call(this, e5).then((e6) => {
            t4 && t4(e6), r2 && r2(e6);
          }, (e6) => {
            s2 && s2(e6), r2 && r2(e6);
          });
        }).bind(t3);
      }), t3;
    }, t2.customAuth = t2.auth, t2;
  };
  var St = vt;
  var bt = class extends de {
    getAccessToken() {
      return new Promise((e2, t2) => {
        const n2 = "Anonymous_Access_token";
        this.setAccessToken(n2), e2(n2);
      });
    }
    setupRequest(e2, t2) {
      const n2 = Object.assign({}, e2, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      "auth" !== t2 && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = le.sign(n2, this.config.clientSecret);
      const r2 = he();
      s2["x-client-info"] = encodeURIComponent(JSON.stringify(r2));
      const { token: i2 } = re();
      return s2["x-client-token"] = i2, { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: JSON.parse(JSON.stringify(s2)) };
    }
    uploadFileToOSS({ url: e2, formData: t2, name: n2, filePath: s2, fileType: r2, onUploadProgress: i2 }) {
      return new Promise((o2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e2, formData: t2, name: n2, filePath: s2, fileType: r2, success(e3) {
          e3 && e3.statusCode < 400 ? o2(e3) : a2(new te({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
        }, fail(e3) {
          a2(new te({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "文件上传失败" }));
        } });
        "function" == typeof i2 && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((e3) => {
          i2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
        });
      });
    }
    uploadFile({ filePath: e2, cloudPath: t2, fileType: n2 = "image", onUploadProgress: s2 }) {
      if (!t2)
        throw new te({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });
      let r2;
      return this.getOSSUploadOptionsFromPath({ cloudPath: t2 }).then((t3) => {
        const { url: i2, formData: o2, name: a2 } = t3.result;
        r2 = t3.result.fileUrl;
        const c2 = { url: i2, formData: o2, name: a2, filePath: e2, fileType: n2 };
        return this.uploadFileToOSS(Object.assign({}, c2, { onUploadProgress: s2 }));
      }).then(() => this.reportOSSUpload({ cloudPath: t2 })).then((t3) => new Promise((n3, s3) => {
        t3.success ? n3({ success: true, filePath: e2, fileID: r2 }) : s3(new te({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
      }));
    }
    deleteFile({ fileList: e2 }) {
      const t2 = { method: "serverless.file.resource.delete", params: JSON.stringify({ fileList: e2 }) };
      return this.request(this.setupRequest(t2)).then((e3) => {
        if (e3.success)
          return e3.result;
        throw new te({ code: "DELETE_FILE_FAILED", message: "删除文件失败" });
      });
    }
    getTempFileURL({ fileList: e2, maxAge: t2 } = {}) {
      if (!Array.isArray(e2) || 0 === e2.length)
        throw new te({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" });
      const n2 = { method: "serverless.file.resource.getTempFileURL", params: JSON.stringify({ fileList: e2, maxAge: t2 }) };
      return this.request(this.setupRequest(n2)).then((e3) => {
        if (e3.success)
          return { fileList: e3.result.fileList.map((e4) => ({ fileID: e4.fileID, tempFileURL: e4.tempFileURL })) };
        throw new te({ code: "GET_TEMP_FILE_URL_FAILED", message: "获取临时文件链接失败" });
      });
    }
  };
  var kt = { init(e2) {
    const t2 = new bt(e2), n2 = { signInAnonymously: function() {
      return t2.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } }, At = n(function(e2, t2) {
    e2.exports = r.enc.Hex;
  });
  function Pt(e2 = "", t2 = {}) {
    const { data: n2, functionName: s2, method: r2, headers: i2, signHeaderKeys: o2 = [], config: a2 } = t2, c2 = Date.now(), u2 = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e3) {
      var t3 = 16 * Math.random() | 0;
      return ("x" === e3 ? t3 : 3 & t3 | 8).toString(16);
    }), h2 = Object.assign({}, i2, { "x-from-app-id": a2.spaceAppId, "x-from-env-id": a2.spaceId, "x-to-env-id": a2.spaceId, "x-from-instance-id": c2, "x-from-function-name": s2, "x-client-timestamp": c2, "x-alipay-source": "client", "x-request-id": u2, "x-alipay-callid": u2, "x-trace-id": u2 }), l2 = ["x-from-app-id", "x-from-env-id", "x-to-env-id", "x-from-instance-id", "x-from-function-name", "x-client-timestamp"].concat(o2), [d2 = "", p2 = ""] = e2.split("?") || [], f2 = function(e3) {
      const t3 = e3.signedHeaders.join(";"), n3 = e3.signedHeaders.map((t4) => `${t4.toLowerCase()}:${e3.headers[t4]}
`).join(""), s3 = _e(e3.body).toString(At), r3 = `${e3.method.toUpperCase()}
${e3.path}
${e3.query}
${n3}
${t3}
${s3}
`, i3 = _e(r3).toString(At), o3 = `HMAC-SHA256
${e3.timestamp}
${i3}
`, a3 = we(o3, e3.secretKey).toString(At);
      return `HMAC-SHA256 Credential=${e3.secretId}, SignedHeaders=${t3}, Signature=${a3}`;
    }({ path: d2, query: p2, method: r2, headers: h2, timestamp: c2, body: JSON.stringify(n2), secretId: a2.accessKey, secretKey: a2.secretKey, signedHeaders: l2.sort() });
    return { url: `${a2.endpoint}${e2}`, headers: Object.assign({}, h2, { Authorization: f2 }) };
  }
  function Tt({ url: e2, data: t2, method: n2 = "POST", headers: s2 = {} }) {
    return new Promise((r2, i2) => {
      ne.request({ url: e2, method: n2, data: t2, header: s2, dataType: "json", complete: (e3 = {}) => {
        const t3 = s2["x-trace-id"] || "";
        if (!e3.statusCode || e3.statusCode >= 400) {
          const { message: n3, errMsg: s3, trace_id: r3 } = e3.data || {};
          return i2(new te({ code: "SYS_ERR", message: n3 || s3 || "request:fail", requestId: r3 || t3 }));
        }
        r2({ status: e3.statusCode, data: e3.data, headers: e3.header, requestId: t3 });
      } });
    });
  }
  function Ct(e2, t2) {
    const { path: n2, data: s2, method: r2 = "GET" } = e2, { url: i2, headers: o2 } = Pt(n2, { functionName: "", data: s2, method: r2, headers: { "x-alipay-cloud-mode": "oss", "x-data-api-type": "oss", "x-expire-timestamp": Date.now() + 6e4 }, signHeaderKeys: ["x-data-api-type", "x-expire-timestamp"], config: t2 });
    return Tt({ url: i2, data: s2, method: r2, headers: o2 }).then((e3) => {
      const t3 = e3.data || {};
      if (!t3.success)
        throw new te({ code: e3.errCode, message: e3.errMsg, requestId: e3.requestId });
      return t3.data || {};
    }).catch((e3) => {
      throw new te({ code: e3.errCode, message: e3.errMsg, requestId: e3.requestId });
    });
  }
  function xt(e2 = "") {
    const t2 = e2.trim().replace(/^cloud:\/\//, ""), n2 = t2.indexOf("/");
    if (n2 <= 0)
      throw new te({ code: "INVALID_PARAM", message: "fileID不合法" });
    const s2 = t2.substring(0, n2), r2 = t2.substring(n2 + 1);
    return s2 !== this.config.spaceId && console.warn("file ".concat(e2, " does not belong to env ").concat(this.config.spaceId)), r2;
  }
  function Ot(e2 = "") {
    return "cloud://".concat(this.config.spaceId, "/").concat(e2.replace(/^\/+/, ""));
  }
  var Et = class {
    constructor(e2) {
      if (["spaceId", "spaceAppId", "accessKey", "secretKey"].forEach((t2) => {
        if (!Object.prototype.hasOwnProperty.call(e2, t2))
          throw new Error(`${t2} required`);
      }), e2.endpoint) {
        if ("string" != typeof e2.endpoint)
          throw new Error("endpoint must be string");
        if (!/^https:\/\//.test(e2.endpoint))
          throw new Error("endpoint must start with https://");
        e2.endpoint = e2.endpoint.replace(/\/$/, "");
      }
      this.config = Object.assign({}, e2, { endpoint: e2.endpoint || `https://${e2.spaceId}.api-hz.cloudbasefunction.cn` });
    }
    callFunction(e2) {
      return function(e3, t2) {
        const { name: n2, data: s2 } = e3, r2 = "POST", { url: i2, headers: o2 } = Pt("/functions/invokeFunction", { functionName: n2, data: s2, method: r2, headers: { "x-to-function-name": n2 }, signHeaderKeys: ["x-to-function-name"], config: t2 });
        return Tt({ url: i2, data: s2, method: r2, headers: o2 }).then((e4) => ({ errCode: 0, success: true, requestId: e4.requestId, result: e4.data })).catch((e4) => {
          throw new te({ code: e4.errCode, message: e4.errMsg, requestId: e4.requestId });
        });
      }(e2, this.config);
    }
    uploadFileToOSS({ url: e2, filePath: t2, fileType: n2, formData: s2, onUploadProgress: r2 }) {
      return new Promise((i2, o2) => {
        const a2 = ne.uploadFile({ url: e2, filePath: t2, fileType: n2, formData: s2, name: "file", success(e3) {
          e3 && e3.statusCode < 400 ? i2(e3) : o2(new te({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
        }, fail(e3) {
          o2(new te({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "文件上传失败" }));
        } });
        "function" == typeof r2 && a2 && "function" == typeof a2.onProgressUpdate && a2.onProgressUpdate((e3) => {
          r2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
        });
      });
    }
    async uploadFile({ filePath: e2, cloudPath: t2 = "", fileType: n2 = "image", onUploadProgress: s2 }) {
      if ("string" !== f(t2))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath必须为字符串类型" });
      if (!(t2 = t2.trim()))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath不可为空" });
      if (/:\/\//.test(t2))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath不合法" });
      const r2 = await Ct({ path: "/".concat(t2.replace(/^\//, ""), "?post_url") }, this.config), { file_id: i2, upload_url: o2, form_data: a2 } = r2, c2 = a2 && a2.reduce((e3, t3) => (e3[t3.key] = t3.value, e3), {});
      return this.uploadFileToOSS({ url: o2, filePath: e2, fileType: n2, formData: c2, onUploadProgress: s2 }).then(() => ({ fileID: i2 }));
    }
    async getTempFileURL({ fileList: e2 }) {
      return new Promise((t2, n2) => {
        (!e2 || e2.length < 0) && n2(new te({ errCode: "INVALID_PARAM", errMsg: "fileList不能为空数组" })), e2.length > 50 && n2(new te({ errCode: "INVALID_PARAM", errMsg: "fileList数组长度不能超过50" }));
        const s2 = [];
        for (const t3 of e2) {
          "string" !== f(t3) && n2(new te({ errCode: "INVALID_PARAM", errMsg: "fileList的元素必须是非空的字符串" }));
          const e3 = xt.call(this, t3);
          s2.push({ file_id: e3, expire: 600 });
        }
        Ct({ path: "/?download_url", data: { file_list: s2 }, method: "POST" }, this.config).then((e3) => {
          const { file_list: n3 = [] } = e3;
          t2({ fileList: n3.map((e4) => ({ fileID: Ot.call(this, e4.file_id), tempFileURL: e4.download_url })) });
        }).catch((e3) => n2(e3));
      });
    }
  };
  var Lt = { init: (e2) => {
    e2.provider = "alipay";
    const t2 = new Et(e2);
    return t2.auth = function() {
      return { signInAnonymously: function() {
        return Promise.resolve();
      }, getLoginState: function() {
        return Promise.resolve(true);
      } };
    }, t2;
  } };
  function Rt({ data: e2 }) {
    let t2;
    t2 = he();
    const n2 = JSON.parse(JSON.stringify(e2 || {}));
    if (Object.assign(n2, { clientInfo: t2 }), !n2.uniIdToken) {
      const { token: e3 } = re();
      e3 && (n2.uniIdToken = e3);
    }
    return n2;
  }
  async function Ut({ name: e2, data: t2 } = {}) {
    await this.__dev__.initLocalNetwork();
    const { localAddress: n2, localPort: s2 } = this.__dev__, r2 = { aliyun: "aliyun", tencent: "tcb", alipay: "alipay" }[this.config.provider], i2 = this.config.spaceId, o2 = `http://${n2}:${s2}/system/check-function`, a2 = `http://${n2}:${s2}/cloudfunctions/${e2}`;
    return new Promise((t3, n3) => {
      ne.request({ method: "POST", url: o2, data: { name: e2, platform: P, provider: r2, spaceId: i2 }, timeout: 3e3, success(e3) {
        t3(e3);
      }, fail() {
        t3({ data: { code: "NETWORK_ERROR", message: "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下，自动切换为已部署的云函数。" } });
      } });
    }).then(({ data: e3 } = {}) => {
      const { code: t3, message: n3 } = e3 || {};
      return { code: 0 === t3 ? 0 : t3 || "SYS_ERR", message: n3 || "SYS_ERR" };
    }).then(({ code: n3, message: s3 }) => {
      if (0 !== n3) {
        switch (n3) {
          case "MODULE_ENCRYPTED":
            console.error(`此云函数（${e2}）依赖加密公共模块不可本地调试，自动切换为云端已部署的云函数`);
            break;
          case "FUNCTION_ENCRYPTED":
            console.error(`此云函数（${e2}）已加密不可本地调试，自动切换为云端已部署的云函数`);
            break;
          case "ACTION_ENCRYPTED":
            console.error(s3 || "需要访问加密的uni-clientDB-action，自动切换为云端环境");
            break;
          case "NETWORK_ERROR": {
            const e3 = "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下";
            throw console.error(e3), new Error(e3);
          }
          case "SWITCH_TO_CLOUD":
            break;
          default: {
            const e3 = `检测本地调试服务出现错误：${s3}，请检查网络环境或重启客户端再试`;
            throw console.error(e3), new Error(e3);
          }
        }
        return this._callCloudFunction({ name: e2, data: t2 });
      }
      return new Promise((e3, n4) => {
        const s4 = Rt.call(this, { data: t2 });
        ne.request({ method: "POST", url: a2, data: { provider: r2, platform: P, param: s4 }, success: ({ statusCode: t3, data: s5 } = {}) => !t3 || t3 >= 400 ? n4(new te({ code: s5.code || "SYS_ERR", message: s5.message || "request:fail" })) : e3({ result: s5 }), fail(e4) {
          n4(new te({ code: e4.code || e4.errCode || "SYS_ERR", message: e4.message || e4.errMsg || "request:fail" }));
        } });
      });
    });
  }
  const Nt = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间", mode: "append" }];
  var Dt = /[\\^$.*+?()[\]{}|]/g, Mt = RegExp(Dt.source);
  function qt(e2, t2, n2) {
    return e2.replace(new RegExp((s2 = t2) && Mt.test(s2) ? s2.replace(Dt, "\\$&") : s2, "g"), n2);
    var s2;
  }
  const Kt = "request", jt = "response", $t = "both";
  const An = { code: 2e4, message: "System error" }, Pn = { code: 20101, message: "Invalid client" };
  function xn(e2) {
    const { errSubject: t2, subject: n2, errCode: s2, errMsg: r2, code: i2, message: o2, cause: a2 } = e2 || {};
    return new te({ subject: t2 || n2 || "uni-secure-network", code: s2 || i2 || An.code, message: r2 || o2, cause: a2 });
  }
  let En;
  function Dn({ secretType: e2 } = {}) {
    return e2 === Kt || e2 === jt || e2 === $t;
  }
  function Mn({ name: e2, data: t2 = {} } = {}) {
    return "DCloud-clientDB" === e2 && "encryption" === t2.redirectTo && "getAppClientKey" === t2.action;
  }
  function qn({ provider: e2, spaceId: t2, functionName: n2 } = {}) {
    const { appId: s2, uniPlatform: r2, osName: i2 } = ce();
    let o2 = r2;
    "app" === r2 && (o2 = i2);
    const a2 = function({ provider: e3, spaceId: t3 } = {}) {
      const n3 = A;
      if (!n3)
        return {};
      e3 = /* @__PURE__ */ function(e4) {
        return "tencent" === e4 ? "tcb" : e4;
      }(e3);
      const s3 = n3.find((n4) => n4.provider === e3 && n4.spaceId === t3);
      return s3 && s3.config;
    }({ provider: e2, spaceId: t2 });
    if (!a2 || !a2.accessControl || !a2.accessControl.enable)
      return false;
    const c2 = a2.accessControl.function || {}, u2 = Object.keys(c2);
    if (0 === u2.length)
      return true;
    const h2 = function(e3, t3) {
      let n3, s3, r3;
      for (let i3 = 0; i3 < e3.length; i3++) {
        const o3 = e3[i3];
        o3 !== t3 ? "*" !== o3 ? o3.split(",").map((e4) => e4.trim()).indexOf(t3) > -1 && (s3 = o3) : r3 = o3 : n3 = o3;
      }
      return n3 || s3 || r3;
    }(u2, n2);
    if (!h2)
      return false;
    if ((c2[h2] || []).find((e3 = {}) => e3.appId === s2 && (e3.platform || "").toLowerCase() === o2.toLowerCase()))
      return true;
    throw console.error(`此应用[appId: ${s2}, platform: ${o2}]不在云端配置的允许访问的应用列表内，参考：https://uniapp.dcloud.net.cn/uniCloud/secure-network.html#verify-client`), xn(Pn);
  }
  function Fn({ functionName: e2, result: t2, logPvd: n2 }) {
    if (this.__dev__.debugLog && t2 && t2.requestId) {
      const s2 = JSON.stringify({ spaceId: this.config.spaceId, functionName: e2, requestId: t2.requestId });
      console.log(`[${n2}-request]${s2}[/${n2}-request]`);
    }
  }
  function Kn(e2) {
    const t2 = e2.callFunction, n2 = function(n3) {
      const s2 = n3.name;
      n3.data = Rt.call(e2, { data: n3.data });
      const r2 = { aliyun: "aliyun", tencent: "tcb", tcb: "tcb", alipay: "alipay" }[this.config.provider], i2 = Dn(n3), o2 = Mn(n3), a2 = i2 || o2;
      return t2.call(this, n3).then((e3) => (e3.errCode = 0, !a2 && Fn.call(this, { functionName: s2, result: e3, logPvd: r2 }), Promise.resolve(e3)), (e3) => (!a2 && Fn.call(this, { functionName: s2, result: e3, logPvd: r2 }), e3 && e3.message && (e3.message = function({ message: e4 = "", extraInfo: t3 = {}, formatter: n4 = [] } = {}) {
        for (let s3 = 0; s3 < n4.length; s3++) {
          const { rule: r3, content: i3, mode: o3 } = n4[s3], a3 = e4.match(r3);
          if (!a3)
            continue;
          let c2 = i3;
          for (let e5 = 1; e5 < a3.length; e5++)
            c2 = qt(c2, `{$${e5}}`, a3[e5]);
          for (const e5 in t3)
            c2 = qt(c2, `{${e5}}`, t3[e5]);
          return "replace" === o3 ? c2 : e4 + c2;
        }
        return e4;
      }({ message: `[${n3.name}]: ${e3.message}`, formatter: Nt, extraInfo: { functionName: s2 } })), Promise.reject(e3)));
    };
    e2.callFunction = function(t3) {
      const { provider: s2, spaceId: r2 } = e2.config, i2 = t3.name;
      let o2, a2;
      if (t3.data = t3.data || {}, e2.__dev__.debugInfo && !e2.__dev__.debugInfo.forceRemote && C ? (e2._callCloudFunction || (e2._callCloudFunction = n2, e2._callLocalFunction = Ut), o2 = Ut) : o2 = n2, o2 = o2.bind(e2), Mn(t3))
        a2 = n2.call(e2, t3);
      else if (Dn(t3)) {
        a2 = new En({ secretType: t3.secretType, uniCloudIns: e2 }).wrapEncryptDataCallFunction(n2.bind(e2))(t3);
      } else if (qn({ provider: s2, spaceId: r2, functionName: i2 })) {
        a2 = new En({ secretType: t3.secretType, uniCloudIns: e2 }).wrapVerifyClientCallFunction(n2.bind(e2))(t3);
      } else
        a2 = o2(t3);
      return Object.defineProperty(a2, "result", { get: () => (console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {}) }), a2.then((e3) => ("undefined" != typeof UTSJSONObject && (e3.result = new UTSJSONObject(e3.result)), e3));
    };
  }
  En = class {
    constructor() {
      throw xn({ message: `Platform ${P} is not enabled, please check whether secure network module is enabled in your manifest.json` });
    }
  };
  const jn = Symbol("CLIENT_DB_INTERNAL");
  function $n(e2, t2) {
    return e2.then = "DoNotReturnProxyWithAFunctionNamedThen", e2._internalType = jn, e2.inspect = null, e2.__v_raw = void 0, new Proxy(e2, { get(e3, n2, s2) {
      if ("_uniClient" === n2)
        return null;
      if ("symbol" == typeof n2)
        return e3[n2];
      if (n2 in e3 || "string" != typeof n2) {
        const t3 = e3[n2];
        return "function" == typeof t3 ? t3.bind(e3) : t3;
      }
      return t2.get(e3, n2, s2);
    } });
  }
  function Bn(e2) {
    return { on: (t2, n2) => {
      e2[t2] = e2[t2] || [], e2[t2].indexOf(n2) > -1 || e2[t2].push(n2);
    }, off: (t2, n2) => {
      e2[t2] = e2[t2] || [];
      const s2 = e2[t2].indexOf(n2);
      -1 !== s2 && e2[t2].splice(s2, 1);
    } };
  }
  const Wn = ["db.Geo", "db.command", "command.aggregate"];
  function Hn(e2, t2) {
    return Wn.indexOf(`${e2}.${t2}`) > -1;
  }
  function zn(e2) {
    switch (f(e2 = se(e2))) {
      case "array":
        return e2.map((e3) => zn(e3));
      case "object":
        return e2._internalType === jn || Object.keys(e2).forEach((t2) => {
          e2[t2] = zn(e2[t2]);
        }), e2;
      case "regexp":
        return { $regexp: { source: e2.source, flags: e2.flags } };
      case "date":
        return { $date: e2.toISOString() };
      default:
        return e2;
    }
  }
  function Jn(e2) {
    return e2 && e2.content && e2.content.$method;
  }
  class Gn {
    constructor(e2, t2, n2) {
      this.content = e2, this.prevStage = t2 || null, this.udb = null, this._database = n2;
    }
    toJSON() {
      let e2 = this;
      const t2 = [e2.content];
      for (; e2.prevStage; )
        e2 = e2.prevStage, t2.push(e2.content);
      return { $db: t2.reverse().map((e3) => ({ $method: e3.$method, $param: zn(e3.$param) })) };
    }
    toString() {
      return JSON.stringify(this.toJSON());
    }
    getAction() {
      const e2 = this.toJSON().$db.find((e3) => "action" === e3.$method);
      return e2 && e2.$param && e2.$param[0];
    }
    getCommand() {
      return { $db: this.toJSON().$db.filter((e2) => "action" !== e2.$method) };
    }
    get isAggregate() {
      let e2 = this;
      for (; e2; ) {
        const t2 = Jn(e2), n2 = Jn(e2.prevStage);
        if ("aggregate" === t2 && "collection" === n2 || "pipeline" === t2)
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    get isCommand() {
      let e2 = this;
      for (; e2; ) {
        if ("command" === Jn(e2))
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    get isAggregateCommand() {
      let e2 = this;
      for (; e2; ) {
        const t2 = Jn(e2), n2 = Jn(e2.prevStage);
        if ("aggregate" === t2 && "command" === n2)
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    getNextStageFn(e2) {
      const t2 = this;
      return function() {
        return Vn({ $method: e2, $param: zn(Array.from(arguments)) }, t2, t2._database);
      };
    }
    get count() {
      return this.isAggregate ? this.getNextStageFn("count") : function() {
        return this._send("count", Array.from(arguments));
      };
    }
    get remove() {
      return this.isCommand ? this.getNextStageFn("remove") : function() {
        return this._send("remove", Array.from(arguments));
      };
    }
    get() {
      return this._send("get", Array.from(arguments));
    }
    get add() {
      return this.isCommand ? this.getNextStageFn("add") : function() {
        return this._send("add", Array.from(arguments));
      };
    }
    update() {
      return this._send("update", Array.from(arguments));
    }
    end() {
      return this._send("end", Array.from(arguments));
    }
    get set() {
      return this.isCommand ? this.getNextStageFn("set") : function() {
        throw new Error("JQL禁止使用set方法");
      };
    }
    _send(e2, t2) {
      const n2 = this.getAction(), s2 = this.getCommand();
      if (s2.$db.push({ $method: e2, $param: zn(t2) }), S) {
        const e3 = s2.$db.find((e4) => "collection" === e4.$method), t3 = e3 && e3.$param;
        t3 && 1 === t3.length && "string" == typeof e3.$param[0] && e3.$param[0].indexOf(",") > -1 && console.warn("检测到使用JQL语法联表查询时，未使用getTemp先过滤主表数据，在主表数据量大的情况下可能会查询缓慢。\n- 如何优化请参考此文档：https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp \n- 如果主表数据量很小请忽略此信息，项目发行时不会出现此提示。");
      }
      return this._database._callCloudFunction({ action: n2, command: s2 });
    }
  }
  function Vn(e2, t2, n2) {
    return $n(new Gn(e2, t2, n2), { get(e3, t3) {
      let s2 = "db";
      return e3 && e3.content && (s2 = e3.content.$method), Hn(s2, t3) ? Vn({ $method: t3 }, e3, n2) : function() {
        return Vn({ $method: t3, $param: zn(Array.from(arguments)) }, e3, n2);
      };
    } });
  }
  function Yn({ path: e2, method: t2 }) {
    return class {
      constructor() {
        this.param = Array.from(arguments);
      }
      toJSON() {
        return { $newDb: [...e2.map((e3) => ({ $method: e3 })), { $method: t2, $param: this.param }] };
      }
      toString() {
        return JSON.stringify(this.toJSON());
      }
    };
  }
  function Qn(e2, t2 = {}) {
    return $n(new e2(t2), { get: (e3, t3) => Hn("db", t3) ? Vn({ $method: t3 }, null, e3) : function() {
      return Vn({ $method: t3, $param: zn(Array.from(arguments)) }, null, e3);
    } });
  }
  class Xn extends class {
    constructor({ uniClient: e2 = {}, isJQL: t2 = false } = {}) {
      this._uniClient = e2, this._authCallBacks = {}, this._dbCallBacks = {}, e2._isDefault && (this._dbCallBacks = L("_globalUniCloudDatabaseCallback")), t2 || (this.auth = Bn(this._authCallBacks)), this._isJQL = t2, Object.assign(this, Bn(this._dbCallBacks)), this.env = $n({}, { get: (e3, t3) => ({ $env: t3 }) }), this.Geo = $n({}, { get: (e3, t3) => Yn({ path: ["Geo"], method: t3 }) }), this.serverDate = Yn({ path: [], method: "serverDate" }), this.RegExp = Yn({ path: [], method: "RegExp" });
    }
    getCloudEnv(e2) {
      if ("string" != typeof e2 || !e2.trim())
        throw new Error("getCloudEnv参数错误");
      return { $env: e2.replace("$cloudEnv_", "") };
    }
    _callback(e2, t2) {
      const n2 = this._dbCallBacks;
      n2[e2] && n2[e2].forEach((e3) => {
        e3(...t2);
      });
    }
    _callbackAuth(e2, t2) {
      const n2 = this._authCallBacks;
      n2[e2] && n2[e2].forEach((e3) => {
        e3(...t2);
      });
    }
    multiSend() {
      const e2 = Array.from(arguments), t2 = e2.map((e3) => {
        const t3 = e3.getAction(), n2 = e3.getCommand();
        if ("getTemp" !== n2.$db[n2.$db.length - 1].$method)
          throw new Error("multiSend只支持子命令内使用getTemp");
        return { action: t3, command: n2 };
      });
      return this._callCloudFunction({ multiCommand: t2, queryList: e2 });
    }
  } {
    _parseResult(e2) {
      return this._isJQL ? e2.result : e2;
    }
    _callCloudFunction({ action: e2, command: t2, multiCommand: n2, queryList: s2 }) {
      function r2(e3, t3) {
        if (n2 && s2)
          for (let n3 = 0; n3 < s2.length; n3++) {
            const r3 = s2[n3];
            r3.udb && "function" == typeof r3.udb.setResult && (t3 ? r3.udb.setResult(t3) : r3.udb.setResult(e3.result.dataList[n3]));
          }
      }
      const i2 = this, o2 = this._isJQL ? "databaseForJQL" : "database";
      function a2(e3) {
        return i2._callback("error", [e3]), M(q(o2, "fail"), e3).then(() => M(q(o2, "complete"), e3)).then(() => (r2(null, e3), Y(j, { type: W, content: e3 }), Promise.reject(e3)));
      }
      const c2 = M(q(o2, "invoke")), u2 = this._uniClient;
      return c2.then(() => u2.callFunction({ name: "DCloud-clientDB", type: h, data: { action: e2, command: t2, multiCommand: n2 } })).then((e3) => {
        const { code: t3, message: n3, token: s3, tokenExpired: c3, systemInfo: u3 = [] } = e3.result;
        if (u3)
          for (let e4 = 0; e4 < u3.length; e4++) {
            const { level: t4, message: n4, detail: s4 } = u3[e4], r3 = console["warn" === t4 ? "error" : t4] || console.log;
            let i3 = "[System Info]" + n4;
            s4 && (i3 = `${i3}
详细信息：${s4}`), r3(i3);
          }
        if (t3) {
          return a2(new te({ code: t3, message: n3, requestId: e3.requestId }));
        }
        e3.result.errCode = e3.result.errCode || e3.result.code, e3.result.errMsg = e3.result.errMsg || e3.result.message, s3 && c3 && (ie({ token: s3, tokenExpired: c3 }), this._callbackAuth("refreshToken", [{ token: s3, tokenExpired: c3 }]), this._callback("refreshToken", [{ token: s3, tokenExpired: c3 }]), Y(B, { token: s3, tokenExpired: c3 }));
        const h2 = [{ prop: "affectedDocs", tips: "affectedDocs不再推荐使用，请使用inserted/deleted/updated/data.length替代" }, { prop: "code", tips: "code不再推荐使用，请使用errCode替代" }, { prop: "message", tips: "message不再推荐使用，请使用errMsg替代" }];
        for (let t4 = 0; t4 < h2.length; t4++) {
          const { prop: n4, tips: s4 } = h2[t4];
          if (n4 in e3.result) {
            const t5 = e3.result[n4];
            Object.defineProperty(e3.result, n4, { get: () => (console.warn(s4), t5) });
          }
        }
        return function(e4) {
          return M(q(o2, "success"), e4).then(() => M(q(o2, "complete"), e4)).then(() => {
            r2(e4, null);
            const t4 = i2._parseResult(e4);
            return Y(j, { type: W, content: t4 }), Promise.resolve(t4);
          });
        }(e3);
      }, (e3) => {
        /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e3.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB");
        return a2(new te({ code: e3.code || "SYSTEM_ERROR", message: e3.message, requestId: e3.requestId }));
      });
    }
  }
  const Zn = "token无效，跳转登录页面", es = "token过期，跳转登录页面", ts = { TOKEN_INVALID_TOKEN_EXPIRED: es, TOKEN_INVALID_INVALID_CLIENTID: Zn, TOKEN_INVALID: Zn, TOKEN_INVALID_WRONG_TOKEN: Zn, TOKEN_INVALID_ANONYMOUS_USER: Zn }, ns = { "uni-id-token-expired": es, "uni-id-check-token-failed": Zn, "uni-id-token-not-exist": Zn, "uni-id-check-device-feature-failed": Zn };
  function ss(e2, t2) {
    let n2 = "";
    return n2 = e2 ? `${e2}/${t2}` : t2, n2.replace(/^\//, "");
  }
  function rs(e2 = [], t2 = "") {
    const n2 = [], s2 = [];
    return e2.forEach((e3) => {
      true === e3.needLogin ? n2.push(ss(t2, e3.path)) : false === e3.needLogin && s2.push(ss(t2, e3.path));
    }), { needLoginPage: n2, notNeedLoginPage: s2 };
  }
  function is(e2) {
    return e2.split("?")[0].replace(/^\//, "");
  }
  function os() {
    return function(e2) {
      let t2 = e2 && e2.$page && e2.$page.fullPath || "";
      return t2 ? ("/" !== t2.charAt(0) && (t2 = "/" + t2), t2) : t2;
    }(function() {
      const e2 = getCurrentPages();
      return e2[e2.length - 1];
    }());
  }
  function as() {
    return is(os());
  }
  function cs(e2 = "", t2 = {}) {
    if (!e2)
      return false;
    if (!(t2 && t2.list && t2.list.length))
      return false;
    const n2 = t2.list, s2 = is(e2);
    return n2.some((e3) => e3.pagePath === s2);
  }
  const us = !!e.uniIdRouter;
  const { loginPage: hs, routerNeedLogin: ls, resToLogin: ds, needLoginPage: ps, notNeedLoginPage: fs, loginPageInTabBar: gs } = function({ pages: t2 = [], subPackages: n2 = [], uniIdRouter: s2 = {}, tabBar: r2 = {} } = e) {
    const { loginPage: i2, needLogin: o2 = [], resToLogin: a2 = true } = s2, { needLoginPage: c2, notNeedLoginPage: u2 } = rs(t2), { needLoginPage: h2, notNeedLoginPage: l2 } = function(e2 = []) {
      const t3 = [], n3 = [];
      return e2.forEach((e3) => {
        const { root: s3, pages: r3 = [] } = e3, { needLoginPage: i3, notNeedLoginPage: o3 } = rs(r3, s3);
        t3.push(...i3), n3.push(...o3);
      }), { needLoginPage: t3, notNeedLoginPage: n3 };
    }(n2);
    return { loginPage: i2, routerNeedLogin: o2, resToLogin: a2, needLoginPage: [...c2, ...h2], notNeedLoginPage: [...u2, ...l2], loginPageInTabBar: cs(i2, r2) };
  }();
  if (ps.indexOf(hs) > -1)
    throw new Error(`Login page [${hs}] should not be "needLogin", please check your pages.json`);
  function ms(e2) {
    const t2 = as();
    if ("/" === e2.charAt(0))
      return e2;
    const [n2, s2] = e2.split("?"), r2 = n2.replace(/^\//, "").split("/"), i2 = t2.split("/");
    i2.pop();
    for (let e3 = 0; e3 < r2.length; e3++) {
      const t3 = r2[e3];
      ".." === t3 ? i2.pop() : "." !== t3 && i2.push(t3);
    }
    return "" === i2[0] && i2.shift(), "/" + i2.join("/") + (s2 ? "?" + s2 : "");
  }
  function ys(e2) {
    const t2 = is(ms(e2));
    return !(fs.indexOf(t2) > -1) && (ps.indexOf(t2) > -1 || ls.some((t3) => function(e3, t4) {
      return new RegExp(t4).test(e3);
    }(e2, t3)));
  }
  function _s({ redirect: e2 }) {
    const t2 = is(e2), n2 = is(hs);
    return as() !== n2 && t2 !== n2;
  }
  function ws({ api: e2, redirect: t2 } = {}) {
    if (!t2 || !_s({ redirect: t2 }))
      return;
    const n2 = function(e3, t3) {
      return "/" !== e3.charAt(0) && (e3 = "/" + e3), t3 ? e3.indexOf("?") > -1 ? e3 + `&uniIdRedirectUrl=${encodeURIComponent(t3)}` : e3 + `?uniIdRedirectUrl=${encodeURIComponent(t3)}` : e3;
    }(hs, t2);
    gs ? "navigateTo" !== e2 && "redirectTo" !== e2 || (e2 = "switchTab") : "switchTab" === e2 && (e2 = "navigateTo");
    const s2 = { navigateTo: uni.navigateTo, redirectTo: uni.redirectTo, switchTab: uni.switchTab, reLaunch: uni.reLaunch };
    setTimeout(() => {
      s2[e2]({ url: n2 });
    }, 0);
  }
  function vs({ url: e2 } = {}) {
    const t2 = { abortLoginPageJump: false, autoToLoginPage: false }, n2 = function() {
      const { token: e3, tokenExpired: t3 } = re();
      let n3;
      if (e3) {
        if (t3 < Date.now()) {
          const e4 = "uni-id-token-expired";
          n3 = { errCode: e4, errMsg: ns[e4] };
        }
      } else {
        const e4 = "uni-id-check-token-failed";
        n3 = { errCode: e4, errMsg: ns[e4] };
      }
      return n3;
    }();
    if (ys(e2) && n2) {
      n2.uniIdRedirectUrl = e2;
      if (J($).length > 0)
        return setTimeout(() => {
          Y($, n2);
        }, 0), t2.abortLoginPageJump = true, t2;
      t2.autoToLoginPage = true;
    }
    return t2;
  }
  function Is() {
    !function() {
      const e3 = os(), { abortLoginPageJump: t2, autoToLoginPage: n2 } = vs({ url: e3 });
      t2 || n2 && ws({ api: "redirectTo", redirect: e3 });
    }();
    const e2 = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
    for (let t2 = 0; t2 < e2.length; t2++) {
      const n2 = e2[t2];
      uni.addInterceptor(n2, { invoke(e3) {
        const { abortLoginPageJump: t3, autoToLoginPage: s2 } = vs({ url: e3.url });
        return t3 ? e3 : s2 ? (ws({ api: n2, redirect: ms(e3.url) }), false) : e3;
      } });
    }
  }
  function Ss() {
    this.onResponse((e2) => {
      const { type: t2, content: n2 } = e2;
      let s2 = false;
      switch (t2) {
        case "cloudobject":
          s2 = function(e3) {
            if ("object" != typeof e3)
              return false;
            const { errCode: t3 } = e3 || {};
            return t3 in ns;
          }(n2);
          break;
        case "clientdb":
          s2 = function(e3) {
            if ("object" != typeof e3)
              return false;
            const { errCode: t3 } = e3 || {};
            return t3 in ts;
          }(n2);
      }
      s2 && function(e3 = {}) {
        const t3 = J($);
        Z().then(() => {
          const n3 = os();
          if (n3 && _s({ redirect: n3 }))
            return t3.length > 0 ? Y($, Object.assign({ uniIdRedirectUrl: n3 }, e3)) : void (hs && ws({ api: "navigateTo", redirect: n3 }));
        });
      }(n2);
    });
  }
  function bs(e2) {
    !function(e3) {
      e3.onResponse = function(e4) {
        G(j, e4);
      }, e3.offResponse = function(e4) {
        V(j, e4);
      };
    }(e2), function(e3) {
      e3.onNeedLogin = function(e4) {
        G($, e4);
      }, e3.offNeedLogin = function(e4) {
        V($, e4);
      }, us && (L("_globalUniCloudStatus").needLoginInit || (L("_globalUniCloudStatus").needLoginInit = true, Z().then(() => {
        Is.call(e3);
      }), ds && Ss.call(e3)));
    }(e2), function(e3) {
      e3.onRefreshToken = function(e4) {
        G(B, e4);
      }, e3.offRefreshToken = function(e4) {
        V(B, e4);
      };
    }(e2);
  }
  let ks;
  const As = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", Ps = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
  function Ts() {
    const e2 = re().token || "", t2 = e2.split(".");
    if (!e2 || 3 !== t2.length)
      return { uid: null, role: [], permission: [], tokenExpired: 0 };
    let n2;
    try {
      n2 = JSON.parse((s2 = t2[1], decodeURIComponent(ks(s2).split("").map(function(e3) {
        return "%" + ("00" + e3.charCodeAt(0).toString(16)).slice(-2);
      }).join(""))));
    } catch (e3) {
      throw new Error("获取当前用户信息出错，详细错误信息为：" + e3.message);
    }
    var s2;
    return n2.tokenExpired = 1e3 * n2.exp, delete n2.exp, delete n2.iat, n2;
  }
  ks = "function" != typeof atob ? function(e2) {
    if (e2 = String(e2).replace(/[\t\n\f\r ]+/g, ""), !Ps.test(e2))
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    var t2;
    e2 += "==".slice(2 - (3 & e2.length));
    for (var n2, s2, r2 = "", i2 = 0; i2 < e2.length; )
      t2 = As.indexOf(e2.charAt(i2++)) << 18 | As.indexOf(e2.charAt(i2++)) << 12 | (n2 = As.indexOf(e2.charAt(i2++))) << 6 | (s2 = As.indexOf(e2.charAt(i2++))), r2 += 64 === n2 ? String.fromCharCode(t2 >> 16 & 255) : 64 === s2 ? String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255) : String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255, 255 & t2);
    return r2;
  } : atob;
  var Cs = n(function(e2, t2) {
    Object.defineProperty(t2, "__esModule", { value: true });
    const n2 = "chooseAndUploadFile:ok", s2 = "chooseAndUploadFile:fail";
    function r2(e3, t3) {
      return e3.tempFiles.forEach((e4, n3) => {
        e4.name || (e4.name = e4.path.substring(e4.path.lastIndexOf("/") + 1)), t3 && (e4.fileType = t3), e4.cloudPath = Date.now() + "_" + n3 + e4.name.substring(e4.name.lastIndexOf("."));
      }), e3.tempFilePaths || (e3.tempFilePaths = e3.tempFiles.map((e4) => e4.path)), e3;
    }
    function i2(e3, t3, { onChooseFile: s3, onUploadProgress: r3 }) {
      return t3.then((e4) => {
        if (s3) {
          const t4 = s3(e4);
          if (void 0 !== t4)
            return Promise.resolve(t4).then((t5) => void 0 === t5 ? e4 : t5);
        }
        return e4;
      }).then((t4) => false === t4 ? { errMsg: n2, tempFilePaths: [], tempFiles: [] } : function(e4, t5, s4 = 5, r4) {
        (t5 = Object.assign({}, t5)).errMsg = n2;
        const i3 = t5.tempFiles, o2 = i3.length;
        let a2 = 0;
        return new Promise((n3) => {
          for (; a2 < s4; )
            c2();
          function c2() {
            const s5 = a2++;
            if (s5 >= o2)
              return void (!i3.find((e5) => !e5.url && !e5.errMsg) && n3(t5));
            const u2 = i3[s5];
            e4.uploadFile({ provider: u2.provider, filePath: u2.path, cloudPath: u2.cloudPath, fileType: u2.fileType, cloudPathAsRealPath: u2.cloudPathAsRealPath, onUploadProgress(e5) {
              e5.index = s5, e5.tempFile = u2, e5.tempFilePath = u2.path, r4 && r4(e5);
            } }).then((e5) => {
              u2.url = e5.fileID, s5 < o2 && c2();
            }).catch((e5) => {
              u2.errMsg = e5.errMsg || e5.message, s5 < o2 && c2();
            });
          }
        });
      }(e3, t4, 5, r3));
    }
    t2.initChooseAndUploadFile = function(e3) {
      return function(t3 = { type: "all" }) {
        return "image" === t3.type ? i2(e3, function(e4) {
          const { count: t4, sizeType: n3, sourceType: i3 = ["album", "camera"], extension: o2 } = e4;
          return new Promise((e5, a2) => {
            uni.chooseImage({ count: t4, sizeType: n3, sourceType: i3, extension: o2, success(t5) {
              e5(r2(t5, "image"));
            }, fail(e6) {
              a2({ errMsg: e6.errMsg.replace("chooseImage:fail", s2) });
            } });
          });
        }(t3), t3) : "video" === t3.type ? i2(e3, function(e4) {
          const { camera: t4, compressed: n3, maxDuration: i3, sourceType: o2 = ["album", "camera"], extension: a2 } = e4;
          return new Promise((e5, c2) => {
            uni.chooseVideo({ camera: t4, compressed: n3, maxDuration: i3, sourceType: o2, extension: a2, success(t5) {
              const { tempFilePath: n4, duration: s3, size: i4, height: o3, width: a3 } = t5;
              e5(r2({ errMsg: "chooseVideo:ok", tempFilePaths: [n4], tempFiles: [{ name: t5.tempFile && t5.tempFile.name || "", path: n4, size: i4, type: t5.tempFile && t5.tempFile.type || "", width: a3, height: o3, duration: s3, fileType: "video", cloudPath: "" }] }, "video"));
            }, fail(e6) {
              c2({ errMsg: e6.errMsg.replace("chooseVideo:fail", s2) });
            } });
          });
        }(t3), t3) : i2(e3, function(e4) {
          const { count: t4, extension: n3 } = e4;
          return new Promise((e5, i3) => {
            let o2 = uni.chooseFile;
            if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (o2 = wx.chooseMessageFile), "function" != typeof o2)
              return i3({ errMsg: s2 + " 请指定 type 类型，该平台仅支持选择 image 或 video。" });
            o2({ type: "all", count: t4, extension: n3, success(t5) {
              e5(r2(t5));
            }, fail(e6) {
              i3({ errMsg: e6.errMsg.replace("chooseFile:fail", s2) });
            } });
          });
        }(t3), t3);
      };
    };
  }), xs = t(Cs);
  const Os = "manual";
  function Es(e2) {
    return { props: { localdata: { type: Array, default: () => [] }, options: { type: [Object, Array], default: () => ({}) }, spaceInfo: { type: Object, default: () => ({}) }, collection: { type: [String, Array], default: "" }, action: { type: String, default: "" }, field: { type: String, default: "" }, orderby: { type: String, default: "" }, where: { type: [String, Object], default: "" }, pageData: { type: String, default: "add" }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: false }, gettree: { type: [Boolean, String], default: false }, gettreepath: { type: [Boolean, String], default: false }, startwith: { type: String, default: "" }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: "" }, groupField: { type: String, default: "" }, distinct: { type: [Boolean, String], default: false }, foreignKey: { type: String, default: "" }, loadtime: { type: String, default: "auto" }, manual: { type: Boolean, default: false } }, data: () => ({ mixinDatacomLoading: false, mixinDatacomHasMore: false, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {}, mixinDatacomError: null }), created() {
      this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(() => {
        var e3 = [];
        return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach((t2) => {
          e3.push(this[t2]);
        }), e3;
      }, (e3, t2) => {
        if (this.loadtime === Os)
          return;
        let n2 = false;
        const s2 = [];
        for (let r2 = 2; r2 < e3.length; r2++)
          e3[r2] !== t2[r2] && (s2.push(e3[r2]), n2 = true);
        e3[0] !== t2[0] && (this.mixinDatacomPage.current = this.pageCurrent), this.mixinDatacomPage.size = this.pageSize, this.onMixinDatacomPropsChange(n2, s2);
      });
    }, methods: { onMixinDatacomPropsChange(e3, t2) {
    }, mixinDatacomEasyGet({ getone: e3 = false, success: t2, fail: n2 } = {}) {
      this.mixinDatacomLoading || (this.mixinDatacomLoading = true, this.mixinDatacomErrorMessage = "", this.mixinDatacomError = null, this.mixinDatacomGet().then((n3) => {
        this.mixinDatacomLoading = false;
        const { data: s2, count: r2 } = n3.result;
        this.getcount && (this.mixinDatacomPage.count = r2), this.mixinDatacomHasMore = s2.length < this.pageSize;
        const i2 = e3 ? s2.length ? s2[0] : void 0 : s2;
        this.mixinDatacomResData = i2, t2 && t2(i2);
      }).catch((e4) => {
        this.mixinDatacomLoading = false, this.mixinDatacomErrorMessage = e4, this.mixinDatacomError = e4, n2 && n2(e4);
      }));
    }, mixinDatacomGet(t2 = {}) {
      let n2;
      t2 = t2 || {}, n2 = "undefined" != typeof __uniX && __uniX ? e2.databaseForJQL(this.spaceInfo) : e2.database(this.spaceInfo);
      const s2 = t2.action || this.action;
      s2 && (n2 = n2.action(s2));
      const r2 = t2.collection || this.collection;
      n2 = Array.isArray(r2) ? n2.collection(...r2) : n2.collection(r2);
      const i2 = t2.where || this.where;
      i2 && Object.keys(i2).length && (n2 = n2.where(i2));
      const o2 = t2.field || this.field;
      o2 && (n2 = n2.field(o2));
      const a2 = t2.foreignKey || this.foreignKey;
      a2 && (n2 = n2.foreignKey(a2));
      const c2 = t2.groupby || this.groupby;
      c2 && (n2 = n2.groupBy(c2));
      const u2 = t2.groupField || this.groupField;
      u2 && (n2 = n2.groupField(u2));
      true === (void 0 !== t2.distinct ? t2.distinct : this.distinct) && (n2 = n2.distinct());
      const h2 = t2.orderby || this.orderby;
      h2 && (n2 = n2.orderBy(h2));
      const l2 = void 0 !== t2.pageCurrent ? t2.pageCurrent : this.mixinDatacomPage.current, d2 = void 0 !== t2.pageSize ? t2.pageSize : this.mixinDatacomPage.size, p2 = void 0 !== t2.getcount ? t2.getcount : this.getcount, f2 = void 0 !== t2.gettree ? t2.gettree : this.gettree, g2 = void 0 !== t2.gettreepath ? t2.gettreepath : this.gettreepath, m2 = { getCount: p2 }, y2 = { limitLevel: void 0 !== t2.limitlevel ? t2.limitlevel : this.limitlevel, startWith: void 0 !== t2.startwith ? t2.startwith : this.startwith };
      return f2 && (m2.getTree = y2), g2 && (m2.getTreePath = y2), n2 = n2.skip(d2 * (l2 - 1)).limit(d2).get(m2), n2;
    } } };
  }
  function Ls(e2) {
    return function(t2, n2 = {}) {
      n2 = function(e3, t3 = {}) {
        return e3.customUI = t3.customUI || e3.customUI, e3.parseSystemError = t3.parseSystemError || e3.parseSystemError, Object.assign(e3.loadingOptions, t3.loadingOptions), Object.assign(e3.errorOptions, t3.errorOptions), "object" == typeof t3.secretMethods && (e3.secretMethods = t3.secretMethods), e3;
      }({ customUI: false, loadingOptions: { title: "加载中...", mask: true }, errorOptions: { type: "modal", retry: false } }, n2);
      const { customUI: s2, loadingOptions: r2, errorOptions: i2, parseSystemError: o2 } = n2, a2 = !s2;
      return new Proxy({}, { get(s3, c2) {
        switch (c2) {
          case "toString":
            return "[object UniCloudObject]";
          case "toJSON":
            return {};
        }
        return function({ fn: e3, interceptorName: t3, getCallbackArgs: n3 } = {}) {
          return async function(...s4) {
            const r3 = n3 ? n3({ params: s4 }) : {};
            let i3, o3;
            try {
              return await M(q(t3, "invoke"), { ...r3 }), i3 = await e3(...s4), await M(q(t3, "success"), { ...r3, result: i3 }), i3;
            } catch (e4) {
              throw o3 = e4, await M(q(t3, "fail"), { ...r3, error: o3 }), o3;
            } finally {
              await M(q(t3, "complete"), o3 ? { ...r3, error: o3 } : { ...r3, result: i3 });
            }
          };
        }({ fn: async function s4(...h2) {
          let l2;
          a2 && uni.showLoading({ title: r2.title, mask: r2.mask });
          const d2 = { name: t2, type: u, data: { method: c2, params: h2 } };
          "object" == typeof n2.secretMethods && function(e3, t3) {
            const n3 = t3.data.method, s5 = e3.secretMethods || {}, r3 = s5[n3] || s5["*"];
            r3 && (t3.secretType = r3);
          }(n2, d2);
          let p2 = false;
          try {
            l2 = await e2.callFunction(d2);
          } catch (e3) {
            p2 = true, l2 = { result: new te(e3) };
          }
          const { errSubject: f2, errCode: g2, errMsg: m2, newToken: y2 } = l2.result || {};
          if (a2 && uni.hideLoading(), y2 && y2.token && y2.tokenExpired && (ie(y2), Y(B, { ...y2 })), g2) {
            let e3 = m2;
            if (p2 && o2) {
              e3 = (await o2({ objectName: t2, methodName: c2, params: h2, errSubject: f2, errCode: g2, errMsg: m2 })).errMsg || m2;
            }
            if (a2)
              if ("toast" === i2.type)
                uni.showToast({ title: e3, icon: "none" });
              else {
                if ("modal" !== i2.type)
                  throw new Error(`Invalid errorOptions.type: ${i2.type}`);
                {
                  const { confirm: t3 } = await async function({ title: e4, content: t4, showCancel: n4, cancelText: s5, confirmText: r3 } = {}) {
                    return new Promise((i3, o3) => {
                      uni.showModal({ title: e4, content: t4, showCancel: n4, cancelText: s5, confirmText: r3, success(e5) {
                        i3(e5);
                      }, fail() {
                        i3({ confirm: false, cancel: true });
                      } });
                    });
                  }({ title: "提示", content: e3, showCancel: i2.retry, cancelText: "取消", confirmText: i2.retry ? "重试" : "确定" });
                  if (i2.retry && t3)
                    return s4(...h2);
                }
              }
            const n3 = new te({ subject: f2, code: g2, message: m2, requestId: l2.requestId });
            throw n3.detail = l2.result, Y(j, { type: z, content: n3 }), n3;
          }
          return Y(j, { type: z, content: l2.result }), l2.result;
        }, interceptorName: "callObject", getCallbackArgs: function({ params: e3 } = {}) {
          return { objectName: t2, methodName: c2, params: e3 };
        } });
      } });
    };
  }
  function Rs(e2) {
    return L("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", e2.config.spaceId));
  }
  async function Us({ openid: e2, callLoginByWeixin: t2 = false } = {}) {
    Rs(this);
    throw new Error(`[SecureNetwork] API \`initSecureNetworkByWeixin\` is not supported on platform \`${P}\``);
  }
  async function Ns(e2) {
    const t2 = Rs(this);
    return t2.initPromise || (t2.initPromise = Us.call(this, e2).then((e3) => e3).catch((e3) => {
      throw delete t2.initPromise, e3;
    })), t2.initPromise;
  }
  function Ds(e2) {
    return function({ openid: t2, callLoginByWeixin: n2 = false } = {}) {
      return Ns.call(e2, { openid: t2, callLoginByWeixin: n2 });
    };
  }
  function Ms(e2) {
    const t2 = { getSystemInfo: uni.getSystemInfo, getPushClientId: uni.getPushClientId };
    return function(n2) {
      return new Promise((s2, r2) => {
        t2[e2]({ ...n2, success(e3) {
          s2(e3);
        }, fail(e3) {
          r2(e3);
        } });
      });
    };
  }
  class qs extends class {
    constructor() {
      this._callback = {};
    }
    addListener(e2, t2) {
      this._callback[e2] || (this._callback[e2] = []), this._callback[e2].push(t2);
    }
    on(e2, t2) {
      return this.addListener(e2, t2);
    }
    removeListener(e2, t2) {
      if (!t2)
        throw new Error('The "listener" argument must be of type function. Received undefined');
      const n2 = this._callback[e2];
      if (!n2)
        return;
      const s2 = function(e3, t3) {
        for (let n3 = e3.length - 1; n3 >= 0; n3--)
          if (e3[n3] === t3)
            return n3;
        return -1;
      }(n2, t2);
      n2.splice(s2, 1);
    }
    off(e2, t2) {
      return this.removeListener(e2, t2);
    }
    removeAllListener(e2) {
      delete this._callback[e2];
    }
    emit(e2, ...t2) {
      const n2 = this._callback[e2];
      if (n2)
        for (let e3 = 0; e3 < n2.length; e3++)
          n2[e3](...t2);
    }
  } {
    constructor() {
      super(), this._uniPushMessageCallback = this._receivePushMessage.bind(this), this._currentMessageId = -1, this._payloadQueue = [];
    }
    init() {
      return Promise.all([Ms("getSystemInfo")(), Ms("getPushClientId")()]).then(([{ appId: e2 } = {}, { cid: t2 } = {}] = []) => {
        if (!e2)
          throw new Error("Invalid appId, please check the manifest.json file");
        if (!t2)
          throw new Error("Invalid push client id");
        this._appId = e2, this._pushClientId = t2, this._seqId = Date.now() + "-" + Math.floor(9e5 * Math.random() + 1e5), this.emit("open"), this._initMessageListener();
      }, (e2) => {
        throw this.emit("error", e2), this.close(), e2;
      });
    }
    async open() {
      return this.init();
    }
    _isUniCloudSSE(e2) {
      if ("receive" !== e2.type)
        return false;
      const t2 = e2 && e2.data && e2.data.payload;
      return !(!t2 || "UNI_CLOUD_SSE" !== t2.channel || t2.seqId !== this._seqId);
    }
    _receivePushMessage(e2) {
      if (!this._isUniCloudSSE(e2))
        return;
      const t2 = e2 && e2.data && e2.data.payload, { action: n2, messageId: s2, message: r2 } = t2;
      this._payloadQueue.push({ action: n2, messageId: s2, message: r2 }), this._consumMessage();
    }
    _consumMessage() {
      for (; ; ) {
        const e2 = this._payloadQueue.find((e3) => e3.messageId === this._currentMessageId + 1);
        if (!e2)
          break;
        this._currentMessageId++, this._parseMessagePayload(e2);
      }
    }
    _parseMessagePayload(e2) {
      const { action: t2, messageId: n2, message: s2 } = e2;
      "end" === t2 ? this._end({ messageId: n2, message: s2 }) : "message" === t2 && this._appendMessage({ messageId: n2, message: s2 });
    }
    _appendMessage({ messageId: e2, message: t2 } = {}) {
      this.emit("message", t2);
    }
    _end({ messageId: e2, message: t2 } = {}) {
      this.emit("end", t2), this.close();
    }
    _initMessageListener() {
      uni.onPushMessage(this._uniPushMessageCallback);
    }
    _destroy() {
      uni.offPushMessage(this._uniPushMessageCallback);
    }
    toJSON() {
      return { appId: this._appId, pushClientId: this._pushClientId, seqId: this._seqId };
    }
    close() {
      this._destroy(), this.emit("close");
    }
  }
  async function Fs(e2, t2) {
    const n2 = `http://${e2}:${t2}/system/ping`;
    try {
      const e3 = await (s2 = { url: n2, timeout: 500 }, new Promise((e4, t3) => {
        ne.request({ ...s2, success(t4) {
          e4(t4);
        }, fail(e5) {
          t3(e5);
        } });
      }));
      return !(!e3.data || 0 !== e3.data.code);
    } catch (e3) {
      return false;
    }
    var s2;
  }
  async function Ks(e2) {
    {
      const { osName: e3, osVersion: t3 } = ce();
      "ios" === e3 && function(e4) {
        if (!e4 || "string" != typeof e4)
          return 0;
        const t4 = e4.match(/^(\d+)./);
        return t4 && t4[1] ? parseInt(t4[1]) : 0;
      }(t3) >= 14 && console.warn("iOS 14及以上版本连接uniCloud本地调试服务需要允许客户端查找并连接到本地网络上的设备（仅开发期间需要，发行后不需要）");
    }
    const t2 = e2.__dev__;
    if (!t2.debugInfo)
      return;
    const { address: n2, servePort: s2 } = t2.debugInfo, { address: r2 } = await async function(e3, t3) {
      let n3;
      for (let s3 = 0; s3 < e3.length; s3++) {
        const r3 = e3[s3];
        if (await Fs(r3, t3)) {
          n3 = r3;
          break;
        }
      }
      return { address: n3, port: t3 };
    }(n2, s2);
    if (r2)
      return t2.localAddress = r2, void (t2.localPort = s2);
    const i2 = console["error"];
    let o2 = "";
    if ("remote" === t2.debugInfo.initialLaunchType ? (t2.debugInfo.forceRemote = true, o2 = "当前客户端和HBuilderX不在同一局域网下（或其他网络原因无法连接HBuilderX），uniCloud本地调试服务不对当前客户端生效。\n- 如果不使用uniCloud本地调试服务，请直接忽略此信息。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。") : o2 = "无法连接uniCloud本地调试服务，请检查当前客户端是否与主机在同一局域网下。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。", o2 += "\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs\n- 检查是否错误的使用拦截器修改uni.request方法的参数", 0 === P.indexOf("mp-") && (o2 += "\n- 小程序中如何使用uniCloud，请参考：https://uniapp.dcloud.net.cn/uniCloud/publish.html#useinmp"), !t2.debugInfo.forceRemote)
      throw new Error(o2);
    i2(o2);
  }
  function js(e2) {
    e2._initPromiseHub || (e2._initPromiseHub = new v({ createPromise: function() {
      let t2 = Promise.resolve();
      var n2;
      n2 = 1, t2 = new Promise((e3) => {
        setTimeout(() => {
          e3();
        }, n2);
      });
      const s2 = e2.auth();
      return t2.then(() => s2.getLoginState()).then((e3) => e3 ? Promise.resolve() : s2.signInAnonymously());
    } }));
  }
  const $s = { tcb: St, tencent: St, aliyun: pe, private: kt, alipay: Lt };
  let Bs = new class {
    init(e2) {
      let t2 = {};
      const n2 = $s[e2.provider];
      if (!n2)
        throw new Error("未提供正确的provider参数");
      t2 = n2.init(e2), function(e3) {
        const t3 = {};
        e3.__dev__ = t3, t3.debugLog = "app" === P;
        const n3 = T;
        n3 && !n3.code && (t3.debugInfo = n3);
        const s2 = new v({ createPromise: function() {
          return Ks(e3);
        } });
        t3.initLocalNetwork = function() {
          return s2.exec();
        };
      }(t2), js(t2), Kn(t2), function(e3) {
        const t3 = e3.uploadFile;
        e3.uploadFile = function(e4) {
          return t3.call(this, e4);
        };
      }(t2), function(e3) {
        e3.database = function(t3) {
          if (t3 && Object.keys(t3).length > 0)
            return e3.init(t3).database();
          if (this._database)
            return this._database;
          const n3 = Qn(Xn, { uniClient: e3 });
          return this._database = n3, n3;
        }, e3.databaseForJQL = function(t3) {
          if (t3 && Object.keys(t3).length > 0)
            return e3.init(t3).databaseForJQL();
          if (this._databaseForJQL)
            return this._databaseForJQL;
          const n3 = Qn(Xn, { uniClient: e3, isJQL: true });
          return this._databaseForJQL = n3, n3;
        };
      }(t2), function(e3) {
        e3.getCurrentUserInfo = Ts, e3.chooseAndUploadFile = xs.initChooseAndUploadFile(e3), Object.assign(e3, { get mixinDatacom() {
          return Es(e3);
        } }), e3.SSEChannel = qs, e3.initSecureNetworkByWeixin = Ds(e3), e3.importObject = Ls(e3);
      }(t2);
      return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach((e3) => {
        if (!t2[e3])
          return;
        const n3 = t2[e3];
        t2[e3] = function() {
          return n3.apply(t2, Array.from(arguments));
        }, t2[e3] = (/* @__PURE__ */ function(e4, t3) {
          return function(n4) {
            let s2 = false;
            if ("callFunction" === t3) {
              const e5 = n4 && n4.type || c;
              s2 = e5 !== c;
            }
            const r2 = "callFunction" === t3 && !s2, i2 = this._initPromiseHub.exec();
            n4 = n4 || {};
            const { success: o2, fail: a2, complete: u2 } = ee(n4), h2 = i2.then(() => s2 ? Promise.resolve() : M(q(t3, "invoke"), n4)).then(() => e4.call(this, n4)).then((e5) => s2 ? Promise.resolve(e5) : M(q(t3, "success"), e5).then(() => M(q(t3, "complete"), e5)).then(() => (r2 && Y(j, { type: H, content: e5 }), Promise.resolve(e5))), (e5) => s2 ? Promise.reject(e5) : M(q(t3, "fail"), e5).then(() => M(q(t3, "complete"), e5)).then(() => (Y(j, { type: H, content: e5 }), Promise.reject(e5))));
            if (!(o2 || a2 || u2))
              return h2;
            h2.then((e5) => {
              o2 && o2(e5), u2 && u2(e5), r2 && Y(j, { type: H, content: e5 });
            }, (e5) => {
              a2 && a2(e5), u2 && u2(e5), r2 && Y(j, { type: H, content: e5 });
            });
          };
        }(t2[e3], e3)).bind(t2);
      }), t2.init = this.init, t2;
    }
  }();
  (() => {
    const e2 = C;
    let t2 = {};
    if (e2 && 1 === e2.length)
      t2 = e2[0], Bs = Bs.init(t2), Bs._isDefault = true;
    else {
      const t3 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo", "importObject"];
      let n2;
      n2 = e2 && e2.length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : "应用未关联服务空间，请在uniCloud目录右键关联服务空间", t3.forEach((e3) => {
        Bs[e3] = function() {
          return console.error(n2), Promise.reject(new te({ code: "SYS_ERR", message: n2 }));
        };
      });
    }
    Object.assign(Bs, { get mixinDatacom() {
      return Es(Bs);
    } }), bs(Bs), Bs.addInterceptor = N, Bs.removeInterceptor = D, Bs.interceptObject = F;
  })();
  var Ws = Bs;
  const _sfc_main$4 = {
    data() {
      return {
        messages: []
      };
    },
    onLoad() {
      this.getMessages();
      this.startTimer();
    },
    beforeDestroy() {
      this.stopTimer();
    },
    methods: {
      async getMessages() {
        const res = await Ws.callFunction({
          name: "getMessages"
        });
        if (res.result.code === 0) {
          this.messages = res.result.data;
        } else {
          uni.showToast({
            title: "Failed to load messages",
            icon: "none"
          });
        }
      },
      openChat(message2) {
        uni.navigateTo({
          url: `/pages/chat/chat?chatId=${message2.userId}`
        });
      },
      formatTimeDifference(timestamp) {
        const now = Date.now();
        const difference = now - timestamp;
        if (difference < 6e4) {
          return "刚刚";
        } else if (difference < 36e5) {
          return `${Math.floor(difference / 6e4)}分钟前`;
        } else if (difference < 864e5) {
          return `${Math.floor(difference / 36e5)}小时前`;
        } else {
          return `${Math.floor(difference / 864e5)}天前`;
        }
      },
      startTimer() {
        this.timer = setInterval(() => {
          this.getMessages();
          this.formatTimeDifference(message.timestamp);
        }, 6e4);
      },
      stopTimer() {
        if (this.timer) {
          clearInterval(this.timer);
        }
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "message-list" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.messages, (message2) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: message2._id,
              class: "message-item",
              onClick: ($event) => $options.openChat(message2)
            }, [
              vue.createElementVNode("image", {
                src: message2.avatar,
                class: "avatar"
              }, null, 8, ["src"]),
              vue.createElementVNode("view", { class: "content" }, [
                vue.createElementVNode("view", { class: "header" }, [
                  vue.createElementVNode(
                    "text",
                    { class: "name" },
                    vue.toDisplayString(message2.name),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode(
                    "text",
                    { class: "time" },
                    vue.toDisplayString($options.formatTimeDifference(message2.timestamp)),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode(
                  "text",
                  { class: "text" },
                  vue.toDisplayString(message2.content),
                  1
                  /* TEXT */
                )
              ])
            ], 8, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]);
  }
  const PagesXiaoxiXiaoxi = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "D:/Uniapp/luoying/pages/xiaoxi/xiaoxi.vue"]]);
  const _sfc_main$3 = {
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
      },
      changePassword() {
      },
      privacySettings() {
      },
      notificationSettings() {
      },
      manageCollections() {
      },
      toggleEyeComfortMode() {
      },
      languageSettings() {
      },
      logout() {
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", { class: "my-page" }, [
      vue.createElementVNode("div", { class: "user-info" }, [
        vue.createElementVNode("img", {
          class: "avatar",
          src: $data.userInfo.avatar,
          alt: "Avatar"
        }, null, 8, ["src"]),
        vue.createElementVNode("div", { class: "user-details" }, [
          vue.createElementVNode(
            "h2",
            null,
            vue.toDisplayString($data.userInfo.username),
            1
            /* TEXT */
          ),
          vue.createElementVNode(
            "p",
            null,
            vue.toDisplayString($data.userInfo.email),
            1
            /* TEXT */
          ),
          vue.createElementVNode("button", {
            onClick: _cache[0] || (_cache[0] = (...args) => $options.editProfile && $options.editProfile(...args))
          }, "编辑个人资料")
        ])
      ]),
      vue.createElementVNode("div", { class: "menu" }, [
        vue.createElementVNode("div", {
          class: "menu-item",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.changePassword && $options.changePassword(...args))
        }, [
          vue.createElementVNode("i", { class: "fas fa-key" }),
          vue.createTextVNode(" 修改密码 ")
        ]),
        vue.createElementVNode("div", {
          class: "menu-item",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.privacySettings && $options.privacySettings(...args))
        }, [
          vue.createElementVNode("i", { class: "fas fa-user-lock" }),
          vue.createTextVNode(" 隐私设置 ")
        ]),
        vue.createElementVNode("div", {
          class: "menu-item",
          onClick: _cache[3] || (_cache[3] = (...args) => $options.notificationSettings && $options.notificationSettings(...args))
        }, [
          vue.createElementVNode("i", { class: "fas fa-bell" }),
          vue.createTextVNode(" 通知设置 ")
        ]),
        vue.createElementVNode("div", {
          class: "menu-item",
          onClick: _cache[4] || (_cache[4] = (...args) => $options.manageCollections && $options.manageCollections(...args))
        }, [
          vue.createElementVNode("i", { class: "fas fa-bookmark" }),
          vue.createTextVNode(" 我的收藏 ")
        ]),
        vue.createElementVNode("div", {
          class: "menu-item",
          onClick: _cache[5] || (_cache[5] = (...args) => $options.toggleEyeComfortMode && $options.toggleEyeComfortMode(...args))
        }, [
          vue.createElementVNode("i", { class: "fas fa-eye" }),
          vue.createTextVNode(" 护眼模式 ")
        ]),
        vue.createElementVNode("div", {
          class: "menu-item",
          onClick: _cache[6] || (_cache[6] = (...args) => $options.languageSettings && $options.languageSettings(...args))
        }, [
          vue.createElementVNode("i", { class: "fas fa-language" }),
          vue.createTextVNode(" 显示语言 ")
        ]),
        vue.createElementVNode("div", {
          class: "menu-item",
          onClick: _cache[7] || (_cache[7] = (...args) => $options.logout && $options.logout(...args))
        }, [
          vue.createElementVNode("i", { class: "fas fa-sign-out-alt" }),
          vue.createTextVNode(" 退出登录 ")
        ])
      ])
    ]);
  }
  const PagesWodeWode = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-e6578db8"], ["__file", "D:/Uniapp/luoying/pages/wode/wode.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {
        selectedTab: "post",
        content: "",
        isMarkdown: false,
        tags: [],
        imageSrc: "",
        isTagModalVisible: false,
        searchQuery: "",
        recommendedTags: [
          { id: 1, name: "维护地球日！", icon: "path/to/icon1.png" },
          { id: 2, name: "1024程序员节！", icon: "path/to/icon2.png" },
          { id: 3, name: "乘风破浪！", icon: "path/to/icon3.png" },
          { id: 4, name: "数学", icon: "path/to/icon4.png" }
        ],
        newTag: ""
      };
    },
    methods: {
      selectTab(tab) {
        this.selectedTab = tab;
      },
      showTagModal() {
        this.isTagModalVisible = true;
      },
      hideTagModal() {
        this.isTagModalVisible = false;
      },
      addTag(tag) {
        this.tags.push(tag);
      },
      removeTag(tag) {
        this.tags = this.tags.filter((t2) => t2.id !== tag.id);
      },
      createTag() {
        if (this.newTag.trim()) {
          this.tags.push({ id: Date.now(), name: this.newTag });
          this.newTag = "";
        }
      },
      toggleMarkdown(event) {
        this.isMarkdown = event.detail.value;
      },
      saveDraft() {
      },
      publish() {
      },
      chooseImage() {
        uni.chooseImage({
          count: 1,
          sizeType: ["original", "compressed"],
          sourceType: ["album"],
          success: (res) => {
            this.imageSrc = res.tempFilePaths[0];
            this.uploadImage(res.tempFilePaths[0]);
          },
          fail: (err) => {
            formatAppLog("error", "at pages/fabu/fabu.vue:135", "选择图片失败：", err);
          }
        });
      },
      uploadImage(filePath) {
        uni.uploadFile({
          url: "https://your-upload-server.com/upload",
          // 替换为实际的上传服务器地址
          filePath,
          name: "file",
          success: (uploadFileRes) => {
            formatAppLog("log", "at pages/fabu/fabu.vue:145", "上传成功：", uploadFileRes);
          },
          fail: (err) => {
            formatAppLog("error", "at pages/fabu/fabu.vue:149", "上传失败：", err);
          }
        });
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "top-nav" }, [
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["nav-item", { "selected": $data.selectedTab === "post" }]),
            onClick: _cache[0] || (_cache[0] = ($event) => $options.selectTab("post"))
          },
          "发帖",
          2
          /* CLASS */
        ),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["nav-item", { "selected": $data.selectedTab === "comment" }]),
            onClick: _cache[1] || (_cache[1] = ($event) => $options.selectTab("comment"))
          },
          "跟帖 ",
          2
          /* CLASS */
        )
      ]),
      vue.createElementVNode("view", { class: "content" }, [
        vue.createElementVNode("view", { class: "txtouter" }, [
          vue.withDirectives(vue.createElementVNode(
            "textarea",
            {
              class: "textarea",
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.content = $event),
              placeholder: "说些什么吧..."
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vModelText, $data.content]
          ])
        ]),
        vue.createElementVNode("view", { class: "uploadImage" }, [
          vue.createElementVNode("button", {
            onClick: _cache[3] || (_cache[3] = (...args) => $options.chooseImage && $options.chooseImage(...args))
          }, "选择图片"),
          $data.imageSrc ? (vue.openBlock(), vue.createElementBlock("image", {
            key: 0,
            src: $data.imageSrc,
            class: "uploaded-image"
          }, null, 8, ["src"])) : vue.createCommentVNode("v-if", true)
        ]),
        $data.selectedTab === "post" ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "add-section"
        }, [
          vue.createElementVNode("text", null, "# 添加标签："),
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.tags, (tag) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "tag",
                key: tag.id
              }, [
                vue.createElementVNode(
                  "text",
                  null,
                  vue.toDisplayString(tag.name),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("button", {
                  onClick: ($event) => $options.removeTag(tag)
                }, "删除", 8, ["onClick"])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          )),
          vue.createElementVNode("image", {
            src: "/static/fabu/add.png",
            mode: "heightFix",
            class: "add-icon",
            onClick: _cache[4] || (_cache[4] = (...args) => $options.showTagModal && $options.showTagModal(...args))
          })
        ])) : vue.createCommentVNode("v-if", true),
        $data.selectedTab === "comment" ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "tiezinumber"
        }, [
          vue.createElementVNode("text", null, "@："),
          vue.createElementVNode("image", {
            src: "/static/fabu/add.png",
            mode: "heightFix",
            class: "add-icon"
          })
        ])) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("view", { class: "markdown-toggle" }, [
          vue.createElementVNode("text", null, "markdown模式"),
          vue.createElementVNode("switch", {
            checked: $data.isMarkdown,
            onChange: _cache[5] || (_cache[5] = (...args) => $options.toggleMarkdown && $options.toggleMarkdown(...args))
          }, null, 40, ["checked"])
        ]),
        vue.createElementVNode("view", { class: "button-section" }, [
          vue.createElementVNode("button", {
            class: "save-draft-button",
            onClick: _cache[6] || (_cache[6] = (...args) => $options.saveDraft && $options.saveDraft(...args))
          }, "保存草稿"),
          vue.createElementVNode("button", {
            class: "publish-button",
            onClick: _cache[7] || (_cache[7] = (...args) => $options.publish && $options.publish(...args))
          }, "发布")
        ])
      ]),
      $data.isTagModalVisible ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "modal"
      }, [
        vue.createElementVNode("view", { class: "modal-content" }, [
          vue.createElementVNode("view", { class: "modal-header" }, [
            vue.createElementVNode("text", null, "添加标签"),
            vue.createElementVNode("button", {
              onClick: _cache[8] || (_cache[8] = (...args) => $options.hideTagModal && $options.hideTagModal(...args))
            }, "完成")
          ]),
          vue.createElementVNode("view", { class: "modal-body" }, [
            vue.createElementVNode("view", { class: "search-bar" }, [
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  type: "text",
                  "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $data.searchQuery = $event),
                  placeholder: "搜索话题"
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [vue.vModelText, $data.searchQuery]
              ])
            ]),
            vue.createElementVNode("view", { class: "recommended-tags" }, [
              vue.createElementVNode("text", null, "推荐标签"),
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($data.recommendedTags, (tag) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "tag",
                    key: tag.id,
                    onClick: ($event) => $options.addTag(tag)
                  }, [
                    vue.createElementVNode("image", {
                      src: tag.icon,
                      class: "tag-icon"
                    }, null, 8, ["src"]),
                    vue.createElementVNode(
                      "text",
                      null,
                      "#" + vue.toDisplayString(tag.name),
                      1
                      /* TEXT */
                    )
                  ], 8, ["onClick"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            vue.createElementVNode("view", { class: "create-tag" }, [
              vue.createElementVNode("text", null, "创建标签"),
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  type: "text",
                  "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $data.newTag = $event),
                  placeholder: "一个新的标签在此诞生..."
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [vue.vModelText, $data.newTag]
              ]),
              vue.createElementVNode("button", {
                onClick: _cache[11] || (_cache[11] = (...args) => $options.createTag && $options.createTag(...args))
              }, "创建")
            ]),
            vue.createElementVNode("view", { class: "added-tags" }, [
              vue.createElementVNode("text", null, "已添加标签"),
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($data.tags, (tag) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "tag",
                    key: tag.id
                  }, [
                    vue.createElementVNode(
                      "text",
                      null,
                      vue.toDisplayString(tag.name),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("button", {
                      onClick: ($event) => $options.removeTag(tag)
                    }, "删除", 8, ["onClick"])
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ])
        ])
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesFabuFabu = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "D:/Uniapp/luoying/pages/fabu/fabu.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {
        chatId: null,
        newMessage: "",
        chatMessages: [],
        currentUserId: uni.getStorageSync("userId") || null,
        currentUserName: uni.getStorageSync("userName") || "未登录",
        selfAvatar: uni.getStorageSync("avatar") || "",
        otherAvatar: "https://example.com/other-avatar.jpg",
        receiverId: null,
        receiverName: ""
        // 你可以从 options 中传递接收者信息777
      };
    },
    onLoad(options) {
      this.chatId = options.chatId;
      this.receiverId = options.receiverId;
      this.receiverName = options.receiverName;
      this.getChatMessages();
    },
    methods: {
      async getChatMessages() {
        const res = await Ws.callFunction({
          name: "getChatMessages",
          data: { chatId: this.chatId }
        });
        if (res.result.code === 0) {
          this.chatMessages = res.result.data;
        } else {
          uni.showToast({
            title: "加载消息失败",
            icon: "none"
          });
        }
      },
      async sendMessage() {
        if (this.newMessage.trim() !== "") {
          const message2 = {
            chatId: this.chatId,
            senderId: this.currentUserId,
            receiverId: this.receiverId,
            content: this.newMessage,
            timestamp: Date.now()
          };
          const res = await Ws.callFunction({
            name: "sendMessage",
            data: message2
          });
          if (res.result.code === 0) {
            this.chatMessages.push(message2);
            this.newMessage = "";
          } else {
            uni.showToast({
              title: "发送消息失败",
              icon: "none"
            });
          }
        }
      },
      shouldShowTime(index) {
        if (index === 0)
          return true;
        const currentMsg = this.chatMessages[index];
        const previousMsg = this.chatMessages[index - 1];
        return currentMsg.timestamp - previousMsg.timestamp > 5 * 60 * 1e3;
      },
      formatTime(timestamp) {
        const date = new Date(timestamp);
        return date.toLocaleString();
      },
      goBack() {
        uni.navigateBack();
      },
      onMessage(data) {
        if (data.chatId === this.chatId) {
          this.chatMessages.push(data);
        }
      }
    },
    created() {
      uni.onSocketMessage((res) => {
        const data = JSON.parse(res.data);
        this.onMessage(data);
      });
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "chat-container" }, [
      vue.createCommentVNode(" 导航栏 "),
      vue.createElementVNode("view", { class: "nav-bar" }, [
        vue.createElementVNode("button", {
          onClick: _cache[0] || (_cache[0] = (...args) => $options.goBack && $options.goBack(...args)),
          class: "back-button"
        }, "返回"),
        vue.createElementVNode(
          "text",
          { class: "nav-title" },
          vue.toDisplayString($data.currentUserName),
          1
          /* TEXT */
        )
      ]),
      vue.createCommentVNode(" 消息显示区域 "),
      vue.createElementVNode("scroll-view", {
        class: "messages",
        "scroll-y": ""
      }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.chatMessages, (msg, index) => {
            return vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: msg._id,
                class: vue.normalizeClass(["message", msg.senderId === $data.currentUserId ? "self" : "other"])
              },
              [
                vue.createElementVNode("image", {
                  src: msg.senderId === $data.currentUserId ? $data.selfAvatar : $data.otherAvatar,
                  class: "avatar"
                }, null, 8, ["src"]),
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass(["bubble", msg.senderId === $data.currentUserId ? "self-bubble" : "other-bubble"])
                  },
                  [
                    vue.createElementVNode(
                      "text",
                      null,
                      vue.toDisplayString(msg.content),
                      1
                      /* TEXT */
                    )
                  ],
                  2
                  /* CLASS */
                ),
                $options.shouldShowTime(index) ? (vue.openBlock(), vue.createElementBlock(
                  "view",
                  {
                    key: 0,
                    class: "timestamp"
                  },
                  vue.toDisplayString($options.formatTime(msg.timestamp)),
                  1
                  /* TEXT */
                )) : vue.createCommentVNode("v-if", true)
              ],
              2
              /* CLASS */
            );
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      vue.createCommentVNode(" 输入框区域 "),
      vue.createElementVNode("view", { class: "input-bar" }, [
        vue.withDirectives(vue.createElementVNode(
          "input",
          {
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.newMessage = $event),
            class: "input-field",
            placeholder: "请输入消息..."
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [vue.vModelText, $data.newMessage]
        ]),
        vue.createElementVNode("button", {
          onClick: _cache[2] || (_cache[2] = (...args) => $options.sendMessage && $options.sendMessage(...args)),
          class: "send-button"
        }, "发送")
      ])
    ]);
  }
  const PagesChatChat = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "D:/Uniapp/luoying/pages/chat/chat.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/shouye/shouye", PagesShouyeShouye);
  __definePage("pages/faxian/faxian", PagesFaxianFaxian);
  __definePage("pages/denglu/denglu", PagesDengluDenglu);
  __definePage("pages/webview/webview", PagesWebviewWebview);
  __definePage("pages/xiaoxi/xiaoxi", PagesXiaoxiXiaoxi);
  __definePage("pages/wode/wode", PagesWodeWode);
  __definePage("pages/fabu/fabu", PagesFabuFabu);
  __definePage("pages/chat/chat", PagesChatChat);
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
