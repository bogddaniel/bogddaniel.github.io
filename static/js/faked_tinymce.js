      tinymce.init({
        selector: '#mybody',
        advlist_bullet_styles: "square",
        menubar: false,
        inline: true,
        toolbar: false,
        imagetools_toolbar: "rotateleft rotateright | flipv fliph | editimage imageoptions",
        quickbars_insert_toolbar: 'undo redo | image media| hr | basicDateButton | procontro',
        quickbars_selection_toolbar: 'formatselect | bold italic underline strikethrough superscript subscript| forecolor backcolor | numlist bullist |alignleft aligncenter alignright alignfull alignjustify | link image media pageembed | outdent indent | hr | removeformat | code anchor wordcount',
        plugins: ['quickbars', 'lists', 'advlist','code', 'anchor', 'autolink', 'image','imagetools','link','media', 'wordcount', 'charmap','hr',],
      });