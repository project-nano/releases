查看 [中文版本](README_cn.md)

## What is Nano

Nano is an Open-sourced IaaS (Infrastructure as a Service) software based on CentOS and KVM virtualization technology, which manages virtual machines using server clusters as resource pools.

Nano uses automated processes to replace human operations as many as possible, aiming to provide a robust platform while keeping things simple and easy.

Nano developed by Golang, build a fast and reliable service with a low footprint. All Nano modules compiled to standalone binaries, no dependent library required when deployed.

You can turn any server enable Intel VT-d or AMD-v technology into an IaaS platform, and begin deploying virtual machines in 3-minutes with a tiny installer.

Nano comes with a user-friendly GUI out of the box, also provide a machine-friendly REST API which can easily integrate into current products or automated scripts.

Nano uses MIT license, which is free for modification, personal or commercial use.

Welcome to the official website https://nanos.cloud/en-us/ for more information.

Author: Akumas (bokuore@github.com)

Quick Guide: https://nanocloud.readthedocs.io/projects/guide/en/latest/

Blueprint for REST API: https://nanoen.docs.apiary.io/

## Why Nano?

- **Simple**: Simple to learn and easy to use，out-of-the-box without any external dependencies.
- **Robust**: The concurrent transaction with automated error handling and resource recycling, cooperating with the failover feature, aim for reliable service.
- **Intelligent**: From network discovery to instance assemble, all dirty work handled by the automated process.
- **Scalable**: Start on a single server, and grow up to tens of thousands of physical nodes in few clicks.
- **Flexible**: Open-sourced with complete REST API,  easy to customize anything you want.
- **Security**: Authenticated instance monitoring and encrypted data transmission, everything shields from data leakage and illegal access.

**Features (1.0.0)**

- ***Resource Pool*** : Add, remove, enable and disable resource node/schedule instances/real-time resource usage&uptime monitor/multi-layer dashboard drill down
- ***Storage backend support*** : local disk storage/NFS shared storage
- ***IPv4 Address pool*** : instance address management, multi-address range, gateway, DNS configure.
- ***Cloud Instances*** :
  - Lifecycle management: create/release/start/migrate/failover
  - Configuration management: modify guest name/core/memory, QoS(CPU/Disk IO/Bandwidth), extend and shrink disk, host template, reset system
  - Guest operating system: reset admin password, CPU/memory usage monitoring, automated disk format/mount, modify the hostname
  - Remote access: embedded HTML5 page, third-party VNC connection support, VNC connection encryption
  - Batch building: instance template build/clone/upload/download, batch creating and deleting
  - Data security: incremental snapshot creation/restore/manage
  - Media: ISO image upload/insert/eject
  - Network：address binding, recycling, and migration, gateway, DNS assignment
- ***Platform management*** : system initialization, user/user group/role manage, resource visibility, network discovery, start and stop modules, connection/running status detection, operate log
- ***Tools*** : Installer
- ***Browser*** : Chrome/Firefox
- ***Multilingual*** : English/Chinese  


## Installation

Follow below instructions building a single server Nano platform.

**Minimal System Requirements** 

- Virtualization enabled X86 servers, or nested virtualization enabled virtual machines
- 2 cores/4 GB memory/50 GB disk/1 network interface
- CentOS 7.6(1810) Minimal
- Operation system installed with network ready

**step 1. download and install all modules.**

```
$wget https://nanos.cloud/media/nano_installer_1.0.0.tar.gz
$tar zxfv nano_installer_1.0.0.tar.gz
$cd nano_installer
$./installer
```

After the Installer starts, you are asked to choose the modules to install. For example, “2” for the Cell only, and “3” for installing all module on current server. *No need to change parameters configured by the installer when you install Nano in the first time.* If you have multiple network interfaces, choose the one access internal network.

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

The first time you open the Nano Web portal, you will be prompted to create an initial administrator. After that, you will log on to the portal, initial compute pool and create your first instance. 

For more details, please visit [Quick Guide](https://nanocloud.readthedocs.io/projects/guide/en/latest/)

## Upgrade

All modules of Nano are compiled binary without any external library dependency, and configuration and data file formats are usually backward compatible.

It highly recommends that executing the installer and selecting “4” to upgrade all modules automatically. The installer will check which module installed need to update, and stop and restart a running module automated.

## Projects used in Nano

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
