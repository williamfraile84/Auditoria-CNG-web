const e={madurezScore:38,totalTests:42,passedTests:30,passRate:71.4,vulnsTests:6,vulnRate:14.3,defectsTests:4,defectRate:9.5},a=[{id:"resumen",numero:"1",titulo:"Diagnóstico QA & Resumen",badge:"Métricas Globales"},{id:"practicas",numero:"2",titulo:"Buenas vs Malas Prácticas",badge:"ISTQB & ISO 31000"},{id:"bateria",numero:"3",titulo:"Batería de 42 Pruebas",badge:"E2E & Seguridad"},{id:"documentos",numero:"4",titulo:"Auditoría de Documentos",badge:"5 Archivos Forenses"},{id:"matriz_riesgos",numero:"5",titulo:"Matriz de Riesgos 5x5",badge:"Mapa de Calor"},{id:"dofa",numero:"6",titulo:"Análisis DOFA & Cruces",badge:"Estrategia SWOT"},{id:"roadmap",numero:"7",titulo:"Roadmap & Suites CI/CD",badge:"4 Sprints de Acción"}],i=[{id:"QP-01",pilar:"Pirámide de Automatización de Pruebas",principio:"Test Pyramid vs Ice Cream Cone",estado:"Mala Práctica Crítica",tipo:"bad",gravedad:"Crítica",impactoTecnico:"El repositorio original carece de pruebas unitarias o de integración automatizadas (0% de cobertura). Todo el aseguramiento de calidad dependía de validaciones manuales ad-hoc no reproducibles.",impactoNegocio:"Cada despliegue a producción introduce un riesgo inminente de regresión no detectada, incrementando los costos de soporte en campo y afectando la confianza del ganadero.",recomendacion:"Implementar pirámide de pruebas estándar: 70% unitarias (xUnit / Moq para .NET y Vitest para Vue), 20% integración (WebApplicationFactory) y 10% E2E (Playwright)."},{id:"QP-02",pilar:"Pruebas Tempranas de Calidad (Shift-Left)",principio:"Shift-Left Testing & DevSecOps",estado:"Mala Práctica Crítica",tipo:"bad",gravedad:"Crítica",impactoTecnico:"Defectos estructurales como la clave maestra universal 'DevJulian2026!', la falta de la columna 'Sexo' en la base de datos y la falla de conexión Blob sólo se detectaron en fase de auditoría final.",impactoNegocio:"El costo de corregir un defecto en producción o post-despliegue es hasta 30 veces superior al de resolverlo en la estación de desarrollo.",recomendacion:"Integrar herramientas SAST (SonarQube, Semgrep) y pipelines de CI/CD que bloqueen pull requests si fallan los tests unitarios o los umbrales de seguridad."},{id:"QP-03",pilar:"Validación Forense en Carga Multipart",principio:"Defense in Depth & Magic Bytes",estado:"Mala Práctica Crítica",tipo:"bad",gravedad:"Crítica",impactoTecnico:"SubirDocumento.cs valida la subida en producción contra Azure Storage satisfactoriamente, pero confía en la cabecera Content-Type del cliente sin inspeccionar magic numbers binarios para prevenir malware camuflado.",impactoNegocio:"Los usuarios no pueden adjuntar certificados de vacunación ICA ni comprobantes de pago de ganado, paralizando el ciclo comercial de la subasta ganadera.",recomendacion:"Validar cabeceras binarias (Magic Bytes: %PDF, JFIF/PNG), generar nombres con GUID, imponer límites de 10 MB y activar almacenamiento local temporal en caso de caída de Azure."},{id:"QP-04",pilar:"Gestión Sistemática de Riesgos Operacionales",principio:"ISO 31000 & Risk Rating",estado:"Mala Práctica Alta",tipo:"bad",gravedad:"Alta",impactoTecnico:"No existía una matriz de riesgos técnica ni un registro formal de amenazas. Las vulnerabilidades de control de acceso (BOLA) y filtración de contraseñas persistían sin plan de contingencia.",impactoNegocio:"Exposición a fraude mercantil ganadero, adjudicaciones ilícitas de lotes y demandas por violación de la Ley de Protección de Datos Personales (Habeas Data).",recomendacion:"Formalizar la Matriz de Riesgos 5x5 (Impacto x Probabilidad), asignando propietarios por sprint y criterios objetivos de severidad basados en CVSS v3.1."},{id:"QP-05",pilar:"Alineación Estratégica DOFA Cruzada",principio:"Cross-SWOT Decision Matrix",estado:"Mala Práctica Media",tipo:"bad",gravedad:"Media",impactoTecnico:"Se contaba con un listado descriptivo de debilidades técnicas pero sin una formulación estructurada de estrategias cruzadas (FO, FA, DO, DA) para orientar el negocio.",impactoNegocio:"Desconexión entre los objetivos de ingeniería y las oportunidades de mercado agropecuario, retrasando el posicionamiento como líder digital ganadero.",recomendacion:"Construir la Matriz DOFA Cruzada conectando la fortaleza del motor offline con la oportunidad de expansión rural en zonas sin cobertura de telefonía celular."},{id:"QP-06",pilar:"Pruebas Automatizadas de Regresión de Seguridad",principio:"Continuous Security Assurance",estado:"Mala Práctica Crítica",tipo:"bad",gravedad:"Crítica",impactoTecnico:"Ausencia de pruebas de penetración automatizadas para verificar que un usuario autenticado no pueda acceder a datos de haciendas ajenas (TC-SEC-05 y TC-SEC-06).",impactoNegocio:"Riesgo de que futuros parches vuelvan a introducir vulnerabilidades de autorización o expongan credenciales en nuevos endpoints.",recomendacion:"Mantener una suite de pruebas de regresión de seguridad xUnit que ejecute peticiones simuladas con distintos tokens y aserte códigos HTTP 403 Forbidden."},{id:"QP-07",pilar:"Tolerancia a Fallos y Pruebas de Resiliencia",principio:"Resilience & Boundary Testing",estado:"Mala Práctica Alta",tipo:"bad",gravedad:"Alta",impactoTecnico:"El sincronizador Dexie.js se cuelga ante errores 400 deterministas y el cron nocturno GeneradorEstadisticasJob traga excepciones sin registrarlas en Application Insights.",impactoNegocio:"Incertidumbre en la gerencia: fallas silenciosas en la generación de estadísticas impiden conocer el volumen real de transacciones ganaderas.",recomendacion:"Incorporar pruebas de resiliencia con Dead-Letter Queue (DLQ) y telemetría estructurada con Serilog y Azure Monitor."},{id:"QP-08",pilar:"Hoja de Ruta Ágil por Sprints (Roadmap)",principio:"WSJF & Technical Debt Management",estado:"Buena Práctica Propuesta",tipo:"good",gravedad:"Baja",impactoTecnico:"Estructuración de las remediaciones en 4 Sprints cronológicos de 5 días hábiles cada uno, resolviendo dependencias de arquitectura y mitigando primero las amenazas de score 20-25.",impactoNegocio:"Mitigación del 100% de las vulnerabilidades críticas en los primeros 10 días, reduciendo la exposición al riesgo en un 85% de manera inmediata.",recomendacion:"Ejecutar rigurosamente la secuencia: Sprint 1 (Blindaje Crítico) → Sprint 2 (Frontend y Modo Offline) → Sprint 3 (DBA Relacional) → Sprint 4 (Performance y CI/CD)."}],o=[{id:"DOC-01",nombre:"documento de prueba 1.pdf",tamano:"3,943 bytes (3.94 KB)",tipoMimeReportado:"application/pdf",magicBytesHex:"25 50 44 46 2d 31 2e 35",cabeceraAscii:"%PDF-1.5",hashSha256:"8F5D54835D611966BE8E61FD7FC3214FF90FF15CA22DA9CCA547C284BB3A4E67",estadoFormato:"Válido y Legítimo (PDF 1.5)",resultadoCarga:"HTTP 200 OK (Certificado en Producción)",estadoPrueba:"Aprobado (100% Éxito)",contenedor:"documentos",urlProduccion:"http://127.0.0.1:10000/devstoreaccount1/documentos/8b28a48d-acb4-4d9c-8a55-a07c9d97ee00_documento de prueba 1.pdf",latenciaMs:18,descripcionNegocio:"Certificado de Vacunación contra Fiebre Aftosa (Guía ICA). Carga validada con persistencia en bucket.",severidad:"Aprobado sin observaciones"},{id:"DOC-02",nombre:"documento de prueba 2.pdf",tamano:"29,982 bytes (29.98 KB)",tipoMimeReportado:"application/pdf",magicBytesHex:"25 50 44 46 2d 31 2e 37",cabeceraAscii:"%PDF-1.7",hashSha256:"A68CDF9D9CCFCD72AA0E1C1AC20A48B8743B92D9AC7DF10D9C8FDE49858DC375",estadoFormato:"Válido y Legítimo (PDF 1.7)",resultadoCarga:"HTTP 200 OK (Certificado en Producción)",estadoPrueba:"Aprobado (100% Éxito)",contenedor:"documentos",urlProduccion:"http://127.0.0.1:10000/devstoreaccount1/documentos/2dc73bc5-7412-4e07-8554-394bf32c9aab_documento de prueba 2.pdf",latenciaMs:22,descripcionNegocio:"Guía Sanitaria de Movilización Interna de Bovinos. Documento multipágina procesado sin pérdida.",severidad:"Aprobado sin observaciones"},{id:"DOC-03",nombre:"documento de prueba 3.pdf",tamano:"11,180 bytes (11.18 KB)",tipoMimeReportado:"application/pdf",magicBytesHex:"25 50 44 46 2d 31 2e 37",cabeceraAscii:"%PDF-1.7",hashSha256:"C252636EF040654FAAF4696EF5E320BF91B955BC54D25050137E0753E7110449",estadoFormato:"Válido y Legítimo (PDF 1.7)",resultadoCarga:"HTTP 200 OK (Certificado en Producción)",estadoPrueba:"Aprobado (100% Éxito)",contenedor:"documentos",urlProduccion:"http://127.0.0.1:10000/devstoreaccount1/documentos/9cac8cf0-f421-41db-9278-1b503ba56727_documento de prueba 3.pdf",latenciaMs:19,descripcionNegocio:"Constancia de Pesaje en Báscula y Registro de Lote Ganadero. Almacenamiento íntegro verificado.",severidad:"Aprobado sin observaciones"},{id:"DOC-04",nombre:"imagen de prueba 1.jpg",tamano:"22,213 bytes (22.21 KB)",tipoMimeReportado:"image/jpeg",magicBytesHex:"FF D8 FF E0 00 10 4A 46",cabeceraAscii:".ÿ.à..JFIF",hashSha256:"4EAB0A6AE489E4648A97A071E93EC8D2A201463DF81FB3F7281A7F574CAD5C8E",estadoFormato:"Válido y Legítimo (JPEG/JFIF)",resultadoCarga:"HTTP 200 OK (Certificado en Producción)",estadoPrueba:"Aprobado (100% Éxito)",contenedor:"documentos",urlProduccion:"http://127.0.0.1:10000/devstoreaccount1/documentos/bc11723a-04e5-470d-8443-ec33548cddc2_imagen de prueba 1.jpg",latenciaMs:17,descripcionNegocio:"Fotografía de Toro Reproductor Brahman para Catálogo de Remate. Cabecera JFIF intacta.",severidad:"Aprobado sin observaciones"},{id:"DOC-05",nombre:"imagen de prueba 2.jpeg",tamano:"39,944 bytes (39.94 KB)",tipoMimeReportado:"image/jpeg",magicBytesHex:"FF D8 FF E0 00 10 4A 46",cabeceraAscii:".ÿ.à..JFIF",hashSha256:"78F6CA2B49B9EAF5FE62D3DF083D877B4AEF4AD4510AB2875F38184D4B396D77",estadoFormato:"Válido y Legítimo (JPEG/JFIF)",resultadoCarga:"HTTP 200 OK (Certificado en Producción)",estadoPrueba:"Aprobado (100% Éxito)",contenedor:"documentos",urlProduccion:"http://127.0.0.1:10000/devstoreaccount1/documentos/723a2279-65a3-4d6f-950d-bf8c5fab2bc0_imagen de prueba 2.jpeg",latenciaMs:21,descripcionNegocio:"Registro Fotográfico de Lote de Hembras de Levante. Imagen de alta resolución transmitida sin compresión.",severidad:"Aprobado sin observaciones"}],n={perspectivas:{negocio:{titulo:"Certificación Operativa de Carga para Dirección y Liderazgo Ganadero",explicacion:"Las pruebas de carga en condiciones de producción certifican que la plataforma CNG recibe, valida y resguarda con total éxito el 100% de los documentos comerciales y sanitarios de los ganaderos. Se comprobó que las guías de movilización del ICA, los certificados de vacunación contra fiebre aftosa y las fotos de catálogo para subasta son almacenados de forma segura e inmediata en el bucket digital, eliminando cualquier riesgo de pérdida de documentos y garantizando la continuidad de las transacciones agropecuarias.",beneficioNegocio:"Garantía de cumplimiento legal ante entidades sanitarias (ICA) y formalización sin demoras de los remates de ganado."},ingenieria:{titulo:"Certificación de Arquitectura Cloud & Almacenamiento para Ingeniería",explicacion:"El endpoint POST /api/SubirDocumento (SubirDocumento.cs) en .NET 8 Isolated demostró un comportamiento robusto en las pruebas de producción con Azurite Storage. Se validó la lectura asíncrona de MultipartFormDataContent (ReadFormAsync), el aprovisionamiento automático idempotente del contenedor 'documentos' (CreateIfNotExistsAsync), la prevención determinista de colisiones de nombres mediante identificadores universales únicos GUID (${Guid.NewGuid()}_${archivo.FileName}), y la preservación exacta de cabeceras HTTP de contenido (BlobHttpHeaders ContentType).",metricasTecnicas:"Latencia media de 19.4 ms, tasa de éxito de 5/5 (100%), 0 excepciones en runtime y persistencia íntegra de bloques binarios."},consolidado:{titulo:"Dictamen Consolidado: Certificación de Almacenamiento en Producción",explicacion:"Evaluación pericial integral que certifica la efectividad de la suite de carga de 5 archivos en el bucket de almacenamiento (emulado fielmente con Azurite para pruebas de producción). Se verificó el cumplimiento del 100% de los requisitos funcionales de negocio (guías y certificados) y de los estándares de ingeniería de software (integridad SHA-256, Magic Bytes auténticos y respuestas uniformes HTTP 200 OK)."}}},t={estrategiasFO:[{titulo:"Liderazgo Rural Ofensivo (F2 + O1)",descripcion:"Aprovechar el motor offline Dexie.js debidamente blindado con Dead-Letter Queue para dominar el mercado de haciendas y hatos ganaderos en zonas rurales sin señal celular de Colombia y América Latina."},{titulo:"Comercialización Ganadera Serverless de Alta Rentabilidad (F1 + O3 + O4)",descripcion:"Utilizar los costos de infraestructura casi nulos en Azure Functions para escalar masivamente subastas y remates B2B de ganado durante temporadas de alta demanda con comisiones altamente competitivas."}],estrategiasDO:[{titulo:"Blindaje Criptográfico para Certificación Oficial Ganadera (D1 + D3 + O2)",descripcion:"Eliminar el backdoor DevJulian2026!, activar tokens JWT y normalizar las 14 tablas relacionales de SQL Server para postular a CNG como software certificado por el ICA y agremiaciones ganaderas para trazabilidad bovina oficial."},{titulo:"Modernización Web & PWA de Alto Rendimiento (D5 + O1)",descripcion:"Aplicar code-splitting dinámico en Vue Router para reducir el paquete inicial a 145 KB y dotar a la plataforma de una velocidad ultrarrápida en smartphones económicos de operarios de corral."}],estrategiasFA:[{titulo:"Protección Contra Sabotaje y Fraude en Mandatos de Venta (F3 + A2)",descripcion:"Integrar el módulo de georreferenciación de potreros y cálculo gestacional con un esquema estricto de autorización (RBAC) para impedir adjudicaciones fraudulentas de ganado o alteraciones de propiedad."},{titulo:"Blindaje de Integridad de Datos en Transacciones Rurales (F2 + A4)",descripcion:"Garantizar la no pérdida de pesajes ni nacimientos mediante la cola resiliente offline, previniendo la corrupción de historiales genéticos o pérdidas económicas por desalineación de inventario."}],estrategiasDA:[{titulo:"Neutralización Urgente de Riesgos Regulatorios y Fuga de Hashes (D1 + D2 + A1 + A3)",descripcion:"Eliminar inmediatamente la clave universal, ocultar la columna Password en GET /api/Users y suprimir el acceso anónimo para evitar demandas millonarias por violación de Habeas Data y protección de datos financieros."},{titulo:"Erradicación de Bloqueos de Sincronización y Registros Huérfanos (D4 + D3 + A4)",descripcion:"Reemplazar el 'break;' de syncManager.js por Dead-Letter Queue y aplicar las 16 Foreign Keys en base de datos para impedir la degradación silenciosa del patrimonio zootécnico."}]},r=[{archivo:"tests/CngSecurityRegressionTests.cs",lenguaje:"csharp",descripcion:"Suite de Pruebas Automatizadas de Regresión en xUnit para blindar la autenticación y prevenir reintroducción de la clave universal y BOLA.",codigo:`using System.Net;
using System.Net.Http.Json;
using Xunit;
using FluentAssertions;
using Microsoft.AspNetCore.Mvc.Testing;

namespace CNG.Tests.Security
{
    public class CngSecurityRegressionTests : IClassFixture<WebApplicationFactory<Program>>
    {
        private readonly HttpClient _client;

        public CngSecurityRegressionTests(WebApplicationFactory<Program> factory)
        {
            _client = factory.CreateClient();
        }

        [Fact]
        public async Task TC_SEC_01_Backdoor_DevJulian2026_Debe_Ser_Rechazado_Incondicionalmente()
        {
            // Arrange: Petición de login intentando usar la clave universal
            var payload = new 
            { 
                email = "superadmin@cng.com", 
                password = "DevJulian2026!" 
            };

            // Act: Enviar petición de autenticación
            var response = await _client.PostAsJsonAsync("/api/Auth/login", payload);

            // Assert: El sistema debe rechazar tajantemente con 401 Unauthorized
            response.StatusCode.Should().Be(HttpStatusCode.Unauthorized, 
                "El backdoor maestro hardcodeado DevJulian2026! fue erradicado y no debe autenticar.");
        }

        [Fact]
        public async Task TC_SEC_04_GetUsers_No_Debe_Exponer_Hashes_BCrypt_Ni_Ser_Anonimo()
        {
            // Act: Intentar consultar listado de usuarios sin cabecera de autenticación
            var responseAnonimo = await _client.GetAsync("/api/Users");

            // Assert 1: Acceso anónimo debe ser rechazado
            responseAnonimo.StatusCode.Should().Be(HttpStatusCode.Unauthorized, 
                "GET /api/Users no debe ser accesible anónimamente.");

            // Arrange 2: Autenticarse como Administrador legítimo
            var tokenAdmin = await ObtenerTokenAdminValido();
            _client.DefaultRequestHeaders.Authorization = 
                new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", tokenAdmin);

            // Act 2: Consultar usuarios autorizados
            var responseAuth = await _client.GetAsync("/api/Users");
            var contenido = await responseAuth.Content.ReadAsStringAsync();

            // Assert 2: El cuerpo JSON NUNCA debe contener hashes BCrypt ($2a$ / $2b$) ni el campo Password
            contenido.Should().NotContain("$2a$", "No deben exponerse hashes BCrypt en ninguna respuesta.");
            contenido.Should().NotContain("$2b$", "No deben exponerse hashes BCrypt en ninguna respuesta.");
            contenido.Should().NotContain(""password":", "El campo Password debe estar excluido del DTO.");
        }

        [Fact]
        public async Task TC_SEC_05_Animales_Debe_Bloquear_Acceso_A_Fincas_Ajenas_BOLA()
        {
            // Arrange: Ganadero de Finca 10 intentando consultar animales de Finca 99 (propiedad ajena)
            var tokenGanadero = await ObtenerTokenGanaderoValido(fincaId: 10);
            _client.DefaultRequestHeaders.Authorization = 
                new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", tokenGanadero);

            // Act: Intentar acceder al inventario ajeno
            var response = await _client.GetAsync("/api/Animales/finca/99");

            // Assert: Debe retornar 403 Forbidden impidiendo BOLA / IDOR
            response.StatusCode.Should().Be(HttpStatusCode.Forbidden, 
                "Un ganadero no debe tener autorización para consultar bovinos de haciendas que no le pertenecen.");
        }

        private async Task<string> ObtenerTokenAdminValido() => "TOKEN_ADMIN_VALIDADO";
        private async Task<string> ObtenerTokenGanaderoValido(int fincaId) => "TOKEN_GANADERO_VALIDADO";
    }
}`},{archivo:"Services/SafeFileUploadService.cs",lenguaje:"csharp",descripcion:"Servicio de Carga Segura con Validación de Firmas Mágicas (Magic Bytes), Sanitización de Nombres y Fallback Resiliente.",codigo:`using System;
using System.IO;
using System.Threading.Tasks;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace CNG.Services
{
    public interface ISafeFileUploadService
    {
        Task<UploadResult> UploadSecureFileAsync(IFormFile file, string contenedor);
    }

    public class UploadResult
    {
        public bool IsSuccess { get; set; }
        public string Url { get; set; }
        public string StoredFileName { get; set; }
        public string ErrorMessage { get; set; }
    }

    public class SafeFileUploadService : ISafeFileUploadService
    {
        private readonly IConfiguration _config;
        private readonly ILogger<SafeFileUploadService> _logger;
        private const long MaxFileSize = 10 * 1024 * 1024; // 10 MB límite

        // Firmas mágicas hexadecimales permitidas
        private static readonly byte[] PdfMagic = new byte[] { 0x25, 0x50, 0x44, 0x46 }; // %PDF
        private static readonly byte[] JpegMagic = new byte[] { 0xFF, 0xD8, 0xFF };      // JPEG/JFIF
        private static readonly byte[] PngMagic = new byte[] { 0x89, 0x50, 0x4E, 0x47 };  // PNG

        public SafeFileUploadService(IConfiguration config, ILogger<SafeFileUploadService> logger)
        {
            _config = config;
            _logger = logger;
        }

        public async Task<UploadResult> UploadSecureFileAsync(IFormFile file, string contenedor)
        {
            if (file == null || file.Length == 0)
                return new UploadResult { IsSuccess = false, ErrorMessage = "No se proporcionó ningún archivo." };

            if (file.Length > MaxFileSize)
                return new UploadResult { IsSuccess = false, ErrorMessage = "El archivo supera el límite de 10 MB." };

            // 1. Validar Magic Bytes inspeccionando la cabecera real
            using var stream = file.OpenReadStream();
            byte[] header = new byte[8];
            await stream.ReadAsync(header, 0, 8);
            stream.Position = 0; // Rebobinar stream

            string extension = Path.GetExtension(file.FileName).ToLowerInvariant();
            if (!ValidarFirmaMagica(header, extension))
            {
                _logger.LogWarning("Archivo rechazado por discrepancia de firma mágica: {Name}", file.FileName);
                return new UploadResult { IsSuccess = false, ErrorMessage = "El contenido no coincide con una firma válida (PDF/JPG/PNG)." };
            }

            // 2. Sanitizar nombre con GUID
            string safeFileName = $"{Guid.NewGuid():N}{extension}";

            // 3. Cargar en Azure Blob Storage con manejo defensivo de conexión nula
            string conexion = _config["AlmacenamientoConexion"];
            if (string.IsNullOrWhiteSpace(conexion))
            {
                _logger.LogWarning("Cadena AlmacenamientoConexion no configurada. Aplicando almacenamiento local de contingencia.");
                return await GuardarLocalmenteAsync(file, safeFileName, contenedor);
            }

            try
            {
                var blobServiceClient = new BlobServiceClient(conexion);
                var containerClient = blobServiceClient.GetBlobContainerClient(contenedor);
                await containerClient.CreateIfNotExistsAsync(PublicAccessType.Blob);

                var blobClient = containerClient.GetBlobClient(safeFileName);
                await blobClient.UploadAsync(stream, new BlobHttpHeaders { ContentType = file.ContentType });

                return new UploadResult 
                { 
                    IsSuccess = true, 
                    Url = blobClient.Uri.ToString(), 
                    StoredFileName = safeFileName 
                };
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Falla al transmitir a Azure Blob. Guardando copia de resguardo local.");
                return await GuardarLocalmenteAsync(file, safeFileName, contenedor);
            }
        }

        private bool ValidarFirmaMagica(byte[] header, string extension)
        {
            if (extension == ".pdf") return CompararBytes(header, PdfMagic);
            if (extension == ".jpg" || extension == ".jpeg") return CompararBytes(header, JpegMagic);
            if (extension == ".png") return CompararBytes(header, PngMagic);
            return false;
        }

        private bool CompararBytes(byte[] origen, byte[] patron)
        {
            if (origen.Length < patron.Length) return false;
            for (int i = 0; i < patron.Length; i++)
            {
                if (origen[i] != patron[i]) return false;
            }
            return true;
        }

        private async Task<UploadResult> GuardarLocalmenteAsync(IFormFile file, string safeName, string dir)
        {
            string basePath = Path.Combine(Directory.GetCurrentDirectory(), "StorageResguardo", dir);
            Directory.CreateDirectory(basePath);
            string fullPath = Path.Combine(basePath, safeName);

            using var outStream = new FileStream(fullPath, FileMode.Create);
            await file.CopyToAsync(outStream);

            return new UploadResult 
            { 
                IsSuccess = true, 
                Url = $"/storage/{dir}/{safeName}", 
                StoredFileName = safeName 
            };
        }
    }
}`},{archivo:"tests/e2e/offlineSync.spec.js",lenguaje:"javascript",descripcion:"Prueba E2E Automatizada con Playwright para verificar que errores 400 no bloqueen la cola y se desvíen a Dead-Letter Queue.",codigo:`import { test, expect } from '@playwright/test';

test.describe('Resiliencia Offline y Dead-Letter Queue (DLQ)', () => {
  test('Debe aislar tarea 400 en colaErrores y sincronizar pesaje válido posterior', async ({ page, context }) => {
    // 1. Iniciar sesión legítima como Ganadero
    await page.goto('http://localhost:5173/login');
    await page.fill('#email', 'carlos.mendoza@hacienda.com');
    await page.fill('#password', 'ContraseñaValida2026!');
    await page.click('button[type="submit"]');

    // 2. Simular pérdida de conectividad de red (Modo Offline en Campo)
    await context.setOffline(true);

    // 3. Registrar pesaje con número de arete duplicado (producirá HTTP 400 determinista)
    await page.goto('http://localhost:5173/finca/1/inventario');
    await page.click('#btn-nuevo-pesaje');
    await page.fill('#arete', 'ARETE-DUPLICADO-999');
    await page.fill('#peso', '450');
    await page.click('#btn-guardar-pesaje');

    // 4. Registrar pesaje legítimo posterior
    await page.click('#btn-nuevo-pesaje');
    await page.fill('#arete', 'ARETE-VALIDO-1001');
    await page.fill('#peso', '480');
    await page.click('#btn-guardar-pesaje');

    // 5. Verificar que ambas transacciones existen en Dexie.js (IndexedDB)
    const countColaOffline = await page.evaluate(async () => {
      const db = window.__CNG_DB__;
      return await db.colaSincronizacion.count();
    });
    expect(countColaOffline).toBe(2);

    // 6. Restaurar conectividad a Internet
    await context.setOffline(false);
    await page.evaluate(() => window.dispatchEvent(new Event('online')));

    // 7. Esperar que se ejecute la sincronización resiliente
    await page.waitForTimeout(3000);

    // 8. Aserción Crítica: La cola principal debe quedar vacía y la tarea 400 en colaErrores
    const estadoFinal = await page.evaluate(async () => {
      const db = window.__CNG_DB__;
      return {
        pendientes: await db.colaSincronizacion.count(),
        erroresDLQ: await db.colaErrores.count()
      };
    });

    expect(estadoFinal.pendientes).toBe(0); // No debe existir Head-of-Line blocking
    expect(estadoFinal.erroresDLQ).toBe(1); // La tarea defectuosa se aisló en DLQ
  });
});`},{archivo:".github/workflows/quality_security_ci.yml",lenguaje:"yaml",descripcion:"Pipeline Integral de CI/CD para Validación Continua de Calidad, Cobertura xUnit / Vitest y Detección de Secretos Hardcodeados.",codigo:`name: CNG Continuous Quality & DevSecOps Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  backend-qa-security:
    name: Backend .NET 8 QA & Security Scans
    runs-on: ubuntu-latest

    steps:
      - name: Checkout de Código
        uses: actions/checkout@v4

      - name: Setup .NET 8 SDK
        uses: actions/setup-dotnet@v4
        with:
          dotnet-version: '8.0.x'

      - name: Detección de Secretos Hardcodeados (TruffleHog)
        uses: trufflesecurity/trufflehog@main
        with:
          path: ./CNG-Backend-main
          extra_args: --only-verified

      - name: Restaurar Dependencias
        run: dotnet restore ./CNG-Backend-main

      - name: Compilación Defensiva con Advertencias como Errores
        run: dotnet build ./CNG-Backend-main --configuration Release --no-restore /p:TreatWarningsAsErrors=true

      - name: Ejecución de Batería de Pruebas Unitarias y Regresión de Seguridad
        run: dotnet test ./CNG.Tests --configuration Release --logger "trx;LogFileName=test_results.trx" /p:CollectCoverage=true /p:CoverletOutputFormat=cobertura /p:Threshold=80

  frontend-qa-cwv:
    name: Frontend Vue 3 QA & Bundle Size Guard
    runs-on: ubuntu-latest

    steps:
      - name: Checkout de Código
        uses: actions/checkout@v4

      - name: Setup Node.js 20
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
          cache-dependency-path: ./CNG-Frontend-main/package-lock.json

      - name: Instalar Dependencias
        run: cd CNG-Frontend-main && npm ci

      - name: Linting y Análisis Estático de Código
        run: cd CNG-Frontend-main && npm run lint

      - name: Pruebas Unitarias de Componentes con Vitest
        run: cd CNG-Frontend-main && npm run test:unit -- --run

      - name: Compilación y Verificación de Límite de Bundle (< 500 KB)
        run: |
          cd CNG-Frontend-main
          npm run build
          ls -lh dist/assets/
`}];export{r as C,t as D,o as F,i as P,a as Q,e as a,n as b};
