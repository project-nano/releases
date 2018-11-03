
class TextSet{
  constructor(data){
    this.data = data;
  }

  get(label){
    if (this.data.has(label)){
      return this.data.get(label);
    }else{
      return 'invalid tag: ' + label;
    }
  }
}

//build 'N'
(function(window){
  if (!window.$){
    alert('jQuery is required');
    return;
  }
  if (typeof(Storage) == "undefined"){
    alert('current browser not support HTML5 Web Storage');
    return;
  }
  if (window.Package) {
    N = {};
  } else {
    window.N = {};
  }
})(window);

N.TagDashboard = "dashboard";
N.TagResourcePool = "resource_pool";
N.TagStoragePool = "storage_pool";
N.TagInstance = "instance";
N.TagImage = "image";
N.TagMedia = "media";
N.TagUser = "user";
N.TagMenu = "menu";
N.TagCreate = "create";
N.TagModify = "modify";
N.TagAdd = "add";
N.TagRemove = "remove";
N.TagBack = "back";
N.TagFinish = "finish";
N.TagDelete = "delete";
N.TagComputePool = "compute_pool";
N.TagCell = "cell";
N.TagNetwork = "network";
N.TagStorage = "storage";
N.TagStatus = "status";
N.TagEnable = "enable";
N.TagDisable = "disable";
N.TagLocalStorage = "local_storage";
N.TagName = "name";
N.TagType = "type";
N.TagHost = "host";
N.TagTarget = "target";
N.TagAutoFresh = "auto_fresh";
N.TagOn = "on";
N.TagOff = "off";
N.TagAddress = "address";
N.TagCore = "core";
N.TagMemory = "memory";
N.TagDisk = "disk";
N.TagAlive = "alive";
N.TagRunning = "running";
N.TagStopped = "stopped";
N.TagAttached = "attached";
N.TagMediaAttached = "media_attached";
N.TagStart = "start";
N.TagStartWithMedia = "start_with_media";
N.TagStop = "stop";
N.TagForceStop = "force_stop";
N.TagReboot = "reboot";
N.TagForceReboot = "force_reboot";
N.TagSnapshot = "snapshot";
N.TagBuildDiskImage = "build_disk_image";
N.TagRemoteControl = "remote_control";
N.TagMonitor = "monitor";
N.TagDetail = "detail";
N.TagInsertMedia = "insert_media";
N.TagEjectMedia = "eject_media";
N.TagSize = "size";
N.TagBuild = "build";
N.TagUpload = "upload";
N.TagDownload = "download";
N.TagLost = "lost";
N.TagMigrate = "migrate";

N.TagOnline = "online";
N.TagOffline = "offline";
N.TagUsed = "used";
N.TagAvailable = "available";

N.TagZone = "zone";
N.TagResourceUsage = "resource_usage";
N.TagCoreUsage = "core_usage";
N.TagMemoryUsage = "memory_usage";
N.TagIOMeter = "io_meter";

N.TagRead = "read";
N.TagWrite = "write";
N.TagReceive = "receive";
N.TagSend = "send";

N.TagInternalAddress = "internal_address";
N.TagExternalAddress = "external_address";
N.TagResult = "result";
N.TagSystem = "system";
N.TagSystemImage = "system_image";
N.TagBlankSystem = "blank_system";
N.TagAutoStart = "auto_start";
N.TagSystemVersion = "system_version";
N.TagInstalledModule = "installed_module";

N.TagPassword = "password";
N.TagMonitorAddress = "monitor_address";
N.TagMonitorPassword = "monitor_password";
N.TagSystemDisk = "system_disk";
N.TagDataDisk = "data_disk";
N.TagChange = "change";
N.TagView = "view";
N.TagExtend = "extend";
N.TagShrink = "shrink";
N.TagDisabledWhenRunning = "disabled_when_running";
N.TagDisabledWhenStopped = "disabled_when_stopped";

N.TagCurrentSnapshot = "current_snapshot";
N.TagRestore = "restore";
N.TagConfirm = "confirm";
N.TagCancel = "cancel";
N.TagDescription = "description";
N.TagTag = "tag";
N.TagImageName = "image_name";
N.TagImageFile = "image_file";
N.TagSelect = "select";
N.TagFailover = "failover";

