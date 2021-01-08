export default class Manage{
    
    appendImageElem(keyword, index){
        const imgElem = document.createElement('img')
        imgElem.src = `https://source.unsplash.com/400x225/?${keyword}&sig=${index}`

        const galleryElem = document.querySelector('.gallery')
        galleryElem.appendChild(imgElem)
    }

    removePhotos(){
        const galleryElem = document.querySelector('.gallery')
        galleryElem.innerHTML = ''
    }

    searchPhotos(event){
        const keyword = event.target.value
        console.log(keyword);
        if(event.key === 'Enter' && keyword){
            this.removePhotos
            // loop รูปภาพมาแสดงผล
            for(let i=1; i<=9;i++){
                appendImageElem("food", 1)
                console.log(i);
            }
        }
    }

}