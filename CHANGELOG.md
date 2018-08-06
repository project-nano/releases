# Change Log

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
