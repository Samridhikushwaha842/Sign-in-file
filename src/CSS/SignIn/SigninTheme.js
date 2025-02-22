const SigninTheme = (theme) =>({
container:{
     position: 'relative',
     minheight:"100vh",
     backgroundColor: '#ffffff'
},
formContainer:{
    width:'70%',
    height:'70vh',
    display:'flex',
    flexDirection:'row',
    marginLeft: '15%',
    marginTop: '5%',
    border: '1px solid grey',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    zIndex: 1,
},
textFieldSection:{
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    width: '50%',
    height: '100px',
    marginLeft: '70px',
    marginTop: '70px',
},
forgotPassword:{
     marginTop: 1, marginBottom: 3, color: 'black', cursor: 'pointer' 
},
loginButton: {
    backgroundColor: '#333',
    color: '#fff',
    width: '50%',
    marginLeft: '25%',
    marginTop: 3,
  },

  imageSection: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '50%',
    borderRadius: '0px 10px 10px 0px',
    alignItems: 'center',
  },

  logoImage: {
    width: '8rem',
    marginBottom: 14,
    marginLeft: 22,
  },

  logoText: {
    fontWeight: 'bold',
  },

  footerText: {
    fontSize: '12px',
    marginLeft: '40%',
    marginTop: 4,
  },
})

export default SigninTheme