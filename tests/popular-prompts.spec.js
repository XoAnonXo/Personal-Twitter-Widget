const { test, expect } = require('@playwright/test');

test.describe('Popular Prompts Widget Tests', () => {
    test.describe('Small Widget (215×300px)', () => {
        test.beforeEach(async ({ page }) => {
            await page.goto('file:///Users/mac/Desktop/Widget%20making/popular-prompts-small-widget.html');
        });

        test('should have correct dimensions', async ({ page }) => {
            const widget = page.locator('.popular-prompts-widget');
            const box = await widget.boundingBox();
            
            expect(box.width).toBeCloseTo(215, 5);
            expect(box.height).toBeCloseTo(300, 5);
        });

        test('should display widget header correctly', async ({ page }) => {
            await expect(page.locator('.widget-title')).toHaveText('📝 Popular Prompts');
            await expect(page.locator('.refresh-btn')).toBeVisible();
        });

        test('should display stats card', async ({ page }) => {
            await expect(page.locator('.stats-card')).toBeVisible();
            await expect(page.locator('.stats-title')).toHaveText('Popular Prompts');
            await expect(page.locator('.stats-count')).toContainText('Total: 3 trending prompts');
        });

        test('should display prompt items', async ({ page }) => {
            const promptItems = page.locator('.prompt-item');
            await expect(promptItems).toHaveCount(3);
            
            await expect(promptItems.nth(0)).toContainText('AI Writing Assistant');
            await expect(promptItems.nth(1)).toContainText('Code Review Helper');
            await expect(promptItems.nth(2)).toContainText('Crypto Market Analysis');
        });

        test('should have correct prompt metadata', async ({ page }) => {
            const firstPrompt = page.locator('.prompt-item').first();
            
            await expect(firstPrompt.locator('.prompt-title')).toHaveText('AI Writing Assistant');
            await expect(firstPrompt.locator('.prompt-rating')).toHaveText('⭐ 4.8');
            await expect(firstPrompt.locator('.prompt-author')).toContainText('HeyAnon');
            await expect(firstPrompt.locator('.stat-item').first()).toContainText('👥 1.2K');
        });

        test('should handle prompt selection', async ({ page }) => {
            const firstPrompt = page.locator('.prompt-item').first();
            
            // Set up dialog handler before clicking
            const dialogPromise = page.waitForEvent('dialog');
            await firstPrompt.click();
            
            const dialog = await dialogPromise;
            expect(dialog.message()).toContain('AI Writing Assistant');
            await dialog.accept();
        });

        test('should handle refresh button', async ({ page }) => {
            const refreshBtn = page.locator('.refresh-btn');
            
            await refreshBtn.click();
            await expect(refreshBtn).toHaveText('⏳');
            
            // Wait for refresh to complete
            await expect(refreshBtn).toHaveText('🔄');
        });

        test('should have correct styling', async ({ page }) => {
            const widget = page.locator('.popular-prompts-widget');
            await expect(widget).toHaveCSS('background-color', 'rgb(26, 26, 26)');
            await expect(widget).toHaveCSS('border-color', 'rgb(51, 51, 51)');
            
            const statsCard = page.locator('.stats-card');
            await expect(statsCard).toHaveCSS('background-color', 'rgb(167, 181, 217)');
        });
    });

    test.describe('Medium Widget (450×300px)', () => {
        test.beforeEach(async ({ page }) => {
            await page.goto('file:///Users/mac/Desktop/Widget%20making/popular-prompts-medium-widget.html');
        });

        test('should have correct dimensions', async ({ page }) => {
            const widget = page.locator('.popular-prompts-widget');
            const box = await widget.boundingBox();
            
            expect(box.width).toBeCloseTo(450, 5);
            expect(box.height).toBeCloseTo(300, 5);
        });

        test('should display header controls', async ({ page }) => {
            await expect(page.locator('.search-input')).toBeVisible();
            await expect(page.locator('.refresh-btn')).toBeVisible();
            await expect(page.locator('.search-input')).toHaveAttribute('placeholder', 'Search prompts...');
        });

        test('should display stats section', async ({ page }) => {
            const statsCards = page.locator('.stats-card');
            await expect(statsCards).toHaveCount(2);
            
            await expect(statsCards.nth(0).locator('.stats-title')).toHaveText('Popular Prompts');
            await expect(statsCards.nth(1).locator('.stats-title')).toHaveText('Active Users');
        });

        test('should display category filters', async ({ page }) => {
            const categoryBtns = page.locator('.category-btn');
            await expect(categoryBtns).toHaveCount(5);
            
            await expect(categoryBtns.nth(0)).toHaveText('All');
            await expect(categoryBtns.nth(0)).toHaveClass(/active/);
            await expect(categoryBtns.nth(1)).toHaveText('Writing');
        });

        test('should display prompts grid', async ({ page }) => {
            const promptItems = page.locator('.prompt-item');
            await expect(promptItems).toHaveCount(6);
            
            // Check grid layout exists
            const promptsGrid = page.locator('.prompts-grid');
            await expect(promptsGrid).toBeVisible();
        });

        test('should display prompt categories', async ({ page }) => {
            const categories = page.locator('.prompt-category');
            await expect(categories).toHaveCount(6);
            
            await expect(categories.nth(0)).toHaveText('Writing');
            await expect(categories.nth(1)).toHaveText('Development');
            await expect(categories.nth(2)).toHaveText('Finance');
        });

        test('should handle category filtering', async ({ page }) => {
            const writingBtn = page.locator('.category-btn').nth(1);
            
            await writingBtn.click();
            await expect(writingBtn).toHaveClass(/active/);
        });

        test('should handle search input', async ({ page }) => {
            const searchInput = page.locator('.search-input');
            
            await searchInput.fill('AI');
            await expect(searchInput).toHaveValue('AI');
        });
    });

    test.describe('Full Widget (920×730px)', () => {
        test.beforeEach(async ({ page }) => {
            await page.goto('file:///Users/mac/Desktop/Widget%20making/popular-prompts-full-widget.html');
        });

        test('should have correct dimensions', async ({ page }) => {
            const widget = page.locator('.popular-prompts-widget');
            const box = await widget.boundingBox();
            
            expect(box.width).toBeCloseTo(920, 5);
            expect(box.height).toBeCloseTo(730, 5);
        });

        test('should display full header', async ({ page }) => {
            await expect(page.locator('.back-btn')).toBeVisible();
            await expect(page.locator('.widget-title')).toHaveText('📝 Popular Prompts');
            await expect(page.locator('.search-bar')).toBeVisible();
            await expect(page.locator('.add-btn')).toHaveText('Add new prompt');
        });

        test('should display main content layout', async ({ page }) => {
            await expect(page.locator('.main-content')).toBeVisible();
            await expect(page.locator('.left-panel')).toBeVisible();
            await expect(page.locator('.right-panel')).toBeVisible();
        });

        test('should display stats section', async ({ page }) => {
            const statsCards = page.locator('.stats-card');
            await expect(statsCards).toHaveCount(2);
            
            await expect(statsCards.nth(0).locator('.stats-title')).toHaveText('Popular Prompts');
            await expect(statsCards.nth(1).locator('.stats-title')).toHaveText('Active Users');
        });

        test('should display progress bars', async ({ page }) => {
            const progressBars = page.locator('.progress-bar');
            await expect(progressBars).toHaveCount(2);
            
            const progressFills = page.locator('.progress-fill');
            await expect(progressFills).toHaveCount(2);
        });

        test('should display user stats', async ({ page }) => {
            const userStats = page.locator('.user-stat');
            await expect(userStats).toHaveCount(4);
            
            await expect(userStats.nth(0)).toContainText('HeyAnon: 5 prompts');
            await expect(userStats.nth(1)).toContainText('Gemma: 3 prompts');
        });

        test('should display filters section', async ({ page }) => {
            await expect(page.locator('.filters-section')).toBeVisible();
            await expect(page.locator('.filters-title')).toHaveText('Filters & Sorting');
            
            const categoryBtns = page.locator('.category-btn');
            await expect(categoryBtns).toHaveCount(7);
        });

        test('should display sort options', async ({ page }) => {
            await expect(page.locator('.sort-select')).toBeVisible();
            
            const sortSelect = page.locator('.sort-select');
            await expect(sortSelect).toHaveValue('trending');
        });

        test('should display prompts grid', async ({ page }) => {
            const promptItems = page.locator('.prompt-item');
            await expect(promptItems).toHaveCount(8);
            
            // Check grid layout exists
            const promptsGrid = page.locator('.prompts-grid');
            await expect(promptsGrid).toBeVisible();
        });

        test('should display right panel sections', async ({ page }) => {
            await expect(page.locator('.trending-section')).toBeVisible();
            await expect(page.locator('.top-users-section')).toBeVisible();
            
            await expect(page.locator('.section-title').first()).toHaveText('🔥 Trending Now');
            await expect(page.locator('.section-title').last()).toHaveText('👥 Top Contributors');
        });

        test('should display trending list', async ({ page }) => {
            const trendingItems = page.locator('.trending-item');
            await expect(trendingItems).toHaveCount(5);
            
            await expect(trendingItems.nth(0)).toContainText('AI Writing Assistant');
            await expect(trendingItems.nth(0)).toContainText('+45');
        });

        test('should display top users list', async ({ page }) => {
            const userItems = page.locator('.user-item');
            await expect(userItems).toHaveCount(5);
            
            await expect(userItems.nth(0)).toContainText('HeyAnon');
            await expect(userItems.nth(0)).toContainText('1.2K');
        });

        test('should handle back button', async ({ page }) => {
            const backBtn = page.locator('.back-btn');
            
            // Set up navigation handler
            page.on('popstate', () => {});
            
            await backBtn.click();
        });

        test('should handle add new prompt button', async ({ page }) => {
            const addBtn = page.locator('.add-btn');
            
            // Set up dialog handler
            page.on('dialog', dialog => {
                expect(dialog.message()).toContain('Add New Prompt');
                dialog.accept();
            });
            
            await addBtn.click();
        });

        test('should handle search functionality', async ({ page }) => {
            const searchBar = page.locator('.search-bar');
            
            await searchBar.fill('AI Writing');
            await expect(searchBar).toHaveValue('AI Writing');
        });

        test('should handle sort selection', async ({ page }) => {
            const sortSelect = page.locator('.sort-select');
            
            await sortSelect.selectOption('rating');
            await expect(sortSelect).toHaveValue('rating');
        });

        test('should have correct responsive behavior', async ({ page }) => {
            // Test mobile viewport
            await page.setViewportSize({ width: 768, height: 1024 });
            
            // Check that layout adapts
            await expect(page.locator('.popular-prompts-widget')).toBeVisible();
            await expect(page.locator('.main-content')).toBeVisible();
        });
    });

    test.describe('Cross-widget functionality', () => {
        test('should have consistent styling across all sizes', async ({ page }) => {
            const sizes = ['small', 'medium', 'full'];
            
            for (const size of sizes) {
                await page.goto(`file:///Users/mac/Desktop/Widget%20making/popular-prompts-${size}-widget.html`);
                
                const widget = page.locator('.popular-prompts-widget');
                await expect(widget).toHaveCSS('background-color', 'rgb(26, 26, 26)');
                await expect(widget).toHaveCSS('border-color', 'rgb(51, 51, 51)');
                
                const title = page.locator('.widget-title');
                await expect(title).toContainText('📝 Popular Prompts');
            }
        });

        test('should have consistent data across all sizes', async ({ page }) => {
            const sizes = ['small', 'medium', 'full'];
            
            for (const size of sizes) {
                await page.goto(`file:///Users/mac/Desktop/Widget%20making/popular-prompts-${size}-widget.html`);
                
                // Check that AI Writing Assistant appears in all sizes
                await expect(page.locator('.prompt-item').first()).toContainText('AI Writing Assistant');
            }
        });
    });
});
