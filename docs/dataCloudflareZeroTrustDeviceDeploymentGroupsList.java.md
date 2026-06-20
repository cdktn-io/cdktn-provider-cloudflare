# `dataCloudflareZeroTrustDeviceDeploymentGroupsList` Submodule <a name="`dataCloudflareZeroTrustDeviceDeploymentGroupsList` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustDeviceDeploymentGroupsList <a name="DataCloudflareZeroTrustDeviceDeploymentGroupsList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_device_deployment_groups_list cloudflare_zero_trust_device_deployment_groups_list}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_device_deployment_groups_list.DataCloudflareZeroTrustDeviceDeploymentGroupsList;

DataCloudflareZeroTrustDeviceDeploymentGroupsList.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .maxItems(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_device_deployment_groups_list#account_id DataCloudflareZeroTrustDeviceDeploymentGroupsList#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.Initializer.parameter.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_device_deployment_groups_list#account_id DataCloudflareZeroTrustDeviceDeploymentGroupsList#account_id}.

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.Initializer.parameter.maxItems"></a>

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_device_deployment_groups_list#max_items DataCloudflareZeroTrustDeviceDeploymentGroupsList#max_items}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.resetMaxItems">resetMaxItems</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.resetMaxItems"></a>

```java
public void resetMaxItems()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustDeviceDeploymentGroupsList resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_device_deployment_groups_list.DataCloudflareZeroTrustDeviceDeploymentGroupsList;

DataCloudflareZeroTrustDeviceDeploymentGroupsList.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_device_deployment_groups_list.DataCloudflareZeroTrustDeviceDeploymentGroupsList;

DataCloudflareZeroTrustDeviceDeploymentGroupsList.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.isTerraformDataSource"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_device_deployment_groups_list.DataCloudflareZeroTrustDeviceDeploymentGroupsList;

DataCloudflareZeroTrustDeviceDeploymentGroupsList.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_device_deployment_groups_list.DataCloudflareZeroTrustDeviceDeploymentGroupsList;

DataCloudflareZeroTrustDeviceDeploymentGroupsList.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareZeroTrustDeviceDeploymentGroupsList.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustDeviceDeploymentGroupsList resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareZeroTrustDeviceDeploymentGroupsList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareZeroTrustDeviceDeploymentGroupsList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_device_deployment_groups_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustDeviceDeploymentGroupsList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList">DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.maxItemsInput">maxItemsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.result"></a>

```java
public DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList getResult();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList">DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.maxItemsInput"></a>

```java
public java.lang.Number getMaxItemsInput();
```

- *Type:* java.lang.Number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig <a name="DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_device_deployment_groups_list.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig;

DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .maxItems(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_device_deployment_groups_list#account_id DataCloudflareZeroTrustDeviceDeploymentGroupsList#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_device_deployment_groups_list#account_id DataCloudflareZeroTrustDeviceDeploymentGroupsList#account_id}.

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_device_deployment_groups_list#max_items DataCloudflareZeroTrustDeviceDeploymentGroupsList#max_items}

---

### DataCloudflareZeroTrustDeviceDeploymentGroupsListResult <a name="DataCloudflareZeroTrustDeviceDeploymentGroupsListResult" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResult.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_device_deployment_groups_list.DataCloudflareZeroTrustDeviceDeploymentGroupsListResult;

DataCloudflareZeroTrustDeviceDeploymentGroupsListResult.builder()
    .build();
```


### DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfig <a name="DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_device_deployment_groups_list.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfig;

DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfig.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList <a name="DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_device_deployment_groups_list.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList;

new DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.get"></a>

```java
public DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference <a name="DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_device_deployment_groups_list.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference;

new DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.policyIds">policyIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.versionConfig">versionConfig</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList">DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResult">DataCloudflareZeroTrustDeviceDeploymentGroupsListResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `policyIds`<sup>Required</sup> <a name="policyIds" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.policyIds"></a>

```java
public java.util.List<java.lang.String> getPolicyIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `versionConfig`<sup>Required</sup> <a name="versionConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.versionConfig"></a>

```java
public DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList getVersionConfig();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList">DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.internalValue"></a>

```java
public DataCloudflareZeroTrustDeviceDeploymentGroupsListResult getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResult">DataCloudflareZeroTrustDeviceDeploymentGroupsListResult</a>

---


### DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList <a name="DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_device_deployment_groups_list.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList;

new DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.get"></a>

```java
public DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference <a name="DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_device_deployment_groups_list.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference;

new DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.property.targetEnvironment">targetEnvironment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfig">DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targetEnvironment`<sup>Required</sup> <a name="targetEnvironment" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.property.targetEnvironment"></a>

```java
public java.lang.String getTargetEnvironment();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.property.internalValue"></a>

```java
public DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfig">DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfig</a>

---



