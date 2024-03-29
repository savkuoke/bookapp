let serverBaseUrl = 'http://localhost:3000/v1_sequelize';
 
$(document).ready(function () {
// Fetch and display books
function fetchBooks() {
    $.get(serverBaseUrl+'/books', function (books) {
        $('#books-list').empty(); // Assuming #books-list is the container for the table
        // Initialize the table with headers
        var tableHTML = `
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Summary</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>`;

        // Append rows to the table for each book
        books.forEach(function (book) {
            tableHTML += `<tr>
                    <td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.summary}</td>
                    <td>${book.categoryName}</td>
                    <td>
                    <button onclick="editBook('${book.id}')">Edit</button>
                    <button onclick="deleteBook('${book.id}')">Delete</button>
                    </td>
                </tr>`;
            });
    // Close the table structure
    tableHTML += '</tbody> </table>';

    // Append the constructed table HTML to your books list container
    $('#books-list').html(tableHTML);
});
}

  // Add or Update a book
  $('#book-form').submit(function (e) {
      e.preventDefault();

      var id = $('#book-id').val();
      var title = $('#book-title').val();
      var author = $('#book-author').val();
      var summary = $('#book-summary').val();

      var bookData = {
          title: title,
          author: author,
          summary: summary
      };

// Add book
if (id) {
  // Update book
  $.ajax({
      url: serverBaseUrl + '/books/' + id,
      method: 'PUT',
      contentType: 'application/json',
      data: JSON.stringify(bookData),
      success: function () {
          resetForm();
          fetchBooks();
      }
    });
} else {
  // Convert this to use $.ajax for consistency
  $.ajax({
      url: serverBaseUrl + '/books',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(bookData),
      success: function () {
          resetForm();
          fetchBooks();
      }
  });
}

  });

  // Edit book function
  window.editBook = function (id) {
      $.get(serverBaseUrl+'/books/' + id, function (book) {
          $('#book-id').val(book.id);
          $('#book-title').val(book.title);
          $('#book-author').val(book.author);
          $('#book-summary').val(book.summary);
      });
  };

  // Delete book function
  window.deleteBook = function (id) {
      $.ajax({
          url: serverBaseUrl+'/books/' + id,
          method: 'DELETE',
          success: function () {
              fetchBooks();
          }
      });
  };

  // Reset form
  function resetForm() {
      $('#book-id').val('');
      $('#book-title').val('');
      $('#book-author').val('');
      $('#book-summary').val('');
  }

  // Initial fetch of books
  fetchBooks();
});
