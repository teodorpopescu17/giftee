# giftee

### Introducere 
Giftee este un Single Page Application, realizat cu ajutorul Vue JS si are ca principal obiectiv construirea si partajarea listelor de dorinte. 

### Descriere problemă
Giftee este o aplicatie web ce vine in ajutorul persoanelor ce isi doresc sa isi organizeze lista de dorinte in preajma zilei de nastere sau a sarbatorilor. Pe langa aceasta functionalitate, Giftee ofera si posibilitatea de partajare, intr-un mod foarte rapid, a tuturor articolelor adaugate in wishlist. 

Acest lucru se intampla intr-un mod fluid, fiecare utilizator avand propriul cont, unde isi pot edita lista de dorinte, respectiv genera link-ul de partajare. Autentificarea se face intr-un mod simplu, in baza emailului si a parolei.

Articolele pot fi adaugate din cadrul unei liste comune de obiecte, iar in cazul in care acestea nu pot fi gasite, adaugarea poate fi facuta chiar de utilizator. 

### Servicii cloud 
Pentru realizarea acestei aplicatii, au fost utilizate doua API-uri oferite de Firebase:
##### 1. Cloud Firestore
Cloud Firestore este serviciul oferit de Google, ce pune la dispozitie utilizatorilor o baza de date in Cloud. 
In cadrul proiectului, Cloud Firestore a fost utilizat pentru stocarea persistenta a articolelor, dar si a utilizatorilor. 

![Firestore](https://github.com/teodorpopescu17/giftee/blob/main/firebase.png)

##### 2. Firebase Authentication
Dupa cum o sugereaza si numele, Firebase Authentication este serviciul care ofera posibilitatea de autentificare a utilizatorilor. Aceasta gestioneaza utilizatorii noi, stocarea lor in baza de date, dar si autentificarea utilizatorilor existenti.

### REST APIs
Pentru integrarea optiunii de cadouri aleatorii, au fost folosit doua API-uri: 
##### 1. random-data-api
Acest api este apelat cu ajutorul axios si aduce ca raspuns orase aleatorii. Este folosit in componenta de adaugare a unui cadou pentru generarea unei dorinte de tip Vacanta.

##### 2. Fake store api
Acest api este apelat cu ajutorul axios si aduce ca raspuns produse aleatorii. Este folosit in componenta de adaugare a unui cadou pentru generarea unei dorinte de tip obiect.

Pe langa aceste doua API-uri, interactiunea cu baza de date se face printr-un server node, realizat cu express si apelat la randul sau prin axios. 

### Flux de date
Utilizatorul interactioneaza pentru prima data cu aplicatia in momentul autentificarii. Daca acesta nu are deja un cont, isi poate crea unul pe baza unui email, a numelui si a unei parole. In monmentul crearii contului, parola este stocata in baza de data in mod securizat  cu ajutorul *bcrypt*.
Dupa autentificare, va fi afisata pagina cu lista de dorinte a utilizatorului, care initial va fi goala. Aceasta poate fi populata accesand butonul adauga. 
Butonul adauga va deschide o lista comuna cu obiecte deja existente in baza de date, de unde utilizatorul isi poate alege. In cazul in care nimic existe nu se pliaza pe dorintele utilizatorului, acesta poate adauga el insusi obiectul dorit. 
Odata ce lista de dorinte este completa, utilizatorul poate genera un URL, ce serveste la partajarea listei de dorinte. 

Acest flux de date este asigurat de comunicare constanta dintre backend si frontend. Pentru a putea face posibila aceasta interschimbare de date, apelurile din frontend au fost realizate cu ajutorul *axios* si gestionate in backend cu ajutorul *express.js*.

Un astfel de schimb cerere-raspuns poate fi afisarea listei de dorinte a unui utilizator, in cadrul careia se foloseste metoda *get*:
```
 axios.get(`https://giftee-cards.herokuapp.com/user/${userId.value}`)
    .then( res => { this.user = res.data;})
    .catch( error => console.log(error.response.data));
```
care va fi redirectionata de catre routerul express 
``` router.get("/user/:id", getUser);```
catre metoda ce va face apelul catre baza de date:
```
const getUser = async(req, res) => {
  let id = req.params.id;
  await db.collection("users").doc(id).get()
  .then(async function(doc) {
    const user = await buildUser(doc.data());
    res.status(200).send(user);
  })
  .catch(error => {
    res.status(404).send("Not found" + error);
  });
}
```

Inregistrarea se relizeaza apeland API-ul pus la dispozitie de Firebase, dupa cum urmeaza: 
```
auth()
  .createUser({email, password, displayName: name})
  .then(user => addUser(user.uid, email, name, hash, res))
  .catch(error => res.status(500).send(error.message));
 ```

### Publicarea
Aplicatia a fost publicata folosind heroku si poate fi accesata la adresa: https://giftee-cards.herokuapp.com/

### Rularea locala
Pentru a rula acest proiect local, sunt necesari urmatorii pasi:
```
git clone this repository
cd giftee
npm install
npm start
```
Project is running on port 500 -> http://localhost:5000/

### Referinte: 
1. https://firebase.google.com/docs/firestore
2. https://firebase.google.com/docs/auth
3. https://www.npmjs.com/package/bcrypt
4. https://www.npmjs.com/package/axios
5. https://www.npmjs.com/package/express

### Capturi de ecran
#### Autentificare 
![Autentificare](https://github.com/teodorpopescu17/giftee/blob/main/auth.png)

#### Wishlist 
![Wishlist](https://github.com/teodorpopescu17/giftee/blob/main/wishlist.png)

#### Adaugare articol
![Adaugare](https://github.com/teodorpopescu17/giftee/blob/main/add.png)

