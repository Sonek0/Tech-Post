async function commentFormHandler(event) {
  event.preventDefault();

  const comment_text = document
    .querySelector('textarea[name="comment-body"]')
    .value.trim();

  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  if (comment_text) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        post_id,
        comment_text,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    //if else true false boolean "if true return... if false return..."
    if (response.ok) {
      document.location.reload();
    } else {
      //https://developer.mozilla.org/en-US/docs/Web/API/Response/status (resource)
      //status read-only property of the Response interface contains the status code of the response
      alert(response.statusText);
    }
  }
}
//listen for the submit button 0
document
  .querySelector(".comment-form")
  .addEventListener("submit", commentFormHandler);
