function range ( start , end , step )
{
  if ( start < end && step > 0 )
  {
    let arry = [ start ] ;
    for ( let i = 0 ; i < ( end - start ) / step ; i++ )
  {
      arry.push ( arry [ i ] + step ) ;
    }
    return ( arry ) ;
  }
  else
{
    return ([]);
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

