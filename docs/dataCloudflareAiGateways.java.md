# `dataCloudflareAiGateways` Submodule <a name="`dataCloudflareAiGateways` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareAiGateways <a name="DataCloudflareAiGateways" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/ai_gateways cloudflare_ai_gateways}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_ai_gateways.DataCloudflareAiGateways;

DataCloudflareAiGateways.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .accountId(java.lang.String)
//  .maxItems(java.lang.Number)
//  .search(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/ai_gateways#account_id DataCloudflareAiGateways#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.search">search</a></code> | <code>java.lang.String</code> | Search by id. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/ai_gateways#account_id DataCloudflareAiGateways#account_id}.

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.maxItems"></a>

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/ai_gateways#max_items DataCloudflareAiGateways#max_items}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.search"></a>

- *Type:* java.lang.String

Search by id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/ai_gateways#search DataCloudflareAiGateways#search}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.resetSearch">resetSearch</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.resetMaxItems"></a>

```java
public void resetMaxItems()
```

##### `resetSearch` <a name="resetSearch" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.resetSearch"></a>

```java
public void resetSearch()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareAiGateways resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_ai_gateways.DataCloudflareAiGateways;

DataCloudflareAiGateways.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_ai_gateways.DataCloudflareAiGateways;

DataCloudflareAiGateways.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.isTerraformDataSource"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_ai_gateways.DataCloudflareAiGateways;

DataCloudflareAiGateways.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_ai_gateways.DataCloudflareAiGateways;

DataCloudflareAiGateways.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareAiGateways.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataCloudflareAiGateways resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareAiGateways to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareAiGateways that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/ai_gateways#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareAiGateways to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList">DataCloudflareAiGatewaysResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.maxItemsInput">maxItemsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.searchInput">searchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.search">search</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.result"></a>

```java
public DataCloudflareAiGatewaysResultList getResult();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList">DataCloudflareAiGatewaysResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.maxItemsInput"></a>

```java
public java.lang.Number getMaxItemsInput();
```

- *Type:* java.lang.Number

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.searchInput"></a>

```java
public java.lang.String getSearchInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.search"></a>

```java
public java.lang.String getSearch();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareAiGatewaysConfig <a name="DataCloudflareAiGatewaysConfig" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_ai_gateways.DataCloudflareAiGatewaysConfig;

DataCloudflareAiGatewaysConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .accountId(java.lang.String)
//  .maxItems(java.lang.Number)
//  .search(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/ai_gateways#account_id DataCloudflareAiGateways#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysConfig.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysConfig.property.search">search</a></code> | <code>java.lang.String</code> | Search by id. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/ai_gateways#account_id DataCloudflareAiGateways#account_id}.

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysConfig.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/ai_gateways#max_items DataCloudflareAiGateways#max_items}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysConfig.property.search"></a>

```java
public java.lang.String getSearch();
```

- *Type:* java.lang.String

Search by id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/ai_gateways#search DataCloudflareAiGateways#search}

---

### DataCloudflareAiGatewaysResult <a name="DataCloudflareAiGatewaysResult" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResult.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_ai_gateways.DataCloudflareAiGatewaysResult;

DataCloudflareAiGatewaysResult.builder()
    .build();
```


### DataCloudflareAiGatewaysResultDlp <a name="DataCloudflareAiGatewaysResultDlp" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlp.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_ai_gateways.DataCloudflareAiGatewaysResultDlp;

DataCloudflareAiGatewaysResultDlp.builder()
    .build();
```


### DataCloudflareAiGatewaysResultDlpPolicies <a name="DataCloudflareAiGatewaysResultDlpPolicies" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPolicies.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_ai_gateways.DataCloudflareAiGatewaysResultDlpPolicies;

DataCloudflareAiGatewaysResultDlpPolicies.builder()
    .build();
```


### DataCloudflareAiGatewaysResultGuardrails <a name="DataCloudflareAiGatewaysResultGuardrails" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrails.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_ai_gateways.DataCloudflareAiGatewaysResultGuardrails;

DataCloudflareAiGatewaysResultGuardrails.builder()
    .build();
```


