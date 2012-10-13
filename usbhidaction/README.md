####Installation:
	cp usbhidaction.conf /etc
	echo "usbhidaction -c /root/usbhidaction.conf -f /dev/uhid1 /dev/mixer0" >> /etc/rc.local
