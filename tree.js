// var aTree = [
//     {"id": "1", "name": "动物", "pid": "0"},
//     {"id": "2", "name": "鸟类", "pid": "5"},
//     {"id": "3", "name": "无脊椎动物", "pid": "1"},
//     {"id": "4", "name": "哺乳动物", "pid": "5"},
//     {"id": "5", "name": "脊椎动物", "pid": "1"},
//     {"id": "6", "name": "喜鹊", "pid": "2"},
//     {"id": "7", "name": "蚯蚓", "pid": "3"}
// ];

// function getParent(id, aTree) {
//     var aParent = [];
//         for (var i in aTree) {
//             if (aTree[i].pid == id) {
//                 aParent.push(aTree[i]);
//             }
//         }
//     return aParent;
// }
// let a={}
// for(let i=0;i<6;i++){
//     let aItem=getParent(i,aTree)
//     a[i]=aItem
// }
//{
//     '0': [ { id: '1', name: '动物', pid: '0' } ],
//     '1': [
//       { id: '3', name: '无脊椎动物', pid: '1' },
//       { id: '5', name: '脊椎动物', pid: '1' }
//     ],
//     '2': [ { id: '6', name: '喜鹊', pid: '2' } ],
//     '3': [ { id: '7', name: '蚯蚓', pid: '3' } ],
//     '4': [],
//     '5': [
//       { id: '2', name: '鸟类', pid: '5' },
//       { id: '4', name: '哺乳动物', pid: '5' }
//     ]
//   }






// 第二种

const data = [
    { id: 56, parentId: 62 },
    { id: 81, parentId: 80 },
    { id: 74, parentId: null },
    { id: 76, parentId: 80 },
    { id: 63, parentId: 62 },
    { id: 80, parentId: 86 },
    { id: 87, parentId: 86 },
    { id: 62, parentId: 74 },
    { id: 86, parentId: 74 },
];
let map = data.reduce((obj, el, i) => {
    obj[el.id] = i
    return obj
}, {})
let root
data.forEach(el=>{
    if(el.parentId===null){
        root=el;
        return 
    }
    let parentEl=data[map[el.parentId]]
    parentEl.children=[...(parentEl.children||[]),el]
})
console.log(root)