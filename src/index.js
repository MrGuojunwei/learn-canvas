/*
 * @Description: 
 * @Author: 郭军伟
 * @Date: 2020-03-06 09:28:33
 * @lastEditTime: Do not edit
 */
let canvas = document.getElementById('canvas');
// 获取渲染上下文
// getContext()只有一个参数，上下文的格式。
if (canvas.getContext) {
  let ctx = canvas.getContext('2d');
  draw(ctx);
} else {
  alert('不支持getContext');
}

// 角度与弧度的转换
function t(angle) {
  return Math.PI / 180 * angle;
}

function draw(ctx) {
  // fillRect(x,y,width, height) 绘制一个填充的矩形
  // strokeRect(x,y,width, height) 绘制一个描边的矩形
  // clearRect(x,y,width, height) 清除指定矩形区域

  // ctx.fillRect(25, 25, 100, 100);
  // ctx.clearRect(45, 45, 60, 60);
  // ctx.strokeRect(50, 50, 50, 50);

  /**
   * 使用路径绘制图形需要一些额外的步骤。
   * 首先，你需要创建路径起始点。 beginPath(x,y)
   * 然后你使用画图命令去画出路径。
   * 之后你把路径封闭。 closePath() 如果图形是已经闭合了的，即当前点为开始点，该函数什么也不做。 
   * 当你调用fill()函数时，所有没有闭合的形状都会自动闭合，所以你不需要调用closePath()函数。但是调用stroke()时不会自动闭合
   * 一旦路径生成，你就能通过描边或填充路径区域来渲染图形 stroke() fill()
   */
  /**
   * 即调用beginPath()之后，或者canvas刚建的时候，第一条路径构造命令通常被视为是moveTo（），无论实际上是什么。出于这个原因，你几乎总是要在设置路径之后专门指定你的起始位置
   * moveTo() 移动笔触 并不会绘制任何东西
   */

  //  绘制一个三角形
  // ctx.beginPath();
  // ctx.moveTo(60,60);
  // ctx.lineTo(90,90);
  // ctx.lineTo(30,90);
  // ctx.fill();

  // 绘制圆弧 arc(x, y, radius, startAngle, endAngle, anticlockwise) 参数anticlockwise为一个布尔值。为true时，是逆时针方向，否则顺时针方向。 弧度=(Math.PI/180)*角度
  // 绘制一个笑脸
  // ctx.beginPath();
  // ctx.arc(100, 100, 60, 0, t(360), false); // 头
  // ctx.moveTo(85, 80);
  // ctx.arc(80, 80, 5, 0, t(360), false); // 左眼睛
  // ctx.moveTo(125, 80);
  // ctx.arc(120, 80, 5, 0, t(360), false); // 右眼睛
  // ctx.moveTo(130, 100);
  // ctx.arc(100, 100, 30, 0, t(180), false); // 嘴巴
  // ctx.stroke();

  // 绘制直线 lineTo(x, y) 
  // 绘制两个三角形 一个填充 一个描边
  // ctx.beginPath();
  // ctx.moveTo(50, 50);
  // ctx.lineTo(100, 50);
  // ctx.lineTo(50, 100);
  // ctx.fill();

  // ctx.moveTo(100, 70);
  // ctx.lineTo(100, 120);
  // ctx.lineTo(50,120);
  // ctx.closePath();
  // ctx.stroke()

  // for (var i = 0; i < 4; i++) {
  //   for (var j = 0; j < 3; j++) {
  //     ctx.beginPath();
  //     var x = 25 + j * 50; // x 坐标值
  //     var y = 25 + i * 50; // y 坐标值
  //     var radius = 20; // 圆弧半径
  //     var startAngle = 0; // 开始点
  //     var endAngle = Math.PI + (Math.PI * j) / 2; // 结束点
  //     var anticlockwise = i % 2 == 0 ? false : true; // 顺时针或逆时针

  //     ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

  //     if (i > 1) {
  //       ctx.fill();
  //     } else {
  //       ctx.stroke();
  //     }
  //   }
  // }

  // 二次贝塞尔曲线及
  // ctx.beginPath();
  // ctx.moveTo(100, 100);
  // ctx.quadraticCurveTo(120,200,200,100); // 一个控制点 一个结束点
  // ctx.stroke();
  // 三次贝塞尔曲线
  // ctx.beginPath();
  // ctx.moveTo(100,100);
  // ctx.bezierCurveTo(125,10,175,190,200,100);
  // ctx.stroke()

  // 心形图案
  // ctx.beginPath();
  // ctx.moveTo(75, 40);
  // ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
  // ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
  // ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
  // ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
  // ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
  // ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
  // ctx.stroke();

  // Path2D对象

  roundedRect(ctx, 12, 12, 150, 150, 15);
  roundedRect(ctx, 19, 19, 150, 150, 9);
  roundedRect(ctx, 53, 53, 49, 33, 10);
  roundedRect(ctx, 53, 119, 49, 16, 6);
  roundedRect(ctx, 135, 53, 49, 33, 10);
  roundedRect(ctx, 135, 119, 25, 49, 10);

  ctx.beginPath();
  ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
  ctx.lineTo(31, 37);
  ctx.fill();

  for (var i = 0; i < 8; i++) {
    ctx.fillRect(51 + i * 16, 35, 4, 4);
  }

  for (i = 0; i < 6; i++) {
    ctx.fillRect(115, 51 + i * 16, 4, 4);
  }

  for (i = 0; i < 8; i++) {
    ctx.fillRect(51 + i * 16, 99, 4, 4);
  }

  ctx.beginPath();
  ctx.moveTo(83, 116);
  ctx.lineTo(83, 102);
  ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
  ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
  ctx.lineTo(111, 116);
  ctx.lineTo(106.333, 111.333);
  ctx.lineTo(101.666, 116);
  ctx.lineTo(97, 111.333);
  ctx.lineTo(92.333, 116);
  ctx.lineTo(87.666, 111.333);
  ctx.lineTo(83, 116);
  ctx.fill();

  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.moveTo(91, 96);
  ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
  ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
  ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
  ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
  ctx.moveTo(103, 96);
  ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
  ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
  ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
  ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
  ctx.fill();

  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
  ctx.fill();
}

// 封装的一个用于绘制圆角矩形的函数.

function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.lineTo(x, y + height - radius);
  ctx.quadraticCurveTo(x, y + height, x + radius, y + height);
  ctx.lineTo(x + width - radius, y + height);
  ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
  ctx.lineTo(x + width, y + radius);
  ctx.quadraticCurveTo(x + width, y, x + width - radius, y);
  ctx.lineTo(x + radius, y);
  ctx.quadraticCurveTo(x, y, x, y + radius);
  ctx.stroke();
}