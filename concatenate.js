function concat ( array1 , array2 )
{
  let final1 = [] ;
  for ( let i = 0 ; i < array1.length ; i++ )
  {
    final1.push ( array1 [ i ] ) ;
  }
  let final2 = final1 ; 
  for ( let j = 0 ; j < array2.length ; j++ )
  {
    final2.push ( array2 [ j ] ) ;
  }
  return final2 ;
}
console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);