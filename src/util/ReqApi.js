import axios from 'axios'
export default {
  // 登录
  login: (data, cb) => {
    axios.get('api/user/login', {
      params: data
    }).then(res => {
      cb && cb(res)
    })
  },
  // 登出
  logout: (data, cb) => {
    axios.get('api/user/logout', {
      params: data
    }).then(res => {
      cb && cb(res)
    })
  },

  // 上传
  upLoad: (data, cb) => {
    axios.post('manage/ossClien/upload',
      data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    ).then(res => {
      cb && cb(res)
    })
  },
  //delete
  memorialVisitorDynamic: (data, cb) => {
    axios.delete(`manage/memorial/visitorDynamic/${data.id}`, {}).then(res => {
      cb && cb(res)
    })
  },
  //get
  busBuryHallPageAll: (data, cb) => {
    axios.get('manage/busBuryHall/pageAll', {
      params: data
    }).then(res => {
      cb && cb(res)
    })
  },
  //post
  busBuryHallSave: (data, cb) => {
    axios.post('manage/busBuryHall/save', {
      ...data
    }).then(res => {
      cb && cb(res)
    })
  },
}
