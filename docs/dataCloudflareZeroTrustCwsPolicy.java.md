# `dataCloudflareZeroTrustCwsPolicy` Submodule <a name="`dataCloudflareZeroTrustCwsPolicy` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustCwsPolicy <a name="DataCloudflareZeroTrustCwsPolicy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy cloudflare_zero_trust_cws_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_policy.DataCloudflareZeroTrustCwsPolicy;

DataCloudflareZeroTrustCwsPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .findOneBy(DataCloudflareZeroTrustCwsPolicyFindOneBy)
//  .policyId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.findOneBy">findOneBy</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneBy">DataCloudflareZeroTrustCwsPolicyFindOneBy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy#find_one_by DataCloudflareZeroTrustCwsPolicy#find_one_by}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.policyId">policyId</a></code> | <code>java.lang.String</code> | ID of the policy to retrieve. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy#account_id DataCloudflareZeroTrustCwsPolicy#account_id}

---

##### `findOneBy`<sup>Optional</sup> <a name="findOneBy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.findOneBy"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneBy">DataCloudflareZeroTrustCwsPolicyFindOneBy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy#find_one_by DataCloudflareZeroTrustCwsPolicy#find_one_by}.

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.policyId"></a>

- *Type:* java.lang.String

ID of the policy to retrieve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy#policy_id DataCloudflareZeroTrustCwsPolicy#policy_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.putFindOneBy">putFindOneBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.resetFindOneBy">resetFindOneBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.resetPolicyId">resetPolicyId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFindOneBy` <a name="putFindOneBy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.putFindOneBy"></a>

```java
public void putFindOneBy(DataCloudflareZeroTrustCwsPolicyFindOneBy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.putFindOneBy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneBy">DataCloudflareZeroTrustCwsPolicyFindOneBy</a>

---

##### `resetFindOneBy` <a name="resetFindOneBy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.resetFindOneBy"></a>

```java
public void resetFindOneBy()
```

##### `resetPolicyId` <a name="resetPolicyId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.resetPolicyId"></a>

```java
public void resetPolicyId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustCwsPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_policy.DataCloudflareZeroTrustCwsPolicy;

DataCloudflareZeroTrustCwsPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_policy.DataCloudflareZeroTrustCwsPolicy;

DataCloudflareZeroTrustCwsPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.isTerraformDataSource"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_policy.DataCloudflareZeroTrustCwsPolicy;

DataCloudflareZeroTrustCwsPolicy.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_policy.DataCloudflareZeroTrustCwsPolicy;

DataCloudflareZeroTrustCwsPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareZeroTrustCwsPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustCwsPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareZeroTrustCwsPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareZeroTrustCwsPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustCwsPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.entrypoint">entrypoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.findOneBy">findOneBy</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference">DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.packagePath">packagePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.regoSource">regoSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.tags">tags</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.findOneByInput">findOneByInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneBy">DataCloudflareZeroTrustCwsPolicyFindOneBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.policyIdInput">policyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.policyId">policyId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.entrypoint"></a>

```java
public java.lang.String getEntrypoint();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `findOneBy`<sup>Required</sup> <a name="findOneBy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.findOneBy"></a>

```java
public DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference getFindOneBy();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference">DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `packagePath`<sup>Required</sup> <a name="packagePath" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.packagePath"></a>

```java
public java.lang.String getPackagePath();
```

- *Type:* java.lang.String

---

##### `regoSource`<sup>Required</sup> <a name="regoSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.regoSource"></a>

```java
public java.lang.String getRegoSource();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `findOneByInput`<sup>Optional</sup> <a name="findOneByInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.findOneByInput"></a>

```java
public IResolvable|DataCloudflareZeroTrustCwsPolicyFindOneBy getFindOneByInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneBy">DataCloudflareZeroTrustCwsPolicyFindOneBy</a>

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.policyIdInput"></a>

```java
public java.lang.String getPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustCwsPolicyConfig <a name="DataCloudflareZeroTrustCwsPolicyConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_policy.DataCloudflareZeroTrustCwsPolicyConfig;

DataCloudflareZeroTrustCwsPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .findOneBy(DataCloudflareZeroTrustCwsPolicyFindOneBy)
//  .policyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyConfig.property.findOneBy">findOneBy</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneBy">DataCloudflareZeroTrustCwsPolicyFindOneBy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy#find_one_by DataCloudflareZeroTrustCwsPolicy#find_one_by}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyConfig.property.policyId">policyId</a></code> | <code>java.lang.String</code> | ID of the policy to retrieve. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy#account_id DataCloudflareZeroTrustCwsPolicy#account_id}

---

##### `findOneBy`<sup>Optional</sup> <a name="findOneBy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyConfig.property.findOneBy"></a>

```java
public DataCloudflareZeroTrustCwsPolicyFindOneBy getFindOneBy();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneBy">DataCloudflareZeroTrustCwsPolicyFindOneBy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy#find_one_by DataCloudflareZeroTrustCwsPolicy#find_one_by}.

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyConfig.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

