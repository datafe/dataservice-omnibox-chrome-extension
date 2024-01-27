
export const getDsHomeEndpoint = (region: string) => {

  let result = 'https://ds-cn-shanghai.data.aliyun.com';

  try {
    if (!region) return result;
    switch (region) {
      case 'inner':
        result = 'https://dataservice.dw.alibaba-inc.com';
        break;
      case 'cn-shanghai':
        result = 'https://ds-cn-shanghai.data.aliyun.com';
        break;
      case 'cn-beijing':
        result = 'https://ds-cn-beijing.data.aliyun.com';
        break;
      case 'cn-shenzhen':
        result = 'https://ds-cn-shenzhen.data.aliyun.com';
        break;
      case 'cn-hangzhou':
        result = 'https://ds-cn-hangzhou.data.aliyun.com';
        break;
      case 'cn-chengdu':
        result = 'https://ds-cn-chengdu.data.aliyun.com';
        break;
      case 'cn-zhangjiakou':
        result = 'https://ds-cn-zhangjiakou.data.aliyun.com';
        break;
      case 'cn-wulanchabu':
        result = 'https://ds-cn-wulanchabu.data.aliyun.com';
        break;
      case 'cn-hongkong':
        result = 'https://ds-cn-hongkong.data.aliyun.com';
        break;
      case 'ap-northeast-1':
        result = 'https://ds-ap-northeast-1.data.aliyun.com';
        break;
      case 'ap-southeast-1':
        result = 'https://ds-ap-southeast-1.data.aliyun.com';
        break;
      case 'ap-southeast-2':
        result = 'https://ds-ap-southeast-2.data.aliyun.com';
        break;
      case 'ap-southeast-3':
        result = 'https://ds-ap-southeast-3.data.aliyun.com';
        break;
      case 'ap-southeast-5':
        result = 'https://ds-ap-southeast-5.data.aliyun.com';
        break;
      case 'us-east-1':
        result = 'https://ds-us-east-1.data.aliyun.com';
        break;
      case 'us-west-1':
        result = 'https://ds-us-west-1.data.aliyun.com';
        break;
      case 'eu-west-1':
        result = 'https://ds-eu-west-1.data.aliyun.com';
        break;
      case 'eu-central-1':
        result = 'https://ds-eu-central-1.data.aliyun.com';
        break;
      case 'ap-south-1':
        result = 'https://ds-ap-south-1.data.aliyun.com';
        break;
      case 'me-east-1':
        result = 'https://ds-me-east-1.data.aliyun.com';
        break;
      case 'cn-shanghai-finance-1':
        result = 'https://ds-cn-shanghai-finance-1.data.aliyun.com';
        break;
      case 'cn-shenzhen-finance-1':
        result = 'https://ds-cn-shenzhen-finance-1.data.aliyun.com';
        break;
      case 'cn-north-2-gov-1':
        result = 'https://ds-cn-north-2-gov-1.data.aliyun.com';
        break;
    }
  } catch (e) {
    console.error(e);
  }

  return result;
}

/** route path */
export const getDsQueryApiRoutePath = (type: QueryAPIType) => {
  let result = '/manage/list';
  switch (type) {
    case 'api-develop':
      result = '/develop';
      break;
    default:
      result = '/manage/list';
  }
  return result;
}

const getOpenApiEndpoint = (region: string) => {
  let result = 'https://dataworks.cn-shanghai.aliyuncs.com';
  if (!region) return result;
  switch (region) {
    case 'cn-shanghai':
      result = 'https://dataworks.cn-shanghai.aliyuncs.com';
      break;
    case 'cn-beijing':
      result = 'https://dataworks.cn-beijing.aliyuncs.com';
      break;
    case 'cn-shenzhen':
      result = 'https://dataworks.cn-shenzhen.aliyuncs.com';
      break;
    case 'cn-hangzhou':
      result = 'https://dataworks.cn-hangzhou.aliyuncs.com';
      break;
    case 'cn-zhangjiakou':
      result = 'https://dataworks.cn-zhangjiakou.aliyuncs.com';
      break;
    case 'cn-chengdu':
      result = 'https://dataworks.cn-chengdu.aliyuncs.com';
      break;
    case 'cn-wulanchabu':
      result = 'https://dataworks.cn-wulanchabu.aliyuncs.com';
      break;
    case 'cn-hongkong':
      result = 'https://dataworks.cn-hongkong.aliyuncs.com';
      break;
    case 'ap-northeast-1':
      result = 'https://dataworks.ap-northeast-1.aliyuncs.com';
      break;
    case 'ap-southeast-1':
      result = 'https://dataworks.ap-southeast-1.aliyuncs.com';
      break;
    case 'ap-southeast-2':
      result = 'https://dataworks.ap-southeast-2.aliyuncs.com';
      break;
    case 'ap-southeast-3':
      result = 'https://dataworks.ap-southeast-3.aliyuncs.com';
      break;
    case 'ap-southeast-5':
      result = 'https://dataworks.ap-southeast-5.aliyuncs.com';
      break;
    case 'us-east-1':
      result = 'https://dataworks.us-east-1.aliyuncs.com';
      break;
    case 'us-west-1':
      result = 'https://dataworks.us-west-1.aliyuncs.com';
      break;
    case 'eu-west-1':
      result = 'https://dataworks.eu-west-1.aliyuncs.com';
      break;
    case 'eu-central-1':
      result = 'https://dataworks.eu-central-1.aliyuncs.com';
      break;
    case 'ap-south-1':
      result = 'https://dataworks.ap-south-1.aliyuncs.com';
      break;
    case 'me-east-1':
      result = 'https://dataworks.me-east-1.aliyuncs.com';
      break;
    case 'cn-shanghai-finance-1':
      result = 'https://dataworks.cn-shanghai-finance-1.aliyuncs.com';
      break;
    case 'cn-shenzhen-finance-1':
      result = 'https://dataworks.cn-shenzhen-finance-1.aliyuncs.com';
      break;
  }
  return result;
}
