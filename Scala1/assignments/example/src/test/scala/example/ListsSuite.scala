package example

import org.scalatest.FunSuite

import org.junit.runner.RunWith
import org.scalatest.junit.JUnitRunner

/**
 * This class implements a ScalaTest test suite for the methods in object
 * `Lists` that need to be implemented as part of this assignment. A test
 * suite is simply a collection of individual tests for some specific
 * component of a program.
 *
 * A test suite is created by defining a class which extends the type
 * `org.scalatest.FunSuite`. When running ScalaTest, it will automatically
 * find this class and execute all of its tests.
 *
 * Adding the `@RunWith` annotation enables the test suite to be executed
 * inside eclipse using the built-in JUnit test runner.
 *
 * You have two options for running this test suite:
 *
 * - Start the sbt console and run the "test" command
 * - Right-click this file in eclipse and chose "Run As" - "JUnit Test"
 */
 @RunWith(classOf[JUnitRunner])
  class ListsSuite extends FunSuite {

  /**
   * Now we finally write some tests for the list functions that have to be
   * implemented for this assignment. We fist import all members of the
   * `List` object.
   */
  import Lists._


  /**
   * We only provide two very basic tests for you. Write more tests to make
   * sure your `sum` and `max` methods work as expected.
   *
   * In particular, write tests for corner cases: negative numbers, zeros,
   * empty lists, lists with repeated elements, etc.
   *
   * It is allowed to have multiple `assert` statements inside one test,
   * however it is recommended to write an individual `test` statement for
   * every tested aspect of a method.
   */
  /**
    * Test Sum
    */
  test("sum of a few numbers") {
    assert(sum(List(1,2,0)) === 3)
  }

  test("sum of empty") {
    assert(sum(List()) === 0)
  }

  test("sum of one number") {
    assert(sum(List(0)) === 0)
  }

  test("sum of a few numbers more") {
    assert(sum(List(1,2,3,4,0)) === 10)
  }

  test("sum of a few numbers regardless of order") {
    assert(sum(List(1,4,3,2,0)) === 10)
  }

  /**
    * Test Max
    */
  test("max of a few numbers") {
    assert(max(List(3, 7, 2)) === 7)
  }

  test("max of a few numbers regardless of order") {
    assert(max(List(7, 2, 3, 1, 4)) === 7)
  }

  test("max of one") {
    assert(max(List(0)) === 0)
  }

  test("should throw exception if list is empty") {
    intercept[NoSuchElementException] {
      max(List())
    }
  }
}
