var express = require('express');
var router = express.Router();

/* GET wjjd listing. */
router.get('/', (req, res, next) => {
  res.render('wjjd', {
    lists: [{
      title: '食品安全知识培训',
      href: 'https://mp.weixin.qq.com/s/L_rh5wM4S3qq7XRtZxLYsw',
      img: '/images/gsdj_hzxs_icon.png'
    },{
      title: '许可条件培训',
      href: 'https://mp.weixin.qq.com/s/xBRjPOuu5LNKNfZy0XGo5g',
      img: '/images/gsdj_clys_icon.png'
    },{
      title: '公共场所卫生知识',
      href: 'https://mp.weixin.qq.com/s/LW5NznM6KPaVHoNMfJzg7w',
      img: '/images/gsdj_ywmc_icon.png'
    },{
      title: '学校卫生知识培训',
      href: 'https://mp.weixin.qq.com/s/1Ttw3Q7sIxGa-lcBzzqa4Q',
      img: '/images/gsdj_qydjzt_icon.png'
    },{
      title: '微考试',
      href: 'http://www.qzwsjd.gov.cn/wap/wksindex.html#rd',
      img: '/images/gsdj_llqry_icon.png'
    }]
  });
});

module.exports = router;
