Object.assign(window.search, {"doc_urls":["productArchitect.html#文档导览","productArchitect.html#功能排布","productArchitect.html#话题","productArchitect.html#关键词","刮板机/pro-guabanji.html#刮板机","刮板机/pro-guabanji.html#option-1caa","刮板机/pro-guabanji.html#option-1kac","刮板机/pro-guabanji.html#后期使用","刮板机/pro-guabanji.html#option-2caa","刮板机/pro-guabanji.html#option-3netautomation","产品组装/产品组装.html#产品组装","产品组装/产品组装.html#描述","产品组装/产品组装.html#后期使用","产品组装/产品组装.html#速度问题","产品组装/产品组装.html#问题","参数关联复制/参数关联复制.html#参数关联复制","参数关联复制/参数关联复制.html#需求说明","参数关联复制/参数关联复制.html#catia软件中的移动","参数关联复制/参数关联复制.html#结论"],"index":{"documentStore":{"docInfo":{"0":{"body":0,"breadcrumbs":0,"title":0},"1":{"body":0,"breadcrumbs":0,"title":0},"10":{"body":4,"breadcrumbs":0,"title":0},"11":{"body":1,"breadcrumbs":0,"title":0},"12":{"body":3,"breadcrumbs":0,"title":0},"13":{"body":0,"breadcrumbs":0,"title":0},"14":{"body":0,"breadcrumbs":0,"title":0},"15":{"body":5,"breadcrumbs":0,"title":0},"16":{"body":4,"breadcrumbs":0,"title":0},"17":{"body":3,"breadcrumbs":1,"title":1},"18":{"body":1,"breadcrumbs":0,"title":0},"2":{"body":0,"breadcrumbs":0,"title":0},"3":{"body":6,"breadcrumbs":0,"title":0},"4":{"body":4,"breadcrumbs":0,"title":0},"5":{"body":2,"breadcrumbs":2,"title":2},"6":{"body":6,"breadcrumbs":2,"title":2},"7":{"body":2,"breadcrumbs":0,"title":0},"8":{"body":2,"breadcrumbs":2,"title":2},"9":{"body":0,"breadcrumbs":2,"title":2}},"docs":{"0":{"body":"软件架构","breadcrumbs":"文档导览 » 文档导览","id":"0","title":"文档导览"},"1":{"body":"刮板机 产品组装","breadcrumbs":"文档导览 » 功能排布","id":"1","title":"功能排布"},"10":{"body":"Product Assembly alt text","breadcrumbs":"产品组装 » 产品组装","id":"10","title":"产品组装"},"11":{"body":"选择一个父级产品，Product 左侧产品列表，读取本地的一个文件夹文件；把文件产品名称加载到左侧的列表中； 然后选择一个产品加载到右侧的列表中，可以对右侧列表进行删除或者上下移动； 点击确定，当前的产品就会从数据库中查找对应的产品，按照产品发布出来的轴系（第一个）进行组装；","breadcrumbs":"产品组装 » 描述","id":"11","title":"描述"},"12":{"body":"使用产品的优势，在于： 可以使用其他的软件导入 STEP 模型，无需再花时间建模； 每个都是独立的零件，后期出图方便生成BOM 表格， 出图可以使用产品过载等功能，也可以生成爆炸图； 对比实例UDF，以上三点是特征模型所不具备的；","breadcrumbs":"产品组装 » 后期使用","id":"12","title":"后期使用"},"13":{"body":"模型可能会大一些，需要优化一个不需要的构件","breadcrumbs":"产品组装 » 速度问题","id":"13","title":"速度问题"},"14":{"body":"组要组装的产品是否只有一个发布的轴系？如果有多个需要发布的端口（轴系）,如何处理?","breadcrumbs":"产品组装 » 问题","id":"14","title":"问题"},"15":{"body":"Parameter-associated replication alt text","breadcrumbs":"参数关联复制 » 参数关联复制","id":"15","title":"参数关联复制"},"16":{"body":"alt text 参数关联复制 可以将之前生成的一组构件快速移动到另外一个坐标点； 当所有组的构件以关联形式复制的时候，例如修改一个，其他的复制的组的构件也会跟着自动修改； 参数另存复制 就是采用这种方式复制出来的一组产品，里面的构件可以根据自己的需求替换，例如替换机头，或者机尾等等，其他组的产品不会变； 其他产品类似功能 有点类似AUTOCAD的块和SKETCHUP 软件的组件功能，调节一个，其他的也跟着变化了，即可以一起变化，如果分解了某个构件，这个构件就不会跟着变化了； 其他软件中的坐标移动概念 在其他的三位软件里面可以随意移动物体的坐标，因为每个物体之间不是强关联的； 你的浏览器不支持HTML5视频。","breadcrumbs":"参数关联复制 » 需求说明","id":"16","title":"需求说明"},"17":{"body":"alt text 移动只存在产品与产品之间的复制和移动，零件特征内其实没有移动这个命令； 所有的构件之间都有父子级关系去约束每个特征之间的逻辑，即便是平移等等命令，也只是这些父子关系的一种而已；因此，在零件级别，使用UDF去创建设备，只有实例化这一种方式； 如果想再做一排设备，就需要重新设置一个坐标点，重新实例化，或者复制之前创建好的一组特征或者他们的父级（集合图形集），修改第一个轴系的坐标值；这样和重新实例化的底层逻辑是一样的； 要想变化谁，就必须选择这个特征，不存在通过关联复制就可以改一个其他的都变；以及另存为模式就可以单独修改的情况； 可以做到的是，一个变化，全部变化；如果要修改某个就独立去修改这个UDF 的参数，想替换某个UDF就选择需要替换的UDF； 他们之间的关系只有一种父子级的关系；","breadcrumbs":"参数关联复制 » CATIA软件中的移动","id":"17","title":"CATIA软件中的移动"},"18":{"body":"如果想复制，需要做个独立的对话框，选择之前已经生成的一组特征，最好是选择父级几何图形集 过程是整个复制一份，修改起始轴系的坐标；这样就会产生新的一组UDF ，他们和之前的UDF 之间也不存在父子级关系，修改需要选择构件去变参数替换元素等操作； 假如每组构件之间不是采用轴系点线面这样的几何元素去传递位置的话，那么意味着每个构件之间只是采用数据去驱动，而不是几何驱动，后期的修改就需要写对每个构件之间进行坐标位置转换编写代码，参数传递没有太大意义；","breadcrumbs":"参数关联复制 » 结论","id":"18","title":"结论"},"2":{"body":"参数关联复制","breadcrumbs":"文档导览 » 话题","id":"2","title":"话题"},"3":{"body":"粮食仓库设备\nGrain Warehouse Equipment【GWE】 粮食和饲料加工\nGrain and Feed Processing【GFP】","breadcrumbs":"文档导览 » 关键词","id":"3","title":"关键词"},"4":{"body":"scraper conveyor / Blowing Machine / 产品列表","breadcrumbs":"刮板机 » 刮板机","id":"4","title":"刮板机"},"5":{"body":"CATGFPBlowingMachineDlg CATGFPBlowingMachineDlg","breadcrumbs":"刮板机 » option 1(CAA)","id":"5","title":"option 1(CAA)"},"6":{"body":"创建起始位置的轴系 alt text 如果本文的没有轴系，则通过 xyz 坐标创建轴系，此功能与我们平常做项目创建点不一致，推荐选择楼板所在平面，创建一个基于平面的点，然后选择此点加载轴系UDF;此UDF包含旋转2个方向角度； alt text 左侧产品列表，读取本地的一个 当前资源表的excel文件；把名称加载到左侧的列表中，这名称就是未来EKL实例化模板的名称； 然后选择一个产品加载到右侧的列表中，可以对右侧列表进行删除； 点击确定，对列表的UDF进行组装；","breadcrumbs":"刮板机 » option 1(KAC)","id":"6","title":"option 1(KAC)"},"7":{"body":"速度较快； 生成BOM 表格 需要开发对应的读取UDF模板的EKL代码或者KAC\\VBA\\CAA界面，","breadcrumbs":"刮板机 » 后期使用","id":"7","title":"后期使用"},"8":{"body":"CATGFPBlowingMachineDlg CATGFPBlowingMachineDlg","breadcrumbs":"刮板机 » option 2(CAA)","id":"8","title":"option 2(CAA)"},"9":{"body":"","breadcrumbs":"刮板机 » option 3(.NET/AUTOMATION)","id":"9","title":"option 3(.NET/AUTOMATION)"}},"length":19,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"1":{"(":{"c":{"a":{"a":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"k":{"a":{"c":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"2":{"(":{"c":{"a":{"a":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"3":{"(":{".":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"/":{"a":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"9":{"tf":1.0}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":5,"docs":{"10":{"tf":1.0},"15":{"tf":1.0},"16":{"tf":1.0},"17":{"tf":1.0},"6":{"tf":1.4142135623730951}}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"10":{"tf":1.0}}}},"df":0,"docs":{}}},"o":{"c":{"df":0,"docs":{},"i":{"df":1,"docs":{"15":{"tf":1.0}}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"c":{"a":{"d":{"df":0,"docs":{},"的":{"df":0,"docs":{},"块":{"df":0,"docs":{},"和":{"df":0,"docs":{},"s":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"df":0,"docs":{},"p":{"df":1,"docs":{"16":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"4":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"m":{"df":2,"docs":{"12":{"tf":1.0},"7":{"tf":1.0}}}}},"c":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"g":{"df":0,"docs":{},"f":{"df":0,"docs":{},"p":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"m":{"a":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"l":{"df":0,"docs":{},"g":{"df":2,"docs":{"5":{"tf":1.4142135623730951},"8":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}}}},"i":{"a":{"df":1,"docs":{"17":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"y":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"【":{"df":0,"docs":{},"g":{"df":0,"docs":{},"w":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}}}}}}},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}},"h":{"df":0,"docs":{},"t":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{"5":{"df":1,"docs":{"16":{"tf":1.0}}},"df":0,"docs":{}}}}},"m":{"a":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":4,"docs":{"5":{"tf":1.0},"6":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.0}}}}}}}},"p":{"a":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"15":{"tf":1.0}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"【":{"df":0,"docs":{},"g":{"df":0,"docs":{},"f":{"df":0,"docs":{},"p":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}}}}}},"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"10":{"tf":1.0},"11":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"15":{"tf":1.0}}},"df":0,"docs":{}}}}}},"s":{"c":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":1,"docs":{"12":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"t":{"df":5,"docs":{"10":{"tf":1.0},"15":{"tf":1.0},"16":{"tf":1.0},"17":{"tf":1.0},"6":{"tf":1.4142135623730951}}}}}},"u":{"d":{"df":0,"docs":{},"f":{"df":3,"docs":{"12":{"tf":1.0},"18":{"tf":1.0},"6":{"tf":1.0}},"就":{"df":0,"docs":{},"选":{"df":0,"docs":{},"择":{"df":0,"docs":{},"需":{"df":0,"docs":{},"要":{"df":0,"docs":{},"替":{"df":0,"docs":{},"换":{"df":0,"docs":{},"的":{"df":0,"docs":{},"u":{"d":{"df":0,"docs":{},"f":{"df":1,"docs":{"17":{"tf":1.0}}}},"df":0,"docs":{}}}}}}}}}},"模":{"df":0,"docs":{},"板":{"df":0,"docs":{},"的":{"df":0,"docs":{},"e":{"df":0,"docs":{},"k":{"df":0,"docs":{},"l":{"df":0,"docs":{},"代":{"df":0,"docs":{},"码":{"df":0,"docs":{},"或":{"df":0,"docs":{},"者":{"df":0,"docs":{},"k":{"a":{"c":{"\\":{"df":0,"docs":{},"v":{"b":{"a":{"\\":{"c":{"a":{"a":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}}}}},"df":0,"docs":{}},"w":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"df":0,"docs":{}},"x":{"df":0,"docs":{},"y":{"df":0,"docs":{},"z":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"breadcrumbs":{"root":{"1":{"(":{"c":{"a":{"a":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"k":{"a":{"c":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"2":{"(":{"c":{"a":{"a":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"3":{"(":{".":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"/":{"a":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"9":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":5,"docs":{"10":{"tf":1.0},"15":{"tf":1.0},"16":{"tf":1.0},"17":{"tf":1.0},"6":{"tf":1.4142135623730951}}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"10":{"tf":1.0}}}},"df":0,"docs":{}}},"o":{"c":{"df":0,"docs":{},"i":{"df":1,"docs":{"15":{"tf":1.0}}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"c":{"a":{"d":{"df":0,"docs":{},"的":{"df":0,"docs":{},"块":{"df":0,"docs":{},"和":{"df":0,"docs":{},"s":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"df":0,"docs":{},"p":{"df":1,"docs":{"16":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"4":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"m":{"df":2,"docs":{"12":{"tf":1.0},"7":{"tf":1.0}}}}},"c":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"g":{"df":0,"docs":{},"f":{"df":0,"docs":{},"p":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"m":{"a":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"l":{"df":0,"docs":{},"g":{"df":2,"docs":{"5":{"tf":1.4142135623730951},"8":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}}}},"i":{"a":{"df":1,"docs":{"17":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"y":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"【":{"df":0,"docs":{},"g":{"df":0,"docs":{},"w":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}}}}}}},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}},"h":{"df":0,"docs":{},"t":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{"5":{"df":1,"docs":{"16":{"tf":1.0}}},"df":0,"docs":{}}}}},"m":{"a":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":4,"docs":{"5":{"tf":1.4142135623730951},"6":{"tf":1.4142135623730951},"8":{"tf":1.4142135623730951},"9":{"tf":1.4142135623730951}}}}}}}},"p":{"a":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"15":{"tf":1.0}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"【":{"df":0,"docs":{},"g":{"df":0,"docs":{},"f":{"df":0,"docs":{},"p":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}}}}}},"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"10":{"tf":1.0},"11":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"15":{"tf":1.0}}},"df":0,"docs":{}}}}}},"s":{"c":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":1,"docs":{"12":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"t":{"df":5,"docs":{"10":{"tf":1.0},"15":{"tf":1.0},"16":{"tf":1.0},"17":{"tf":1.0},"6":{"tf":1.4142135623730951}}}}}},"u":{"d":{"df":0,"docs":{},"f":{"df":3,"docs":{"12":{"tf":1.0},"18":{"tf":1.0},"6":{"tf":1.0}},"就":{"df":0,"docs":{},"选":{"df":0,"docs":{},"择":{"df":0,"docs":{},"需":{"df":0,"docs":{},"要":{"df":0,"docs":{},"替":{"df":0,"docs":{},"换":{"df":0,"docs":{},"的":{"df":0,"docs":{},"u":{"d":{"df":0,"docs":{},"f":{"df":1,"docs":{"17":{"tf":1.0}}}},"df":0,"docs":{}}}}}}}}}},"模":{"df":0,"docs":{},"板":{"df":0,"docs":{},"的":{"df":0,"docs":{},"e":{"df":0,"docs":{},"k":{"df":0,"docs":{},"l":{"df":0,"docs":{},"代":{"df":0,"docs":{},"码":{"df":0,"docs":{},"或":{"df":0,"docs":{},"者":{"df":0,"docs":{},"k":{"a":{"c":{"\\":{"df":0,"docs":{},"v":{"b":{"a":{"\\":{"c":{"a":{"a":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}}}}},"df":0,"docs":{}},"w":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"df":0,"docs":{}},"x":{"df":0,"docs":{},"y":{"df":0,"docs":{},"z":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"title":{"root":{"1":{"(":{"c":{"a":{"a":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"k":{"a":{"c":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"2":{"(":{"c":{"a":{"a":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"3":{"(":{".":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"/":{"a":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"9":{"tf":1.0}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"c":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"a":{"df":1,"docs":{"17":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":4,"docs":{"5":{"tf":1.0},"6":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.0}}}}}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});