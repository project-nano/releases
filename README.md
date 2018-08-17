查看 [中文版本](README_cn.md)

## What is Nano

***Nano*** is a Free, easy-to-use light-weighted Cloud platform (IaaS), regardless of All in One's experimental environment, or a large-scale cluster of tens of thousands of nodes can be easily managed by yourself. Complete REST API, all-opened page code, to fulfill all of your development needs from OEM to business operations.



## Why Nano?

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

## What can Nano do

You can set up all Nano services in a single server, then scale to cluster with hundreds of server.

Please visit [Wiki](https://github.com/project-nano/releases/wiki/English) for more details, or watch this [video: "build your private cloud in 3 minutes"](https://www.nanos.cloud/en-us/demo.html) for demonstrating.


Available in current version(v 0.2.1): 

1.Web portal that can complete all management functions, built-in secure cloud host remote management page

2.Cluster management: system monitor, module start/stop/check (manually)

3.Compute pool management: add/remove resource nodes (Cell module), resource usage monitor

4.Instance management: create/delete/start/stop/monitor instance, modify configure, reset password.

5.Volume management: extend / shrink instance disk

6.Disk images: upload and download the disk image directly. create instances cloned from disk images.

7.Media images: upload ISO image, load it when starting an instance, like inserting media into the physical server.

8.Rich RESTful API support for integrating and customizing

Coming soon:

- Storage: Shared storage backend support.
- Network: VPC
- Snapshot: Create/resume snapshot.
- Guest: cloud-init and windows optimization



## Quick Start Guide



Follow below instructions building a single server Nano platform.



**Minimal System Requirements** 

- X86 server: 2 cores/4 GB memory/50 GB disk/1 network interface
- CentOS 7.5(1804) Minimal
- Operation system installed with network ready



**step 1. download and install all modules.**

```
$wget https://github.com/project-nano/releases/releases/download/v0.2.1/nano_installer_0.2.1.tar.gz
$tar zxfv nano_installer_0.2.1.tar.gz
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

Open Nano portal in your browser, initial compute pool and create your first instance. Download a prebuild disk image from [here](https://nanos.cloud/en-us/download.html), and upload to Nano to save installing time.

1. "compute pool" => "add cell", choose unallocated cell from list, add and return to compute pool.

2. "compute pool" => "cells", make sure cell status in online.

3. "compute pool" => "create instance",  choose specifications and select uploaded image in "System Image" menu, clone your first instance.

4. "compute pool" => "instances", try start instance, monitor via integrated remote control page.Check if everything is OK.


After successfully creating your first instance, you can upload an ISO file to install the operating system on your virtual machine; or build a template using the disk image,  prepare for batch cloning instances; or add new physical nodes to expand your available resources. 

You can get all manage work done via the web portal.

## Community

Official Site: [nanos.cloud](https://nanos.cloud/en-us/)

Wiki: [github.com/project-nano/releases/wiki/English](https://github.com/project-nano/releases/wiki/English)

Forum: [nanocloud.boards.net](http://nanocloud.boards.net/)

Gitter: [project-nano](https://gitter.im/project-nano)

If you need any further help, contact us via support@nanos.cloud.
