# Change Log

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
