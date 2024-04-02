import { Component } from '@angular/core';
import { Direction } from '../models/direction.model';

@Component({
  selector: 'app-steermode',
  templateUrl: './steermode.component.html',
  styleUrls: ['./steermode.component.scss'],
})
export class SteermodeComponent {
  degreeToRadians(degrees: number): number {
    return (degrees * Math.PI) / 180;
  }

  direction: Direction = {
    dlgBase: 65,
    sfBase: 10000.0,
    sdBase: 3450.0,
    actIncBase: 900.0,
    bfBase: 10000.0,
    wfBase: 20000.0,
    tiBase: 1280.0,

    degreeToRadians(degrees: number): number {
      return (degrees * Math.PI) / 180;
    },

    // showing DLG adjust
    get doglegGradient(): number {
      return this.dlgBase / 1000;
    },

    // showing Steer Force adjust
    get steerForce(): number {
      return this.sfBase / 100;
    },

    // showing Steer Direction adjust
    get steerDirection(): number {
      return this.sdBase / 10;
    },

    // showing Actual Inclination adjust
    get actualHoleInc(): number {
      return this.actIncBase / 10;
    },

    // Expected Steer DLS
    get steerDLS(): number {
      return this.doglegGradient * this.steerForce;
    },

    // Expected BUR
    get buildRate(): number {
      return (
        this.doglegGradient *
        Math.cos(this.degreeToRadians(this.steerDirection)) *
        this.steerForce
      );
    },

    // Expected WR
    get walkRate(): number {
      return (
        (this.steerForce *
          Math.sin(this.degreeToRadians(this.steerDirection)) *
          this.doglegGradient) /
        Math.sin(this.degreeToRadians(this.actualHoleInc))
      );
    },
  };

  constructor() {}

  // step
  step(): number {
    return 10000.0 / 31.0;
  }

  // decrease DLG button
  decreaseDlBase(): void {
    this.direction.dlgBase =
      this.direction.dlgBase - 1 <= 0 ? 0 : this.direction.dlgBase - 1;
    console.log(this.direction.dlgBase);
  }

  // Increase DLG button
  increaseDlBase(): void {
    this.direction.dlgBase += 1;
  }

  // Increase / Decrease Steer Force
  increaseSteerForce(): void {
    this.direction.sfBase =
      this.direction.sfBase < 10000.0
        ? this.direction.sfBase + this.step()
        : this.direction.sfBase;
  }

  decreaseSteerForce(): void {
    this.direction.sfBase =
      this.direction.sfBase > 0.0
        ? this.direction.sfBase - this.step()
        : this.direction.sfBase;
  }

  // Increase-Decrease Steer Direction
  // Steer Direction Big
  increaseSDBig() {
    this.direction.sdBase =
      this.direction.sdBase + 150.0 > 3600.0
        ? Math.abs(this.direction.sdBase - 3450.0)
        : this.direction.sdBase + 150.0;
  }

  decreaseSDBig() {
    this.direction.sdBase =
      this.direction.sdBase - 150.0 < 0.0
        ? this.direction.sdBase + 3450.0
        : this.direction.sdBase - 150.0;
  }

  // Steer Direction Small
  increaseSDSmall() {
    this.direction.sdBase =
      this.direction.sdBase + 15.0 > 3600.0
        ? Math.abs(this.direction.sdBase - 3585.0)
        : this.direction.sdBase + 15.0;
  }

  decreaseSDSmall() {
    this.direction.sdBase =
      this.direction.sdBase - 15.0 < 0.0
        ? this.direction.sdBase + 3585.0
        : this.direction.sdBase - 15.0;
  }

  // Actual Inclination Small
  increaseIncSmall(): void {
    this.direction.actIncBase =
      this.direction.actIncBase + 1.0 >= 1400.0
        ? 1400.0
        : this.direction.actIncBase + 1.0;
  }

  decreaseIncSmall(): void {
    this.direction.actIncBase =
      this.direction.actIncBase - 1.0 <= 0.0
        ? 0.0
        : this.direction.actIncBase - 1.0;
  }

  // Actual Inclination Big
  increaseIncBig(): void {
    this.direction.actIncBase =
      this.direction.actIncBase + 10.0 >= 1400.0
        ? 1400.0
        : this.direction.actIncBase + 10.0;
  }

  decreaseIncBig(): void {
    this.direction.actIncBase =
      this.direction.actIncBase - 10.0 <= 0.0
        ? 0.0
        : this.direction.actIncBase - 10.0;
  }
}
