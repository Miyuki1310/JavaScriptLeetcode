const mergeTwoLists = (list1, list2) => {
    const dummy = new ListNode(0);
    let tail = dummy

    while(list1 && list2){
        if(list1.val <= list2.val){
            tail.next = list1;
            list1 = list1.next
        }
        else{
            tail.next = list2;
            list2 = list2.next
        }
        tail = tail.next
    }

    tail.next = list1 || list2
    return dummy.next
}

// console.log(mergeTwoLists([1,2,4], [1,3,4]));
// console.log(mergeTwoLists([], [0]));

let x = 10;
let  y = x++ 
console.log(y)
