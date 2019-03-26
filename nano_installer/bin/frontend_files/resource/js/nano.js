
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
N.TagAddressPool = "address_pool";
N.TagStartAddress = "start_address";
N.TagEndAddress = "end_address";
N.TagNetmask = "netmask";
N.TagAddressRange = "address_range";
N.TagAllocated = "allocated";
N.TagGateway = "gateway";
N.TagDNS = "dns";
N.TagRole = "role";
N.TagUserGroup = "user_group";
N.TagDisplayName = "display_name";
N.TagMember = "member";
N.TagNickname = "nickname";
N.TagMail = "mail";

N.TagCurrent = "current";
N.TagPrevious = "previous";
N.TagNext = "next";
N.TagNew = "new";
N.TagLogin = "login";
N.TagLogout = "logout";
N.TagResetSystem = "reset_system";
N.Batch = "batch";
N.Operate = "operate";

//Language name
N.zh_CN = "zh_CN";
N.en_US = "en_US";

N._session_tag = "nano-session";

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
  [N.TagInstalledModule, "预装模块"],
  [N.TagAddressPool, "地址池"],
  [N.TagStartAddress, "起始地址"],
  [N.TagEndAddress, "结束地址"],
  [N.TagNetmask, "网络掩码"],
  [N.TagAddressRange, "地址范围"],
  [N.TagAllocated, "已分配"],
  [N.TagGateway, "网关"],
  [N.TagDNS, "域名服务器"],
  [N.TagRole, "角色"],
  [N.TagUserGroup, "用户组"],
  [N.TagDisplayName, "显示名称"],
  [N.TagMember, "成员"],
  [N.TagNickname, "昵称"],
  [N.TagMail, "邮箱"],
  [N.TagCurrent, "当前"],
  [N.TagPrevious, "上一个"],
  [N.TagNext, "下一个"],
  [N.TagNew, "新"],
  [N.TagLogin, "登录"],
  [N.TagLogout, "注销"],
  [N.TagResetSystem, "重置系统"],
  [N.Batch, "批量"],
  [N.Operate, "操作"]
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
  [N.TagInstalledModule, "Installed Modules"],
  [N.TagAddressPool, "Address Pool"],
  [N.TagStartAddress, "Start Address"],
  [N.TagEndAddress, "End Address"],
  [N.TagNetmask, "Netmask"],
  [N.TagAddressRange, "Address Range"],
  [N.TagAllocated, "Allocated"],
  [N.TagGateway, "Gateway"],
  [N.TagDNS, "DNS"],
  [N.TagRole, "Role"],
  [N.TagUserGroup, "User Group"],
  [N.TagDisplayName, "Display Name"],
  [N.TagMember, "Member"],
  [N.TagNickname, "Nickname"],
  [N.TagMail, "Mail"],
  [N.TagCurrent, "Current "],
  [N.TagPrevious, "Previous "],
  [N.TagNext, "Next"],
  [N.TagNew, "New "],
  [N.TagLogin, "Login"],
  [N.TagLogout, "Logout"],
  [N.TagResetSystem, "Reset System"],
  [N.Batch, "Batch"],
  [N.Operate, "Operate"]
]));

//initial text sets

N._text_sets = new Map([
  [N.zh_CN, zh_CN_text],
  [N.en_US, en_US_text]
]);

N._menu_defines = [
  ['dashboard', 'dashboard.html', 'multiline_chart', N.TagDashboard],
  ['compute_pool', 'compute_pools.html', 'blur_on', N.TagResourcePool],
  ['address_pool', 'address_pools.html', 'share', N.TagAddressPool],
  ['storage_pool', 'storages.html', 'storage', N.TagStoragePool],
  ['instance', 'instances.html', 'cloud', N.TagInstance],
  ['image', 'images.html', 'content_copy', N.TagImage],
  ['media', 'medias.html', 'album', N.TagMedia],
  ['user', 'users.html', 'people', N.TagUser]
];

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
    current = N.en_US;
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

function _redirectToLogin(){
  localStorage.setItem(N._session_tag, "");
  var target = '/login.html?previous=' + encodeURIComponent(window.location.pathname);
  window.location.replace(target);
}

function _updateSession(sessionID){
  $.ajax({
    url: '/sessions/'+ sessionID,
    method: "PUT",
    dataType: "json",
    data: "",
    success: function (result) {
      if (0 != result['error_code']) {
        M.toast({html: 'update session fail: ' + result['message']});
        setTimeout(_redirectToLogin, 500);
        return;
      }
    },
    error: function (jqXHR, status, error) {
      M.toast({html: 'request update session fail: ' + error, outDuration: 600});
      setTimeout(_redirectToLogin, 500);
    }
  });
}

