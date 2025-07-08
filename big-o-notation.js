// ========================================
// ALGORITMOS POR COMPLEXIDADE BIG-O
// ========================================

// ========================================
// O(1) - CONSTANTE
// ========================================

// Acessar elemento do array - sempre 1 operação
function acessarPrimeiro(array) {
    return array[0];
}

// Inserir no início do array
function inserirInicio(array, valor) {
    array.unshift(valor);
}

// Acessar propriedade de objeto (hash table lookup)
function buscarPorId(objeto, id) {
    return objeto[id];
}

// ========================================
// O(log n) - LOGARÍTMICA
// ========================================

// Busca binária - divide o problema pela metade a cada iteração
function buscaBinaria(array, alvo) {
    let esquerda = 0;
    let direita = array.length - 1;
    
    while (esquerda <= direita) {
        const meio = Math.floor((esquerda + direita) / 2);
        
        if (array[meio] === alvo) {
            return meio;
        } else if (array[meio] < alvo) {
            esquerda = meio + 1;
        } else {
            direita = meio - 1;
        }
    }
    return -1;
}

// Árvore binária - busca (divide pela metade a cada nível)
function buscarArvore(raiz, valor) {
    if (!raiz || raiz.valor === valor) {
        return raiz;
    }
    
    if (valor < raiz.valor) {
        return buscarArvore(raiz.esquerda, valor);
    } else {
        return buscarArvore(raiz.direita, valor);
    }
}

// ========================================
// O(n) - LINEAR
// ========================================

// Busca linear - percorre toda a lista no pior caso
function buscaLinear(array, alvo) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === alvo) {
            return i;
        }
    }
    return -1;
}

// Encontrar máximo - precisa verificar todos os elementos
function encontrarMax(array) {
    let maximo = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maximo) {
            maximo = array[i];
        }
    }
    return maximo;
}

// Somar elementos - processa cada elemento uma vez
function somarArray(array) {
    let total = 0;
    for (const item of array) {
        total += item;
    }
    return total;
}

// Reverter array - visita cada elemento uma vez
function reverterArray(array) {
    const resultado = [];
    for (let i = array.length - 1; i >= 0; i--) {
        resultado.push(array[i]);
    }
    return resultado;
}

// ========================================
// O(n log n) - LINEARÍTMICA
// ========================================

// Merge Sort - divide (log n) e conquista (n) a cada nível
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    
    const meio = Math.floor(array.length / 2);
    const esquerda = mergeSort(array.slice(0, meio));
    const direita = mergeSort(array.slice(meio));
    
    return merge(esquerda, direita);
}

function merge(esquerda, direita) {
    const resultado = [];
    let i = 0, j = 0;
    
    while (i < esquerda.length && j < direita.length) {
        if (esquerda[i] <= direita[j]) {
            resultado.push(esquerda[i]);
            i++;
        } else {
            resultado.push(direita[j]);
            j++;
        }
    }
    
    return resultado.concat(esquerda.slice(i)).concat(direita.slice(j));
}

// Quick Sort - caso médio O(n log n), pior caso O(n²)
function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }
    
    const pivot = array[Math.floor(array.length / 2)];
    const menores = array.filter(x => x < pivot);
    const iguais = array.filter(x => x === pivot);
    const maiores = array.filter(x => x > pivot);
    
    return [...quickSort(menores), ...iguais, ...quickSort(maiores)];
}

// Ordenação nativa do JavaScript (usa Timsort)
function ordenarNativo(array) {
    return array.sort((a, b) => a - b);
}

// ========================================
// O(n²) - QUADRÁTICA
// ========================================

// Bubble Sort - compara elementos adjacentes (n * n comparações)
function bubbleSort(array) {
    const n = array.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
}

// Selection Sort - encontra o menor elemento a cada iteração
function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let minIdx = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIdx]) {
                minIdx = j;
            }
        }
        [array[i], array[minIdx]] = [array[minIdx], array[i]];
    }
    return array;
}

// Verificar duplicatas - força bruta (compara todos com todos)
function temDuplicatas(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                return true;
            }
        }
    }
    return false;
}

// Insertion Sort - insere cada elemento na posição correta
function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        const key = array[i];
        let j = i - 1;
        
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
    }
    return array;
}

// ========================================
// O(n³) - CÚBICA
// ========================================

// Multiplicação de matrizes naive - 3 loops aninhados
function multiplicarMatrizes(A, B) {
    const n = A.length;
    const C = Array(n).fill().map(() => Array(n).fill(0));
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    return C;
}

// Algoritmo Floyd-Warshall - menor caminho entre todos os pares
function floydWarshall(grafo) {
    const n = grafo.length;
    const dist = grafo.map(row => [...row]);
    
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
            }
        }
    }
    return dist;
}

// Três loops aninhados - gera todas as combinações de 3 elementos
function triplaAninhada(array) {
    const resultado = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            for (let k = 0; k < array.length; k++) {
                resultado.push([array[i], array[j], array[k]]);
            }
        }
    }
    return resultado;
}

// ========================================
// O(2ⁿ) - EXPONENCIAL
// ========================================

