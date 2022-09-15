/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertBtn = document.getElementById("convert-btn");
const deletetBtn = document.getElementById("delete-btn");
const inputField = document.getElementById("text");
const lengthValue = document.getElementById("length-value");
const volumeValue = document.getElementById("volume-value");
const massValue = document.getElementById("mass-value");

function converter() {
	const metersInFeet = (Number(inputField.value) * 3.2808).toFixed(3);
	const feetInMeters = (Number(inputField.value) / 3.281).toFixed(3);
	const literInGallon = (Number(inputField.value) / 3.785).toFixed(3);
	const gallonInLiter = (Number(inputField.value) * 3.7854).toFixed(3);
	const poundInKilogram = (Number(inputField.value) * 2.2046).toFixed(3);
	const kilogramInPound = (Number(inputField.value) / 2.2045).toFixed(3);
	lengthValue.textContent = `${inputField.value} meters = ${metersInFeet} feet | ${inputField.value} feet = ${feetInMeters} meters `;
	volumeValue.textContent = `${inputField.value} liters = ${literInGallon} gallon | ${inputField.value} gallon = ${gallonInLiter} liters `;
	massValue.textContent = `${inputField.value} kilograms = ${poundInKilogram} pounds | ${inputField.value} pounds = ${kilogramInPound} kilograms `;
}

function deleteData() {
	inputField.value = ``;
	lengthValue.textContent = ``;
	volumeValue.textContent = ``;
	massValue.textContent = ``;
}

convertBtn.addEventListener("click", converter);
deletetBtn.addEventListener("click", deleteData);
