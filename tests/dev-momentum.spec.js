const { test, expect } = require('@playwright/test');

test.describe('Developer Momentum Score Widgets', () => {
    test.describe('Small Widget (215×300px)', () => {
        test.beforeEach(async ({ page }) => {
            await page.goto('file:///Users/mac/Desktop/Widget%20making/dev-momentum-small-widget.html');
        });

        test('should have correct dimensions', async ({ page }) => {
            const widget = page.locator('.dev-momentum-widget');
            const box = await widget.boundingBox();
            
            expect(box.width).toBeCloseTo(215, 5);
            expect(box.height).toBeCloseTo(300, 5);
        });

        test('should display momentum score', async ({ page }) => {
            const scoreValue = page.locator('#momentumScore');
            await expect(scoreValue).toBeVisible();
            await expect(scoreValue).toContainText(/\d+/);
        });

        test('should display core contributors', async ({ page }) => {
            const contributors = page.locator('.contributor-item');
            await expect(contributors).toHaveCount(3);
            
            const firstContributor = contributors.first();
            await expect(firstContributor.locator('.contributor-name')).toContainText('JohnDev');
            await expect(firstContributor.locator('.contributor-commits')).toContainText('47');
        });

        test('should display metrics grid', async ({ page }) => {
            const metrics = page.locator('.metric-item');
            await expect(metrics).toHaveCount(4);
            
            await expect(page.locator('#coreContributors')).toContainText(/\d+/);
            await expect(page.locator('#activePRs')).toContainText(/\d+/);
            await expect(page.locator('#issueResolution')).toContainText(/%/);
            await expect(page.locator('#codeChurn')).toContainText(/\d+/);
        });

        test('should display recent activity', async ({ page }) => {
            const activityItems = page.locator('.activity-item');
            await expect(activityItems).toHaveCount(5);
            
            const firstActivity = activityItems.first();
            await expect(firstActivity.locator('.activity-type')).toContainText('PR');
            await expect(firstActivity.locator('.activity-description')).toContainText('Smart contract');
        });

        test('should handle refresh button', async ({ page }) => {
            const refreshBtn = page.locator('.refresh-btn');
            
            await refreshBtn.click();
            await expect(refreshBtn).toContainText('⏳');
            
            // Wait for refresh to complete
            await page.waitForTimeout(2000);
            await expect(refreshBtn).toContainText('🔄');
        });

        test('should show status indicator', async ({ page }) => {
            const statusIndicator = page.locator('.status-indicator');
            await expect(statusIndicator).toBeVisible();
        });
    });

    test.describe('Medium Widget (450×300px)', () => {
        test.beforeEach(async ({ page }) => {
            await page.goto('file:///Users/mac/Desktop/Widget%20making/dev-momentum-medium-widget.html');
        });

        test('should have correct dimensions', async ({ page }) => {
            const widget = page.locator('.dev-momentum-widget');
            const box = await widget.boundingBox();
            
            expect(box.width).toBeCloseTo(450, 5);
            expect(box.height).toBeCloseTo(300, 5);
        });

        test('should display project selector', async ({ page }) => {
            const projectSelector = page.locator('#projectSelect');
            await expect(projectSelector).toBeVisible();
            await expect(projectSelector).toHaveValue('ethereum');
        });

        test('should display code churn analysis', async ({ page }) => {
            const churnItems = page.locator('.churn-item');
            await expect(churnItems).toHaveCount(4);
            
            await expect(page.locator('.churn-label').first()).toContainText('Meaningful Commits');
            await expect(page.locator('.churn-value')).toContainText(/%/);
        });

        test('should display PR lifecycle health', async ({ page }) => {
            const prMetrics = page.locator('.pr-metric');
            await expect(prMetrics).toHaveCount(4);
            
            await expect(page.locator('.pr-label').first()).toContainText('Avg Review Time');
            await expect(page.locator('.pr-value')).toContainText('days');
        });

        test('should display enhanced contributor info', async ({ page }) => {
            const contributors = page.locator('.contributor-item');
            await expect(contributors).toHaveCount(4);
            
            const firstContributor = contributors.first();
            await expect(firstContributor.locator('.contributor-name')).toContainText('JohnDev');
            await expect(firstContributor.locator('.contributor-role')).toContainText('Lead Developer');
            await expect(firstContributor.locator('.contributor-impact')).toContainText('High');
        });

        test('should handle project selection', async ({ page }) => {
            const projectSelector = page.locator('#projectSelect');
            
            await projectSelector.selectOption('polygon');
            await expect(projectSelector).toHaveValue('polygon');
        });

        test('should have responsive layout', async ({ page }) => {
            const mainContent = page.locator('.main-content');
            await expect(mainContent).toBeVisible();
            
            const leftPanel = page.locator('.left-panel');
            const rightPanel = page.locator('.right-panel');
            await expect(leftPanel).toBeVisible();
            await expect(rightPanel).toBeVisible();
        });
    });

    test.describe('Full Widget (920×730px)', () => {
        test.beforeEach(async ({ page }) => {
            await page.goto('file:///Users/mac/Desktop/Widget%20making/dev-momentum-full-widget.html');
        });

        test('should have correct dimensions', async ({ page }) => {
            const widget = page.locator('.dev-momentum-widget');
            const box = await widget.boundingBox();
            
            expect(box.width).toBeCloseTo(920, 5);
            expect(box.height).toBeCloseTo(730, 5);
        });

        test('should display comprehensive header', async ({ page }) => {
            const backBtn = page.locator('.back-btn');
            const widgetTitle = page.locator('.widget-title');
            const projectSelector = page.locator('#projectSelect');
            const refreshBtn = page.locator('.refresh-btn');
            
            await expect(backBtn).toBeVisible();
            await expect(widgetTitle).toContainText('🚀 Developer Momentum Score');
            await expect(projectSelector).toBeVisible();
            await expect(refreshBtn).toBeVisible();
        });

        test('should display score breakdown', async ({ page }) => {
            const breakdownItems = page.locator('.breakdown-item');
            await expect(breakdownItems).toHaveCount(4);
            
            await expect(page.locator('.breakdown-label').first()).toContainText('Code Quality');
            await expect(page.locator('.breakdown-value')).toContainText(/\d+/);
        });

        test('should display comprehensive metrics', async ({ page }) => {
            const metrics = page.locator('.metric-item');
            await expect(metrics).toHaveCount(4);
            
            await expect(page.locator('#coreContributors')).toContainText(/\d+/);
            await expect(page.locator('#activePRs')).toContainText(/\d+/);
            await expect(page.locator('#issueResolution')).toContainText(/%/);
            await expect(page.locator('#codeChurn')).toContainText(/\d+/);
        });

        test('should display analysis sections', async ({ page }) => {
            const analysisSections = page.locator('.analysis-section');
            await expect(analysisSections).toHaveCount(2);
            
            await expect(page.locator('.section-title').first()).toContainText('Code Churn Analysis');
            await expect(page.locator('.section-title').nth(1)).toContainText('PR Lifecycle Health');
        });

        test('should display roadmap analysis', async ({ page }) => {
            const roadmapItems = page.locator('.roadmap-item');
            await expect(roadmapItems).toHaveCount(6);
            
            await expect(page.locator('.roadmap-label').first()).toContainText('ZK-Proof Integration');
            await expect(page.locator('.roadmap-value')).toContainText('On Track');
        });

        test('should display thematic analysis', async ({ page }) => {
            const themeItems = page.locator('.theme-item');
            await expect(themeItems).toHaveCount(4);
            
            await expect(page.locator('.theme-label').first()).toContainText('Smart Contracts');
            await expect(page.locator('.theme-value')).toContainText(/%/);
            
            const themeBars = page.locator('.theme-bar');
            await expect(themeBars).toHaveCount(4);
        });

        test('should display comprehensive contributors', async ({ page }) => {
            const contributors = page.locator('.contributor-item');
            await expect(contributors).toHaveCount(5);
            
            const firstContributor = contributors.first();
            await expect(firstContributor.locator('.contributor-name')).toContainText('JohnDev');
            await expect(firstContributor.locator('.contributor-role')).toContainText('Lead Developer');
            await expect(firstContributor.locator('.contributor-impact')).toContainText('High Impact');
        });

        test('should handle back button', async ({ page }) => {
            const backBtn = page.locator('.back-btn');
            
            // Mock the history.back function
            await page.evaluate(() => {
                window.history.back = () => {
                    window.location.href = 'dev-momentum-index.html';
                };
            });
            
            await backBtn.click();
        });

        test('should handle project selection', async ({ page }) => {
            const projectSelector = page.locator('#projectSelect');
            
            await projectSelector.selectOption('solana');
            await expect(projectSelector).toHaveValue('solana');
        });

        test('should have responsive layout', async ({ page }) => {
            const mainContent = page.locator('.main-content');
            await expect(mainContent).toBeVisible();
            
            const leftPanel = page.locator('.left-panel');
            const rightPanel = page.locator('.right-panel');
            await expect(leftPanel).toBeVisible();
            await expect(rightPanel).toBeVisible();
        });
    });

    test.describe('Cross-Widget Consistency', () => {
        test('should have consistent momentum score across all sizes', async ({ page }) => {
            const sizes = ['small', 'medium', 'full'];
            
            for (const size of sizes) {
                await page.goto(`file:///Users/mac/Desktop/Widget%20making/dev-momentum-${size}-widget.html`);
                
                // Check that momentum score exists in all sizes
                await expect(page.locator('#momentumScore')).toBeVisible();
                await expect(page.locator('#momentumScore')).toContainText(/\d+/);
            }
        });

        test('should have consistent contributor data', async ({ page }) => {
            const sizes = ['small', 'medium', 'full'];
            
            for (const size of sizes) {
                await page.goto(`file:///Users/mac/Desktop/Widget%20making/dev-momentum-${size}-widget.html`);
                
                // Check that JohnDev appears in all sizes
                await expect(page.locator('.contributor-name').first()).toContainText('JohnDev');
            }
        });

        test('should have consistent refresh functionality', async ({ page }) => {
            const sizes = ['small', 'medium', 'full'];
            
            for (const size of sizes) {
                await page.goto(`file:///Users/mac/Desktop/Widget%20making/dev-momentum-${size}-widget.html`);
                
                const refreshBtn = page.locator('.refresh-btn');
                await expect(refreshBtn).toBeVisible();
                await expect(refreshBtn).toContainText('🔄');
            }
        });
    });

    test.describe('Mobile Responsiveness', () => {
        test('should adapt to mobile screens', async ({ page }) => {
            await page.setViewportSize({ width: 375, height: 667 });
            
            const sizes = ['small', 'medium', 'full'];
            
            for (const size of sizes) {
                await page.goto(`file:///Users/mac/Desktop/Widget%20making/dev-momentum-${size}-widget.html`);
                
                const widget = page.locator('.dev-momentum-widget');
                await expect(widget).toBeVisible();
                
                // Check that widget adapts to mobile
                const box = await widget.boundingBox();
                expect(box.width).toBeLessThanOrEqual(375);
            }
        });
    });
});
