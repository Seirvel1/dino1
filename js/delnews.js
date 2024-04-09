document.addEventListener('DOMContentLoaded', function () {
    const deleteButtons = document.querySelectorAll('.delete-news-btn');

    deleteButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Получаем ID новости из data-атрибута
            const newsId = this.getAttribute('data-id');

            // Подтверждаем удаление (опционально)
            const confirmation = confirm("Вы уверены, что хотите удалить эту новость?");
            if (confirmation) {
                // Отправляем ID новости на сервер для удаления
                const form = document.createElement('form');
                form.method = 'post';
                form.action = 'delete_news.php'; // Укажите путь к PHP-обработчику удаления

                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = 'news_id';
                input.value = newsId;

                form.appendChild(input);
                document.body.appendChild(form);
                form.submit();
            }
        });
    });
});
