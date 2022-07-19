/**
 * Замыкания могут применяться для простой реализации инкапсуляции, т.е. для того чтобы скрыть реализацию
 * какой-то функциональности.
 *
 * Копилка
 *
 * Реализуйте функцию MoneyBox, который будет создавать объект с двумя методами:
 * 1. addCoin - Добавляет 1 монету в копилку
 * 2. getAmount - Возвращает количество монет в копилке
 *
 * Не должно быть возможности задать количество монет напрямую, минуя метод addCoin. При создании в копилке нет монет.
 *
 * Пример:
 * const box = new MoneyBox();
 * box.getAmount(); // 0
 * box.addCoin();
 * box.addCoin();
 * box.getAmount(); // 2
 */

const MoneyBox = function() {
	let coins = 0
	this.addCoin = () => ++coins
	this.getAmount = () => coins
}
