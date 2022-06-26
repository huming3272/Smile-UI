<template>
    <div>
        <Demo :component="Breadcrumb1Demo"></Demo>
    </div>
</template>
<script lang="ts">
    import Demo from '../Demo.vue'
    import CascaderDemo from './CascaderDemo.vue'
    export default{
        components: {
            Demo,
            CascaderDemo
        },
        setup(){
            return {
                CascaderDemo
            }
        }
    }
</script>
<demo>
    使用
</demo>
<template>
    <div>
        <Cascader/>
    </div>
</template>
<script lang="ts">
    import Cascader from '../../lib/Cascader.vue'
    export default{
        components: {
            Cascader
        }
    }
</script>