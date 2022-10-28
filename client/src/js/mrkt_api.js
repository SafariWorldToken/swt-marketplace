
const checkNetwork = async (chainId, m) => {
    if ( chainId != 56 ) {
          const newId = 56;
          await m.switchNetwork(newId);
          return
      }
    else {
      console.log('network okay')
    }
  }
const handleCurrentUser = async (m, p) => {
    console.log(m)
    console.log(p)
    const chainId = await p.chainId;
    checkNetwork(chainId, m)
    const user = m.User.current()
    if (user) {
      const address = user.get('ethAddress')
      console.log(user)
      console.log(address)
        return user, address
    }
  }


  export { handleCurrentUser, checkNetwork }
