/**
 * Enum for all HTTP status codes with detailed descriptions.
 */
export enum HttpStatusCode {
  // Informational responses (1xx)
  /** 100 Continue - The server has received the request headers, and the client should proceed to send the request body. */
  CONTINUE = 100,
  /** 101 Switching Protocols - The requester has asked the server to switch protocols. */
  SWITCHING_PROTOCOLS = 101,
  /** 102 Processing - The server is processing the request but no response is available yet. */
  PROCESSING = 102,
  /** 103 Early Hints - Used to return some response headers before the final HTTP message. */
  EARLY_HINTS = 103,

  // Success responses (2xx)
  /** 200 OK - The request has succeeded. */
  OK = 200,
  /** 201 Created - The request has succeeded and a new resource has been created. */
  CREATED = 201,
  /** 202 Accepted - The request has been received but not yet acted upon. */
  ACCEPTED = 202,
  /** 203 Non-Authoritative Information - The server is a transforming proxy and returned modified data. */
  NON_AUTHORITATIVE_INFORMATION = 203,
  /** 204 No Content - The server successfully processed the request but is not returning any content. */
  NO_CONTENT = 204,
  /** 205 Reset Content - The server successfully processed the request; client should reset the document view. */
  RESET_CONTENT = 205,
  /** 206 Partial Content - The server is delivering only part of the resource due to a range header. */
  PARTIAL_CONTENT = 206,
  /** 207 Multi-Status - Provides multiple independent responses for different operations. */
  MULTI_STATUS = 207,
  /** 208 Already Reported - The members of a DAV binding have already been enumerated. */
  ALREADY_REPORTED = 208,
  /** 226 IM Used - The server fulfilled the GET request with one or more instance manipulations applied. */
  IM_USED = 226,

  // Redirection messages (3xx)
  /** 300 Multiple Choices - The request has more than one possible response. */
  MULTIPLE_CHOICES = 300,
  /** 301 Moved Permanently - The URL of the requested resource has been changed permanently. */
  MOVED_PERMANENTLY = 301,
  /** 302 Found - The URL of the requested resource has been changed temporarily. */
  FOUND = 302,
  /** 303 See Other - The response can be found under another URI using the GET method. */
  SEE_OTHER = 303,
  /** 304 Not Modified - The resource has not been modified since the version specified by the request headers. */
  NOT_MODIFIED = 304,
  /** 305 Use Proxy - The requested resource must be accessed through the proxy specified in the Location field. */
  USE_PROXY = 305,
  /** 307 Temporary Redirect - The request should be repeated with another URI, but future requests should use the original URI. */
  TEMPORARY_REDIRECT = 307,
  /** 308 Permanent Redirect - The request and all future requests should be repeated using another URI. */
  PERMANENT_REDIRECT = 308,