//Language name
N.zh_CN = "zh_CN";
N.en_US = "en_US";

var zh_CN_text = new TextSet(new Map([
  [N.TagDashboard, "仪表盘"],
  [N.TagResourcePool, "资源池"],
  [N.TagStoragePool, "存储池"],
  [N.TagInstance, "云主机"],
  [N.TagImage, "磁盘镜像"],
  [N.TagMedia, "光盘镜像"],
  [N.TagUser, "用户"],
  [N.TagMenu, "菜单"],
  [N.TagCreate, "创建"],
  [N.TagModify, "修改"],
  [N.TagAdd, "添加"],
  [N.TagRemove, "移除"],
  [N.TagBack, "返回"],
  [N.TagFinish, "完成"],
  [N.TagDelete, "删除"],
  [N.TagComputePool, "计算资源池"],
  [N.TagCell, "Cell节点"],
  [N.TagNetwork, "网络"],
  [N.TagStorage, "存储"],
  [N.TagStatus, "状态"],
  [N.TagEnable, "启用"],
  [N.TagDisable, "禁用"],
  [N.TagLocalStorage, "本地存储"],
  [N.TagName, "名称"],
  [N.TagType, "类型"],
  [N.TagHost, "主机"],
  [N.TagTarget, "目标"],
  [N.TagAutoFresh, "自动刷新"],
  [N.TagOn, "开"],
  [N.TagOff, "关"],
  [N.TagAddress, "地址"],
  [N.TagCore, "核心"],
  [N.TagMemory, "内存"],
  [N.TagDisk, "磁盘"],
  [N.TagAlive, "活动"],
  [N.TagRunning, "运行中"],
  [N.TagStopped, "已停止"],
  [N.TagAttached, "已挂载"],
  [N.TagMediaAttached, "媒体已挂载"],
  [N.TagStart, "启动"],
  [N.TagStartWithMedia, "从媒体启动"],
  [N.TagStop, "停止"],
  [N.TagForceStop, "强制终止"],
  [N.TagReboot, "重启"],
  [N.TagForceReboot, "强制重启"],
  [N.TagSnapshot, "快照"],
  [N.TagBuildDiskImage, "创建磁盘镜像"],
  [N.TagRemoteControl, "远程控制"],
  [N.TagMonitor, "监控"],
  [N.TagDetail, "详情"],
  [N.TagInsertMedia, "插入媒体"],
  [N.TagEjectMedia, "弹出媒体"],
  [N.TagSize, "容量"],
  [N.TagBuild, "构建"],
  [N.TagUpload, "上传"],
  [N.TagDownload, "下载"],
  [N.TagLost, "失联"],
  [N.TagMigrate, "迁移"],
  [N.TagOnline, "在线"],
  [N.TagOffline, "离线"],
  [N.TagUsed, "已用"],
  [N.TagAvailable, "可用"],
  [N.TagZone, "可用区"],
  [N.TagResourceUsage, "资源用量"],
  [N.TagCoreUsage, "核心用量"],
  [N.TagMemoryUsage, "内存用量"],
  [N.TagIOMeter, "IO吞吐量"],
  [N.TagRead, "读取"],
  [N.TagWrite, "写入"],
  [N.TagReceive, "接收"],
  [N.TagSend, "发送"],
  [N.TagInternalAddress, "内部地址"],
  [N.TagExternalAddress, "外部地址"],
  [N.TagResult, "结果"],
  [N.TagSystem, "系统"],
  [N.TagSystemImage, "系统镜像"],
  [N.TagBlankSystem, "空白系统"],
  [N.TagAutoStart, "自动启动"],
  [N.TagPassword, "密码"],
  [N.TagMonitorAddress, "监控地址"],
  [N.TagMonitorPassword, "监控密码"],
  [N.TagSystemDisk, "系统盘"],
  [N.TagDataDisk, "数据盘"],
  [N.TagChange, "变更"],
  [N.TagView, "查看"],
  [N.TagExtend, "扩展"],
  [N.TagShrink, "压缩"],
  [N.TagDisabledWhenRunning, "运行时禁用"],
  [N.TagDisabledWhenStopped, "停止时禁用"],
  [N.TagCurrentSnapshot, "当前快照"],
  [N.TagRestore, "恢复"],
  [N.TagConfirm, "确认"],
  [N.TagCancel, "取消"],
  [N.TagDescription, "描述"],
  [N.TagTag, "标签"],
  [N.TagImageName, "镜像名称"],
  [N.TagImageFile, "镜像文件"],
  [N.TagSelect, "选择"],
  [N.TagFailover, "故障切换"],
  [N.TagSystemVersion, "系统版本"],
  [N.TagInstalledModule, "预装模块"]
]));

