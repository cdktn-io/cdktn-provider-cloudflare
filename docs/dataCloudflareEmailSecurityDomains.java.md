# `dataCloudflareEmailSecurityDomains` Submodule <a name="`dataCloudflareEmailSecurityDomains` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareEmailSecurityDomains <a name="DataCloudflareEmailSecurityDomains" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains cloudflare_email_security_domains}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_email_security_domains.DataCloudflareEmailSecurityDomains;

DataCloudflareEmailSecurityDomains.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .activeDeliveryMode(java.lang.String)
//  .allowedDeliveryMode(java.lang.String)
//  .direction(java.lang.String)
//  .domain(java.util.List<java.lang.String>)
//  .integrationId(java.lang.String)
//  .maxItems(java.lang.Number)
//  .order(java.lang.String)
//  .search(java.lang.String)
//  .status(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.activeDeliveryMode">activeDeliveryMode</a></code> | <code>java.lang.String</code> | Currently active delivery mode to filter by. Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.allowedDeliveryMode">allowedDeliveryMode</a></code> | <code>java.lang.String</code> | Delivery mode to filter by. Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.direction">direction</a></code> | <code>java.lang.String</code> | The sorting direction. Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.domain">domain</a></code> | <code>java.util.List<java.lang.String></code> | Domain names to filter by. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.integrationId">integrationId</a></code> | <code>java.lang.String</code> | Integration ID to filter by. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.order">order</a></code> | <code>java.lang.String</code> | Field to sort by. Available values: "domain", "created_at". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.search">search</a></code> | <code>java.lang.String</code> | Search term for filtering records. Behavior may change. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Filters response to domains with the provided status. Available values: "PENDING", "ACTIVE", "FAILED", "TIMEOUT". |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#account_id DataCloudflareEmailSecurityDomains#account_id}

---

##### `activeDeliveryMode`<sup>Optional</sup> <a name="activeDeliveryMode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.activeDeliveryMode"></a>

- *Type:* java.lang.String

Currently active delivery mode to filter by. Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#active_delivery_mode DataCloudflareEmailSecurityDomains#active_delivery_mode}

---

##### `allowedDeliveryMode`<sup>Optional</sup> <a name="allowedDeliveryMode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.allowedDeliveryMode"></a>

- *Type:* java.lang.String

Delivery mode to filter by. Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#allowed_delivery_mode DataCloudflareEmailSecurityDomains#allowed_delivery_mode}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.direction"></a>

- *Type:* java.lang.String

The sorting direction. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#direction DataCloudflareEmailSecurityDomains#direction}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.domain"></a>

- *Type:* java.util.List<java.lang.String>

Domain names to filter by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#domain DataCloudflareEmailSecurityDomains#domain}

---

##### `integrationId`<sup>Optional</sup> <a name="integrationId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.integrationId"></a>

- *Type:* java.lang.String

Integration ID to filter by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#integration_id DataCloudflareEmailSecurityDomains#integration_id}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.maxItems"></a>

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#max_items DataCloudflareEmailSecurityDomains#max_items}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.order"></a>

- *Type:* java.lang.String

Field to sort by. Available values: "domain", "created_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#order DataCloudflareEmailSecurityDomains#order}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.search"></a>

- *Type:* java.lang.String

Search term for filtering records. Behavior may change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#search DataCloudflareEmailSecurityDomains#search}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Filters response to domains with the provided status. Available values: "PENDING", "ACTIVE", "FAILED", "TIMEOUT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#status DataCloudflareEmailSecurityDomains#status}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetActiveDeliveryMode">resetActiveDeliveryMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetAllowedDeliveryMode">resetAllowedDeliveryMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetIntegrationId">resetIntegrationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetSearch">resetSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetActiveDeliveryMode` <a name="resetActiveDeliveryMode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetActiveDeliveryMode"></a>

```java
public void resetActiveDeliveryMode()
```

##### `resetAllowedDeliveryMode` <a name="resetAllowedDeliveryMode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetAllowedDeliveryMode"></a>

```java
public void resetAllowedDeliveryMode()
```

##### `resetDirection` <a name="resetDirection" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetDirection"></a>

```java
public void resetDirection()
```

##### `resetDomain` <a name="resetDomain" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetDomain"></a>

```java
public void resetDomain()
```

##### `resetIntegrationId` <a name="resetIntegrationId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetIntegrationId"></a>

```java
public void resetIntegrationId()
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetMaxItems"></a>

```java
public void resetMaxItems()
```

##### `resetOrder` <a name="resetOrder" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetOrder"></a>

```java
public void resetOrder()
```

##### `resetSearch` <a name="resetSearch" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetSearch"></a>

```java
public void resetSearch()
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetStatus"></a>

