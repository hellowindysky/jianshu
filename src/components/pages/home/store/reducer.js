import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: '摄影',
      imgUrl: '//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },
    {
      id: 2,
      title: '简书电影',
      imgUrl: '//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    }
  ],
  articList: [
    {
      id: 1,
      title: '25岁，你还有多少试错成本？',
      desc: '文|娴线 01 2018年高考分数即将揭晓。我想起了前年高考分数公布后，大学寝室微信群里突然炸翻了锅。 室友珍珍亲戚家的小孩考了500多分，过一...',
      imgUrl: '//upload-images.jianshu.io/upload_images/9040811-3146a897d93b4256.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },
    {
      id: 2,
      title: '七绝||杏黄忆',
      desc: '杏花开过枝丫重 一树芬芳馥郁香 酸中带甜园中采 追怀年少念他乡（新韵 平起）',
      imgUrl: '//upload-images.jianshu.io/upload_images/8524544-f825c139c2318444.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    }
  ],
  recommendList: [
    {
      id: 1,
      // imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png'
    },
    {
      id: 2,
      // imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png'
    },
    {
      id: 3,
      // imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
    },
    {
      id: 4,
      // imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
    },
    {
      id: 5,
      // imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
    }
  ]
});

export default (state = defaultState, action) => {

  switch (action.type) {
    default:
      return state;
  }

}