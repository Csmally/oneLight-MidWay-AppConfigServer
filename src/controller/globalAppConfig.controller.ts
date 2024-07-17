import { Inject, Controller, Get } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { GlobalAppConfigService } from '../service/globalAppConfig.service';

@Controller('/globalAppConfig')
export class GlobalAppConfigController {
  @Inject()
  ctx: Context;

  @Inject()
  globalAppConfigService: GlobalAppConfigService;

  @Get()
  getConfig() {
    const configs = this.globalAppConfigService.getConfigs();
    return { success: true, message: 'success', data: configs, code: 200 };
  }
}
