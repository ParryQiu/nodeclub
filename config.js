/**
 * config
 */

var path = require('path');

var config = {
  // debug 为 true 时，用于本地调试
  debug: false,

  get mini_assets() { return !this.debug; }, // 是否启用静态文件的合并压缩，详见视图中的Loader

  name: 'WXOPEN Club', // 社区名字
  description: 'WXOPEN Club | 微信小程序专业社区', // 社区的描述
  keywords: '微信小程序, 微信小程序开发者社区, 微信小程序开发, 微信小程序论坛, 小程序开发社区',

  // 添加到 html head 中的信息
  site_headers: [
    '<meta name="author" content="Parry" />'
  ],
  site_logo: 'https://ogo92oag1.qnssl.com/logo.png?v=20170214', // default is `name`
  site_icon: 'https://ogo92oag1.qnssl.com/favicon.png?v=20170214', // 默认没有 favicon, 这里填写网址
  // 右上角的导航区
  site_navs: [
    // 格式 [ path, title, [target=''] ]
    [ '/about', '关于' ]
  ],
  // cdn host，如 http://cnodejs.qiniudn.com
  site_static_host: '', // 静态文件存储域名
  // 社区的域名
  host: 'wxopen.club',
  // 默认的Google tracker ID，自有站点请修改，申请地址：http://www.google.com/analytics/
  google_tracker_id: '',
  // 默认的cnzz tracker ID，自有站点请修改
  cnzz_tracker_id: '',

  // mongodb 配置
  db: 'mongodb://127.0.0.1/node_club_dev',

  // redis 配置，默认是本地
  redis_host: '127.0.0.1',
  redis_port: 6379,
  redis_db: 0,
  redis_password: '',

  session_secret: 'node_club_secret', // 务必修改
  auth_cookie_name: 'node_club',

  // 程序运行的端口
  port: 80,//3000

  // 话题列表显示的话题数量
  list_topic_count: 31,

  // RSS配置
  rss: {
    title: 'WXOPEN Club | 微信小程序专业社区',
    link: 'http://wxopen.club',
    language: 'zh-cn',
    description: 'WXOPEN Club 社区为国内最专业的微信小程序技术社区，致力于微信小程序的技术研究。',
    //最多获取的RSS Item数量
    max_rss_items: 50
  },

  // 邮箱配置
  mail_opts: {
    host: 'mail.wxopen.club',
    port: 25,
    auth: {
      user: 'mail@wxopen.club',
      pass: 'waialbb'
    },
    ignoreTLS: true,
  },

  //weibo app key
  weibo_key: 10000000,
  weibo_id: 'your_weibo_id',

  // admin 可删除话题，编辑标签。把 user_login_name 换成你的登录名
  admins: { 'parry' : true },

  // github 登陆的配置
  GITHUB_OAUTH: {
    clientID: '8f12a400ee4d30573f64',
    clientSecret: '8e7c2f3f425e0bbddc82c1a19b07e1faaeee5b4f',
    callbackURL: 'http://wxopen.club/auth/github/callback'
  },
  // 是否允许直接注册（否则只能走 github 的方式）
  allow_sign_up: true,

  // oneapm 是个用来监控网站性能的服务
  oneapm_key: '',

  // 下面两个配置都是文件上传的配置

  // 7牛的access信息，用于文件上传
  qn_access: {
    accessKey: 'PhPpczdgRRT3Z2BXNits0bkaXc0_ugqV8n0sT5fQ',
    secretKey: '5ikD6s-6rhXgpRC7Jl-QxN4OClcVbIOqyNQWdllU',
    bucket: 'wxopenclub',
    origin: 'https://ogo92oag1.qnssl.com',
    // 如果vps在国外，请使用 http://up.qiniug.com/ ，这是七牛的国际节点
    // 如果在国内，此项请留空
    uploadURL: '',
  },

  // 文件上传配置
  // 注：如果填写 qn_access，则会上传到 7牛，以下配置无效
  upload: {
    path: path.join(__dirname, 'public/upload/'),
    url: '/public/upload/'
  },

  file_limit: '1MB',

  // 版块
  tabs: [
    ['share', '分享'],
    ['ask', '问答'],
    ['issues', '官方Issues'],
    ['job', '项目外包信息'],
    ['app', '开源微信小程序'],
  ],

  // 极光推送
  jpush: {
    appKey: 'YourAccessKeyyyyyyyyyyyy',
    masterSecret: 'YourSecretKeyyyyyyyyyyyyy',
    isDebug: false,
  },

  create_post_per_day: 1000, // 每个用户一天可以发的主题数
  create_reply_per_day: 1000, // 每个用户一天可以发的评论数
  create_user_per_ip: 1000,
  visit_per_day: 1000, // 每个 ip 每天能访问的次数
};

if (process.env.NODE_ENV === 'test') {
  config.db = 'mongodb://127.0.0.1/node_club_test';
}

module.exports = config;
