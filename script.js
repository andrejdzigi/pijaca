let total = 0;

let krompir_recenica = document.querySelector('#krompir-recenica');
let paradajz_recennica = document.querySelector('#paradajz-recenica');
let sargarepa_recenica = document.querySelector('#sargarepa-recenica');
let span = document.querySelector('span');

let krompir_kolicina = document.querySelector('#krompir-kolicina');
let paradajz_kolicina = document.querySelector('#paradajz-kolicina');
let sargarepa_kolicina = document.querySelector('#sargarepa-kolicina');

let krompir = 0;
let paradajz = 0;
let sargarepa = 0;

function dodaj_u_korpu(dugme){
    let krompir_cena = 10;
    let paradajz_cena = 20;
    let sargarepa_cena = 30;

    let dugme_ukloni_paradajz = document.querySelector('.ukloni-paradajz');
    let dugme_ukloni_krompir = document.querySelector('.ukloni-krompir');
    let dugme_ukloni_sargarepu = document.querySelector('.ukloni-sargarepu');

    if(dugme.className == 'paradajz1' && paradajz_kolicina.value > 0){
        paradajz += paradajz_kolicina.value * paradajz_cena;
        paradajz_recennica.innerText = `Paradajz $${paradajz_cena} x ${paradajz_kolicina.value} = $${paradajz}`;
        total += paradajz;
        span.innerText = `$${total}`;
        dugme.disabled = 'true';
        dugme.value = 'Dodato';
        dugme_ukloni_paradajz.style.display = 'inline-block';
    }else if(dugme.className == 'sargarepa1' && sargarepa_kolicina.value > 0){
        sargarepa += sargarepa_cena*sargarepa_kolicina.value;
        sargarepa_recenica.innerText = `Sargarepa $${sargarepa_cena} x ${sargarepa_kolicina.value} = $${sargarepa}`;
        total += sargarepa;
        span.innerText = `$${total}`;
        dugme.disabled = 'true';
        dugme.value = 'Dodato';
        dugme_ukloni_sargarepu.style.display = 'inline-block';
    }else if(dugme.className == 'krompir1' && krompir_kolicina.value > 0){
        krompir = krompir_cena * krompir_kolicina.value;
        krompir_recenica.innerText =`Krompir $${krompir_cena} x ${krompir_kolicina.value} = $${krompir}`;
        total += krompir;
        span.innerText = `$${total}`;
        dugme.disabled = 'true';
        dugme.value = 'Dodato';
        dugme_ukloni_krompir.style.display = 'inline-block';
        dugme.style.backgroundColor = 'grey';
        dugme.style.cursor = 'default';
    }
}

function ukloni(dugme){
    let dugmeKrompir = document.querySelector('.krompir1');
    let dugmeParadajz = document.querySelector('.paradajz1');
    let dugmeSargarepa = document.querySelector('.sargarepa1');

    if(dugme.className == 'ukloni-krompir'){
        dugme.style.display = 'none';
        dugmeKrompir.style.backgroundColor = 'transparent';
        dugmeKrompir.style.cursor = 'pointer';
        dugmeKrompir.disabled = false;
        krompir_recenica.innerText = '';
        krompir_kolicina.value = 0;
        dugmeKrompir.value = 'Dodaj';
        total -= krompir;
        span.innerText = `$${total}`;
        krompir = 0;
    }else if(dugme.className == 'ukloni-paradajz'){
        dugme.style.display = 'none';
        dugmeParadajz.style.backgroundColor = 'transparent';
        dugmeParadajz.style.cursor = 'pointer';
        dugmeParadajz.disabled = false;
        paradajz_recennica.innerText = '';
        paradajz_kolicina.value = 0;
        dugmeParadajz.value = 'Dodaj';
        total -= paradajz;
        span.innerText = `$${total}`;
        paradajz = 0;
    }else if(dugme.className == 'ukloni-sargarepu'){
        dugme.style.display = 'none';
        dugmeSargarepa.style.backgroundColor = 'transparent';
        dugmeSargarepa.style.cursor = 'pointer';
        dugmeSargarepa.disabled = false;
        sargarepa_recenica.innerText = '';
        sargarepa_kolicina.value = 0;
        dugmeSargarepa.value = 'Dodaj';
        total -= sargarepa;
        span.innerText = `$${total}`;
        sargarepa = 0;
    }
}