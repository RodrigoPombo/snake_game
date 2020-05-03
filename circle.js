function Circle() 
{
    this.centerX = 1;
    this.centerY = 0;
    this.radius = 3;

    this.draw =  function()
    {
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(this.centerX ,this.centerY , this.y, 30,30);
    }

    this.update = function()
    {
        this.centerX = this.centerX + this.xSpeedCircle;
        this.centerY = this.centerY + this.ySpeedCircle;

        if(this.centerX > 1000)
        {
            this.xSpeedCircle = -scale;
        }
        
        if(this.centerX < 10)
        {
            ctx.font = "30px Arial";
            ctx.fillText("Hello World", 10, 50);
        }

        if(this.centerY > 900)
        {
            this.ySpeedCircle = -scale;
        }
        
        if(this.centerY < 0)
        {
            this.ySpeedCircle = scale;
        }

        console.log(this.ySpeedCircle);
    }
}