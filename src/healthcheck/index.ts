/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/healthcheck
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface HealthcheckConfig extends cdktn.TerraformMetaArguments {
  /**
  * The hostname or IP address of the origin server to run health checks on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/healthcheck#address Healthcheck#address}
  */
  readonly address: string;
  /**
  * A list of regions from which to run health checks. Null means Cloudflare will pick a default region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/healthcheck#check_regions Healthcheck#check_regions}
  */
  readonly checkRegions?: string[];
  /**
  * The number of consecutive fails required from a health check before changing the health to unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/healthcheck#consecutive_fails Healthcheck#consecutive_fails}
  */
  readonly consecutiveFails?: number;
  /**
  * The number of consecutive successes required from a health check before changing the health to healthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/healthcheck#consecutive_successes Healthcheck#consecutive_successes}
  */
  readonly consecutiveSuccesses?: number;
  /**
  * A human-readable description of the health check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/healthcheck#description Healthcheck#description}
  */
  readonly description?: string;
  /**
  * Parameters specific to an HTTP or HTTPS health check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/healthcheck#http_config Healthcheck#http_config}
  */
  readonly httpConfig?: HealthcheckHttpConfig;
  /**
  * The interval between each health check. Shorter intervals may give quicker notifications if the origin status changes, but will increase load on the origin as we check from multiple locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/healthcheck#interval Healthcheck#interval}
  */
  readonly interval?: number;
  /**
  * A short name to identify the health check. Only alphanumeric characters, hyphens and underscores are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/healthcheck#name Healthcheck#name}
  */
  readonly name: string;
  /**
  * The number of retries to attempt in case of a timeout before marking the origin as unhealthy. Retries are attempted immediately.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/healthcheck#retries Healthcheck#retries}
  */
  readonly retries?: number;
  /**
  * If suspended, no health checks are sent to the origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/healthcheck#suspended Healthcheck#suspended}
  */
  readonly suspended?: boolean | cdktn.IResolvable;
  /**
  * Parameters specific to TCP health check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/healthcheck#tcp_config Healthcheck#tcp_config}
  */
  readonly tcpConfig?: HealthcheckTcpConfig;
  /**
  * The timeout (in seconds) before marking the health check as failed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/healthcheck#timeout Healthcheck#timeout}
  */
  readonly timeout?: number;
  /**
  * The protocol to use for the health check. Currently supported protocols are 'HTTP', 'HTTPS' and 'TCP'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/healthcheck#type Healthcheck#type}
  */
  readonly type?: string;
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/healthcheck#zone_id Healthcheck#zone_id}
  */
  readonly zoneId: string;
}
export interface HealthcheckHttpConfig {
  /**
  * Do not validate the certificate when the health check uses HTTPS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/healthcheck#allow_insecure Healthcheck#allow_insecure}
  */
  readonly allowInsecure?: boolean | cdktn.IResolvable;
  /**
  * A case-insensitive sub-string to look for in the response body. If this string is not found, the origin will be marked as unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/healthcheck#expected_body Healthcheck#expected_body}
  */
  readonly expectedBody?: string;
  /**
  * The expected HTTP response codes (e.g. "200") or code ranges (e.g. "2xx" for all codes starting with 2) of the health check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/healthcheck#expected_codes Healthcheck#expected_codes}
  */
  readonly expectedCodes?: string[];
  /**
  * Follow redirects if the origin returns a 3xx status code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/healthcheck#follow_redirects Healthcheck#follow_redirects}
  */
  readonly followRedirects?: boolean | cdktn.IResolvable;
  /**
  * The HTTP request headers to send in the health check. It is recommended you set a Host header by default. The User-Agent header cannot be overridden.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/healthcheck#header Healthcheck#header}
  */
  readonly header?: { [key: string]: string[] } | cdktn.IResolvable;
  /**
  * The HTTP method to use for the health check.
  * Available values: "GET", "HEAD".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/healthcheck#method Healthcheck#method}
  */
  readonly method?: string;
  /**
  * The endpoint path to health check against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/healthcheck#path Healthcheck#path}
  */
  readonly path?: string;
  /**
  * Port number to connect to for the health check. Defaults to 80 if type is HTTP or 443 if type is HTTPS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/healthcheck#port Healthcheck#port}
  */
  readonly port?: number;
}

