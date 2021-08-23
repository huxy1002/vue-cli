const TOKEN_KEY = "login_user_token";
const LOGIN_USER = "login_user";
const LOGIN_USER_MENUS = "login_user_menus";
const LOGIN_USER_SYS = "login_user_sys";

const storage = window.localStorage;

export default {

  /**
   * 缓存登录用户token
   */
  cacheLoginUserToken: (token) => {
    if (token) {
      storage.setItem(TOKEN_KEY, token);
    }
  },

  /**
   * 获取登录用户token
   */
  getLoginUserToken: () => {
    return storage.getItem(TOKEN_KEY);
  },

  /**
   * 缓存登录用户信息
   */
  cacheLoginUser: (loginUser = {}) => {
    if (loginUser) {
      storage.setItem(LOGIN_USER, JSON.stringify(loginUser));
    }
  },

  /**
   * 获取登录用户信息
   */
  getLoginUser: () => {
    let json = storage.getItem(LOGIN_USER)
    return JSON.parse(json);
  },

  /**
   * 缓存登录用户菜单
   */
  cacheLoginUserMenus: (menus = []) => {
    if (menus) {
      storage.setItem(LOGIN_USER_MENUS, JSON.stringify(menus));
    }
  },

  /**
   * 获取登录用户菜单
   */
  getLoginUserMenus: () => {
    let json = storage.getItem(LOGIN_USER_MENUS);
    return JSON.parse(json);
  },
  
  /**
   * 缓存登录用户操作系统
   */
  cacheLoginUserSystems: (menus = []) => {
    if (menus) {
      storage.setItem(LOGIN_USER_SYS, JSON.stringify(menus));
    }
  },

  /**
   * 获取登录用户可操作系统
   */
  getLoginUserSystems: () => {
    let json = storage.getItem(LOGIN_USER_SYS);
    return JSON.parse(json);
  },
  /**
   * 清空缓存
   */
  clearLoginInfo: () => {
    storage.removeItem(TOKEN_KEY);
    storage.removeItem(LOGIN_USER);
    storage.removeItem(LOGIN_USER_MENUS);
    storage.removeItem(LOGIN_USER_SYS);
  }
}