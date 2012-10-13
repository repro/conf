####Installation:
	cp usbhidaction.conf /etc/
	echo "usbhidaction -c /etc/usbhidaction.conf -f /dev/uhid1 /dev/mixer0" >> /etc/rc.local