### DataCloudflareAiGatewaysResultGuardrailsPrompt <a name="DataCloudflareAiGatewaysResultGuardrailsPrompt" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPrompt.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_ai_gateways.DataCloudflareAiGatewaysResultGuardrailsPrompt;

DataCloudflareAiGatewaysResultGuardrailsPrompt.builder()
    .build();
```


### DataCloudflareAiGatewaysResultGuardrailsResponse <a name="DataCloudflareAiGatewaysResultGuardrailsResponse" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponse.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_ai_gateways.DataCloudflareAiGatewaysResultGuardrailsResponse;

DataCloudflareAiGatewaysResultGuardrailsResponse.builder()
    .build();
```


### DataCloudflareAiGatewaysResultOtel <a name="DataCloudflareAiGatewaysResultOtel" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtel.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_ai_gateways.DataCloudflareAiGatewaysResultOtel;

DataCloudflareAiGatewaysResultOtel.builder()
    .build();
```


### DataCloudflareAiGatewaysResultSpendLimits <a name="DataCloudflareAiGatewaysResultSpendLimits" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimits.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_ai_gateways.DataCloudflareAiGatewaysResultSpendLimits;

DataCloudflareAiGatewaysResultSpendLimits.builder()
    .build();
```


### DataCloudflareAiGatewaysResultSpendLimitsRules <a name="DataCloudflareAiGatewaysResultSpendLimitsRules" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRules.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_ai_gateways.DataCloudflareAiGatewaysResultSpendLimitsRules;

DataCloudflareAiGatewaysResultSpendLimitsRules.builder()
    .build();
```


### DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProvider <a name="DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProvider" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProvider.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_ai_gateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProvider;

DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProvider.builder()
    .build();
```


### DataCloudflareAiGatewaysResultSpendLimitsRulesMetadata <a name="DataCloudflareAiGatewaysResultSpendLimitsRulesMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadata.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_ai_gateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadata;

DataCloudflareAiGatewaysResultSpendLimitsRulesMetadata.builder()
    .build();
```


### DataCloudflareAiGatewaysResultSpendLimitsRulesModel <a name="DataCloudflareAiGatewaysResultSpendLimitsRulesModel" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModel.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_ai_gateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModel;

DataCloudflareAiGatewaysResultSpendLimitsRulesModel.builder()
    .build();
```


### DataCloudflareAiGatewaysResultStripe <a name="DataCloudflareAiGatewaysResultStripe" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripe.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_ai_gateways.DataCloudflareAiGatewaysResultStripe;

DataCloudflareAiGatewaysResultStripe.builder()
    .build();
```


### DataCloudflareAiGatewaysResultStripeUsageEvents <a name="DataCloudflareAiGatewaysResultStripeUsageEvents" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEvents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEvents.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_ai_gateways.DataCloudflareAiGatewaysResultStripeUsageEvents;

DataCloudflareAiGatewaysResultStripeUsageEvents.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareAiGatewaysResultDlpOutputReference <a name="DataCloudflareAiGatewaysResultDlpOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_ai_gateways.DataCloudflareAiGatewaysResultDlpOutputReference;

new DataCloudflareAiGatewaysResultDlpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.property.policies">policies</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList">DataCloudflareAiGatewaysResultDlpPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.property.profiles">profiles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlp">DataCloudflareAiGatewaysResultDlp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.property.policies"></a>

```java
public DataCloudflareAiGatewaysResultDlpPoliciesList getPolicies();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList">DataCloudflareAiGatewaysResultDlpPoliciesList</a>

---

##### `profiles`<sup>Required</sup> <a name="profiles" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.property.profiles"></a>

```java
public java.util.List<java.lang.String> getProfiles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.property.internalValue"></a>

```java
public DataCloudflareAiGatewaysResultDlp getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlp">DataCloudflareAiGatewaysResultDlp</a>

---


