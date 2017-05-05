package idealized.scala

object tru extends Boolean {
  def ifThenElse[T](t: => T, e: => T) = t
}

object fal extends Boolean {
  def ifThenElse[T](t: => T, e: => T) = e
}

abstract class Boolean {
  def ifThenElse[T](t: => T, e: => T): T

  def && (x: => Boolean): Boolean = ifThenElse(x, fal)
  def || (x: => Boolean): Boolean = ifThenElse(tru, x)
  def unarynot: Boolean = ifThenElse(fal, tru)

  def == (x: Boolean): Boolean = ifThenElse(x, x.unarynot)
  def != (x: Boolean): Boolean = ifThenElse(x.unarynot, x)

  def < (x: Boolean): Boolean = ifThenElse(fal, x)
  def <= (x: Boolean): Boolean = ifThenElse(x, tru)
  def > (x: Boolean): Boolean = ifThenElse(x.unarynot, fal)
  def >= (x: Boolean): Boolean = ifThenElse(tru, x.unarynot)
}
