import Mock from 'mockjs'
import loginAPI from './login'
import articleAPI from './article'
import remoteSearchAPI from './remoteSearch'

Mock.setup({
  timeout: '350-600'
})

// 登录相关
Mock.mock(/\/login\/login/, 'post', loginAPI.UserRegister)

export default Mock
