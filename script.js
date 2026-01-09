document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const inputText = document.getElementById('inputText');
    const generateBtn = document.getElementById('generateBtn');
    const clearBtn = document.getElementById('clearBtn');
    const sampleBtn = document.getElementById('sampleBtn');
    const hashResults = document.getElementById('hashResults');
    const clearHistoryBtn = document.getElementById('clearHistoryBtn');
    const historyList = document.getElementById('historyList');
    const notification = document.getElementById('notification');
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
        
    // Hash algorithms configuration
    const hashAlgorithms = [
        { id: 'md5', name: 'MD5', color: '#4361ee' },
        { id: 'sha1', name: 'SHA-1', color: '#7209b7' },
        { id: 'sha256', name: 'SHA-256', color: '#4cc9f0' },
        { id: 'sha512', name: 'SHA-512', color: '#f72585' },
        { id: 'sha3', name: 'SHA-3', color: '#ff9e00' },
        { id: 'ripemd160', name: 'RIPEMD-160', color: '#06d6a0' }
    ];
    
    // Load history from localStorage
    let history = JSON.parse(localStorage.getItem('hashHistory')) || [];
    renderHistory();
    
    // Event Listeners
    generateBtn.addEventListener('click', generateHashes);
    clearBtn.addEventListener('click', clearInput);
    sampleBtn.addEventListener('click', loadSampleText);
    clearHistoryBtn.addEventListener('click', clearHistory);