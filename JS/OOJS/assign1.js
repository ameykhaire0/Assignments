"use strict";

var shape;

let points = document.getElementsByName("point");

const coordDisplay = (e) => {
  shape = e.target.value;
  if (shape) {
    document.getElementById("coord").style.display = "contents";
    document.querySelectorAll("tr")[4].style.display = "none";
    if (shape !== "triangle") {
      document.querySelectorAll("tr")[4].style.display = "contents";
    }
  }
  points.forEach((ele) => (ele.value = ""));
};

const calculatePeri = () => {
  const point = [];
  points.forEach((ele) => {
    point.push(ele.value);
  });
  let perimeter;
  if (this.shape === "triangle") {
    let tri = new Triangle(3, [
      [point[0], point[1]],
      [point[2], point[3]],
      [point[4], point[5]],
    ]);
    perimeter = tri.perimeter();
  } else if (this.shape === "rectangle") {
    let rect = new Rectangle(4, [
      [point[0], point[1]],
      [point[2], point[3]],
      [point[4], point[5]],
      [point[6], point[7]],
    ]);
    perimeter = rect.perimeter();
  } else {
    let square = new Square(4, [
      [point[0], point[1]],
      [point[2], point[3]],
      [point[4], point[5]],
      [point[6], point[7]],
    ]);
    perimeter = square.perimeter();
  }

  document.getElementById("peri").innerText = perimeter.toFixed(2);
};

const calculateArea = () => {
  const point = [];
  points.forEach((ele) => {
    point.push(ele.value);
  });
  let area;
  if (this.shape === "triangle") {
    let tri = new Triangle(3, [
      [point[0], point[1]],
      [point[2], point[3]],
      [point[4], point[5]],
    ]);
    area = tri.area();
  } else if (this.shape === "rectangle") {
    let rect = new Rectangle(4, [
      [point[0], point[1]],
      [point[2], point[3]],
      [point[4], point[5]],
      [point[6], point[7]],
    ]);
    area = rect.area();
  } else {
    let square = new Square(4, [
      [point[0], point[1]],
      [point[2], point[3]],
      [point[4], point[5]],
      [point[6], point[7]],
    ]);
    area = square.area();
  }

  document.getElementById("area").innerText = area.toFixed(2);
};

const calculateDistance = (p1, p2) => {
  let distance = Math.pow(
    Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2),
    0.5
  );
  return distance;
};

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Shape {
  constructor(edges, point) {
    this.edges = edges;
    this.points = point.map((ele) => {
      return new Point(ele[0], ele[1]);
    });
  }

  perimeter = () => {
    console.log("perimeter in shape class");
  };

  area = () => {
    console.log("area in shape class");
  };
}

class Triangle extends Shape {
  constructor(edges, point) {
    super(edges, point);
  }

  perimeter = () => {
    let d1 = calculateDistance(this.points[0], this.points[1]);
    let d2 = calculateDistance(this.points[0], this.points[2]);
    let d3 = calculateDistance(this.points[1], this.points[2]);

    return d1 + d2 + d3;
  };

  area = () => {
    let result = Math.abs(
      (this.points[0].x * (this.points[1].y - this.points[2].y) +
        this.points[1].x * (this.points[0].y - this.points[2].y) +
        this.points[2].x * (this.points[1].y - this.points[0].y)) /
        2
    );
    return result;
  };
}

class Square extends Shape {
  constructor(edges, point) {
    super(edges, point);
  }

  perimeter = () => {
    let d1 = calculateDistance(this.points[0], this.points[1]);
    let d2 = calculateDistance(this.points[0], this.points[2]);
    let d3 = calculateDistance(this.points[0], this.points[3]);

    let res = [d1, d2, d3].reduce((sum, curr) => {
      if (curr === Math.max(d1, d2, d3)) return sum;
      return sum + curr;
    });

    return res * 2;
  };

  area = () => {
    let d1 = calculateDistance(this.points[0], this.points[1]);
    let d2 = calculateDistance(this.points[0], this.points[2]);
    let d3 = calculateDistance(this.points[0], this.points[3]);

    let res = [d1, d2, d3].reduce((area, curr) => {
      if (curr === Math.max(d1, d2, d3)) return area;
      return area * curr;
    });

    return res;
  };
}

class Rectangle extends Shape {
  constructor(edges, point) {
    super(edges, point);
  }

  perimeter = () => {
    let d1 = calculateDistance(this.points[0], this.points[1]);
    let d2 = calculateDistance(this.points[0], this.points[2]);
    let d3 = calculateDistance(this.points[0], this.points[3]);

    let res = [d1, d2, d3].reduce((sum, curr) => {
      if (curr === Math.max(d1, d2, d3)) return sum;
      return sum + curr;
    });

    return res * 2;
  };

  area = () => {
    let d1 = calculateDistance(this.points[0], this.points[1]);
    let d2 = calculateDistance(this.points[0], this.points[2]);
    let d3 = calculateDistance(this.points[0], this.points[3]);

    let res = [d1, d2, d3].reduce((area, curr) => {
      if (curr === Math.max(d1, d2, d3)) return area;
      return area * curr;
    });

    return res;
  };
}
