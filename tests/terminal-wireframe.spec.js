const { test, expect } = require('@playwright/test');

test.describe('Terminal Wireframe Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('file:///Users/mac/Desktop/Widget%20making/terminal-wireframe.html');
    });

    test('should have correct terminal layout structure', async ({ page }) => {
        // Check main container
        const terminalContainer = page.locator('.terminal-container');
        await expect(terminalContainer).toBeVisible();
        
        // Check all main sections exist
        await expect(page.locator('.top-header')).toBeVisible();
        await expect(page.locator('.chart-controls')).toBeVisible();
        await expect(page.locator('.main-content')).toBeVisible();
        await expect(page.locator('.bottom-panel')).toBeVisible();
        await expect(page.locator('.footer-bar')).toBeVisible();
    });

    test('should have correct top header elements', async ({ page }) => {
        // Check logo section
        await expect(page.locator('.logo-circle')).toBeVisible();
        await expect(page.locator('.logo-text')).toHaveText('Good Game');
        
        // Check main price display
        await expect(page.locator('.main-price')).toHaveText('$6.77K');
        
        // Check price details
        const priceDetails = page.locator('.price-details');
        await expect(priceDetails).toContainText('Price $0.0678');
        await expect(priceDetails).toContainText('Liq $11.4K');
        await expect(priceDetails).toContainText('24h Vol $1.1M');
    });

    test('should have correct chart controls', async ({ page }) => {
        // Check timeframe buttons
        const timeframeButtons = page.locator('.timeframe-btn');
        await expect(timeframeButtons).toHaveCount(6);
        await expect(timeframeButtons.nth(0)).toHaveText('1s');
        await expect(timeframeButtons.nth(2)).toHaveText('1m');
        
        // Check active timeframe
        await expect(page.locator('.timeframe-btn.active')).toHaveText('1m');
        
        // Check chart tools
        await expect(page.locator('.chart-tool')).toHaveCount(6);
        await expect(page.locator('.chart-tool').first()).toHaveText('Multicharts');
    });

    test('should have correct main content layout', async ({ page }) => {
        // Check left toolbar
        await expect(page.locator('.left-toolbar')).toBeVisible();
        const toolbarIcons = page.locator('.toolbar-icon');
        await expect(toolbarIcons).toHaveCount(10);
        
        // Check chart area
        await expect(page.locator('.chart-area')).toBeVisible();
        await expect(page.locator('.chart-container')).toBeVisible();
        await expect(page.locator('.chart-placeholder')).toBeVisible();
        await expect(page.locator('.chart-y-axis')).toBeVisible();
        await expect(page.locator('.chart-x-axis')).toBeVisible();
        await expect(page.locator('.volume-bars')).toBeVisible();
        
        // Check right sidebar
        await expect(page.locator('.right-sidebar')).toBeVisible();
    });

    test('should have correct right sidebar content', async ({ page }) => {
        // Check price changes section
        await expect(page.locator('.sidebar-title').first()).toHaveText('Price Changes');
        
        // Check trading panel
        await expect(page.locator('.sidebar-title').nth(2)).toHaveText('Trading Panel');
        await expect(page.locator('.trade-btn').first()).toHaveText('Buy');
        await expect(page.locator('.trade-btn.sell')).toHaveText('Sell');
        
        // Check token metrics
        await expect(page.locator('.sidebar-title').last()).toHaveText('Token Metrics');
        await expect(page.locator('.metric-item')).toHaveCount(12);
    });

    test('should have correct bottom panel structure', async ({ page }) => {
        // Check bottom tabs
        const bottomTabs = page.locator('.bottom-tab');
        await expect(bottomTabs).toHaveCount(12);
        await expect(bottomTabs.nth(4)).toHaveText('📅');
        await expect(page.locator('.bottom-tab.active')).toHaveText('Trades');
        
        // Check trades table
        await expect(page.locator('.table-header')).toBeVisible();
        await expect(page.locator('.table-row')).toHaveCount(4);
        
        // Check pool info
        await expect(page.locator('.pool-title')).toHaveText('Raydium CPMM Pool Info');
        await expect(page.locator('.pool-item')).toHaveCount(9);
    });

    test('should have correct footer bar', async ({ page }) => {
        // Check footer items
        await expect(page.locator('.footer-item').first()).toHaveText('Holding');
        await expect(page.locator('.footer-item').nth(1)).toHaveText('Watchlist');
        await expect(page.locator('.footer-item').nth(2)).toHaveText('Trending');
        
        // Check performance info
        await expect(page.locator('.performance-info')).toHaveText('Stable 136 MS 119 FPS');
    });

    test('should have correct terminal styling', async ({ page }) => {
        // Check background colors
        const terminalContainer = page.locator('.terminal-container');
        await expect(terminalContainer).toHaveCSS('background-color', 'rgb(10, 10, 10)');
        
        // Check text colors
        await expect(page.locator('.main-price')).toHaveCSS('color', 'rgb(0, 255, 0)');
        await expect(page.locator('.logo-text')).toHaveCSS('color', 'rgb(0, 255, 0)');
        
        // Check active button styling
        const activeTimeframe = page.locator('.timeframe-btn.active');
        await expect(activeTimeframe).toHaveCSS('background-color', 'rgb(0, 255, 0)');
        await expect(activeTimeframe).toHaveCSS('color', 'rgb(0, 0, 0)');
    });

    test('should have correct dimensions and layout', async ({ page }) => {
        // Check viewport height usage
        const terminalContainer = page.locator('.terminal-container');
        const containerBox = await terminalContainer.boundingBox();
        expect(containerBox.height).toBeGreaterThan(800);
        
        // Check header height
        const topHeader = page.locator('.top-header');
        const headerBox = await topHeader.boundingBox();
        expect(headerBox.height).toBeCloseTo(60, 5);
        
        // Check chart controls height
        const chartControls = page.locator('.chart-controls');
        const controlsBox = await chartControls.boundingBox();
        expect(controlsBox.height).toBeCloseTo(50, 5);
        
        // Check bottom panel height
        const bottomPanel = page.locator('.bottom-panel');
        const bottomBox = await bottomPanel.boundingBox();
        expect(bottomBox.height).toBeCloseTo(200, 10);
        
        // Check footer height
        const footerBar = page.locator('.footer-bar');
        const footerBox = await footerBar.boundingBox();
        expect(footerBox.height).toBeCloseTo(40, 5);
    });

    test('should have correct responsive behavior', async ({ page }) => {
        // Test mobile viewport
        await page.setViewportSize({ width: 768, height: 1024 });
        
        // Check that layout still works
        await expect(page.locator('.terminal-container')).toBeVisible();
        await expect(page.locator('.main-content')).toBeVisible();
        
        // Check sidebar width adjustment
        const rightSidebar = page.locator('.right-sidebar');
        const sidebarBox = await rightSidebar.boundingBox();
        expect(sidebarBox.width).toBeLessThanOrEqual(280);
    });

    test('should have correct interactive elements', async ({ page }) => {
        // Test timeframe button hover
        const timeframeBtn = page.locator('.timeframe-btn').first();
        await timeframeBtn.hover();
        await expect(timeframeBtn).toHaveCSS('background-color', 'rgb(51, 51, 51)');
        
        // Test trade button hover
        const buyBtn = page.locator('.trade-btn').first();
        await buyBtn.hover();
        await expect(buyBtn).toHaveCSS('background-color', 'rgb(0, 255, 0)');
        
        // Test toolbar icon hover
        const toolbarIcon = page.locator('.toolbar-icon').first();
        await toolbarIcon.hover();
        await expect(toolbarIcon).toHaveCSS('background-color', 'rgb(68, 68, 68)');
    });

    test('should have correct data display', async ({ page }) => {
        // Check price change colors
        await expect(page.locator('.price-change.negative')).toHaveCSS('color', 'rgb(255, 0, 0)');
        await expect(page.locator('.price-change.positive')).toHaveCSS('color', 'rgb(0, 255, 0)');
        
        // Check metric values
        await expect(page.locator('.metric-value').first()).toHaveText('14.13% ✓');
        await expect(page.locator('.metric-value.negative')).toHaveText('10.4%');
        
        // Check table row colors
        await expect(page.locator('.table-row.sell').first()).toHaveCSS('color', 'rgb(255, 0, 0)');
    });

    test('should have correct chart elements', async ({ page }) => {
        // Check chart placeholder
        await expect(page.locator('.chart-placeholder')).toContainText('Candlestick Chart');
        await expect(page.locator('.chart-placeholder')).toContainText('Price movement from 20:30 to 23:07');
        
        // Check Y-axis values
        await expect(page.locator('.chart-y-axis')).toContainText('0.00020000');
        await expect(page.locator('.chart-y-axis')).toContainText('0.067845');
        
        // Check X-axis values
        await expect(page.locator('.chart-x-axis')).toContainText('20:30');
        await expect(page.locator('.chart-x-axis')).toContainText('23:07');
        
        // Check volume bars
        const volumeBars = page.locator('.volume-bar');
        await expect(volumeBars).toHaveCount(12);
        await expect(page.locator('.volume-bar.red')).toHaveCount(1);
    });
});
