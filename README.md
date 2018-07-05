# Project Nano

[中文版本](#chinese)

## Introduce

​    ***Nano*** is a Free, easy-to-use light-weighted Cloud platform (IaaS), regardless of All in One's experimental environment, or a large-scale cluster of tens of thousands of nodes, can be easily managed by yourself. Complete REST API, all-opened page code, to fulfill all of your development needs from OEM to business operations.



**Why is Nano different?**

- **Simple**.Simple to learn and easy to use, what you see is what you get.
- **Robust**.Dynamic status monitor, automated exception handling, seamless resource scale-out, keep service available at any time.
- **Intelligent**.From network configuration to service migration, all dirty work handled by the automated process
- **Flexible**.Open API and fully-functional demo source code, shape anything you want.
- **Free**.No trial, no resource limit, use it whatever you like.
- **Security**.From instance monitoring to full encryption of data transmission, dynamic protection against data leakage and illegal access



**Features**

- ***Highly integrated***:No external dependencies, no additional configuration, out of the box, simple and reliable. 
- ***Real-time status synchronization***: Fast and accurate in-memory processing, say goodbye to slow and inefficient database.
- ***Purely written in GO***:Sophisticated and powerful, low footprint, adapting to various stringent resource requirements.
- ***Message-driven asynchronous transactions***. Easily handle tens of thousands of concurrent tasks, automatic error rollback, no resource leaks, and abnormal state residuals.
- ***Data Security***.2048-bit TLS encryption and automatic integrity check during data transmission process to prevent any data tampering and theft
- ***Agile framework***. Unperceived second-level service switching and start-stop, migrating handovers without affecting online business at any time.
- ***Easy to scale***. Start from a single server, flexible adjustment on demand, easily extended to tens of thousands of physical nodes.
- ***Developer friendly***. Complete RESTful interface, full page source code and rich development documentation, everything is ready for developers



You can set up all Nano services in a single server, then scale to cluster with hundreds of server.

Please visit [Wiki](https://github.com/project-nano/releases/wiki/home_en) for more details, or [video](https://www.nanos.cloud/en-us/demo.html) demonstrates building Nano platform in two x86 servers.



Available in current version(v 0.1): 

1. Core/Cell/Front-End modules with the installer.
2. Cluster management: system monitor, module start/stop/check (manually) 
3. Compute pool management: add/remove resource nodes (Cell module), resource usage monitor
4. Instance management: create/delete/start/stop/monitor instance, remote control via integrated web page.
5. Disk images: build a disk image from an installed instance. create instances cloned from disk images.
6. Media images: upload ISO image, load it when starting an instance, like inserting media into the physical server.
7. A fully functional web front-end backing with RESTful API support



Coming soon:

- Instance: Operation system controls like reset password / set hostname/ disk shrink. Modify configure.
- Network: VPC
- Storage: Shared storage backend support. Disk images upload/download. Multiple local-paths support.
- Snapshot: Create/resume snapshot.



## Quick Start Guide



Follow below instructions building a single server Nano platform.



**Minimal System Requirements** 

- X86 server: 2 cores/4 GB memory/50 GB disk/1 network interface
- CentOS 7.5(1804) Minimal
- Operation system installed with network ready



**step 1.** download and install all modules.

```
$wget https://github.com/project-nano/releases/releases/download/v0.1/nano_installer_0.1.tar.gz
$tar zxfv nano_installer_0.1.tar.gz
$cd nano_installer_0.1
$./installer
```

Input "0,1,2" to install all modules in the current server. *No need to change parameters configured by the installer when you install Nano in the first time.* If you have multiple network interfaces, choose the one access internal network.



**step 2**.start all services.

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



**step 3.**manage via front-end web portal.

Open Nano portal in your browser, initial compute pool and create your first instance.

1. "compute pool" => "add cell", choose unallocated cell from list, add and return to compute pool.
2. "compute pool" => "cells", make sure cell status in online.
3. "compute pool" => "create instance", choose specifications and create your first instance.
4. "compute pool" => "instances", try start instance, monitor via integrated remote control page.



After successfully creating your first instance, you can upload an ISO file to install the operating system on your virtual machine; or build a template using the disk image,  prepare for batch cloning instances; or add new physical nodes to expand your available resources. 

You can get all manage work done via the web portal.

Thanks for watching and using Nano.

Please visit [Wiki](https://github.com/project-nano/releases/wiki/home_en) for more details, or [video](https://www.nanos.cloud/en-us/demo.html) demonstrates building Nano platform in two x86 servers.



------

(#chinese)

## 简介

  ***Nano*** 是一个免费、易用的轻量级云平台(IaaS)，无论All in One的实验环境，还是上万节点的大规模集群，都可一手轻松掌控；完整的REST API，全开放的页面代码，满足您从OEM到上线运营的全方位开发需求。

**与其他产品的主要区别**

- **简单**。极致简洁，易于理解，无需学习，所见即所得
- **健壮**。状态实时监控，异常自动处理，资源平滑扩容，服务时刻可用

- **智能**。从组网、配置到迁移修复，全程自动化处理，无需人工干预

- **灵活**。从界面到接口完全开放，满足从OEM到系统集成的多方位需求

- **免费**。无试用期，无资源限制，随你所想任意使用

- **安全**。从实例监控到数据传输全程加密，动态防护，杜绝数据泄漏和非法访问

**产品特性**

- ***高度集成***	: 无外部依赖，无额外配置，开箱即用，简单可靠

- ***实时状态同步***: 全内存处理，及时而精准，告别缓慢、复杂而低效的数据库
- ***纯Go开发***: 精巧而强大，极低资源消耗，适应各种严苛资源配置
- ***消息驱动异步事务***: 轻松处理数万并发任务，错误自动回滚，没有资源泄漏和异常状态残留
- ***数据安全***: 数据传输过程全程2048位tls加密配合自动完整性校验，防范任何数据篡改和窃取
- ***轻巧架构***: 让用户毫无感知的秒级服务切换和起停，随时迁移切换而不影响在线业务
- ***轻装上阵***: 从单台服务器开始体验，随需应变，灵活调整，轻易扩展到上万物理节点
- ***开发人员友好***: 齐备的RESTful接口，完整的页面源码和丰富的开发文档，一切皆为开发人员准备



你可以在单台服务器上安装所有Nano服务作为All in One环境，也可以平滑扩展到大规模集群。

详情请参考[Wiki](https://github.com/project-nano/releases/wiki/home)，或者参考在两台x86服务器安装Nano平台的演示[视频](https://www.nanos.cloud/zh-cn/demo.html)



目前版本(v 0.1)可用功能:

1. Core/Cell/Front-End模块及安装程序.

2. 集群管理：系统监控，模块起停/状态检查(需要手动执行)

3. 计算资源池管理：添加、删除资源节点(Cell模块)，资源用量监控

4. 云主机管理：创建、删除、启停云主机，监控资源状态，Web端集成远程管理。

5. 磁盘镜像：通过云主机构建模板镜像，通过镜像批量快速克隆云主机。

6. 光盘镜像：上传ISO光盘文件，在云主机启动时加载（主要用于安装操作系统）。

7. 完整可工作的Web前端及REST接口。

   

后续功能计划:

- 云主机：虚拟机操作系统管理，包含密码重置、主机名设置、磁盘收缩等。
- 网络: VPC
- 存储: 支持共享存储后端。磁盘镜像上传下载（用于快速构建新平台）。支持多本地存储路径（多路本地磁盘均衡负载）。
- 快照：创建及恢复快照。




## 快速安装指引

以下展示在一个独立服务器上安装完整Nano云平台的过程。



**最低系统要求** 

- X86服务器: 2核4G内存50GB磁盘和一个网络设备
- CentOS 7.5(1804) Minimal
- 操作系统安装完成并且网络就绪





**第一步.** 下载并安装所有模块。

```
$wget https://github.com/project-nano/releases/releases/download/v0.1/nano_installer_0.1.tar.gz
$tar zxfv nano_installer_0.1.tar.gz
$cd nano_installer_0.1
$./installer
```

输入"0,1,2"在当前服务器安装所有模块. *当您第一次安装Nano时，建议您使用安装程序建议的默认配置，无需修改。* 如果你有多个网卡设备，请在安装程序的提示中选择连接内网的网卡设备进行安装。



**第二步**.启动所有服务。

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



**第三步.**通过Web门户管理平台

在浏览器中打开Nano管理门户，初始化计算资源池并创建你的第一个云主机实例。

1. "compute pool" => "add cell", 从列表中选择未加入资源池的资源节点(Cell)，添加成功并返回资源池。
2. "compute pool" => "cells", 确保有Cell节点处于在线状态。
3. "compute pool" => "create instance", 设置云主机实例参数并进行创建。
4. "compute pool" => "instances", 启动实例，并通过集成Web管理终端对云主机进行监控。



当成功创建你的第一个空白云主机之后，你可以上传一个ISO文件，为你的云主机安装操作系统；或者开始通过磁盘镜像构建你的云主机模板，为批量克隆云主机做准备；或者添加新的物理节点，扩展你的可用资源。通过Web门户，你可以完成全部的平台管理工作。

感谢了解并使用Nano。

详情请参考[Wiki](https://github.com/project-nano/releases/wiki/home)，或者参考在两台x86服务器安装Nano平台的演示[视频](https://www.nanos.cloud/zh-cn/demo.html)