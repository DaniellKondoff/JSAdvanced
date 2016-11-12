/**
 * Created by Kondoff on 12-Nov-16.
 */
function increment(selector) {
    let container=$(selector);
    let textArea=$('<textarea></textarea>');
    let btnIncrement=$('<button>Increment</button>');
    let btnAdd=$('<button>Add</button>');
    let list=$('<ul>');

    textArea.val(0);
    textArea.addClass('counter');
    textArea.attr('disabled',true);
    btnIncrement.addClass("btn");
    btnIncrement.attr('id','incrementBtn');
    btnAdd.addClass('btn');
    btnAdd.attr('id','addBtn');
    list.addClass('results');

    btnIncrement.on('click',function () {
        let textValue=parseInt(textArea.val());
        textArea.val(++textValue)
    });

    btnAdd.on('click',function () {
        let textValue=parseInt(textArea.val());
        let li=$('<li>');
        li.text(textValue);
        list.append(li);
    });

    container.append(textArea);
    container.append(btnAdd);
    container.append(btnIncrement);
    container.append(list);
    $(document.body).append(container)
}