```java
public void resetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareEmailSecurityDomains resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_email_security_domains.DataCloudflareEmailSecurityDomains;

DataCloudflareEmailSecurityDomains.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_email_security_domains.DataCloudflareEmailSecurityDomains;

DataCloudflareEmailSecurityDomains.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isTerraformDataSource"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_email_security_domains.DataCloudflareEmailSecurityDomains;

DataCloudflareEmailSecurityDomains.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_email_security_domains.DataCloudflareEmailSecurityDomains;

DataCloudflareEmailSecurityDomains.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareEmailSecurityDomains.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataCloudflareEmailSecurityDomains resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareEmailSecurityDomains to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareEmailSecurityDomains that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareEmailSecurityDomains to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList">DataCloudflareEmailSecurityDomainsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.activeDeliveryModeInput">activeDeliveryModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.allowedDeliveryModeInput">allowedDeliveryModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.domainInput">domainInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.integrationIdInput">integrationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.maxItemsInput">maxItemsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.orderInput">orderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.searchInput">searchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.activeDeliveryMode">activeDeliveryMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.allowedDeliveryMode">allowedDeliveryMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.domain">domain</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.integrationId">integrationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.order">order</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.search">search</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.result"></a>

```java
public DataCloudflareEmailSecurityDomainsResultList getResult();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList">DataCloudflareEmailSecurityDomainsResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `activeDeliveryModeInput`<sup>Optional</sup> <a name="activeDeliveryModeInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.activeDeliveryModeInput"></a>

```java
public java.lang.String getActiveDeliveryModeInput();
```

- *Type:* java.lang.String

---

##### `allowedDeliveryModeInput`<sup>Optional</sup> <a name="allowedDeliveryModeInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.allowedDeliveryModeInput"></a>

```java
public java.lang.String getAllowedDeliveryModeInput();
```

- *Type:* java.lang.String

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.domainInput"></a>

```java
public java.util.List<java.lang.String> getDomainInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `integrationIdInput`<sup>Optional</sup> <a name="integrationIdInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.integrationIdInput"></a>

```java
public java.lang.String getIntegrationIdInput();
```

- *Type:* java.lang.String

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.maxItemsInput"></a>

```java
public java.lang.Number getMaxItemsInput();
```

- *Type:* java.lang.Number

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.orderInput"></a>

```java
public java.lang.String getOrderInput();
```

- *Type:* java.lang.String

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.searchInput"></a>

```java
public java.lang.String getSearchInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `activeDeliveryMode`<sup>Required</sup> <a name="activeDeliveryMode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.activeDeliveryMode"></a>

```java
public java.lang.String getActiveDeliveryMode();
```

- *Type:* java.lang.String

---

##### `allowedDeliveryMode`<sup>Required</sup> <a name="allowedDeliveryMode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.allowedDeliveryMode"></a>

```java
public java.lang.String getAllowedDeliveryMode();
```

- *Type:* java.lang.String

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.domain"></a>

```java
public java.util.List<java.lang.String> getDomain();
```

- *Type:* java.util.List<java.lang.String>

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.integrationId"></a>

```java
public java.lang.String getIntegrationId();
```

- *Type:* java.lang.String

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.search"></a>

