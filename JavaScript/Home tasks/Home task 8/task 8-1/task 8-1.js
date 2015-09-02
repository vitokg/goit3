//создание объекта
var ladder = {

    //установка свойства и его начального значения - 0
    step: 0,

    //создание свойства и его значения, которое увеличивает счетчик на 1
    up: function(){

        //увеличение счетчика на 1
        this.step++;

        //возврат текущего объекта
        return this;
    },

    //создание свойства и его значения, которое уменьшает счетчик на 1
    down: function(){

        //уменьшение счетчика на 1
        this.step--;

        //возврат текущего объекта
        return this;
    },
    //создание свойства и его значения, которое выводит показание счетчика
    showStep: function(){

        //вывод показаний счетчика
        alert(this.step);

        //возврат текущего объекта
        return this;
    }
};

//запуск методов объекта
ladder.up().up().down().showStep();

