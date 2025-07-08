// ================================
// 1. ARRAYS / LISTAS
// ================================

console.log("=== ARRAYS / LISTAS ===");

// Criação e operações básicas
const arr = [1, 2, 3, 4, 5];
console.log("Array original:", arr);

// Principais métodos
arr.push(6);           // Adiciona no final
arr.unshift(0);        // Adiciona no início
arr.pop();             // Remove do final
arr.shift();           // Remove do início
console.log("Após operações:", arr);

// Busca e acesso
console.log("Elemento no índice 2:", arr[2]);
console.log("Índice do elemento 3:", arr.indexOf(3));
console.log("Contém 4?", arr.includes(4));

// Iteração
arr.forEach((item, index) => console.log(`${index}: ${item}`));

// Métodos funcionais
const doubled = arr.map(x => x * 2);
const evens = arr.filter(x => x % 2 === 0);
const sum = arr.reduce((acc, curr) => acc + curr, 0);

console.log("Dobrados:", doubled);
console.log("Pares:", evens);
console.log("Soma:", sum);

// ================================
// 2. HASHMAPS / HASHSETS
// ================================

console.log("\n=== HASHMAPS / HASHSETS ===");

// HashMap usando Map
const hashMap = new Map();
hashMap.set("nome", "João");
hashMap.set("idade", 30);
hashMap.set("cidade", "São Paulo");

console.log("HashMap:", hashMap);
console.log("Nome:", hashMap.get("nome"));
console.log("Tem idade?", hashMap.has("idade"));
console.log("Tamanho:", hashMap.size);

// Iteração
for (const [key, value] of hashMap) {
    console.log(`${key}: ${value}`);
}

// HashMap usando Object
const objMap = {
    nome: "Maria",
    idade: 25,
    cidade: "Rio de Janeiro"
};

console.log("Object como HashMap:", objMap);
console.log("Chaves:", Object.keys(objMap));
console.log("Valores:", Object.values(objMap));

// HashSet usando Set
const hashSet = new Set([1, 2, 3, 4, 5]);
hashSet.add(6);
hashSet.add(3); // Duplicata ignorada
hashSet.delete(1);

console.log("HashSet:", hashSet);
console.log("Tem 3?", hashSet.has(3));
console.log("Tamanho:", hashSet.size);

// ================================
// 3. PILHAS (STACKS) E FILAS (QUEUES)
// ================================

console.log("\n=== PILHAS (STACKS) ===");

// Stack - LIFO (Last In, First Out)
class Stack {
    constructor() {
        this.items = [];
    }
    
    push(item) {
        this.items.push(item);
    }
    
    pop() {
        return this.items.pop();
    }
    
    peek() {
        return this.items[this.items.length - 1];
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
    
    size() {
        return this.items.length;
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log("Stack:", stack.items);
console.log("Pop:", stack.pop());
console.log("Peek:", stack.peek());
console.log("Tamanho:", stack.size());

console.log("\n=== FILAS (QUEUES) ===");

// Queue - FIFO (First In, First Out)
class Queue {
    constructor() {
        this.items = [];
    }
    
    enqueue(item) {
        this.items.push(item);
    }
    
    dequeue() {
        return this.items.shift();
    }
    
    front() {
        return this.items[0];
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
    
    size() {
        return this.items.length;
    }
}

const queue = new Queue();
queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");

console.log("Queue:", queue.items);
console.log("Dequeue:", queue.dequeue());
console.log("Front:", queue.front());
console.log("Tamanho:", queue.size());

// ================================
// 4. ÁRVORES E ÁRVORES BINÁRIAS
// ================================

console.log("\n=== ÁRVORES BINÁRIAS ===");

// Nó da árvore binária
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Árvore binária de busca
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    
    insert(val) {
        this.root = this.insertNode(this.root, val);
    }
    
    insertNode(node, val) {
        if (node === null) {
            return new TreeNode(val);
        }
        
        if (val < node.val) {
            node.left = this.insertNode(node.left, val);
        } else {
            node.right = this.insertNode(node.right, val);
        }
        
        return node;
    }
    
    search(val) {
        return this.searchNode(this.root, val);
    }
    
    searchNode(node, val) {
        if (node === null) return false;
        if (val === node.val) return true;
        
        if (val < node.val) {
            return this.searchNode(node.left, val);
        } else {
            return this.searchNode(node.right, val);
        }
    }
    
    // Traversal em ordem
    inOrder(node = this.root, result = []) {
        if (node !== null) {
            this.inOrder(node.left, result);
            result.push(node.val);
            this.inOrder(node.right, result);
        }
        return result;
    }
    
    // Encontrar altura
    height(node = this.root) {
        if (node === null) return 0;
        return 1 + Math.max(this.height(node.left), this.height(node.right));
    }
}

const bst = new BinarySearchTree();
[5, 3, 7, 2, 4, 6, 8].forEach(val => bst.insert(val));

console.log("Árvore em ordem:", bst.inOrder());
console.log("Busca por 4:", bst.search(4));
console.log("Busca por 10:", bst.search(10));
console.log("Altura da árvore:", bst.height());

// ================================
// 5. LISTAS LIGADAS (LINKED LISTS)
// ================================

console.log("\n=== LISTAS LIGADAS ===");

// Nó da lista ligada
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Lista ligada simples
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    
    // Adicionar no início
    prepend(val) {
        this.head = new ListNode(val, this.head);
        this.size++;
    }
    
    // Adicionar no final
    append(val) {
        const newNode = new ListNode(val);
        
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }
    
    // Remover por valor
    remove(val) {
        if (!this.head) return false;
        
        if (this.head.val === val) {
            this.head = this.head.next;
            this.size--;
            return true;
        }
        
        let current = this.head;
        while (current.next && current.next.val !== val) {
            current = current.next;
        }
        
        if (current.next) {
            current.next = current.next.next;
            this.size--;
            return true;
        }
        
        return false;
    }
    
    // Buscar
    find(val) {
        let current = this.head;
        while (current) {
            if (current.val === val) return current;
            current = current.next;
        }
        return null;
    }
    
    // Converter para array
    toArray() {
        const result = [];
        let current = this.head;
        while (current) {
            result.push(current.val);
            current = current.next;
        }
        return result;
    }
    
    getSize() {
        return this.size;
    }
}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.prepend(0);

console.log("Lista ligada:", linkedList.toArray());
console.log("Tamanho:", linkedList.getSize());
console.log("Buscar 2:", linkedList.find(2));
linkedList.remove(2);
console.log("Após remover 2:", linkedList.toArray());

// ================================
// 6. GRAFOS
// ================================

console.log("\n=== GRAFOS ===");

// Grafo usando lista de adjacência
class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }
    