```java
public java.lang.String getSearch();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareEmailSecurityDomainsConfig <a name="DataCloudflareEmailSecurityDomainsConfig" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_email_security_domains.DataCloudflareEmailSecurityDomainsConfig;

DataCloudflareEmailSecurityDomainsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .activeDeliveryMode(java.lang.String)
//  .allowedDeliveryMode(java.lang.String)
//  .direction(java.lang.String)
//  .domain(java.util.List<java.lang.String>)
//  .integrationId(java.lang.String)
//  .maxItems(java.lang.Number)
//  .order(java.lang.String)
//  .search(java.lang.String)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.activeDeliveryMode">activeDeliveryMode</a></code> | <code>java.lang.String</code> | Currently active delivery mode to filter by. Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.allowedDeliveryMode">allowedDeliveryMode</a></code> | <code>java.lang.String</code> | Delivery mode to filter by. Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.direction">direction</a></code> | <code>java.lang.String</code> | The sorting direction. Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.domain">domain</a></code> | <code>java.util.List<java.lang.String></code> | Domain names to filter by. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.integrationId">integrationId</a></code> | <code>java.lang.String</code> | Integration ID to filter by. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.order">order</a></code> | <code>java.lang.String</code> | Field to sort by. Available values: "domain", "created_at". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.search">search</a></code> | <code>java.lang.String</code> | Search term for filtering records. Behavior may change. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.status">status</a></code> | <code>java.lang.String</code> | Filters response to domains with the provided status. Available values: "PENDING", "ACTIVE", "FAILED", "TIMEOUT". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#account_id DataCloudflareEmailSecurityDomains#account_id}

---

##### `activeDeliveryMode`<sup>Optional</sup> <a name="activeDeliveryMode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.activeDeliveryMode"></a>

```java
public java.lang.String getActiveDeliveryMode();
```

- *Type:* java.lang.String

Currently active delivery mode to filter by. Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#active_delivery_mode DataCloudflareEmailSecurityDomains#active_delivery_mode}

---

##### `allowedDeliveryMode`<sup>Optional</sup> <a name="allowedDeliveryMode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.allowedDeliveryMode"></a>

```java
public java.lang.String getAllowedDeliveryMode();
```

- *Type:* java.lang.String

Delivery mode to filter by. Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#allowed_delivery_mode DataCloudflareEmailSecurityDomains#allowed_delivery_mode}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

The sorting direction. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#direction DataCloudflareEmailSecurityDomains#direction}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.domain"></a>

```java
public java.util.List<java.lang.String> getDomain();
```

- *Type:* java.util.List<java.lang.String>

Domain names to filter by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#domain DataCloudflareEmailSecurityDomains#domain}

---

##### `integrationId`<sup>Optional</sup> <a name="integrationId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.integrationId"></a>

```java
public java.lang.String getIntegrationId();
```

- *Type:* java.lang.String

Integration ID to filter by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#integration_id DataCloudflareEmailSecurityDomains#integration_id}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#max_items DataCloudflareEmailSecurityDomains#max_items}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

Field to sort by. Available values: "domain", "created_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#order DataCloudflareEmailSecurityDomains#order}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.search"></a>

```java
public java.lang.String getSearch();
```

- *Type:* java.lang.String

Search term for filtering records. Behavior may change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#search DataCloudflareEmailSecurityDomains#search}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Filters response to domains with the provided status. Available values: "PENDING", "ACTIVE", "FAILED", "TIMEOUT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#status DataCloudflareEmailSecurityDomains#status}

---

### DataCloudflareEmailSecurityDomainsResult <a name="DataCloudflareEmailSecurityDomainsResult" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResult.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_email_security_domains.DataCloudflareEmailSecurityDomainsResult;

DataCloudflareEmailSecurityDomainsResult.builder()
    .build();
```


### DataCloudflareEmailSecurityDomainsResultAuthorization <a name="DataCloudflareEmailSecurityDomainsResultAuthorization" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorization.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_email_security_domains.DataCloudflareEmailSecurityDomainsResultAuthorization;

DataCloudflareEmailSecurityDomainsResultAuthorization.builder()
    .build();
```


### DataCloudflareEmailSecurityDomainsResultEmailsProcessed <a name="DataCloudflareEmailSecurityDomainsResultEmailsProcessed" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessed"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessed.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_email_security_domains.DataCloudflareEmailSecurityDomainsResultEmailsProcessed;

DataCloudflareEmailSecurityDomainsResultEmailsProcessed.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference <a name="DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_email_security_domains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference;

new DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.authorized">authorized</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.statusMessage">statusMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.timestamp">timestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorization">DataCloudflareEmailSecurityDomainsResultAuthorization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorized`<sup>Required</sup> <a name="authorized" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.authorized"></a>

```java
public IResolvable getAuthorized();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.statusMessage"></a>

```java
public java.lang.String getStatusMessage();
```

- *Type:* java.lang.String

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.timestamp"></a>

```java
public java.lang.String getTimestamp();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.internalValue"></a>

```java
public DataCloudflareEmailSecurityDomainsResultAuthorization getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorization">DataCloudflareEmailSecurityDomainsResultAuthorization</a>

---


### DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference <a name="DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_email_security_domains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference;

new DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.timestamp">timestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.totalEmailsProcessed">totalEmailsProcessed</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.totalEmailsProcessedPrevious">totalEmailsProcessedPrevious</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessed">DataCloudflareEmailSecurityDomainsResultEmailsProcessed</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.timestamp"></a>

```java
public java.lang.String getTimestamp();
```

- *Type:* java.lang.String

---

##### `totalEmailsProcessed`<sup>Required</sup> <a name="totalEmailsProcessed" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.totalEmailsProcessed"></a>

```java
public java.lang.Number getTotalEmailsProcessed();
```

- *Type:* java.lang.Number

---

##### `totalEmailsProcessedPrevious`<sup>Required</sup> <a name="totalEmailsProcessedPrevious" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.totalEmailsProcessedPrevious"></a>

```java
public java.lang.Number getTotalEmailsProcessedPrevious();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.internalValue"></a>

