/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx08571a254d3bf91f',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '7b443f34a3b364e7abe76f4ef64de820',

  PROVINCE: '上海',
  CITY: '上海',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'om7245ug4413p8ZHH8-lX8wp8EmA',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '7zCRq8sTRYoOCuCHvin2eo1vjh8mQsDZ1xlr-Zgqc5Y',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-02',
      festivals: [
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝宝', year: '1997', date: '11-02',
        }
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-04-05' }
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '7zCRq8sTRYoOCuCHvin2eo1vjh8mQsDZ1xlr-Zgqc5Y',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'om7245jP8bjtHnlVECF5H8zVdjtI',
    }
  ],

}

module.exports = USER_CONFIG

