# at your own risk

this is mirror archive of TSUMV29/TSUMV59 LCD controller board's firmware.
no checked, no support, no documents.


## d.o.c.u.m.e.n.t:)

### TSUMV29

mirror of [https://sites.google.com/site/lcd4hobby/5-lcd-as-pc-hdmi-av-tv-multidisplay](https://sites.google.com/site/lcd4hobby/5-lcd-as-pc-hdmi-av-tv-multidisplay)

model: LA.MV29.P
firmware update: via USB memory

directory:
- TSUMV29
   - oldTunerModel: for the board which has metal shell TV tuner.
   - newTuner(R840)Model: for the board with new TV tuner, you can see R840 chip on the board.
   - repair: default firmware, in order to rescue?

### TSUMV59

mirror of [https://sites.google.com/site/lcd4hobby/6-lcd-as-pc-vga-hdmi-av-tv-display-tsumv59](https://sites.google.com/site/lcd4hobby/6-lcd-as-pc-vga-hdmi-av-tv-display-tsumv59)

model: LA.MV9.P V59
firmware update: via USB memory

- TSUMV59
   - oldTunerModel: for the board which has metal shell TV tuner.
   - newTunerModel: for the board with new TV tuner, you can see R840 chip on the board.
   - repair: default firmware, in order to rescue?
   
### MEMO

essential quotes

> the board (on picture) have new updated TV tuner with R840 chip, so it use new firmware (software package must have in name "R840" ), if is used firmware for old type of board, then TV tuner not works at all. With new firmware for R840, TV works surprisingly clean and nice, with analog channels of cable network.

<!-- -->

> It looks like older board is made typically for 16:9 and 4:3 aspect ratio screens.
> There is not firmware support for other laptop's typical 16:10 ratio screens (ex. no support for 1280x800) , this resolution is supported in another firmware pack added above.
> However, I was able to find firmwares for 16:10 screens, unfortunate remote control was not working with them :( .

<!-- -->

> Firmwares are described as 7 key keyboards but it works also with 5 key keyboard.
You can change connected keyboard type, 7 or 5 keys, in "service menu".

<!-- -->

> Programming is very simple, we must choose proper .bin file and copy it to pendrive at root directory, plug pendrive into USB, then plug power cord, status LED will made some flashes and software upgrade is done.

<!-- -->

> Attention:  Sometimes, when playing with firmwares, if there be power cut/brake and flash will not finish programming, than the board become dead.
> To repair/fix the board, need to be reprogrammed SPI flash chip (small 8 leg chip) in any external SPI programmer.
To do that, we must unsolder flash chip from board, put it into programmer and program the  .bin file what is placed at end of this page. 
> After program, resolder chip in his place at board, the controller will become live, so is possible to start programming again. 

_.bin file what is placed at end of this page._ is _~/TSUMV(2|5)9/repair/\*\*.bin_.


### related videos

- [Controladora LCD Universal v29 - Configurações](https://www.youtube.com/watch?v=WMIL4Ta7asc): tutorial movie of update firmware and assembling.


### shop links

- [aliexpress V59 board](http://www.aliexpress.com/af/v59.html?ltype=wholesale&SearchText=v59): US $13.50~
- [banggood.com V59 board](http://www.banggood.com/search/v59.html): US $13.21~
- [ebay.com V59 board](http://www.ebay.com/sch/Consumer-Electronics-/293/v59): US $17.69~

You'll found some 5 or 7 key keypad for these boards at the same time, or searching.

LVDS cable (connect LCD to board) is available. check your panel connection interface.
Generally there is 14pin/20pin/30pin/40pin, and LVDS signal interface (1ch/2ch, 6bit/8bit), you should select the cable match with your lcd pane.

You can find cables by searching the keyword 'LVDS cable', but the item for specific pane is useful and secure.
search by panel model name, if available, you'll find these cables.

In the case of panel backlight is CCFL, maybe you have to buy CCFL driving _inverter_ module.
Fortunately, also you can find the cheap module for this usage.
Check the backlight conposition of your panel, generally CCFL is 1ch/2ch.
for example, [on aliexpress it is available from US $2.30 with cable for connect to controller board](http://www.aliexpress.com/af/ccfl-inverter-lcd.html?ltype=wholesale).

If you worried about wrong buying or setup, there is the package of these accessories and the board(the firmware for specific panel was burned).


### researching...

I found similar boards, called _T.VST29.03_ and _T.VST59.03_ or _T.VST59.031_.
It is similar looks, and maybe has a USB update features.
[document for T.VST59.03 is available](http://wenku.baidu.com/view/a2de0eb51ed9ad51f11df2b9.html), almost same as _LA.MV9.P V59_.
how is it?

