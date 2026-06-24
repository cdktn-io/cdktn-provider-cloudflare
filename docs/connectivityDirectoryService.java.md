# `connectivityDirectoryService` Submodule <a name="`connectivityDirectoryService` Submodule" id="@cdktn/provider-cloudflare.connectivityDirectoryService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectivityDirectoryService <a name="ConnectivityDirectoryService" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/connectivity_directory_service cloudflare_connectivity_directory_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.connectivity_directory_service.ConnectivityDirectoryService;

ConnectivityDirectoryService.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .host(ConnectivityDirectoryServiceHost)
    .name(java.lang.String)
    .type(java.lang.String)
//  .appProtocol(java.lang.String)
//  .httpPort(java.lang.Number)
//  .httpsPort(java.lang.Number)
//  .tcpPort(java.lang.Number)
//  .tlsSettings(ConnectivityDirectoryServiceTlsSettings)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Account identifier. |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.host">host</a></code> | <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost">ConnectivityDirectoryServiceHost</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/connectivity_directory_service#host ConnectivityDirectoryService#host}. |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/connectivity_directory_service#name ConnectivityDirectoryService#name}. |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Available values: "tcp", "http". |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.appProtocol">appProtocol</a></code> | <code>java.lang.String</code> | Available values: "postgresql", "mysql". |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.httpPort">httpPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/connectivity_directory_service#http_port ConnectivityDirectoryService#http_port}. |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.httpsPort">httpsPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/connectivity_directory_service#https_port ConnectivityDirectoryService#https_port}. |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.tcpPort">tcpPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/connectivity_directory_service#tcp_port ConnectivityDirectoryService#tcp_port}. |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.tlsSettings">tlsSettings</a></code> | <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettings">ConnectivityDirectoryServiceTlsSettings</a></code> | TLS settings for a connectivity service. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Account identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/connectivity_directory_service#account_id ConnectivityDirectoryService#account_id}

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.host"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost">ConnectivityDirectoryServiceHost</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/connectivity_directory_service#host ConnectivityDirectoryService#host}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/connectivity_directory_service#name ConnectivityDirectoryService#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Available values: "tcp", "http".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/connectivity_directory_service#type ConnectivityDirectoryService#type}

---

##### `appProtocol`<sup>Optional</sup> <a name="appProtocol" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.appProtocol"></a>

- *Type:* java.lang.String

Available values: "postgresql", "mysql".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/connectivity_directory_service#app_protocol ConnectivityDirectoryService#app_protocol}

---

##### `httpPort`<sup>Optional</sup> <a name="httpPort" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.httpPort"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/connectivity_directory_service#http_port ConnectivityDirectoryService#http_port}.

---

##### `httpsPort`<sup>Optional</sup> <a name="httpsPort" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.httpsPort"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/connectivity_directory_service#https_port ConnectivityDirectoryService#https_port}.

---

##### `tcpPort`<sup>Optional</sup> <a name="tcpPort" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.tcpPort"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/connectivity_directory_service#tcp_port ConnectivityDirectoryService#tcp_port}.

---

##### `tlsSettings`<sup>Optional</sup> <a name="tlsSettings" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.tlsSettings"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettings">ConnectivityDirectoryServiceTlsSettings</a>

TLS settings for a connectivity service.

If omitted, the default mode (`verify_full`) is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/connectivity_directory_service#tls_settings ConnectivityDirectoryService#tls_settings}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.putHost">putHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.putTlsSettings">putTlsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.resetAppProtocol">resetAppProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.resetHttpPort">resetHttpPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.resetHttpsPort">resetHttpsPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.resetTcpPort">resetTcpPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.resetTlsSettings">resetTlsSettings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHost` <a name="putHost" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.putHost"></a>

