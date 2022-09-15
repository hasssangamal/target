let n = 0;
jone.addEventListener("click", (eo) => {
    const arrvideos = [
        `<video id="frame" src="success/5189985681407925380_play.mp4_logo_EG.mp4" autoplay></video>`,
        `<video id="frame" src="success/5189704204366036984_play.mp4_logo_EG.mp4" autoplay></video>`,
        `<video id="frame" src="success/5190267194808679123_play.mp4_logo_EG.mp4" autoplay></video>`,
        `<video id="frame" src="success/5191111579401209030_play.mp4_logo_EG.mp4" autoplay></video>`,
        `<video id="frame" src="success/5193363419967587641_play.mp4_logo_EG.mp4" autoplay></video>`,
        ` <video id="frame" src="success/5195615178799090015_play.mp4_logo_EG.mp4" autoplay></video>`,
        ` <video id="frame" src="success/5196741080697963184_play.mp4_logo_EG.mp4" autoplay></video>`,
        `<video id="frame" src="success/5199274356008979574_play.mp4_logo_EG.mp4" autoplay></video>`,
        ` <video id="frame" src="success/5204340941775643772_play.mp4_logo_EG.mp4" autoplay></video>`,
        `<video id="frame" src="success/5205185367639751977_play.mp4_logo_EG.mp4" autoplay></video>`,
        ` <video id="frame" src="success/5206029755622287707_play.mp4_logo_EG.mp4" autoplay></video>`,
        ` <video id="frame" src="success/5206592705825229312_play.mp4_logo_EG.mp4" autoplay></video>`,
        `<video id="frame" src="success/5209125980683102221_play.mp4_logo_EG.mp4" autoplay></video>`,
        `<video id="frame" src="success/5210533352294802946_play.mp4_logo_EG.mp4" autoplay></video>`,
        `<video id="frame" src="success/5210533394988769189_play.mp4_logo_EG.mp4" autoplay></video>`,
        `<video id="frame" src="success/5210533397588967675_play.mp4_logo_EG.mp4" autoplay></video>`,
        `<video id="frame" src="success/5211377779952870229_play.mp4_logo_EG.mp4" autoplay></video>`,
        `<video id="frame" src="success/5219259077739124117_play.mp4_logo_EG.mp4" autoplay></video>`,
        `<video id="frame" src="success/5221229401490461426_play.mp4_logo_EG.mp4" autoplay></video>`,
        ` <video id="frame" src="success/5222073826631550634_play.mp4_logo_EG.mp4" autoplay></video>`,
        `<video id="frame" src="success/5222355303001947647_play.mp4_logo_EG.mp4" autoplay></video>`,
        ` <video id="frame" src="success/5226577467383883008_play.mp4_logo_EG.mp4" autoplay></video>`,
        `<video id="frame" src="success/5226858900689079781_play.mp4_logo_EG.mp4" autoplay></video>`,
        ` <video id="frame" src="success/5228547790785163273_play.mp4_logo_EG.mp4" autoplay></video>`,
        `<video id="frame" src="success/5234177250103391828_play.mp4_logo_EG.mp4" autoplay></video>`,
        ` <video id="frame" src="success/5235303153257892680_play.mp4_logo_EG.mp4" autoplay></video>`,
        ` <video id="frame" src="success/5239243842411569670_play.mp4_logo_EG.mp4" autoplay></video>`,
        `<video id="frame" src="success/5240369701208738984_play.mp4_logo_EG.mp4" autoplay></video>`,
        `<video id="frame" src="success/5240932653098651652_play.mp4_logo_EG.mp4" autoplay></video>`,
        `<video id="frame" src="success/5243184488070934658_play.mp4_logo_EG.mp4" autoplay></video>`,
        ` <video id="frame" src="success/5247969524960930247_play.mp4_logo_EG.mp4" autoplay></video>`,
        `<video id="frame" src="success/5247969526580310200_play.mp4_logo_EG.mp4" autoplay></video>`,
        ` <video id="frame" src="success/5248813988438964012_play.mp4_logo_EG.mp4" autoplay></video>`,
        `<video id="frame" src="success/5257539675223850594_play.mp4_logo_EG.mp4" autoplay></video>`,
        ` <video id="frame" src="success/301068357_393067256232593_2540289414406293451_n.mp4" autoplay></video>`,
        `<video id="frame" src="success/307094793_392870959690304_3037359450683918911_n.mp4" autoplay></video>`






    ]
    containerframe.innerHTML = arrvideos[n];
    n++;
    if (arrvideos.length - 1 < n) {
        n = 0;
    }
});

