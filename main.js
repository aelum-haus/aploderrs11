import { setupEventListeners } from './ui-interactions.js';
import { initPyodide } from './bytebeat-converter.js';
import { initEffects } from './init-effects.js';

document.addEventListener('DOMContentLoaded', () => {
    initPyodide();
    setupEventListeners();
    initEffects();
});