### DataCloudflareAiGatewaysResultDlpPoliciesList <a name="DataCloudflareAiGatewaysResultDlpPoliciesList" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_ai_gateways.DataCloudflareAiGatewaysResultDlpPoliciesList;

new DataCloudflareAiGatewaysResultDlpPoliciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.get"></a>

```java
public DataCloudflareAiGatewaysResultDlpPoliciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareAiGatewaysResultDlpPoliciesOutputReference <a name="DataCloudflareAiGatewaysResultDlpPoliciesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_ai_gateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference;

new DataCloudflareAiGatewaysResultDlpPoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.property.check">check</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.property.profiles">profiles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPolicies">DataCloudflareAiGatewaysResultDlpPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `check`<sup>Required</sup> <a name="check" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.property.check"></a>

```java
public java.util.List<java.lang.String> getCheck();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `profiles`<sup>Required</sup> <a name="profiles" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.property.profiles"></a>

```java
public java.util.List<java.lang.String> getProfiles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.property.internalValue"></a>

```java
public DataCloudflareAiGatewaysResultDlpPolicies getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPolicies">DataCloudflareAiGatewaysResultDlpPolicies</a>

---


### DataCloudflareAiGatewaysResultGuardrailsOutputReference <a name="DataCloudflareAiGatewaysResultGuardrailsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_ai_gateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference;

new DataCloudflareAiGatewaysResultGuardrailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.property.prompt">prompt</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference">DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.property.response">response</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference">DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrails">DataCloudflareAiGatewaysResultGuardrails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.property.prompt"></a>

```java
public DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference getPrompt();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference">DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference</a>

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.property.response"></a>

```java
public DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference getResponse();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference">DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.property.internalValue"></a>

```java
public DataCloudflareAiGatewaysResultGuardrails getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrails">DataCloudflareAiGatewaysResultGuardrails</a>

---


### DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference <a name="DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_ai_gateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference;

new DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.p1">p1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s1">s1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s10">s10</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s11">s11</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s12">s12</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s13">s13</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s2">s2</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s3">s3</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s4">s4</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s5">s5</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s6">s6</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s7">s7</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s8">s8</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s9">s9</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPrompt">DataCloudflareAiGatewaysResultGuardrailsPrompt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `p1`<sup>Required</sup> <a name="p1" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.p1"></a>

```java
public java.lang.String getP1();
```

- *Type:* java.lang.String

---

##### `s1`<sup>Required</sup> <a name="s1" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s1"></a>

```java
public java.lang.String getS1();
```

- *Type:* java.lang.String

---

##### `s10`<sup>Required</sup> <a name="s10" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s10"></a>

```java
public java.lang.String getS10();
```

- *Type:* java.lang.String

---

##### `s11`<sup>Required</sup> <a name="s11" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s11"></a>

```java
public java.lang.String getS11();
```

- *Type:* java.lang.String

---

##### `s12`<sup>Required</sup> <a name="s12" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s12"></a>

```java
public java.lang.String getS12();
```

- *Type:* java.lang.String

---

##### `s13`<sup>Required</sup> <a name="s13" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s13"></a>

```java
public java.lang.String getS13();
```

- *Type:* java.lang.String

---

##### `s2`<sup>Required</sup> <a name="s2" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s2"></a>

```java
public java.lang.String getS2();
```

- *Type:* java.lang.String

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s3"></a>

```java
public java.lang.String getS3();
```

- *Type:* java.lang.String

---

##### `s4`<sup>Required</sup> <a name="s4" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s4"></a>

```java
public java.lang.String getS4();
```

- *Type:* java.lang.String

---

##### `s5`<sup>Required</sup> <a name="s5" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s5"></a>

```java
public java.lang.String getS5();
```

- *Type:* java.lang.String

---

##### `s6`<sup>Required</sup> <a name="s6" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s6"></a>

```java
public java.lang.String getS6();
```

- *Type:* java.lang.String

---

##### `s7`<sup>Required</sup> <a name="s7" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s7"></a>

```java
public java.lang.String getS7();
```

- *Type:* java.lang.String

---

##### `s8`<sup>Required</sup> <a name="s8" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s8"></a>

```java
public java.lang.String getS8();
```

- *Type:* java.lang.String

---

##### `s9`<sup>Required</sup> <a name="s9" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s9"></a>

```java
public java.lang.String getS9();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.internalValue"></a>

