// ===============================================
// 1. BUSCA LINEAR E BUSCA BINÁRIA
// ===============================================

console.log("=== BUSCA LINEAR ===");

// Busca Linear - O(n)
// Procura elemento por elemento até encontrar
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Retorna o índice
        }
    }
    return -1; // Não encontrado
}

const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log("Array:", numbers);
console.log("Busca linear por 25:", linearSearch(numbers, 25));
console.log("Busca linear por 99:", linearSearch(numbers, 99));

console.log("\n=== BUSCA BINÁRIA ===");

// Busca Binária - O(log n)
// REQUER array ordenado! Divide o array pela metade a cada iteração
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1; // Busca na metade direita
        } else {
            right = mid - 1; // Busca na metade esquerda
        }
    }
    
    return -1; // Não encontrado
}

const sortedNumbers = [11, 12, 22, 25, 34, 64, 90];
console.log("Array ordenado:", sortedNumbers);
console.log("Busca binária por 25:", binarySearch(sortedNumbers, 25));
console.log("Busca binária por 99:", binarySearch(sortedNumbers, 99));

// Comparação de performance
console.log("\n=== COMPARAÇÃO DE PERFORMANCE ===");
const bigArray = Array.from({length: 1000}, (_, i) => i);
const target = 750;

console.time("Busca Linear");
linearSearch(bigArray, target);
console.timeEnd("Busca Linear");

console.time("Busca Binária");
binarySearch(bigArray, target);
console.timeEnd("Busca Binária");

// ===============================================
// 2. ALGORITMOS DE ORDENAÇÃO
// ===============================================

console.log("\n=== INSERTION SORT ===");

// Insertion Sort - O(n²)
// Pega cada elemento e insere na posição correta
function insertionSort(arr) {
    const sorted = [...arr]; // Cópia para não modificar original
    
    for (let i = 1; i < sorted.length; i++) {
        let current = sorted[i];
        let j = i - 1;
        
        // Move elementos maiores para direita
        while (j >= 0 && sorted[j] > current) {
            sorted[j + 1] = sorted[j];
            j--;
        }
        
        sorted[j + 1] = current;
    }
    
    return sorted;
}

const unsorted1 = [64, 34, 25, 12, 22, 11, 90];
console.log("Original:", unsorted1);
console.log("Insertion Sort:", insertionSort(unsorted1));

console.log("\n=== MERGE SORT ===");

// Merge Sort - O(n log n)
// Divide o array até ter elementos únicos, depois une ordenadamente
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    
    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0, j = 0;
    
    // Compara elementos dos dois arrays
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    
    // Adiciona elementos restantes
    return result.concat(left.slice(i)).concat(right.slice(j));
}

const unsorted2 = [64, 34, 25, 12, 22, 11, 90];
console.log("Original:", unsorted2);
console.log("Merge Sort:", mergeSort(unsorted2));

console.log("\n=== QUICK SORT ===");

// Quick Sort - O(n log n) médio, O(n²) pior caso
// Escolhe um pivot e particiona o array
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
    
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    
    return [...quickSort(left), pivot, ...quickSort(right)];
}

const unsorted3 = [64, 34, 25, 12, 22, 11, 90];
console.log("Original:", unsorted3);
console.log("Quick Sort:", quickSort(unsorted3));

// Comparação de performance dos algoritmos
console.log("\n=== COMPARAÇÃO DE ORDENAÇÃO ===");
const bigUnsorted = Array.from({length: 1000}, () => Math.floor(Math.random() * 1000));

console.time("Insertion Sort");
insertionSort(bigUnsorted);
console.timeEnd("Insertion Sort");

console.time("Merge Sort");
mergeSort(bigUnsorted);
console.timeEnd("Merge Sort");

console.time("Quick Sort");
quickSort(bigUnsorted);
console.timeEnd("Quick Sort");

// ===============================================
// 3. RECURSÃO E BACKTRACKING
// ===============================================

console.log("\n=== RECURSÃO ===");

// Recursão básica - Factorial
function factorial(n) {
    if (n <= 1) return 1; // Caso base
    return n * factorial(n - 1); // Chamada recursiva
}

console.log("Factorial de 5:", factorial(5));

// Recursão - Fibonacci
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci de 7:", fibonacci(7));

// Fibonacci otimizado com memoização
function fibonacciMemo(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    
    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
}

console.log("Fibonacci otimizado de 30:", fibonacciMemo(30));

console.log("\n=== BACKTRACKING ===");

// Backtracking - Gerar todas as permutações
function permutations(arr) {
    const result = [];
    
    function backtrack(current, remaining) {
        if (remaining.length === 0) {
            result.push([...current]);
            return;
        }
        
        for (let i = 0; i < remaining.length; i++) {
            current.push(remaining[i]);
            const newRemaining = remaining.slice(0, i).concat(remaining.slice(i + 1));
            backtrack(current, newRemaining);
            current.pop(); // Backtrack
        }
    }
    
    backtrack([], arr);
    return result;
}

