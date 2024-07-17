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
  async getConfig() {
    const configs = await this.globalAppConfigService.getConfigs();
    return { success: true, message: 'OK', data: configs };
  }
}