```java
public DataCloudflareAiGatewaysResultGuardrailsPrompt getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPrompt">DataCloudflareAiGatewaysResultGuardrailsPrompt</a>

---


### DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference <a name="DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_ai_gateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference;

new DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.p1">p1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s1">s1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s10">s10</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s11">s11</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s12">s12</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s13">s13</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s2">s2</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s3">s3</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s4">s4</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s5">s5</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s6">s6</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s7">s7</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s8">s8</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s9">s9</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponse">DataCloudflareAiGatewaysResultGuardrailsResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `p1`<sup>Required</sup> <a name="p1" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.p1"></a>

```java
public java.lang.String getP1();
```

- *Type:* java.lang.String

---

##### `s1`<sup>Required</sup> <a name="s1" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s1"></a>

```java
public java.lang.String getS1();
```

- *Type:* java.lang.String

---

##### `s10`<sup>Required</sup> <a name="s10" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s10"></a>

```java
public java.lang.String getS10();
```

- *Type:* java.lang.String

---

##### `s11`<sup>Required</sup> <a name="s11" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s11"></a>

```java
public java.lang.String getS11();
```

- *Type:* java.lang.String

---

##### `s12`<sup>Required</sup> <a name="s12" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s12"></a>

```java
public java.lang.String getS12();
```

- *Type:* java.lang.String

---

##### `s13`<sup>Required</sup> <a name="s13" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s13"></a>

```java
public java.lang.String getS13();
```

- *Type:* java.lang.String

---

##### `s2`<sup>Required</sup> <a name="s2" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s2"></a>

```java
public java.lang.String getS2();
```

- *Type:* java.lang.String

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s3"></a>

```java
public java.lang.String getS3();
```

- *Type:* java.lang.String

---

##### `s4`<sup>Required</sup> <a name="s4" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s4"></a>

```java
public java.lang.String getS4();
```

- *Type:* java.lang.String

---

##### `s5`<sup>Required</sup> <a name="s5" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s5"></a>

```java
public java.lang.String getS5();
```

- *Type:* java.lang.String

---

##### `s6`<sup>Required</sup> <a name="s6" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s6"></a>

```java
public java.lang.String getS6();
```

- *Type:* java.lang.String

---

##### `s7`<sup>Required</sup> <a name="s7" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s7"></a>

```java
public java.lang.String getS7();
```

- *Type:* java.lang.String

---

##### `s8`<sup>Required</sup> <a name="s8" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s8"></a>

```java
public java.lang.String getS8();
```

- *Type:* java.lang.String

---

##### `s9`<sup>Required</sup> <a name="s9" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s9"></a>

```java
public java.lang.String getS9();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.internalValue"></a>

```java
public DataCloudflareAiGatewaysResultGuardrailsResponse getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponse">DataCloudflareAiGatewaysResultGuardrailsResponse</a>

---


### DataCloudflareAiGatewaysResultList <a name="DataCloudflareAiGatewaysResultList" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_ai_gateways.DataCloudflareAiGatewaysResultList;

new DataCloudflareAiGatewaysResultList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.get"></a>

```java
public DataCloudflareAiGatewaysResultOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareAiGatewaysResultOtelList <a name="DataCloudflareAiGatewaysResultOtelList" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_ai_gateways.DataCloudflareAiGatewaysResultOtelList;

new DataCloudflareAiGatewaysResultOtelList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.get"></a>

