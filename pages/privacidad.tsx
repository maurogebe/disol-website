import React          from 'react'
import Head           from 'next/head';
import {DisolLayout}  from '../src/layout/DisolLayout'

import Grid             from "@material-ui/core/Grid";
import Typography       from "@material-ui/core/Typography";



function Privacidad(){
  return(
    <div>
      <Head>
        <title>Disol: Política de Privacidad</title>
      </Head>

      <DisolLayout>
        <Grid container item md={12} >
          <div style={{width: '100%', height:'55vw', maxHeight:'95vh', backgroundImage: "url(/Portada5.png)", backgroundSize:'cover'}}/>
        </Grid>

        <Grid container item md={12} direction='column' alignItems='center' justify='center' style={{backgroundColor: 'white', padding: 15}}>
          <Typography variant='h4' style={{color: 'gray', fontSize: '2.5rem', fontWeight: 300, padding: '1%'}}>
            Política de Privacidad
          </Typography>

          <Typography variant='subtitle1' style={{color: 'gray', fontWeight: 300, padding: '1%'}}>
            Versión 1.0 | 01 de Septiembre de 2019
          </Typography>

          <Grid container direction='row' alignItems='stretch' justify='center'>
            <Grid container item sm={1}> </Grid>
            <Grid container item sm={10} direction='column' alignItems='flex-start' justify='center' style={{padding: '1%'}}>
              <Typography variant='subtitle1' style={{color: '#FF6A13', fontWeight: 400, margin: '1% 0'}}>
                ¿QUÉ INCLUYE ESTE DOCUMENTO?
              </Typography>

              <Typography variant='body1' style={{textAlign: 'justify'}}>
                Para el óptimo funcionamiento de Disol App, es necesario recoger y procesar cierta información obtenida del dispositivo en el que se ha instalado.
                Esta información permite mejorar la app, adaptar el contenido de forma óptima para cada usuario o contactar con el usuario en caso de que sea necesario.
                Para demostrar que nos importa la privacidad de nuestros usuarios, hemos adoptado la presente Política de privacidad, la cual explica, en un lenguaje
                comprensible y sencillo de entender, cómo recogemos, almacenamos, usamos y revelamos la información que los usuarios nos confían. <br/> <br/>
                Estas Políticas de Privacidad tratan de cubrir el mayor número de escenarios posibles, incluso en muchos casos en los que la app ni siquiera recoge ni
                procesa la información descrita en esta Política de Privacidad.
              </Typography>

              <Typography variant='subtitle1' style={{color: '#FF6A13', fontWeight: 400, margin: '1% 0'}}>
                1. ¿QUÉ INFORMACIÓN RECOGE LA APP?
              </Typography>

              <Typography variant='body1' style={{textAlign: 'justify'}}>
                Esta aplicación recoge la información necesaria para el normal funcionamiento de nuestra actividad. Disol App NO recoge información personal con fines maliciosos.
                La app no recoge información como tu nombre completo. Por tanto, cualquier dato sensible que recoja, no se podrá asociar directamente a tu persona y será
                tratado de forma anónima. La app podrá recoger una dirección de correo electrónica y almacenarla para poder así contactar con el usuario si fuese necesario.
                En algunos casos puede que se combine esta información con otra información sobre ti obtenida de otras fuentes, como otras apps o sitios web.
              </Typography>

              <Typography variant='subtitle1' style={{color: '#FF6A13', fontWeight: 400, margin: '1% 0'}}>
                2. ¿QUÉ INFORMACIÓN RECOGE ESTA POLÍTICA DE PRIVACIDAD?
              </Typography>

              <Typography variant='body1' style={{textAlign: 'justify'}}>
                La App puede recoger información de dos tipos: (1) información no personal y anónima recogida automáticamente y (2) información de identificación personal (IIP)
                recogida manualmente tras consentimiento del usuario.
              </Typography>

              <Typography variant='body1' style={{textAlign: 'justify', fontWeight: 500, margin: '1% 0'}}>
                Información no personal recogida automáticamente
              </Typography>

              <Typography variant='body1' style={{textAlign: 'justify'}}>
                Información técnica, la cual incluye cierta información sobre el sistema operativo, incluyendo el tipo de operador o el tipo de navegador que utiliza, el Protocolo de
                Internet (IP), la dirección IP y los nombres y las versiones de las aplicaciones instaladas en el dispositivo. Dicha información técnica como la mencionada anteriormente
                permanece anónima, es decir, no lo identifica personalmente ni se guarda o asocia a cualquier otra información que la vincule con el propio usuario, salvo que el usuario
                introduzca voluntariamente información complementaria. Esta información se utilizará para mejorar la aplicación, aprendiendo cómo, cuándo y dónde navega el usuario a
                través de ella.
              </Typography>

              <Typography variant='body1' style={{textAlign: 'justify', fontWeight: 500, margin: '1% 0'}}>
                Información que el usuario provee libremente
              </Typography>

              <Typography variant='body1' style={{textAlign: 'justify'}}>
                Si en algún momento la app solicitase Información de Identificación Personal (IIP) que nos permitan contactar con él, como el nombre o el teléfono móvil, el usuario será
                libre de ofrecer dicha información. No obstante: Si compartes tu IIP en un formato abierto (por ejemplo, a través de redes sociales), la información que obtengamos no será
                protegida por esta política de privacidad. La IIP no incluirá ningún tipo de información recogida por la aplicación por ningún medio que no sea la presente aplicación en la
                cual figura la política de privacidad. Esto significa que la información recogida en cualquier otro lugar distinto a esta aplicación no está amparada por la presente
                Política de privacidad. Cabe resaltar que, si en algún caso la app ofreciese enlaces a otras aplicaciones, no nos hacemos responsables del contenido, actividad o información
                que tenga lugar en las mismas.
              </Typography>

              <Typography variant='body1' style={{textAlign: 'justify', margin: '1% 0'}}>
                Se considerá Información de carácter personal:
              </Typography>

              <Typography variant='body1' style={{textAlign: 'justify', margin: '1% 0', padding: '0 0 0 2%'}}>
                - La información demográfica tal y como la edad o día de nacimiento, nacionalidad, nivel educativo, sexo, intereses o cualidades. <br/>
                - La Información del usuario como el nombre de usuario y la contraseña, respuestas confidenciales a ciertas preguntas de seguridad, o información similar que nos permita
                únicamente identificar tu cuenta o autentificarla antes de dar información personal sobre la cuenta del usuario.
              </Typography>

              <Typography variant='body1' style={{textAlign: 'justify', margin: '1% 0'}}>
                La mayoría de estos datos se podrán obtener cuando la app ofrece una funcionalidad de registro social y el usuario acepta el registro en la app mediante una cuenta social.
                En algunos casos, la app se registra automáticamente con la cuenta social del usuario asociada al dispositivo y el usuario acepta extender dicho registro al utilizar esta app
              </Typography>

              <Typography variant='subtitle1' style={{color: '#FF6A13', fontWeight: 400, margin: '1% 0'}}>
                3. ¿QUÉ OCURRE CON LA INFORMACIÓN QUE RECOGEMOS DE LOS MENORES?
              </Typography>

              <Typography variant='body1' style={{textAlign: 'justify'}}>
                Esta aplicación no recoge información personal de niños menores de 13 años. Nos tomamos la privacidad del menor seriamente, y animamos a los padres a jugar un rol activo
                acerca en la educación online de sus hijos en todo momento. Los niños menores de 13 años no deben instalar nuestra aplicación en ningún dispositivo que les pertenezca y,
                si lo hacen, será bajo la total responsabilidad de sus padres o tutores. En caso de obtener información personal de un menor de 13 años, tomaremos medidas para eliminar
                la información suministrada de nuestro servidor. En el caso de que el contenido de esta aplicación haya recibido una calificación de apta para menores de 13 años, ésta
                debería instalarse exclusivamente en dispositivos pertenecientes a sus padres, tutores o cualquier persona mayor de 13 años. Si la aplicación solicitase información de
                carácter personal en algún momento, los menores de 13 años no deberán nunca introducir dicha información.
              </Typography>

              <Typography variant='subtitle1' style={{color: '#FF6A13', fontWeight: 400, margin: '1% 0'}}>
                4. ¿CÓMO RECOGEMOS LA INFORMACIÓN PERSONAL?
              </Typography>

              <Typography variant='body1' style={{textAlign: 'justify'}}>
                Recogemos la información de identificación personal (IIP), la información demográfica y la información del usuario de nuestros usuarios cuando los mismos:
              </Typography>

              <Typography variant='body1' style={{textAlign: 'justify', margin: '1% 0', padding: '0 0 0 2%'}}>
                - Se registran en nuestra aplicación. <br/>
                - Participan en encuestas, estudios o cuestionarios. <br/>
                - Participan en ofertas o promociones.
              </Typography>

              <Typography variant='body1' style={{textAlign: 'justify'}}>
                Además de la información establecida, utilizamos cookies para recoger información del usuario cuando visita nuestra aplicación. Las cookies son información que una
                página web o aplicación envía al dispositivo cuando se está navegando por dicha aplicación. A modo de ejemplo, cuando usted decida volver a nuestra aplicación después
                de registrarse, las cookies nos proporcionan información y así nuestro servidor recuerda quién es usted. Usted tiene la posibilidad de aceptar o rechazar las cookies,
                según la configuración de su dispositivo a través de las opciones de configuración. Si usted rechaza recibir o eliminar las cookies, el acceso a algunos servicios puede
                que no funcione adecuadamente.
              </Typography>

              <Typography variant='subtitle1' style={{color: '#FF6A13', fontWeight: 400, margin: '1% 0'}}>
                5. ¿CÓMO UTILIZAMOS LA INFORMACIÓN QUE NOS PROVEE?
              </Typography>

              <Typography variant='body1' style={{textAlign: 'justify'}}>
                Utilizamos la información que recopilamos en la aplicación, de la siguiente manera:
              </Typography>

              <Typography variant='body1' style={{textAlign: 'justify', margin: '1% 0', padding: '0 0 0 2%'}}>
                - Personalizar y mejorar su experiencia y permitirnos suministrarle el tipo de contenidos y ofertas que mejor se adapten a sus intereses. <br/>
                - Enviarle comunicaciones como cartas de bienvenida, confirmaciones de compra, avisos de pago o disposiciones administrativas. <br/>
                - Entregar, proveer y reparar productos o servicios. <br/>
                - Establecer y mantener las cuentas del usuario y su historial. <br/>
                - Contactar con usted acerca de nuestros productos y servicios y enviarle las mejores ofertas y promociones en función de sus intereses. <br/>
                - Estudiar las estadísticas de nuestra plataforma online. <br/>
                - Informar a nuestros empleados de atención al cliente. <br/>
                - Establecer su cuenta online y autentificarla durante su registro de usuario. <br/>
                - Procesar rápidamente sus peticiones de información. <br/>
                - Permitirnos responder eficientemente a sus dudas. <br/>
                - Analizar una promoción o una encuesta. <br/>
                - Enviarle material promocional. <br/>
                -Permitirnos compartir la información con terceras empresas en los términos que se han descrito en estas políticas de privacidad y con los
                propósitos descritos en los puntos anteriores, siempre que esté permitido por la ley. <br/>
              </Typography>

              <Typography variant='subtitle1' style={{color: '#FF6A13', fontWeight: 400, margin: '1% 0'}}>
                6. ¿CON QUIÉN COMPARTIMOS LA INFORMACIÓN?
              </Typography>

              <Typography variant='body1' style={{textAlign: 'justify'}}>
                Esta aplicación puede que monetice tu información, cediéndola a terceras empresas (en algunos casos), tu IIP e información de usuario, en las siguientes situaciones:
              </Typography>

              <Typography variant='body1' style={{textAlign: 'justify', margin: '1% 0', padding: '0 0 0 2%'}}>
                - Cuando la app se monetiza mediante publicidad, las redes de publicidad y/o los anunciantes que proveen los anuncios pueden requerir cierta información del usuario
                o del dispositivo para poder así ofrecer el anuncio más apropiado para el usuario o que más interés le pueda despertar. La app puede utilizar redes como Mobincube,
                Startapp, Airpush, Tappx, Facebook, Amazon, Google o Docomo, entre otras.<br/>
                - Cuando contratamos empresas para ejecutar y optimizar campañas de marketing o anuncios y administrar y estudiar los datos de los consumidores. Estas compañías sólo
                están autorizadas a obtener el IIP y la información de usuario estrictamente necesaria para cumplir con la tarea encomendada, quedando totalmente prohibido utilizar
                cualquier tipo de información para otro fin que el acordado. También han accedido a guardar la información confidencial en un lugar seguro. En el caso de que esta
                aplicación contrate una red de publicidad, se requiere que dicha red se comprometa a no hacer un uso fraudulento de los datos que se le concedan para el normal uso
                de su actividad.<br/>
                - Cuando contratamos redes de publicidad independientes para mostrar el banner de publicidad de nuestra aplicación cuando visita páginas web de terceros.
                Para hacerlo de una manera más eficiente, la red de publicidad puede que utilice e inserte en su dispositivo cierta tecnología, como el caso de las cookies,
                para recoger de usted información no personal cuando visita nuestra aplicación. Esta información es utilizada para mostrar anuncios sobre bienes y servicios
                que mejor se adecuen a sus intereses cuando visite otras páginas web.
              </Typography>

              <Typography variant='body1' style={{textAlign: 'justify'}}>
                A menudo evaluamos (a veces con la ayuda de empresas externas) cómo nuestro contenido y servicios online están desarrollándose. La información relevada a este fin descansará
                en el servidor de la empresa y estará limitada al uso profesional de la misma. En ningún caso, el IIP o la información del usuario será compartida salvo para lo establecido
                anteriormente. <br/> <br/>

                Cuando la revelación de datos sea requerida por ley o estén dirigidas a proteger la seguridad de las aplicaciones, esta aplicación tiene el derecho de revelar cualquier
                información recogida, sin importar cuando de recogió esa información. Sólo llevaremos a cabo esta revelación de información cuando sea permitido o requerido por la ley,
                o cuando consideremos que existen motivos de buena fe: (I) para proteger su seguridad, incluido la de su propiedad, (II) para proteger la seguridad de sus aplicaciones
                o terceros y (III) para ejecutar los términos de uso, actualizaciones o promociones.
              </Typography>

              <Typography variant='subtitle1' style={{color: '#FF6A13', fontWeight: 400, margin: '1% 0'}}>
                7. ¿HABRÁ TERCEROS QUE RECOJAN INFORMACIÓN DE SUS APLICACIONES?
              </Typography>

              <Typography variant='body1' style={{textAlign: 'justify'}}>
                Hay ciertas situaciones donde un tercero puede recoger información de la aplicación. Esta app puede utilizar librerías de terceros que ofrezcan cierta funcionalidad:
                herramientas de análisis, herramientas de comunicación, redes sociales, anunciantes, etc.
              </Typography>

              <Typography variant='body1' style={{textAlign: 'justify', margin: '1% 0', padding: '0 0 0 2%'}}>
                - Herramientas de análisis: para mejorar la aplicación, se podrán utilizar herramientas que analizan el comportamiento de los usuarios. Así podemos saber qué partes
                de la aplicación son más importantes y cuáles hay que mejorar.<br/>
                - Herramientas de comunicación: por si en algún momento necesitamos comunicarnos con los usuarios, integramos herramientas de terceros que facilitan esta comunicación,
                ya sea mediante notificaciones push, emails, alertas dentro de la app, etc.<br/>
                - Redes sociales: si la app llegara a conectar con alguna red social, se pedirá autorización. Una vez autorizada la conexión, la red social podrá acceder a cierta información.<br/>
                - Redes publicitarias: en el caso de que esta app mostrase publicidad, normalmente provendrá de redes publicitarias que conectan con los anunciantes. Estas redes necesitan cierta
                información para poder proporcionar el anuncio más adecuado para usted.
              </Typography>

              <Typography variant='body1' style={{textAlign: 'justify'}}>
                Esta aplicación se reserva el derecho a dar cierta información del usuario a empresas que colaboren con nosotros o a desarrolladores de software que proporcionan alguna
                funcionalidad de la app. Proveemos este tipo de acceso a tales empresas con el objetivo de generar interés en nuestros productos entre los miembros con los que tenemos
                algún tipo de acuerdo así como para permitir llegar a usted y a sus amigos el tipo de producto que ofrecemos. La información recogida por nosotros será tratada de acuerdo
                con los términos de esta Política de privacidad, pero el uso de la información por parte de un tercero será tratada según sus propios estándares. Esta aplicación no garantiza
                que la otra parte cumpla su política de seguridad.
              </Typography>

              <Typography variant='subtitle1' style={{color: '#FF6A13', fontWeight: 400, margin: '1% 0'}}>
                8. ¿QUÉ TIPO DE MEDIDAS DE SEGURIDAD TOMAMOS PARA SALVAGUARDAR SU INFORMACIÓN PERSONAL?
              </Typography>

              <Typography variant='body1' style={{textAlign: 'justify'}}>
                La seguridad y la confidencialidad de su información es extremadamente importante para Diversity Solutions Consulting. Por esa razón tenemos medidas de seguridad técnicas,
                administrativas y físicas en orden para proteger su información personal frente a acceso no autorizado y uso fraudulento. También revisamos nuestro sistema de seguridad
                periódicamente para insertar las novedades tecnológicas y métodos de actualización. No obstante, a pesar de nuestros esfuerzos, ningún método de seguridad es completamente
                perfecto e infalible. <br/> <br/>

                Usted también puede jugar un rol importante en mantener su información guardada de forma segura. Si a usted se le requiere crear una contraseña única para restringir el acceso
                a su cuenta, elija una contraseña que sea difícil de averiguar por otros usuarios, y tenga la precaución de no revelarla a nadie. Es su responsabilidad guardar su contraseña y
                la información de su cuenta en todo momento. Si usted usa un dispositivo móvil público o compartido, nunca le de a guardar usuario y cierre en todo momento la sesión de su cuenta
                cada vez que deje de utilizar el dispositivo. <br/> <br/>

                Finalmente, respecto a las empresas que tienen un acuerdo con esta aplicación, les requerimos que acepten proteger nuestros términos de confidencialidad, integridad y seguridad de
                cualquier información personal que compartamos con ellos. Cuando su información personal sea compartida o simultáneamente recogida por un tercero tal y como se exponía anteriormente,
                o será obvio para usted teniendo en cuenta el contexto (tal y como la aparición de un tercero en la pantalla del teléfono) o será notificado en el momento en que la información
                personal sea reclamada. Además, se le dará la oportunidad de aceptar o declinar este tipo de prácticas antes de que se inicien. Tal y como se estableció en la sección 3 de esta
                Política de privacidad, no recogemos información personal de niños menores de 13 años y les informamos de que no deben hacer uso de nuestra herramienta en ningún caso. De este modo,
                esta aplicación no compartirá información recogida de los menores de 13 años con ningún tipo de empresa que haya firmado un acuerdo de colaboración.<br/> <br/>

                En caso de que detectásemos que alguno de nuestros partners tecnológicos pusiera en riesgo tu integridad o utilizase tu información para llevar a cabo cualquier acción ilegal,
                tomaremos las medidas oportunas para cortar la relación con dicho proveedor.
              </Typography>

              <Typography variant='subtitle1' style={{color: '#FF6A13', fontWeight: 400, margin: '1% 0'}}>
                9. ¿CÓMO PUEDE HACER PREGUNTAS O ENVIARNOS COMENTARIOS ACERCA DE NUESTRA POLÍTICA DE PRIVACIDAD?
              </Typography>

              <Typography variant='body1' style={{textAlign: 'justify'}}>
                Si tiene algún tipo de duda o desea ponerse en contacto con nosotros para aclarar cualquier punto, por favor envíenos un e-mail a la dirección de soporte de Disol App, la cual puede
                encontrar en la sección de contacto de este sitio web.
              </Typography>

              <Typography variant='subtitle1' style={{color: '#FF6A13', fontWeight: 400, margin: '1% 0'}}>
                10. ¿CÓMO SABRÁ USTED SI MODIFICAMOS NUESTRA POLÍTICA DE PRIVACIDAD?
              </Typography>

              <Typography variant='body1' style={{textAlign: 'justify'}}>
                Esta aplicación se reserva el derecho a modificar la presente política de privacidad en cualquier momento, aunque no es habitual. Cualquier cambio en las políticas normalmente irá
                acompañado de una actualización en la versión de la aplicación. Al inicio de estas políticas puedes encontrar el número de versión y la fecha en que se han editado. En caso de proceder
                a un cambio material en cómo recogemos, usamos o compartimos la información personal, añadiremos estos cambios en una nueva versión de estas políticas.
              </Typography>

              <Typography variant='subtitle1' style={{color: '#FF6A13', fontWeight: 400, margin: '1% 0'}}>
                11. ACLARACIONES RESPECTO AL USO DEL ID DE PUBLICIDAD DE ANDROID
              </Typography>

              <Typography variant='body1' style={{textAlign: 'justify'}}>
                La versión 4.0 de servicios de Google Play ha introducido nuevas API y un código identificador (ID) que pueden utilizar proveedores de análisis y publicidad.
                A continuación se indican las condiciones de uso de estas API y de este ID.
              </Typography>

              <Typography variant='body1' style={{textAlign: 'justify', margin: '1% 0', padding: '0 0 0 2%'}}>
                - Uso: El identificador de publicidad de Android solo se utiliza con fines de publicidad y análisis de los usuarios. El estado de la opción para inhabilitar
                la publicidad basada en intereses se debe verificar en cada acceso del ID.<br/>
                - Asociación a información de identificación personal u a otros identificadores: El identificador de publicidad no se vincula a información de identificación
                personal ni se asocia a cualquier identificador de dispositivo persistente (por ejemplo, SSAID, dirección MAC o IMEI) sin el consentimiento explícito del usuario.<br/>
                - Respeto de las selecciones de los usuarios: Tras el restablecimiento, el nuevo identificador de publicidad no se vincula a un identificador de publicidad anterior o a
                datos derivados de un identificador de publicidad anterior sin el consentimiento explícito del usuario. Asimismo, se ofrece la opción para inhabilitar la publicidad basada
                en intereses del usuario. Si un usuario ha habilitado esta opción, no se utiliza el identificador de publicidad para crear perfiles de usuario con fines publicitarios o
                para llegar a usuarios con publicidad basada en intereses. Entre las actividades permitidas, se incluyen la publicidad contextual, la limitación de frecuencia, el seguimiento
                de conversiones, la elaboración de informes y la detección del fraude y de la seguridad.<br/>
                - Cumplimiento de las condiciones de uso: El identificador de publicidad solo se utiliza de acuerdo con estas condiciones, incluido el uso que haga de él cualquier parte con
                la que puedas compartirlo durante la actividad comercial. A partir del 1 de agosto de 2014, todas las actualizaciones y las nuevas aplicaciones que se suban a Play Store deben
                utilizar el ID de publicidad (cuando esté disponible en un dispositivo) en lugar de cualquier otro identificador de dispositivo con fines publicitarios.
              </Typography>
            </Grid>
            <Grid container item sm={1}> </Grid>
          </Grid>
        </Grid>

      </DisolLayout>
    </div>
  )
}

export default Privacidad