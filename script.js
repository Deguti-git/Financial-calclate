function calclate() {
  const uriage = parseFloat(document.getElementById('uriage').value);
  const keijou = parseFloat(document.getElementById('keijou').value);
  const sourieki = parseFloat(document.getElementById('sourieki').value);

  function ryudoucalc() {

    const ryudousisan = parseFloat(document.getElementById('ryudousisan').value);
    const ryudouhusai = parseFloat(document.getElementById('ryudouhusai').value);
    
    if (isNaN(ryudousisan) && isNaN(ryudouhusai)){
      document.getElementById('ryudouresult').textContent = "流動資産と流動負債を入力してください。";
      document.getElementById('ryudouasses').textContent="";
      return;
    } else if (isNaN(ryudousisan)) {
      document.getElementById('ryudouresult').textContent = '流動資産を入力してください。';
      document.getElementById('ryudouasses').textContent="";
      return;
    } else if (isNaN(ryudouhusai)) {
      document.getElementById('ryudouresult').textContent = '流動負債を入力してください。';
      document.getElementById('ryudouasses').textContent="";
      return;
    } 

    const ryudouresult=(ryudousisan/ryudouhusai)*100;
    
    let ryudouasses;
    
    if (ryudouresult >200) {
      ryudouasses=5
    } else if (ryudouresult>=150) {
      ryudouasses=4
    } else if (ryudouresult>=100) {
      ryudouasses=3
    } else if (ryudouresult>=50) {
      ryudouasses=2
    } else {
      ryudouasses=1
    }

      document.getElementById('ryudouresult').textContent = `結果: ${ryudouresult.toFixed(2)}%`;
      document.getElementById('ryudouasses').textContent=`評価:${ryudouasses}`;
      return ryudouasses;

    }

  function koteicalc() {

    const koteisisan = parseFloat(document.getElementById('koteisisan').value);
    const zikosihon = parseFloat(document.getElementById('zikosihon').value);

    if (isNaN(koteisisan) && isNaN(zikosihon)){
      document.getElementById('koteiresult').textContent = "固定資産と自己資本を入力してください。";
      document.getElementById('koteiasses').textContent="";
      return;
    } else if (isNaN(koteisisan)) {
      document.getElementById('koteiresult').textContent = '固定資産を入力してください。';
      document.getElementById('koteiasses').textContent="";
      return;
    } else if (isNaN(zikosihon)) {
      document.getElementById('koteiresult').textContent = '自己資本を入力してください。';
      document.getElementById('koteiasses').textContent="";
      return;
    } 

    const koteiresult=(koteisisan/zikosihon)*100;
    
    let koteiasses;

    if (koteiresult < 50) {
      koteiasses = 5;
    } else if (koteiresult < 100) {
        koteiasses = 4;
    } else if (koteiresult < 150) {
        koteiasses = 3;
    } else if (koteiresult < 200) {
        koteiasses = 2;
    } else {
      koteiasses = 1;
  }

      document.getElementById('koteiresult').textContent = `結果: ${koteiresult.toFixed(2)}%`;
      document.getElementById('koteiasses').textContent=`評価:${koteiasses}`;
      return koteiasses;
  }
  
  function tyoukicalc() {
    const koteisisan = parseFloat(document.getElementById('koteisisan').value);
    const zikosihon = parseFloat(document.getElementById('zikosihon').value);
    const koteihusai = parseFloat(document.getElementById('koteihusai').value);

    if (isNaN(koteisisan) && isNaN(zikosihon) && isNaN(koteihusai)) {
      document.getElementById('tyoukiresult').textContent = "固定資産、自己資本、または固定負債を入力してください。";
      document.getElementById('tyoukiasses').textContent = "";
      return;
    } else if (isNaN(koteisisan)) {
      document.getElementById('tyoukiresult').textContent = '固定資産を入力してください。';
      document.getElementById('tyoukiasses').textContent = "";
      return;
    } else if (isNaN(zikosihon)) {
      document.getElementById('tyoukiresult').textContent = '自己資本を入力してください。';
      document.getElementById('koteiasses').textContent = "";
      return;
    } else if (isNaN(koteihusai)) {
      document.getElementById('tyoukiresult').textContent = '固定負債を入力してください。';
      document.getElementById('koteiasses').textContent = "";
      return;
    } 

    const tyoukiresult=(koteisisan/(zikosihon+koteihusai))*100;
    
    let tyoukiasses;

    if (tyoukiresult <=50) {
      tyoukiasses=5
    } else if (tyoukiresult<=100) {
      tyoukiasses=4
    } else if (tyoukiresult<=150) {
      tyoukiasses=3
    } else if (tyoukiresult<=200) {
      tyoukiasses=2
    } else {
      tyoukiasses=1
    }

      document.getElementById('tyoukiresult').textContent = `結果: ${tyoukiresult.toFixed(2)}%`;
      document.getElementById('tyoukiasses').textContent=`評価:${tyoukiasses}`;
      return tyoukiasses;
  }

  function zikosihoncalc() {
    const zikosihon = parseFloat(document.getElementById('zikosihon').value);
    const sousihon = parseFloat(document.getElementById('sousihon').value);

    if (isNaN(zikosihon) && isNaN(sousihon)){
      document.getElementById('zikosihonresult').textContent = "自己資本と総資本を入力してください。";
      document.getElementById('zikosihonasses').textContent="";
      return;
    } else if (isNaN(zikosihon)) {
      document.getElementById('zikosihonresult').textContent = '自己資本を入力してください。';
      document.getElementById('zikosihonasses').textContent="";
      return;
    } else if (isNaN(sousihon)) {
      document.getElementById('zikosihonresult').textContent = '総資本を入力してください。';
      document.getElementById('zikosihonasses').textContent="";
      return;
    } 

    const zikosihonresult=(zikosihon/sousihon)*100;
    
    let zikosihonasses;

    if (zikosihonresult >200) {
      zikosihonasses=5
    } else if (zikosihonresult>=150) {
      zikosihonasses=4
    } else if (zikosihonresult>=100) {
      zikosihonasses=3
    } else if (zikosihonresult>=50) {
      zikosihonasses=2
    } else {
      zikosihonasses=1
    }

      document.getElementById('zikosihonresult').textContent = `結果: ${zikosihonresult.toFixed(2)}%`;
      document.getElementById('zikosihonasses').textContent=`評価:${zikosihonasses}`;
      return zikosihonasses;
  }

  function husaicalc() {

    const ryudouhusai = parseFloat(document.getElementById('ryudouhusai').value);
    const koteihusai = parseFloat(document.getElementById('koteihusai').value);
    const zikosihon = parseFloat(document.getElementById('zikosihon').value);

    if (isNaN(ryudouhusai) && isNaN(koteihusai) && isNaN(zikosihon)){
      document.getElementById('husairesult').textContent = "流動負債、固定負債、または自己資本を入力してください。";
      document.getElementById('husaiasses').textContent="";
      return;
    } else if (isNaN(ryudouhusai)) {
      document.getElementById('husairesult').textContent = '流動負債を入力してください。';
      document.getElementById('husaiasses').textContent="";
      return;
    } else if (isNaN(koteihusai)) {
      document.getElementById('husairesult').textContent = '固定負債を入力してください。';
      document.getElementById('husaiasses').textContent="";
      return;
    }  else if (isNaN(zikosihon)) {
      document.getElementById('husairesult').textContent = '自己資本を入力してください。';
      document.getElementById('husaiasses').textContent="";
      return;
    }

    const husairesult=((ryudouhusai+koteihusai)/zikosihon)*100;
    
    let husaiasses;

    if (husairesult <=50) {
      husaiasses=5
    } else if (husairesult<=100) {
      husaiasses=4
    } else if (husairesult<=150) {
      husaiasses=3
    } else if (husairesult<=200) {
      husaiasses=2
    } else {
      husaiasses=1
    }

      document.getElementById('husairesult').textContent = `結果: ${husairesult.toFixed(2)}%`;
      document.getElementById('husaiasses').textContent=`評価:${husaiasses}`;
      return husaiasses;
  }

  function all_asses_calc() {
    
    let ryudouasses = ryudoucalc();
    let koteiasses = koteicalc();
    let tyoukiasses = tyoukicalc();
    let zikosihonasses = zikosihoncalc();
    let husaiasses = husaicalc();
    
    if (isNaN(ryudouasses) || isNaN(koteiasses) || isNaN(tyoukiasses) || isNaN(zikosihonasses) || isNaN(husaiasses)) {
        document.getElementById('all-asses').textContent = "すべての比率を計算してください。";
        return;
    } else {
        let goukei = ryudouasses + koteiasses + tyoukiasses + zikosihonasses + husaiasses;
        let avg = goukei / 5;
        document.getElementById('all-asses').textContent = `総合評価: ${avg}`;
        return;
    }
}
  

  ryudoucalc();
  koteicalc();
  tyoukicalc();
  zikosihoncalc();
  husaicalc();
  all_asses_calc();
};

function sakujo() {
  document.getElementById("ryudousisan").value = "";
  document.getElementById("koteisisan").value = "";
  document.getElementById("ryudouhusai").value = "";
  document.getElementById("koteihusai").value = "";
  document.getElementById("zikosihon").value = "";
  document.getElementById("sousihon").value = "";
  document.getElementById("uriage").value = "";
  document.getElementById("keijou").value = "";
  document.getElementById("sourieki").value = "";
}

function openModal(title,description) {
  document.getElementById('modal-title').innerText = title;
  document.getElementById('modal-description').innerHTML = description;
  document.getElementById('modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
  if (event.target === document.getElementById('modal')) {
      closeModal();
  }
}
