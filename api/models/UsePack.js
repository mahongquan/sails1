// @python_2_unicode_compatible 
// class Pack(models.Model):
//     #=======销售===========
//     name = models.CharField(max_length=30,verbose_name="包名称")#用户单位
//     def __str__(self):
//         return str(self.id)+":"+self.name
//     class Meta:
//         verbose_name="包"
//         verbose_name_plural=verbose_name
// @python_2_unicode_compatible 
// class UsePack(models.Model):
//     contact=models.ForeignKey(Contact)#合同
//     pack=models.ForeignKey(Pack)#备件
//     def __str__(self):
//         return self.contact.hetongbh+"_"+self.pack.name
//     class Meta:
//         verbose_name="包条目"
//         verbose_name_plural=verbose_name
// @python_2_unicode_compatible    
// class Item(models.Model):
//     #ispack=models.BooleanField()
//     bh = models.CharField(max_length=30,null=True,blank=True,verbose_name="库存编号")#库存编号
//     name=models.CharField(max_length=30,verbose_name="备件名称")#备件名称
//     name_en=models.CharField(max_length=30,null=True,blank=True,verbose_name="备件英文名称")#备件名称
//     guige=models.CharField(max_length=30,null=True,blank=True,verbose_name="规格")#规格
//     ct=  models.IntegerField(default=1,verbose_name="数量")#数量
//     danwei =  models.CharField(max_length=30,verbose_name="单位",default="个")#数量单位
//     image=models.ImageField(null=True,blank=True,upload_to="item")
//     beizhu = models.CharField(max_length=30,verbose_name="备注",blank=True,null=True)#用户单位
//     def __str__(self):
//         return str(self.id)+":"+self.bh+"_"+self.name+"_"+self.guige+"_"+self.danwei
//     class Meta:
//         verbose_name="备件"
//         verbose_name_plural=verbose_name
// @python_2_unicode_compatible 
// class PackItem(models.Model):
//     pack=models.ForeignKey(Pack)#合同
//     item=models.ForeignKey(Item)#备件
//     ct=  models.IntegerField(verbose_name="数量",default=1)#数量
//     def __str__(self):
//         return self.pack.name+"_"+self.item.name+"_"+self.item.guige+"_"+str(self.ct)+self.item.danwei
//     class Meta:
//         verbose_name="备件条目"
//         verbose_name_plural=verbose_name
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

