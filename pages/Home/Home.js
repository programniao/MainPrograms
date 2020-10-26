Page({
  data: {
    link: 1,
    arr: [
      {id: 1,name: '张三'},
      {id: 2,name: '王五'},
      {id: 3,name: '李四'}
    ]
  },
  increat() {
    this.setData({
      link: this.data.link += 1
    })
  },

  decreat() {
    this.setData({
      link: this.data.link -= 1
    })
  }
})