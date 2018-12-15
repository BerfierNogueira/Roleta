class HeroPlayer {
  
  
  constructor(name) {
    this.name = name;
    this.points = 0;
  }
  getponctuation(){
    return this.points;
  }
  
  setponctuation(value){
    this.points += value;
  }

  getname(){
    return this.name;
  }
}


