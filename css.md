*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background-color: #283149;
}

.nav{
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin-top: 50px;
}

.nav li{
  display: flex;
  margin: 0 15px;
}

.nav li a{
  text-decoration: none;
  color: #fff;
  font-size: 25px;
  font-family: "Arvo", cursive;
  transition: all 0.1s ease 0s;
}

.nav li a:hover{
  transition: all .4s ease 0s;
  text-decoration: underline;
  color: blue !important;
}

h1{
  font-size: 5rem;
  color: #DBEDF3;
  font-family: "Arvo", cursive;
  text-shadow: 3px 0 #DA0463;
  text-align: center;
}

.container {
  max-width: 1536px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}


/* 2xl */
@media (max-width: 1536px) {
  .container {
    max-width: 1280px;
  }
}

/* xl */
@media (max-width: 1280px) {
  .container {
    max-width: 1024px;
  }
  h1 {
    font-size: 4.5rem;
  }
}

/* lg */
@media (max-width: 1024px) {
  .container {
    max-width: 768px;
  }
  h1 {
    font-size: 4rem;
  }
}

/* md */
@media (max-width: 768px) {
  .container {
    max-width: 640px;
  }
  .nav{
    display: flex;
    flex-direction:column-reverse;
  }
}

/* sm */
@media (max-width: 640px) {
  .container {
    max-width: 475px;
  }
}

/* xs */
@media (max-width: 475px) {
  .container {
    width: 100%;
  }
}