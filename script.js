// Função para gerar senha aleatória
function generatePassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

// Manipulando os elementos da página
document.getElementById("generate").addEventListener("click", function() {
    const length = document.getElementById("length").value;
    document.getElementById("password").value = generatePassword(length);
});

// Função para copiar senha
document.getElementById("copy").addEventListener("click", function() {
    const passwordField = document.getElementById("password");
    passwordField.select();
    document.execCommand("copy");
    alert("🔥 Senha copiada para a área de transferência! 🔥");
});

// Função para tocar música
document.getElementById("playMusic").addEventListener("click", function() {
    const music = document.getElementById("music");
    music.play();
});

// Função para pausar música
document.getElementById("pauseMusic").addEventListener("click", function() {
    const music = document.getElementById("music");
    music.pause();
});