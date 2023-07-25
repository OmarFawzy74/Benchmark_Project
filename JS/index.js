
$("document").ready(function() {
    $("#option").change(function() {
        Chart.defaults.font.size = 16;
        var value = $("#option")[0].value;
        console.log(value);
        var Data;
        var Label = 'Rating';
        var BorderRadius = 40;

        $("#parent").removeClass("allStoreChart-container");
        $("#tablesContainer").remove();
        $("#myChart").remove();
        $("#parent").prepend('<canvas id="myChart"></canvas>');

        if(value == "playStore") {
            Data = [3.7,4.4,4.5];
        }
    
        if(value == "appStore") {
            Data = [3.3,3.2,4.2];
        }
    
        if(value == "appGallery") {
            Data = [3.5,4.4,4.3];
        }

        if(value == "startupTime") {
            Label = 'Time(sec)';
            BorderRadius = 100;
            Data = [2.48,2.63,2.36];
        }

        if(value == "features"){
            $("#parent").prepend(
                '<div id="tablesContainer">'+
                    '<div>'+
                        '<table class="table seconderyTable">'+
                            '<thead class="table-light">'+
                            '<tr>'+
                                '<th><span id="secTableHeader">Application Features</span></th>'+
                            '</tr>'+
                            '</thead>'+
                        '</table>'+
                    '</div>'+

                    '<div>'+
                        '<table class="table primaryTable">'+
                            '<thead class="table-light">'+
                                '<tr>'+
                                    '<th id="MyOrangeHeader">'+
                                        '<div>'+
                                            '<img class="orangeIcon" src="./images/orange-icon.ico"> My Orange'+
                                        '</div>'+
                                    '</th>'+

                                    '<th id="AnaVodafoneHeader">'+
                                        '<div class="vodafoneContent">'+
                                            '<img class="vodafoneIcon" src="./images/vodafone-icon.ico"> Ana Vodafone'+
                                        '</div>'+
                                    '</th>'+

                                    '<th id="myEtisalat">'+
                                        '<div class="etisalatContent">'+
                                            '<img class="etisalatIcon" src="./images/etisalat-icon.ico"> My Etisalat'+
                                        '</div>'+
                                    '</th>'+
                                '</tr>'+
                            '</thead>'+
                            '<tbody>'+
                                '<tr>'+
                                    '<td class="rowStyle">Recharge and Bills</td>'+
                                    '<td class="rowStyle">Recharge and Balance</td>'+
                                    '<td class="rowStyle">Recharge</td>'+
                                '</tr>'+

                                '<tr>'+
                                    '<td class="rowStyle">Credit Transfer</td>'+
                                    '<td class="rowStyle">Balance Transfer</td>'+
                                    '<td class="rowStyle">Balance Transfer</td>'+
                                '</tr>'+

                                '<tr>'+
                                    '<td class="rowStyle">Tariff Management</td>'+
                                    '<td class="rowStyle">Manage Tariff</td>'+
                                    '<td class="rowStyle">Manage Tariff</td>'+
                                '</tr>'+

                                '<tr>'+
                                    '<td class="rowStyle">Orange E-Shop</td>'+
                                    '<td class="rowStyle">Vodafone E-Shop</td>'+
                                    '<td class="rowStyle">Etisalat E-Shop</td>'+
                                '</tr>'+

                                '<tr>'+
                                    '<td class="rowStyle">Chatbot</td>'+
                                    '<td class="rowStyle">Chatbot</td>'+
                                    '<td class="rowStyle">Chatbot</td>'+
                                '</tr>'+

                                '<tr>'+
                                    '<td class="rowStyle">Orange Cash</td>'+
                                    '<td class="rowStyle">Vodafone Cash</td>'+
                                    '<td class="rowStyle">Etisalat Cash</td>'+
                                '</tr>'+

                                '<tr>'+
                                    '<td class="rowStyle">Orange Entertainment</td>'+
                                    '<td class="rowStyle">Vodafone Entertainment</td>'+
                                    '<td class="rowStyle">Etisalat Entertainment</td>'+
                                '</tr>'+

                                '<tr>'+
                                    '<td class="rowStyle">Offers and Promotions</td>'+
                                    '<td class="rowStyle">Daily Offers and Gifts</td>'+
                                    '<td class="rowStyle">Daily Offers and Gifts</td>'+
                                '</tr>'+

                                '<tr>'+
                                    '<td class="rowStyle">ADSL Services</td>'+
                                    '<td class="rowStyle">ADSL Services</td>'+
                                    '<td class="rowStyle">ADSL Services</td>'+
                                '</tr>'+

                                '<tr>'+
                                    '<td class="rowStyle">----</td>'+
                                    '<td class="rowStyle">Pay Utilites</td>'+
                                    '<td class="rowStyle">Pay Utilites</td>'+
                                '</tr>'+

                                '<tr>'+
                                    '<td class="rowStyle">----</td>'+
                                    '<td class="rowStyle">----</td>'+
                                    '<td class="rowStyle">E-Coins</td>'+
                                '</tr>'+

                                '<tr>'+
                                    '<td class="rowStyle">Find Orange Stores</td>'+
                                    '<td class="rowStyle">----</td>'+
                                    '<td class="rowStyle">Locate US</td>'+
                                '</tr>'+


                                '<tr>'+
                                    '<td class="rowStyle">----</td>'+
                                    '<td class="rowStyle">Customize My Offer</td>'+
                                    '<td class="rowStyle">----</td>'+
                                '</tr>'+

                                '<tr>'+
                                    '<td class="rowStyle">Special Points</td>'+
                                    '<td class="rowStyle">Red Points</td>'+
                                    '<td class="rowStyle">----</td>'+
                                '</tr>'+
                            '</tbody>'+
                        '</table>'+
                    '</div>'+
                '</div>'
            );
        }

        if(value != "allStores" && value != "features") {
        ctx = document.getElementById('myChart');
        new Chart(ctx, {
            type: 'bar',
            data: {
            labels: ['My Orange','Ana Vodafone','My Etisalat'],
            datasets: [{
                label: Label,
                data: Data,
                borderColor: ['rgba(70, 70, 70, 0.69)'],
                backgroundColor: ['rgba(255, 92, 0, 0.75)','rgba(248, 2, 2, 0.75)', 'rgba(11, 0, 0, 0.84)'],
                hoverBorderWidth: 5,
                borderRadius: BorderRadius,
                borderSkipped: false,
                borderWidth: 0
            }]
            },
            options: {
            scales: {
                y: {
                grace: '10%'
                }
            }
            }
        });
        }
        else if(value == "allStores") {
            $("#parent").addClass("allStoreChart-container")
            const ctx = document.getElementById('myChart');
            new Chart(ctx, {
                type: 'line',
                data: {
                labels: ['App Store','Play Store','AppGallery'],
                datasets: [{
                    label: 'My Orange',
                    data: [3.3,3.7,3.5],
                    pointRadius: 10,
                    pointHoverRadius: 15,
                    borderColor: ['rgba(255, 92, 0, 0.75)'],
                    backgroundColor: ['rgba(255, 92, 0, 0.75)'],
                    borderWidth: 0
                },
                {
                    label: 'Ana Vodafone',
                    data: [3.2,4.4,4.4],
                    pointRadius: 10,
                    pointHoverRadius: 15,
                    borderColor: ['rgba(248, 2, 2, 0.75)'],
                    backgroundColor: ['rgba(248, 2, 2, 0.75)'],
                    borderWidth: 0
                },
                {
                    label: 'My Etisalat',
                    data: [4.2,4.5,4.3],
                    borderColor: ['rgba(11, 0, 0, 0.84)'],
                    backgroundColor: ['rgba(11, 0, 0, 0.84)'],
                    pointRadius: 10,
                    pointHoverRadius: 15,
                    borderWidth: 0
                }]
                },
                options: {
                responsive: true,
                plugins: {
                    legend: {
                        labels: {
                            font: {
                                size: 16
                            }
                        }
                    }
                },
                animations: {
                    tension: {
                    duration: 1000,
                    easing: 'linear',
                    from: 1,
                    to: 0,
                    loop: false
                    },
                    borderWidth: {
                    duration: 1000,
                    from: 4,
                    to: 1,
                    loop: false
                    }
                },
                scales: {
                    x: {},
                    y: {
                    grace: '10%',
                    }
                },
                }
            });
        }
    });
});