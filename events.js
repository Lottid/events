/**
 * @author bh-lay
 * util.events;
 * @github https://github.com/bh-lay/events
 * @modified 2014-5-8 9:55
 * var evevts = new util.events();
 * events.on('ready',function(){
 * 	//do something
 * });
 * events.emit('ready',args[0],args[1],args[2]);
 * 
 * or
 * //For your own object extend event
 * util.events.extend(this);
 * 
 */

window.util = window.util || {};

(function(exports){
	//�����Զ����¼�
	function ON(eventName,callback){
		this._events = this._events || {};
		//�¼����޸��¼�������һ���¼���
		if(!this._events[eventName]){
			this._events[eventName] = [];
		}
		this._events[eventName].push(callback);
		//�ṩ��ʽ���õ�֧��
		return this;
	}
	function EMIT(eventName,args){
		this._events = this._events || {};
		//�¼����޸��¼�����������
		if(!this._events[eventName]){
			return
		}
		for(var i=0,total=this._events[eventName].length;i<total;i++){
			this._events[eventName][i].call(this.event_global || this,args);
		}
	}
	//�̳�
	function EXTEND(){
		this._events = {};
		this.on = ON;
		this.emit = EMIT;
	}
	function EVENTS(global){
		this._events = {};
		this.event_global = global || null;
		//console.log(this);
	}
	EVENTS.prototype = {
		'on' : ON,
		'emit' : EMIT
	};
	
	exports.events = EVENTS;
	exports.events.extend = EXTEND;
})(window.util);