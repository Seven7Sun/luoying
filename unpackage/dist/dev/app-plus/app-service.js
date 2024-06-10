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
  const _sfc_main$8 = {
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
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
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
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__file", "D:/Uniapp/luoying/pages/index/index.vue"]]);
  const _sfc_main$7 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
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
  const PagesShouyeShouye = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__file", "D:/Uniapp/luoying/pages/shouye/shouye.vue"]]);
  const _sfc_main$6 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesFaxianFaxian = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__file", "D:/Uniapp/luoying/pages/faxian/faxian.vue"]]);
  const _sfc_main$5 = {
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
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
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
  const PagesDengluDenglu = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "D:/Uniapp/luoying/pages/denglu/denglu.vue"]]);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const _sfc_main$4 = {
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
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("web-view", { src: $data.url }, null, 8, ["src"])
    ]);
  }
  const PagesWebviewWebview = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "D:/Uniapp/luoying/pages/webview/webview.vue"]]);
  const _sfc_main$3 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesXiaoxiXiaoxi = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "D:/Uniapp/luoying/pages/xiaoxi/xiaoxi.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesWodeWode = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "D:/Uniapp/luoying/pages/wode/wode.vue"]]);
  const _sfc_main$1 = {
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
          { id: 2, name: "#1024程序员节！", icon: "path/to/icon2.png" },
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
        this.tags = this.tags.filter((t) => t.id !== tag.id);
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
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
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
                      vue.toDisplayString(tag.name),
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
  const PagesFabuFabu = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "D:/Uniapp/luoying/pages/fabu/fabu.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/shouye/shouye", PagesShouyeShouye);
  __definePage("pages/faxian/faxian", PagesFaxianFaxian);
  __definePage("pages/denglu/denglu", PagesDengluDenglu);
  __definePage("pages/webview/webview", PagesWebviewWebview);
  __definePage("pages/xiaoxi/xiaoxi", PagesXiaoxiXiaoxi);
  __definePage("pages/wode/wode", PagesWodeWode);
  __definePage("pages/fabu/fabu", PagesFabuFabu);
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
