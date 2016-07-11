var Waterline = require('waterline');
var sailsDiskAdapter = require('sails-disk');
var waterline = new Waterline();
var Pack = Waterline.Collection.extend({
    identity: 'pack',
    name:'pack',
    connection: 'localDiskDb',
    attributes: {
    name :{type:'string'},// models.CharField(max_length=30,verbose_name="用户单位")#用户单位
  }
});
var Usepack = Waterline.Collection.extend({
    identity: 'usepack',
    name:'usepack',
    connection: 'localDiskDb',
  attributes: {
    name :{type:'string'},// models.CharField(max_length=30,verbose_name="用户单位")#用户单位
    contact: {
      model: 'contact'
    },
    pack: {
      model: 'pack'
    }
  }
});
var Contact = Waterline.Collection.extend({
    identity: 'contact',
    connection: 'localDiskDb',
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
});
waterline.loadCollection(Pack);
waterline.loadCollection(Usepack);
waterline.loadCollection(Contact);
var config = {
    adapters: {
        'sails-disk': sailsDiskAdapter
    },

    connections: {
        localDiskDb: {
            //adapter: 'sails-sqlite'
            adapter: 'sails-disk'
        }
    }
};
var showcontact=function(contact){
	console.log(contact.id);
};
waterline.initialize(config, function (err, ontology) {
    if (err) {
        return console.error(err);
    }
    // Tease out fully initialised models.
    var Contact = ontology.collections.contact;
    //console.log(Contact);
    Contact.find()
	.populate('usepacks')
	.exec(function(err, contacts) {
		  if(err)   {

		  }
		  else{
			  for(var i in contacts){
			  	showcontact(contacts[i]);
			  }
		}
	});
});