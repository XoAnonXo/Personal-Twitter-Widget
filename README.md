# News Widget - Interactive Wireframes

## 🚨 CRITICAL DIMENSION SPECIFICATIONS 🚨

**⚠️ THESE DIMENSIONS ARE MANDATORY AND SHALL NOT CHANGE ⚠️**

### Widget Dimensions (Figma-Compliant)

| Widget | Width | Height | Aspect Ratio | File |
|--------|-------|--------|--------------|------|
| **Small** | `215px` | `300px` | 0.72:1 | `small-widget.html` |
| **Medium** | `450px` | `300px` | 1.5:1 | `medium-widget.html` |
| **Full** | `920px` | `730px` | 1.26:1 | `full-widget.html` |

### Design Specifications

- **Background Color**: `#151515` (Dark theme)
- **Border Radius**: `16px`
- **Border**: `1px solid #3a3a3a`
- **Font Family**: Inter (Google Fonts)
- **Padding**: `16px` (horizontal and vertical)

### 🚫 IMPORTANT RESTRICTIONS

1. **DO NOT MODIFY** widget dimensions without explicit approval
2. **DO NOT CHANGE** aspect ratios - they are critical for layout consistency
3. **MAINTAIN** dark theme styling across all widgets
4. **PRESERVE** border radius and padding specifications
5. **KEEP** font family consistent (Inter)

### File Structure

```
Widget making/
├── news-widget.html          # Index page with navigation
├── small-widget.html         # Small widget (215×300px)
├── medium-widget.html        # Medium widget (450×300px)
├── full-widget.html          # Full widget (920×730px)
├── tests/
│   └── news-widget.spec.js  # Playwright tests
└── README.md                 # This file
```

### Testing

Run Playwright tests to ensure functionality works with the specified dimensions:

```bash
npx playwright test --reporter=line
```

### Development Guidelines

- All widgets must maintain their exact dimensions
- Functionality should adapt to the size constraints
- Visual elements should scale appropriately within the fixed dimensions
- Interactive elements must remain accessible within the specified bounds

---

**Last Updated**: Current
**Figma Reference**: https://www.figma.com/design/fb0CutFFpThKAZjePBODum/Untitled?node-id=0-1&p=f&t=Ljgwh845fcXTjkTc-0