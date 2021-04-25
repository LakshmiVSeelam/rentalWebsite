$(document).ready(function () {
    var serviceArray = [{
            "id": 1,
            "serviceName": "Service 1"
        },
        {
            "id": 2,
            "serviceName": "Service 2"
        },
        {
            "id": 3,
            "serviceName": "Service 3"
        },
        {
            "id": 4,
            "serviceName": "Service 4"
        },
        {
            "id": 5,
            "serviceName": "Service 5"
        }
    ]

    serviceArray.forEach(function (elem) {
        let temp = '<div class="col-6 my-5 mx-auto">' +
            '<a href="">' +
            '<div class="card rounded-0">' +
            '<img src="' + baseurl + '/assets/img/service"' + elem.id + '.jpg" class="card-img-top rounded-0" alt="Service Image">' +
            '<div class="card-body bg-primary text-center">' +
            '<p class="card-text font-weight-bold h5 text-white">' + elem.serviceName + '</p>' +
            '</div>' +
            '</div>' +
            '</a>' +
            '</div>'
        $('.service_container .row').append(temp)
    })







    $('#scrollTopLink').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    $("#navbar").load("navbar.html", function () {
        // nav hover dropdown
        $('.center-nav li.dropdown').hover(function () {
            $(this).addClass('show');
            $(this).find('.dropdown-menu').addClass('show');

        }, function () {
            $(this).removeClass('show');
            $(this).find('.dropdown-menu').removeClass('show')

        });
        $('.dropdown-item, .dropdown').hover(function () {
            $('.dropdown-arrow').addClass('hovered');
        }, function () {
            $('.dropdown-arrow').removeClass('hovered');
        })

        let active_link = location.pathname.replace('/', '')
        $('.nav-link[href="' + active_link + '"]').closest('li').addClass('active')

    });
    $("#footer").load("footer.html", function () {
        // toggle footer call btn
        $('#toggle_btn').click(function () {
            $(this).find('#call').toggleClass('d-none');
            $(this).find('#number').toggleClass('d-none');
        })
    });

})