const Getvenues = data=>({
    type: 'GETALLVENUES',
    payload: data,
})

export const UserID = userid=>({
    type: 'GETUSERID',
    payload: userid,
})


export default Getvenues