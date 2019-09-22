function colorfulNumber(count) {
    console.log("<ul>");
    for (let i = 1; i <= count; i++) {
        let color = '';
        
        if (i % 2 === 1) {
            color = 'green';
        } else {
            color = 'blue';
        }

        console.log(`<li><span style='color: ${color}'>${i}</span></li>`)
    }
    console.log("</ul>");
}

colorfulNumber(10);