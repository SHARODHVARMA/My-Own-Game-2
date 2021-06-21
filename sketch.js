var bg, bgImg;
var player, non_player
var playerImg, non_playerImg;
var obstacle, obstacleImg;
var score = 0;
var life = 3;
var bullet = 70;
var heart1, heart2, heart3;
var heart1Img, heart2Img, heart3Img;
var bullet, bulletImg;
var gameState = "Start";
var loose, winning, blast;
var restart, restartImg;
var non_player_group,bullet_group;

function preload(){
    heart1Img = loadImage("heart1.png");
    heart2Img = loadImage("heart2.png");
    heart3Img = loadImage("heart3.png");
    playerImg = loadImage("https://e7.pngegg.com/pngimages/707/659/png-clipart-pokemon-character-illustration-asteroids-outpost-defender-miner-cube-pro-sprite-video-game-space-craft-game-symmetry.png");
    non_playerImg = loadImage("https://w7.pngwing.com/pngs/905/1023/png-transparent-gray-and-red-animated-character-illustration-sprite-spaceshoter-catch-the-fruit-spacecraft-2d-computer-graphics-alien-game-3d-computer-graphics-dragon.png");
    bgImg = loadImage("http://33.media.tumblr.com/57ce4558ef832f45f7af00cb952df170/tumblr_mvgob4jMYw1s8taogo3_500.gif");
    bulletImg = loadImage("https://i.dlpng.com/static/png/6539726_preview.png");
    restartImg = loadImage("restartImg.png");

}