// n defines the length of the vectors
let n = 3;

	// Function that return
	// dot product of two vector array.
	function dot_product(vect_A, vect_B)
	{
		let ps = 0;
        let i = 0
        while(i < n && vect_A.length === vect_B.length){
            ps = ps + vect_A[i] * vect_B[i];
            i = i + 1;
        }
        return ps;
	}

    
    // algorithm that verify if a given pairs of vectors are
    // orthogonal or not

    function isOrthogonale(vect_A , vect_B){
        if(dot_product(vect_A , vect_B) === 0){
            console.log("The vectors are orthogonal")
        }else{
            console.log("non orthogonal vectors")
        }
    }
    isOrthogonale([1 , 2 , 3] , [1 , 1 , -1])
	