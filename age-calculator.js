function ageCalculator ( name , yearOfBirth , currentYear ) 
{
  const age = currentYear - yearOfBirth ;
  return ( name + " is " + age + " years old." ) ;
}
ageCalculator( "raj" , 1991 , 2020 );

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));