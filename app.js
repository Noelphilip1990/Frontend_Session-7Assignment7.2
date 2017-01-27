function findSum()
{
	var sum=0;
	for(var i=0;i<arguments.length;i++)
	{
		sum+=arguments[i];
	}
	return sum;
}

console.log("Sum is : "+findSum(1,2,3));
console.log("Sum is : "+findSum(1,2,3,4,5,6,7,8,9,10));