```java
public void putHost(ConnectivityDirectoryServiceHost value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.putHost.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost">ConnectivityDirectoryServiceHost</a>

---

##### `putTlsSettings` <a name="putTlsSettings" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.putTlsSettings"></a>

```java
public void putTlsSettings(ConnectivityDirectoryServiceTlsSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.putTlsSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettings">ConnectivityDirectoryServiceTlsSettings</a>

---

##### `resetAppProtocol` <a name="resetAppProtocol" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.resetAppProtocol"></a>

```java
public void resetAppProtocol()
```

##### `resetHttpPort` <a name="resetHttpPort" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.resetHttpPort"></a>

```java
public void resetHttpPort()
```

##### `resetHttpsPort` <a name="resetHttpsPort" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.resetHttpsPort"></a>

```java
public void resetHttpsPort()
```

##### `resetTcpPort` <a name="resetTcpPort" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.resetTcpPort"></a>

```java
public void resetTcpPort()
```

##### `resetTlsSettings` <a name="resetTlsSettings" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.resetTlsSettings"></a>

```java
public void resetTlsSettings()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectivityDirectoryService resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.connectivity_directory_service.ConnectivityDirectoryService;

ConnectivityDirectoryService.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.connectivity_directory_service.ConnectivityDirectoryService;

ConnectivityDirectoryService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.isTerraformResource"></a>

```java
import io.cdktn.providers.cloudflare.connectivity_directory_service.ConnectivityDirectoryService;

ConnectivityDirectoryService.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.connectivity_directory_service.ConnectivityDirectoryService;

ConnectivityDirectoryService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ConnectivityDirectoryService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ConnectivityDirectoryService resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ConnectivityDirectoryService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ConnectivityDirectoryService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/connectivity_directory_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ConnectivityDirectoryService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.host">host</a></code> | <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference">ConnectivityDirectoryServiceHostOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.tlsSettings">tlsSettings</a></code> | <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference">ConnectivityDirectoryServiceTlsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.appProtocolInput">appProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.hostInput">hostInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost">ConnectivityDirectoryServiceHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.httpPortInput">httpPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.httpsPortInput">httpsPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.tcpPortInput">tcpPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.tlsSettingsInput">tlsSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettings">ConnectivityDirectoryServiceTlsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.appProtocol">appProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.httpPort">httpPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.httpsPort">httpsPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.tcpPort">tcpPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.host"></a>

```java
public ConnectivityDirectoryServiceHostOutputReference getHost();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference">ConnectivityDirectoryServiceHostOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

---

##### `tlsSettings`<sup>Required</sup> <a name="tlsSettings" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.tlsSettings"></a>

```java
public ConnectivityDirectoryServiceTlsSettingsOutputReference getTlsSettings();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference">ConnectivityDirectoryServiceTlsSettingsOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `appProtocolInput`<sup>Optional</sup> <a name="appProtocolInput" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.appProtocolInput"></a>

```java
public java.lang.String getAppProtocolInput();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.hostInput"></a>

```java
public IResolvable|ConnectivityDirectoryServiceHost getHostInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost">ConnectivityDirectoryServiceHost</a>

---

##### `httpPortInput`<sup>Optional</sup> <a name="httpPortInput" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.httpPortInput"></a>

```java
public java.lang.Number getHttpPortInput();
```

- *Type:* java.lang.Number

---

##### `httpsPortInput`<sup>Optional</sup> <a name="httpsPortInput" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.httpsPortInput"></a>

```java
public java.lang.Number getHttpsPortInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tcpPortInput`<sup>Optional</sup> <a name="tcpPortInput" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.tcpPortInput"></a>

```java
public java.lang.Number getTcpPortInput();
```

- *Type:* java.lang.Number

---

##### `tlsSettingsInput`<sup>Optional</sup> <a name="tlsSettingsInput" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.tlsSettingsInput"></a>

```java
public IResolvable|ConnectivityDirectoryServiceTlsSettings getTlsSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettings">ConnectivityDirectoryServiceTlsSettings</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `appProtocol`<sup>Required</sup> <a name="appProtocol" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.appProtocol"></a>

```java
public java.lang.String getAppProtocol();
```

- *Type:* java.lang.String

---

##### `httpPort`<sup>Required</sup> <a name="httpPort" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.httpPort"></a>

```java
public java.lang.Number getHttpPort();
```

- *Type:* java.lang.Number

---

##### `httpsPort`<sup>Required</sup> <a name="httpsPort" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.httpsPort"></a>

```java
public java.lang.Number getHttpsPort();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tcpPort`<sup>Required</sup> <a name="tcpPort" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.tcpPort"></a>

```java
public java.lang.Number getTcpPort();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectivityDirectoryServiceConfig <a name="ConnectivityDirectoryServiceConfig" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.connectivity_directory_service.ConnectivityDirectoryServiceConfig;

ConnectivityDirectoryServiceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .host(ConnectivityDirectoryServiceHost)
    .name(java.lang.String)
    .type(java.lang.String)
//  .appProtocol(java.lang.String)
//  .httpPort(java.lang.Number)
//  .httpsPort(java.lang.Number)
//  .tcpPort(java.lang.Number)
//  .tlsSettings(ConnectivityDirectoryServiceTlsSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Account identifier. |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.host">host</a></code> | <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost">ConnectivityDirectoryServiceHost</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/connectivity_directory_service#host ConnectivityDirectoryService#host}. |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/connectivity_directory_service#name ConnectivityDirectoryService#name}. |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.type">type</a></code> | <code>java.lang.String</code> | Available values: "tcp", "http". |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.appProtocol">appProtocol</a></code> | <code>java.lang.String</code> | Available values: "postgresql", "mysql". |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.httpPort">httpPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/connectivity_directory_service#http_port ConnectivityDirectoryService#http_port}. |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.httpsPort">httpsPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/connectivity_directory_service#https_port ConnectivityDirectoryService#https_port}. |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.tcpPort">tcpPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/connectivity_directory_service#tcp_port ConnectivityDirectoryService#tcp_port}. |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.tlsSettings">tlsSettings</a></code> | <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettings">ConnectivityDirectoryServiceTlsSettings</a></code> | TLS settings for a connectivity service. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Account identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/connectivity_directory_service#account_id ConnectivityDirectoryService#account_id}

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.host"></a>

```java
public ConnectivityDirectoryServiceHost getHost();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost">ConnectivityDirectoryServiceHost</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/connectivity_directory_service#host ConnectivityDirectoryService#host}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/connectivity_directory_service#name ConnectivityDirectoryService#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Available values: "tcp", "http".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/connectivity_directory_service#type ConnectivityDirectoryService#type}

---

##### `appProtocol`<sup>Optional</sup> <a name="appProtocol" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.appProtocol"></a>

```java
public java.lang.String getAppProtocol();
```

- *Type:* java.lang.String

Available values: "postgresql", "mysql".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/connectivity_directory_service#app_protocol ConnectivityDirectoryService#app_protocol}

---

##### `httpPort`<sup>Optional</sup> <a name="httpPort" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.httpPort"></a>

```java
public java.lang.Number getHttpPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/connectivity_directory_service#http_port ConnectivityDirectoryService#http_port}.

---

##### `httpsPort`<sup>Optional</sup> <a name="httpsPort" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.httpsPort"></a>

```java
public java.lang.Number getHttpsPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/connectivity_directory_service#https_port ConnectivityDirectoryService#https_port}.

---

##### `tcpPort`<sup>Optional</sup> <a name="tcpPort" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.tcpPort"></a>

```java
public java.lang.Number getTcpPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/connectivity_directory_service#tcp_port ConnectivityDirectoryService#tcp_port}.

---

##### `tlsSettings`<sup>Optional</sup> <a name="tlsSettings" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.tlsSettings"></a>

```java
public ConnectivityDirectoryServiceTlsSettings getTlsSettings();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettings">ConnectivityDirectoryServiceTlsSettings</a>

TLS settings for a connectivity service.

If omitted, the default mode (`verify_full`) is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/connectivity_directory_service#tls_settings ConnectivityDirectoryService#tls_settings}

---

### ConnectivityDirectoryServiceHost <a name="ConnectivityDirectoryServiceHost" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.connectivity_directory_service.ConnectivityDirectoryServiceHost;

ConnectivityDirectoryServiceHost.builder()
//  .hostname(java.lang.String)
//  .ipv4(java.lang.String)
//  .ipv6(java.lang.String)
//  .network(ConnectivityDirectoryServiceHostNetwork)
//  .resolverNetwork(ConnectivityDirectoryServiceHostResolverNetwork)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/connectivity_directory_service#hostname ConnectivityDirectoryService#hostname}. |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost.property.ipv4">ipv4</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/connectivity_directory_service#ipv4 ConnectivityDirectoryService#ipv4}. |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost.property.ipv6">ipv6</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/connectivity_directory_service#ipv6 ConnectivityDirectoryService#ipv6}. |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost.property.network">network</a></code> | <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetwork">ConnectivityDirectoryServiceHostNetwork</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/connectivity_directory_service#network ConnectivityDirectoryService#network}. |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost.property.resolverNetwork">resolverNetwork</a></code> | <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetwork">ConnectivityDirectoryServiceHostResolverNetwork</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/connectivity_directory_service#resolver_network ConnectivityDirectoryService#resolver_network}. |

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/connectivity_directory_service#hostname ConnectivityDirectoryService#hostname}.

---

##### `ipv4`<sup>Optional</sup> <a name="ipv4" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost.property.ipv4"></a>

```java
public java.lang.String getIpv4();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/connectivity_directory_service#ipv4 ConnectivityDirectoryService#ipv4}.

---

##### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost.property.ipv6"></a>

```java
public java.lang.String getIpv6();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/connectivity_directory_service#ipv6 ConnectivityDirectoryService#ipv6}.

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost.property.network"></a>

```java
public ConnectivityDirectoryServiceHostNetwork getNetwork();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetwork">ConnectivityDirectoryServiceHostNetwork</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/connectivity_directory_service#network ConnectivityDirectoryService#network}.

---

##### `resolverNetwork`<sup>Optional</sup> <a name="resolverNetwork" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost.property.resolverNetwork"></a>

```java
public ConnectivityDirectoryServiceHostResolverNetwork getResolverNetwork();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetwork">ConnectivityDirectoryServiceHostResolverNetwork</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/connectivity_directory_service#resolver_network ConnectivityDirectoryService#resolver_network}.

---

### ConnectivityDirectoryServiceHostNetwork <a name="ConnectivityDirectoryServiceHostNetwork" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetwork.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.connectivity_directory_service.ConnectivityDirectoryServiceHostNetwork;

ConnectivityDirectoryServiceHostNetwork.builder()
    .tunnelId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetwork.property.tunnelId">tunnelId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/connectivity_directory_service#tunnel_id ConnectivityDirectoryService#tunnel_id}. |

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetwork.property.tunnelId"></a>

```java
public java.lang.String getTunnelId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/connectivity_directory_service#tunnel_id ConnectivityDirectoryService#tunnel_id}.

---

### ConnectivityDirectoryServiceHostResolverNetwork <a name="ConnectivityDirectoryServiceHostResolverNetwork" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetwork.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.connectivity_directory_service.ConnectivityDirectoryServiceHostResolverNetwork;

ConnectivityDirectoryServiceHostResolverNetwork.builder()
    .tunnelId(java.lang.String)
//  .resolverIps(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetwork.property.tunnelId">tunnelId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/connectivity_directory_service#tunnel_id ConnectivityDirectoryService#tunnel_id}. |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetwork.property.resolverIps">resolverIps</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/connectivity_directory_service#resolver_ips ConnectivityDirectoryService#resolver_ips}. |

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetwork.property.tunnelId"></a>

```java
public java.lang.String getTunnelId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/connectivity_directory_service#tunnel_id ConnectivityDirectoryService#tunnel_id}.

---

##### `resolverIps`<sup>Optional</sup> <a name="resolverIps" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetwork.property.resolverIps"></a>

```java
public java.util.List<java.lang.String> getResolverIps();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/connectivity_directory_service#resolver_ips ConnectivityDirectoryService#resolver_ips}.

---

### ConnectivityDirectoryServiceTlsSettings <a name="ConnectivityDirectoryServiceTlsSettings" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettings.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.connectivity_directory_service.ConnectivityDirectoryServiceTlsSettings;

ConnectivityDirectoryServiceTlsSettings.builder()
    .certVerificationMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettings.property.certVerificationMode">certVerificationMode</a></code> | <code>java.lang.String</code> | TLS certificate verification mode for the connection to the origin. |

---

##### `certVerificationMode`<sup>Required</sup> <a name="certVerificationMode" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettings.property.certVerificationMode"></a>

```java
public java.lang.String getCertVerificationMode();
```

- *Type:* java.lang.String

TLS certificate verification mode for the connection to the origin.

* `"verify_full"` — verify certificate chain and hostname (default)
* `"verify_ca"` — verify certificate chain only, skip hostname check
* `"disabled"` — do not verify the server certificate at all

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/connectivity_directory_service#cert_verification_mode ConnectivityDirectoryService#cert_verification_mode}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectivityDirectoryServiceHostNetworkOutputReference <a name="ConnectivityDirectoryServiceHostNetworkOutputReference" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.connectivity_directory_service.ConnectivityDirectoryServiceHostNetworkOutputReference;

new ConnectivityDirectoryServiceHostNetworkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.property.tunnelIdInput">tunnelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.property.tunnelId">tunnelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetwork">ConnectivityDirectoryServiceHostNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tunnelIdInput`<sup>Optional</sup> <a name="tunnelIdInput" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.property.tunnelIdInput"></a>

```java
public java.lang.String getTunnelIdInput();
```

- *Type:* java.lang.String

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.property.tunnelId"></a>

```java
public java.lang.String getTunnelId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectivityDirectoryServiceHostNetwork getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetwork">ConnectivityDirectoryServiceHostNetwork</a>

---


### ConnectivityDirectoryServiceHostOutputReference <a name="ConnectivityDirectoryServiceHostOutputReference" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.connectivity_directory_service.ConnectivityDirectoryServiceHostOutputReference;

new ConnectivityDirectoryServiceHostOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.putNetwork">putNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.putResolverNetwork">putResolverNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.resetIpv4">resetIpv4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.resetIpv6">resetIpv6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.resetResolverNetwork">resetResolverNetwork</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNetwork` <a name="putNetwork" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.putNetwork"></a>

```java
public void putNetwork(ConnectivityDirectoryServiceHostNetwork value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetwork">ConnectivityDirectoryServiceHostNetwork</a>

---

##### `putResolverNetwork` <a name="putResolverNetwork" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.putResolverNetwork"></a>

```java
public void putResolverNetwork(ConnectivityDirectoryServiceHostResolverNetwork value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.putResolverNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetwork">ConnectivityDirectoryServiceHostResolverNetwork</a>

---

##### `resetHostname` <a name="resetHostname" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.resetHostname"></a>

```java
public void resetHostname()
```

##### `resetIpv4` <a name="resetIpv4" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.resetIpv4"></a>

```java
public void resetIpv4()
```

##### `resetIpv6` <a name="resetIpv6" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.resetIpv6"></a>

```java
public void resetIpv6()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetResolverNetwork` <a name="resetResolverNetwork" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.resetResolverNetwork"></a>

```java
public void resetResolverNetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.network">network</a></code> | <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference">ConnectivityDirectoryServiceHostNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.resolverNetwork">resolverNetwork</a></code> | <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference">ConnectivityDirectoryServiceHostResolverNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.ipv4Input">ipv4Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.ipv6Input">ipv6Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.networkInput">networkInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetwork">ConnectivityDirectoryServiceHostNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.resolverNetworkInput">resolverNetworkInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetwork">ConnectivityDirectoryServiceHostResolverNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.ipv4">ipv4</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.ipv6">ipv6</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost">ConnectivityDirectoryServiceHost</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.network"></a>

```java
public ConnectivityDirectoryServiceHostNetworkOutputReference getNetwork();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference">ConnectivityDirectoryServiceHostNetworkOutputReference</a>

---

##### `resolverNetwork`<sup>Required</sup> <a name="resolverNetwork" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.resolverNetwork"></a>

```java
public ConnectivityDirectoryServiceHostResolverNetworkOutputReference getResolverNetwork();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference">ConnectivityDirectoryServiceHostResolverNetworkOutputReference</a>

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `ipv4Input`<sup>Optional</sup> <a name="ipv4Input" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.ipv4Input"></a>

```java
public java.lang.String getIpv4Input();
```

- *Type:* java.lang.String

---

##### `ipv6Input`<sup>Optional</sup> <a name="ipv6Input" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.ipv6Input"></a>

```java
public java.lang.String getIpv6Input();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.networkInput"></a>

```java
public IResolvable|ConnectivityDirectoryServiceHostNetwork getNetworkInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetwork">ConnectivityDirectoryServiceHostNetwork</a>

---

##### `resolverNetworkInput`<sup>Optional</sup> <a name="resolverNetworkInput" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.resolverNetworkInput"></a>

```java
public IResolvable|ConnectivityDirectoryServiceHostResolverNetwork getResolverNetworkInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetwork">ConnectivityDirectoryServiceHostResolverNetwork</a>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.ipv4"></a>

```java
public java.lang.String getIpv4();
```

- *Type:* java.lang.String

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.ipv6"></a>

```java
public java.lang.String getIpv6();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectivityDirectoryServiceHost getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost">ConnectivityDirectoryServiceHost</a>

---


### ConnectivityDirectoryServiceHostResolverNetworkOutputReference <a name="ConnectivityDirectoryServiceHostResolverNetworkOutputReference" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.connectivity_directory_service.ConnectivityDirectoryServiceHostResolverNetworkOutputReference;

new ConnectivityDirectoryServiceHostResolverNetworkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.resetResolverIps">resetResolverIps</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResolverIps` <a name="resetResolverIps" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.resetResolverIps"></a>

```java
public void resetResolverIps()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.resolverIpsInput">resolverIpsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.tunnelIdInput">tunnelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.resolverIps">resolverIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.tunnelId">tunnelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetwork">ConnectivityDirectoryServiceHostResolverNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resolverIpsInput`<sup>Optional</sup> <a name="resolverIpsInput" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.resolverIpsInput"></a>

```java
public java.util.List<java.lang.String> getResolverIpsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tunnelIdInput`<sup>Optional</sup> <a name="tunnelIdInput" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.tunnelIdInput"></a>

```java
public java.lang.String getTunnelIdInput();
```

- *Type:* java.lang.String

---

##### `resolverIps`<sup>Required</sup> <a name="resolverIps" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.resolverIps"></a>

```java
public java.util.List<java.lang.String> getResolverIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.tunnelId"></a>

```java
public java.lang.String getTunnelId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectivityDirectoryServiceHostResolverNetwork getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetwork">ConnectivityDirectoryServiceHostResolverNetwork</a>

---


### ConnectivityDirectoryServiceTlsSettingsOutputReference <a name="ConnectivityDirectoryServiceTlsSettingsOutputReference" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.connectivity_directory_service.ConnectivityDirectoryServiceTlsSettingsOutputReference;

new ConnectivityDirectoryServiceTlsSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.property.certVerificationModeInput">certVerificationModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.property.certVerificationMode">certVerificationMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettings">ConnectivityDirectoryServiceTlsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certVerificationModeInput`<sup>Optional</sup> <a name="certVerificationModeInput" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.property.certVerificationModeInput"></a>

```java
public java.lang.String getCertVerificationModeInput();
```

- *Type:* java.lang.String

---

##### `certVerificationMode`<sup>Required</sup> <a name="certVerificationMode" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.property.certVerificationMode"></a>

```java
public java.lang.String getCertVerificationMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectivityDirectoryServiceTlsSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceTlsSettings">ConnectivityDirectoryServiceTlsSettings</a>

---