function _logoutSession(){
  localStorage.setItem(N._session_tag, "");
  var target = '/login.html';
  window.location.replace(target);
}

N.SaveSession = function(id, user, menu, timeout){
  var session = new Object();
  session.id = id;
  session.user = user;
  session.menu = menu;
  session.timeout = timeout;
  localStorage.setItem(N._session_tag, JSON.stringify(session));
}

N.GetCurrentUser = function(){
  var sessionString = localStorage.getItem(N._session_tag);
  if (!sessionString || 0 == sessionString.length){
    return null;
  }
  var session = JSON.parse(sessionString);
  return session.user;
}

N.ValidateSession = function(){
  var sessionString = localStorage.getItem(N._session_tag);
  if (!sessionString || 0 == sessionString.length){
    //no session available
    _redirectToLogin();
    return
  }
  var session = JSON.parse(sessionString);
  if (!session.id){
    _redirectToLogin();
    return
  }
  //try update
  var updateInteval = session.timeout / 2;
  $.ajax({
    url: '/sessions/'+ session.id,
    method: "PUT",
    dataType: "json",
    data: "",
    success: function (result) {
      if (0 != result['error_code']) {
        M.toast({html: 'update session fail: ' + result['message']});
        setTimeout(_redirectToLogin, 500);
        return;
      }
      //build menu
      N.CreateMenuAndFooter(session.user, session.menu);
      var update = function(){
        _updateSession(session.id);
      };
      //keep updating
      setInterval(update, updateInteval * 1000);
    },
    error: function (jqXHR, status, error) {
      M.toast({html: 'request update session fail: ' + error, outDuration: 600});
      setTimeout(_redirectToLogin, 500);
    }
  });

}

N.GetAllMenus = function(){
  var result = new Array();
  this._menu_defines.forEach((menu)=>{
    var name = menu[0];
    var tag = menu[3];
    result.push([name, this.GetTexts().get(tag)]);
  });
  return result;
}

