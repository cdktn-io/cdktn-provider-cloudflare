# `dataCloudflareZeroTrustCwsDomainAcls` Submodule <a name="`dataCloudflareZeroTrustCwsDomainAcls` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustCwsDomainAcls <a name="DataCloudflareZeroTrustCwsDomainAcls" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_domain_acls cloudflare_zero_trust_cws_domain_acls}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_domain_acls.DataCloudflareZeroTrustCwsDomainAcls;

DataCloudflareZeroTrustCwsDomainAcls.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .deploymentId(java.lang.String)
//  .direction(java.lang.String)
//  .maxItems(java.lang.Number)
//  .name(java.lang.String)
//  .order(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.Initializer.parameter.deploymentId">deploymentId</a></code> | <code>java.lang.String</code> | Filter to domain ACLs attached to this deployment. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.Initializer.parameter.direction">direction</a></code> | <code>java.lang.String</code> | Sort direction (default: asc) Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.Initializer.parameter.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Filter by domain ACL name (case-insensitive substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.Initializer.parameter.order">order</a></code> | <code>java.lang.String</code> | Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at". |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_domain_acls#account_id DataCloudflareZeroTrustCwsDomainAcls#account_id}

---

##### `deploymentId`<sup>Optional</sup> <a name="deploymentId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.Initializer.parameter.deploymentId"></a>

- *Type:* java.lang.String

Filter to domain ACLs attached to this deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_domain_acls#deployment_id DataCloudflareZeroTrustCwsDomainAcls#deployment_id}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.Initializer.parameter.direction"></a>

- *Type:* java.lang.String

Sort direction (default: asc) Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_domain_acls#direction DataCloudflareZeroTrustCwsDomainAcls#direction}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.Initializer.parameter.maxItems"></a>

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_domain_acls#max_items DataCloudflareZeroTrustCwsDomainAcls#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Filter by domain ACL name (case-insensitive substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_domain_acls#name DataCloudflareZeroTrustCwsDomainAcls#name}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.Initializer.parameter.order"></a>

- *Type:* java.lang.String

Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_domain_acls#order DataCloudflareZeroTrustCwsDomainAcls#order}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.resetDeploymentId">resetDeploymentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.resetOrder">resetOrder</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDeploymentId` <a name="resetDeploymentId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.resetDeploymentId"></a>

```java
public void resetDeploymentId()
```

##### `resetDirection` <a name="resetDirection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.resetDirection"></a>

```java
public void resetDirection()
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.resetMaxItems"></a>

```java
public void resetMaxItems()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.resetName"></a>

```java
public void resetName()
```

##### `resetOrder` <a name="resetOrder" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.resetOrder"></a>

```java
public void resetOrder()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustCwsDomainAcls resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_domain_acls.DataCloudflareZeroTrustCwsDomainAcls;

DataCloudflareZeroTrustCwsDomainAcls.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_domain_acls.DataCloudflareZeroTrustCwsDomainAcls;

DataCloudflareZeroTrustCwsDomainAcls.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.isTerraformDataSource"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_domain_acls.DataCloudflareZeroTrustCwsDomainAcls;

DataCloudflareZeroTrustCwsDomainAcls.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_domain_acls.DataCloudflareZeroTrustCwsDomainAcls;

DataCloudflareZeroTrustCwsDomainAcls.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareZeroTrustCwsDomainAcls.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustCwsDomainAcls resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareZeroTrustCwsDomainAcls to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareZeroTrustCwsDomainAcls that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_domain_acls#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustCwsDomainAcls to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultList">DataCloudflareZeroTrustCwsDomainAclsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.deploymentIdInput">deploymentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.maxItemsInput">maxItemsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.orderInput">orderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.deploymentId">deploymentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.order">order</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.result"></a>

```java
public DataCloudflareZeroTrustCwsDomainAclsResultList getResult();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultList">DataCloudflareZeroTrustCwsDomainAclsResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `deploymentIdInput`<sup>Optional</sup> <a name="deploymentIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.deploymentIdInput"></a>

```java
public java.lang.String getDeploymentIdInput();
```

- *Type:* java.lang.String

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.maxItemsInput"></a>

```java
public java.lang.Number getMaxItemsInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.orderInput"></a>

```java
public java.lang.String getOrderInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.deploymentId"></a>

```java
public java.lang.String getDeploymentId();
```

