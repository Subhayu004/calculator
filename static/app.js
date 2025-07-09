 let currentInput = '0';
        let previousInput = '';
        let operator = '';
        let shouldResetDisplay = false;
        let history = [];

        const currentDisplay = document.getElementById('currentDisplay');
        const previousDisplay = document.getElementById('previousDisplay');
        const historyModal = document.getElementById('historyModal');
        const historyList = document.getElementById('historyList');

        function updateDisplay() {
            currentDisplay.textContent = currentInput;
            previousDisplay.textContent = previousInput + ' ' + (operator ? getOperatorSymbol(operator) : '');
        }

        function getOperatorSymbol(op) {
            const symbols = {
                '+': '+',
                '-': '−',
                '*': '×',
                '/': '÷',
                '%': '%'
            };
            return symbols[op] || op;
        }

        function inputNumber(num) {
            if (shouldResetDisplay) {
                currentInput = num;
                shouldResetDisplay = false;
            } else {
                currentInput = currentInput === '0' ? num : currentInput + num;
            }
            updateDisplay();
        }

        function inputOperator(op) {
            if (operator && !shouldResetDisplay) {
                calculate();
            }
            
            operator = op;
            previousInput = currentInput;
            shouldResetDisplay = true;
            updateDisplay();
        }

        function calculate() {
            if (!operator || shouldResetDisplay) return;

            const prev = parseFloat(previousInput);
            const current = parseFloat(currentInput);
            let result;

            switch (operator) {
                case '+':
                    result = prev + current;
                    break;
                case '-':
                    result = prev - current;
                    break;
                case '*':
                    result = prev * current;
                    break;
                case '/':
                    if (current === 0) {
                        alert('Cannot divide by zero!');
                        return;
                    }
                    result = prev / current;
                    break;
                case '%':
                    result = prev % current;
                    break;
                default:
                    return;
            }

            // Save to history
            const calculation = {
                expression: `${previousInput} ${getOperatorSymbol(operator)} ${currentInput}`,
                result: result,
                timestamp: new Date().toLocaleString()
            };
            history.unshift(calculation);
            
            // Keep only last 50 calculations
            if (history.length > 50) {
                history = history.slice(0, 50);
            }

            currentInput = result.toString();
            operator = '';
            previousInput = '';
            shouldResetDisplay = true;
            updateDisplay();
        }

        function clearAll() {
            currentInput = '0';
            previousInput = '';
            operator = '';
            shouldResetDisplay = false;
            updateDisplay();
        }

        function backspace() {
            if (currentInput.length > 1) {
                currentInput = currentInput.slice(0, -1);
            } else {
                currentInput = '0';
            }
            updateDisplay();
        }

        function showHistory() {
            renderHistory();
            historyModal.style.display = 'flex';
        }

        function closeHistory() {
            historyModal.style.display = 'none';
        }

        function renderHistory() {
            if (history.length === 0) {
                historyList.innerHTML = '<div class="empty-history">No calculations yet!</div>';
                return;
            }

            historyList.innerHTML = history.map(item => `
                <div class="history-item" onclick="useHistoryResult('${item.result}')">
                    <div class="history-expression">${item.expression}</div>
                    <div class="history-result">= ${item.result}</div>
                </div>
            `).join('');
        }

        function useHistoryResult(result) {
            currentInput = result;
            operator = '';
            previousInput = '';
            shouldResetDisplay = true;
            updateDisplay();
            closeHistory();
        }

        function clearHistory() {
            history = [];
            renderHistory();
        }

        // Close modal when clicking outside
        historyModal.addEventListener('click', (e) => {
            if (e.target === historyModal) {
                closeHistory();
            }
        });

        // Keyboard support
        document.addEventListener('keydown', (e) => {
            if (e.key >= '0' && e.key <= '9') {
                inputNumber(e.key);
            } else if (e.key === '.') {
                inputNumber('.');
            } else if (['+', '-', '*', '/', '%'].includes(e.key)) {
                inputOperator(e.key);
            } else if (e.key === 'Enter' || e.key === '=') {
                calculate();
            } else if (e.key === 'Escape') {
                clearAll();
            } else if (e.key === 'Backspace') {
                backspace();
            }
        });

        // Initialize display
        updateDisplay();