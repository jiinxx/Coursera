package recfun

import java.util

import collection.immutable.Stack

object Main {
  def main(args: Array[String]) {
    println("Pascal's Triangle")
    for (row <- 0 to 10) {
      for (col <- 0 to row)
        print(pascal(col, row) + " ")
      println()
    }
  }

  /**
    * Exercise 1
    */
      def pascal(column: Int, row: Int): Int = {
        if(column == 0) 1
        else
          if(column >= row) 1
          else pascal(column-1,row-1) + pascal(column,row-1)
      }

  def balance(chars: List[Char], stack: List[Char]): Boolean = {
    if(chars.isEmpty) stack.isEmpty
    else if(chars.head == '(') balance(chars.tail, '('::stack) // push
    else if(chars.head == ')') {
      if (stack.contains('(')) balance(chars.tail, stack.tail) // pop
      else false
    }
    else balance(chars.tail, stack)
  }

  /**
    * Exercise 2
    */
  def balance(chars: List[Char]): Boolean = {
    balance(chars, List());
  }

  /**
    * Exercise 3
    */
  def countChange(money: Int, coins: List[Int]): Int = {
    if (money == 0) 1 //success
    else if (money < 0 ) 0 //fail
    else if (money >= 1 && coins.isEmpty) 0 //fail
    else countChange(money, coins.tail) + countChange(money - coins.head, coins)
  }
}
