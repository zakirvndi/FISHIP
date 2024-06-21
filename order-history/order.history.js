//untuk filter

document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab-button");
    const orders = document.querySelectorAll(".order-item");

    tabs.forEach(tab => {
        tab.addEventListener("click", function() {
            tabs.forEach(btn => btn.classList.remove("active"));
            tab.classList.add("active");

            const status = tab.getAttribute("data-tab");
            orders.forEach(order => {
                if (status === "semua" || order.getAttribute("data-status") === status) {
                    order.style.display = "block";
                } else {
                    order.style.display = "none";
                }
            });
        });
    });
});

//pop up

function showTransactionDetails() {
    document.getElementById('transaction-details-popup').style.display = 'flex';
}

function showReviewPopup() {
    closePopup('transaction-details-popup');
    document.getElementById('review-popup').style.display = 'flex';
}

function showReviewSubmittedPopup() {
    closePopup('review-popup');
    document.getElementById('review-submitted-popup').style.display = 'flex';
}

function showShippingTrackingPopup() {
    document.getElementById('shipping-tracking-popup').style.display = 'flex';
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}
