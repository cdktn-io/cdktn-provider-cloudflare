# `dataCloudflareZeroTrustCwsDeployment` Submodule <a name="`dataCloudflareZeroTrustCwsDeployment` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustCwsDeployment <a name="DataCloudflareZeroTrustCwsDeployment" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_deployment cloudflare_zero_trust_cws_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_deployment.DataCloudflareZeroTrustCwsDeployment;

DataCloudflareZeroTrustCwsDeployment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .deploymentId(java.lang.String)
//  .filter(DataCloudflareZeroTrustCwsDeploymentFilter)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.Initializer.parameter.deploymentId">deploymentId</a></code> | <code>java.lang.String</code> | ID of the deployment to retrieve. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilter">DataCloudflareZeroTrustCwsDeploymentFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_deployment#filter DataCloudflareZeroTrustCwsDeployment#filter}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_deployment#account_id DataCloudflareZeroTrustCwsDeployment#account_id}

---

##### `deploymentId`<sup>Optional</sup> <a name="deploymentId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.Initializer.parameter.deploymentId"></a>

- *Type:* java.lang.String

ID of the deployment to retrieve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_deployment#deployment_id DataCloudflareZeroTrustCwsDeployment#deployment_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilter">DataCloudflareZeroTrustCwsDeploymentFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_deployment#filter DataCloudflareZeroTrustCwsDeployment#filter}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.resetDeploymentId">resetDeploymentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.resetFilter">resetFilter</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.putFilter"></a>

```java
public void putFilter(DataCloudflareZeroTrustCwsDeploymentFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilter">DataCloudflareZeroTrustCwsDeploymentFilter</a>

---

##### `resetDeploymentId` <a name="resetDeploymentId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.resetDeploymentId"></a>

```java
public void resetDeploymentId()
```

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.resetFilter"></a>

```java
public void resetFilter()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustCwsDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_deployment.DataCloudflareZeroTrustCwsDeployment;

DataCloudflareZeroTrustCwsDeployment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_deployment.DataCloudflareZeroTrustCwsDeployment;

DataCloudflareZeroTrustCwsDeployment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.isTerraformDataSource"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_deployment.DataCloudflareZeroTrustCwsDeployment;

DataCloudflareZeroTrustCwsDeployment.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_deployment.DataCloudflareZeroTrustCwsDeployment;

DataCloudflareZeroTrustCwsDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareZeroTrustCwsDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustCwsDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareZeroTrustCwsDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareZeroTrustCwsDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustCwsDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.basicAuthCredentialIds">basicAuthCredentialIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.defaultMode">defaultMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.domainAclId">domainAclId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference">DataCloudflareZeroTrustCwsDeploymentFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.onErrorAction">onErrorAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.policySetIds">policySetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.regoRaiseError">regoRaiseError</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.tags">tags</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.deploymentIdInput">deploymentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.filterInput">filterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilter">DataCloudflareZeroTrustCwsDeploymentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.deploymentId">deploymentId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `basicAuthCredentialIds`<sup>Required</sup> <a name="basicAuthCredentialIds" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.basicAuthCredentialIds"></a>

```java
public java.util.List<java.lang.String> getBasicAuthCredentialIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `defaultMode`<sup>Required</sup> <a name="defaultMode" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.defaultMode"></a>

```java
public java.lang.String getDefaultMode();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `domainAclId`<sup>Required</sup> <a name="domainAclId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.domainAclId"></a>

```java
public java.lang.String getDomainAclId();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.filter"></a>

```java
public DataCloudflareZeroTrustCwsDeploymentFilterOutputReference getFilter();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference">DataCloudflareZeroTrustCwsDeploymentFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `onErrorAction`<sup>Required</sup> <a name="onErrorAction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.onErrorAction"></a>

```java
public java.lang.String getOnErrorAction();
```

- *Type:* java.lang.String

---

##### `policySetIds`<sup>Required</sup> <a name="policySetIds" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.policySetIds"></a>

```java
public java.util.List<java.lang.String> getPolicySetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regoRaiseError`<sup>Required</sup> <a name="regoRaiseError" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.regoRaiseError"></a>

```java
public IResolvable getRegoRaiseError();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `deploymentIdInput`<sup>Optional</sup> <a name="deploymentIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.deploymentIdInput"></a>

```java
public java.lang.String getDeploymentIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.filterInput"></a>

```java
public IResolvable|DataCloudflareZeroTrustCwsDeploymentFilter getFilterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilter">DataCloudflareZeroTrustCwsDeploymentFilter</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.deploymentId"></a>

```java
public java.lang.String getDeploymentId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustCwsDeploymentConfig <a name="DataCloudflareZeroTrustCwsDeploymentConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_deployment.DataCloudflareZeroTrustCwsDeploymentConfig;

DataCloudflareZeroTrustCwsDeploymentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .deploymentId(java.lang.String)
//  .filter(DataCloudflareZeroTrustCwsDeploymentFilter)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentConfig.property.deploymentId">deploymentId</a></code> | <code>java.lang.String</code> | ID of the deployment to retrieve. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilter">DataCloudflareZeroTrustCwsDeploymentFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_deployment#filter DataCloudflareZeroTrustCwsDeployment#filter}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_deployment#account_id DataCloudflareZeroTrustCwsDeployment#account_id}

---

##### `deploymentId`<sup>Optional</sup> <a name="deploymentId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentConfig.property.deploymentId"></a>

```java
public java.lang.String getDeploymentId();
```

- *Type:* java.lang.String

ID of the deployment to retrieve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_deployment#deployment_id DataCloudflareZeroTrustCwsDeployment#deployment_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentConfig.property.filter"></a>

```java
public DataCloudflareZeroTrustCwsDeploymentFilter getFilter();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilter">DataCloudflareZeroTrustCwsDeploymentFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_deployment#filter DataCloudflareZeroTrustCwsDeployment#filter}.

---

### DataCloudflareZeroTrustCwsDeploymentFilter <a name="DataCloudflareZeroTrustCwsDeploymentFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilter.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_deployment.DataCloudflareZeroTrustCwsDeploymentFilter;

DataCloudflareZeroTrustCwsDeploymentFilter.builder()
//  .direction(java.lang.String)
//  .name(java.lang.String)
//  .order(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilter.property.direction">direction</a></code> | <code>java.lang.String</code> | Sort direction (default: asc) Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilter.property.name">name</a></code> | <code>java.lang.String</code> | Filter by deployment name (case-insensitive substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilter.property.order">order</a></code> | <code>java.lang.String</code> | Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at". |

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilter.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

Sort direction (default: asc) Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_deployment#direction DataCloudflareZeroTrustCwsDeployment#direction}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Filter by deployment name (case-insensitive substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_deployment#name DataCloudflareZeroTrustCwsDeployment#name}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilter.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_deployment#order DataCloudflareZeroTrustCwsDeployment#order}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustCwsDeploymentFilterOutputReference <a name="DataCloudflareZeroTrustCwsDeploymentFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_deployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference;

new DataCloudflareZeroTrustCwsDeploymentFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.resetOrder">resetOrder</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirection` <a name="resetDirection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.resetDirection"></a>

```java
public void resetDirection()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetOrder` <a name="resetOrder" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.resetOrder"></a>

```java
public void resetOrder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.property.orderInput">orderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.property.order">order</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilter">DataCloudflareZeroTrustCwsDeploymentFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.property.orderInput"></a>

```java
public java.lang.String getOrderInput();
```

- *Type:* java.lang.String

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|DataCloudflareZeroTrustCwsDeploymentFilter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilter">DataCloudflareZeroTrustCwsDeploymentFilter</a>

---



