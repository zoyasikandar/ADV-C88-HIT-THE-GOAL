function up()
{
    if(player_y >=0)
    {
        player_y = player_y - block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("when up arrow key is pressed, X = " + player_x +" , Y ="+player_y)
        Canvas.remove(player_object);
        player_update();
    }
}
function down()
{
    if(player_y >=500)
    {
        player_y = player_y - block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("when down arrow key is pressed, X = " + player_x +" , Y ="+player_y);
        Canvas.remove(player_object);
        player_update();
    }
}
function left()
{
    if(player_x <=0)
    {
        player_x     = player_x - block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("when left arrow key is pressed, X = " + player_x +" , Y ="+player_y);
        Canvas.remove(player_object);
        player_update();
    }
}
function right()
{
    if(player_y <=850)
    {
        player_x = player_x - block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("when right arrow key is pressed, X = " + player_x +" , Y ="+player_y);
        Canvas.remove(player_object);
        player_update();
    }
}
