<template>
    <div>
        Tabs组件22
    </div>
</template>
<script lang="ts">
import Tab from './'
    export default {
        setup(props, context){
            console.log({
              ...context  
            },'扩展context')
        }
    }
</script>