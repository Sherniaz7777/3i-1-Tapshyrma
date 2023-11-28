//EVENT LOOP
//setTimeout, setInterval

const btn=document.querySelector('#laptops')
const olTag=document.querySelector('.list')
const btnAcer=document.querySelector('#Acer')
const searchInput=document.querySelector('#search')
const btnHP=document.querySelector('#HP')
const btnLenovo=document.querySelector('#Lenovo')
const btnDell=document.querySelector('#Dell')
const btnAsus=document.querySelector('#Asus')
const btnMacbook=document.querySelector('#Macbook')
const spinner=document.querySelector('#spinner')
const Samsung=document.querySelector('#Samsung')
const LenovoV15=document.querySelector('#LenovoV15')
const AsusROGStri=document.querySelector('#AsusROGStri')
const AcerNitro5=document.querySelector('#AcerNitro5')



    const laptops=[
        {title:'Acer', ssd:512, vCard:true, ram:16, price:53000, year:2022, img:'https://object.pscloud.io/cms/cms/Photo/img_0_62_1927_3_1.jpg'},

        {title:'HP', ssd:256, vCard:true, ram:8, price:43000, year:2020, img:'https://softech.kg/image/cache/ed7c20f93879c930b626b05b8d23d65b.jpg'},

        {title:'Lenovo', ssd:128, vCard:false, ram:8, price:20000, year:2019, img:'https://static.lenovo.com/ww/img/new-homepage/default/lenovo-pcs-tablets-hover.jpg'},
        {title:'Dell', ssd:512, vCard:true, ram:32, price:80000, year:2021, img:'https://blogs.windows.com/wp-content/uploads/prod/sites/2/2016/09/Dell-Sept-14.jpg'},
        {title:'Asus', ssd:1000, vCard:true, ram:32, price:120000, year:2023, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVsp73-0ktwsI-FdIQ5wuPyy6z07Sd4vGq6w&usqp=CAU'},
        {title:'MacBook', ssd:512, vCard:true, ram:32, price:90000, year:2022, img:'https://antimonopolia.gov.kg/wp-content/uploads/2023/03/macbook-pro.jpg'},
        {title:'Samsung', ssd:256, vCard:true, ram:20, price:60000, year:2023, img:'https://samsungstore.kg/files/media/13/13125.png'},
        {title:'Lenovo V15', ssd:128, vCard:true, ram:12, price:40000, year:2021, img:'https://ultra.kg/upload/resize_cache/iblock/6a5/800_800_1d0e97ea46f4438969ab06dd5b311ca67/6a5547fed53dd0da004a230860ceea7a.jpg'},
        {title:'Asus ROG Strix', ssd:256, vCard:true, ram:20, price:60000, year:2023, img:'https://object.pscloud.io/cms/cms/Photo/img_0_62_2362_0_1.jpg'},
        {title:'Acer Nitro 5', ssd:512, vCard:true, ram:11, price:70000, year:2020, img:'https://object.pscloud.io/cms/cms/Photo/img_0_62_2023_4_1.jpg'},
    ]

    
    
   
    function showLaptops(array){
        olTag.innerHTML=''
        for (const laptop of array) {
            olTag.innerHTML+=`
            <li>
                <h4>${laptop.title}</h4>
                <img width='200px' src='${laptop.img}' />
                <p> Оперативная память ${laptop.ram} GB</p>
                <p> Памят ${laptop.ssd} GB</p>
                <P>Баасы ${laptop.price} сом </P>
                <p>  ${laptop.year}-жылы</p>
            </li>
          `   
        }
    }
   
    function searchLaptops() {
        const searchInput = document.getElementById('search').value.toUpperCase();
        const filteredLaptops = laptops.filter((laptop)=>
        laptop.title.toUpperCase().startsWith(searchInput)
        );
        showLaptops(filteredLaptops)
    }
    btn.onclick=()=>{
        spinner.style.display='block'
        setTimeout(()=>{
            showLaptops(laptops)
            spinner.style.display='none'
        }, 2000)
    }
    
    
    
   
    btnAcer.onclick=()=>{
        spinner.style.display='block'
        setTimeout(()=>{
            spinner.style.display='none'
        Acer=laptops.filter((acer) => acer.title==='Acer')
        showLaptops(Acer)
    }, 1000)
    }
    btnHP.onclick=()=>{
        spinner.style.display='block'
        setTimeout(()=>{
            spinner.style.display='none'
        HP=laptops.filter((hp) => hp.title==='HP')
        showLaptops(HP)
    }, 1000)
    }
    btnLenovo.onclick=()=>{
        spinner.style.display='block'
        setTimeout(()=>{
            spinner.style.display='none'
        Lenovo=laptops.filter((lenovo) => lenovo.title==='Lenovo')
        showLaptops(Lenovo)
    }, 1000)
    }
    btnDell.onclick=()=>{
        spinner.style.display='block'
        setTimeout(()=>{
            spinner.style.display='none'
        Dell=laptops.filter((dell) => dell.title==='Dell')
        showLaptops(Dell)
    }, 1000)
    }
    btnAsus.onclick=()=>{
        spinner.style.display='block'
        setTimeout(()=>{
            spinner.style.display='none'
        Asus=laptops.filter((asus) => asus.title==='Asus')
        showLaptops(Asus)
    }, 1000)
    }
    btnMacbook.onclick=()=>{
        spinner.style.display='block'
        setTimeout(()=>{
            spinner.style.display='none'
            macbook=laptops.filter((asus) => asus.title==='MacBook')
        showLaptops(macbook)
    }, 1000)
    }
    
    Samsung.onclick=()=>{
        spinner.style.display='block'
        setTimeout(()=>{
            spinner.style.display='none'
            Ssamsung=laptops.filter((samsung) => samsung.title==='Samsung')
        showLaptops(Ssamsung)
    }, 1000)
}
LenovoV15.onclick=()=>{
    spinner.style.display='block'
    setTimeout(()=>{
        spinner.style.display='none'
        lenovo=laptops.filter((lenovovv15) => lenovovv15.title==='Lenovo V15')
    showLaptops(lenovo)
}, 1000)
}

AsusROGStri.onclick=()=>{
        spinner.style.display='block'
        setTimeout(()=>{
            spinner.style.display='none'
            aasus1=laptops.filter((asusrOGStrix) => asusrOGStrix.title==='Asus ROG Strix')
        showLaptops(aasus1)
    }, 1000)
    }
    AcerNitro5.onclick=()=>{
        spinner.style.display='block'
        setTimeout(()=>{
            spinner.style.display='none'
            AcerNitro51=laptops.filter((acerNitro5) => acerNitro5.title==='Acer Nitro 5')
        showLaptops(AcerNitro51)
    }, 1000)
    }
         