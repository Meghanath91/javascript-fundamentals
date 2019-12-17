function howManyHundreds ( number )
{
  if ( number >= 100)
  {
    const container = number / 100 ;
    return ( Math.floor ( container ) ) ;
  } 
  else
  {
    return ( 0 )  ;
  }
  
}

console.log(howManyHundreds(1234));