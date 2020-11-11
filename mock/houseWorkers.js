import MockJs from 'mockjs'
var Random = MockJs.Random

// 随机方法
// 月嫂图片
var WorkerPhoto = ['https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2841992869,2094077500&fm=26&gp=0.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605073698532&di=943e555c1e4b68ed9721995d5857b3fa&imgtype=0&src=http%3A%2F%2Fwww.lzbs.com.cn%2Flanzhounews%2Fsite2%2F20171028%2FR061509133246835_change_p75_b.jpg', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4053997526,1075551254&fm=26&gp=0.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605073698531&di=d9f85df366f8a0a46909bda9bda8ec80&imgtype=0&src=http%3A%2F%2Fwww.bynrnews.com%2Fu%2Fcms%2Fwww%2F201802%2F090906203f1t.jpg']

var companys = []
for (var i = 1; i <= 12; i++) {
  // 月嫂星级
  Random.extend({
    star: function (date) {
      var star = ['一星育婴师', '二星育婴师', '三星育婴师', '四星育婴师', '五星育婴师']
      return this.pick(star)
    }
  })

  const grade = Random.star()
  // 月嫂星座
  Random.extend({
    constellation: function (date) {
      var constellations = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
      return this.pick(constellations)
    }
  })

  const constellation = Random.constellation()
  // 月嫂学历
  Random.extend({
    education: function (date) {
      var educations = ['初中', '小学', '职高', '高中', '研究生及以上', '大专', '本科', '中专']
      return this.pick(educations)
    }
  })
  const education = Random.education()
  // 月嫂生肖
  Random.extend({
    zodiac: function (date) {
      var zodiac = ['鼠', '牛', '兔', '虎', '龙', '蛇', '马', '羊', '鸡', '狗', '猪', '猴']
      return this.pick(zodiac)
    }
  })

  const zodiac = Random.zodiac()
  // 月嫂职业
  Random.extend({
    profession: function (date) {
      var professions = ['月嫂|育婴师|保洁/清洁', '保姆|早教/托管|养老/陪护', '家装/搬家|产康师|月嫂', '育婴师|早教/托管|产康师']
      return this.pick(professions)
    }
  })

  const profession = Random.profession()
  // 月嫂技能
  Random.extend({
    skills: function (date) {
      var skills = ['做饭|月子餐|洗衣服|育婴护理', '小孩看护|家教辅导|做饭|家庭保洁', '育婴护理|做饭|家教辅导', '月子餐|小孩看护|家教辅导|家庭保洁']
      return this.pick(skills)
    }
  })

  const skills = Random.skills()
  // 月嫂技能
  Random.extend({
    nation: function (date) {
      var nations = ['汉族', '回族', '藏族', '维吾尔族', '苗族', '彝族', '壮族']
      return this.pick(nations)
    }
  })

  const nation = Random.nation()
  companys.push({
    // id
    id: i,
    // 月嫂名字
    worker_name: Random.cname(),
    //  公司名字
    com_name: `长沙第${i}家政公司`,
    //  公司图片
    worker_photo: WorkerPhoto,
    // 年龄
    age: 40 + parseInt(`${i}`),
    // 标题
    ctitle: Random.ctitle(5, 15),
    // 地域
    address: `${Random.city(true)}`,
    // 月嫂标签
    comTag1: grade,
    comTag2: `${i}年经验`,
    //  月嫂星座
    constellation: constellation,
    // 价格
    price: i * 1000 + 6000 + '元' + '/' + '26天',
    // 服务户数
    serve_number: i,
    // 注册人员
    regPerson: i,
    // 认证客户数
    attestationPerson: i * 1000,
    // 民族籍贯
    nation: nation,
    // 出生日期
    birthday: Random.date('yyyy-MM-dd'),
    // 月嫂学历
    education: education,
    // 月嫂介绍
    workerIntroduce: Random.cparagraph(),
    // 是否已关注
    is_followed: false,
    // 评价条数
    comments: i + 10,
    // 月嫂职业
    profession: profession,
    // 月嫂技能
    skills: skills,
    // 月嫂生肖
    zodiac: zodiac

  })
}

export default companys