  // Client error responses (4xx)
  /** 400 Bad Request - The server could not understand the request due to invalid syntax. */
  BAD_REQUEST = 400,
  /** 401 Unauthorized - The client must authenticate itself to get the requested response. */
  UNAUTHORIZED = 401,
  /** 402 Payment Required - (Experimental) Reserved for future use. */
  PAYMENT_REQUIRED = 402,
  /** 403 Forbidden - The client does not have access rights to the content. */
  FORBIDDEN = 403,
  /** 404 Not Found - The server cannot find the requested resource. */
  NOT_FOUND = 404,
  /** 405 Method Not Allowed - The request method is known by the server but is not supported by the target resource. */
  METHOD_NOT_ALLOWED = 405,
  /** 406 Not Acceptable - The server cannot produce a response matching the list of acceptable values. */
  NOT_ACCEPTABLE = 406,
  /** 407 Proxy Authentication Required - The client must authenticate with a proxy server. */
  PROXY_AUTHENTICATION_REQUIRED = 407,
  /** 408 Request Timeout - The server timed out waiting for the request. */
  REQUEST_TIMEOUT = 408,
  /** 409 Conflict - The request could not be completed due to a conflict with the current state of the target resource. */
  CONFLICT = 409,
  /** 410 Gone - The resource requested is no longer available. */
  GONE = 410,
  /** 411 Length Required - The request did not specify the length of its content, which is required by the target resource. */
  LENGTH_REQUIRED = 411,
  /** 412 Precondition Failed - The server does not meet one of the preconditions specified by the client. */
  PRECONDITION_FAILED = 412,
  /** 413 Payload Too Large - The request is larger than the server is willing or able to process. */
  PAYLOAD_TOO_LARGE = 413,
  /** 414 URI Too Long - The URI requested by the client is longer than the server is willing to interpret. */
  URI_TOO_LONG = 414,
  /** 415 Unsupported Media Type - The media format of the requested data is not supported by the server. */
  UNSUPPORTED_MEDIA_TYPE = 415,
  /** 416 Range Not Satisfiable - The range specified by the Range header field in the request cannot be fulfilled. */
  RANGE_NOT_SATISFIABLE = 416,
  /** 417 Expectation Failed - The server cannot meet the requirements of the Expect request-header field. */
  EXPECTATION_FAILED = 417,
  /** 418 I'm a Teapot - This code was defined in 1998 as an April Fools' joke. */
  IM_A_TEAPOT = 418,
  /** 421 Misdirected Request - The request was directed at a server that cannot produce a response. */
  MISDIRECTED_REQUEST = 421,
  /** 422 Unprocessable Entity - The request was well-formed but unable to be followed due to semantic errors. */
  UNPROCESSABLE_ENTITY = 422,
  /** 423 Locked - The resource being accessed is locked. */
  LOCKED = 423,
  /** 424 Failed Dependency - The request failed due to failure of a previous request. */
  FAILED_DEPENDENCY = 424,
  /** 425 Too Early - Indicates that the server is unwilling to risk processing a request that might be replayed. */
  TOO_EARLY = 425,
  /** 426 Upgrade Required - The client should switch to a different protocol. */
  UPGRADE_REQUIRED = 426,
  /** 428 Precondition Required - The server requires the request to be conditional. */
  PRECONDITION_REQUIRED = 428,
  /** 429 Too Many Requests - The user has sent too many requests in a given amount of time. */
  TOO_MANY_REQUESTS = 429,
  /** 431 Request Header Fields Too Large - The server is unwilling to process the request because its header fields are too large. */
  REQUEST_HEADER_FIELDS_TOO_LARGE = 431,
  /** 451 Unavailable For Legal Reasons - The resource is unavailable due to legal demands. */
  UNAVAILABLE_FOR_LEGAL_REASONS = 451,

  // Server error responses (5xx)
  /** 500 Internal Server Error - The server encountered an unexpected condition. */
  INTERNAL_SERVER_ERROR = 500,
  /** 501 Not Implemented - The server does not support the functionality required to fulfill the request. */
  NOT_IMPLEMENTED = 501,
  /** 502 Bad Gateway - The server, while acting as a gateway or proxy, received an invalid response. */
  BAD_GATEWAY = 502,
  /** 503 Service Unavailable - The server is currently unable to handle the request. */
  SERVICE_UNAVAILABLE = 503,
  /** 504 Gateway Timeout - The server did not receive a timely response from an upstream server. */
  GATEWAY_TIMEOUT = 504,
  /** 505 HTTP Version Not Supported - The server does not support the HTTP protocol version used in the request. */
  HTTP_VERSION_NOT_SUPPORTED = 505,
  /** 506 Variant Also Negotiates - Transparent content negotiation for the request resulted in a circular reference. */
  VARIANT_ALSO_NEGOTIATES = 506,
  /** 507 Insufficient Storage - The server is unable to store the representation needed to complete the request. */
  INSUFFICIENT_STORAGE = 507,
  /** 508 Loop Detected - The server detected an infinite loop while processing the request. */
  LOOP_DETECTED = 508,
  /** 510 Not Extended - Further extensions to the request are required. */
  NOT_EXTENDED = 510,
  /** 511 Network Authentication Required - The client needs to authenticate to gain network access. */
  NETWORK_AUTHENTICATION_REQUIRED = 511,
}

/**
 * Enum for Informational HTTP status codes (1xx).
 * These codes indicate that the request was received, continuing process.
 */
export enum InformationalHttpStatusCode {
  /** 100 Continue - The server has received the request headers, and the client should proceed to send the request body. */
  CONTINUE_100 = 100,
  /** 101 Switching Protocols - The requester has asked the server to switch protocols. */
  SWITCHING_PROTOCOLS_101 = 101,
  /** 102 Processing - The server is processing the request but no response is available yet. */
  PROCESSING_102 = 102,
  /** 103 Early Hints - Used to return some response headers before the final HTTP message. */
  EARLY_HINTS_103 = 103,
}

