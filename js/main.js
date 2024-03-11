let md5 = function(d){var r = M(V(Y(X(d),8*d.length)));return r.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_};

let callBacks=0;
let idCollections = new Set();
let idCollectionsArray = [];
let idCollectionsObjects = {};
let lastId = 0;

async function getDataFromServer(action,params){
   let monthUTC = (new Date()).getUTCMonth()+1;
   let dayUTC = (new Date()).getUTCDate();
   let currentUTC = `${(new Date()).getUTCFullYear()}${monthUTC>=10?monthUTC:"0" + monthUTC}${dayUTC>=10?dayUTC:"0"+dayUTC}`;
   let serverPassword = "Valantis";
   let serverURL = "https://api.valantis.store:41000/";
   
   let jsonBody = JSON.stringify({action,params});
   let serverData = null, data = null;
   try{
      serverData =  await fetch(serverURL,
      {
         method: 'POST',
         headers:{
            "X-Auth": md5(`${serverPassword}_${currentUTC}`),
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin":"*"
         },
         body: jsonBody,
      })
      data = await serverData.json()

   } catch(e) {
      console.log(e);
      return "error";
   }
   if(action == "filter"){

      return data;
   }
   if(action == "get_items"){
      for(let i=0;i < data.result.length;++i){
         if(!idCollectionsObjects[data.result[i].id]){
            idCollectionsObjects[`${data.result[i].id}`] = data.result[i];
         }
      }
      return;
   }
   let addedId = 0;
   for(let i=0;i<data.result.length;++i){
      if(!idCollections.has(data.result[i])){
         idCollections.add(data.result[i]);
         idCollectionsArray.push(data.result[i]);
         ++addedId;
      }
   }
   if(addedId<params.limit){
      lastId +=  params.limit;
      try{
         await getDataFromServer(action,{offset:params.offset  + params.limit, limit: params.limit - addedId});
      } catch(e){
         console.log(e)
         await getDataFromServer(action,{offset:params.offset  + params.limit, limit: params.limit - addedId});
      }
   } else {
      lastId +=params.limit;
   }
   return;
}

async function getDataD(action,params,size){
   if(action == "get_ids"){
      while( idCollectionsArray.length < size ){
         await getDataFromServer(action, params);
         params.offset = lastId;
         callBacks=0;
      }
      getDataD("get_items", {ids: idCollectionsArray},250)
   } else if(action == "get_items"){
      while( Object.keys(idCollectionsObjects).length <  size ){
         let partOfArray  = [];
         let objLength = Object.keys(idCollectionsObjects).length; 
         for(let b=0, i = objLength;i<50+objLength && i <= size ;++i, b++){
            partOfArray[b] = idCollectionsArray[i];
         }
         params.ids = partOfArray;
         await getDataFromServer(action, params);
      } 
      addToPage(1);
   }
}

function addToPage(start=1){
   let mainCont = document.getElementsByClassName("vlnts__goods")[0];
   mainCont.textContent = "";
   for(let i=50*(start-1);i<start*50;++i){
      let html = `
      <div class="vlnts__header__goods-card">
         <div>"brand": ${idCollectionsObjects[`${idCollectionsArray[i]}`].brand}</div>
         <div>"id": ${idCollectionsObjects[`${idCollectionsArray[i]}`].id}</div>
         <div>"price":  ${idCollectionsObjects[`${idCollectionsArray[i]}`].price}</div>
         <div>"product":  ${idCollectionsObjects[`${idCollectionsArray[i]}`].product}</div>
      </div>
      `;
      mainCont.insertAdjacentHTML("beforeEnd",html);
   }
}

function addToPageFiltered(data){
   let pagination = document.querySelectorAll(".vlnts__pagination-cnt div");
   let freePages = Math.ceil(data.length/50);
   // pagination.forEach((element,index)=>{
   //    element.style.pointerEvents = "none";
   // })
   let mainCont = document.getElementsByClassName("vlnts__goods")[0];
   mainCont.textContent = "";
   let checkSet = new Set();
   for(let i=0;i<data.result.length;++i){
      if((idCollections.has(data.result[i]) && checkSet.has(data.result[i])) || checkSet.has(data.result[i])|| !idCollections.has(data.result[i])){
         continue;
      }
      checkSet.add(`${data.result[i]}`)
      let html = `
      <div class="vlnts__header__goods-card">
         <div>"brand": ${idCollectionsObjects[`${data.result[i]}`]?.brand}</div>
         <div>"id": ${idCollectionsObjects[`${data.result[i]}`]?.id}</div>
         <div>"price":  ${idCollectionsObjects[`${data.result[i]}`]?.price}</div>
         <div>"product":  ${idCollectionsObjects[`${data.result[i]}`]?.product}</div>
      </div>
      `;
      mainCont.insertAdjacentHTML("beforeEnd",html);
   }
}

async function filterAPI(type, getValue){
   if(type=="price"){
      getValue = Number(getValue);
   }
   let data = "error";
   let counter = 0;
   while(data == "error"|| counter == 6){
      data = await getDataFromServer("filter", {[type]:getValue})
      counter++;
   }
   addToPageFiltered(data);
}

document.getElementById("filter-butt").addEventListener("click",()=>{
   let type = document.getElementsByTagName("select")[0].value;
   let getValue = document.getElementsByClassName("vlnts__sort")[0].value;
   filterAPI(type, getValue);
})

let btts = document.querySelectorAll(".vlnts__pagination-cnt div");
btts.forEach((element,index)=>{
   element.addEventListener('click', ()=>{
      addToPage(index+1);
   })
})

getDataD("get_ids", {offset: lastId, limit: 50},250);



