import { Provide } from '@midwayjs/core';
import { launchScreenImgs, homeQuickSearchBar } from '../mock/appConfigsData';

@Provide()
export class GlobalAppConfigService {
  getConfigs() {
    return { launchScreenImgs, homeQuickSearchBar };
  }
}
