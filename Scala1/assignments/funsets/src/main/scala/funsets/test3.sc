class Rational(x:Int, y:Int){
  def nom = x;
  def denom= y

  def neg(): Rational = {
    new Rational( - nom, denom)
  }

  def sub(that: Rational): Rational ={
    new Rational()
  }

  override def toString: String = {
    nom + "/" +y
  }
}

val r1 = new Rational(1,2)

r1.neg()