- *Type:* java.lang.String

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAcls.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustCwsDomainAclsConfig <a name="DataCloudflareZeroTrustCwsDomainAclsConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_domain_acls.DataCloudflareZeroTrustCwsDomainAclsConfig;

DataCloudflareZeroTrustCwsDomainAclsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .deploymentId(java.lang.String)
//  .direction(java.lang.String)
//  .maxItems(java.lang.Number)
//  .name(java.lang.String)
//  .order(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsConfig.property.deploymentId">deploymentId</a></code> | <code>java.lang.String</code> | Filter to domain ACLs attached to this deployment. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsConfig.property.direction">direction</a></code> | <code>java.lang.String</code> | Sort direction (default: asc) Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsConfig.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsConfig.property.name">name</a></code> | <code>java.lang.String</code> | Filter by domain ACL name (case-insensitive substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsConfig.property.order">order</a></code> | <code>java.lang.String</code> | Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_domain_acls#account_id DataCloudflareZeroTrustCwsDomainAcls#account_id}

---

##### `deploymentId`<sup>Optional</sup> <a name="deploymentId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsConfig.property.deploymentId"></a>

```java
public java.lang.String getDeploymentId();
```

- *Type:* java.lang.String

Filter to domain ACLs attached to this deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_domain_acls#deployment_id DataCloudflareZeroTrustCwsDomainAcls#deployment_id}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsConfig.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

Sort direction (default: asc) Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_domain_acls#direction DataCloudflareZeroTrustCwsDomainAcls#direction}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsConfig.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_domain_acls#max_items DataCloudflareZeroTrustCwsDomainAcls#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Filter by domain ACL name (case-insensitive substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_domain_acls#name DataCloudflareZeroTrustCwsDomainAcls#name}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsConfig.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_domain_acls#order DataCloudflareZeroTrustCwsDomainAcls#order}

---

### DataCloudflareZeroTrustCwsDomainAclsResult <a name="DataCloudflareZeroTrustCwsDomainAclsResult" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResult.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_domain_acls.DataCloudflareZeroTrustCwsDomainAclsResult;

DataCloudflareZeroTrustCwsDomainAclsResult.builder()
    .build();
```


### DataCloudflareZeroTrustCwsDomainAclsResultEntries <a name="DataCloudflareZeroTrustCwsDomainAclsResultEntries" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntries.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_domain_acls.DataCloudflareZeroTrustCwsDomainAclsResultEntries;

DataCloudflareZeroTrustCwsDomainAclsResultEntries.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustCwsDomainAclsResultEntriesList <a name="DataCloudflareZeroTrustCwsDomainAclsResultEntriesList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_domain_acls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesList;

new DataCloudflareZeroTrustCwsDomainAclsResultEntriesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesList.get"></a>

```java
public DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference <a name="DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_domain_acls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference;

new DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntries">DataCloudflareZeroTrustCwsDomainAclsResultEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesOutputReference.property.internalValue"></a>

```java
public DataCloudflareZeroTrustCwsDomainAclsResultEntries getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntries">DataCloudflareZeroTrustCwsDomainAclsResultEntries</a>

---


### DataCloudflareZeroTrustCwsDomainAclsResultList <a name="DataCloudflareZeroTrustCwsDomainAclsResultList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_domain_acls.DataCloudflareZeroTrustCwsDomainAclsResultList;

new DataCloudflareZeroTrustCwsDomainAclsResultList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultList.get"></a>

```java
public DataCloudflareZeroTrustCwsDomainAclsResultOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareZeroTrustCwsDomainAclsResultOutputReference <a name="DataCloudflareZeroTrustCwsDomainAclsResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_domain_acls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference;

new DataCloudflareZeroTrustCwsDomainAclsResultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.property.defaultAction">defaultAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.property.entries">entries</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesList">DataCloudflareZeroTrustCwsDomainAclsResultEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResult">DataCloudflareZeroTrustCwsDomainAclsResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.property.defaultAction"></a>

```java
public java.lang.String getDefaultAction();
```

- *Type:* java.lang.String

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.property.entries"></a>

```java
public DataCloudflareZeroTrustCwsDomainAclsResultEntriesList getEntries();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultEntriesList">DataCloudflareZeroTrustCwsDomainAclsResultEntriesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResultOutputReference.property.internalValue"></a>

```java
public DataCloudflareZeroTrustCwsDomainAclsResult getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcls.DataCloudflareZeroTrustCwsDomainAclsResult">DataCloudflareZeroTrustCwsDomainAclsResult</a>

---