N.CreateMenuAndFooter = function(userName, menuList){
  var texts = this.GetTexts();
  // var menu = $('<ul>').addClass('right');
  var menu = $('<ul>').addClass('sidenav sidenav-fixed').append(
    $('<li>').addClass('brand-logo white-text blue-grey').append(
      $('<h4>').text('Nano')
    ).append(
      $('<div>').addClass('divider')
    )
  );


  if (menuList){
    var menuItems = $('<ul>').addClass('collapsible collapsible-accordion');
    var selectedMenu = new Set();
    menuList.forEach((menuName)=>{
      selectedMenu.add(menuName);
    });
    this._menu_defines.forEach((define)=>{
      var menuName = define[0];
      if (selectedMenu.has(menuName)){
        var page = define[1];
        var icon = define[2];
        var label = texts.get(define[3]);
        menuItems.append(
          $('<li>').append(
            $('<a>').attr('href', page).addClass('blue-grey-text').text(label).prepend(
              $('<i>').addClass('material-icons blue-grey-text').text(icon)
            )
          )
        // ).append(
        //   $('<li>').append(
        //     $('<div>').addClass('divider')
        //   )
        );
      }
    });
    menu.append(
      $('<li>').addClass('no-padding').append(
        menuItems
      )
    )
  }

  var changePassword = function(){
    var currentPassword = $('#_change_password_current').val();
    if (!currentPassword){
      if (N.IsChinese()){
        M.toast({html: '请输入当前密码'});
      }else{
        M.toast({html: 'Input current password'});
      }
      return;
    }
    var newPassword = $('#_change_password_new').val();
    if(!newPassword){
      if (N.IsChinese()){
        M.toast({html: '请输入新密码'});
      }else{
        M.toast({html: 'Input a new password'});
      }
      return;
    }
    if($('#_change_password_confirm_new').val() != newPassword){
      if (N.IsChinese()){
        M.toast({html: '请输入一致的新密码'});
      }else{
        M.toast({html: 'Two passwords do not match'});
      }
      return;
    }
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
    if(!strongRegex.test(newPassword)){
      if (N.IsChinese()){
        M.toast({html: '密码长度最低8位，必须包含大小写字母与数字'});
      }else{
        M.toast({html: 'The password must longer than eight, contains one uppercase letter, one lowercase letter and one digit at least.'});
      }
      return;
    }

    var request = new Object();
    request.old = currentPassword;
    request.new = newPassword;
    $.ajax({
      url: '/users/'+ userName + '/password/',
      method: "PUT",
      dataType: "json",
      data: JSON.stringify(request),
      success: function (result) {
        if (0 != result['error_code']) {
          M.toast({html: result['message']});
          return;
        }
        if (N.IsChinese()){
          M.toast({html: '用户密码已修改'});
        }else{
          M.toast({html: 'User password modified'});
        }
      },
      error: function (jqXHR, status, error) {
        M.toast({html: 'request modify compute pool fail: ' + error, outDuration: 600});
      }
    });
  };

  var showChangePasswordModal = function(){
    var content = $('#_change_password_modal_content').empty();
    var title, currentLabel, newLabel, confirmLabel;
    if(N.IsChinese()){
      title = '修改用户密码';
      currentLabel = '当前密码';
      newLabel = '新密码';
      confirmLabel = '确认新密码';
    }else{
      title = 'Change Password';
      currentLabel = 'Current Password';
      newLabel = 'New Password';
      confirmLabel = 'Confirm New Password';
    }
    content.append(
      $('<h4>').text(title)
    ).append(
      $('<div>').addClass('row').append(
        $('<div>').addClass('input-field col s6').append(
          $('<input>').attr('type', 'password').attr('id', '_change_password_current')
        ).append(
          $('<label>').attr('for', '_change_password_current').text(currentLabel)
        )
      )
    ).append(
      $('<div>').addClass('row').append(
        $('<div>').addClass('input-field col s6').append(
          $('<input>').attr('type', 'password').attr('id', '_change_password_new')
        ).append(
          $('<label>').attr('for', '_change_password_current').text(newLabel)
        )
      )
    ).append(
      $('<div>').addClass('row').append(
        $('<div>').addClass('input-field col s6').append(
          $('<input>').attr('type', 'password').attr('id', '_change_password_confirm_new')
        ).append(
          $('<label>').attr('for', '_change_password_current').text(confirmLabel)
        )
      )
    );
    var instance = M.Modal.getInstance($('#_change_password_modal'));
    instance.open();
  };

  var confirmLogout = function(){
    var content = $('#_logout_modal_content').empty();
    if(N.IsChinese()){
      content.append(
        $('<h4>').text('注销')
      ).append(
        $('<p>').text('确定退出当前登录吗？')
      );
    }else{
      content.append(
        $('<h4>').text('Logout')
      ).append(
        $('<p>').text('Logout current user?')
      );
    }
    var instance = M.Modal.getInstance($('#_logout_modal'));
    instance.open();
  };

  var pageBody = $('body');
  pageBody.prepend(
    menu
  );

  //modal
  pageBody.prepend(
    $('<div>').addClass('modal').attr('id', '_change_password_modal').append(
      $('<div>').addClass('modal-content').attr('id', '_change_password_modal_content')
    ).append(
      $('<div>').addClass('modal-footer').append(
        $('<a>').addClass('modal-close waves-effect waves-green btn-flat').attr('href', '#').text(texts.get(N.TagCancel))
      ).append(
        $('<a>').addClass('modal-close waves-effect waves-green btn-flat').attr('href', '#').click(changePassword).text(texts.get(N.TagConfirm))
      )
    )
  ).prepend(
    $('<div>').addClass('modal').attr('id', '_logout_modal').append(
      $('<div>').addClass('modal-content').attr('id', '_logout_modal_content')
    ).append(
      $('<div>').addClass('modal-footer').append(
        $('<a>').addClass('modal-close waves-effect waves-green btn-flat').attr('href', '#').text(texts.get(N.TagCancel))
      ).append(
        $('<a>').addClass('modal-close waves-effect waves-green btn-flat').attr('href', '#').click(_logoutSession).text(texts.get(N.TagConfirm))
      )
    )
  );
  M.Modal.init($('.modal'));
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

  var footerContainer = $('<div>').addClass('container').text('© 2018 Copyright Project Nano. All rights reserved.');
  var rightDiv = $('<div>').addClass('row');
  if (userName){
    rightDiv.append(
      $('<div>').addClass('col m3 push-m7').append(
        $('<label>').addClass('white-text').text(texts.get(this.TagCurrent) + texts.get(this.TagUser) + ': ' + userName)
      ).append(
        $('<a>').addClass('btn-small btn-flat').click(showChangePasswordModal).append(
          $('<i>').addClass('material-icons white-text').text('lock')
        )
      ).append(
        $('<a>').addClass('btn-small btn-flat').click(confirmLogout).append(
          $('<i>').addClass('material-icons white-text').text('exit_to_app')
        )
      )
    );
  }
  rightDiv.append(
    $('<div>').addClass('switch col m2 push-m8').append(
      $('<label>').addClass('white-text').append('English').append(
        langSwitch
      ).append(
        $('<span>').addClass('lever')
      ).append('中文')
    )
  );
  $('body').append(
    $('<footer>').addClass('page-footer blue-grey darken-3').append(
      $('<div>').addClass('footer-copyright').append(
        footerContainer.append(
          rightDiv
        )
      )
    )
  );
}
