object Nats {
  abstract class Nat {
    def isZero: Boolean
    def predecessor : Nat
    def successor = new Succ(this)
    def + (that: Nat): Nat
    def - (that: Nat): Nat
  }

  object Zero extends Nat {
    def isZero: Boolean = true
    def predecessor : Nat = throw new Exception("Zero doesn't have a predecessor")
    def + (that: Nat): Nat = that
    def - (that: Nat): Nat = throw new Exception("A nat can't be negative")
    override def toString = "0"
  }

  class Succ(n: Nat) extends Nat {
    def isZero: Boolean = false
    def predecessor : Nat = n
    def + (that: Nat): Nat = if(that.isZero) this else n + that.successor
    def - (that: Nat): Nat = if(that.isZero) this else n - that.predecessor
    override def toString = n.toString + "+1"
  }

  Zero                                            //> res0: t.Nats.Zero.type = 0
  Zero.successor + Zero.successor                 //> res1: t.Nats.Nat = 0+1+1
Zero.successor.successor + Zero.successor
}