export function healthcheckHttpConfigToTerraform(struct?: HealthcheckHttpConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_insecure: cdktn.booleanToTerraform(struct!.allowInsecure),
    expected_body: cdktn.stringToTerraform(struct!.expectedBody),
    expected_codes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.expectedCodes),
    follow_redirects: cdktn.booleanToTerraform(struct!.followRedirects),
    header: cdktn.hashMapper(cdktn.listMapper(cdktn.stringToTerraform, false))(struct!.header),
    method: cdktn.stringToTerraform(struct!.method),
    path: cdktn.stringToTerraform(struct!.path),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function healthcheckHttpConfigToHclTerraform(struct?: HealthcheckHttpConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_insecure: {
      value: cdktn.booleanToHclTerraform(struct!.allowInsecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expected_body: {
      value: cdktn.stringToHclTerraform(struct!.expectedBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expected_codes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.expectedCodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    follow_redirects: {
      value: cdktn.booleanToHclTerraform(struct!.followRedirects),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    header: {
      value: cdktn.hashMapperHcl(cdktn.listMapperHcl(cdktn.stringToHclTerraform, false))(struct!.header),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
    method: {
      value: cdktn.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthcheckHttpConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HealthcheckHttpConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInsecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInsecure = this._allowInsecure;
    }
    if (this._expectedBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedBody = this._expectedBody;
    }
    if (this._expectedCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedCodes = this._expectedCodes;
    }
    if (this._followRedirects !== undefined) {
      hasAnyValues = true;
      internalValueResult.followRedirects = this._followRedirects;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthcheckHttpConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowInsecure = undefined;
      this._expectedBody = undefined;
      this._expectedCodes = undefined;
      this._followRedirects = undefined;
      this._header = undefined;
      this._method = undefined;
      this._path = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowInsecure = value.allowInsecure;
      this._expectedBody = value.expectedBody;
      this._expectedCodes = value.expectedCodes;
      this._followRedirects = value.followRedirects;
      this._header = value.header;
      this._method = value.method;
      this._path = value.path;
      this._port = value.port;
    }
  }

  // allow_insecure - computed: true, optional: true, required: false
  private _allowInsecure?: boolean | cdktn.IResolvable; 
  public get allowInsecure() {
    return this.getBooleanAttribute('allow_insecure');
  }
  public set allowInsecure(value: boolean | cdktn.IResolvable) {
    this._allowInsecure = value;
  }
  public resetAllowInsecure() {
    this._allowInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInsecureInput() {
    return this._allowInsecure;
  }

  // expected_body - computed: true, optional: true, required: false
  private _expectedBody?: string; 
  public get expectedBody() {
    return this.getStringAttribute('expected_body');
  }
  public set expectedBody(value: string) {
    this._expectedBody = value;
  }
  public resetExpectedBody() {
    this._expectedBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedBodyInput() {
    return this._expectedBody;
  }

  // expected_codes - computed: true, optional: true, required: false
  private _expectedCodes?: string[]; 
  public get expectedCodes() {
    return this.getListAttribute('expected_codes');
  }
  public set expectedCodes(value: string[]) {
    this._expectedCodes = value;
  }
  public resetExpectedCodes() {
    this._expectedCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedCodesInput() {
    return this._expectedCodes;
  }

  // follow_redirects - computed: true, optional: true, required: false
  private _followRedirects?: boolean | cdktn.IResolvable; 
  public get followRedirects() {
    return this.getBooleanAttribute('follow_redirects');
  }
  public set followRedirects(value: boolean | cdktn.IResolvable) {
    this._followRedirects = value;
  }
  public resetFollowRedirects() {
    this._followRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followRedirectsInput() {
    return this._followRedirects;
  }

  // header - computed: true, optional: true, required: false
  private _header?: { [key: string]: string[] } | cdktn.IResolvable; 
  public get header() {
    return this.interpolationForAttribute('header');
  }
  public set header(value: { [key: string]: string[] } | cdktn.IResolvable) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // method - computed: true, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface HealthcheckTcpConfig {
  /**
  * The TCP connection method to use for the health check.
  * Available values: "connection_established".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/healthcheck#method Healthcheck#method}
  */
  readonly method?: string;
  /**
  * Port number to connect to for the health check. Defaults to 80.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/healthcheck#port Healthcheck#port}
  */
  readonly port?: number;
}

export function healthcheckTcpConfigToTerraform(struct?: HealthcheckTcpConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktn.stringToTerraform(struct!.method),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function healthcheckTcpConfigToHclTerraform(struct?: HealthcheckTcpConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method: {
      value: cdktn.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthcheckTcpConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HealthcheckTcpConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthcheckTcpConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._method = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._method = value.method;
      this._port = value.port;
    }
  }

  // method - computed: true, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/healthcheck cloudflare_healthcheck}
*/
export class Healthcheck extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_healthcheck";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Healthcheck resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Healthcheck to import
  * @param importFromId The id of the existing Healthcheck that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/healthcheck#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Healthcheck to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_healthcheck", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/healthcheck cloudflare_healthcheck} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HealthcheckConfig
  */
  public constructor(scope: Construct, id: string, config: HealthcheckConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_healthcheck',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.17.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address = config.address;
    this._checkRegions = config.checkRegions;
    this._consecutiveFails = config.consecutiveFails;
    this._consecutiveSuccesses = config.consecutiveSuccesses;
    this._description = config.description;
    this._httpConfig.internalValue = config.httpConfig;
    this._interval = config.interval;
    this._name = config.name;
    this._retries = config.retries;
    this._suspended = config.suspended;
    this._tcpConfig.internalValue = config.tcpConfig;
    this._timeout = config.timeout;
    this._type = config.type;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // check_regions - computed: false, optional: true, required: false
  private _checkRegions?: string[]; 
  public get checkRegions() {
    return this.getListAttribute('check_regions');
  }
  public set checkRegions(value: string[]) {
    this._checkRegions = value;
  }
  public resetCheckRegions() {
    this._checkRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkRegionsInput() {
    return this._checkRegions;
  }

  // consecutive_fails - computed: true, optional: true, required: false
  private _consecutiveFails?: number; 
  public get consecutiveFails() {
    return this.getNumberAttribute('consecutive_fails');
  }
  public set consecutiveFails(value: number) {
    this._consecutiveFails = value;
  }
  public resetConsecutiveFails() {
    this._consecutiveFails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveFailsInput() {
    return this._consecutiveFails;
  }

  // consecutive_successes - computed: true, optional: true, required: false
  private _consecutiveSuccesses?: number; 
  public get consecutiveSuccesses() {
    return this.getNumberAttribute('consecutive_successes');
  }
  public set consecutiveSuccesses(value: number) {
    this._consecutiveSuccesses = value;
  }
  public resetConsecutiveSuccesses() {
    this._consecutiveSuccesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveSuccessesInput() {
    return this._consecutiveSuccesses;
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // failure_reason - computed: true, optional: false, required: false
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
  }

  // http_config - computed: true, optional: true, required: false
  private _httpConfig = new HealthcheckHttpConfigOutputReference(this, "http_config");
  public get httpConfig() {
    return this._httpConfig;
  }
  public putHttpConfig(value: HealthcheckHttpConfig) {
    this._httpConfig.internalValue = value;
  }
  public resetHttpConfig() {
    this._httpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpConfigInput() {
    return this._httpConfig.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // retries - computed: true, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // suspended - computed: true, optional: true, required: false
  private _suspended?: boolean | cdktn.IResolvable; 
  public get suspended() {
    return this.getBooleanAttribute('suspended');
  }
  public set suspended(value: boolean | cdktn.IResolvable) {
    this._suspended = value;
  }
  public resetSuspended() {
    this._suspended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendedInput() {
    return this._suspended;
  }

  // tcp_config - computed: true, optional: true, required: false
  private _tcpConfig = new HealthcheckTcpConfigOutputReference(this, "tcp_config");
  public get tcpConfig() {
    return this._tcpConfig;
  }
  public putTcpConfig(value: HealthcheckTcpConfig) {
    this._tcpConfig.internalValue = value;
  }
  public resetTcpConfig() {
    this._tcpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpConfigInput() {
    return this._tcpConfig.internalValue;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktn.stringToTerraform(this._address),
      check_regions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._checkRegions),
      consecutive_fails: cdktn.numberToTerraform(this._consecutiveFails),
      consecutive_successes: cdktn.numberToTerraform(this._consecutiveSuccesses),
      description: cdktn.stringToTerraform(this._description),
      http_config: healthcheckHttpConfigToTerraform(this._httpConfig.internalValue),
      interval: cdktn.numberToTerraform(this._interval),
      name: cdktn.stringToTerraform(this._name),
      retries: cdktn.numberToTerraform(this._retries),
      suspended: cdktn.booleanToTerraform(this._suspended),
      tcp_config: healthcheckTcpConfigToTerraform(this._tcpConfig.internalValue),
      timeout: cdktn.numberToTerraform(this._timeout),
      type: cdktn.stringToTerraform(this._type),
      zone_id: cdktn.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktn.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      check_regions: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._checkRegions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      consecutive_fails: {
        value: cdktn.numberToHclTerraform(this._consecutiveFails),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      consecutive_successes: {
        value: cdktn.numberToHclTerraform(this._consecutiveSuccesses),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_config: {
        value: healthcheckHttpConfigToHclTerraform(this._httpConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HealthcheckHttpConfig",
      },
      interval: {
        value: cdktn.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retries: {
        value: cdktn.numberToHclTerraform(this._retries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      suspended: {
        value: cdktn.booleanToHclTerraform(this._suspended),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tcp_config: {
        value: healthcheckTcpConfigToHclTerraform(this._tcpConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HealthcheckTcpConfig",
      },
      timeout: {
        value: cdktn.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktn.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
