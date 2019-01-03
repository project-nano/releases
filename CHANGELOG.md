# Change Log

## [0.7.1] - 2019-01-03

### Core 0.7.1

#### Added

- System start time when query zone status

- Reset guest system

### Cell 0.7.1

#### Added

- "legacy" option of system version

- Reset guest system

- Sync storage option when compute pool available

### FrontEnd 0.7.1

#### Added

- Role/Group/User management

- Session management

- Invoke system initial page when no user configured

- Enable reset system

- Add "legacy system" option when create new instance

- Add uptime to dashboard.html

### RPMS

#### Changed

- Update all rpms base on CentOS 7.6(1810)

## [0.6.1] - 2018-11-30

### Core 0.6.1

#### Added

- Address pool management: query/create/modify/delete

- Address range management: add/remove

- Instance address allocate/migrate

- Allocated address in instance status

### Cell 0.6.1

#### Added

- Support assigned network address of instance

- Enable distributed DHCP service for MAC bound

- Configure template for different OS version

- Optimize mouse position using tablet input

- Disable DHCP service in default network when startup

### FrontEnd 0.6.1

#### Added

- Redirect address pool/range API

- Addess pool/range managment page

#### Changed

- Address pool option when creating/modifing compute pool

### Installer 0.1.8

#### Added

- Enable DHCP port for cell

#### Changed

- Disable NetworkManager before link bridge to prevent ssh disconnection

- Migrate bridge configure from interface

## [0.5.1] - 2018-11-3

### Core 0.5.1 

#### Added

- Enable/Disable cell

- Enable failover in compute pool

- Migrate instance

#### Changed

- Optimize load balance algorithm considering both real-time load and instances configured when choosing cell for allocation.

- Sort instance list by lexicographic order

### Cell 0.5.1

#### Added

- Attach/Detach instances

- Add 'qcow2' suffix to volume/snapshot files

- Set hostname when using CloudInit module

- Check the default route when startup

#### Changed

- Randomize allocation of the monitor port

- Determine system/admin name of the guest by version when creating an instance

### FrontEnd 0.5.1

#### Added

- Multi-language support

- Enable/Disable cell

- Enable failover option in compute pool

- Migrate instance

#### Changed

- Optimize console output when starting module

### Installer 0.1.7

#### Added

- Check default route

## [0.4.2] - 2018-10-11

### Core 0.4.2

#### Fixed

- result.Error output message

### Cell 0.4.2

#### Added

- Synchronize allocated network ports to instance configures

#### Fixed

- Compatible with local storage config file of the previous version

## [0.4.1] - 2018-10-2

### Core 0.4.1 

#### Added

- Storage Pool management: Create/Delete/Modify

- NFS storage backend supported

- Allow choosing storage pool when creating/modifying compute pool

- Synchronize storage configure when cell joined or added

- Add storage mount status when getting cell status

- Check duplicate instance name in a pool when creating a guest

- Mark instance status to lost when cell disconnected

- Notify cell to detach storage when removed from pool

#### Fixed

- Improper instance count when instance deallocated

- Task put a message to closed proxy channel causing panic

- Task put a message to deallocated proxy session causing panic

### Cell 0.4.1

#### Added

- Support NFS storage pool

- Report share storage(NFS) mount status

- Support volume/snapshot save on shared storage

- Create instance metadata when using shared storage

- Automount shared storage when cell start or added to compute pool

#### Fixed

- Snapshot files left when delete volumes

- Try recover stub service when stop module

### FrontEnd 0.4.1

#### Added

- Support storage pool management

- Modify compute pool

- Get compute cell info

- Standalone google materialize icons

- Mark instance lost status when cell stop/disconnected

- Add image id in list

#### Fixed

- No response to click start or insert media button when no media available.

- Auto fresh page become slower after a long time running

- Deleted instance count in the dashboard

- Output message without clear previous info in the list

### Installer 0.1.6

#### Changed

- Install nfs-client/semanage for cell

- Ask if continue when installing fail


## [0.3.1] - 2018-8-29

