function toInches() {
    const cmVal = document.getElementById("valueInCm").value
    const inchVal = Number(cmVal / 2.54)
    const result = document.getElementById("result")
    result.innerHTML = inchVal.toFixed(2) + " inches"
}