// Fibonacci recursivo - cada chamada gera 2 novas chamadas
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Problema da mochila - força bruta (incluir ou não incluir cada item)
function mochilaRecursiva(pesos, valores, capacidade, n) {
    if (n === 0 || capacidade === 0) {
        return 0;
    }
    
    if (pesos[n - 1] > capacidade) {
        return mochilaRecursiva(pesos, valores, capacidade, n - 1);
    } else {
        const incluir = valores[n - 1] + mochilaRecursiva(pesos, valores, capacidade - pesos[n - 1], n - 1);
        const excluir = mochilaRecursiva(pesos, valores, capacidade, n - 1);
        return Math.max(incluir, excluir);
    }
}

// Subconjuntos (powerset) - para cada elemento: incluir ou não incluir
function gerarSubconjuntos(conjunto) {
    if (conjunto.length === 0) {
        return [[]];
    }
    
    const [primeiro, ...resto] = conjunto;
    const subconjuntosResto = gerarSubconjuntos(resto);
    
    return [
        ...subconjuntosResto,
        ...subconjuntosResto.map(sub => [primeiro, ...sub])
    ];
}

// Torres de Hanói - cada movimento gera 2 subproblemas
function torresHanoi(n, origem, destino, auxiliar) {
    if (n === 1) {
        console.log(`Mover disco 1 de ${origem} para ${destino}`);
        return;
    }
    
    torresHanoi(n - 1, origem, auxiliar, destino);
    console.log(`Mover disco ${n} de ${origem} para ${destino}`);
    torresHanoi(n - 1, auxiliar, destino, origem);
}

// ========================================
// O(n!) - FATORIAL
// ========================================

// Gerar todas as permutações - n! possibilidades
function gerarPermutacoes(array) {
    if (array.length <= 1) {
        return [array];
    }
    
    const resultado = [];
    for (let i = 0; i < array.length; i++) {
        const resto = [...array.slice(0, i), ...array.slice(i + 1)];
        const permutacoesResto = gerarPermutacoes(resto);
        
        for (const perm of permutacoesResto) {
            resultado.push([array[i], ...perm]);
        }
    }
    return resultado;
}

// Problema do caixeiro viajante - força bruta (testa todas as rotas)
function caixeiroViajante(cidades, distancias) {
    const permutacoes = gerarPermutacoes(cidades);
    let melhorDistancia = Infinity;
    let melhorRota = null;
    
    for (const rota of permutacoes) {
        const distancia = calcularDistanciaTotal(rota, distancias);
        if (distancia < melhorDistancia) {
            melhorDistancia = distancia;
            melhorRota = rota;
        }
    }
    
    return { rota: melhorRota, distancia: melhorDistancia };
}

function calcularDistanciaTotal(rota, distancias) {
    let total = 0;
    for (let i = 0; i < rota.length - 1; i++) {
        total += distancias[rota[i]][rota[i + 1]];
    }
    // Voltar para o início
    total += distancias[rota[rota.length - 1]][rota[0]];
    return total;
}

// ========================================
// EXEMPLO PRÁTICO DE COMPARAÇÃO
// ========================================

// Diferentes formas de encontrar duplicatas

// O(n²) - Força bruta - compara todos os elementos
function temDuplicatasLento(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) return true;
        }
    }
    return false;
}

// O(n) - Usando Set - hash table lookup
function temDuplicatasRapido(array) {
    const vistos = new Set();
    for (const item of array) {
        if (vistos.has(item)) return true;
        vistos.add(item);
    }
    return false;
}

// O(n log n) - Ordenar primeiro, depois comparar adjacentes
function temDuplicatasOrdenado(array) {
    const sorted = [...array].sort();
    for (let i = 0; i < sorted.length - 1; i++) {
        if (sorted[i] === sorted[i + 1]) return true;
    }
    return false;
}

// ========================================
// TESTE DE PERFORMANCE
// ========================================

// Função para testar performance dos algoritmos
function testarPerformance() {
    const testArray = Array.from({length: 10000}, (_, i) => i);
    
    console.log('=== TESTE DE PERFORMANCE ===');
    
    console.time('O(n²) - Força bruta');
    temDuplicatasLento(testArray);
    console.timeEnd('O(n²) - Força bruta');
    
    console.time('O(n) - Usando Set');
    temDuplicatasRapido(testArray);
    console.timeEnd('O(n) - Usando Set');
    
    console.time('O(n log n) - Ordenar primeiro');
    temDuplicatasOrdenado(testArray);
    console.timeEnd('O(n log n) - Ordenar primeiro');
}

// ========================================
// RESUMO DAS COMPLEXIDADES
// ========================================

/*
CRESCIMENTO DAS COMPLEXIDADES:

O(1)     - Constante:     1 → 1 → 1 → 1
O(log n) - Logarítmica:   1 → 2 → 3 → 4
O(n)     - Linear:        1 → 10 → 100 → 1000
O(n log n) - Linearítmica: 1 → 20 → 300 → 4000
O(n²)    - Quadrática:    1 → 100 → 10000 → 1000000
O(n³)    - Cúbica:        1 → 1000 → 1000000 → 1000000000
O(2ⁿ)    - Exponencial:   1 → 1024 → 2^100 → 2^1000
O(n!)    - Fatorial:      1 → 3628800 → 100! → 1000!

DICAS:
- Evite O(2ⁿ) e O(n!) sempre que possível
- O(n²) é aceitável para datasets pequenos
- Prefira O(n log n) para ordenação
- Use O(n) com hash tables (Set, Map) quando possível
- O(log n) é excelente para buscas em dados ordenados
*/