ID of the policy to retrieve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy#policy_id DataCloudflareZeroTrustCwsPolicy#policy_id}

---

### DataCloudflareZeroTrustCwsPolicyFindOneBy <a name="DataCloudflareZeroTrustCwsPolicyFindOneBy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneBy.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_policy.DataCloudflareZeroTrustCwsPolicyFindOneBy;

DataCloudflareZeroTrustCwsPolicyFindOneBy.builder()
//  .direction(java.lang.String)
//  .name(java.lang.String)
//  .order(java.lang.String)
//  .packagePath(java.lang.String)
//  .policySetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneBy.property.direction">direction</a></code> | <code>java.lang.String</code> | Sort direction (default: asc) Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneBy.property.name">name</a></code> | <code>java.lang.String</code> | Filter by policy name (case-insensitive substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneBy.property.order">order</a></code> | <code>java.lang.String</code> | Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneBy.property.packagePath">packagePath</a></code> | <code>java.lang.String</code> | Filter by package path (case-sensitive literal substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneBy.property.policySetId">policySetId</a></code> | <code>java.lang.String</code> | Filter to policies attached to (members of) this policy set. |

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneBy.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

Sort direction (default: asc) Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy#direction DataCloudflareZeroTrustCwsPolicy#direction}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneBy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Filter by policy name (case-insensitive substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy#name DataCloudflareZeroTrustCwsPolicy#name}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneBy.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy#order DataCloudflareZeroTrustCwsPolicy#order}

---

##### `packagePath`<sup>Optional</sup> <a name="packagePath" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneBy.property.packagePath"></a>

```java
public java.lang.String getPackagePath();
```

- *Type:* java.lang.String

Filter by package path (case-sensitive literal substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy#package_path DataCloudflareZeroTrustCwsPolicy#package_path}

---

##### `policySetId`<sup>Optional</sup> <a name="policySetId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneBy.property.policySetId"></a>

```java
public java.lang.String getPolicySetId();
```

- *Type:* java.lang.String

Filter to policies attached to (members of) this policy set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy#policy_set_id DataCloudflareZeroTrustCwsPolicy#policy_set_id}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference <a name="DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_policy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference;

new DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.resetPackagePath">resetPackagePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.resetPolicySetId">resetPolicySetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirection` <a name="resetDirection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.resetDirection"></a>

```java
public void resetDirection()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetOrder` <a name="resetOrder" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.resetOrder"></a>

```java
public void resetOrder()
```

##### `resetPackagePath` <a name="resetPackagePath" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.resetPackagePath"></a>

```java
public void resetPackagePath()
```

##### `resetPolicySetId` <a name="resetPolicySetId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.resetPolicySetId"></a>

```java
public void resetPolicySetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.orderInput">orderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.packagePathInput">packagePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.policySetIdInput">policySetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.order">order</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.packagePath">packagePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.policySetId">policySetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneBy">DataCloudflareZeroTrustCwsPolicyFindOneBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.orderInput"></a>

```java
public java.lang.String getOrderInput();
```

- *Type:* java.lang.String

---

##### `packagePathInput`<sup>Optional</sup> <a name="packagePathInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.packagePathInput"></a>

```java
public java.lang.String getPackagePathInput();
```

- *Type:* java.lang.String

---

##### `policySetIdInput`<sup>Optional</sup> <a name="policySetIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.policySetIdInput"></a>

```java
public java.lang.String getPolicySetIdInput();
```

- *Type:* java.lang.String

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

---

##### `packagePath`<sup>Required</sup> <a name="packagePath" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.packagePath"></a>

```java
public java.lang.String getPackagePath();
```

- *Type:* java.lang.String

---

##### `policySetId`<sup>Required</sup> <a name="policySetId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.policySetId"></a>

```java
public java.lang.String getPolicySetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.internalValue"></a>

```java
public IResolvable|DataCloudflareZeroTrustCwsPolicyFindOneBy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneBy">DataCloudflareZeroTrustCwsPolicyFindOneBy</a>

---



