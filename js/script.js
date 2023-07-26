// JavaScript Document

// ハンバーガーメニュー //
$(function () {

    $('.humberger-icon').on('click', function () { //humberger-iconをクリックしたら
        $(this).toggleClass('active'); //.humberger-iconにクラス名active追加（既に付いている場合は削除）
        $(".nav").toggleClass('active'); //.navにクラス名active追加（既に付いている場合は削除）
        $(".fullscreen-cover").toggleClass('active'); //.navにクラス名active追加（既に付いている場合は削除）
    })

    $('.nav li a').on('click', function () { //.navの中のliの中のaをクリックしたら（この対象を変えれば閉じるボタン以外のタップすれば閉じれる対象を変えれる）
        $('.nav').toggleClass('active'); //.navにクラス名active追加（既に付いている場合は削除）
        $(".humberger-icon").toggleClass('active'); //.humberger-iconにクラス名active追加（既に付いている場合は削除）
        $(".fullscreen-cover").toggleClass('active'); //.navにクラス名active追加（既に付いている場合は削除）
    })

    $('.fullscreen-cover').on('click', function () { //humberger-iconをクリックしたら
        $(this).toggleClass('active'); //.humberger-iconにクラス名active追加（既に付いている場合は削除）
        $(".nav").toggleClass('active'); //.navにクラス名active追加（既に付いている場合は削除）
        $(".humberger-icon").toggleClass('active'); //.navにクラス名active追加（既に付いている場合は削除）
    })

});
