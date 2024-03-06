document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.movie-slide');
    let currentSlide = 0;

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    };

    const showMovie = (index) => {
        currentSlide = index - 1;
        showSlide(currentSlide);
    };

    const seatsContainer = document.getElementById('seats');
    const totalElement = document.getElementById('total');
    let selectedSeats = [];

    const seatCount = 36;

    const renderSeats = () => {
        seatsContainer.innerHTML = '';
        for (let i = 0; i < seatCount; i++) {
            const seat = document.createElement('div');
            seat.classList.add('seat');
            seat.addEventListener('click', () => {
                if (seat.classList.contains('selected')) {
                    seat.classList.remove('selected');
                    selectedSeats = selectedSeats.filter(s => s !== i);
                } else {
                    seat.classList.add('selected');
                    selectedSeats.push(i);
                }
                updateTotal();
            });
            seatsContainer.appendChild(seat);
        }
        updateTotal();
    };

    const updateTotal = () => {
        totalElement.textContent = selectedSeats.length * 10;
    };

    const bookSeats = () => {
        if (selectedSeats.length === 0) {
            alert('Please select at least one seat.');
        } else {
            alert(`Seats booked: ${selectedSeats.join(', ')}. Total price: ${selectedSeats.length * 10} USD`);
            selectedSeats = [];
            renderSeats();
        }
    };

    renderSeats();
});