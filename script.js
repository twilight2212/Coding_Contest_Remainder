fetch("https://kontests.net/api/v1/codeforces")
    .then(res => res.json())
    .then(data =>{
        const name = data[0].name;
        const isToday = data[0].in_24_hours;

        const url = data[0].url;
        const start = data[0].start_time;
        const end  = data[0].end_time;
        const dur = data[0].duration;
        const status = data[0].status;

        if(isToday == "No")
        {
            
            document.getElementById("cfupn").innerHTML ="Name : "+ name;
            document.getElementById("cfupstr").innerHTML ="Start time : "+ start.slice(0,10);
            document.getElementById("cfupend").innerHTML ="End time : "+ end.slice(0,10);
            let min = dur/60;
            let hrs = (min - min%60)/60;
            let mins = min%60;
            document.getElementById("cfupdur").innerHTML ="Duration : "+ eval(hrs)+" hrs "+eval(mins)+" mins";

            if(status == "BEFORE")
            {
                document.getElementById("cfupst").innerHTML ="Status : Not started";
            }
            else
            {
                document.getElementById("cfupst").innerHTML ="Status : Contest is Running";
            }
            let text = "Go to Contest";
            let result = text.link(url);
            //document.getElementById("cftourl").innerHTML = result;
        }
        else
        {
            document.getElementById("cfupn").innerHTML ="Contest is today.....";
        }

    })

//Codechef
fetch("https://kontests.net/api/v1/code_chef")
.then(res => res.json())
.then(data =>{

    const name = data[data.length - 1].name;
    const isToday = data[data.length - 1].in_24_hours;

    const url = data[data.length - 1].url;
    const start = data[data.length - 1].start_time;
    const end  = data[data.length - 1].end_time;
    const dur = data[data.length - 1].duration;
    const status = data[data.length - 1].status;

    if(isToday == "No")
    {
        
        document.getElementById("ccupn").innerHTML ="Name : "+ name;
        document.getElementById("ccupstr").innerHTML ="Start time : "+ start.slice(0,10);
        document.getElementById("ccupend").innerHTML ="End time : "+ end.slice(0,10);
        let min = dur/60;
        let hrs = (min - min%60)/60;
        let mins = min%60;
        document.getElementById("ccupdur").innerHTML ="Duration : "+ eval(hrs)+" hrs "+eval(mins)+" mins";

        if(status == "BEFORE")
        {
            document.getElementById("ccupst").innerHTML ="Status : Not started";
        }
        else
        {
            document.getElementById("ccupst").innerHTML ="Status : Contest is Running";
        }
        let text = "Go to Contest";
        let result = text.link(url);
        //document.getElementById("cctourl").innerHTML = result;
    }
    else
    {
        document.getElementById("ccupn").innerHTML ="Contest is today.....";
    }

})

//Google Kickstart
fetch("https://kontests.net/api/v1/kick_start")
.then(res => res.json())
.then(data =>{

    const name = data[0].name;
    const isToday = data[0].in_24_hours;

    const url = data[0].url;
    const start = data[0].start_time;
    const end  = data[0].end_time;
    const dur = data[0].duration;
    const status = data[0].status;

    if(isToday == "No")
    {
        
        document.getElementById("ksupn").innerHTML ="Name : "+ name;
        document.getElementById("ksupstr").innerHTML ="Start time : "+ start.slice(0,10);
        document.getElementById("ksupend").innerHTML ="End time : "+ end.slice(0,10);
        let min = dur/60;
        let hrs = (min - min%60)/60;
        let mins = min%60;
        document.getElementById("ksupdur").innerHTML ="Duration : "+ eval(hrs)+" hrs "+eval(mins)+" mins";

        if(status == "BEFORE")
        {
            document.getElementById("ksupst").innerHTML ="Status : Not started";
        }
        else
        {
            document.getElementById("ksupst").innerHTML ="Status : Contest is Running";
        }
        let text = "Go to Contest";
        let result = text.link(url);
        //document.getElementById("kstourl").innerHTML = result;
    }
    else
    {
        document.getElementById("ksupn").innerHTML ="Contest is today.....";
    }

})

//Leetcode
fetch("https://kontests.net/api/v1/leet_code")
.then(res => res.json())
.then(data =>{

    const name = data[data.length - 1].name;
    const isToday = data[data.length - 1].in_24_hours;

    const url = data[data.length - 1].url;
    const start = data[data.length - 1].start_time;
    const end  = data[data.length - 1].end_time;
    const dur = data[data.length - 1].duration;
    const status = data[data.length - 1].status;

    if(isToday == "No")
    {
        
        document.getElementById("lcupn").innerHTML ="Name : "+ name;
        document.getElementById("lcupstr").innerHTML ="Start time : "+ start.slice(0,10);
        document.getElementById("lcupend").innerHTML ="End time : "+ end.slice(0,10);
        let min = dur/60;
        let hrs = (min - min%60)/60;
        let mins = min%60;
        document.getElementById("lcupdur").innerHTML ="Duration : "+ eval(hrs)+" hrs "+eval(mins)+" mins";

        if(status == "BEFORE")
        {
            document.getElementById("lcupst").innerHTML ="Status : Not started";
        }
        else
        {
            document.getElementById("lcupst").innerHTML ="Status : Contest is Running";
        }
        let text = "Go to Contest";
        let result = text.link(url);
        //document.getElementById("lctourl").innerHTML = result;
    }
    else
    {
        document.getElementById("lcupn").innerHTML ="Contest is today.....";
    }

})