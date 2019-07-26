Visit [English Version](README.md)

## 介绍

Nano是基于CentOS/KVM虚拟化技术，使用服务器集群构建计算资源池并提供云主机实例管理服务的新一代开源IaaS（架构即服务）软件平台。

Nano最大可能采用智能化和自动化手段替代繁琐易出错的手工操作，在简单易用的基础上，提供强大而稳定的云管理平台，产品，在解放运维人员的同时，提高集群的资源利用率、可用性和可靠性。

Nano基于Go语言开发，在极低的资源占用下提供强大而稳定的服务，同时避免Openstack等传统云平台需要大量外部组件依赖，维护复杂并且稳定性差的问题。所有模块均编译为独立运行的二进制包，模块升级时直接替换即可，无需考虑复杂的外部依赖，极大降低了维护难度和工作量。

对于支持Intel VT-d或者AMD-v的普通x86服务器，管理员只需要下载并安装Nano部署包，即可在三分钟内将其转换为云管理平台，并且开始创建云主机实例。

Nano自带对用户友好的图形化管理界面，能够实现开箱即用；Nano也同时提供对机器友好的完整REST API调用接口，可以方便地集成到现有产品或者自动化运维脚本。

Nano使用MIT许可，无论自用、修改或者商用都无限制

欢迎访问官方网站 https://nanos.cloud/ 或者加入官方QQ群 Nano Cloud( 819161083 )了解更多内容

作者: Akumas (bokuore@github.com)

手册地址: https://nanocloud.readthedocs.io/projects/guide/zh_CN/latest/

API文档: https://nanocn.docs.apiary.io/

## 优点

- **简单**：简单易学，易于使用，开箱即用，无需任何外部依赖。
- **健壮**：具有自动错误处理和资源回收的并发事务，配合故障转移功能，旨在提供可靠的服务。
- **智能**：从网络发现到实例组装，都由自动化流程处理。
- **可扩展**：能够从All-In-One服务器轻松扩展到上千台节点的物理集群。
- **灵活**：开放源码，具有完整的REST API，易于定制您想要的任何东西。
- **安全性**：从实例监控校验到加密数据传输，最大可能杜绝数据泄露和非法访问。

## 功能清单（1.0.0）

- **资源池管理** ：资源节点增删与禁用恢复、云主机调度、实时资源用量监控(CPU/内存/磁盘/网络/运行时间)、多层级资源下钻(集群/资源池/节点/实例)
- **存储后端支持** ：本地磁盘存储、NFS共享存储
- **地址池管理** ：IPv4云主机地址池管理与绑定，多地址段设定，网关及DNS分配
- **云主机功能** ：
  - 生命周期管理：创建、释放、起停、实例迁移、故障迁移
  - 配置管理：实例名、核心数、内存修改，QoS管理（CPU、磁盘、带宽），磁盘扩容、压缩，配置模板优化，重置系统
  - 虚拟机操作系统：重置密码、CPU/内存用量监控、磁盘自动格式化/挂载、修改主机名
  - 远程管理：内嵌HTML5监控端、第三方VNC连接支持、VNC连接加密
  - 批量构建：云主机模板构建、复制、上传、下载、批量创建与删除
  - 数据安全：云主机增量快照创建、还原、管理
  - 媒介管理：光盘镜像上传、加载、卸载、信息修改
  - 网络管理：地址绑定、回收与迁移，网关、DNS分配
- **平台管理** ：系统初始化、用户/组/角色权限管理、操作日志、资源组可见性管理、自动识别组网、连接检测、模块起停、运行状态检测
- **辅助工具** ：Installer安装包
- **浏览器支持** ：Chrome/Firefox
- **语言支持** ：中文/English

## 快速安装指引

Nano云平台可以将所有模块部署在同一个服务器或者虚拟机，实现All In One的最小验证集群

**最低系统要求** 

- 支持虚拟化的X86服务器或者打开嵌套虚拟化的虚拟机
- 2核4G内存50GB磁盘和一个网络设备
- CentOS 7.6(1810) Minimal
- 操作系统安装完成并且网络就绪

**第一步. 下载并安装所有模块。**

```
$wget https://nanos.cloud/media/nano_installer_1.0.0.tar.gz
$tar zxfv nano_installer_1.0.0.tar.gz
$cd nano_installer
$./installer
```

输入"0,1,2"或者"3"在当前服务器安装所有模块。*当您第一次安装Nano时，建议您使用安装程序建议的默认配置，无需修改。* 如果你有多个网卡设备，请在安装程序的提示中选择连接内网的网卡设备进行安装。



**第二步. 启动所有服务。**

所有模块默认安装在'/opt/nano/'路径下。模块可以手动启动，也可以自行配置随系统启动。***Core模块必须第一个启动。***

```
$cd /opt/nano/core
$./core start
$cd ../cell
$./cell start
$ cd ../frontend
$./frontend start
```

当front-end模块成功启动后，会提示一个形如"**192.168.6.3:5870**"的监听地址，使用Chrome或者Firefox打开这个地址就可以进行平台管理了。


**第三步. 通过Web门户管理平台**

在浏览器中首次打开Nano管理页面，会提示创建一个初始管理员；成功后就可以登录平台，配置计算资源池并创建你的第一个云主机实例了。为了节约安装时间，请从 [此处](https://nanos.cloud/zh-cn/download.html) 下载预制镜像并上传到Nano平台直接从镜像克隆云主机。

当成功创建你的第一个空白云主机之后，你可以上传一个ISO文件，为你的云主机安装操作系统；或者开始通过磁盘镜像构建你的云主机模板，为批量克隆云主机做准备；或者添加新的物理节点，扩展你的可用资源。

通过Web门户你可以完成所有的管理工作。更多详情请访问 [在线手册](https://nanocloud.readthedocs.io/projects/guide/zh_CN/latest/)

## 升级

Nano所有模块使用go编译为二进制可执行文件，无需外部库依赖，配置和数据文件格式通常保持后向兼容，无需用户干预。

推荐使用自动升级，启动Installer并且选择”4”可以进行自动升级，自动升级会根据用户输入的安装路径，检查已经安装模块进行替换，并且自动停止并重启运行中的模块。

## Nano中使用的项目

- https://materializecss.com/
- https://github.com/julienschmidt/httprouter
- https://github.com/sevlyar/go-daemon
- https://github.com/xtaci/kcp-go
- https://github.com/novnc/noVNC
- https://github.com/libvirt/libvirt-go
- https://github.com/vishvananda/netlink
- https://github.com/shirou/gopsutil
- https://github.com/krolaw/dhcp4
- https://github.com/amoghe/go-crypt

