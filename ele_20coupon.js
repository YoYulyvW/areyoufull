//Sun Aug 18 2024 09:51:15 GMT+0000 (Coordinated Universal Time)
//MK集团修复版饿了么抢卷20
const {
  getToken,
  checkCk,
  validateCarmeWithType,
  User_Agent,
  getUserInfo,
  tryCatchPromise,
  couponNotify,
  getCookies
} = require("./common.js");
const _0x5cfd73 = require("request");
const _0x57a0d9 = require("moment");
const _0x4185cb = require("md5");
const _0x118766 = process.env.ELE_CARME;
const _0x3c4f70 = process.env.threadCount || 1;
function _0x388df2(_0x196dcb) {
  const _0xb21bdc = _0x57a0d9(_0x196dcb).startOf("day");
  const _0x11dd57 = {
    hour: 10,
    minute: 0,
    second: 0,
    millisecond: 0
  };
  const _0x36f26d = _0xb21bdc.clone().set(_0x11dd57);
  const _0x1dd857 = _0x57a0d9(_0x196dcb).isAfter(_0x36f26d);
  const _0x42b54c = _0x57a0d9(_0x196dcb);
  if (_0x1dd857) {
    _0x42b54c.add(1, "day");
  }
  const _0x55afed = {
    hour: 10,
    minute: 0,
    second: 0,
    millisecond: 0
  };
  _0x42b54c.set(_0x55afed);
  return _0x42b54c.valueOf();
}
async function _0x5cb5d5(_0x34439d) {
  const _0x3a2e54 = {
    bizScene: "IDIOM",
    bizParam: "{\"type\":\"ggetGold\"}",
    bizMethod: "queryIndex"
  };
  let _0x2f08c7 = await _0xf0ec8a(_0x34439d, _0x3a2e54);
  return _0x2f08c7.data;
}
async function _0xf0ec8a(_0x3d0bc3, _0x553b54) {
  const _0x326bf4 = {
    authority: "shopping.ele.me",
    accept: "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    origin: "https://r.ele.me",
    pragma: "no-cache",
    referer: "https://r.ele.me/linkgame/index.html?navType=3&spm-pre=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a13.b_activity_kb_m71293.0.0",
    cookie: _0x3d0bc3,
    "x-ele-ua": "RenderWay/H5 AppName/wap Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36",
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0x24a12d = new Date().getTime();
  const _0x5b2416 = 12574478;
  var _0x39b162 = "data=" + encodeURIComponent(JSON.stringify(_0x553b54));
  const _0x2b48d9 = getToken(_0x3d0bc3),
    _0x558f51 = _0x2b48d9.split("_")[0];
  const _0x2ea31d = _0x4185cb(_0x558f51 + "&" + _0x24a12d + "&" + _0x5b2416 + "&" + JSON.stringify(_0x553b54), _0x118766);
  const _0x3b7faf = {
    url: "https://shopping.ele.me/h5/mtop.alsc.playgame.mini.game.dispatch/1.0/?jsv=2.6.1&appKey=12574478&t=" + _0x24a12d + "&sign=" + _0x2ea31d + "&api=mtop.alsc.playgame.mini.game.dispatch&v=1.0&type=originaljson&dataType=json&timeout=5000&subDomain=shopping&mainDomain=ele.me&H5Request=true&pageDomain=ele.me&ttid=h5%40chrome_android_87.0.4280.141&SV=5.0",
    method: "POST",
    headers: _0x326bf4,
    body: _0x39b162
  };
  return tryCatchPromise(_0x5498bd => {
    _0x5cfd73(_0x3b7faf, async (_0x456bed, _0x35e8d1, _0xa67910) => {
      if (!_0x456bed && _0x35e8d1.statusCode === 200) {
        try {
          const _0x31a638 = JSON.parse(_0xa67910);
          _0x5498bd(_0x31a638);
        } catch (_0x5d9bfd) {
          console.log(_0xa67910);
          _0x5498bd(null);
        }
      } else {
        _0x5498bd(null);
      }
    });
  });
}
async function _0x3a03f7(_0x29c93f, _0x17aaf6, _0x39ccab) {
  const _0x2562ae = {
    "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
    Cookie: _0x29c93f,
    "x-tap": "wx",
    referer: "https://servicewechat.com/wxece3a9a4c82f58c9/532/page-frame.html",
    "mini-janus": "3%40s41AHfqDnza7twZ2HI4gXYAtN9eRII6d1C2B5eTDUozQHuWiR6VTpHEdvgDci1%3D%3D",
    "User-Agent": "Mozilla/5.0 (Linux; Android 13; Pixel 4 XL Build/TP1A.220905.004; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5197 MMWEBSDK/20221012 MMWEBID/3313 MicroMessenger/8.0.30.2260(0x28001E55) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android"
  };
  const _0x14c7aa = {
    condition: "",
    latitude: 30.17853,
    longitude: 120.221101,
    tabCode: "HONG_BAO",
    sourceFrom: "ELEME_WECHAT_MINIAPP",
    extInfo: "{\"miniAppVersion\":\"10.19.31\"}"
  };
  const _0x263bcc = new Date().getTime();
  const _0x285fa6 = 12574478;
  var _0x373324 = "data=" + encodeURIComponent(JSON.stringify(_0x14c7aa));
  const _0x40994c = _0x17aaf6.split(";")[0],
    _0x158924 = _0x40994c.split("_")[0];
  const _0x480f54 = _0x4185cb(_0x158924 + "&" + _0x263bcc + "&" + _0x285fa6 + "&" + JSON.stringify(_0x14c7aa), _0x118766);
  const _0x3515de = {
    url: "https://guide-acs.m.taobao.com/h5/mtop.alsc.personal.querypasslist/1.0/2.0/?jsv=2.4.12&appKey=12574478&t=" + _0x263bcc + "&sign=" + _0x480f54 + "&c=" + _0x17aaf6 + "&api=mtop.alsc.personal.queryPassList&dataType=json&method=GET&timeout=10000&v=1.0&type=originaljson&ttid=wxece3a9a4c82f58c9%40wechat_android_11.1.5&accountSite=eleme&needLogin=true&ecole=1&_bx-m=1",
    method: "GET",
    headers: _0x2562ae,
    body: _0x373324
  };
  return tryCatchPromise(_0x1054b7 => {
    _0x5cfd73(_0x3515de, async (_0x597730, _0x5c992b, _0x3053ac) => {
      if (!_0x597730 && _0x5c992b.statusCode === 200) {
        try {
          const _0x2e2f6a = JSON.parse(_0x3053ac);
          if (_0x2e2f6a.c) {
            _0x1054b7(_0x2e2f6a.c);
          } else {
            if (_0x2e2f6a.data.result) {
              let _0xd38e5b = _0x2e2f6a.data.result.passInfoList[0];
              if (_0xd38e5b) {
                let _0x2f5494 = _0x57a0d9(new Date().getTime());
                let _0x266f4a = _0x2f5494.startOf("day").valueOf();
                let _0x391982 = _0xd38e5b.benefitList.filter(_0x21631a => _0x21631a.benefitType === "ELE_COMMODITY_HB");
                let _0x2de40c = _0x391982.filter(_0x4d5328 => {
                  return _0x4d5328.gmtCreate >= _0x266f4a / 1000 + "";
                });
                let _0x4458cb = _0x2de40c.filter(_0x5e1408 => _0x5e1408.amountText.amountText === "20");
                if (_0x4458cb.length > 0) {
                  console.log("抢券成功", _0x4458cb[0].title);
                  await couponNotify(_0x29c93f, "###抢券成功推送\n手机号：" + _0x39ccab + "\n抢券成功" + _0x4458cb[0].title);
                  process.exit(0);
                } else {
                  console.log("抢券失败");
                  process.exit(0);
                }
              } else {
                console.log("抢券失败");
                process.exit(0);
              }
            } else {
              console.log("抢券失败");
              process.exit(0);
            }
          }
        } catch (_0x48ec89) {
          console.log("查询抢券结果异常，请到 app 中查看");
          process.exit(0);
        }
      } else {
        console.log("抢券失败");
        process.exit(0);
      }
    });
  });
}
async function _0x447755(_0xd50e05, _0x12a15e) {
  const _0x2d9c69 = {
    "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
    Cookie: _0xd50e05,
    "User-Agent": User_Agent
  };
  const _0x3df376 = new Date().getTime();
  const _0x4e1415 = 12574478;
  const _0x376a23 = {
    actId: "20221207144029906162546384",
    collectionId: "20221216181231449964003945",
    copyId: "20230627110035952340005303",
    bizScene: "game_center",
    channel: "abcd",
    asac: "2A22C0239QW1FOL3UUQY7U"
  };
  const _0xbbbdee = "data=" + encodeURIComponent(JSON.stringify(_0x376a23));
  const _0x23ce80 = getToken(_0xd50e05),
    _0x14ad0d = _0x23ce80.split("_")[0];
  const _0x14ab0c = _0x4185cb(_0x14ad0d + "&" + _0x3df376 + "&" + _0x4e1415 + "&" + JSON.stringify(_0x376a23));
  const _0x1226ca = {
    url: "https://guide-acs.m.taobao.com/h5/mtop.koubei.interactioncenter.platform.right.exchange.v2/1.0/5.0/?jsv=2.7.1&SV=5.0&appKey=12574478&ttid=1601274958480%40eleme_android_10.14.3&t=" + _0x3df376 + "&sign=" + _0x14ab0c + "&api=mtop.koubei.interactioncenter.platform.right.exchange.v2",
    method: "POST",
    headers: _0x2d9c69,
    body: _0xbbbdee
  };
  const _0x1ef790 = {
    length: _0x3c4f70
  };
  const _0x1e7bf9 = Array.from(_0x1ef790, () => {
    return tryCatchPromise(_0x33f0fb => {
      _0x5cfd73(_0x1226ca, async (_0x4b5943, _0x4e76d0, _0x2a0a14) => {
        if (!_0x4b5943 && _0x4e76d0.statusCode === 200) {
          try {
            const _0x3312e3 = JSON.parse(_0x2a0a14);
            if (_0x3312e3.data.data) {
              console.log("抢券成功", _0x3312e3.data.data[0].rightName);
              await couponNotify(_0xd50e05, "###抢券成功推送\n手机号：" + _0x12a15e + "\n抢券成功" + _0x3312e3.data.data[0].rightName);
              process.exit(0);
            } else {
              _0x33f0fb();
            }
          } catch (_0x2c7283) {
            console.log(_0x2c7283);
            _0x33f0fb(null);
          }
        } else {
          _0x33f0fb(null);
        }
      });
    });
  });
  await Promise.all(_0x1e7bf9).then(_0x163fbf => {}).catch(_0x119c6f => {});
}
async function _0x4105e4() {
  await validateCarmeWithType(_0x118766, 1);
  const _0x5a7eda = getCookies("elmqqck");
  for (let _0x572463 = 0; _0x572463 < _0x5a7eda.length; _0x572463++) {
    let _0x3db6c1 = _0x5a7eda[_0x572463];
    _0x3db6c1 = await checkCk(_0x3db6c1, _0x572463);
    if (!_0x3db6c1) {
      process.exit(0);
      continue;
    }
    let _0x1f52f4 = await getUserInfo(_0x3db6c1);
    if (!_0x1f52f4.username) {
      console.log("第", _0x572463 + 1, "账号失效！请重新登录！！！😭");
      process.exit(0);
    }
    const _0x4235d3 = _0x1f52f4.user_id;
    let _0x3d1130 = _0x1f52f4.mobile;
    console.log("****** #" + (_0x572463 + 1), _0x3d1130, "*********");
    console.log("账号的 id 为", _0x4235d3);
    console.log("当前抢券线程数为", _0x3c4f70);
    let _0x38cdec = await _0x5cb5d5(_0x3db6c1);
    let _0x39ea23 = -1;
    if (_0x38cdec.data) {
      _0x39ea23 = JSON.parse(_0x38cdec.data).num;
    } else {
      _0x39ea23 = -1;
    }
    if (_0x39ea23 !== -1 && _0x39ea23 < 13999) {
      console.log("金币不够兑换 20 元券，程序结束");
      process.exit(0);
    }
    let _0x227d8d;
    if (_0x38cdec) {
      _0x227d8d = _0x38cdec.currentTimestamp;
    } else {
      _0x227d8d = new Date().getTime();
    }
    let _0x3ce9dc = _0x388df2(_0x227d8d);
    let _0x2f2307 = _0x3ce9dc - _0x227d8d - 2000;
    console.log("程序将在", _0x2f2307 / 1000, "秒后开始抢券");
    setTimeout(async () => {
      _0x4f14c0(_0x3db6c1, _0x3d1130);
      while (true) {
        await _0x447755(_0x3db6c1, _0x3d1130);
      }
    }, _0x2f2307);
  }
}
function _0x4f14c0(_0x3714f7, _0x4e4a82) {
  setTimeout(async () => {
    let _0x47c93e = await _0x3a03f7(_0x3714f7, "64c767d7e6851eebe3c8cd476b0bc622_1692237574823;6f86648948993abca30366d96015297a", _0x4e4a82);
    if (_0x47c93e) {
      await _0x3a03f7(_0x3714f7, _0x47c93e, _0x4e4a82);
    }
    process.exit(0);
  }, 10000);
}
_0x4105e4();
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null);
            e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          t.method = "POST";
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: r,
              body: o
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, t => e(t));
        } else {
          if (this.isNode()) {
            this.initGotEnv(t);
            const {
              url: s,
              ...i
            } = t;
            this.got.post(s, i).then(t => {
              const {
                statusCode: s,
                statusCode: i,
                headers: r,
                body: o
              } = t;
              e(null, {
                status: s,
                statusCode: i,
                headers: r,
                body: o
              }, o);
            }, t => {
              const {
                message: s,
                response: i
              } = t;
              e(s, i, i && i.body);
            });
          }
        }
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) {
          return t;
        }
        if ("string" == typeof t) {
          return this.isLoon() ? t : this.isQuanX() ? {
            "open-url": t
          } : this.isSurge() ? {
            url: t
          } : void 0;
        }
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}