```java
public DataCloudflareAiGatewaysResultOtelOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareAiGatewaysResultOtelOutputReference <a name="DataCloudflareAiGatewaysResultOtelOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_ai_gateways.DataCloudflareAiGatewaysResultOtelOutputReference;

new DataCloudflareAiGatewaysResultOtelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.property.authorization">authorization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.property.headers">headers</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtel">DataCloudflareAiGatewaysResultOtel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.property.headers"></a>

```java
public StringMap getHeaders();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.property.internalValue"></a>

```java
public DataCloudflareAiGatewaysResultOtel getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtel">DataCloudflareAiGatewaysResultOtel</a>

---


### DataCloudflareAiGatewaysResultOutputReference <a name="DataCloudflareAiGatewaysResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_ai_gateways.DataCloudflareAiGatewaysResultOutputReference;

new DataCloudflareAiGatewaysResultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.authentication">authentication</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.cacheInvalidateOnUpdate">cacheInvalidateOnUpdate</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.cacheTtl">cacheTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.collectLogs">collectLogs</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.dlp">dlp</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference">DataCloudflareAiGatewaysResultDlpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.guardrails">guardrails</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference">DataCloudflareAiGatewaysResultGuardrailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.isDefault">isDefault</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.logManagement">logManagement</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.logManagementStrategy">logManagementStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.logpush">logpush</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.logpushPublicKey">logpushPublicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.modifiedAt">modifiedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.otel">otel</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList">DataCloudflareAiGatewaysResultOtelList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.rateLimitingInterval">rateLimitingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.rateLimitingLimit">rateLimitingLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.rateLimitingTechnique">rateLimitingTechnique</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.retryBackoff">retryBackoff</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.retryDelay">retryDelay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.retryMaxAttempts">retryMaxAttempts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.spendLimits">spendLimits</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference">DataCloudflareAiGatewaysResultSpendLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.storeId">storeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.stripe">stripe</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference">DataCloudflareAiGatewaysResultStripeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.workersAiBillingMode">workersAiBillingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.zdr">zdr</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResult">DataCloudflareAiGatewaysResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.authentication"></a>

```java
public IResolvable getAuthentication();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `cacheInvalidateOnUpdate`<sup>Required</sup> <a name="cacheInvalidateOnUpdate" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.cacheInvalidateOnUpdate"></a>

```java
public IResolvable getCacheInvalidateOnUpdate();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `cacheTtl`<sup>Required</sup> <a name="cacheTtl" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.cacheTtl"></a>

```java
public java.lang.Number getCacheTtl();
```

- *Type:* java.lang.Number

---

##### `collectLogs`<sup>Required</sup> <a name="collectLogs" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.collectLogs"></a>

```java
public IResolvable getCollectLogs();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `dlp`<sup>Required</sup> <a name="dlp" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.dlp"></a>

```java
public DataCloudflareAiGatewaysResultDlpOutputReference getDlp();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference">DataCloudflareAiGatewaysResultDlpOutputReference</a>

---

##### `guardrails`<sup>Required</sup> <a name="guardrails" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.guardrails"></a>

```java
public DataCloudflareAiGatewaysResultGuardrailsOutputReference getGuardrails();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference">DataCloudflareAiGatewaysResultGuardrailsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.isDefault"></a>

```java
public IResolvable getIsDefault();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `logManagement`<sup>Required</sup> <a name="logManagement" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.logManagement"></a>

```java
public java.lang.Number getLogManagement();
```

- *Type:* java.lang.Number

---

##### `logManagementStrategy`<sup>Required</sup> <a name="logManagementStrategy" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.logManagementStrategy"></a>

```java
public java.lang.String getLogManagementStrategy();
```

- *Type:* java.lang.String

---

##### `logpush`<sup>Required</sup> <a name="logpush" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.logpush"></a>

```java
public IResolvable getLogpush();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `logpushPublicKey`<sup>Required</sup> <a name="logpushPublicKey" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.logpushPublicKey"></a>

```java
public java.lang.String getLogpushPublicKey();
```

- *Type:* java.lang.String

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.modifiedAt"></a>

```java
public java.lang.String getModifiedAt();
```

- *Type:* java.lang.String

---

