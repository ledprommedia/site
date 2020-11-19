/*onload*/{
    
}
/*variables*/{
    var choosed_img=1
    var choosed_img_2=1
    var flag_1=true
}
/*functions*/{
    function lang_change(lang){
        if (lang=="ukr") {
            main_search_input.placeholder="Введіть адресу..."
            button_header_1.innerHTML="Головна"
            button_header_2.innerHTML="Про нас"
            button_header_3.innerHTML="Послуги"
            button_header_4.innerHTML="Банери "
            button_header_5.innerHTML="Умови  "

            lang_button_1.classList.remove("choosed_lang_but")
            lang_button_2.classList.add("choosed_lang_but")
        } else {
            
            main_search_input.placeholder="Введите адресс..."
            button_header_1.innerHTML="Главная"
            button_header_2.innerHTML="О нас  "
            button_header_3.innerHTML="Услуги "
            button_header_4.innerHTML="Баннеры"
            button_header_5.innerHTML="Условия"

            lang_button_2.classList.remove("choosed_lang_but")
            lang_button_1.classList.add("choosed_lang_but")
        }
    }
    function left_menu_oc(todo) {
        if (todo=="close") {
            menu_left.style.left="-50vw"
            pred_menu_left.style.left="-100vw"
        } else {
            menu_left.style.left="0vw"
            pred_menu_left.style.left="0vw"
        }
    }
    function show_hided_things(num) {
        var item=document.getElementById("hided_part_1")
        var sp1=document.getElementById("sp1")
        var sp2=document.getElementById("sp2")
        var lin=document.getElementById("buy_1")
        switch (num) {
            case 1:
                item.style.left="4vw"
                item.style.top="48vh"
                sp1.innerHTML='Адресс: Валентиновская ул. +Тракторостроителей пр.'
                sp1.style.fontSize="1.5vw"
                sp2.innerHTML='Цена: 7800/4500грн'
                item.style.opacity=1;
                choosed_img_2=1
            break;
            case 2:
                item.style.left="37vw"
                item.style.top="48vh"
                sp1.innerHTML='Гагарина, 22 пр-т, + Автовокзал'
                sp1.style.fontSize="2.5vw"
                sp2.innerHTML='Цена: 7800/4500грн'
                item.style.opacity=1;
                choosed_img_2=2
            break;
            case 3:
                item.style.left="70.5vw"
                item.style.top="48vh"
                sp1.innerHTML='Адресс: Героев Труда, 9 ул. (ТРЦ "Дафи")'
                sp1.style.fontSize="2.5vw"
                sp2.innerHTML='Цена: 10080/5640грн'
                item.style.opacity=1;
                choosed_img_2=3
            break;
            case 4:
                item.style.left="4vw"
                item.style.top="67vh"
                sp1.innerHTML='Клочковская,69 ул. + Ивановская ул.(МДК)'
                sp1.style.fontSize="2.3vw"
                sp2.innerHTML='Цена: 7800/4500грн'
                item.style.opacity=1;
                choosed_img_2=4
            break;
            case 5:
                item.style.left="37vw"
                item.style.top="67vh"
                sp1.innerHTML='Клочковская ул., + спуск Клочковский'
                sp1.style.fontSize="2.5vw"
                sp2.innerHTML='Цена: 10080/5640грн'
                item.style.opacity=1;
                choosed_img_2=5
            break;
            case 6:
                item.style.left="70.5vw"
                item.style.top="67vh"
                sp1.innerHTML='Московский пр-т, 47 + пл. Фейербаха'
                sp1.style.fontSize="2.5vw"
                sp2.innerHTML='Цена: 7800/4500грн'
                item.style.opacity=1;
                choosed_img_2=6
            break;

            case 7:
                item.style.left="4vw"
                item.style.top="86.5vh"
                sp1.innerHTML='Адресс: Валентиновская ул. +Тракторостроителей пр.'
                sp1.style.fontSize="1.5vw"
                sp2.innerHTML='Цена: 7800/4500грн'
                item.style.opacity=1;
                choosed_img_2=7
            break;
            case 8:
                item.style.left="37vw"
                item.style.top="86.5vh"
                sp1.innerHTML='Полтавский шлях + Е.Котляра ул. (в центр)'
                sp1.style.fontSize="2.0vw"
                sp2.innerHTML='Цена: 9000/5100грн'
                item.style.opacity=1;
                choosed_img_2=8
            break;
            case 9:
                item.style.left="70.5vw"
                item.style.top="86.5vh"
                sp1.innerHTML='Полтавский шлях + Е.Котляра ул. (из центра)'
                sp1.style.fontSize="2.0vw"
                sp2.innerHTML='Цена: 9000/5100грн'
                item.style.opacity=1;
                choosed_img_2=9
            break;
            case 10:
                item.style.left="4vw"
                item.style.top="106vh"
                sp1.innerHTML='Силора Ковпака,30 ул. + Жилярди ул.'
                sp1.style.fontSize="2.3vw"
                sp2.innerHTML='Цена: 9360/5280грн'
                item.style.opacity=1;
                choosed_img_2=10
            break;
            case 11:
                item.style.left="37vw"
                item.style.top="106vh"
                sp1.innerHTML='Сумская,39 ул. + пл. Свободы'
                sp1.style.fontSize="2.5vw"
                sp2.innerHTML='Цена: 20400/10080грн'
                item.style.opacity=1;
                choosed_img_2=11
            break;
            case 12:
                item.style.left="70.5vw"
                item.style.top="106vh"
                sp1.innerHTML='Адресс: Нет информации'
                sp1.style.fontSize="2.5vw"
                sp2.innerHTML='Цена: Нет информации'
                item.style.opacity=1;
                choosed_img_2=12
            break;
        
            default:
                alert("Ошибка №2")
                break;
        }
    }
    function present_ban(bool) {
        button_1=document.getElementById("presents_button")
        button_2=document.getElementById("buy_2")
        text_1=document.getElementById("buy_1")
        switch (bool) {
            case true:
                button_1.style.backgroundColor="rgb(46, 174, 212)"
                button_1.innderHTML="Реклама на баннерах"
                button_2.style.backgroundColor="#f89430"
                text_1.innerHTML="Поздравить"
                flag_1=false
                console.log(flag_1+"=false")
                break;
            case false:
                button_1.style.backgroundColor="#f89430"
                button_1.innderHTML="Поздравления на баннерах"
                button_2.style.backgroundColor="rgb(46, 174, 212)"
                text_1.innerHTML="Купить"
                flag_1=true
                console.log(flag_1+"=true")
                break;
        
            default:
                alert("Ошибка №3")
                break;
        }
    }
}