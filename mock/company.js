import MockJs from 'mockjs'
var Random = MockJs.Random

// 随机方法
// Random.extend({
//   constellation: function (date) {
//     var constellations = ['月嫂', '保姆', '育婴师', '产康师', '家装/搬家', '早教/托育', '养老/陪护', '保洁/清洗']
//     return this.pick(constellations)
//   }
// })
// const keyWord = Random.constellation()
// 公司图片
var companyPhoto = ['https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3420584700,3273220013&fm=26&gp=0.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604930371400&di=e82c74c8b4e459782fe7cea3704b138e&imgtype=0&src=http%3A%2F%2Fwww.zhuang520.com%2Fd%2Ffile%2Fpictrue%2F2018-09-04%2Fe0804d20bffd5099407b117b0d06473e.jpg', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2832422576,3603706988&fm=26&gp=0.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604930519339&di=547e7b93af82f50513bf859580f85292&imgtype=0&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D2634240147%2C259401863%26fm%3D214%26gp%3D0.jpg']
// 所有公司

var companys = []
for (var i = 1; i <= 10; i++) {
  Random.extend({
    constellation: function (date) {
      var constellations = ['月嫂', '保姆', '育婴师', '产康师', '家装/搬家', '早教/托育', '养老/陪护', '保洁/清洗']
      return this.pick(constellations)
    }
  })
  const keyWord = Random.constellation()

  companys.push({
    // id
    id: i + '',
    // 公司名字
    name: `长沙第${i}家政公司`,
    //  公司图片
    photo: companyPhoto,
    // 距离
    distance: 11 + `${i}km`,
    // 标题
    ctitle: Random.ctitle(5, 15),
    // 地址
    address: `${Random.county(true)}第${i}街道`,
    // 关键字
    keyWord: keyWord,
    // 公司标签
    comTag1: '协会成员',
    comTag2: '服务好',
    comTag3: '环境优美',
    // 注册人员
    regPerson: i,
    // 认证客户数
    attestationPerson: i * 1000,
    // 公司电话
    companyPhone: Random.string('number', 8),
    // 法人代表
    representative: Random.cname(),
    // 公司规模
    scale: `${i}00人以下`,
    // 公司介绍
    companyIntroduce: Random.cparagraph(),
    // 是否已关注
    is_followed: false

  })
}

export default companys
