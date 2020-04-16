// CopterUnit
require("units/copterUnit")

// exampleCopterUnit
const exampleCopterUnit = extendContent(UnitType, "example-copter-unit", {
  load(){
    this.super$load();
    this.rotorBladeRegion = Core.atlas.find(this.name + "-rotor-blade");
    this.rotorTopRegion = Core.atlas.find(this.name + "-rotor-top");
    this.rotorSpeed = 9;
    this.rotorOffset = 4;
  },
  UnitType(name, mainConstructor){
    this(name);
    this.create(CopterUnit);
  },
});
