<template>
    <div>
        <h1>{{$router.params}}</h1>
        <h1>{{detail}}</h1>
    </div>
</template>

<script>
export default{
    data(){
        return{
            items: [],
        };
    },
    mounted: async function(){
        //console.log(this.props.name)

        const id = this.$router.params.id;
        console.log(id);
        const detailData = await fetch(`http://localhost3000/items/${id}`)
        const json = await detailData.json();
        this.item = json;
        console.log(this.item)
    },
    // methods(){}
}



</script>
