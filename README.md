# Fishing-boat

Тони и приятели много обичали да ходят за риба, те са толкова запалени по риболова, че решават да отидат на риболов с кораб. Цената за наемане на кораба зависи от сезона и броя рибари.

<br>
Цената зависи от сезона:
<br>⦁	Цената за наем на кораба през пролетта е  3000 лв.
<br>⦁	Цената за наем на кораба през лятото и есента е  4200 лв.
<br>⦁	Цената за наем на кораба през зимата е  2600 лв.
<br>В зависимост от броя си групата ползва отстъпка:
<br>⦁	Ако групата е до 6 човека включително  –  отстъпка от 10%.
<br>⦁	Ако групата е от 7 до 11 човека включително  –  отстъпка от 15%.
<br>⦁	Ако групата е от 12 нагоре  –  отстъпка от 25%. 
<br>Рибарите ползват допълнително 5% отстъпка ако са четен брой освен ако не е есен - тогава нямат допълнителна отстъпка. 
<br>Напишете функция, която да пресмята дали рибарите ще съберат достатъчно пари. 

<br>Вход
<br>Приемат се 3 аргумента:
<br>⦁	Бюджет на групата – цяло число в интервала [1…8000]
<br>⦁	Сезон –  текст : "Spring", "Summer", "Autumn", "Winter"
<br>⦁	Брой рибари – цяло число в интервала [4…18]

<br>Изход
<br>Да се отпечата на конзолата един ред:
<br>⦁	Ако бюджетът е достатъчен:
<br>"Yes! You have {останалите пари} leva left."
<br>⦁	Ако бюджетът НЕ Е достатъчен:
<br>"Not enough money! You need {сумата, която не достига} leva."
<br>Сумите трябва да са форматирани с точност до два знака след десетичната запетая.
