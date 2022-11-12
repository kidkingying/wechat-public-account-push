/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx8f1792685d6f6658',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'da059a5344957346f8648f638ed11c53',

  PROVINCE: '河北',
  CITY: '保定',

  USERS: [
    {
      // 想要发送的人的名字
      name: '乖乖',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oSpys6Qw2_ggNDHQCDSYIseB2WQo',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'rU_WDCnrivDFGFQGFW_TVxzsJwfP5AqkuyGNxw0SaM8',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '01-03',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '乖乖', year: '1998', date: '01-03',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小欣', year: '2006', date: '11-26',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '11-11',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-01-14' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-11-11' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oSpys6RDv7HEhvX4JZH2u6uPNtvw',
    }
  ],

}

module.exports = USER_CONFIG

