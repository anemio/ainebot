if (text.includes("!tulis")){
  const teks = text.replace(/!tulis /, "")
axios.get(`https://st4rz.herokuapp.com/api/nulis?text=${teks}`).then((res) => {
    let hasil = `Download sendiri ya hasilnya dibawah, soalnya kalo dikirim langsung hasilnya blur\n\n${res.data.result.data}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
