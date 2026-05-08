# `dataCloudflarePageShieldScripts` Submodule <a name="`dataCloudflarePageShieldScripts` Submodule" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflarePageShieldScripts <a name="DataCloudflarePageShieldScripts" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/page_shield_scripts cloudflare_page_shield_scripts}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_page_shield_scripts.DataCloudflarePageShieldScripts;

DataCloudflarePageShieldScripts.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .scriptId(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.Initializer.parameter.scriptId">scriptId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `scriptId`<sup>Required</sup> <a name="scriptId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.Initializer.parameter.scriptId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/page_shield_scripts#script_id DataCloudflarePageShieldScripts#script_id}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/page_shield_scripts#zone_id DataCloudflarePageShieldScripts#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetZoneId` <a name="resetZoneId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.resetZoneId"></a>

```java
public void resetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflarePageShieldScripts resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_page_shield_scripts.DataCloudflarePageShieldScripts;

DataCloudflarePageShieldScripts.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_page_shield_scripts.DataCloudflarePageShieldScripts;

DataCloudflarePageShieldScripts.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.isTerraformDataSource"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_page_shield_scripts.DataCloudflarePageShieldScripts;

DataCloudflarePageShieldScripts.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_page_shield_scripts.DataCloudflarePageShieldScripts;

DataCloudflarePageShieldScripts.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflarePageShieldScripts.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataCloudflarePageShieldScripts resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflarePageShieldScripts to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflarePageShieldScripts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/page_shield_scripts#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflarePageShieldScripts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.addedAt">addedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.cryptominingScore">cryptominingScore</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.dataflowScore">dataflowScore</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.domainReportedMalicious">domainReportedMalicious</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.fetchedAt">fetchedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.firstPageUrl">firstPageUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.firstSeenAt">firstSeenAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.hash">hash</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.jsIntegrityScore">jsIntegrityScore</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.lastSeenAt">lastSeenAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.magecartScore">magecartScore</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.maliciousDomainCategories">maliciousDomainCategories</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.maliciousUrlCategories">maliciousUrlCategories</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.malwareScore">malwareScore</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.obfuscationScore">obfuscationScore</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.pageUrls">pageUrls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.urlContainsCdnCgiPath">urlContainsCdnCgiPath</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.urlReportedMalicious">urlReportedMalicious</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.versions">versions</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList">DataCloudflarePageShieldScriptsVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.scriptIdInput">scriptIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.scriptId">scriptId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `addedAt`<sup>Required</sup> <a name="addedAt" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.addedAt"></a>

```java
public java.lang.String getAddedAt();
```

- *Type:* java.lang.String

---

##### `cryptominingScore`<sup>Required</sup> <a name="cryptominingScore" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.cryptominingScore"></a>

```java
public java.lang.Number getCryptominingScore();
```

- *Type:* java.lang.Number

---

##### `dataflowScore`<sup>Required</sup> <a name="dataflowScore" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.dataflowScore"></a>

```java
public java.lang.Number getDataflowScore();
```

- *Type:* java.lang.Number

---

##### `domainReportedMalicious`<sup>Required</sup> <a name="domainReportedMalicious" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.domainReportedMalicious"></a>

```java
public IResolvable getDomainReportedMalicious();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `fetchedAt`<sup>Required</sup> <a name="fetchedAt" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.fetchedAt"></a>

```java
public java.lang.String getFetchedAt();
```

- *Type:* java.lang.String

---

##### `firstPageUrl`<sup>Required</sup> <a name="firstPageUrl" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.firstPageUrl"></a>

```java
public java.lang.String getFirstPageUrl();
```

- *Type:* java.lang.String

---

##### `firstSeenAt`<sup>Required</sup> <a name="firstSeenAt" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.firstSeenAt"></a>

```java
public java.lang.String getFirstSeenAt();
```

- *Type:* java.lang.String

---

##### `hash`<sup>Required</sup> <a name="hash" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.hash"></a>

```java
public java.lang.String getHash();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `jsIntegrityScore`<sup>Required</sup> <a name="jsIntegrityScore" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.jsIntegrityScore"></a>

```java
public java.lang.Number getJsIntegrityScore();
```

- *Type:* java.lang.Number

---

##### `lastSeenAt`<sup>Required</sup> <a name="lastSeenAt" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.lastSeenAt"></a>

```java
public java.lang.String getLastSeenAt();
```

- *Type:* java.lang.String

---

##### `magecartScore`<sup>Required</sup> <a name="magecartScore" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.magecartScore"></a>

```java
public java.lang.Number getMagecartScore();
```

- *Type:* java.lang.Number

---

##### `maliciousDomainCategories`<sup>Required</sup> <a name="maliciousDomainCategories" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.maliciousDomainCategories"></a>

```java
public java.util.List<java.lang.String> getMaliciousDomainCategories();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maliciousUrlCategories`<sup>Required</sup> <a name="maliciousUrlCategories" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.maliciousUrlCategories"></a>

```java
public java.util.List<java.lang.String> getMaliciousUrlCategories();
```

- *Type:* java.util.List<java.lang.String>

---

##### `malwareScore`<sup>Required</sup> <a name="malwareScore" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.malwareScore"></a>

```java
public java.lang.Number getMalwareScore();
```

- *Type:* java.lang.Number

---

##### `obfuscationScore`<sup>Required</sup> <a name="obfuscationScore" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.obfuscationScore"></a>

```java
public java.lang.Number getObfuscationScore();
```

- *Type:* java.lang.Number

---

##### `pageUrls`<sup>Required</sup> <a name="pageUrls" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.pageUrls"></a>

```java
public java.util.List<java.lang.String> getPageUrls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `urlContainsCdnCgiPath`<sup>Required</sup> <a name="urlContainsCdnCgiPath" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.urlContainsCdnCgiPath"></a>

```java
public IResolvable getUrlContainsCdnCgiPath();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `urlReportedMalicious`<sup>Required</sup> <a name="urlReportedMalicious" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.urlReportedMalicious"></a>

```java
public IResolvable getUrlReportedMalicious();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.versions"></a>

```java
public DataCloudflarePageShieldScriptsVersionsList getVersions();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList">DataCloudflarePageShieldScriptsVersionsList</a>

---

##### `scriptIdInput`<sup>Optional</sup> <a name="scriptIdInput" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.scriptIdInput"></a>

```java
public java.lang.String getScriptIdInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `scriptId`<sup>Required</sup> <a name="scriptId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.scriptId"></a>

```java
public java.lang.String getScriptId();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflarePageShieldScriptsConfig <a name="DataCloudflarePageShieldScriptsConfig" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_page_shield_scripts.DataCloudflarePageShieldScriptsConfig;

DataCloudflarePageShieldScriptsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .scriptId(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.scriptId">scriptId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `scriptId`<sup>Required</sup> <a name="scriptId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.scriptId"></a>

```java
public java.lang.String getScriptId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/page_shield_scripts#script_id DataCloudflarePageShieldScripts#script_id}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/page_shield_scripts#zone_id DataCloudflarePageShieldScripts#zone_id}

---

### DataCloudflarePageShieldScriptsVersions <a name="DataCloudflarePageShieldScriptsVersions" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersions.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_page_shield_scripts.DataCloudflarePageShieldScriptsVersions;

DataCloudflarePageShieldScriptsVersions.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflarePageShieldScriptsVersionsList <a name="DataCloudflarePageShieldScriptsVersionsList" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_page_shield_scripts.DataCloudflarePageShieldScriptsVersionsList;

new DataCloudflarePageShieldScriptsVersionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.get"></a>

```java
public DataCloudflarePageShieldScriptsVersionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflarePageShieldScriptsVersionsOutputReference <a name="DataCloudflarePageShieldScriptsVersionsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_page_shield_scripts.DataCloudflarePageShieldScriptsVersionsOutputReference;

new DataCloudflarePageShieldScriptsVersionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.cryptominingScore">cryptominingScore</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.dataflowScore">dataflowScore</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.fetchedAt">fetchedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.hash">hash</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.jsIntegrityScore">jsIntegrityScore</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.magecartScore">magecartScore</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.malwareScore">malwareScore</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.obfuscationScore">obfuscationScore</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersions">DataCloudflarePageShieldScriptsVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cryptominingScore`<sup>Required</sup> <a name="cryptominingScore" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.cryptominingScore"></a>

```java
public java.lang.Number getCryptominingScore();
```

- *Type:* java.lang.Number

---

##### `dataflowScore`<sup>Required</sup> <a name="dataflowScore" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.dataflowScore"></a>

```java
public java.lang.Number getDataflowScore();
```

- *Type:* java.lang.Number

---

##### `fetchedAt`<sup>Required</sup> <a name="fetchedAt" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.fetchedAt"></a>

```java
public java.lang.String getFetchedAt();
```

- *Type:* java.lang.String

---

##### `hash`<sup>Required</sup> <a name="hash" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.hash"></a>

```java
public java.lang.String getHash();
```

- *Type:* java.lang.String

---

##### `jsIntegrityScore`<sup>Required</sup> <a name="jsIntegrityScore" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.jsIntegrityScore"></a>

```java
public java.lang.Number getJsIntegrityScore();
```

- *Type:* java.lang.Number

---

##### `magecartScore`<sup>Required</sup> <a name="magecartScore" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.magecartScore"></a>

```java
public java.lang.Number getMagecartScore();
```

- *Type:* java.lang.Number

---

##### `malwareScore`<sup>Required</sup> <a name="malwareScore" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.malwareScore"></a>

```java
public java.lang.Number getMalwareScore();
```

- *Type:* java.lang.Number

---

##### `obfuscationScore`<sup>Required</sup> <a name="obfuscationScore" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.obfuscationScore"></a>

```java
public java.lang.Number getObfuscationScore();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.internalValue"></a>

```java
public DataCloudflarePageShieldScriptsVersions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersions">DataCloudflarePageShieldScriptsVersions</a>

---