    // Adicionar vértice
    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }
    
    // Adicionar aresta
    addEdge(vertex1, vertex2) {
        this.addVertex(vertex1);
        this.addVertex(vertex2);
        
        this.adjacencyList.get(vertex1).push(vertex2);
        this.adjacencyList.get(vertex2).push(vertex1); // Grafo não direcionado
    }
    
    // Remover aresta
    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList.has(vertex1)) {
            this.adjacencyList.set(vertex1, 
                this.adjacencyList.get(vertex1).filter(v => v !== vertex2)
            );
        }
        
        if (this.adjacencyList.has(vertex2)) {
            this.adjacencyList.set(vertex2, 
                this.adjacencyList.get(vertex2).filter(v => v !== vertex1)
            );
        }
    }
    
    // Busca em profundidade (DFS)
    dfs(start, visited = new Set()) {
        visited.add(start);
        console.log(`Visitando: ${start}`);
        
        const neighbors = this.adjacencyList.get(start) || [];
        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                this.dfs(neighbor, visited);
            }
        }
        
        return visited;
    }
    
    // Busca em largura (BFS)
    bfs(start) {
        const visited = new Set();
        const queue = [start];
        const result = [];
        
        visited.add(start);
        
        while (queue.length > 0) {
            const vertex = queue.shift();
            result.push(vertex);
            
            const neighbors = this.adjacencyList.get(vertex) || [];
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
        
        return result;
    }
    
    // Exibir grafo
    display() {
        for (const [vertex, edges] of this.adjacencyList) {
            console.log(`${vertex} -> ${edges.join(', ')}`);
        }
    }
}

const graph = new Graph();

// Construir grafo
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');
graph.addEdge('D', 'E');

console.log("Estrutura do grafo:");
graph.display();

console.log("\nBusca em profundidade (DFS) a partir de A:");
graph.dfs('A');

console.log("\nBusca em largura (BFS) a partir de A:");
console.log("Ordem de visitação:", graph.bfs('A'));

// ================================
// RESUMO DAS COMPLEXIDADES
// ================================

console.log("\n=== RESUMO DAS COMPLEXIDADES ===");

const complexities = {
    "Arrays": {
        "Acesso": "O(1)",
        "Busca": "O(n)",
        "Inserção": "O(n)",
        "Remoção": "O(n)"
    },
    "HashMap": {
        "Acesso": "O(1)",
        "Busca": "O(1)",
        "Inserção": "O(1)",
        "Remoção": "O(1)"
    },
    "Stack/Queue": {
        "Push/Enqueue": "O(1)",
        "Pop/Dequeue": "O(1)",
        "Peek": "O(1)"
    },
    "Árvore Binária": {
        "Busca": "O(log n)",
        "Inserção": "O(log n)",
        "Remoção": "O(log n)"
    },
    "Lista Ligada": {
        "Acesso": "O(n)",
        "Busca": "O(n)",
        "Inserção": "O(1)",
        "Remoção": "O(n)"
    },
    "Grafo": {
        "BFS/DFS": "O(V + E)",
        "Adicionar vértice": "O(1)",
        "Adicionar aresta": "O(1)"
    }
};

console.table(complexities);

console.log("\n=== QUANDO USAR CADA ESTRUTURA ===");
console.log("📊 Arrays: Acesso rápido por índice, dados ordenados");
console.log("🗂️ HashMap: Busca rápida por chave, cache, contadores");
console.log("📚 Stack: Desfazer operações, parsing, recursão");
console.log("🎫 Queue: Processamento em ordem, BFS, buffers");
console.log("🌳 Árvores: Dados hierárquicos, busca eficiente");
console.log("🔗 Lista Ligada: Inserção/remoção frequente, tamanho dinâmico");
console.log("🕸️ Grafos: Redes, relacionamentos, caminhos");