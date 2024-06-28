import React, { useEffect, useRef } from 'react';

const BlobAnimation = ({ containerRef }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!containerRef || !containerRef.current) {
      console.error("containerRef is not defined or does not have a current property.");
      return;
    }

    let canvas = canvasRef.current;
    if (!canvas) {
      console.error("canvasRef is not defined or does not have a current property.");
      return;
    }

    let ctx = canvas.getContext('2d');
    let blob;

    class Blob {
      constructor() {
        this.points = [];
        this.init();
        this.render();
      }

      init() {
        for (let i = 0; i < this.numPoints; i++) {
          let point = new Point(this.divisional * (i + 1), this);
          this.points.push(point);
        }
      }

      render() {
        if (!canvas || !ctx) return;

        let pointsArray = this.points;
        let points = this.numPoints;
        let center = this.center;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        pointsArray[0].solveWith(pointsArray[points - 1], pointsArray[1]);

        let p0 = pointsArray[points - 1].position;
        let p1 = pointsArray[0].position;
        let _p2 = p1;

        ctx.beginPath();
        ctx.moveTo(center.x, center.y);
        ctx.moveTo((p0.x + p1.x) / 2, (p0.y + p1.y) / 2);

        for (let i = 1; i < points; i++) {
          pointsArray[i].solveWith(pointsArray[i - 1], pointsArray[i + 1] || pointsArray[0]);

          let p2 = pointsArray[i].position;
          var xc = (p1.x + p2.x) / 2;
          var yc = (p1.y + p2.y) / 2;
          ctx.quadraticCurveTo(p1.x, p1.y, xc, yc);

          ctx.fillStyle = '#A020F0';

          p1 = p2;
        }

        var xc = (p1.x + _p2.x) / 2;
        var yc = (p1.y + _p2.y) / 2;
        ctx.quadraticCurveTo(p1.x, p1.y, xc, yc);

        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.strokeStyle = '#A020F0';
        ctx.stroke();

        requestAnimationFrame(this.render.bind(this));
      }

      get color() {
        return this._color || '#A020F0';
      }

      set color(value) {
        this._color = value;
      }

      get numPoints() {
        return this._points || 32;
      }

      set numPoints(value) {
        if (value > 2) {
          this._points = value;
        }
      }

      get radius() {
        return this._radius || 150;
      }

      set radius(value) {
        if (value > 0) {
          this._radius = value;
        }
      }

      get position() {
        return this._position || { x: 0.5, y: 0.5 };
      }

      set position(value) {
        if (typeof value === 'object' && value.x && value.y) {
          this._position = value;
        }
      }

      get divisional() {
        return (Math.PI * 2) / this.numPoints;
      }

      get center() {
        return { x: canvas.width * this.position.x, y: canvas.height * this.position.y };
      }
    }

    class Point {
      constructor(azimuth, parent) {
        this.parent = parent;
        this.azimuth = Math.PI - azimuth;
        this._components = {
          x: Math.cos(this.azimuth),
          y: Math.sin(this.azimuth),
        };

        this.acceleration = -0.3 + Math.random() * 0.6;
      }

      solveWith(leftPoint, rightPoint) {
        this.acceleration = (-0.1 * this.radialEffect + (leftPoint.radialEffect - this.radialEffect) + (rightPoint.radialEffect - this.radialEffect)) * this.elasticity - this.speed * this.friction;
      }

      set acceleration(value) {
        if (typeof value === 'number') {
          this._acceleration = value;
          this.speed += this._acceleration * 0.5;
        }
      }
      get acceleration() {
        return this._acceleration || 0;
      }

      set speed(value) {
        if (typeof value === 'number') {
          this._speed = value;
          this.radialEffect += this._speed * 1;
        }
      }
      get speed() {
        return this._speed || 0;
      }

      set radialEffect(value) {
        if (typeof value === 'number') {
          this._radialEffect = value;
        }
      }
      get radialEffect() {
        return this._radialEffect || 0;
      }

      get position() {
        return {
          x: this.parent.center.x + this.components.x * (this.parent.radius + this.radialEffect),
          y: this.parent.center.y + this.components.y * (this.parent.radius + this.radialEffect),
        };
      }

      get components() {
        return this._components;
      }

      set elasticity(value) {
        if (typeof value === 'number') {
          this._elasticity = value;
        }
      }
      get elasticity() {
        return this._elasticity || 0.0005;
      }
      set friction(value) {
        if (typeof value === 'number') {
          this._friction = value;
        }
      }
      get friction() {
        return this._friction || 0.002;
      }
    }

    const resize = () => {
      canvas.width = containerRef.current.clientWidth;
      canvas.height = containerRef.current.clientHeight;
    };

    const mouseMove = (e) => {
      let rect = containerRef.current.getBoundingClientRect();
      let pos = blob.center;
      let diff = { x: e.clientX - (rect.left + rect.width / 2), y: e.clientY - (rect.top + rect.height / 2) };
      let dist = Math.sqrt(diff.x * diff.x + diff.y * diff.y);
      let angle = null;

      if (dist < blob.radius) {
        let vector = { x: e.clientX - (rect.left + rect.width / 2), y: e.clientY - (rect.top + rect.height / 2) };
        angle = Math.atan2(vector.y, vector.x);
      }

      if (typeof angle === 'number') {
        let nearestPoint = null;
        let distanceFromPoint = 100;

        blob.points.forEach((point) => {
          if (Math.abs(angle - point.azimuth) < distanceFromPoint) {
            nearestPoint = point;
            distanceFromPoint = Math.abs(angle - point.azimuth);
          }
        });

        if (nearestPoint) {
          let strength = { x: e.clientX - (rect.left + rect.width / 2), y: e.clientY - (rect.top + rect.height / 2) };
          strength = Math.sqrt(strength.x * strength.x + strength.y * strength.y);
          if (strength > 5) strength = 5; // Reduced sensitivity
          nearestPoint.acceleration = (strength / 100) * -1; // Negative acceleration to avoid excessive distortion
        }
      }
    };

    resize();

    blob = new Blob();

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', mouseMove);
    };
  }, [containerRef]);

  return <canvas ref={canvasRef}></canvas>;
};

export default BlobAnimation;
