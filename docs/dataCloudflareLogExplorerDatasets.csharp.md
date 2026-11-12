# `dataCloudflareLogExplorerDatasets` Submodule <a name="`dataCloudflareLogExplorerDatasets` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareLogExplorerDatasets <a name="DataCloudflareLogExplorerDatasets" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/log_explorer_datasets cloudflare_log_explorer_datasets}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareLogExplorerDatasets(Construct Scope, string Id, DataCloudflareLogExplorerDatasetsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig">DataCloudflareLogExplorerDatasetsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig">DataCloudflareLogExplorerDatasetsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.resetIncludeZones">ResetIncludeZones</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetIncludeZones` <a name="ResetIncludeZones" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.resetIncludeZones"></a>

```csharp
private void ResetIncludeZones()
```

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.resetMaxItems"></a>

```csharp
private void ResetMaxItems()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.resetZoneId"></a>

```csharp
private void ResetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareLogExplorerDatasets resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareLogExplorerDatasets.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareLogExplorerDatasets.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareLogExplorerDatasets.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareLogExplorerDatasets.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataCloudflareLogExplorerDatasets resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareLogExplorerDatasets to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareLogExplorerDatasets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/log_explorer_datasets#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareLogExplorerDatasets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.result">Result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList">DataCloudflareLogExplorerDatasetsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.includeZonesInput">IncludeZonesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.maxItemsInput">MaxItemsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.includeZones">IncludeZones</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.maxItems">MaxItems</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.result"></a>

```csharp
public DataCloudflareLogExplorerDatasetsResultList Result { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList">DataCloudflareLogExplorerDatasetsResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `IncludeZonesInput`<sup>Optional</sup> <a name="IncludeZonesInput" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.includeZonesInput"></a>

```csharp
public bool|IResolvable IncludeZonesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.maxItemsInput"></a>

```csharp
public double MaxItemsInput { get; }
```

- *Type:* double

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `IncludeZones`<sup>Required</sup> <a name="IncludeZones" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.includeZones"></a>

```csharp
public bool|IResolvable IncludeZones { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.maxItems"></a>

```csharp
public double MaxItems { get; }
```

- *Type:* double

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareLogExplorerDatasetsConfig <a name="DataCloudflareLogExplorerDatasetsConfig" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareLogExplorerDatasetsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId = null,
    bool|IResolvable IncludeZones = null,
    double MaxItems = null,
    string ZoneId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.accountId">AccountId</a></code> | <code>string</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.includeZones">IncludeZones</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Set to true to include zone-scoped datasets belonging to this account. Only supported with account_id. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.maxItems">MaxItems</a></code> | <code>double</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/log_explorer_datasets#account_id DataCloudflareLogExplorerDatasets#account_id}

---

##### `IncludeZones`<sup>Optional</sup> <a name="IncludeZones" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.includeZones"></a>

```csharp
public bool|IResolvable IncludeZones { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Set to true to include zone-scoped datasets belonging to this account. Only supported with account_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/log_explorer_datasets#include_zones DataCloudflareLogExplorerDatasets#include_zones}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.maxItems"></a>

```csharp
public double MaxItems { get; set; }
```

- *Type:* double

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/log_explorer_datasets#max_items DataCloudflareLogExplorerDatasets#max_items}

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/log_explorer_datasets#zone_id DataCloudflareLogExplorerDatasets#zone_id}

---

### DataCloudflareLogExplorerDatasetsResult <a name="DataCloudflareLogExplorerDatasetsResult" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResult.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareLogExplorerDatasetsResult {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareLogExplorerDatasetsResultList <a name="DataCloudflareLogExplorerDatasetsResultList" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareLogExplorerDatasetsResultList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.get"></a>

```csharp
private DataCloudflareLogExplorerDatasetsResultOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareLogExplorerDatasetsResultOutputReference <a name="DataCloudflareLogExplorerDatasetsResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareLogExplorerDatasetsResultOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.dataset">Dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.datasetId">DatasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.deletionProtection">DeletionProtection</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.objectId">ObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.objectType">ObjectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResult">DataCloudflareLogExplorerDatasetsResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.dataset"></a>

```csharp
public string Dataset { get; }
```

- *Type:* string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.datasetId"></a>

```csharp
public string DatasetId { get; }
```

- *Type:* string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.deletionProtection"></a>

```csharp
public IResolvable DeletionProtection { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.objectId"></a>

```csharp
public string ObjectId { get; }
```

- *Type:* string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.objectType"></a>

```csharp
public string ObjectType { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareLogExplorerDatasetsResult InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResult">DataCloudflareLogExplorerDatasetsResult</a>

---



