//GENERATOR FUNCTION
/**
  a function which execution can be stop in between and when resume it will starts from the last saved state is called as generator function
  it ends with *.

  it gives object of generator function and obj.next method is used for next value
 */

  function *counter(){
    yield 1;
    yield 2;
    yield 3;

  }

  let obj=counter();

  console.log(obj.next());
  console.log(obj.next());
  console.log(obj.next());
  console.log(obj.next());
  