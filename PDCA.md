# Requirement

#### tasking - writing down the decomposition process
- 统计 items 的个数
> 输入：barcodes: string<br/>
> 输出：{item:string, Quantity:int}

- 获取数据库信息，补充完整 items 的详细信息
> 输入：{item:string, Quantity:int}
> 输出：{item:string, Quantity:int,name:string,price:int}

- 计算各个 item 的总价
> 输入：{item:string, Quantity:int,name:string,price:int}
> 输出：{item:string, Quantity:int,name:string,price:int,subTotal:int}

- 计算 Receipt 的总价
> 输入：{item:string, Quantity:int,name:string,price:int,subTotal:int}
> 输出：totalPrice:int

- 转换格式，输出整个菜单
> 输入：{item:string, Quantity:int,name:string,price:int,subTotal:int}，Subtotal: int
> 输出：Recipt: string


|      |  getEachItem                                   | getDatabase                            | getSubtotalPrice |  getReceiptTotalPrice   |      transFormToReceipt     |  printReceipt   | 
| ---- | -----------------------------------------------| -------------------------------------- | ---------------- | ----------------------- | --------------------------- | ----------------|
| P    | 5                                              | 10                                     |   5   |     5     |   5  |    5
| D    | 8                                              | 20                                     |    10  |     5     |   5 |    10
| C    | 对于js的算法不是很熟练，对于在查找数组中元素重复次数这个问题要思考很久 |  获取数据库很迅速就写出来了，主要是卡在了比较两个数据对象中的元素值以及在数据对象中添加属性这个方法不熟悉 |  同样是对在数据对象中添加属性这个方法不熟悉|   总体上没什么问题  | 常规的字符串输出| 在确定调用函数中传入的参数思考了很久                          
| A    | 多加练习js的算法问题 |         多看js文档，熟悉js方法                 |   多看js文档，熟悉js方法    |   优化for循环操作  |   了解更加简便的字符串输出方法 | 需要更加明确 Context Map中的输入输出，而不是在编写代码时出现歧义再去修改
