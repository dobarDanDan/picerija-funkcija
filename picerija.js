// kod na jsbin-u
// https://jsbin.com/wavuyo/edit?js,console

// kada se opali funkcija takeOrder 
// orderCount se povecava za 1
let orderCount = 0;

// cena jedne pice
let cenaPice = 720;

// PDV je 20%
let stopaPoreza = 0.20;


function takeOrder(sastojak1, sastojak2) {
  orderCount = orderCount + 1;
  return 'Naruci picu ' + sastojak1 + ' ' + sastojak2

}

// kako ovo radi, odakle povlaci itemCount 
function getSubTotal(itemCount) {
  return itemCount * cenaPice
}
 

function getTax() {
  return getSubTotal(orderCount) * stopaPoreza
}

function getTotal() {
  return getSubTotal(orderCount) + getTax()
  
}

// tri narudzbine koje pokrecu celi program
console.log('Narudzbina 1:', takeOrder('kecap', 'kobasica'))
console.log('Narudzbina 2:',takeOrder('pecurke', 'sunka'))
console.log('Narudzbina 3:',takeOrder('kackavalj', 'suvo meso'))

// cena bez poreza
console.log('Cena bez poreza', getSubTotal(orderCount), 'RSD')

// porez
console.log('Iznos poreza 20% PDV', getTotal() - getSubTotal(orderCount), 'RSD')

// total
console.log('Cena sa porezom', getTotal(), 'RSD')