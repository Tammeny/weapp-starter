const Encrypt = require('../../libs/encrypt/jsencrypt.js');
const Config = require('../../utils/config.js');
import { ProxyLogin } from '../../proxies/user.js';

Page({
  data: {},
  async login() {
    const username = 'test';
    const password = 'test';
    const encrypt = new Encrypt.JSEncrypt();
    encrypt.setPublicKey(Config.key);
    const encrypted = encrypt.encrypt(password);
    const params = {
      username,
      password: encrypted,
    };
    const res = await ProxyLogin(params);
    if (res.success) {
      // 登录成功
    }
  },
})