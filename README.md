events
======

#1.events��ʲô
enevts��һ���򵥵�pub/subģ�ͣ������ڶ����¼���չ��Ҳ�ɶ�����Ϊ�¼���������Դ��

#2.���ʹ��
##2.1��չ����
```javascript
/**
 *�������Լ����� 
 */
 function myClass(){
    var me = this;
    //�̳��¼�����
    util.events.extend.call(this);
    
    
    setInterval(function(){
        //��������ĳ���¼�
        me.emit('refresh');
    },2000);
 }
 
 //ʹ��
 var newC = new myClass();
 //�����¼�
 newC.on('refresh',function(){
    //do somthing
 });
 
```

##2.2���¼�Դ����ʽʹ��
```javascript
//�����¼�Դ
var eventsCenter = new util.events();
//����ĳ���¼�
eventsCenter.on('add',function(){
    //do something
});
//���������Զ����¼�
eventsCenter.emit('add');

```
