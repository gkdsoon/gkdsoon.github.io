(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Users_Rights_Roles"],{"057f":function(e,t,r){var a=r("fc6a"),n=r("241c").f,i={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(e){try{return n(e)}catch(t){return o.slice()}};e.exports.f=function(e){return o&&"[object Window]"==i.call(e)?s(e):n(a(e))}},"244b":function(e,t,r){"use strict";var a=r("dae7"),n=r.n(a);n.a},"25f0":function(e,t,r){"use strict";var a=r("6eeb"),n=r("825a"),i=r("d039"),o=r("ad6d"),s="toString",l=RegExp.prototype,u=l[s],c=i((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),d=u.name!=s;(c||d)&&a(RegExp.prototype,s,(function(){var e=n(this),t=String(e.source),r=e.flags,a=String(void 0===r&&e instanceof RegExp&&!("flags"in l)?o.call(e):r);return"/"+t+"/"+a}),{unsafe:!0})},2666:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("用户管理")]),r("el-breadcrumb-item",[e._v("用户列表")])],1),r("el-card",[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:8}},[r("el-input",{attrs:{placeholder:"请输入内容",clearable:""},on:{clear:function(t){return e.getUserList()}},model:{value:e.queryInfo.query,callback:function(t){e.$set(e.queryInfo,"query",t)},expression:"queryInfo.query"}},[r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(t){return e.getUserList()}},slot:"append"})],1)],1),r("el-col",{attrs:{span:4}},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addDialogVisible=!0}}},[e._v("添加用户")])],1)],1),r("el-table",{attrs:{data:e.userlist,border:"",stripe:""}},[r("el-table-column",{attrs:{type:"index"}}),r("el-table-column",{attrs:{label:"姓名",prop:"username"}}),r("el-table-column",{attrs:{label:"邮箱",prop:"email"}}),r("el-table-column",{attrs:{label:"电话",prop:"mobile"}}),r("el-table-column",{attrs:{label:"角色",prop:"role_name"}}),r("el-table-column",{attrs:{label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-switch",{on:{change:function(r){return e.userStateChanged(t.row)}},model:{value:t.row.mg_state,callback:function(r){e.$set(t.row,"mg_state",r)},expression:"scope.row.mg_state"}})]}}])}),r("el-table-column",{attrs:{label:"操作",width:"180px"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(r){return e.showEditDialog(t.row.id)}}}),r("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(r){return e.removeUserById(t.row.id)}}}),r("el-tooltip",{attrs:{effect:"dark",content:"分配角色",placement:"top",enterable:!1}},[r("el-button",{attrs:{type:"warning",icon:"el-icon-setting",size:"mini"},on:{click:function(r){return e.setRole(t.row)}}})],1)]}}])})],1),r("el-pagination",{attrs:{"current-page":e.queryInfo.pagenum,"page-sizes":[1,2,5,10],"page-size":e.queryInfo.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),r("el-dialog",{attrs:{title:"添加用户",visible:e.addDialogVisible,width:"50%"},on:{"update:visible":function(t){e.addDialogVisible=t},close:e.addDialogClosed}},[r("el-form",{ref:"addFormRef",attrs:{model:e.addForm,rules:e.addFormRules,"label-width":"70px"}},[r("el-form-item",{attrs:{label:"用户名",prop:"username"}},[r("el-input",{model:{value:e.addForm.username,callback:function(t){e.$set(e.addForm,"username",t)},expression:"addForm.username"}})],1),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{attrs:{type:"password"},model:{value:e.addForm.password,callback:function(t){e.$set(e.addForm,"password",t)},expression:"addForm.password"}})],1),r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{model:{value:e.addForm.email,callback:function(t){e.$set(e.addForm,"email",t)},expression:"addForm.email"}})],1),r("el-form-item",{attrs:{label:"手机",prop:"mobile"}},[r("el-input",{model:{value:e.addForm.mobile,callback:function(t){e.$set(e.addForm,"mobile",t)},expression:"addForm.mobile"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.addDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.addUser}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"修改用户",visible:e.editDialogVisible,width:"50%"},on:{"update:visible":function(t){e.editDialogVisible=t},close:e.editDialogClosed}},[r("el-form",{ref:"editFormRef",attrs:{model:e.editForm,rules:e.editFormRules,"label-width":"70px"}},[r("el-form-item",{attrs:{label:"用户名"}},[r("el-input",{attrs:{disabled:""},model:{value:e.editForm.username,callback:function(t){e.$set(e.editForm,"username",t)},expression:"editForm.username"}})],1),r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{model:{value:e.editForm.email,callback:function(t){e.$set(e.editForm,"email",t)},expression:"editForm.email"}})],1),r("el-form-item",{attrs:{label:"手机",prop:"mobile"}},[r("el-input",{model:{value:e.editForm.mobile,callback:function(t){e.$set(e.editForm,"mobile",t)},expression:"editForm.mobile"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.editDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.editUserInfo}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"分配角色",visible:e.setRoleDialogVisible,width:"50%"},on:{"update:visible":function(t){e.setRoleDialogVisible=t},close:e.setRoleDialogClosed}},[r("div",[r("p",[e._v("当前的用户:"+e._s(e.userInfo.username))]),r("p",[e._v("当前的角色:"+e._s(e.userInfo.role_name))]),r("p",[e._v(" 分配新角色: "),r("el-select",{attrs:{placeholder:"请选择角色"},model:{value:e.selectedRoleId,callback:function(t){e.selectedRoleId=t},expression:"selectedRoleId"}},e._l(e.rolesList,(function(e){return r("el-option",{key:e.id,attrs:{label:e.roleName,value:e.id}})})),1)],1)]),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.setRoleDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.saveRoleInfo}},[e._v("确 定")])],1)])],1)},n=[],i=(r("99af"),r("96cf"),r("1da1")),o={data:function(){var e=function(e,t,r){var a=/^\w+@\w+(\.\w+)+$/;if(a.test(t))return r();r(new Error("请输入合法的邮箱"))},t=function(e,t,r){var a=/^1[34578]\d{9}$/;if(a.test(t))return r();r(new Error("请输入合法的手机号码"))};return{queryInfo:{query:"",pagenum:1,pagesize:2},userlist:[],total:0,addDialogVisible:!1,addForm:{username:"",password:"",email:"",mobile:""},addFormRules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:10,message:"用户名的长度在3~10个字符之间",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:15,message:"密码的长度在3~10个字符之间",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{validator:e,message:"邮箱格式不正确，请重新输入",trigger:"blur"}],mobile:[{required:!0,message:"请输入手机号码",trigger:"blur"},{validator:t,message:"手机号码不正确，请重新输入",trigger:"blur"}]},editDialogVisible:!1,editForm:{username:"",email:"",mobile:""},editFormRules:{email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{validator:e,message:"邮箱格式不正确，请重新输入",trigger:"blur"}],mobile:[{required:!0,message:"请输入手机号码",trigger:"blur"},{validator:t,message:"手机号码不正确，请重新输入",trigger:"blur"}]},setRoleDialogVisible:!1,userInfo:{},rolesList:[],selectedRoleId:""}},created:function(){this.getUserList()},methods:{getUserList:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("users",{params:e.queryInfo});case 2:if(r=t.sent,a=r.data,200===a.meta.status){t.next=6;break}return t.abrupt("return",e.$message.error("获取用户列表失败！"));case 6:e.userlist=a.data.users,e.total=a.data.total;case 8:case"end":return t.stop()}}),t)})))()},handleSizeChange:function(e){this.queryInfo.pagesize=e,this.getUserList()},handleCurrentChange:function(e){this.queryInfo.pagenum=e,this.getUserList()},userStateChanged:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.put("users/".concat(e.id,"/state/").concat(e.mg_state));case 2:if(a=r.sent,n=a.data,200===n.meta.status){r.next=7;break}return e.mg_state=!e.mg_state,r.abrupt("return",t.$message.error("更新用户状态失败！"));case 7:t.$message.success("更新用户状态成功！");case 8:case"end":return r.stop()}}),r)})))()},addDialogClosed:function(){this.$refs.addFormRef.resetFields()},addUser:function(){var e=this;this.$refs.addFormRef.validate(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(r){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return",e.$message.error("请填写完整用户信息"));case 2:return t.next=4,e.$http.post("users",e.addForm);case 4:if(a=t.sent,n=a.data,201===n.meta.status){t.next=8;break}return t.abrupt("return",e.$message.error("添加用户失败"));case 8:e.$message.success("添加用户成功"),e.addDialogVisible=!1,e.getUserList();case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},showEditDialog:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.get("users/"+e);case 2:if(a=r.sent,n=a.data,200===n.meta.status){r.next=6;break}return r.abrupt("return",t.$message.error("获取用户信息失败！"));case 6:t.editForm=n.data,t.editDialogVisible=!0;case 8:case"end":return r.stop()}}),r)})))()},editDialogClosed:function(){this.$refs.editFormRef.resetFields()},editUserInfo:function(){var e=this;this.$refs.editFormRef.validate(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(r){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return",e.$message.error("请填写完整用户信息"));case 2:return t.next=4,e.$http.put("users/"+e.editForm.id,e.editForm);case 4:if(a=t.sent,n=a.data,200===n.meta.status){t.next=8;break}return t.abrupt("return",e.$message.error("修改用户失败"));case 8:e.$message.success("修改用户成功"),e.editDialogVisible=!1,e.getUserList();case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},removeUserById:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$confirm("请问是否要永久删除该用户","删除提示",{confirmButtonText:"确认删除",cancelButtonText:"取消",type:"warning"}).catch((function(e){return e}));case 2:if(a=r.sent,"confirm"===a){r.next=5;break}return r.abrupt("return",t.$message.info("已经取消删除"));case 5:return r.next=7,t.$http.delete("users/"+e);case 7:if(n=r.sent,i=n.data,200===i.meta.status){r.next=11;break}return r.abrupt("return",t.$message.error("删除用户失败"));case 11:t.$message.success("删除用户成功"),t.getUserList();case 13:case"end":return r.stop()}}),r)})))()},setRole:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.userInfo=e,r.next=3,t.$http.get("roles");case 3:if(a=r.sent,n=a.data,200===n.meta.status){r.next=7;break}return r.abrupt("return",t.$message.error("获取角色列表失败"));case 7:t.rolesList=n.data,t.setRoleDialogVisible=!0;case 9:case"end":return r.stop()}}),r)})))()},saveRoleInfo:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.selectedRoleId){t.next=2;break}return t.abrupt("return",e.$message.error("请选择需要分配的角色"));case 2:return t.next=4,e.$http.put("users/".concat(e.userInfo.id,"/role"),{rid:e.selectedRoleId});case 4:if(r=t.sent,a=r.data,200===a.meta.status){t.next=8;break}return t.abrupt("return",e.$message.error("分配角色失败"));case 8:e.$message.success("分配角色成功"),e.getUserList(),e.setRoleDialogVisible=!1;case 11:case"end":return t.stop()}}),t)})))()},setRoleDialogClosed:function(){this.selectedRoleId="",this.userInfo={}}}},s=o,l=r("2877"),u=Object(l["a"])(s,a,n,!1,null,"3eca6c66",null);t["default"]=u.exports},3024:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("权限管理")]),r("el-breadcrumb-item",[e._v("角色列表")])],1),r("el-card",[r("el-row",[r("el-col",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addDialogVisible=!0}}},[e._v("添加角色")])],1)],1),r("el-table",{attrs:{data:e.roleList,border:"",stripe:""}},[r("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.children,(function(a,n){return r("el-row",{key:a.id,class:["bdbottom",0===n?"bdtop":"","vcenter"]},[r("el-col",{attrs:{span:5}},[r("el-tag",{attrs:{closable:""},on:{close:function(r){return e.removeRightById(t.row,a.id)}}},[e._v(" "+e._s(a.authName)+" ")]),r("i",{staticClass:"el-icon-caret-right"})],1),r("el-col",{attrs:{span:19}},e._l(a.children,(function(a,n){return r("el-row",{key:a.id,class:[0===n?"":"bdtop","vcenter"]},[r("el-col",{attrs:{span:6}},[r("el-tag",{attrs:{type:"success",closable:""},on:{close:function(r){return e.removeRightById(t.row,a.id)}}},[e._v(e._s(a.authName))]),r("i",{staticClass:"el-icon-caret-right"})],1),r("el-col",{attrs:{span:18}},e._l(a.children,(function(a){return r("el-tag",{key:a.id,attrs:{type:"warning",closable:""},on:{close:function(r){return e.removeRightById(t.row,a.id)}}},[e._v(" "+e._s(a.authName)+" ")])})),1)],1)})),1)],1)}))}}])}),r("el-table-column",{attrs:{type:"index"}}),r("el-table-column",{attrs:{label:"角色名称",prop:"roleName"}}),r("el-table-column",{attrs:{label:"角色描述",prop:"roleDesc"}}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(r){return e.showEditDialog(t.row.id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(r){return e.removeRoleById(t.row.id)}}},[e._v("删除")]),r("el-button",{attrs:{type:"warning",icon:"el-icon-setting",size:"mini"},on:{click:function(r){return e.showSetRightDialog(t.row)}}},[e._v("分配权限")])]}}])})],1)],1),r("el-dialog",{attrs:{title:"添加角色",visible:e.addDialogVisible,width:"50%"},on:{"update:visible":function(t){e.addDialogVisible=t},close:e.addDialogClosed}},[r("el-form",{ref:"addFormRef",attrs:{model:e.addForm,rules:e.addFormRules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"角色名称",prop:"roleName"}},[r("el-input",{model:{value:e.addForm.roleName,callback:function(t){e.$set(e.addForm,"roleName",t)},expression:"addForm.roleName"}})],1),r("el-form-item",{attrs:{label:"角色描述",prop:"roleDesc"}},[r("el-input",{model:{value:e.addForm.roleDesc,callback:function(t){e.$set(e.addForm,"roleDesc",t)},expression:"addForm.roleDesc"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.addDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.addRole}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"修改角色",visible:e.editDialogVisible,width:"50%"},on:{"update:visible":function(t){e.editDialogVisible=t},close:e.editDialogClosed}},[r("el-form",{ref:"editFormRef",attrs:{model:e.editForm,rules:e.editFormRules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"角色名称"}},[r("el-input",{attrs:{prop:"roleName"},model:{value:e.editForm.roleName,callback:function(t){e.$set(e.editForm,"roleName",t)},expression:"editForm.roleName"}})],1),r("el-form-item",{attrs:{label:"角色描述"}},[r("el-input",{model:{value:e.editForm.roleDesc,callback:function(t){e.$set(e.editForm,"roleDesc",t)},expression:"editForm.roleDesc"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.editDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.editRoleInfo}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"分配权限",visible:e.setRightDialogVisible,width:"50%"},on:{"update:visible":function(t){e.setRightDialogVisible=t},close:e.setRightDialogClose}},[r("el-tree",{ref:"treeRef",attrs:{data:e.rightsList,props:e.treeProps,"show-checkbox":"","node-key":"id","default-expand-all":"","default-checked-keys":e.defKeys}}),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.setRightDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.allotRights}},[e._v("确 定")])],1)],1)],1)},n=[];r("99af"),r("4160"),r("a15b"),r("159b");function i(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}r("a4d3"),r("e01a"),r("d28b"),r("a630"),r("e260"),r("d3b7"),r("25f0"),r("3ca3"),r("ddb0");function o(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function l(e){return i(e)||o(e)||s()}r("96cf");var u=r("1da1"),c={data:function(){return{roleList:[],addDialogVisible:!1,addForm:{roleName:"",roleDesc:""},addFormRules:{roleName:[{required:!0,message:"请输入角色名称",trigger:"blur"}]},editDialogVisible:!1,editForm:{roleId:"",roleName:"",roleDesc:""},editFormRules:{roleName:[{required:!0,message:"请输入角色名称",trigger:"blur"}]},rightsList:[],setRightDialogVisible:!1,treeProps:{label:"authName",children:"children"},defKeys:[],roleId:""}},created:function(){this.getRolesList()},methods:{getRolesList:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("roles");case 2:r=t.sent,a=r.data,e.roleList=a.data;case 5:case"end":return t.stop()}}),t)})))()},addDialogClosed:function(){this.$refs.addFormRef.resetFields()},addRole:function(){var e=this;this.$refs.addFormRef.validate(function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(r){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return",e.$message.error("请填写完整角色信息"));case 2:return t.next=4,e.$http.post("roles",e.addForm);case 4:if(a=t.sent,n=a.data,201===n.meta.status){t.next=8;break}return t.abrupt("return",e.$message.error("添加角色失败"));case 8:e.$message.success("添加角色成功"),e.addDialogVisible=!1,e.getRolesList();case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},showEditDialog:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.get("roles/"+e);case 2:if(a=r.sent,n=a.data,200===n.meta.status){r.next=6;break}return r.abrupt("return",t.$message.error("获取角色信息失败！"));case 6:t.editForm=n.data,t.editDialogVisible=!0;case 8:case"end":return r.stop()}}),r)})))()},editDialogClosed:function(){this.$refs.editFormRef.resetFields()},editRoleInfo:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$refs.editFormRef.validate(function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(r){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return",e.$message.error("请填写完整角色信息"));case 2:return t.next=4,e.$http.put("roles/"+e.editForm.roleId,e.editForm);case 4:if(a=t.sent,n=a.data,200===n.meta.status){t.next=8;break}return t.abrupt("return",e.$message.error("修改角色失败"));case 8:e.$message.success("修改角色成功"),e.editDialogVisible=!1,e.getRolesList();case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)})))()},removeRoleById:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function r(){var a,n,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$confirm("请问是否要永久删除该角色","删除提示",{confirmButtonText:"确认删除",cancelButtonText:"取消",type:"warning"}).catch((function(e){return e}));case 2:if(a=r.sent,"confirm"===a){r.next=5;break}return r.abrupt("return",t.$message.info("已经取消删除"));case 5:return r.next=7,t.$http.delete("roles/"+e);case 7:if(n=r.sent,i=n.data,200===i.meta.status){r.next=11;break}return r.abrupt("return",t.$message.error("删除角色失败"));case 11:t.$message.success("删除角色成功"),t.getRolesList();case 13:case"end":return r.stop()}}),r)})))()},removeRightById:function(e,t){var r=this;return Object(u["a"])(regeneratorRuntime.mark((function a(){var n,i,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,r.$confirm("请问是否要删除该权限","删除提示",{confirmButtonText:"确认删除",cancelButtonText:"取消",type:"warning"}).catch((function(e){return e}));case 2:if(n=a.sent,"confirm"===n){a.next=5;break}return a.abrupt("return",r.$message.info("已经取消删除"));case 5:return a.next=7,r.$http.delete("roles/".concat(e.id,"/rights/").concat(t));case 7:if(i=a.sent,o=i.data,200===o.meta.status){a.next=11;break}return a.abrupt("return",r.$message.error("删除角色权限失败"));case 11:e.children=o.data;case 12:case"end":return a.stop()}}),a)})))()},showSetRightDialog:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.roleId=e.id,r.next=3,t.$http.get("rights/tree");case 3:if(a=r.sent,n=a.data,200===n.meta.status){r.next=7;break}return r.abrupt("return",t.$message.error("获取权限树失败"));case 7:t.rightsList=n.data,t.getLeafKeys(e,t.defKeys),t.setRightDialogVisible=!0;case 10:case"end":return r.stop()}}),r)})))()},getLeafKeys:function(e,t){var r=this;if(!e.children)return t.push(e.id);e.children.forEach((function(e){return r.getLeafKeys(e,t)}))},setRightDialogClose:function(){this.defKeys=[]},allotRights:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var r,a,n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=[].concat(l(e.$refs.treeRef.getCheckedKeys()),l(e.$refs.treeRef.getHalfCheckedKeys())),a=r.join(","),t.next=4,e.$http.post("roles/".concat(e.roleId,"/rights"),{rids:a});case 4:if(n=t.sent,i=n.data,200===i.meta.status){t.next=8;break}return t.abrupt("return",e.$message.error("分配权限失败"));case 8:e.$message.success("分配权限成功"),e.getRolesList(),e.setRightDialogVisible=!1;case 11:case"end":return t.stop()}}),t)})))()}}},d=c,f=(r("244b"),r("2877")),m=Object(f["a"])(d,a,n,!1,null,"647ca83f",null);t["default"]=m.exports},"3ca3":function(e,t,r){"use strict";var a=r("6547").charAt,n=r("69f3"),i=r("7dd0"),o="String Iterator",s=n.set,l=n.getterFor(o);i(String,"String",(function(e){s(this,{type:o,string:String(e),index:0})}),(function(){var e,t=l(this),r=t.string,n=t.index;return n>=r.length?{value:void 0,done:!0}:(e=a(r,n),t.index+=e.length,{value:e,done:!1})}))},"4df4":function(e,t,r){"use strict";var a=r("0366"),n=r("7b0b"),i=r("9bdd"),o=r("e95a"),s=r("50c4"),l=r("8418"),u=r("35a1");e.exports=function(e){var t,r,c,d,f,m,p=n(e),g="function"==typeof this?this:Array,b=arguments.length,h=b>1?arguments[1]:void 0,v=void 0!==h,w=u(p),y=0;if(v&&(h=a(h,b>2?arguments[2]:void 0,2)),void 0==w||g==Array&&o(w))for(t=s(p.length),r=new g(t);t>y;y++)m=v?h(p[y],y):p[y],l(r,y,m);else for(d=w.call(p),f=d.next,r=new g;!(c=f.call(d)).done;y++)m=v?i(d,h,[c.value,y],!0):c.value,l(r,y,m);return r.length=y,r}},"746f":function(e,t,r){var a=r("428f"),n=r("5135"),i=r("e538"),o=r("9bf2").f;e.exports=function(e){var t=a.Symbol||(a.Symbol={});n(t,e)||o(t,e,{value:i.f(e)})}},a4d3:function(e,t,r){"use strict";var a=r("23e7"),n=r("da84"),i=r("d066"),o=r("c430"),s=r("83ab"),l=r("4930"),u=r("fdbf"),c=r("d039"),d=r("5135"),f=r("e8b5"),m=r("861d"),p=r("825a"),g=r("7b0b"),b=r("fc6a"),h=r("c04e"),v=r("5c6c"),w=r("7c73"),y=r("df75"),R=r("241c"),x=r("057f"),k=r("7418"),$=r("06cf"),F=r("9bf2"),_=r("d1e7"),D=r("9112"),S=r("6eeb"),I=r("5692"),O=r("f772"),j=r("d012"),V=r("90e3"),L=r("b622"),C=r("e538"),N=r("746f"),q=r("d44e"),E=r("69f3"),U=r("b727").forEach,z=O("hidden"),B="Symbol",P="prototype",A=L("toPrimitive"),T=E.set,K=E.getterFor(B),J=Object[P],H=n.Symbol,Q=i("JSON","stringify"),W=$.f,G=F.f,M=x.f,X=_.f,Y=I("symbols"),Z=I("op-symbols"),ee=I("string-to-symbol-registry"),te=I("symbol-to-string-registry"),re=I("wks"),ae=n.QObject,ne=!ae||!ae[P]||!ae[P].findChild,ie=s&&c((function(){return 7!=w(G({},"a",{get:function(){return G(this,"a",{value:7}).a}})).a}))?function(e,t,r){var a=W(J,t);a&&delete J[t],G(e,t,r),a&&e!==J&&G(J,t,a)}:G,oe=function(e,t){var r=Y[e]=w(H[P]);return T(r,{type:B,tag:e,description:t}),s||(r.description=t),r},se=u?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof H},le=function(e,t,r){e===J&&le(Z,t,r),p(e);var a=h(t,!0);return p(r),d(Y,a)?(r.enumerable?(d(e,z)&&e[z][a]&&(e[z][a]=!1),r=w(r,{enumerable:v(0,!1)})):(d(e,z)||G(e,z,v(1,{})),e[z][a]=!0),ie(e,a,r)):G(e,a,r)},ue=function(e,t){p(e);var r=b(t),a=y(r).concat(pe(r));return U(a,(function(t){s&&!de.call(r,t)||le(e,t,r[t])})),e},ce=function(e,t){return void 0===t?w(e):ue(w(e),t)},de=function(e){var t=h(e,!0),r=X.call(this,t);return!(this===J&&d(Y,t)&&!d(Z,t))&&(!(r||!d(this,t)||!d(Y,t)||d(this,z)&&this[z][t])||r)},fe=function(e,t){var r=b(e),a=h(t,!0);if(r!==J||!d(Y,a)||d(Z,a)){var n=W(r,a);return!n||!d(Y,a)||d(r,z)&&r[z][a]||(n.enumerable=!0),n}},me=function(e){var t=M(b(e)),r=[];return U(t,(function(e){d(Y,e)||d(j,e)||r.push(e)})),r},pe=function(e){var t=e===J,r=M(t?Z:b(e)),a=[];return U(r,(function(e){!d(Y,e)||t&&!d(J,e)||a.push(Y[e])})),a};if(l||(H=function(){if(this instanceof H)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=V(e),r=function(e){this===J&&r.call(Z,e),d(this,z)&&d(this[z],t)&&(this[z][t]=!1),ie(this,t,v(1,e))};return s&&ne&&ie(J,t,{configurable:!0,set:r}),oe(t,e)},S(H[P],"toString",(function(){return K(this).tag})),S(H,"withoutSetter",(function(e){return oe(V(e),e)})),_.f=de,F.f=le,$.f=fe,R.f=x.f=me,k.f=pe,C.f=function(e){return oe(L(e),e)},s&&(G(H[P],"description",{configurable:!0,get:function(){return K(this).description}}),o||S(J,"propertyIsEnumerable",de,{unsafe:!0}))),a({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:H}),U(y(re),(function(e){N(e)})),a({target:B,stat:!0,forced:!l},{for:function(e){var t=String(e);if(d(ee,t))return ee[t];var r=H(t);return ee[t]=r,te[r]=t,r},keyFor:function(e){if(!se(e))throw TypeError(e+" is not a symbol");if(d(te,e))return te[e]},useSetter:function(){ne=!0},useSimple:function(){ne=!1}}),a({target:"Object",stat:!0,forced:!l,sham:!s},{create:ce,defineProperty:le,defineProperties:ue,getOwnPropertyDescriptor:fe}),a({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:me,getOwnPropertySymbols:pe}),a({target:"Object",stat:!0,forced:c((function(){k.f(1)}))},{getOwnPropertySymbols:function(e){return k.f(g(e))}}),Q){var ge=!l||c((function(){var e=H();return"[null]"!=Q([e])||"{}"!=Q({a:e})||"{}"!=Q(Object(e))}));a({target:"JSON",stat:!0,forced:ge},{stringify:function(e,t,r){var a,n=[e],i=1;while(arguments.length>i)n.push(arguments[i++]);if(a=t,(m(t)||void 0!==e)&&!se(e))return f(t)||(t=function(e,t){if("function"==typeof a&&(t=a.call(this,e,t)),!se(t))return t}),n[1]=t,Q.apply(null,n)}})}H[P][A]||D(H[P],A,H[P].valueOf),q(H,B),j[z]=!0},a630:function(e,t,r){var a=r("23e7"),n=r("4df4"),i=r("1c7e"),o=!i((function(e){Array.from(e)}));a({target:"Array",stat:!0,forced:o},{from:n})},a766:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("权限管理")]),r("el-breadcrumb-item",[e._v("权限列表")])],1),r("el-card",[r("el-table",{attrs:{data:e.rightsList,border:"",stripe:""}},[r("el-table-column",{attrs:{type:"index"}}),r("el-table-column",{attrs:{label:"权限名称",prop:"authName"}}),r("el-table-column",{attrs:{label:"路径",prop:"path"}}),r("el-table-column",{attrs:{label:"权限等级",prop:"level"},scopedSlots:e._u([{key:"default",fn:function(t){return["0"===t.row.level?r("el-tag",[e._v("一级权限")]):e._e(),"1"===t.row.level?r("el-tag",{attrs:{type:"success"}},[e._v("二级权限")]):e._e(),"2"===t.row.level?r("el-tag",{attrs:{type:"warning"}},[e._v("三级权限")]):e._e()]}}])})],1)],1)],1)},n=[],i=(r("96cf"),r("1da1")),o={data:function(){return{rightsList:[]}},created:function(){this.getRightsList()},methods:{getRightsList:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rights/list");case 2:if(r=t.sent,a=r.data,200===a.meta.status){t.next=6;break}return t.abrupt("return",e.$message.error("获取权限列表失败"));case 6:e.rightsList=a.data;case 7:case"end":return t.stop()}}),t)})))()}}},s=o,l=r("2877"),u=Object(l["a"])(s,a,n,!1,null,"8e19aad4",null);t["default"]=u.exports},d28b:function(e,t,r){var a=r("746f");a("iterator")},dae7:function(e,t,r){},ddb0:function(e,t,r){var a=r("da84"),n=r("fdbc"),i=r("e260"),o=r("9112"),s=r("b622"),l=s("iterator"),u=s("toStringTag"),c=i.values;for(var d in n){var f=a[d],m=f&&f.prototype;if(m){if(m[l]!==c)try{o(m,l,c)}catch(g){m[l]=c}if(m[u]||o(m,u,d),n[d])for(var p in i)if(m[p]!==i[p])try{o(m,p,i[p])}catch(g){m[p]=i[p]}}}},e01a:function(e,t,r){"use strict";var a=r("23e7"),n=r("83ab"),i=r("da84"),o=r("5135"),s=r("861d"),l=r("9bf2").f,u=r("e893"),c=i.Symbol;if(n&&"function"==typeof c&&(!("description"in c.prototype)||void 0!==c().description)){var d={},f=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof f?new c(e):void 0===e?c():c(e);return""===e&&(d[t]=!0),t};u(f,c);var m=f.prototype=c.prototype;m.constructor=f;var p=m.toString,g="Symbol(test)"==String(c("test")),b=/^Symbol\((.*)\)[^)]+$/;l(m,"description",{configurable:!0,get:function(){var e=s(this)?this.valueOf():this,t=p.call(e);if(o(d,e))return"";var r=g?t.slice(7,-1):t.replace(b,"$1");return""===r?void 0:r}}),a({global:!0,forced:!0},{Symbol:f})}},e538:function(e,t,r){var a=r("b622");t.f=a}}]);
//# sourceMappingURL=Users_Rights_Roles.24e91d82.js.map