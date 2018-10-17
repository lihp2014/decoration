import req from '../utils/request'

export const getBanner = param => {
  return req.get('/banner', param)
}

export const getNews = param => {
  return req.get('/news', param)
}

export const getNewsDetail = param => {
  return req.get('/news/' + param , param)
}

export const getExamples = param => {
  return req.get('/examples', param);
}

export const getExampleDetail = param => {
  return req.get('/examples/' + param, param)
}

// 留言板
export const postMsg = param => {
  return req.post('/messageuser', param);
}

// 贷款申请
export const loanApply = param => {
  return req.post('/loanapply', param);
}

// 个人中心
export const getPersonInfo = param => {
  return req.get('/personinfo', param)
}

// 合伙人
export const partnerBind = param => {
  return req.get('/partner', param)
}

// 积分明细
export const moneyDetail = param => {
  return req.get('/pointfor/' + param)
}

// 积分提现
export const withdrawPoint = param => {
  return req.post('/addpointfor', param)
}

// VIP
export const vipSpread = param => {
  return req.get('/vipuser', param)
}

// VIP第二市场
export const vipSecond = param => {
  return req.get('/vipusermarket', param)
}

// 关于我们
export const linkus = param => {
  return req.get('/linkus', param);
}
