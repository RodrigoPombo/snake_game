function Player() 
{
    this.score = 0;
}

function Snake() 
{
    this.x = 0;
    this.y = 0;
    this.xSpeed = 0;
    this.ySpeed = 0; 
    this.size = 1;
    this.orient = "Right";
    this.orient_prev="Right";
    this.list_letter = [];
    this.list_letter = [];
    this.state = "";
    this.cnt_n_dummy = 0;
    this.state_saved = "";
    this.state_saved_mine = "";

    this.draw =  function(dif)
    {
        //this.ori = this.orient_prev;
        ////console.log("valor de ori antes: " + this.ori);

        if(this.orient != this.orient_prev)
        {
            state_saved_mine = this.orient_prev;
            ////console.log("state_saved_mine: " + this.state_saved_mine);
            this.orient_prev = this.orient;
            ////console.log("valor de ori depois: " + this.orient_prev);
            this.list_letter.unshift(this.orient);
        }
        else
        {
            this.list_letter.unshift("dummy");
        }
        
        var x_now = this.x;
        var y_now = this.y;
        var quebra = 0;
        state_saved = "";
        cnt_n_dummy = 0;

        for(i = 0 ; i < dif ; i++)
            {
                
                quebra = quebra + 1;

                if(i == 0)
                {
                    ctx.fillStyle = "#FFFFFF";
                    ctx.fillRect(this.x, this.y, 30,30);
                    state = this.orient;
                    if(this.list_letter[0] != "dummy")
                    {
                        cnt_n_dummy = cnt_n_dummy + 1;
                    }
                }
                else
                {
                    //tenho de alterar isto!!
                    if(this.list_letter[i] == "dummy")
                    {

                        if(this.list_letter[i-1] != "dummy")
                        {
                            for(j = i ; j < this.list_letter.length ; j++)
                            {

                                if(this.list_letter[j] != "dummy")
                                {
                                    state = this.list_letter[j];
                                    break;
                                }
                            }   
                        }

                        if(state == "Right")
                        {
                            //console.log("entrou no right")
                            x_now = (x_now - 30);
                            //y_now = y_now;
                            ctx.fillStyle = "#FFFFFF";
                            ctx.fillRect(x_now, y_now, 30,30);
                            //console.log("array: " + this.list_letter[i]);
                            //break;;
                        }
                        if(state == "Left")
                        {
                            x_now = (x_now + 30);
                            //y_now = y_now;
                            ctx.fillStyle = "#FFFFFF";
                            ctx.fillRect(x_now, y_now, 30,30);
                            //console.log("array: " + this.list_letter[i]);
                            //break;;
                        } 
                        if(state == "Up")
                        {
                            //x_now = x_now + 30;
                            y_now = (y_now + 30);
                            ctx.fillStyle = "#FFFFFF";
                            ctx.fillRect(x_now, y_now, 30,30);
                            //console.log("entrou no up caixote nº " + (i+1));
                            //console.log("coordenada de x: " + this.x_now);
                            //console.log("coordenada de y: " + this.y_now);
                            //break;;
                        } 
                        if(state == "Down")
                        {
                            //x_now = x_now + 30;
                            y_now = (y_now - 30);
                            ctx.fillStyle = "#FFFFFF";
                            ctx.fillRect(x_now, y_now, 30,30);
                            //////////console.log("array: " + this.list_letter[i]);
                            //break;
                        } 
                        //////console.log("posição: " + i + " entrou no dummy");
                        //////console.log("x_now: " + x_now + " y_now: " + y_now);

                        if(i == 1 || i == 2)
                        {
                            ////console.log("para a posição " + i);
                            ////console.log("x: " + x_now + " y: " + y_now);
                        }
                    }
                    else
                    {
                        state = this.list_letter[i];
                        
                        this.cnt_n_dummy = this.cnt_n_dummy + 1;

                        if(state == "Right")
                        {
                            x_now = (x_now - 30);
                            //y_now = y_now;
                            ctx.fillStyle = "#FFFFFF";
                            ctx.fillRect(x_now, y_now, 30,30);
                            //break;;
                        }
                        if(state == "Left")
                        {
                            x_now = (x_now + 30);
                            //y_now = y_now;
                            ctx.fillStyle = "#FFFFFF";
                            ctx.fillRect(x_now, y_now, 30,30);
                            //break;;
                        } 
                        if(state == "Up")
                        {
                            //x_now = x_now + 30;
                            y_now = (y_now + 30);
                            //////console.log("entrou no UP do n dummy: com valor y: " + this.y);
                            //////console.log("entrou no UP do n dummy: com valor y_now: " + y_now);
                            ctx.fillStyle = "#FFFFFF";
                            ctx.fillRect(x_now, y_now, 30,30);
                            ////////console.log("y_now final: " + y_now);
                            ////////console.log("x_now final: " + x_now);
                            //break;;
                        } 
                        if(state == "Down")
                        {
                            //x_now = x_now + 30;
                            y_now = (y_now - 30);
                            ctx.fillStyle = "#FFFFFF";
                            ctx.fillRect(x_now, y_now, 30,30);
                            //////////console.log("array: " + this.list_letter[i]);
                            //break;;
                        } 
                        //////console.log("posição: " + i + " entrou no não dummy");
                        //////console.log("x_now: " + x_now + " y_now: " + y_now);


                        
                    }
                }
            
            
            }
    }

    this.update = function()
    {
        this.x = this.x + (this.xSpeed);
        this.y = this.y + (this.ySpeed);
        //atual_rect_x = this.x;
        atual_rect_y = this.y;

        if(this.y > 900)
        {
            alert("This alert will never be shown.");
        }
        
        if(this.y < -10)
        {
            alert("This alert will never be shown.");
        }

        if(this.x > 1000)
        {
            alert("This alert will never be shown.");
        }
        
        if(this.x < -10)
        {
            alert("This alert will never be shown.");
        }

        //////////console.log(this.y);
    }



    this.changeDir = function(direct)
    {
        switch(direct){
            case "Up":
                this.xSpeed = 0;
                this.ySpeed = -scale;
                this.orient="Up";
                //this.list.unshift("U");
                //this.list.unshift("U");
                break;
            case "Down":
                this.xSpeed = 0;
                this.ySpeed = scale;
                this.orient="Down";
                //this.list.unshift("D");
                //this.list.unshift("U");
                break;
            case "Right":
                this.xSpeed = scale;
                this.ySpeed = 0;
                this.orient = "Right";
                //this.list.unshift("R");
                //this.list.unshift("U");
                break;
            case "Left":
                this.xSpeed = -scale;
                this.ySpeed = 0;
                this.orient = "Left";
                //this.list.unshift("L");
                //this.list.unshift("U");
                break;

        }
    }
}


function rand_point() 
{
    this.x_rand = Math.floor(Math.random() * 1000);  
    this.y_rand = Math.floor(Math.random() * 900);  
    
    //this.x_rand = Math.floor(Math.random() * 50);  
    //this.y_rand = Math.floor(Math.random() * 50);  

    this.update_rand =  function()
    {
        this.x_rand = Math.floor(Math.random() * 1000);  
        this.y_rand = Math.floor(Math.random() * 900);  
      //  this.x_rand = Math.floor(Math.random() * 50);  
       // this.y_rand = Math.floor(Math.random() * 50); 
    }
    
    this.draw =  function()
    {
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(this.x_rand, this.y_rand, 10,10);
    }
}
