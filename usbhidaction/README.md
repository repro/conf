####Start as daemon:
    usbhidaction -c /root/usbhidaction.conf -f /dev/uhid1 /dev/mixer0

####Be verbose, and do not become a daemon:
    usbhidaction -v -c /root/usbhidaction.conf -f /dev/uhid1 /dev/mixer0
