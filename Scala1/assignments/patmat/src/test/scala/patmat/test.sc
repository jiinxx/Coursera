
val list1 = List('a','b','a', 'a')
val list = List('h', 'e', 'l', 'l', 'o', ',', ' ', 'w', 'o', 'r', 'l', 'd')
val map = list.groupBy(char => char).toSeq.sortBy(_._1)
map.map(e => (e._1,e._2.size)).toList

