# `dataCloudflareZeroTrustCwsWorkload` Submodule <a name="`dataCloudflareZeroTrustCwsWorkload` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustCwsWorkload <a name="DataCloudflareZeroTrustCwsWorkload" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_workload cloudflare_zero_trust_cws_workload}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_workload.DataCloudflareZeroTrustCwsWorkload;

DataCloudflareZeroTrustCwsWorkload.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .findOneBy(DataCloudflareZeroTrustCwsWorkloadFindOneBy)
//  .workloadId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.Initializer.parameter.findOneBy">findOneBy</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneBy">DataCloudflareZeroTrustCwsWorkloadFindOneBy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_workload#find_one_by DataCloudflareZeroTrustCwsWorkload#find_one_by}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.Initializer.parameter.workloadId">workloadId</a></code> | <code>java.lang.String</code> | ID of the workload to retrieve. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_workload#account_id DataCloudflareZeroTrustCwsWorkload#account_id}

---

##### `findOneBy`<sup>Optional</sup> <a name="findOneBy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.Initializer.parameter.findOneBy"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneBy">DataCloudflareZeroTrustCwsWorkloadFindOneBy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_workload#find_one_by DataCloudflareZeroTrustCwsWorkload#find_one_by}.

---

##### `workloadId`<sup>Optional</sup> <a name="workloadId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.Initializer.parameter.workloadId"></a>

- *Type:* java.lang.String

ID of the workload to retrieve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_workload#workload_id DataCloudflareZeroTrustCwsWorkload#workload_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.putFindOneBy">putFindOneBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.resetFindOneBy">resetFindOneBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.resetWorkloadId">resetWorkloadId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFindOneBy` <a name="putFindOneBy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.putFindOneBy"></a>

```java
public void putFindOneBy(DataCloudflareZeroTrustCwsWorkloadFindOneBy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.putFindOneBy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneBy">DataCloudflareZeroTrustCwsWorkloadFindOneBy</a>

---

##### `resetFindOneBy` <a name="resetFindOneBy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.resetFindOneBy"></a>

```java
public void resetFindOneBy()
```

##### `resetWorkloadId` <a name="resetWorkloadId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.resetWorkloadId"></a>

```java
public void resetWorkloadId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustCwsWorkload resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_workload.DataCloudflareZeroTrustCwsWorkload;

DataCloudflareZeroTrustCwsWorkload.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_workload.DataCloudflareZeroTrustCwsWorkload;

DataCloudflareZeroTrustCwsWorkload.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.isTerraformDataSource"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_workload.DataCloudflareZeroTrustCwsWorkload;

DataCloudflareZeroTrustCwsWorkload.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_workload.DataCloudflareZeroTrustCwsWorkload;

DataCloudflareZeroTrustCwsWorkload.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareZeroTrustCwsWorkload.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustCwsWorkload resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareZeroTrustCwsWorkload to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareZeroTrustCwsWorkload that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_workload#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustCwsWorkload to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.findOneBy">findOneBy</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference">DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.tags">tags</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.findOneByInput">findOneByInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneBy">DataCloudflareZeroTrustCwsWorkloadFindOneBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.workloadIdInput">workloadIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.workloadId">workloadId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `findOneBy`<sup>Required</sup> <a name="findOneBy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.findOneBy"></a>

```java
public DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference getFindOneBy();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference">DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `findOneByInput`<sup>Optional</sup> <a name="findOneByInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.findOneByInput"></a>

```java
public IResolvable|DataCloudflareZeroTrustCwsWorkloadFindOneBy getFindOneByInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneBy">DataCloudflareZeroTrustCwsWorkloadFindOneBy</a>

---

##### `workloadIdInput`<sup>Optional</sup> <a name="workloadIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.workloadIdInput"></a>

```java
public java.lang.String getWorkloadIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `workloadId`<sup>Required</sup> <a name="workloadId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.workloadId"></a>

```java
public java.lang.String getWorkloadId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustCwsWorkloadConfig <a name="DataCloudflareZeroTrustCwsWorkloadConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_workload.DataCloudflareZeroTrustCwsWorkloadConfig;

DataCloudflareZeroTrustCwsWorkloadConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .findOneBy(DataCloudflareZeroTrustCwsWorkloadFindOneBy)
//  .workloadId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadConfig.property.findOneBy">findOneBy</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneBy">DataCloudflareZeroTrustCwsWorkloadFindOneBy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_workload#find_one_by DataCloudflareZeroTrustCwsWorkload#find_one_by}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadConfig.property.workloadId">workloadId</a></code> | <code>java.lang.String</code> | ID of the workload to retrieve. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_workload#account_id DataCloudflareZeroTrustCwsWorkload#account_id}

---

##### `findOneBy`<sup>Optional</sup> <a name="findOneBy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadConfig.property.findOneBy"></a>

```java
public DataCloudflareZeroTrustCwsWorkloadFindOneBy getFindOneBy();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneBy">DataCloudflareZeroTrustCwsWorkloadFindOneBy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_workload#find_one_by DataCloudflareZeroTrustCwsWorkload#find_one_by}.

---

##### `workloadId`<sup>Optional</sup> <a name="workloadId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadConfig.property.workloadId"></a>

```java
public java.lang.String getWorkloadId();
```

- *Type:* java.lang.String

ID of the workload to retrieve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_workload#workload_id DataCloudflareZeroTrustCwsWorkload#workload_id}

---

### DataCloudflareZeroTrustCwsWorkloadFindOneBy <a name="DataCloudflareZeroTrustCwsWorkloadFindOneBy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneBy.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_workload.DataCloudflareZeroTrustCwsWorkloadFindOneBy;

DataCloudflareZeroTrustCwsWorkloadFindOneBy.builder()
//  .direction(java.lang.String)
//  .name(java.lang.String)
//  .order(java.lang.String)
//  .policySetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneBy.property.direction">direction</a></code> | <code>java.lang.String</code> | Sort direction (default: asc) Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneBy.property.name">name</a></code> | <code>java.lang.String</code> | Filter by workload name (case-insensitive substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneBy.property.order">order</a></code> | <code>java.lang.String</code> | Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneBy.property.policySetId">policySetId</a></code> | <code>java.lang.String</code> | Filter to workloads attached to this policy set. |

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneBy.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

Sort direction (default: asc) Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_workload#direction DataCloudflareZeroTrustCwsWorkload#direction}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneBy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Filter by workload name (case-insensitive substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_workload#name DataCloudflareZeroTrustCwsWorkload#name}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneBy.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_workload#order DataCloudflareZeroTrustCwsWorkload#order}

---

##### `policySetId`<sup>Optional</sup> <a name="policySetId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneBy.property.policySetId"></a>

```java
public java.lang.String getPolicySetId();
```

- *Type:* java.lang.String

Filter to workloads attached to this policy set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_workload#policy_set_id DataCloudflareZeroTrustCwsWorkload#policy_set_id}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference <a name="DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_workload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference;

new DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.resetPolicySetId">resetPolicySetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirection` <a name="resetDirection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.resetDirection"></a>

```java
public void resetDirection()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetOrder` <a name="resetOrder" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.resetOrder"></a>

```java
public void resetOrder()
```

##### `resetPolicySetId` <a name="resetPolicySetId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.resetPolicySetId"></a>

```java
public void resetPolicySetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.property.orderInput">orderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.property.policySetIdInput">policySetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.property.order">order</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.property.policySetId">policySetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneBy">DataCloudflareZeroTrustCwsWorkloadFindOneBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.property.orderInput"></a>

```java
public java.lang.String getOrderInput();
```

- *Type:* java.lang.String

---

##### `policySetIdInput`<sup>Optional</sup> <a name="policySetIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.property.policySetIdInput"></a>

```java
public java.lang.String getPolicySetIdInput();
```

- *Type:* java.lang.String

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

---

##### `policySetId`<sup>Required</sup> <a name="policySetId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.property.policySetId"></a>

```java
public java.lang.String getPolicySetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.property.internalValue"></a>

```java
public IResolvable|DataCloudflareZeroTrustCwsWorkloadFindOneBy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneBy">DataCloudflareZeroTrustCwsWorkloadFindOneBy</a>

---



