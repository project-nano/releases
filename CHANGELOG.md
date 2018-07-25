# Change Log

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
