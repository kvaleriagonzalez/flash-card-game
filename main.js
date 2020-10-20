$(document).ready(function () {
    // card flip effect was created by Hirok Banik

    let stack = document.querySelector(".stack");

    [...stack.children].reverse().forEach(i => stack.append(i));

    stack.addEventListener("click", swap);

    function swap(e) {
        let card = document.querySelector(".card:last-child");
        if (e.target !== card) return;
        card.style.animation = "swap 700ms forwards";
        $('p').empty();
        $(".wrong").show().css('backgroundColor', 'whitesmoke');
        setTimeout(() => {
            card.style.animation = "";
            stack.prepend(card);
        }, 700);
    }


    $('.answer').on('click', function () {
        $('p').text("Correct answer").css ('font-size', '20px')
        

    });

    $('.answer').on('click', event => {
        $(".wrong").hide();

    })

    $('.wrong').on('click', function () {
        $(this).css('backgroundColor', 'rgba(255, 117, 107, 0.68)');
        alert(`Wrong answer`)

    });

    const juno = 'Created at Juno College';
    console.log(`${juno}.`)

});