/**
 * Enum for Success HTTP status codes (2xx).
 * These codes indicate that the request was successfully received, understood, and accepted.
 */
export enum SuccessHttpStatusCode {
  /** 200 OK - The request has succeeded. */
  OK_200 = 200,
  /** 201 Created - The request has succeeded and a new resource has been created. */
  CREATED_201 = 201,
  /** 202 Accepted - The request has been received but not yet acted upon. */
  ACCEPTED_202 = 202,
  /** 203 Non-Authoritative Information - The server is a transforming proxy and returned modified data. */
  NON_AUTHORITATIVE_INFORMATION_203 = 203,
  /** 204 No Content - The server successfully processed the request but is not returning any content. */
  NO_CONTENT_204 = 204,
  /** 205 Reset Content - The server successfully processed the request; client should reset the document view. */
  RESET_CONTENT_205 = 205,
  /** 206 Partial Content - The server is delivering only part of the resource due to a range header. */
  PARTIAL_CONTENT_206 = 206,
  /** 207 Multi-Status - Provides multiple independent responses for different operations. */
  MULTI_STATUS_207 = 207,
  /** 208 Already Reported - The members of a DAV binding have already been enumerated. */
  ALREADY_REPORTED_208 = 208,
  /** 226 IM Used - The server fulfilled the GET request with one or more instance manipulations applied. */
  IM_USED_226 = 226,
}

/**
 * Enum for Redirection HTTP status codes (3xx).
 * These codes indicate that further action needs to be taken by the user agent to fulfill the request.
 */
export enum RedirectionHttpStatusCode {
  /** 300 Multiple Choices - The request has more than one possible response. */
  MULTIPLE_CHOICES_300 = 300,
  /** 301 Moved Permanently - The URL of the requested resource has been changed permanently. */
  MOVED_PERMANENTLY_301 = 301,
  /** 302 Found - The URL of the requested resource has been changed temporarily. */
  FOUND_302 = 302,
  /** 303 See Other - The response can be found under another URI using the GET method. */
  SEE_OTHER_303 = 303,
  /** 304 Not Modified - The resource has not been modified since the version specified by the request headers. */
  NOT_MODIFIED_304 = 304,
  /** 305 Use Proxy - The requested resource must be accessed through the proxy specified in the Location field. */
  USE_PROXY_305 = 305,
  /** 307 Temporary Redirect - The request should be repeated with another URI, but future requests should use the original URI. */
  TEMPORARY_REDIRECT_307 = 307,
  /** 308 Permanent Redirect - The request and all future requests should be repeated using another URI. */
  PERMANENT_REDIRECT_308 = 308,
}

/**
 * Enum for Client Error HTTP status codes (4xx).
 * These codes indicate that the client seems to have made an error in the request.
 */