var en_US_text = new TextSet(new Map([
  [N.TagDashboard, "Dashboard"],
  [N.TagResourcePool, "Resource Pool"],
  [N.TagStoragePool, "Storage Pool"],
  [N.TagInstance, "Instance"],
  [N.TagImage, "Image"],
  [N.TagMedia, "Media"],
  [N.TagUser, "User"],
  [N.TagMenu, "Menu"],
  [N.TagCreate, "Create"],
  [N.TagModify, "Modify"],
  [N.TagAdd, "Add"],
  [N.TagRemove, "Remove"],
  [N.TagBack, "Back"],
  [N.TagFinish, "Finish"],
  [N.TagDelete, "Delete"],
  [N.TagComputePool, "Compute Pool"],
  [N.TagCell, "Cell"],
  [N.TagNetwork, "Network"],
  [N.TagStorage, "Storage"],
  [N.TagStatus, "Status"],
  [N.TagEnable, "Enable"],
  [N.TagDisable, "Disable"],
  [N.TagLocalStorage, "Local Storage"],
  [N.TagName, "Name"],
  [N.TagType, "Type"],
  [N.TagHost, "Host"],
  [N.TagTarget, "Target"],
  [N.TagAutoFresh, "Auto Fresh"],
  [N.TagOn, "On"],
  [N.TagOff, "Off"],
  [N.TagAddress, "Address"],
  [N.TagCore, "Core"],
  [N.TagMemory, "Memory"],
  [N.TagDisk, "Disk"],
  [N.TagAlive, "Alive"],
  [N.TagRunning, "Running"],
  [N.TagStopped, "Stopped"],
  [N.TagAttached, "Attached"],
  [N.TagMediaAttached, "Media Attached"],
  [N.TagStart, "Start"],
  [N.TagStartWithMedia, "Start With Media"],
  [N.TagStop, "Stop"],
  [N.TagForceStop, "Force Stop"],
  [N.TagReboot, "Reboot"],
  [N.TagForceReboot, "Force Reboot"],
  [N.TagSnapshot, "Snapshot"],
  [N.TagBuildDiskImage, "Build Disk Image"],
  [N.TagRemoteControl, "Remote Control"],
  [N.TagMonitor, "Monitor"],
  [N.TagDetail, "Detail"],
  [N.TagInsertMedia, "Insert Media"],
  [N.TagEjectMedia, "Eject Media"],
  [N.TagSize, "Size"],
  [N.TagBuild, "Build"],
  [N.TagUpload, "Upload"],
  [N.TagDownload, "Download"],
  [N.TagLost, "Lost"],
  [N.TagMigrate, "Migrate"],
  [N.TagOnline, "Online"],
  [N.TagOffline, "Offline"],
  [N.TagUsed, "Used"],
  [N.TagAvailable, "Available"],
  [N.TagZone, "Available Zone"],
  [N.TagResourceUsage, "Resource Usage"],
  [N.TagCoreUsage, "Core Usage"],
  [N.TagMemoryUsage, "Memory Usage"],
  [N.TagIOMeter, "IO Meter"],
  [N.TagRead, "Read"],
  [N.TagWrite, "Write"],
  [N.TagReceive, "Receive"],
  [N.TagSend, "Send"],
  [N.TagInternalAddress, "Internal Address"],
  [N.TagExternalAddress, "External Address"],
  [N.TagResult, "Result"],
  [N.TagSystem, "System"],
  [N.TagSystemImage, "System Image"],
  [N.TagBlankSystem, "Blank System"],
  [N.TagAutoStart, "Auto Start"],
  [N.TagPassword, "Password"],
  [N.TagMonitorAddress, "Monitor Address"],
  [N.TagMonitorPassword, "Monitor Password"],
  [N.TagSystemDisk, "System Disk"],
  [N.TagDataDisk, "Data Disk"],
  [N.TagChange, "Change"],
  [N.TagView, "View"],
  [N.TagExtend, "Extend"],
  [N.TagShrink, "Shrink"],
  [N.TagDisabledWhenRunning, "Disabled When Running"],
  [N.TagDisabledWhenStopped, "Disabled When Stopped"],
  [N.TagCurrentSnapshot, "Current Snapshot"],
  [N.TagRestore, "Restore"],
  [N.TagConfirm, "Confirm"],
  [N.TagCancel, "Cancel"],
  [N.TagDescription, "Description"],
  [N.TagTag, "Tag"],
  [N.TagImageName, "Image Name"],
  [N.TagImageFile, "Image File"],
  [N.TagSelect, "Select"],
  [N.TagFailover, "Failover"],
  [N.TagSystemVersion, "System Version"],
  [N.TagInstalledModule, "Installed Modules"]
]));

