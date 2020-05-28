# medusa
github GraphQL

# 安装依赖
npm install

# 启动服务
npm start

# build
npm run-script build



## 分页获取角色组


**接口地址**:`/ecs/console/role/getRoleListForPage`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*,application/json`


**接口描述**:分页获取角色组


**请求示例**:


```javascript
{
	"pageNum": 0,
	"pageSize": 0,
	"productCode": "",
	"queryValue": ""
}
```


**请求参数**:


**请求参数**:


| 参数名称                | 参数说明     | in   | 是否必须 | 数据类型       | schema       |
| ----------------------- | ------------ | ---- | -------- | -------------- | ------------ |
| roleSearchVO            | roleSearchVO | body | true     | RoleSearchVO   | RoleSearchVO |
| &emsp;&emsp;pageNum     |              |      | false    | integer(int32) |              |
| &emsp;&emsp;pageSize    |              |      | false    | integer(int32) |              |
| &emsp;&emsp;productCode |              |      | false    | string         |              |
| &emsp;&emsp;queryValue  |              |      | false    | string         |              |


**响应状态**:


| 状态码 | 说明         | schema                            |
| ------ | ------------ | --------------------------------- |
| 200    | OK           | ResultValue«PageInfo«RoleSaveVO»» |
| 201    | Created      |                                   |
| 401    | Unauthorized |                                   |
| 403    | Forbidden    |                                   |
| 404    | Not Found    |                                   |


**响应参数**:


| 参数名称                                    | 参数说明                  | 类型                 | schema               |
| ------------------------------------------- | ------------------------- | -------------------- | -------------------- |
| data                                        |                           | PageInfo«RoleSaveVO» | PageInfo«RoleSaveVO» |
| &emsp;&emsp;endRow                          |                           | integer(int32)       |                      |
| &emsp;&emsp;hasNextPage                     |                           | boolean              |                      |
| &emsp;&emsp;hasPreviousPage                 |                           | boolean              |                      |
| &emsp;&emsp;isFirstPage                     |                           | boolean              |                      |
| &emsp;&emsp;isLastPage                      |                           | boolean              |                      |
| &emsp;&emsp;list                            |                           | array                | RoleSaveVO           |
| &emsp;&emsp;&emsp;&emsp;checked             |                           |                      | false                |
| &emsp;&emsp;&emsp;&emsp;children            |                           |                      | false                |
| &emsp;&emsp;&emsp;&emsp;groupConfigURL      |                           |                      | false                |
| &emsp;&emsp;&emsp;&emsp;groupId             |                           |                      | false                |
| &emsp;&emsp;&emsp;&emsp;grouped             |                           |                      | false                |
| &emsp;&emsp;&emsp;&emsp;multiLanguage       |                           |                      | false                |
| &emsp;&emsp;&emsp;&emsp;permissionConfigURL |                           |                      | false                |
| &emsp;&emsp;&emsp;&emsp;priority            |                           |                      | false                |
| &emsp;&emsp;&emsp;&emsp;productCode         |                           |                      | false                |
| &emsp;&emsp;&emsp;&emsp;roleCount           |                           |                      | false                |
| &emsp;&emsp;&emsp;&emsp;roleDesc            |                           |                      | false                |
| &emsp;&emsp;&emsp;&emsp;roleId              |                           |                      | true                 |
| &emsp;&emsp;&emsp;&emsp;roleName            |                           |                      | false                |
| &emsp;&emsp;&emsp;&emsp;type                |                           |                      | false                |
| &emsp;&emsp;navigateFirstPage               |                           | integer(int32)       |                      |
| &emsp;&emsp;navigateLastPage                |                           | integer(int32)       |                      |
| &emsp;&emsp;navigatePages                   |                           | integer(int32)       |                      |
| &emsp;&emsp;navigatepageNums                |                           | array                | integer              |
| &emsp;&emsp;nextPage                        |                           | integer(int32)       |                      |
| &emsp;&emsp;pageNum                         |                           | integer(int32)       |                      |
| &emsp;&emsp;pageSize                        |                           | integer(int32)       |                      |
| &emsp;&emsp;pages                           |                           | integer(int32)       |                      |
| &emsp;&emsp;prePage                         |                           | integer(int32)       |                      |
| &emsp;&emsp;size                            |                           | integer(int32)       |                      |
| &emsp;&emsp;startRow                        |                           | integer(int32)       |                      |
| &emsp;&emsp;total                           |                           | integer(int64)       |                      |
| message                                     |                           | string               |                      |
| messageList                                 |                           | array                |                      |
| messageType                                 | 可用值:INFO,WARNING,ERROR | string               |                      |
| success                                     |                           | boolean              |                      |


**响应示例**:
```javascript
{
	"data": {
		"endRow": 0,
		"hasNextPage": true,
		"hasPreviousPage": true,
		"isFirstPage": true,
		"isLastPage": true,
		"list": [
			{
				"checked": true,
				"children": [
					{
						"checked": true,
						"children": [
							{}
						],
						"groupConfigURL": "",
						"groupId": "",
						"grouped": true,
						"multiLanguage": {},
						"permissionConfigURL": "",
						"priority": 0,
						"productCode": "",
						"roleCount": 0,
						"roleDesc": "",
						"roleId": "",
						"roleName": "",
						"type": ""
					}
				],
				"groupConfigURL": "",
				"groupId": "",
				"grouped": true,
				"multiLanguage": {},
				"permissionConfigURL": "",
				"priority": 0,
				"productCode": "",
				"roleCount": 0,
				"roleDesc": "",
				"roleId": "",
				"roleName": "",
				"type": ""
			}
		],
		"navigateFirstPage": 0,
		"navigateLastPage": 0,
		"navigatePages": 0,
		"navigatepageNums": [],
		"nextPage": 0,
		"pageNum": 0,
		"pageSize": 0,
		"pages": 0,
		"prePage": 0,
		"size": 0,
		"startRow": 0,
		"total": 0
	},
	"message": "",
	"messageList": [],
	"messageType": "",
	"success": true
}
```