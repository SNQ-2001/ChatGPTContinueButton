// ボタンを作成する
const continueButton = document.createElement('button');
continueButton.innerText = 'Continue';
continueButton.classList.add("absolute", "rounded", "text-gray-500", "bottom-1.5", "md:bottom-2.5", "hover:bg-gray-100", "dark:hover:text-gray-400", "dark:hover:bg-gray-900", "disabled:hover:bg-transparent", "dark:disabled:hover:bg-transparent", "right-1", "md:right-2");
// continueButton.style.top = "13px"
continueButton.style.paddingLeft = "5px"
continueButton.style.paddingRight = "5px"
continueButton.style.textAlign = "center"

// ChatGPTの入力欄を取得する
const inputField = document.getElementsByTagName('textarea')[0];
// `textarea`の親要素を取得
const div = inputField.parentNode;

// ボタンがクリックされた際の処理を記述する
continueButton.addEventListener('click', () => {
    // メッセージを入力する
    inputField.value = "Continue";

    // イベントを作成して送信する
    const event = new InputEvent('input', {
        bubbles: true,
        cancelable: true,
    });
    input.dispatchEvent(event);

    // 送信する
    const form = input.closest('form');
    form.dispatchEvent(new Event('submit'));
});

// 送信ボタンを取得
const sendButton = div.getElementsByTagName("button")[0];
sendButton.style.right = "85px"

// ChatGPTの入力欄の直後に、ボタンを挿入する
div.appendChild(continueButton);

const target = document.body; // body要素を監視

const observer = new MutationObserver(function (mutations) {
    console.table(mutations);
});

// 監視を開始
observer.observe(target, {
    childList: true,
    subtree: true
});