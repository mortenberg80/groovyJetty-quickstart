@Grab('org.eclipse.jetty.aggregate:jetty-all-server:8.1.0.v20120127')
import org.eclipse.jetty.servlet.ServletContextHandler
import groovy.servlet.GroovyServlet
import org.eclipse.jetty.server.Server
import org.eclipse.jetty.server.handler.ResourceHandler

int JETTY_SERVER_PORT = 8094
// static files handler
ResourceHandler resourceHandler = new ResourceHandler()
resourceHandler.with {
    directoriesListed = true
    resourceBase = 'src/main/webapp'
}

ServletContextHandler context = new ServletContextHandler(ServletContextHandler.NO_SESSIONS)
context.with {
    contextPath = '/'
    resourceBase = 'src/main/groovy'
    addServlet(GroovyServlet, '*.groovy')
    handler = resourceHandler
}

jettyServer = new Server(JETTY_SERVER_PORT)
jettyServer.with {
    setHandler(context)
    start()
}
