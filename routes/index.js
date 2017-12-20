var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', {
    modules: [{
      title: '预约挂号',
      href: 'http://www.jkqz.org/phportal/alipay/appoint/alipayOrganzationList.html',
      img: '/images/gsdj_nmzyhz_icon.png'
    },{
      title: '医院介绍',
      href: 'http://www.jkqz.org/phportal/alipay/hospitalIntroduced/hospitalList.html',
      img: '/images/gsdj_gxwj_icon.png'
    },{
      title: '专家介绍',
      href: 'http://www.jkqz.org/phportal/alipay/expertsIntroduced/hospitalList.html',
      img: '/images/gsdj_ywmc_icon.png'
    },{
      title: '医院导航',
      href: 'http://www.jkqz.org/phportal/alipay/account/hospitalAvigation.html',
      img: '/images/gsdj_hzxs_icon.png'
    },{
      title: '家庭成员',
      href: 'http://www.jkqz.org/phportal/alipay/mainPage.html',
      img: '/images/gsdj_llqry_icon.png'
    },{
      title: '检查检验',
      href: 'http://www.jkqz.org/phportal/alipay/mainPage.html',
      img: '/images/gsdj_nmzyhz_icon.png'
    },{
      title: '健康咨询',
      href: 'http://www.jkqz.org/phportal/alipay/healthNews/healthNewsActivity.html',
      img: '/images/gsdj_gtgsh_icon.png'
    },{
      title: '排队叫号',
      href: 'http://www.jkqz.org/phportal/alipay/mainPage.html',
      img: '/images/gsdj_qydjzt_icon.png'
    },{
      title: '医生评价',
      href: 'http://www.jkqz.org/phportal/alipay/healthNews/healthNewsActivity.html',
      img: '/images/gsdj_nmzyhz_icon.png'
    },{
      title: '生育登记',
      href: 'http://sydj.jkqz.org/dologin.do?method=login',
      img: '/images/gsdj_gxwj_icon.png'
    },{
      title: '卫计监督',
      href: '/wjjd',
      img: '/images/gsdj_ywmc_icon.png'
    },{
      title: '个人中心',
      href: 'http://www.jkqz.org/phportal/alipay/mainPage.html',
      img: '/images/gsdj_hzxs_icon.png'
    }]
  });
});

module.exports = router;
