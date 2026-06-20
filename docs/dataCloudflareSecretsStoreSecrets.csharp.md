# `dataCloudflareSecretsStoreSecrets` Submodule <a name="`dataCloudflareSecretsStoreSecrets` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareSecretsStoreSecrets <a name="DataCloudflareSecretsStoreSecrets" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/secrets_store_secrets cloudflare_secrets_store_secrets}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareSecretsStoreSecrets(Construct Scope, string Id, DataCloudflareSecretsStoreSecretsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig">DataCloudflareSecretsStoreSecretsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig">DataCloudflareSecretsStoreSecretsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.resetScopes">ResetScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.resetSearch">ResetSearch</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDirection` <a name="ResetDirection" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.resetDirection"></a>

```csharp
private void ResetDirection()
```

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.resetMaxItems"></a>

```csharp
private void ResetMaxItems()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.resetOrder"></a>

```csharp
private void ResetOrder()
```

##### `ResetScopes` <a name="ResetScopes" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.resetScopes"></a>

```csharp
private void ResetScopes()
```

##### `ResetSearch` <a name="ResetSearch" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.resetSearch"></a>

```csharp
private void ResetSearch()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareSecretsStoreSecrets resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareSecretsStoreSecrets.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareSecretsStoreSecrets.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareSecretsStoreSecrets.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareSecretsStoreSecrets.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataCloudflareSecretsStoreSecrets resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareSecretsStoreSecrets to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareSecretsStoreSecrets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/secrets_store_secrets#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareSecretsStoreSecrets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.result">Result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList">DataCloudflareSecretsStoreSecretsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.directionInput">DirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.maxItemsInput">MaxItemsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.orderInput">OrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.scopesInput">ScopesInput</a></code> | <code>Io.Cdktn.IResolvable\|string[][]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.searchInput">SearchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.storeIdInput">StoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.maxItems">MaxItems</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.order">Order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.scopes">Scopes</a></code> | <code>Io.Cdktn.IResolvable\|string[][]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.search">Search</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.storeId">StoreId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.result"></a>

```csharp
public DataCloudflareSecretsStoreSecretsResultList Result { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList">DataCloudflareSecretsStoreSecretsResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.directionInput"></a>

```csharp
public string DirectionInput { get; }
```

- *Type:* string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.maxItemsInput"></a>

```csharp
public double MaxItemsInput { get; }
```

- *Type:* double

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.orderInput"></a>

```csharp
public string OrderInput { get; }
```

- *Type:* string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.scopesInput"></a>

```csharp
public IResolvable|string[][] ScopesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|string[][]

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.searchInput"></a>

```csharp
public string SearchInput { get; }
```

- *Type:* string

---

##### `StoreIdInput`<sup>Optional</sup> <a name="StoreIdInput" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.storeIdInput"></a>

```csharp
public string StoreIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.maxItems"></a>

```csharp
public double MaxItems { get; }
```

- *Type:* double

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.order"></a>

```csharp
public string Order { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.scopes"></a>

```csharp
public IResolvable|string[][] Scopes { get; }
```

- *Type:* Io.Cdktn.IResolvable|string[][]

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.search"></a>

```csharp
public string Search { get; }
```

- *Type:* string

---

##### `StoreId`<sup>Required</sup> <a name="StoreId" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.storeId"></a>

```csharp
public string StoreId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareSecretsStoreSecretsConfig <a name="DataCloudflareSecretsStoreSecretsConfig" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareSecretsStoreSecretsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    string StoreId,
    string Direction = null,
    double MaxItems = null,
    string Order = null,
    IResolvable|string[][] Scopes = null,
    string Search = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.accountId">AccountId</a></code> | <code>string</code> | Account Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.storeId">StoreId</a></code> | <code>string</code> | Store Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.direction">Direction</a></code> | <code>string</code> | Direction to sort objects Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.maxItems">MaxItems</a></code> | <code>double</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.order">Order</a></code> | <code>string</code> | Order secrets by values in the given field Available values: "name", "comment", "created", "modified", "status". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.scopes">Scopes</a></code> | <code>Io.Cdktn.IResolvable\|string[][]</code> | Only secrets with the given scopes will be returned. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.search">Search</a></code> | <code>string</code> | Search secrets using a filter string, filtering across name and comment. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Account Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/secrets_store_secrets#account_id DataCloudflareSecretsStoreSecrets#account_id}

---

##### `StoreId`<sup>Required</sup> <a name="StoreId" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.storeId"></a>

```csharp
public string StoreId { get; set; }
```

- *Type:* string

Store Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/secrets_store_secrets#store_id DataCloudflareSecretsStoreSecrets#store_id}

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.direction"></a>

```csharp
public string Direction { get; set; }
```

- *Type:* string

Direction to sort objects Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/secrets_store_secrets#direction DataCloudflareSecretsStoreSecrets#direction}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.maxItems"></a>

```csharp
public double MaxItems { get; set; }
```

- *Type:* double

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/secrets_store_secrets#max_items DataCloudflareSecretsStoreSecrets#max_items}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.order"></a>

```csharp
public string Order { get; set; }
```

- *Type:* string

Order secrets by values in the given field Available values: "name", "comment", "created", "modified", "status".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/secrets_store_secrets#order DataCloudflareSecretsStoreSecrets#order}

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.scopes"></a>

```csharp
public IResolvable|string[][] Scopes { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|string[][]

Only secrets with the given scopes will be returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/secrets_store_secrets#scopes DataCloudflareSecretsStoreSecrets#scopes}

---

##### `Search`<sup>Optional</sup> <a name="Search" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.search"></a>

```csharp
public string Search { get; set; }
```

- *Type:* string

Search secrets using a filter string, filtering across name and comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/secrets_store_secrets#search DataCloudflareSecretsStoreSecrets#search}

---

### DataCloudflareSecretsStoreSecretsResult <a name="DataCloudflareSecretsStoreSecretsResult" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResult.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareSecretsStoreSecretsResult {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareSecretsStoreSecretsResultList <a name="DataCloudflareSecretsStoreSecretsResultList" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareSecretsStoreSecretsResultList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.get"></a>

```csharp
private DataCloudflareSecretsStoreSecretsResultOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareSecretsStoreSecretsResultOutputReference <a name="DataCloudflareSecretsStoreSecretsResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareSecretsStoreSecretsResultOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.property.modified">Modified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.property.storeId">StoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResult">DataCloudflareSecretsStoreSecretsResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Modified`<sup>Required</sup> <a name="Modified" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.property.modified"></a>

```csharp
public string Modified { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StoreId`<sup>Required</sup> <a name="StoreId" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.property.storeId"></a>

```csharp
public string StoreId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareSecretsStoreSecretsResult InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResult">DataCloudflareSecretsStoreSecretsResult</a>

---



