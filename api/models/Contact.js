module.exports = {

  attributes: {
     yonghu :{type:'string'},// models.CharField(max_length=30,verbose_name="用户单位")#用户单位
     addr:{type:'string'},// = models.CharField(max_length=30,verbose_name="客户地址",null=True,blank=True)#用户单位
     channels:{type:'string'},// = models.CharField(max_length=30,verbose_name="通道配置",null=True,blank=True)#用户单位
     yiqixinghao:{type:'string'},//=models.CharField(max_length=30,verbose_name="仪器型号",choices=ACHOICE)#仪器型号
     yiqibh:{type:'string'},//=models.CharField(max_length=30,verbose_name="仪器编号")#仪器编号
     baoxiang:{type:'string'},// =  models.CharField(max_length=30,verbose_name="包箱")#包箱
     shenhe:{type:'string'},// =  models.CharField(max_length=30,verbose_name="审核")#审核
     yujifahuo_date:{type:'string'},// = models.DateTimeField(verbose_name="预计发货时间")#预计发货时间
     hetongbh:{type:'string'},//=models.CharField(max_length=30,verbose_name="合同编号")#合同编号
     tiaoshi_date:{type:'string'},
     usepacks: {
      collection: 'usepack',
      via: 'contact'
    }
  }
};

