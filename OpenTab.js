(function()
    {
        'use strict';
        var myLinks = [];
        $("#right a").each(function()
            {
                if($(this).find(".disabled_pbx").length === 0)
                    {
                        myLinks.push(this);
                    }
            });
        var totalLinks = myLinks.length;
        setInterval(function()
            {
                if(myLinks.length > 0)
                    {
                        var rank = totalLinks - myLinks.length;
                        var url = $(myLinks.pop()).attr("href");
                        console.log(rank + "de" + totalLinks + " :: clicakado em " + url);
                        var myWindowADS = window.open(url);
                        /*if (!myWindowADS)
                            {
                                myWindowADS = window.open(url);
                            }
                        else
                            {
                                if (myWindowADS.closed)
                                    {
                                        myWindowADS.close();
                                    }
                            }*/
                    }
                else
                    {
                        console.log("finalizado!!");
                    }
 
            },42000);
    })();
