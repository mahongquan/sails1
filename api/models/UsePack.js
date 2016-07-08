module.exports = {

  attributes: {
    name :{type:'string'},// models.CharField(max_length=30,verbose_name="用户单位")#用户单位
    contact: {
      model: 'contact'
    },
    pack: {
      model: 'pack'
    }
  }
};