//initial text sets

N._text_sets = new Map([
  [N.zh_CN, zh_CN_text],
  [N.en_US, en_US_text]
]);

N.SetLanguage = function(lang){
  if (lang != this.zh_CN & lang != this.en_US){
    alert('invalid language:' + lang);
    return
  }
  localStorage.setItem('current_language', lang);
};

N.GetLanguage = function(){
  var current = localStorage.getItem('current_language');
  if (!current){
    current = _defaultLang;
    localStorage.setItem('current_language', current);
  }
  return current;
};

N.IsChinese = function() {
  if (this.zh_CN == this.GetLanguage()){
    return true;
  }else{
    return false;
  }
}

N.IsEnglish = function() {
  if (this.en_US == this.GetLanguage()){
    return true;
  }else{
    return false;
  }
}

N.GetTexts = function(){
  return this._text_sets.get(this.GetLanguage());
}

N.CreateMenuAndFooter = function(){
  //menu
  var _menuDefine = [
    ['dashboard.html', 'multiline_chart', this.TagDashboard],
    ['compute_pools.html', 'blur_on', this.TagResourcePool],
    ['storages.html', 'storage', this.TagStoragePool],
    ['instances.html', 'cloud', this.TagInstance],
    ['images.html', 'content_copy', this.TagImage],
    ['medias.html', 'album', this.TagMedia],
    ['#', 'people', this.TagUser]
  ];
  var texts = this.GetTexts();
  var menu = $('<ul>').addClass('right');
  _menuDefine.forEach((item) =>{
    menu.append(
      $('<li>').addClass('hide-on-small-only').append(
        $('<a>').attr('href', item[0]).text(texts.get(item[2])).prepend(
          $('<i>').addClass('material-icons left').text(item[1])
        )
      )
    )
  });
  menu.append(
    $('<li>').addClass('hide-on-med-and-up').append(
      $('<a>').attr('href', '#').prepend(
        $('<i>').addClass('material-icons right').text('menu')
      ).text(texts.get(this.TagMenu))
    )
  );
  $('body').prepend(
    $('<nav>').addClass('blue-grey').append(
      $('<div>').addClass('container').append(
        $('<div>').addClass('nav-wrapper').append(
          $('<a>').addClass('brand-logo').attr('href', '#').text('Nano')
        ).append(
          menu
        )
      )
    )
  );
  //footer
  const switchID = 'lang-switch';
  var langSwitch = $('<input>').attr('type', 'checkbox').attr('id', switchID);
  if (this.IsChinese()){
    langSwitch.prop( "checked", true);
  }
  var onLanguageChanged = function(){
    var langSwitch = $('#' + switchID);
    if (langSwitch.prop("checked")){
      //chinese
      N.SetLanguage(N.zh_CN);
    }else{
      N.SetLanguage(N.en_US);
    }
    window.location.reload(true);
  };
  langSwitch.click(onLanguageChanged);

  $('body').append(
    $('<footer>').addClass('page-footer blue-grey darken-3').append(
      $('<div>').addClass('footer-copyright').append(
        $('<div>').addClass('container').text('© 2018 Copyright Project Nano. All rights reserved.').append(
          $('<div>').addClass('switch right').append(
            $('<label>').addClass('white-text').append('English').append(
              langSwitch
            ).append(
              $('<span>').addClass('lever')
            ).append('中文')
          )
        )
      )
    )
  );
}
