document.addEventListener('DOMContentLoaded', function() {
    formHandler('customerForm');
});

function formHandler(formId: string) {
    const form = document.getElementById(formId) as HTMLFormElement;
    const notify = document.getElementById('notify') as HTMLDivElement;
    const nameInput = document.getElementById('name') as HTMLFormElement;
    const addressInput = document.getElementById('address') as HTMLFormElement;
    const emailInput = document.getElementById('email') as HTMLFormElement;

    form.addEventListener('submit', async function (event) {
        event.preventDefault();
        const formData = {
            name: nameInput.value,
            address:addressInput.value,
            email:emailInput.value,
        };

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            if(response.ok){
                notify.style.display = 'block';
                notify.textContent = "등록 되었습니다.";
                notify.style.color = 'green';
                form.reset();
                setTimeout(() => {
                    notify.style.display = 'none';
                }, 3000);
            }else {
                notify.style.display = 'block';
                notify.textContent = "등록에 실패했습니다.";
                notify.style.color = 'red';
            }
        } catch (error) {
            console.error(error);
            notify.style.display = 'block';
            notify.textContent = "전송 실패했습니다.";
            notify.style.color = 'red';
        }
    });
}