### Core 0.3.1

#### Added

- Insert/Eject media in instance

- Add instance create time

- Add create and modify time of images

- Snapshot management: create/restore/delete/query/get

#### Fixed

- Wrong instance name sent to cell when create a new guest

### Cell 0.3.1

#### Added

- Snapshot management: create/delete/restore/get/query

- Storage create time of guest

- Inject/eject media in running instance

- Lock volumes when running disk operates

#### Fixed

- Get instance status sync status without notify core


### FrontEnd 0.3.1


#### Added

- Create time of Instance

- Create/modify time of Image

- Snapshot management: create/ delete / revert

- Insert / eject media image

#### Changed

- Enable instance funtions in instance monitor page

- Change cpu/memory usage to bar chart in dashboard/instance monitor

- Open new tab for monitor/snapshots/details of instances list


## [0.2.3] - 2018-8-17

### Core 0.2.3

- Support initialize guest after created using Cloud-Init in NoCloudMode

- Enable guest system version/modules configure

- Enable change admin password/create new admin/auto resize&mount disk when ci module enabled (cloud-init cloud-utils required in guest)

- Qualify instance/user/group/image name (only '0~9a~Z-' allowed)

### Cell 0.2.3

- Support initialize guest after created using Cloud-Init in NoCloudMode

- Enable guest system version/modules configure

- Enable change admin password/create new admin/auto resize&mount disk when ci module enabled (cloud-init cloud-utils required in guest)

- Add listen port TCP: {cellIP}:25469 for Cloud-Init initiator


### FrontEnd pages

- Support choose installed module when cloning from an image

- Enable change admin password/ create new admin/ disk auto resize/ data disk mount when Cloud-Init module installed

- Add auto fresh in instances.html

- Optimize instances/cells auto refresh, interval reduced to 5 seconds

- Fixed: multiple image names displayed when starting with media


## [0.2.2] - 2018-8-6

### Core 0.2.2

- Stable sorted result of instance/image/cell/pool list

### Cell 0.2.2

- Enable KVM instead of TCG of QEMU, boost performance when VT-x/AMD-v enabled

- Using the IDE system disk if the system of an instance is "windows".

- Don't save NetworkAddress of Instance

- Avoid response channel block after timeout event invoked

- Fixed: panic when try to notify the Resize/Shrink tasks

### FrontEnd resource

- Add auto fresh switch in cell/instance list

### Installer 0.1.3

- modify user/group in /etc/libvirt/qemu.conf before start service

## [0.2.1] - 2018-07-31

### Core 0.2.1

- Modify Cores/Memory/Disk Size

- Shrink guest volume

- Set/Get user password

- Add "system" property in guest

- Fixed: a newly uploaded disk image cannot use in cloning

### Cell 0.2.1

- Modify Cores/Memory/Disk Size

- Shrink guest volume

- Set/Get user password

- Add "system" property in guest

### FrontEnd 0.2.1

- Doc: Modify core/memory/disk size, shrink disk, set/get password

- Forward Request: Modify core/memory/disk size, shrink disk, set/get password

- Add guest modify page: instance_detail.html


## [0.1.3] - 2018-07-25

### Core 0.1.3

- Handle instance address changed event

- API redirect disk image requests

- Ignore offline cells when compute score

- Forward create disk image request when no target guest specified

- Support form uploading

- Fixed: instance internal and external address

### Cell 0.1.4

- Resize guest disk when clone finished

- Compute instance CPU usage properly

- Get IP address for started instance

- Notify Core module when instance ip detected

- Fixed: Internal instance address not send to Core module

### FrontEnd 0.1.2

- Version output

- Disk image upload and download

- Add auto refresh to compute_cells.html and instance_list.html



## [0.1.2] - 2018-07-21

### Core

- gracefully disconnect when module stop

- add version output on the console

### Cell

- add version output on the console

- add qemu-agent channel in guest

- fix instance memory usage monitor

- try to reconnect when core disconnected

- gracefully disconnect when module stop

- bug fixed: random MAC not properly generated
