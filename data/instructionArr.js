var instructionArr = [
  {
    id: "0",
    title: "使用说明",
    content: "● 在输入框中输入数字，程序将自动换算出其他单位的对应数值\n● 由于输入框长度有限，正在输入的数字会显示在顶部的展示框内，以便查看\n● 自动变换数值的输入框显示为淡黄色背景，且此时的输入框为禁止输入状态\n● 自动计算出的数值，根据不同单位在实际生活中的运用，小数点后保留不同位数的小数\n“克”、“元/斤”、“元”保留2位小数\n“千克 公斤”保留5位小数\n“斤”、“两”取整\n车主专区均保留2位小数\n均采用四舍五入的计算方式\n● 包括小数点在内，最多输入15个字符\n● 输入多个小数点将在顶部红字提醒\n● 单击重置按钮，所有输入框将清空，回到初始状态",
    aboutBtn: "",
  },
  {
    id: "1",
    title: "适用场景",
    content: "卖废品；\n买菜/购物时的对账；\n家用秤单位换算（如：食品秤、体重秤）；\n油价油量换算；\n日均油耗；\n等等",
    aboutBtn: "",
  },
  {
    id: "2",
    title: "开发灵感",
    content: "本人程序媛一枚，我的婆婆特别喜欢把买回来的肉啊菜的用自家食品秤称一下，让我给她算一下xx克是几斤几两，多少钱，看看肉摊菜摊的大叔大妈有没有算错。还有卖废品的时候，她总是自己先称一遍，问清楚对方多少钱一斤，让我给她算好，以免人家缺斤少两坑人。\n三天两头帮她算这算那着实闹得心烦，于是我就想到给她做个小程序，输几个数字自动出结果，操作简便，也无需再麻烦我了。\n也许有朋友和我有相似的经历或需求，那就支持一下本小程序吧！愿大家喜欢~",
    aboutBtn: "",
  },
  {
    id: "3",
    title: "反馈&交流",
    content: "希望大家可以将使用过程中遇到的问题反馈给我，同时欢迎开发者朋友添加我的微信进行交流。我还很菜，需要不断努力不断进步鸭~",
    aboutBtn: "点击复制开发者微信号",
    btnType: "copy",
    copyContent: "mimim-3-",
  },
  {
    id: "4",
    title: "版本更新",
    content: "1.0.0 称量\n2.0.1 新增车主专区、修复bug——输入多个小数点红字提醒后点击重置按钮仍为红字",
    aboutBtn: "",
  },
  {
    id: "5",
    title: "鸣谢",
    content: "特别感谢那些帮助我、支持我的人，手动艾特：\n@Raymond严嘉阳\n——小程序「倒数记日」开发者\n@刘明洋\n——《微信小程序实战入门》作者\n@7七月\n——慕课网最受欢迎的讲师，没有之一\n@绝对不能漏掉的加菲\n——我的猪猪老公〃∀〃\n爱你们，比心心(´▽`ʃ♡ƪ)~",
    aboutBtn: "",
  },
]

var linkArr = [
  {
    id: "0",
    title: "绑定小程序",
    content: "登录您的微信公众号后台，在左侧菜单栏找到小程序，点击小程序管理，选择关联小程序，输入本小程序的AppId并提交即可",
    aboutBtn: "点击复制本小程序AppId",
    btnType: "copy",
    copyContent: "wx0ffed18e0567edf4",
  },
  {
    id: "1",
    title: "在自定义菜单中跳转小程序",
    content: "在设置公众号自定义菜单中，选择菜单或子菜单内容时，选择跳转小程序，单击选择小程序，输入“家常单位换算转换”，输入小程序页面路径（默认为首页），保存发布即可",
    aboutBtn: "",
  },
  {
    id: "2",
    title: "在群发图文中跳转小程序",
    content: "在编辑图文消息时，在右侧多媒体选择区点击“小程序”，并选择“家常单位换算转换”，输入小程序页面路径（默认为首页），并以您希望的形式呈献给用户（文字、图片、小程序卡片）",
    aboutBtn: "",
  },
]

var otherProArr = [
  {
    id: "0",
    title: "倒数记日",
    content: "帮你记录每一个重要的日子，支持公历/农历",
    aboutBtn: "点击跳转「倒数记日」小程序",
    btnType: "nav",
    appId: "wx9b74a5957a52a7f4",
  },
  {
    id: "1",
    title: "生活垃圾怎么分",
    content: "生活垃圾分类查询",
    aboutBtn: "点击跳转「生活垃圾怎么分」小程序",
    btnType: "nav",
    appId: "wx10d9d1765d1ea386",
  },
  {
    id: "2",
    title: "买家之选",
    content: "分享适合你的用户体验和解决方案，并推荐最适合你的购买渠道",
    aboutBtn: "点击跳转「买家之选」小程序",
    btnType: "nav",
    appId: "wxec8dbdaeca260cac",
  },
  {
    id: "3",
    title: "LinUI",
    content: "林间有风团队出品的小程序开源组件",
    aboutBtn: "点击跳转「LinUI」小程序",
    btnType: "nav",
    appId: "wxdcec05d9a27f9064",
  },
]

module.exports = {
  instructionArr: instructionArr,
  linkArr: linkArr,
  otherProArr: otherProArr,
}