console.log("Permutações de [1,2,3]:");
console.log(permutations([1, 2, 3]));

// Backtracking - Problema das N-Rainhas (versão simplificada para 4x4)
function solveNQueens(n) {
    const result = [];
    const board = Array(n).fill().map(() => Array(n).fill('.'));
    
    function isSafe(row, col) {
        // Verifica coluna
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }
        
        // Verifica diagonal esquerda
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }
        
        // Verifica diagonal direita
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }
        
        return true;
    }
    
    function backtrack(row) {
        if (row === n) {
            result.push(board.map(row => row.join('')));
            return;
        }
        
        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                board[row][col] = 'Q';
                backtrack(row + 1);
                board[row][col] = '.'; // Backtrack
            }
        }
    }
    
    backtrack(0);
    return result;
}

console.log("Solução do problema das 4 rainhas:");
console.log(solveNQueens(4)[0]);

// ===============================================
// 4. DYNAMIC PROGRAMMING (DP)
// ===============================================

console.log("\n=== DYNAMIC PROGRAMMING ===");

// DP - Fibonacci (bottom-up)
function fibonacciDP(n) {
    if (n <= 1) return n;
    
    const dp = [0, 1];
    
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[n];
}

console.log("Fibonacci DP de 30:", fibonacciDP(30));

// DP - Problema da Mochila (0/1 Knapsack)
function knapsack(weights, values, capacity) {
    const n = weights.length;
    const dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));
    
    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(
                    values[i - 1] + dp[i - 1][w - weights[i - 1]], // Inclui item
                    dp[i - 1][w] // Não inclui item
                );
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    
    return dp[n][capacity];
}

const weights = [1, 3, 4, 5];
const values = [1, 4, 5, 7];
const capacity = 7;

console.log("Problema da mochila:");
console.log("Pesos:", weights);
console.log("Valores:", values);
console.log("Capacidade:", capacity);
console.log("Valor máximo:", knapsack(weights, values, capacity));

// DP - Maior Subsequência Comum (LCS)
function longestCommonSubsequence(text1, text2) {
    const m = text1.length;
    const n = text2.length;
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    
    return dp[m][n];
}

console.log("LCS entre 'ABCDGH' e 'AEDFHR':", longestCommonSubsequence("ABCDGH", "AEDFHR"));

// DP - Problema das Escadas
function climbStairs(n) {
    if (n <= 2) return n;
    
    const dp = [0, 1, 2];
    
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[n];
}

console.log("Maneiras de subir 5 escadas (1 ou 2 degraus por vez):", climbStairs(5));

// ===============================================
// RESUMO E COMPLEXIDADES
// ===============================================

console.log("\n=== RESUMO DAS COMPLEXIDADES ===");

const algorithmComplexities = {
    "Busca Linear": { tempo: "O(n)", espaço: "O(1)" },
    "Busca Binária": { tempo: "O(log n)", espaço: "O(1)" },
    "Insertion Sort": { tempo: "O(n²)", espaço: "O(1)" },
    "Merge Sort": { tempo: "O(n log n)", espaço: "O(n)" },
    "Quick Sort": { tempo: "O(n log n) médio", espaço: "O(log n)" },
    "Fibonacci Recursivo": { tempo: "O(2^n)", espaço: "O(n)" },
    "Fibonacci DP": { tempo: "O(n)", espaço: "O(n)" },
    "N-Queens": { tempo: "O(n!)", espaço: "O(n)" },
    "Knapsack DP": { tempo: "O(n*W)", espaço: "O(n*W)" }
};

console.table(algorithmComplexities);

console.log("\n=== QUANDO USAR CADA ALGORITMO ===");
console.log("🔍 Busca Linear: Arrays pequenos ou não ordenados");
console.log("🎯 Busca Binária: Arrays grandes e ordenados");
console.log("📊 Insertion Sort: Arrays pequenos ou quase ordenados");
console.log("🔄 Merge Sort: Quando precisa de O(n log n) garantido");
console.log("⚡ Quick Sort: Melhor performance média");
console.log("🔁 Recursão: Problemas que se dividem em subproblemas");
console.log("🎭 Backtracking: Encontrar todas as soluções possíveis");
console.log("💾 DP: Problemas com sobreposição de subproblemas");

console.log("\n=== DICAS IMPORTANTES ===");
console.log("• Busca binária só funciona em arrays ordenados");
console.log("• Merge sort é estável (mantém ordem de elementos iguais)");
console.log("• Quick sort é in-place mas não é estável");
console.log("• Recursão pode causar stack overflow em casos grandes");
console.log("• DP troca espaço por tempo (memoização)");
console.log("• Backtracking explora todas as possibilidades");