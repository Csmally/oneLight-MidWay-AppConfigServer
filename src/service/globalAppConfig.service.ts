import { Provide } from '@midwayjs/core';
const homeTabs = [
  {
    title: '全部',
    img: 'http://10.193.235.32:7002/public/appAssets/homePageTabs/all.png',
    keyWord: '全部',
    id: '0',
  },
  {
    title: '美食',
    img: 'http://10.193.235.32:7002/public/appAssets/homePageTabs/food.png',
    keyWord: '美食',
    id: '1',
  },
  {
    title: '快递',
    img: 'http://10.193.235.32:7002/public/appAssets/homePageTabs/express.png',
    keyWord: '快递',
    id: '2',
  },
  {
    title: 'Replace',
    img: 'http://10.193.235.32:7002/public/appAssets/homePageTabs/class.png',
    keyWord: '代课',
    id: '3',
  },
  {
    title: '兼职',
    img: 'http://10.193.235.32:7002/public/appAssets/homePageTabs/job.png',
    keyWord: '兼职',
    id: '4',
  },
];
@Provide()
export class GlobalAppConfigService {
  async getConfigs() {
    return { homeTabs };
  }
}
