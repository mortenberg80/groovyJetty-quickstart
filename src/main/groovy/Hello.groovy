html.html {
  head {
      title("Groovy Servlet")
      link(href:'css/bootstrap.min.css', rel:'stylesheet', media:'screen')
  }
  body {
    div(class:'container') {
      h1("Varslinger")
      table(class:'table table-striped') {
          thead {
              tr {
                  th("Dato")
                  th("Behandlet")
                  th("Sendt epost")
                  th("Sendt sms")
              }
          }
          tbody {
              tr {
                  td("22.05.2013")
                  td("350")
                  td("30")
                  td("0")
              }
              tr {
                  td("21.05.2013")
                  td("150")
                  td("10")
                  td("0")
              }
              tr {
                  td("20.05.2013")
                  td("250")
                  td("20")
                  td("0")
              }
          }
      }
    }
    script(src:'http://code.jquery.com/jquery.js')
    script(src:'js/bootstrap.min.js')
  }
}
