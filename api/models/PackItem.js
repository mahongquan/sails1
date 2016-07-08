module.exports = {
  attributes: {
    name :{type:'string'},// models.CharField(max_length=30,verbose_name="用户单位")#用户单位
    ct:{type:'integer'},// = models.CharField(max_length=30,verbose_name="客户地址",null=True,blank=True)#用户单位
    bh :{type:'string'},// models.CharField(max_length=30,verbose_name="用户单位")#用户单位
    guige :{type:'string'},// models.CharField(max_length=30,verbose_name="用户单位")#用户单位
    danwei:{type:'string'},// models.CharField(max_length=30,verbose_name="用户单位")#用户单位
     // packitems: {
    pack:{type:'integer'},
    item:{type:'integer'},
  }
};

