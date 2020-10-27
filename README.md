# 云开发 quickstart

这是云开发的快速启动指引，其中演示了如何上手使用云开发的三大基础能力：

- 数据库：一个既可在小程序前端操作，也能在云函数中读写的 JSON 文档型数据库
- 文件存储：在小程序前端直接上传/下载云端文件，在云开发控制台可视化管理
- 云函数：在云端运行的代码，微信私有协议天然鉴权，开发者只需编写业务逻辑代码

## 参考文档

- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)





# 调整内部结构

>最后一个导航栏目为管理中心

### 其中的栏目包括

- 查看所有产品
	+ 修改商品
	+ 删除商品
- 添加商品


### 应该有的表
>####  一、商品类型表：shop_type

字段名 |属性 | 名称
----------| --- | ----
id  	  | int | 类型id
typename  | string | 类型名称
typenum	  | int 	| 类型级别
aaaaaa	  | int 	| 备用字段1
bbbbbb	  | int 	| 备用字段2


>#### 二、商品表：shops

字段名 |属性 | 名称
----------| --- | ----
id  	  | int | 商品id
name  	  | string | 商品名称
tid	  	  | int 	| 类型id值
aaaaaa	  | int 	| 备用字段1
bbbbb	  | int 	| 备用字段2