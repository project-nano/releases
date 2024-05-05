# Nano Cloud

[[版本历史/ChangeLog](CHANGELOG.md)]

[English Version](#introduce)

### 简介

Nano是一个完全由Golang编写的轻量级开源私有云平台，部署简单，资源占用小，API First设计能够将平台功能轻松集成到现有系统中。

[项目官网](https://nanos.cloud/)

[项目全部源代码](https://github.com/project-nano)

#### 系统特性

- **紧凑** 全项目3万多行代码，纯Go开发，不到Openstack的三百分之一。平台部署仅需要三个二进制执行文件即可，最大的模块仅9MB，无需第三方软件或者依赖库，模块升级时直接替换。
- **开箱即用** 从Web管理门户、主机监控、镜像克隆到故障切换，自带功能完备，无需安装额外组件。从网络发现、组网到设备选择，全流程自动配置，几乎不需要人工干预。
- **可靠** All or Nothing的事务模式处理任务，失败时自动回撤，释放所有资源并且还原状态。集群实时检测所有节点状态，在内存中自动同步实例数据，确保所有状态和操作及时且有效。
- **易扩展** 所有功能均提供REST API接口，应用与资源服务的分离，可以便捷地集成开发。基于goroutine的业务逻辑抽象，能够快速扩展业务功能，而无需了解复杂的后台消息驱动机制。

现有功能：
- 资源池管理 ：资源节点增删与禁用恢复、云主机调度、实时资源用量监控(CPU/内存/磁盘/网络/运行时间)、多层级资源下钻(集群/资源池/节点/实例)
- 存储后端支持 ：本地磁盘存储、NFS共享存储
- 地址池管理 ：IPv4云主机地址池管理与绑定，多地址段设定，网关及DNS分配
- 云主机功能 ：

    - 生命周期管理：创建、释放、起停、实例迁移、故障迁移
    - 配置管理：实例名、核心数、内存修改，QoS管理（CPU、磁盘、带宽），磁盘扩容、压缩，配置模板优化，系统重置
    - 虚拟机操作系统：重置管理员密码、CPU/内存用量监控、磁盘自动格式化/挂载、修改主机名
    - 远程管理：内嵌HTML5监控端、第三方VNC连接支持、VNC连接加密
    - 批量构建：云主机模板构建、复制、上传、下载、批量创建与删除
    - 数据安全：云主机增量快照创建、还原、管理
    - 媒介管理：光盘镜像上传、加载、卸载
    - 网络管理：地址绑定、回收与迁移，网关、DNS分配
- 平台管理 ：系统初始化、用户/组/角色权限管理、资源组可见性管理、自动识别组网、连接检测、模块起停、运行状态检测、操作日志
- 浏览器支持 ：Chrome/Firefox
- 辅助工具 ：Installer安装包
- 语言支持 ：中文/英文

### 安装

详见官网[安装指引](https://nanos.cloud/quick_start)

**服务器要求**

- 至少一台支持虚拟化的X86服务器或者打开嵌套虚拟化（Intel VT-x/AMD-v）的虚拟机
- 2核4G内存50GB磁盘和一个网络设备
- 操作系统使用CentOS 7 Minimal并且网络能够正常通讯，如有Raid/LVM请先完成配置，再进行Nano安装

**第一步. 解压并安装所有模块。**

```
$tar zxfv nano_installer.tar.gz
$cd nano_installer
$./installer
```

输入"0,1,2"在当前服务器安装所有模块. *当您第一次安装Nano时，建议您使用安装程序建议的默认配置，无需修改。* 如果你有多个网卡设备，请在安装程序的提示中选择连接内网的网卡设备进行安装。



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

在浏览器中首次打开Nano管理页面，会提示创建一个初始管理员，成功后就可以登录平台。

登录系统之后，**首先在计算资源池里添加一个资源节点，然后创建一个空白云主机并且启动，验证系统是否安装成功。** 如果成功就可以开始探索Nano提供的各种丰富功能了。

你也可以上传或者构建新的光盘镜像或者磁盘镜像，用于快速批量部署实例。

### Introduce


Nano is a lightweight open-source private cloud platform written entirely in Golang. It has a low resource footprint and is easy to deploy. Its API-first design allows for seamless integration with your system.

[Official Site](https://us.nanos.cloud/en/)

[Project Source Code](https://github.com/project-nano)

#### Why Nano

- **Compact** Around 30,000 lines of Golang code, less than 1/300 of OpenStack. Only three binaries to deploy, 9MB in maximum, no third-party software or dependency required, and easily replaced when upgrading.
- **Out of Box** Bundled with rich functions like the Web portal, guest monitor, instance clone, and failover. Automated configure processes including from module discovery, networking to device selection.
- **Reliable** "All or Nothing" transaction mode, rollback when an error occurs, release all resources and resume state. Detect the status of every node in the cluster in realtime, automatically synchronizes the instance data for precise.
- **Expandable** All functions backed by REST API. Divide resource services and the business layer for customization and integration. Goroutine-based abstraction enables rapid development neglecting the complex backend mechanism.

Features:

- Resource Pool : Add, remove, enable and disable resource node/schedule instances/real-time resource usage&uptime monitor/multi-layer dashboard drill down
- Storage backend support : local disk storage/NFS shared storage
- IPv4 Address pool : instance address management, multi-address range, gateway, DNS configure.
- Cloud Instances :

    - Lifecycle management: create/release/start/migrate/failover
    - Configuration management: modify guest name/core/memory, QoS(CPU/Disk IO/Bandwidth), extend and shrink disk, host template, reset system
    - Guest operating system: reset admin password, CPU/memory usage monitoring, automated disk format/mount, modify the hostname
    - Remote access: embedded HTML5 page, third-party VNC connection support, VNC connection encryption
    - Batch building: instance template build/clone/upload/download, batch creating and deleting
    - Data security: incremental snapshot creation/restore/manage
    - Media: ISO image upload/insert/eject
    - Network：address binding, recycling, and migration, gateway, DNS assignment
- Platform management : system initialization, user/user group/role manage, resource visibility, network discovery, start and stop modules, connection/running status detection, operate log
- Tools : Installer
- Broswer : Chrome/Firefox
- Multilingual : English/Chinese


### Installation

See [Quick Start](https://nanos.cloud/en/quick_start) for details


**System Requirements**

- Virtualization enabled X86 servers, or nested virtualization enabled virtual machines(Intel VT-x/AMD-v)
- 2 cores/4 GB memory/50 GB disk/1 network interface
- CentOS 7 Minimal installed with network ready. If you have raid or LVM, please configure them before installing Nano.


**step 1. download and install all modules.**

```
$tar zxfv nano_installer.tar.gz
$cd nano_installer
$./installer
```

Input "0,1,2" to install all modules in the current server. *No need to change parameters configured by the installer when you install Nano in the first time.* If you have multiple network interfaces, choose the one access internal network.



**step 2. start all services.**

All modules installed at '/opt/nano/' in default. Start module manually, or configure to startup with the system. ***Must start Core module first***.

```
$cd /opt/nano/core
$./core start
$cd ../cell
$./cell start
$ cd ../frontend
$./frontend start
```

When front-end module successfully started, it will give you a listen address likes "**192.168.6.3:5870**". Using Chrome or Firefox open this web portal to manage your newly installed Nano platform.



**step 3. manage via front-end web portal.**

The first time you open the Nano Web portal, you will be prompted to create an initial administrator.

After you log in, **add a resource node to the resource pool first, then create and start an empty instance to verify the installation.** If successful, you can begin to explore the rich features.

You can also upload or build new ISO or disk images for batch deployment of instances.