##### `otel`<sup>Required</sup> <a name="otel" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.otel"></a>

```java
public DataCloudflareAiGatewaysResultOtelList getOtel();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList">DataCloudflareAiGatewaysResultOtelList</a>

---

##### `rateLimitingInterval`<sup>Required</sup> <a name="rateLimitingInterval" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.rateLimitingInterval"></a>

```java
public java.lang.Number getRateLimitingInterval();
```

- *Type:* java.lang.Number

---

##### `rateLimitingLimit`<sup>Required</sup> <a name="rateLimitingLimit" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.rateLimitingLimit"></a>

```java
public java.lang.Number getRateLimitingLimit();
```

- *Type:* java.lang.Number

---

##### `rateLimitingTechnique`<sup>Required</sup> <a name="rateLimitingTechnique" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.rateLimitingTechnique"></a>

```java
public java.lang.String getRateLimitingTechnique();
```

- *Type:* java.lang.String

---

##### `retryBackoff`<sup>Required</sup> <a name="retryBackoff" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.retryBackoff"></a>

```java
public java.lang.String getRetryBackoff();
```

- *Type:* java.lang.String

---

##### `retryDelay`<sup>Required</sup> <a name="retryDelay" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.retryDelay"></a>

```java
public java.lang.Number getRetryDelay();
```

- *Type:* java.lang.Number

---

##### `retryMaxAttempts`<sup>Required</sup> <a name="retryMaxAttempts" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.retryMaxAttempts"></a>

```java
public java.lang.Number getRetryMaxAttempts();
```

- *Type:* java.lang.Number

---

##### `spendLimits`<sup>Required</sup> <a name="spendLimits" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.spendLimits"></a>

```java
public DataCloudflareAiGatewaysResultSpendLimitsOutputReference getSpendLimits();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference">DataCloudflareAiGatewaysResultSpendLimitsOutputReference</a>

---

##### `storeId`<sup>Required</sup> <a name="storeId" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.storeId"></a>

```java
public java.lang.String getStoreId();
```

- *Type:* java.lang.String

---

##### `stripe`<sup>Required</sup> <a name="stripe" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.stripe"></a>

```java
public DataCloudflareAiGatewaysResultStripeOutputReference getStripe();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference">DataCloudflareAiGatewaysResultStripeOutputReference</a>

---

##### `workersAiBillingMode`<sup>Required</sup> <a name="workersAiBillingMode" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.workersAiBillingMode"></a>

```java
public java.lang.String getWorkersAiBillingMode();
```

- *Type:* java.lang.String

---

##### `zdr`<sup>Required</sup> <a name="zdr" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.zdr"></a>

```java
public IResolvable getZdr();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.internalValue"></a>

```java
public DataCloudflareAiGatewaysResult getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResult">DataCloudflareAiGatewaysResult</a>

---


### DataCloudflareAiGatewaysResultSpendLimitsOutputReference <a name="DataCloudflareAiGatewaysResultSpendLimitsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_ai_gateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference;

new DataCloudflareAiGatewaysResultSpendLimitsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList">DataCloudflareAiGatewaysResultSpendLimitsRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimits">DataCloudflareAiGatewaysResultSpendLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.property.rules"></a>

```java
public DataCloudflareAiGatewaysResultSpendLimitsRulesList getRules();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList">DataCloudflareAiGatewaysResultSpendLimitsRulesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.property.internalValue"></a>

```java
public DataCloudflareAiGatewaysResultSpendLimits getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimits">DataCloudflareAiGatewaysResultSpendLimits</a>

---


### DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference <a name="DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_ai_gateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference;

new DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProvider">DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.property.internalValue"></a>

```java
public DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProvider getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProvider">DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProvider</a>

---


### DataCloudflareAiGatewaysResultSpendLimitsRulesList <a name="DataCloudflareAiGatewaysResultSpendLimitsRulesList" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_ai_gateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList;

new DataCloudflareAiGatewaysResultSpendLimitsRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.get"></a>

