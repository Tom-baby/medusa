<template>
    <div  id="app">
        <div class="content">
            <div class="content-input">
                <input type="text" v-model="search" @keyup="getData" placeholder="请输入搜索内容">
            </div>
            <div class="content-table">
                <table >
                    <thead>
                        <tr>
                            <th>__typename</th>
                            <th>id</th>
                            <th>title</th>
                            <th>login</th>
                            <th>url</th>
                            <th>createdAt</th>
                        </tr>
                    </thead>
                    <tr  v-if="list.data.length > 0" v-for=" (item,index) in list.data" :key="index">
                        <td>{{ item.__typename }}</td>
                        <td>{{ item.id ? item.id : '' }}</td>
                        <td>{{ item.title ? item.title : '' }}</td>
                        <td>{{ item.author ? item.author.login : ''}}</td>
                        <td>{{ item.url ? item.url : '' }}</td>
                        <td>{{ item.createdAt ? item.createdAt : ''}}</td>
                    </tr>
                </table>
                <div v-if="list.data.length <= 0" class="content-msg">
                    暂无匹配数据
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import {  getSearchData} from './queries.js';
import config from './config'
import { getUserAccesToken, getUserInfo } from './api'
import { throttle } from './throttle'
  export default {
    name:'App',
    data(){
        return {
            code:'',
            search:'',
            accessToken:'',
            currentPage: 1,
            list:{
                data:[],
                total:0
            },
            user:'',
            userInfo:{},
            fn:''
        }
    },
    created(){
        this.code = window.location.search.split('=')[1]
        this.authoriz_url = config.Oauth_url
        this.authoriz_url += '?client_id=' + config.Client_id
        // let accessToken = sessionStorage.getItem('access_token')
        if (this.code){
            this.init()
        } else {
            window.location.href = this.authoriz_url
        }
        this.submit()
    },
    methods: {
        async init(){
            await this.getAccesToken()
            await this.getUserInfo()
        },
        async getAccesToken () {
            let parm = {
                client_id:config.Client_id,
                client_secret:config.Client_secret,
                code:this.code,
            }
            // 获取access_token
            await getUserAccesToken(parm).then(res => {
                console.log('token',res.access_token)
                if (res && res.access_token){
                    this.accessToken = res.access_token
                    sessionStorage.setItem('access_token',res.access_token)
                }
            }).catch(err =>{
                console.log(err)
            })
        },
        // 当获取code成功后在获取access_token
        async getUserInfo(){
            let access ={
                access_token: sessionStorage.getItem('access_token')
            } 
           await getUserInfo(access).then(res => {
               this.userInfo = res
               sessionStorage.setItem('user',res.login)
           }).catch(err => {
               console.log(err)
           })
        },
        submit() {
            this.fn = throttle(function(){
                let parm = this.search
                getSearchData(parm).then((res) => {
                    if (res && res.data && res.data.search) {
                        this.list.data = res.data.search.nodes
                    } else {
                        this.list.data = []
                    }
                }).catch((err) => {
                    console.log(err);
                });
            },1000, true)
        },
        getData(){
            this.fn.call(this)
        }
    }
  }
</script>

<style lang="postcss" scoped>
#app {
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    .content-input {
      width: 500px;
      margin: 0 auto;
      text-align: center;

      input {
        width: 400px;
        background-color: #fff;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 40px;
        line-height: 1;
        outline: none;
        padding: 0 15px;
        transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      }

      ::-webkit-input-placeholder {
        color: #999;
        font-style: 12px;
      }
    }

    .content-table {
      /* width: 900px; */
      margin: 40px;

      table {
        border-collapse: collapse;
        margin: 0 auto;
        text-align: center;
      }

      table td, table th {
        border: 1px solid #cad9ea;
        color: #666;
        height: 30px;
      }

      table thead th {
        background-color: #f5f7fa;
        width: 100px;
      }

      table tr:nth-child(odd) {
        background: #f5f7fa;
      }

      table tr:nth-child(even) {
        background: #fff;
      }

      .content-msg {
        font-size: 14px;
        color: #606266;
        margin: 20px;
      }
    }
  }
}
</style>