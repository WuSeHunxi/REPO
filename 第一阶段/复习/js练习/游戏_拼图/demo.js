function Puzzle(options) {
  this.init(options);
}

Puzzle.prototype = {
  el: null,
  oPuzzle: null,
  puzzleHeight: 0,
  puzzleWidth: 0,
  blockWidth: 0,
  blockHeight: 0,
  row: 0,
  col: 0,
  puzzleImg: "",
  blockImgPosition: [],
  blockPosition: [],
  init: function (options) {
    this.initData(options);
    this.render();
    this.handle();
  },
  initData: function (options) {
    this.el = document.querySelector(options.el);
    this.oPuzzle = document.createElement("div");
    this.row = options.data.row;
    this.col = options.data.col;
    this.puzzleHeight = options.data.width;
    this.puzzleWidth = options.data.height;
    this.blockHeight = this.puzzleHeight / this.row;
    this.blockWidth = this.puzzleWidth / this.col;
    this.puzzleImg = options.data.img;
    this.blockImgPosition = this.getBlockImgPosition();
    this.blockPosition = this.getBlockPosition();
  },
  getBlockImgPosition: function () {
    var arr = [];
    for (var i = 0; i < this.row; i++) {
      for (var j = 0; j < this.col; j++) {
        arr.push({
          x: j * this.blockWidth,
          y: i * this.blockHeight,
        });
      }
    }
    // console.log(arr);
    return arr;
  },
  getBlockPosition: function () {
    var arr = [];
    for (var i = 0; i < this.blockImgPosition.length - 1; i++) {
      arr[i] = this.blockImgPosition[i];
    }
    arr.sort(function () {
      return Math.random() - 0.5;
    });
    arr.push(this.blockImgPosition[this.blockImgPosition.length - 1]);
    // console.log(arr, this.blockImgPosition.length - 1);
    return arr;
  },
  render() {
    var template = "";
    for (var i = 0; i < this.blockImgPosition.length; i++) {
      var blockImgX = this.blockImgPosition[i].x;
      var blockImgY = this.blockImgPosition[i].y;
      var blockPositionX = this.blockPosition[i].x;
      var blockPositionY = this.blockPosition[i].y;
      var isLastBlock = i === this.blockImgPosition.length - 1;
      template += `
        <div class="block" style="
          width:${this.blockWidth}px;
          height:${this.blockHeight}px;
          background-image:url('${this.puzzleImg}');
          background-position:${-blockImgX}px ${-blockImgY}px;
          left:${blockPositionX}px;
          top:${blockPositionY}px;
          opacity:${isLastBlock ? 0 : 1}
        " ref="${isLastBlock ? "empty" : "block"}">
        </div>
        `;
      this.oPuzzle.setAttribute("class", "puzzle");
      this.oPuzzle.style.width = this.puzzleWidth + "px";
      this.oPuzzle.style.height = this.puzzleHeight + "px";
      this.oPuzzle.innerHTML = template;
      this.el.appendChild(this.oPuzzle);
    }
  },
  handle() {
    this.oPuzzle.onclick = (e) => {
      var target = e.target;
      // console.log(target);
      var isBlock =
        target.classList.contains("block") &&
        target.getAttribute("ref") === "block";
      if (isBlock) {
        this.handleBlock(target);
      }
    };
  },
  handleBlock(dom) {
    this.moveBlock(dom);
    this.winGame();
  },
  moveBlock(dom) {
    var domLeft = parseInt(dom.style.left);
    var domTop = parseInt(dom.style.top);
    var emptyBlock = document.querySelector('div[ref="empty"]');
    console.log(emptyBlock, dom);
    dom.style.left = emptyBlock.style.left + "px";
    dom.style.top = emptyBlock.style.top + "px";
    emptyBlock.style.left = domLeft + "px";
    emptyBlock.style.top = domTop + "px";
  },
  checkWin() {
    var blockLists = document.getElementsByClassName("block");
    for (var i = 0; i < blockLists.length; i++) {
      var oBlock = blockLists[i];
      var blockLeft = parseInt(oBlock.style.left);
      var blockTop = parseInt(oBlock.style.top);
      var imgLeft = parseInt(oBlock.style.backgroundPositionX);
      var imgTop = parseInt(oBlock.style.backgroundPositionY);
      if (!(blockLeft === imgLeft && blockTop == imgTop)) {
        return false;
      }
    }
    return true;
  },
  winGame() {
    if (this.checkWin()) {
      setTimeout(() => {
        alert("游戏成功");
        this.emptyBlock.style.opacity = 1;
      }, 300);
    }
    this.oPuzzle.onclick = null;
  },
};
