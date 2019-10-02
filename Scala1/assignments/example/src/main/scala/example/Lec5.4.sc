
object Lec54 {
  def pack[T](xs: List[T]): List[List[T]] = xs match {
    case Nil => Nil
    case x :: xs1 =>
      val (first, rest) = xs span (y => y == x)
      first :: pack(rest)
  }

  def scalarProduct(xs: List[Double], ys: List[Double]) : Double =
    (for((x,y) <- xs zip ys ) yield x * y).sum

  val l = scalarProduct(List(1.0,2.0), List(3.0,5.0))

  pack(List("a", "a", "a", "b", "c", "c", "a"))
}