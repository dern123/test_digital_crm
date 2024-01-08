import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../statistics/statistics.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  constructor(private statisticsService: StatisticsService){}
  public stats: any;
  public firstStat: any = {
    label:[], 
    leads_count:[],
    installs: [],
    reattrebutions: [],
    waus: [],
    roas: [],
    spead: [],
    events: []
  };
  public firstData: any;
  public firstOptions: any;
  public secondData: any;
  public secondOptions: any;
  public thirdData: any;
  public thirdOptions: any;
  public fourthData: any;
  public fourthOptions: any;
  public fifthData: any;
  public fifthOptions: any;
  
  firstStats(){
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

      this.firstData = {
          labels: [...this.firstStat.label],
          datasets: [
              {
                  label: 'Leads',
                  data: [...this.firstStat.leads_count],
                  backgroundColor: [
                    'rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 17, 13, 0.2)', 'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 44, 0.2)', 'rgba(75, 132, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(113, 102, 255, 0.2)', 'rgba(43, 102, 25, 0.2)',
                    'rgba(255, 254, 64, 0.2)', 'rgba(75, 292, 192, 0.2)', 'rgba(54, 162, 135, 0.2)'],
                  borderColor: [
                    'rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)', 'rgba(153, 17, 13)', 'rgba(153, 102, 255)',
                    'rgba(255, 159, 44)', 'rgba(75, 132, 192)', 'rgba(54, 162, 235)', 'rgba(113, 102, 255)', 'rgba(43, 102, 25)',
                    'rgba(255, 254, 64)', 'rgba(75, 292, 192)', 'rgba(54, 162, 135)'],
                  borderWidth: 1
              }
          ]
      };

      this.firstOptions = {
          plugins: {
              legend: {
                  labels: {
                      color: textColor
                  }
              }
          },
          scales: {
              y: {
                  beginAtZero: true,
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              },
              x: {
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              }
          }
      };
  }

  secondStats() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');

      this.secondData = {
          labels: [...this.firstStat.label],
          datasets: [
              {
                label: 'Installs',
                  data: [...this.firstStat.installs],
                  backgroundColor: [
                    documentStyle.getPropertyValue('--blue-500'), 
                    documentStyle.getPropertyValue('--yellow-500'), 
                    documentStyle.getPropertyValue('--green-500'),
                    documentStyle.getPropertyValue('--gray-500'),
                    documentStyle.getPropertyValue('--pink-500'),
                    documentStyle.getPropertyValue('--purple-500'),
                    documentStyle.getPropertyValue('--blue-300'),
                    documentStyle.getPropertyValue('--yellow-500'),
                    documentStyle.getPropertyValue('--red-300'),
                    documentStyle.getPropertyValue('--purple-300'),
                    documentStyle.getPropertyValue('--green-300'),
                    documentStyle.getPropertyValue('--orange-300'),
                    documentStyle.getPropertyValue('--pink-300')
                  ],
                  hoverBackgroundColor: [
                    documentStyle.getPropertyValue('--blue-500'), 
                    documentStyle.getPropertyValue('--yellow-500'), 
                    documentStyle.getPropertyValue('--green-500'),
                    documentStyle.getPropertyValue('--gray-500'),
                    documentStyle.getPropertyValue('--pink-500'),
                    documentStyle.getPropertyValue('--purple-500'),
                    documentStyle.getPropertyValue('--blue-300'),
                    documentStyle.getPropertyValue('--yellow-500'),
                    documentStyle.getPropertyValue('--red-300'),
                    documentStyle.getPropertyValue('--purple-300'),
                    documentStyle.getPropertyValue('--green-300'),
                    documentStyle.getPropertyValue('--orange-300'),
                    documentStyle.getPropertyValue('--pink-300')
                  ]
              }
          ]
      };

      this.secondOptions = {
          plugins: {
              legend: {
                  labels: {
                      usePointStyle: true,
                      color: textColor
                  }
              }
          }
      };
  }
  thirdStats(){
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.thirdData = {
            labels: [...this.firstStat.label],
            datasets: [
                {
                    label: 'Reattrebutions',
                    data: [...this.firstStat.reattrebutions],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    tension: 0.4
                },
                {
                    label: 'Events',
                    data: [...this.firstStat.events],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--pink-500'),
                    tension: 0.4
                }
            ]
        };

        this.thirdOptions = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
  }
  fourthStats(){
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.fourthData = {
        labels: [...this.firstStat.label],
        datasets: [
            {
                label: 'Waus',
                data: [...this.firstStat.waus],
                fill: false,
                borderColor: documentStyle.getPropertyValue('--green-500'),
                tension: 0.4
            },
            {
                label: 'Roas',
                data: [...this.firstStat.roas],
                fill: false,
                borderColor: documentStyle.getPropertyValue('--purple-500'),
                tension: 0.4
            }
        ]
    };

    this.fourthOptions = {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            }
        }
    };
}
  fifthStats(){
    const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        
        this.fifthData = {
            datasets: [
                {
                    data: [...this.firstStat.spead],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--red-500'),
                        documentStyle.getPropertyValue('--green-500'),
                        documentStyle.getPropertyValue('--yellow-500'),
                        documentStyle.getPropertyValue('--gray-500'),
                        documentStyle.getPropertyValue('--pink-500'),
                        documentStyle.getPropertyValue('--purple-500'),
                        documentStyle.getPropertyValue('--blue-500'),
                        documentStyle.getPropertyValue('--yellow-500'),
                        documentStyle.getPropertyValue('--red-300'),
                        documentStyle.getPropertyValue('--purple-300'),
                        documentStyle.getPropertyValue('--green-300'),
                        documentStyle.getPropertyValue('--orange-300'),
                        documentStyle.getPropertyValue('--blue-500')
                    ],
                    label: 'Spead'
                }
            ],
            labels: [...this.firstStat.label]
        };
        
        this.fifthOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                r: {
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };
  }
  ngOnInit() {
    this.statisticsService.getAll().subscribe((data: any) => {
      try{
        if(data.status){
          this.stats = data.data;
          this.stats.forEach((el:any) => {
            this.firstStat.label.push(el.company_name);
            this.firstStat.leads_count.push(el.leads_count);            
            this.firstStat.installs.push(el.installs);            
            this.firstStat.reattrebutions.push(el.reattrebutions);            
            this.firstStat.waus.push(el.waus);            
            this.firstStat.roas.push(el.roas);            
            this.firstStat.spead.push(el.spead);            
            this.firstStat.events.push(el.events);            
            // this.secondStat.data.push(el.leads_count);
          })
          this.firstStats();
          this.secondStats();
          this.thirdStats();
          this.fourthStats();
          this.fifthStats();
        }
      }catch(e){
        console.error("Message error", e)
        throw e;
      }
    })
  }
}
