# `dataCloudflareZeroTrustOrganization` Submodule <a name="`dataCloudflareZeroTrustOrganization` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustOrganization <a name="DataCloudflareZeroTrustOrganization" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/zero_trust_organization cloudflare_zero_trust_organization}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_organization.DataCloudflareZeroTrustOrganization;

DataCloudflareZeroTrustOrganization.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .accountId(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/zero_trust_organization#account_id DataCloudflareZeroTrustOrganization#account_id}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/zero_trust_organization#zone_id DataCloudflareZeroTrustOrganization#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.resetZoneId"></a>

```java
public void resetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustOrganization resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_organization.DataCloudflareZeroTrustOrganization;

DataCloudflareZeroTrustOrganization.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_organization.DataCloudflareZeroTrustOrganization;

DataCloudflareZeroTrustOrganization.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.isTerraformDataSource"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_organization.DataCloudflareZeroTrustOrganization;

DataCloudflareZeroTrustOrganization.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_organization.DataCloudflareZeroTrustOrganization;

DataCloudflareZeroTrustOrganization.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareZeroTrustOrganization.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustOrganization resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareZeroTrustOrganization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareZeroTrustOrganization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/zero_trust_organization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustOrganization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.allowAuthenticateViaWarp">allowAuthenticateViaWarp</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.authDomain">authDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.autoRedirectToIdentity">autoRedirectToIdentity</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.customPages">customPages</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference">DataCloudflareZeroTrustOrganizationCustomPagesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.denyUnmatchedRequests">denyUnmatchedRequests</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.denyUnmatchedRequestsExemptedZoneNames">denyUnmatchedRequestsExemptedZoneNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.isUiReadOnly">isUiReadOnly</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.loginDesign">loginDesign</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference">DataCloudflareZeroTrustOrganizationLoginDesignOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.mfaConfig">mfaConfig</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference">DataCloudflareZeroTrustOrganizationMfaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.mfaRequiredForAllApps">mfaRequiredForAllApps</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.mfaSshPivKeyRequirements">mfaSshPivKeyRequirements</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference">DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.sessionDuration">sessionDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.uiReadOnlyToggleReason">uiReadOnlyToggleReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.userSeatExpirationInactiveTime">userSeatExpirationInactiveTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.warpAuthSessionDuration">warpAuthSessionDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `allowAuthenticateViaWarp`<sup>Required</sup> <a name="allowAuthenticateViaWarp" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.allowAuthenticateViaWarp"></a>

```java
public IResolvable getAllowAuthenticateViaWarp();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `authDomain`<sup>Required</sup> <a name="authDomain" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.authDomain"></a>

```java
public java.lang.String getAuthDomain();
```

- *Type:* java.lang.String

---

##### `autoRedirectToIdentity`<sup>Required</sup> <a name="autoRedirectToIdentity" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.autoRedirectToIdentity"></a>

```java
public IResolvable getAutoRedirectToIdentity();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `customPages`<sup>Required</sup> <a name="customPages" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.customPages"></a>

```java
public DataCloudflareZeroTrustOrganizationCustomPagesOutputReference getCustomPages();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference">DataCloudflareZeroTrustOrganizationCustomPagesOutputReference</a>

---

##### `denyUnmatchedRequests`<sup>Required</sup> <a name="denyUnmatchedRequests" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.denyUnmatchedRequests"></a>

```java
public IResolvable getDenyUnmatchedRequests();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `denyUnmatchedRequestsExemptedZoneNames`<sup>Required</sup> <a name="denyUnmatchedRequestsExemptedZoneNames" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.denyUnmatchedRequestsExemptedZoneNames"></a>

```java
public java.util.List<java.lang.String> getDenyUnmatchedRequestsExemptedZoneNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `isUiReadOnly`<sup>Required</sup> <a name="isUiReadOnly" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.isUiReadOnly"></a>

```java
public IResolvable getIsUiReadOnly();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `loginDesign`<sup>Required</sup> <a name="loginDesign" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.loginDesign"></a>

```java
public DataCloudflareZeroTrustOrganizationLoginDesignOutputReference getLoginDesign();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference">DataCloudflareZeroTrustOrganizationLoginDesignOutputReference</a>

---

##### `mfaConfig`<sup>Required</sup> <a name="mfaConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.mfaConfig"></a>

```java
public DataCloudflareZeroTrustOrganizationMfaConfigOutputReference getMfaConfig();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference">DataCloudflareZeroTrustOrganizationMfaConfigOutputReference</a>

---

##### `mfaRequiredForAllApps`<sup>Required</sup> <a name="mfaRequiredForAllApps" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.mfaRequiredForAllApps"></a>

```java
public IResolvable getMfaRequiredForAllApps();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `mfaSshPivKeyRequirements`<sup>Required</sup> <a name="mfaSshPivKeyRequirements" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.mfaSshPivKeyRequirements"></a>

```java
public DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference getMfaSshPivKeyRequirements();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference">DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sessionDuration`<sup>Required</sup> <a name="sessionDuration" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.sessionDuration"></a>

```java
public java.lang.String getSessionDuration();
```

- *Type:* java.lang.String

---

##### `uiReadOnlyToggleReason`<sup>Required</sup> <a name="uiReadOnlyToggleReason" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.uiReadOnlyToggleReason"></a>

```java
public java.lang.String getUiReadOnlyToggleReason();
```

- *Type:* java.lang.String

---

##### `userSeatExpirationInactiveTime`<sup>Required</sup> <a name="userSeatExpirationInactiveTime" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.userSeatExpirationInactiveTime"></a>

```java
public java.lang.String getUserSeatExpirationInactiveTime();
```

- *Type:* java.lang.String

---

##### `warpAuthSessionDuration`<sup>Required</sup> <a name="warpAuthSessionDuration" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.warpAuthSessionDuration"></a>

```java
public java.lang.String getWarpAuthSessionDuration();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustOrganizationConfig <a name="DataCloudflareZeroTrustOrganizationConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_organization.DataCloudflareZeroTrustOrganizationConfig;

DataCloudflareZeroTrustOrganizationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .accountId(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/zero_trust_organization#account_id DataCloudflareZeroTrustOrganization#account_id}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/zero_trust_organization#zone_id DataCloudflareZeroTrustOrganization#zone_id}

---

### DataCloudflareZeroTrustOrganizationCustomPages <a name="DataCloudflareZeroTrustOrganizationCustomPages" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPages.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_organization.DataCloudflareZeroTrustOrganizationCustomPages;

DataCloudflareZeroTrustOrganizationCustomPages.builder()
    .build();
```


### DataCloudflareZeroTrustOrganizationLoginDesign <a name="DataCloudflareZeroTrustOrganizationLoginDesign" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesign"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesign.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_organization.DataCloudflareZeroTrustOrganizationLoginDesign;

DataCloudflareZeroTrustOrganizationLoginDesign.builder()
    .build();
```


### DataCloudflareZeroTrustOrganizationMfaConfig <a name="DataCloudflareZeroTrustOrganizationMfaConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_organization.DataCloudflareZeroTrustOrganizationMfaConfig;

DataCloudflareZeroTrustOrganizationMfaConfig.builder()
    .build();
```


### DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirements <a name="DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirements" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirements.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_organization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirements;

DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirements.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustOrganizationCustomPagesOutputReference <a name="DataCloudflareZeroTrustOrganizationCustomPagesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_organization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference;

new DataCloudflareZeroTrustOrganizationCustomPagesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.property.forbidden">forbidden</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.property.identityDenied">identityDenied</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPages">DataCloudflareZeroTrustOrganizationCustomPages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `forbidden`<sup>Required</sup> <a name="forbidden" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.property.forbidden"></a>

```java
public java.lang.String getForbidden();
```

- *Type:* java.lang.String

---

##### `identityDenied`<sup>Required</sup> <a name="identityDenied" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.property.identityDenied"></a>

```java
public java.lang.String getIdentityDenied();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.property.internalValue"></a>

```java
public DataCloudflareZeroTrustOrganizationCustomPages getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPages">DataCloudflareZeroTrustOrganizationCustomPages</a>

---


### DataCloudflareZeroTrustOrganizationLoginDesignOutputReference <a name="DataCloudflareZeroTrustOrganizationLoginDesignOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_organization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference;

new DataCloudflareZeroTrustOrganizationLoginDesignOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.property.backgroundColor">backgroundColor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.property.footerText">footerText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.property.headerText">headerText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.property.logoPath">logoPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.property.textColor">textColor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesign">DataCloudflareZeroTrustOrganizationLoginDesign</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backgroundColor`<sup>Required</sup> <a name="backgroundColor" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.property.backgroundColor"></a>

```java
public java.lang.String getBackgroundColor();
```

- *Type:* java.lang.String

---

##### `footerText`<sup>Required</sup> <a name="footerText" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.property.footerText"></a>

```java
public java.lang.String getFooterText();
```

- *Type:* java.lang.String

---

##### `headerText`<sup>Required</sup> <a name="headerText" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.property.headerText"></a>

```java
public java.lang.String getHeaderText();
```

- *Type:* java.lang.String

---

##### `logoPath`<sup>Required</sup> <a name="logoPath" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.property.logoPath"></a>

```java
public java.lang.String getLogoPath();
```

- *Type:* java.lang.String

---

##### `textColor`<sup>Required</sup> <a name="textColor" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.property.textColor"></a>

```java
public java.lang.String getTextColor();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.property.internalValue"></a>

```java
public DataCloudflareZeroTrustOrganizationLoginDesign getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesign">DataCloudflareZeroTrustOrganizationLoginDesign</a>

---


### DataCloudflareZeroTrustOrganizationMfaConfigOutputReference <a name="DataCloudflareZeroTrustOrganizationMfaConfigOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_organization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference;

new DataCloudflareZeroTrustOrganizationMfaConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.property.allowedAuthenticators">allowedAuthenticators</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.property.amrMatchingSessionDuration">amrMatchingSessionDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.property.requiredAaguids">requiredAaguids</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.property.sessionDuration">sessionDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfig">DataCloudflareZeroTrustOrganizationMfaConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedAuthenticators`<sup>Required</sup> <a name="allowedAuthenticators" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.property.allowedAuthenticators"></a>

```java
public java.util.List<java.lang.String> getAllowedAuthenticators();
```

- *Type:* java.util.List<java.lang.String>

---

##### `amrMatchingSessionDuration`<sup>Required</sup> <a name="amrMatchingSessionDuration" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.property.amrMatchingSessionDuration"></a>

```java
public java.lang.String getAmrMatchingSessionDuration();
```

- *Type:* java.lang.String

---

##### `requiredAaguids`<sup>Required</sup> <a name="requiredAaguids" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.property.requiredAaguids"></a>

```java
public java.lang.String getRequiredAaguids();
```

- *Type:* java.lang.String

---

##### `sessionDuration`<sup>Required</sup> <a name="sessionDuration" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.property.sessionDuration"></a>

```java
public java.lang.String getSessionDuration();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.property.internalValue"></a>

```java
public DataCloudflareZeroTrustOrganizationMfaConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfig">DataCloudflareZeroTrustOrganizationMfaConfig</a>

---


### DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference <a name="DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_organization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference;

new DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.pinPolicy">pinPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.requireFipsDevice">requireFipsDevice</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.sshKeySize">sshKeySize</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.sshKeyType">sshKeyType</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.touchPolicy">touchPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirements">DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pinPolicy`<sup>Required</sup> <a name="pinPolicy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.pinPolicy"></a>

```java
public java.lang.String getPinPolicy();
```

- *Type:* java.lang.String

---

##### `requireFipsDevice`<sup>Required</sup> <a name="requireFipsDevice" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.requireFipsDevice"></a>

```java
public IResolvable getRequireFipsDevice();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `sshKeySize`<sup>Required</sup> <a name="sshKeySize" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.sshKeySize"></a>

```java
public java.util.List<java.lang.Number> getSshKeySize();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `sshKeyType`<sup>Required</sup> <a name="sshKeyType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.sshKeyType"></a>

```java
public java.util.List<java.lang.String> getSshKeyType();
```

- *Type:* java.util.List<java.lang.String>

---

##### `touchPolicy`<sup>Required</sup> <a name="touchPolicy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.touchPolicy"></a>

```java
public java.lang.String getTouchPolicy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.internalValue"></a>

```java
public DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirements getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirements">DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirements</a>

---



