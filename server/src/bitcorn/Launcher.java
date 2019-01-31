package bitcorn;

import bitcorn.verticles.DatabaseVerticle;
import bitcorn.verticles.HttpServerVerticle;
import io.vertx.core.Future;
import io.vertx.core.Vertx;

public class Launcher {
    public static void main(String [] args) {
        Vertx vertx = Vertx.vertx();

        // A Future represents the result of an action that may, or may not, have occurred yet.
        // String-type since an id is assigned to a verticle in case of successful deployment
        Future<String> dataBaseVerticleDeployment = Future.future();

        // input:
        // - Verticle verticle,
        // - Handler<AsyncResult<String>> completionHandler (handler which is notified in case of a deployment)
        // hint: deployment is an asynchronous task, so it can take some time until the Verticle is deployed
        // hint 2: the database has to be deployed first, since the http-server can else not retrieve the site data
        // hint 3: the future in dataBaseVerticleDeployment has to complete
        vertx.deployVerticle(new DatabaseVerticle(), dataBaseVerticleDeployment.completer());

        // compose
        // to tell an outer-object that deployment was successful
        // input: Function<T,Future<U>> mapper (so output has to be a future, that's why a return value is necessary)
        dataBaseVerticleDeployment.compose(id -> {
            Future<String> httpServerVerticleDeployment = Future.future();

            // the future httpServerVerticleDeployment is notified about a successful deployment
            vertx.deployVerticle(new HttpServerVerticle(), httpServerVerticleDeployment.completer());

            return httpServerVerticleDeployment;
        });
    }
}