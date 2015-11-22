var isAndroid="android"===Ti.Platform.osname?!0:!1;const DEFAULT={WIDTH:"90%",TOP:10,PADDING:19,BORDERRADIUS:5,BACKGROUNDCOLOR:"white",HEIGHT:59,SCALE:.7,HINTCOLOR:"#666",INPUTCOLOR:"#0A3478",STAR:"⚫︎︎"};var Widget=function(){var args=arguments[0]||{},options={width:args.width||DEFAULT.WIDTH,top:args.top||DEFAULT.TOP,backgroundColor:args.backgroundColor||DEFAULT.BACKGROUNDCOLOR,borderRadius:args.borderRadius||DEFAULT.BORDERRADIUS,height:args.height||DEFAULT.HEIGHT,padding:args.paddingLeft||DEFAULT.PADDING,hintcolor:args.hintcolor||DEFAULT.HINTCOLOR,hinttop:args.hinttop||20,hintFontFamily:args.hintFontFamily,hintFontSize:args.hintFontSize,scale:args.scale||DEFAULT.SCALE,hintAnimationTarget:args.hintAnimationTarget||0,inputcolor:args.inputcolor||DEFAULT.INPUTCOLOR,inputFontFamily:args.inputFontFamily,inputFontSize:args.inputFontSize,inputTop:args.inputTop||20,passwordMask:args.passwordMask,passwordMaskHeight:args.passwordMaskHeight||30,passwordMaskFontSize:args.passwordMaskFontSize||20,passwordMaskTop:args.passwordMaskTop||20},self=Ti.UI.createView({width:options.width,top:options.top,backgroundColor:options.backgroundColor,borderRadius:options.borderRadius,height:options.height,bubbleParent:!1});self.hint=Ti.UI.createLabel({text:args.hintText,top:options.hinttop,color:options.hintcolor,touchEnabled:!1,font:{fontFamily:options.hintFontFamily,fontSize:options.hintFontSize},anchorPoint:{x:0,y:1},left:options.padding}),self.add(self.hint),self.input=Ti.UI.createTextField({width:Ti.UI.FILL,height:Ti.UI.FILL,top:options.inputTop,autocorrect:!1,windowSoftInputMode:isAndroid?Ti.UI.Android.SOFT_INPUT_STATE_HIDDEN:void 0,left:options.padding,right:options.padding,backgroundColor:"transparent",passwordMask:args.passwordMask,font:{fontFamily:options.inputFontFamily,fontSize:options.inputFontSize},color:args.passwordMask?options.backgroundColor:options.inputcolor}),self.add(self.input),args.passwordMask&&(self.password=Ti.UI.createLabel({backgroundColor:options.backgroundColor,textAlign:"left",visible:!1,color:options.inputcolor,left:options.padding,touchEnabled:!1,width:Ti.UI.FILL,height:options.passwordMaskHeight,font:{fontSize:options.passwordMaskFontSize},top:options.passwordMaskTop}),self.add(self.password));var _config={duration:200,editable:!0,exceeding:!1},_events={CLICK:"click",FOCUS:"focus",BLUR:"blur",CHANGE:"change"},_animation={ANIMATION_UP:function(){if(_config.editable){var e=self.hint.getText().length;e+=e*(Number(e)>25?.2:.1),self.hint.animate({top:options.hintAnimationTarget,left:options.padding,transform:Ti.UI.create2DMatrix().scale(options.scale),duration:_config.duration})}},ANIMATION_DOWN:function(){if(_config.editable){var e={top:options.hinttop,left:options.padding,transform:Ti.UI.create2DMatrix().scale(1),duration:_config.duration};self.input.getValue()&&(e.top=options.hintAnimationTarget,e.transform=Ti.UI.create2DMatrix().scale(options.scale)),self.hint.animate(e)}}};return self.input.addEventListener(_events.FOCUS,_animation.ANIMATION_UP),self.input.addEventListener(_events.BLUR,_animation.ANIMATION_DOWN),function(){_config.duration=args.animationDuration||_config.duration;var _init={width:args.width,top:args.top,left:args.left,right:args.right,bottom:args.bottom,keyboardType:args.keyboardType,returnKey:args.returnKey,password:args.password,editable:args.editable,maxLength:999999,minLength:args.minLength};"string"==typeof _init.editable&&(_init.editable=eval(_init.editable)),_init.keyboardType&&self.input.setKeyboardType(_init.keyboardType),_init.returnKey&&self.input.setReturnKeyType(_init.returnKey),_init.password&&self.input.setPasswordMask(_init.password),0==_init.editable&&(self.setOpacity(.3),self.input.setEditable(!1),_config.editable=!1),_init.maxLength>0&&self.input.addEventListener(_events.CHANGE,function(){var e=self.input.getValue().length;if(0==e&&self.password)return void self.password.hide();if(e>=1){if(self.password){for(var t="",i=0;e>i;i++)t+=DEFAULT.STAR;self.password.setText(t),self.password.show()}}else(e<_init.minLength||e>_init.maxLength)&&(_config.exceeding=!0,self.hint.color=_config.color.exceeding)})}(),self.getValue=function(){return self.input.getValue()},self.ANIMATION_UP=function(){_animation.ANIMATION_UP()},self.ANIMATION_DOWN=function(){_animation.ANIMATION_DOWN()},self.setValue=function(e,t){t&&_animation.ANIMATION_UP(),self.input.setValue(e),self.input.fireEvent(_events.CHANGE,{})},self.addEventListener=function(e,t){self.input.addEventListener(e,function(e){t(e)})},self.removeEventListener=function(e,t){self.input.removeEventListener(e,function(e){t(e)})},self.blur=function(){self.input.blur()},self.focus=function(){self.input.focus()},self};exports.createView=function(e){return new Widget(e)};