const { test, expect } = require('@playwright/test');

test.describe('DAOStrategist AI Widgets', () => {
    test.describe('Small Widget (215×300px)', () => {
        test('should have correct dimensions', async ({ page }) => {
            await page.goto('file://' + process.cwd() + '/dao-strategist-small-widget.html');
            
            const widget = page.locator('.dao-strategist-widget');
            await expect(widget).toBeVisible();
            
            const box = await widget.boundingBox();
            expect(box.width).toBeCloseTo(215, 5);
            expect(box.height).toBeCloseTo(300, 5);
        });

        test('should display header elements', async ({ page }) => {
            await page.goto('file://' + process.cwd() + '/dao-strategist-small-widget.html');
            
            await expect(page.locator('.widget-header')).toBeVisible();
            await expect(page.locator('.widget-title')).toContainText('DAOStrategist');
            await expect(page.locator('.status-indicator')).toBeVisible();
        });

        test('should display DAO selector', async ({ page }) => {
            await page.goto('file://' + process.cwd() + '/dao-strategist-small-widget.html');
            
            await expect(page.locator('.dao-selector')).toBeVisible();
            await expect(page.locator('select.dao-selector')).toBeVisible();
        });

        test('should display active proposals', async ({ page }) => {
            await page.goto('file://' + process.cwd() + '/dao-strategist-small-widget.html');
            
            await expect(page.locator('.active-proposals')).toBeVisible();
            await expect(page.locator('.proposal-item')).toHaveCount(3);
            await expect(page.locator('.proposal-title').first()).toBeVisible();
        });

        test('should display treasury health', async ({ page }) => {
            await page.goto('file://' + process.cwd() + '/dao-strategist-small-widget.html');
            
            await expect(page.locator('.treasury-health')).toBeVisible();
            await expect(page.locator('.health-score')).toBeVisible();
            await expect(page.locator('.health-label')).toBeVisible();
        });

        test('should display voting recommendations', async ({ page }) => {
            await page.goto('file://' + process.cwd() + '/dao-strategist-small-widget.html');
            
            await expect(page.locator('.voting-recommendation')).toBeVisible();
            await expect(page.locator('.recommendation-item')).toHaveCount(3);
            await expect(page.locator('.recommendation-value').first()).toBeVisible();
        });

        test('should handle DAO selection', async ({ page }) => {
            await page.goto('file://' + process.cwd() + '/dao-strategist-small-widget.html');
            
            const daoSelector = page.locator('select.dao-selector');
            await daoSelector.selectOption('uniswap');
            
            // Check if content updates (this would depend on implementation)
            await expect(page.locator('.active-proposals')).toBeVisible();
        });
    });

    test.describe('Medium Widget (450×300px)', () => {
        test('should have correct dimensions', async ({ page }) => {
            await page.goto('file://' + process.cwd() + '/dao-strategist-medium-widget.html');
            
            const widget = page.locator('.dao-strategist-widget');
            await expect(widget).toBeVisible();
            
            const box = await widget.boundingBox();
            expect(box.width).toBeCloseTo(450, 5);
            expect(box.height).toBeCloseTo(300, 5);
        });

        test('should display header elements', async ({ page }) => {
            await page.goto('file://' + process.cwd() + '/dao-strategist-medium-widget.html');
            
            await expect(page.locator('.widget-header')).toBeVisible();
            await expect(page.locator('.widget-title')).toContainText('DAOStrategist');
            await expect(page.locator('.status-indicator')).toBeVisible();
        });

        test('should display DAO selector', async ({ page }) => {
            await page.goto('file://' + process.cwd() + '/dao-strategist-medium-widget.html');
            
            await expect(page.locator('.dao-selector')).toBeVisible();
            await expect(page.locator('select.dao-selector')).toBeVisible();
        });

        test('should display proposal analysis', async ({ page }) => {
            await page.goto('file://' + process.cwd() + '/dao-strategist-medium-widget.html');
            
            await expect(page.locator('.proposal-analysis')).toBeVisible();
            await expect(page.locator('.analysis-title')).toBeVisible();
        });

        test('should display treasury health overview', async ({ page }) => {
            await page.goto('file://' + process.cwd() + '/dao-strategist-medium-widget.html');
            
            await expect(page.locator('.treasury-health')).toBeVisible();
            await expect(page.locator('.health-score')).toBeVisible();
            await expect(page.locator('.health-label')).toBeVisible();
        });

        test('should display metrics grid', async ({ page }) => {
            await page.goto('file://' + process.cwd() + '/dao-strategist-medium-widget.html');
            
            await expect(page.locator('.metrics-grid')).toBeVisible();
            await expect(page.locator('.metric-item')).toHaveCount(4);
        });

        test('should handle DAO selection', async ({ page }) => {
            await page.goto('file://' + process.cwd() + '/dao-strategist-medium-widget.html');
            
            const daoSelector = page.locator('select.dao-selector');
            await daoSelector.selectOption('aave');
            
            // Check if content updates
            await expect(page.locator('.treasury-health')).toBeVisible();
        });
    });

    test.describe('Full Widget (920×730px)', () => {
        test('should have correct dimensions', async ({ page }) => {
            await page.goto('file://' + process.cwd() + '/dao-strategist-full-widget.html');
            
            const widget = page.locator('.dao-strategist-widget');
            await expect(widget).toBeVisible();
            
            const box = await widget.boundingBox();
            expect(box.width).toBeCloseTo(920, 5);
            expect(box.height).toBeCloseTo(730, 5);
        });

        test('should display header elements', async ({ page }) => {
            await page.goto('file://' + process.cwd() + '/dao-strategist-full-widget.html');
            
            await expect(page.locator('.widget-header')).toBeVisible();
            await expect(page.locator('.widget-title')).toContainText('DAOStrategist');
            await expect(page.locator('.status-indicator')).toBeVisible();
        });

        test('should display DAO selector', async ({ page }) => {
            await page.goto('file://' + process.cwd() + '/dao-strategist-full-widget.html');
            
            await expect(page.locator('.dao-selector')).toBeVisible();
            await expect(page.locator('select.dao-selector')).toBeVisible();
        });

        test('should display treasury overview', async ({ page }) => {
            await page.goto('file://' + process.cwd() + '/dao-strategist-full-widget.html');
            
            await expect(page.locator('.treasury-overview')).toBeVisible();
            await expect(page.locator('.treasury-value')).toBeVisible();
            await expect(page.locator('.treasury-metric')).toHaveCount(2);
        });

        test('should display metrics grid', async ({ page }) => {
            await page.goto('file://' + process.cwd() + '/dao-strategist-full-widget.html');
            
            await expect(page.locator('.metrics-grid')).toBeVisible();
            await expect(page.locator('.metric-item')).toHaveCount(4);
        });

        test('should display analysis sections', async ({ page }) => {
            await page.goto('file://' + process.cwd() + '/dao-strategist-full-widget.html');
            
            await expect(page.locator('.analysis-section')).toHaveCount(2);
            await expect(page.locator('.analysis-section').first()).toBeVisible();
        });

        test('should display treasury risk dashboard', async ({ page }) => {
            await page.goto('file://' + process.cwd() + '/dao-strategist-full-widget.html');
            
            await expect(page.locator('.treasury-risk')).toBeVisible();
            await expect(page.locator('.risk-item')).toHaveCount(5);
        });

        test('should display yield optimization', async ({ page }) => {
            await page.goto('file://' + process.cwd() + '/dao-strategist-full-widget.html');
            
            await expect(page.locator('.yield-optimization')).toBeVisible();
            await expect(page.locator('.yield-item')).toHaveCount(4);
        });

        test('should display sentiment analysis', async ({ page }) => {
            await page.goto('file://' + process.cwd() + '/dao-strategist-full-widget.html');
            
            await expect(page.locator('.sentiment-analysis')).toBeVisible();
            await expect(page.locator('.sentiment-item')).toHaveCount(3);
        });

        test('should handle DAO selection', async ({ page }) => {
            await page.goto('file://' + process.cwd() + '/dao-strategist-full-widget.html');
            
            const daoSelector = page.locator('select.dao-selector');
            await daoSelector.selectOption('compound');
            
            // Check if content updates
            await expect(page.locator('.treasury-overview')).toBeVisible();
        });
    });

    test.describe('Responsive Design', () => {
        test('should adapt to mobile screens', async ({ page }) => {
            await page.setViewportSize({ width: 375, height: 667 });
            await page.goto('file://' + process.cwd() + '/dao-strategist-small-widget.html');
            
            const widget = page.locator('.dao-strategist-widget');
            await expect(widget).toBeVisible();
            
            // Check if responsive CSS is applied
            const box = await widget.boundingBox();
            expect(box.width).toBeLessThanOrEqual(375);
        });
    });

    test.describe('Navigation and Integration', () => {
        test('should be accessible from main widget menu', async ({ page }) => {
            await page.goto('file://' + process.cwd() + '/widget-menu.html');
            
            await expect(page.locator('text=DAOStrategist AI')).toBeVisible();
            
            // Click on DAOStrategist AI widget set
            await page.click('text=DAOStrategist AI');
            await expect(page).toHaveURL(/dao-strategist-index\.html/);
        });

        test('should have working links in size grid', async ({ page }) => {
            await page.goto('file://' + process.cwd() + '/widget-menu.html');
            
            // Check small widget link
            await page.click('a[href="dao-strategist-small-widget.html"]');
            await expect(page).toHaveURL(/dao-strategist-small-widget\.html/);
            
            await page.goBack();
            
            // Check medium widget link
            await page.click('a[href="dao-strategist-medium-widget.html"]');
            await expect(page).toHaveURL(/dao-strategist-medium-widget\.html/);
            
            await page.goBack();
            
            // Check full widget link
            await page.click('a[href="dao-strategist-full-widget.html"]');
            await expect(page).toHaveURL(/dao-strategist-full-widget\.html/);
        });
    });
});