```java
public DataCloudflareEmailSecurityDomainsResultEmailsProcessed getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessed">DataCloudflareEmailSecurityDomainsResultEmailsProcessed</a>

---


### DataCloudflareEmailSecurityDomainsResultList <a name="DataCloudflareEmailSecurityDomainsResultList" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_email_security_domains.DataCloudflareEmailSecurityDomainsResultList;

new DataCloudflareEmailSecurityDomainsResultList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.get"></a>

```java
public DataCloudflareEmailSecurityDomainsResultOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareEmailSecurityDomainsResultOutputReference <a name="DataCloudflareEmailSecurityDomainsResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_email_security_domains.DataCloudflareEmailSecurityDomainsResultOutputReference;

new DataCloudflareEmailSecurityDomainsResultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.allowedDeliveryModes">allowedDeliveryModes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.authorization">authorization</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference">DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.dmarcStatus">dmarcStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.dropDispositions">dropDispositions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.emailsProcessed">emailsProcessed</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference">DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.folder">folder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.inboxProvider">inboxProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.integrationId">integrationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.ipRestrictions">ipRestrictions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.lastModified">lastModified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.lookbackHops">lookbackHops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.modifiedAt">modifiedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.o365TenantId">o365TenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.requireTlsInbound">requireTlsInbound</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.requireTlsOutbound">requireTlsOutbound</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.spfStatus">spfStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.transport">transport</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResult">DataCloudflareEmailSecurityDomainsResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedDeliveryModes`<sup>Required</sup> <a name="allowedDeliveryModes" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.allowedDeliveryModes"></a>

```java
public java.util.List<java.lang.String> getAllowedDeliveryModes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.authorization"></a>

```java
public DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference getAuthorization();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference">DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `dmarcStatus`<sup>Required</sup> <a name="dmarcStatus" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.dmarcStatus"></a>

```java
public java.lang.String getDmarcStatus();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `dropDispositions`<sup>Required</sup> <a name="dropDispositions" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.dropDispositions"></a>

```java
public java.util.List<java.lang.String> getDropDispositions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailsProcessed`<sup>Required</sup> <a name="emailsProcessed" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.emailsProcessed"></a>

```java
public DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference getEmailsProcessed();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference">DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference</a>

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.folder"></a>

```java
public java.lang.String getFolder();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `inboxProvider`<sup>Required</sup> <a name="inboxProvider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.inboxProvider"></a>

```java
public java.lang.String getInboxProvider();
```

- *Type:* java.lang.String

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.integrationId"></a>

```java
public java.lang.String getIntegrationId();
```

- *Type:* java.lang.String

---

##### `ipRestrictions`<sup>Required</sup> <a name="ipRestrictions" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.ipRestrictions"></a>

```java
public java.util.List<java.lang.String> getIpRestrictions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.lastModified"></a>

```java
public java.lang.String getLastModified();
```

- *Type:* java.lang.String

---

##### `lookbackHops`<sup>Required</sup> <a name="lookbackHops" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.lookbackHops"></a>

```java
public java.lang.Number getLookbackHops();
```

- *Type:* java.lang.Number

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.modifiedAt"></a>

```java
public java.lang.String getModifiedAt();
```

- *Type:* java.lang.String

---

##### `o365TenantId`<sup>Required</sup> <a name="o365TenantId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.o365TenantId"></a>

```java
public java.lang.String getO365TenantId();
```

- *Type:* java.lang.String

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requireTlsInbound`<sup>Required</sup> <a name="requireTlsInbound" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.requireTlsInbound"></a>

```java
public IResolvable getRequireTlsInbound();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `requireTlsOutbound`<sup>Required</sup> <a name="requireTlsOutbound" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.requireTlsOutbound"></a>

```java
public IResolvable getRequireTlsOutbound();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `spfStatus`<sup>Required</sup> <a name="spfStatus" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.spfStatus"></a>

```java
public java.lang.String getSpfStatus();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `transport`<sup>Required</sup> <a name="transport" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.transport"></a>

```java
public java.lang.String getTransport();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.internalValue"></a>

```java
public DataCloudflareEmailSecurityDomainsResult getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResult">DataCloudflareEmailSecurityDomainsResult</a>

---



