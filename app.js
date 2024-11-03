const messsages = [
    {senderId:111,receiverId:222,content:'Hi bondhu',createdAt:'12-3-2024'},
    {senderId:111,receiverId:222,content:'Kamon acho',createdAt:'12-3-2024'},
    {senderId:111,receiverId:222,content:'Tumi Eakhon ki karo',createdAt:'12-3-2024'},
    {senderId:222,receiverId:111,content:'hlw',createdAt:'12-3-2024'},
    {senderId:222,receiverId:111,content:'Alhamdulillah valoy u?',createdAt:'12-3-2024'},
    {senderId:222,receiverId:111,content:'Ami bose aci?',createdAt:'12-3-2024'},
    {senderId:111,receiverId:222,content:'Ami bose aci?',createdAt:'12-3-2024'},
    {senderId:111,receiverId:222,content:'Kno Job karo ki',createdAt:'12-3-2024'},
    {senderId:111,receiverId:222,content:'Goto 2 month age ami ekta job peyecilam',createdAt:'12-3-2024'},
    {senderId:222,receiverId:111,content:'Oi job ki eakhono continue kartaco?',createdAt:'12-3-2024'},
    {senderId:111,receiverId:222,content:'Hea choltaci',createdAt:'12-3-2024'},
    {senderId:111,receiverId:222,content:'Valoy salary day',createdAt:'12-3-2024'},
    {senderId:222,receiverId:111,content:'Jak alhamdulillah',createdAt:'12-3-2024'},
    {senderId:111,receiverId:222,content:'Jak alhamdulillah',createdAt:'12-3-2024'},
]
const groupMessagesBysender =(messsages) => {
   if (messsages?.length === 0) return ['No  Message found']
   const groupedMessages = [];
   let currentGroup = [messsages[0]]
    for (let i = 1; i < messsages.length; i++) {

       const prevMessage = messsages[i-1];
       const currentMessage = messsages[i];
       if (currentMessage.senderId === prevMessage.senderId) {
        currentGroup.push(currentMessage)
       } else {
        groupedMessages.push(currentGroup)
        currentGroup = [currentMessage]
       }
    }
    groupedMessages.push(currentGroup)
   return  groupedMessages
}



const allMessages = groupMessagesBysender(messsages);
console.log(allMessages)