export enum ClientErrorHttpStatusCode {
  /** 400 Bad Request - The server could not understand the request due to invalid syntax. */
  BAD_REQUEST_400 = 400,
  /** 401 Unauthorized - The client must authenticate itself to get the requested response. */
  UNAUTHORIZED_401 = 401,
  /** 402 Payment Required - Reserved for future use. */
  PAYMENT_REQUIRED_402 = 402,
  /** 403 Forbidden - The client does not have access rights to the content. */
  FORBIDDEN_403 = 403,
  /** 404 Not Found - The server cannot find the requested resource. */
  NOT_FOUND_404 = 404,
  /** 405 Method Not Allowed - The request method is known by the server but is not supported by the target resource. */
  METHOD_NOT_ALLOWED_405 = 405,
  /** 406 Not Acceptable - The server cannot produce a response matching the list of acceptable values. */
  NOT_ACCEPTABLE_406 = 406,
  /** 407 Proxy Authentication Required - The client must authenticate with a proxy server. */
  PROXY_AUTHENTICATION_REQUIRED_407 = 407,
  /** 408 Request Timeout - The server timed out waiting for the request. */
  REQUEST_TIMEOUT_408 = 408,
  /** 409 Conflict - The request could not be completed due to a conflict with the current state of the target resource. */
  CONFLICT_409 = 409,
  /** 410 Gone - The resource requested is no longer available. */
  GONE_410 = 410,
  /** 411 Length Required - The request did not specify the length of its content, which is required by the target resource. */
  LENGTH_REQUIRED_411 = 411,
  /** 412 Precondition Failed - The server does not meet one of the preconditions specified by the client. */
  PRECONDITION_FAILED_412 = 412,
  /** 413 Payload Too Large - The request is larger than the server is willing or able to process. */
  PAYLOAD_TOO_LARGE_413 = 413,
  /** 414 URI Too Long - The URI requested by the client is longer than the server is willing to interpret. */
  URI_TOO_LONG_414 = 414,
  /** 415 Unsupported Media Type - The media format of the requested data is not supported by the server. */
  UNSUPPORTED_MEDIA_TYPE_415 = 415,
  /** 416 Range Not Satisfiable - The range specified by the Range header field in the request cannot be fulfilled. */
  RANGE_NOT_SATISFIABLE_416 = 416,
  /** 417 Expectation Failed - The server cannot meet the requirements of the Expect request-header field. */
  EXPECTATION_FAILED_417 = 417,
  /** 418 I'm a Teapot - Defined in 1998 as an April Fools' joke. */
  IM_A_TEAPOT_418 = 418,
  /** 421 Misdirected Request - The request was directed at a server that cannot produce a response. */
  MISDIRECTED_REQUEST_421 = 421,
  /** 422 Unprocessable Entity - The request was well-formed but unable to be followed due to semantic errors. */
  UNPROCESSABLE_ENTITY_422 = 422,
  /** 423 Locked - The resource being accessed is locked. */
  LOCKED_423 = 423,
  /** 424 Failed Dependency - The request failed due to failure of a previous request. */
  FAILED_DEPENDENCY_424 = 424,
  /** 425 Too Early - Indicates that the server is unwilling to risk processing a request that might be replayed. */
  TOO_EARLY_425 = 425,
  /** 426 Upgrade Required - The client should switch to a different protocol. */
  UPGRADE_REQUIRED_426 = 426,
  /** 428 Precondition Required - The server requires the request to be conditional. */
  PRECONDITION_REQUIRED_428 = 428,
  /** 429 Too Many Requests - The user has sent too many requests in a given amount of time. */
  TOO_MANY_REQUESTS_429 = 429,
  /** 431 Request Header Fields Too Large - The server is unwilling to process the request because its header fields are too large. */
  REQUEST_HEADER_FIELDS_TOO_LARGE_431 = 431,
  /** 451 Unavailable For Legal Reasons - The resource is unavailable due to legal demands. */
  UNAVAILABLE_FOR_LEGAL_REASONS_451 = 451,
}

/**
 * Enum for Server Error HTTP status codes (5xx).
 * These codes indicate that the server failed to fulfill a valid request.
 */
export enum ServerErrorHttpStatusCode {
  /** 500 Internal Server Error - The server encountered an unexpected condition. */
  INTERNAL_SERVER_ERROR_500 = 500,
  /** 501 Not Implemented - The server does not support the functionality required to fulfill the request. */
  NOT_IMPLEMENTED_501 = 501,
  /** 502 Bad Gateway - The server, while acting as a gateway or proxy, received an invalid response. */
  BAD_GATEWAY_502 = 502,
  /** 503 Service Unavailable - The server is currently unable to handle the request. */
  SERVICE_UNAVAILABLE_503 = 503,
  /** 504 Gateway Timeout - The server did not receive a timely response from an upstream server. */
  GATEWAY_TIMEOUT_504 = 504,
  /** 505 HTTP Version Not Supported - The server does not support the HTTP protocol version used in the request. */
  HTTP_VERSION_NOT_SUPPORTED_505 = 505,
  /** 506 Variant Also Negotiates - Transparent content negotiation resulted in a circular reference. */
  VARIANT_ALSO_NEGOTIATES_506 = 506,
  /** 507 Insufficient Storage - The server is unable to store the representation needed to complete the request. */
  INSUFFICIENT_STORAGE_507 = 507,
  /** 508 Loop Detected - The server detected an infinite loop while processing the request. */
  LOOP_DETECTED_508 = 508,
  /** 510 Not Extended - Further extensions to the request are required. */
  NOT_EXTENDED_510 = 510,
  /** 511 Network Authentication Required - The client needs to authenticate to gain network access. */
  NETWORK_AUTHENTICATION_REQUIRED_511 = 511,
}
