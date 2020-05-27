<!--
 * @Author: 471826078@qq.com
 * @Date: 2020-05-21 18:06:03
 * @LastEditors: 471826078@qq.com
 * @LastEditTime: 2020-05-27 17:53:10
--> 
<template>
     <div>
         <el-row>
             <el-col>
                 
             </el-col>
         </el-row>
        <mavon-editor 
            v-model="content" 
            ref="md" 
            @change="change" 
            style="min-height: 600px"
        />

        <button @click="submit">提交</button>
    </div>
</template>
<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
     components: {
        mavonEditor,
    },
    data(){
        return {
             content:'', // 输入的markdown
            html:'',    // 及时转的html
        }
    },
     methods: {
        // 所有操作都会被解析重新渲染
        change(value, render){
            // render 为 markdown 解析后的结果[html]
            this.html = render;
            console.log(value);
            
        },
        // 提交
        submit(){
            console.log(this.content);
            console.log(this.html);
        }
    },
    mounted() {

    }
}
</script>