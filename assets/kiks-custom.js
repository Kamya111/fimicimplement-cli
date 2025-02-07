// Function to add or remove inline styles based on the presence of 'mobile-menu-open' class
function updateStylesForMobileMenuOpen() {
    const body = document.body;

    // Select the elements to style
    const tidioChatDiv = document.querySelector('div#tidio-chat');
    const tidioChatIframe = document.querySelector('iframe#tidio-chat-iframe');
    const needsclick = document.querySelector('.needsclick.kl-teaser-X4FhKU.undefined.kl-private-reset-css-Xuajs1');

    if (body.classList.contains('mobile-menu-open')) {
        // Apply styles if the elements exist
        if (tidioChatDiv) {
            tidioChatDiv.style.zIndex = '9'; // Apply z-index style
        }
        if (tidioChatIframe) {
            tidioChatIframe.style.zIndex = '9'; // Apply z-index style
        }
        if (needsclick) {
            needsclick.style.zIndex = '9'; // Apply z-index style
        }
    } else {
        // Remove inline styles if the class is not present
        if (tidioChatDiv) {
            tidioChatDiv.style.zIndex = '999999999'; // Reset z-index style
        }
        if (tidioChatIframe) {
            tidioChatIframe.style.zIndex = '999999999'; // Reset z-index style
        }
        if (needsclick) {
            needsclick.style.zIndex = '90000'; // Reset z-index style
        }
    }
}

// Function to handle aria-expanded attribute on a.head-slot-cart-link.dropdown-modal-toggle
function updateStylesForAriaExpanded() {
    const cartLink = document.querySelector('a.head-slot-cart-link.dropdown-modal-toggle');

    if (cartLink) {
        const tidioChatDiv = document.querySelector('div#tidio-chat');
        const tidioChatIframe = document.querySelector('iframe#tidio-chat-iframe');
        const needsclick = document.querySelector('.needsclick.kl-teaser-X4FhKU.undefined.kl-private-reset-css-Xuajs1');

        if (cartLink.getAttribute('aria-expanded') === 'true') {
            // Apply styles if aria-expanded is true
            if (tidioChatDiv) {
                tidioChatDiv.style.zIndex = '9'; // Apply z-index style
            }
            if (tidioChatIframe) {
                tidioChatIframe.style.zIndex = '9'; // Apply z-index style
            }
            if (needsclick) {
                needsclick.style.zIndex = '9'; // Apply z-index style
            }
        } else {
            // Remove styles if aria-expanded is false
            if (tidioChatDiv) {
                tidioChatDiv.style.zIndex = '999999999'; // Reset z-index style
            }
            if (tidioChatIframe) {
                tidioChatIframe.style.zIndex = '999999999'; // Reset z-index style
            }
            if (needsclick) {
                needsclick.style.zIndex = '90000'; // Reset z-index style
            }
        }
    }
}

// Monitor for changes in the body's class list
const observer = new MutationObserver(() => {
    updateStylesForMobileMenuOpen();
});

// Monitor for changes in aria-expanded attribute
const cartLinkObserver = new MutationObserver(() => {
    updateStylesForAriaExpanded();
});

// Start observing the body for attribute changes
observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

// Start observing the cart link for aria-expanded changes
const cartLink = document.querySelector('a.head-slot-cart-link.dropdown-modal-toggle');
if (cartLink) {
    cartLinkObserver.observe(cartLink, { attributes: true, attributeFilter: ['aria-expanded'] });
}

// Initial check when the script runs
updateStylesForMobileMenuOpen();
updateStylesForAriaExpanded();