```java
public DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap <a name="DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_ai_gateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap;

new DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap.get"></a>

```java
public DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference get(java.lang.String key)
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap.get.parameter.key"></a>

- *Type:* java.lang.String

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference <a name="DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_ai_gateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference;

new DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.String complexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>java.lang.String</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* java.lang.String

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadata">DataCloudflareAiGatewaysResultSpendLimitsRulesMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.property.internalValue"></a>

```java
public DataCloudflareAiGatewaysResultSpendLimitsRulesMetadata getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadata">DataCloudflareAiGatewaysResultSpendLimitsRulesMetadata</a>

---


### DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference <a name="DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_ai_gateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference;

new DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModel">DataCloudflareAiGatewaysResultSpendLimitsRulesModel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.property.internalValue"></a>

```java
public DataCloudflareAiGatewaysResultSpendLimitsRulesModel getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModel">DataCloudflareAiGatewaysResultSpendLimitsRulesModel</a>

---


### DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference <a name="DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_ai_gateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference;

new DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.aiGatewayProvider">aiGatewayProvider</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference">DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.limit">limit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.limitType">limitType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap">DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.model">model</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference">DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.technique">technique</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.window">window</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRules">DataCloudflareAiGatewaysResultSpendLimitsRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aiGatewayProvider`<sup>Required</sup> <a name="aiGatewayProvider" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.aiGatewayProvider"></a>

```java
public DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference getAiGatewayProvider();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference">DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.limit"></a>

```java
public java.lang.Number getLimit();
```

- *Type:* java.lang.Number

---

##### `limitType`<sup>Required</sup> <a name="limitType" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.limitType"></a>

```java
public java.lang.String getLimitType();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.metadata"></a>

```java
public DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap getMetadata();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap">DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap</a>

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.model"></a>

```java
public DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference getModel();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference">DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference</a>

---

##### `technique`<sup>Required</sup> <a name="technique" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.technique"></a>

```java
public java.lang.String getTechnique();
```

- *Type:* java.lang.String

---

##### `window`<sup>Required</sup> <a name="window" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.window"></a>

```java
public java.lang.Number getWindow();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.internalValue"></a>

```java
public DataCloudflareAiGatewaysResultSpendLimitsRules getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRules">DataCloudflareAiGatewaysResultSpendLimitsRules</a>

---


### DataCloudflareAiGatewaysResultStripeOutputReference <a name="DataCloudflareAiGatewaysResultStripeOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_ai_gateways.DataCloudflareAiGatewaysResultStripeOutputReference;

new DataCloudflareAiGatewaysResultStripeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.property.authorization">authorization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.property.usageEvents">usageEvents</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList">DataCloudflareAiGatewaysResultStripeUsageEventsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripe">DataCloudflareAiGatewaysResultStripe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

---

##### `usageEvents`<sup>Required</sup> <a name="usageEvents" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.property.usageEvents"></a>

```java
public DataCloudflareAiGatewaysResultStripeUsageEventsList getUsageEvents();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList">DataCloudflareAiGatewaysResultStripeUsageEventsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.property.internalValue"></a>

```java
public DataCloudflareAiGatewaysResultStripe getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripe">DataCloudflareAiGatewaysResultStripe</a>

---


### DataCloudflareAiGatewaysResultStripeUsageEventsList <a name="DataCloudflareAiGatewaysResultStripeUsageEventsList" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_ai_gateways.DataCloudflareAiGatewaysResultStripeUsageEventsList;

new DataCloudflareAiGatewaysResultStripeUsageEventsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.get"></a>

```java
public DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference <a name="DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_ai_gateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference;

new DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.property.payload">payload</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEvents">DataCloudflareAiGatewaysResultStripeUsageEvents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.property.payload"></a>

```java
public java.lang.String getPayload();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.property.internalValue"></a>

```java
public DataCloudflareAiGatewaysResultStripeUsageEvents getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEvents">DataCloudflareAiGatewaysResultStripeUsageEvents</a>

---



