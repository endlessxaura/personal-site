import { defineConfig } from 'eslint/config';
import base from 'eslint-config-next';
import baseTs from 'eslint-config-next/typescript';

export default defineConfig({
    ...base,
    ...baseTs
});