//Codeforces
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

        if(isToday == "Yes")
        {
            
            document.getElementById("cfton").innerHTML ="Name : "+ name;
            document.getElementById("cftostr").innerHTML ="Start time : "+ start.slice(0,10);
            document.getElementById("cftoend").innerHTML ="End time : "+ end.slice(0,10);
            let min = dur/60;
            let hrs = (min - min%60)/60;
            let mins = min%60;
            document.getElementById("cftodur").innerHTML ="Duration : "+ eval(hrs)+" hrs "+eval(mins)+" mins";

            if(status == "BEFORE")
            {
                document.getElementById("cftost").innerHTML ="Status : Not started";
            }
            else
            {
                document.getElementById("cftost").innerHTML ="Status : Contest is Running";
            }
            let text = "Go to Contest";
            let result = text.link(url);
            //document.getElementById("cftourl").innerHTML = result;
        }
        else
        {
            document.getElementById("cfton").innerHTML ="No contest today........";
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

    if(isToday == "Yes")
    {
        
        document.getElementById("ccton").innerHTML ="Name : "+ name;
        document.getElementById("cctostr").innerHTML ="Start time : "+ start.slice(0,10);
        document.getElementById("cctoend").innerHTML ="End time : "+ end.slice(0,10);
        let min = dur/60;
        let hrs = (min - min%60)/60;
        let mins = min%60;
        document.getElementById("cctodur").innerHTML ="Duration : "+ eval(hrs)+" hrs "+eval(mins)+" mins";

        if(status == "BEFORE")
        {
            document.getElementById("cctost").innerHTML ="Status : Not started";
        }
        else
        {
            document.getElementById("cctost").innerHTML ="Status : Contest is Running";
        }
        let text = "Go to Contest";
        let result = text.link(url);
        //document.getElementById("cctourl").innerHTML = result;
    }
    else
    {
        document.getElementById("ccton").innerHTML ="No contest today........";
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

    if(isToday == "Yes")
    {
        
        document.getElementById("kston").innerHTML ="Name : "+ name;
        document.getElementById("kstostr").innerHTML ="Start time : "+ start.slice(0,10);
        document.getElementById("kstoend").innerHTML ="End time : "+ end.slice(0,10);
        let min = dur/60;
        let hrs = (min - min%60)/60;
        let mins = min%60;
        document.getElementById("kstodur").innerHTML ="Duration : "+ eval(hrs)+" hrs "+eval(mins)+" mins";

        if(status == "BEFORE")
        {
            document.getElementById("kstost").innerHTML ="Status : Not started";
        }
        else
        {
            document.getElementById("kstost").innerHTML ="Status : Contest is Running";
        }
        let text = "Go to Contest";
        let result = text.link(url);
        //document.getElementById("kstourl").innerHTML = result;
    }
    else
    {
        document.getElementById("kston").innerHTML ="No contest today........";
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

    if(isToday == "Yes")
    {
        
        document.getElementById("lcton").innerHTML ="Name : "+ name;
        document.getElementById("lctostr").innerHTML ="Start time : "+ start.slice(0,10);
        document.getElementById("lctoend").innerHTML ="End time : "+ end.slice(0,10);
        let min = dur/60;
        let hrs = (min - min%60)/60;
        let mins = min%60;
        document.getElementById("lctodur").innerHTML ="Duration : "+ eval(hrs)+" hrs "+eval(mins)+" mins";

        if(status == "BEFORE")
        {
            document.getElementById("lctost").innerHTML ="Status : Not started";
        }
        else
        {
            document.getElementById("lctost").innerHTML ="Status : Contest is Running";
        }
        let text = "Go to Contest";
        let result = text.link(url);
        //document.getElementById("lctourl").innerHTML = result;
    }
    else
    {
        document.getElementById("lcton").innerHTML ="No contest today..........";
    }

})