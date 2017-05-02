def sum(f:Int => Int): (Int, Int) => Int = {
  def sumF(a: Int, b:Int): Int =
    if(a>b) 0
    else f(a) + sumF(a + 1, b)
  sumF
}

def sumInt = sum(x => x)

sumInt(1,5)


def product(f:Int => Int)(a: Int,b: Int) :Int ={
  if(a > b) 1
  else f(a) * product(f)(a+1, b)
}

def productInt(a:Int,b:Int) = product(x => x)(a,b)

productInt(1,3)

def fact(n:Int) = product(x=>x)(1,n)

fact(4)


def mapReduce(f:Int => Int, combine: (Int,Int)=>Int,zero:Int)(a:Int, b:Int):Int = {
  if(a > b) zero
  else combine(f(a),mapReduce(f,combine,zero)(a+1,b))
}

mapReduce(x => x,(a,b) => a * b,1)(1,4)
mapReduce(x => x,(a,b) => a + b,0)(1,4)





