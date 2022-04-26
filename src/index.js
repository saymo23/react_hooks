import React from 'react';
import ReactDOM from 'react-dom/client';
import { FormWithCustomHooks } from './components/02-userEfect/FormwithCustomHook';
//import CounterApp from './components/01-useState/CounterApp';
//import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
//import { SimpleForm } from './components/02-userEfect/SimpleForm';
import { MultipleCustomHooks } from './components/examples/MultipleCustomHooks';
//import HookApp from './HookApp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MultipleCustomHooks />
);

