function generateMeme() {
    const canvas = document.getElementById("meme-canvas");
    const ctx = canvas.getContext("2d");
    const imageInput = document.getElementById("upload").files[0];

    if (imageInput) {
        const img = new Image();
        img.src = URL.createObjectURL(imageInput);
        img.onload = () => {
            canvas.width = img.width / 2;
            canvas.height = img.height / 2;
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            const topText = document.getElementById("top-text").value;
            const bottomText = document.getElementById("bottom-text").value;
            
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText(topText, canvas.width / 2, 40);
            ctx.fillText(bottomText, canvas.width / 2, canvas.height - 20);
        };
    }
}
