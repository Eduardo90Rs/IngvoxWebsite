# Instruções para Favicon - IngVox

## Favicon Atual
- **Arquivo**: `/public/assets/logos/1.png`
- **Configuração**: `index.html` linha 5

## Como Gerar Novos Favicons

### 1. Arquivo Fonte
- Use uma imagem PNG de alta qualidade (preferencialmente 512x512px)
- Mantenha design simples e legível em tamanhos pequenos
- Use logo com fundo transparente ou sólido

### 2. Tamanhos Recomendados
Para melhor compatibilidade, gere estes tamanhos:
- `favicon-16x16.png` - Navegadores desktop
- `favicon-32x32.png` - Navegadores desktop
- `favicon-48x48.png` - Windows shortcuts
- `apple-touch-icon-180x180.png` - iOS devices
- `android-chrome-192x192.png` - Android devices
- `android-chrome-512x512.png` - Android splash screen

### 3. Ferramentas Recomendadas

#### Online (Gratuito)
- **Favicon.io**: https://favicon.io/
- **RealFaviconGenerator**: https://realfavicongenerator.net/

#### Software
- **GIMP** (gratuito)
- **Photoshop**
- **ImageMagick** (linha de comando)

### 4. Implementação Completa

Para implementação profissional completa, substitua a linha 5 do `index.html` por:

```html
<link rel="icon" type="image/png" sizes="32x32" href="/assets/logos/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/assets/logos/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/assets/logos/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
```

### 5. Web App Manifest (Opcional)

Crie `/public/site.webmanifest`:
```json
{
    "name": "IngVox",
    "short_name": "IngVox",
    "icons": [
        {
            "src": "/assets/logos/android-chrome-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "/assets/logos/android-chrome-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ],
    "theme_color": "#439172",
    "background_color": "#E2E8E9",
    "display": "standalone"
}
```

### 6. Verificação

Após implementar:
1. Limpe cache do navegador (Ctrl+F5)
2. Teste em diferentes navegadores
3. Verifique em dispositivos móveis
4. Use ferramentas como Favicon Checker online

### 7. Logos Disponíveis

Atualmente temos estes logos no projeto:
- `/assets/logos/1.png` - **Atual favicon**
- `/assets/logos/2.png`
- `/assets/logos/3.png`
- `/assets/logos/logo-ingvox.png`

## Notas Importantes

- Favicons são cached pelos navegadores - sempre teste com cache limpo
- PNG é suportado por todos os navegadores modernos
- ICO ainda é útil para compatibilidade legacy
- Teste em modo incógnito para verificar mudanças